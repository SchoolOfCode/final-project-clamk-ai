"use server";

import supabase from "@/lib/supabase";

export async function addItem(itemName) {
  const { data, error } = await supabase
    .from("your_table")
    .insert([{ name: itemName }]);

  if (error) throw new Error(error.message);
  return data;
}
