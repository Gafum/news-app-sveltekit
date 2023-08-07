<script>
	/** @type {import('./$types').PageData} */
	import ListGenerator from "$lib/components/listGenerator.svelte";
	import { page } from "$app/stores";

	export let data;
	let newsList = [];
	$: {
		if (data) {
			newsList = data.data;
		} else {
			newsList = [];
			console.log("404");
		}
	}
</script>

<div class="cagtegory-wrapper">
	<h3>{$page.params.classId.toString().toUpperCase()}</h3>
	<ListGenerator {newsList} />
</div>

<style>
	.cagtegory-wrapper {
		padding: 20px;
	}
	h3 {
		color: #096ffa;
		font-size: 20px;
		font-weight: 800;
		line-height: 30px;
		text-transform: capitalize;
		border-bottom: 1px solid #ededed;
		padding-bottom: 16px;
	}
</style>
