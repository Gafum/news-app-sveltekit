import supabase from "$lib/db";
import { fail } from "assert";

export async function load() {
	let { data, error } = await supabase.from("news").select("*").range(0, 12);
	if (error) return fail(500);
	return { data: data || [] };
}
