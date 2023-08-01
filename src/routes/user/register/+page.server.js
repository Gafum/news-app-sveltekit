import { redirect } from "@sveltejs/kit";
import { AuthApiError } from "@supabase/supabase-js";

/** @type {import('./$types').Actions} */
export const actions = {
	login: async ({ request, locals: { supabase } }) => {
		/* Get Params */
		const params = await request.formData();
		const email = params.get("email");
		const password = params.get("password");

		/* request */
		let { error } = await supabase.auth.signUp({
			email,
			password
		});
		/* Catch error */
		if (error) {
			if (error instanceof AuthApiError && error.status === 400) {
				return fail(400, {
					error: "Invalid credentials.",
					values: {
						email
					}
				});
			}
			return fail(500, {
				error: "Server error. Try again later.",
				values: {
					email
				}
			});
		}
		
		throw redirect(303, "/");
	}
};
