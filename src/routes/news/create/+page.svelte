<script>
	import CustomButton from "$lib/components/customButton.svelte";
	import MainForm from "$lib/components/mainForm.svelte";
	import { goto } from "$app/navigation";

	export let data = false;
</script>

{#if data.data}
	<form action="?/createNews" method="post">
		<MainForm />
	</form>
{:else}
	<CustomButton title="Login" on:click={() => goto("/login")} />
{/if}

<style lang="scss">
	form {
		width: 100%;
	}
</style>
