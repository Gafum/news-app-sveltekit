import categoryList from "$lib/const/categoryList";

import { redirect, fail } from "@sveltejs/kit";

/** @type {import('./$types').PageLoad} */
export async function load({ parent }) {
	/* Check for Auth */
	const { session } = await parent();
	if (!session) {
		throw redirect(303, "/user");
		return { data: false };
	}
	return { data: true };
}

/** @type {import('./$types').Actions} */
export const actions = {
	createNews: async ({ request, locals: { supabase, getSession } }) => {
		/* Get user`s email */
		const session = await getSession();
		if (!session) return fail(400);

		/* Get Params */
		const params = await request.formData();
		let title = params.get("myTitle");
		let content = params.get("myContent");
		let myClass = params.get("myClass");
		if (!title || !content || !categoryList.includes(myClass)) return fail(400);

		/* main request */
		const { data, error } = await supabase
			.from("news")
			.insert([{ title, content, class: myClass, created_by: session.user.email.toString() }])
			.select();

		if (error) {
			throw redirect(303, "/");
		}

		throw redirect(303, `/news/${data[0].id}`);
	}
};
