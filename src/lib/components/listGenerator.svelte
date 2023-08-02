<script>
	import OneNews from "./oneNews.svelte";
	export let newsList = [];
</script>

<div class="newsList">
	{#each newsList as news}
		<a href="/news/{news.id}">
			<OneNews title={news.title} myClass={news.class} myDescription={news.content} />
		</a>
	{:else}
		<h2>Not Items</h2>
	{/each}
</div>

<style>
	h2 {
		margin-top: 20px;
	}

	.newsList {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 24px;

		@media (max-width: 900px) {
			grid-template-columns: repeat(2, 1fr);
		}
		@media (max-width: 600px) {
			grid-template-columns: repeat(1, 1fr);
		}
	}
</style>
