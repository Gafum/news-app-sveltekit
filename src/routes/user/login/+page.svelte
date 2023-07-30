<script>
	import CustomButtom from "$lib/components/customButtom.svelte";
	import CustomInput from "$lib/components/customInput.svelte";
</script>

<form action="?/register" method="post">
	<h2>Log In</h2>
	<CustomInput myName="email" placeholder="Your Email" type="email" />
	<CustomInput myName="password" placeholder="password" type="password" />
	<a href="/user/register">I have not account</a>
	<CustomButtom title="Log In" />
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
