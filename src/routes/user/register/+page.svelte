<script>
	import CustomButton from "$lib/components/customButton.svelte";
	import CustomInput from "$lib/components/customInput.svelte";
</script>

<form action="?/register" method="post">
	<h2>Register</h2>
	<CustomInput myName="email" placeholder="Your Email" type="email" />
	<CustomInput myName="password" placeholder="password" type="password" />
	<a href="/user/login">I already have an account</a>
	<CustomButton title="Sing Up" />
</form>

<style>
	form {
		padding: 20px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		align-content: center;
		gap: 10px;
	}
	a {
		text-decoration: underline;
		text-align: left;
	}
</style>
