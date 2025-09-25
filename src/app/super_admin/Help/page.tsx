import React from "react";

const PackagesPage: React.FC = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <section className="max-w-3xl w-full bg-white rounded-2xl shadow-md p-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">🔐 Account Help</h1>
        <p className="text-gray-600 text-left">
          <strong>Forgot Super Admin / Sub Admin Password?</strong><br /><br />

          If you're unable to log in as a Super Admin or Sub Admin, follow these steps:
          <ol className="list-decimal list-inside mt-2 text-left text-gray-700 space-y-2">
            <li><strong>Super Admin:</strong> Contact the developer or hosting provider to reset your password directly from the database (e.g., MySQL, MongoDB).</li>
            <li><strong>Sub Admin:</strong> Request the Super Admin to reset your password via the admin panel.</li>
            <li>Make sure to always keep a backup email or phone number configured for account recovery (if your system supports it).</li>
            <li>Enable 2FA (Two-Factor Authentication) for better security.</li>
          </ol>

          <br />

          If no access is available to the server or admin tools, use a secure script or database query to manually update the password hash in the database.
        </p>
      </section>
    </main>
  );
};

export default PackagesPage;
