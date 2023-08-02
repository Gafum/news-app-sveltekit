import { fail } from "@sveltejs/kit";

export async function load({ parent, locals: { supabase } }) {
	let { data, error } = await supabase.from("news").select("*").range(0, 12);
	if (error) return fail(500);
	const { session } = await parent();
	return { data: data || [], session };
}
