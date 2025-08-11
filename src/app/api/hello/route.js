// app/api/hello/route.js

export async function GET() {
  return new Response(
    JSON.stringify({ message: "Hello from API!" }),
    { status: 200, headers: { "Content-Type": "application/json" } }
  );
}

export async function POST(request) {
  const body = await request.json();
  return new Response(
    JSON.stringify({ message: "Data received", data: body }),
    { status: 201, headers: { "Content-Type": "application/json" } }
  );
}
