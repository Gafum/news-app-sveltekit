import categoryList from "$lib/const/categoryList";
import supabase from "$lib/db";
import { redirect } from "@sveltejs/kit";
import { fail } from "assert";

/** @type {import('./$types').Actions} */
export const actions = {
	createNews: async ({ request }) => {
		const params = await request.formData();
		let title = params.get("myTitle");
		let content = params.get("myContent");
		let myClass = params.get("myClass");
		if (!title || !content || !categoryList.includes(myClass)) return fail(400);
		const { data, error } = await supabase
			.from("news")
			.insert([{ title, content, class: myClass }])
			.select();
		if (error) {
			throw redirect(303, "/");
		}
		console.log(data);
		throw redirect(303, `/news/${data[0].id}`);
	}
};
