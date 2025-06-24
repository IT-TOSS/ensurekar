"use client"
import { useState } from "react";

export default function Home() {
  const [encResp, setEncResp] = useState("");
  const [response, setResponse] = useState("");

  const callAPI = async () => {
    if (!encResp) {
      alert("Please enter the encrypted response.");
      return;
    }

    try {
      const res = await fetch("/api/payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({ encResp }),
      });

      const data = await res.json();
      setResponse(JSON.stringify(data, null, 2));
    } catch (error) {
      console.error(error);
      setResponse("Error occurred");
    }
  };

  return (
    <div style={{ padding: "20px" }} >
      <h1 className="text-black dark:text-white">Encrypted Data Sender</h1>
      <textarea
        placeholder="Paste your encrypted string here"
        rows={4}
        cols={50}
        value={encResp}
        onChange={(e) => setEncResp(e.target.value)}
        className="mt-[67px]"
      />
      <br />
      <button onClick={callAPI} style={{ marginTop: "10px" }}>
        Send to API
      </button>

      <h2>API Response:</h2>
      <pre>{response}</pre>
    </div>
  );
}
