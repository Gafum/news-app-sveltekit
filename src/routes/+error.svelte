<script>
	import { page } from "$app/stores";
	import CustomButton from "$lib/components/customButton.svelte";
	import { goto } from "$app/navigation";
</script>

<div class="error-centre">
	<h1>ERROR {$page.status}</h1>

	<p>{$page.error.message}</p>

	<div class="error-centre_btn">
		<CustomButton style="max-width: 60vw;" on:click={() => goto("/")} title="Go Home" />
	</div>
</div>

<style>
	h1 {
		font-weight: bold;
		font-size: 40px;
	}
	.error-centre {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		align-content: center;
		gap: 40px;
		padding: 100px 20px;
	}
	.error-centre_btn {
		min-width: 240px;
		max-width: 60vw;
	}
</style>
