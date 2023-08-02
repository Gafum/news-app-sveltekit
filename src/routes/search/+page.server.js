import { redirect, error } from "@sveltejs/kit";

/** @type {import('./$types').PageServerLoad} */
export async function load({ url, locals: { supabase } }) {
	/* Get Params */
	let searchText = url.searchParams.get("text");
	if (!searchText) return { data: [] };

	/* Request */
	let { data, error: err } = await supabase
		.from("news")
		.select("*")
		.textSearch("content", searchText.toString());

	/* Catch Error */
	if (err) {
		return { data: [] };
	}

	return { data };
}

/** @type {import('./$types').Actions} */
export const actions = {
	search: async ({ request }) => {
		/* Get Params */
		const data = await request.formData();
		let searchText = data.get("searchText");
		if (!searchText) throw error(400, { message: "Give the right data" });

		throw redirect(303, `/search?text=${searchText}`);
	}
};
