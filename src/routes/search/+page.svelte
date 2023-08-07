<script>
	import ListGenerator from "$lib/components/ListGenerator.svelte";
	import CustomInput from "../../lib/components/customInput.svelte";
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<div class="search-wrapper">
	<form method="post" action="?/search">
		<CustomInput myName="searchText" placeholder="Find News..." />
	</form>
	{#if data.data}
		<ListGenerator newsList={data.data} />
	{:else}
		<h2>Not Found</h2>
	{/if}
</div>

<style>
	.search-wrapper {
		padding: 32px 20px;
	}
</style>
