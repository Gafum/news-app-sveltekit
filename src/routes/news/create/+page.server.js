import categoryList from "$lib/const/categoryList";

import { redirect, error } from "@sveltejs/kit";

/** @type {import('./$types').PageLoad} */
export async function load({ parent }) {
	/* Check for Auth */
	const { session } = await parent();
	if (!session) {
		throw redirect(303, "/user");
	}
	return { data: true };
}

/** @type {import('./$types').Actions} */
export const actions = {
	createNews: async ({ request, locals: { supabase, getSession } }) => {
		/* Get user`s email */
		const session = await getSession();
		if (!session) {
			throw error(400, { message: "You are not login" });
		}

		/* Get Params */
		const params = await request.formData();
		let title = params.get("myTitle");
		let content = params.get("myContent");
		let myClass = params.get("myClass");
		if (!title || !content || !categoryList.includes(myClass)) {
			throw error(400, { message: "Give the right data" });
		}

		/* main request */
		const { data, error: err } = await supabase
			.from("news")
			.insert([{ title, content, class: myClass, created_by: session.user.email.toString() }])
			.select();

		if (err) {
			throw redirect(303, "/");
		}

		throw redirect(303, `/news/${data[0].id}`);
	}
};
