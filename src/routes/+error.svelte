<script>
	import { page } from "$app/stores";
	import CustomButtom from "$lib/components/customButtom.svelte";
	import { goto } from "$app/navigation";
</script>

<div class="wrapper">
	<h1>ERROR {$page.status}</h1>

	<p>{$page.error.message}</p>

	<div class="wrapper_btn">
		<CustomButtom style="max-width: 60vw;" on:click={() => goto("/")} title="Go Home" />
	</div>
</div>

<style>
	h1 {
		font-weight: bold;
		font-size: 40px;
	}
	.wrapper {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		align-content: center;
		gap: 40px;
		padding: 100px 20px;
	}
	.wrapper_btn {
		min-width: 240px;
		max-width: 60vw;
	}
</style>
