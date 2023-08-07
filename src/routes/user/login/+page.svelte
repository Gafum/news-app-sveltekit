<script>
	import CustomButton from "$lib/components/customButton.svelte";
	import CustomInput from "$lib/components/customInput.svelte";
</script>

<form action="?/login" method="post">
	<h2>Log In</h2>
	<CustomInput myName="email" placeholder="Your Email" type="email" />
	<CustomInput myName="password" placeholder="password" type="password" />
	<a href="/user/register">I have not account</a>
	<CustomButton title="Log In" />
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
