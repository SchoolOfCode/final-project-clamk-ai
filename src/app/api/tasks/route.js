import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

// Create a Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

// Define the GET handler for the API route
export async function GET() {
  const { data, error } = await supabase.from("Tasks").select("*");

  if (error) {
    return new NextResponse(
      JSON.stringify({ error: "Supabase query failed" }),
      { status: 500 }
    );
  }

  console.log(JSON.stringify(data, null, 2));
  return new NextResponse(JSON.stringify(data), { status: 200 });
}

console.log(GET()); // This is just for testing purposes
