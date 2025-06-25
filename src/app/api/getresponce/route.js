export async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);
        const pan = searchParams.get("pan");

        if (!pan) {
            return Response.json({ error: "Missing PAN parameter" }, { status: 400 });
        }

        const apiUrl = `https://tossconsultancyservices.com/ensurekar-dashboard/verify_response.php?pan=${encodeURIComponent(pan)}`;

        const apiResponse = await fetch(apiUrl);
        const responseData = await apiResponse.json(); // Directly parse JSON response

        return Response.json(responseData);

    } catch (error) {
        console.error('Error:', error);
        return Response.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
