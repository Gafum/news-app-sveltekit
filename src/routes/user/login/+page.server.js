import { redirect } from "@sveltejs/kit";
import supabase from "$lib/db";

export const actions = {
	register: async ({ request, cockie }) => {
		const params = await request.formData();
		const email = params.get("email");
		const password = params.get("password");
		let { data, error } = await supabase.auth.signIn({
			email,
			password
		});

		if (error) {
			console.log(error);
			return { message: "error" };
		}
		console.log(data);
		throw redirect(303, "/");
	}
};
