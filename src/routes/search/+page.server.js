import supabase from "$lib/db";
import { redirect } from "@sveltejs/kit";
import { fail } from "assert";

/** @type {import('./$types').PageServerLoad} */
export async function load({ url }) {
	let searchText = url.searchParams.get("text");
	if (!searchText) return { data: [] };
	let { data, error } = await supabase
		.from("news")
		.select("*")
		.textSearch("content", searchText.toString());
	if (error) {
		console.log(error);
		return { data: [] };
	}
	console.log("my Data:", data);
	return { data };
}

/** @type {import('./$types').Actions} */
export const actions = {
	search: async ({ request }) => {
		const data = await request.formData();
		let searchText = data.get("searchText");
		if (!searchText) return fail(400);
		console.log(searchText);
		throw redirect(303, `/search?text=${searchText}`);
	}
};
