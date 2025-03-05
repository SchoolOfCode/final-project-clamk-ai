import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";
dotenv.config();

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SECRET_KEY
);

export async function GET() {
  const { data, error } = await supabase.from("communities").select("*");

  if (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
  console.log(getCommunities);
  return Response.json(data, { status: 200 });
}
