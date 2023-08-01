import { redirect, fail } from "@sveltejs/kit";

/** @type {import('./$types').PageServerLoad} */
export async function load({ url, locals: { supabase } }) {
	/* Get Params */
	let searchText = url.searchParams.get("text");
	if (!searchText) return { data: [] };

	/* Request */
	let { data, error } = await supabase
		.from("news")
		.select("*")
		.textSearch("content", searchText.toString());

	/* Catch Error */
	if (error) {
		console.log(error);
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
		if (!searchText) return fail(400);

		throw redirect(303, `/search?text=${searchText}`);
	}
};
