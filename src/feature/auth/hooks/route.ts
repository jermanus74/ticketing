// import { NextResponse } from "next/server";
// import { SignupSchema } from "../schemas/SignUpSchema";

// export async function POST(req: Request) {
//   try {
//     const body = await req.json();
//     const parsed = SignupSchema.parse(body);

//     const backendRes = await fetch(" http://localhost:8080/api/auth/signup", {
//       method: "POST",
//       headers: { "Content-Type": "application/json", "Accept": "application/json", "Access-Control-Allow-Origin": "*" },
//       body: JSON.stringify(parsed),
//     });

//     const data = await backendRes.json();

//     if (!backendRes.ok) {
//       return NextResponse.json({ error: data.error || "Signup failed" }, { status: 400 });
//     }

//     return NextResponse.json(data, { status: 200 });
//   } catch (err: unknown) {
//     const errorMessage = err instanceof Error ? err.message : "An unknown error occurred";
//     return NextResponse.json({ error: errorMessage }, { status: 400 });
//   }
// }
