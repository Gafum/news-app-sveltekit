<script>
	import CustomButtom from "$lib/components/customButtom.svelte";
	import MainForm from "$lib/components/mainForm.svelte";
	import { goto } from "$app/navigation";

	export let data;
</script>

{#if data.data}
	<form action="?/createNews" method="post">
		<MainForm />
	</form>
{:else}
	<CustomButtom title="Login" on:click={() => goto("/login")} />
{/if}

<style lang="scss">
	form {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		align-content: center;
		width: 100%;
		padding: 20px;
		gap: 20px;
	}
</style>
