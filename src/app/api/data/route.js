import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server.js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export async function GET() {
  const { data, error } = await supabase.from("communities").select("*");
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  console.log(JSON.stringify(data, null, 2));
  return NextResponse.json(data, { status: 200 });
}
