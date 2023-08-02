<script>
	import CustomButtom from "$lib/components/customButtom.svelte";
	import MainForm from "$lib/components/mainForm.svelte";
	import { goto } from "$app/navigation";

	export let data = false;
</script>

{#if data.data}
	<form action="?/updateNews" method="post">
		<MainForm {...data.data} submitText="Update" />
	</form>
{:else}
	<CustomButtom title="Login" on:click={() => goto("/login")} />
{/if}

<style>
	form {
		width: 100%;
	}
</style>
