<script>
	import CustomButtom from "$lib/components/customButtom.svelte";
	import { goto } from "$app/navigation";
</script>

<main>
	<CustomButtom title="Create News" on:click={() => goto("/user/create")} />

	<form action="?/logout" method="post">
		<CustomButtom title="Log out" />
	</form>
</main>

<style>
	main {
		padding: 20px;
	}
	form {
		margin-top: 10px;
	}
</style>
