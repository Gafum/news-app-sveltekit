<script>
	import { createEventDispatcher } from "svelte";
	import OneNews from "./oneNews.svelte";
	export let newsList = [],
		addNews = true;
	const dispatcher = createEventDispatcher();

	function scroll() {
		const bottomLine = document.querySelector(".bottom-line");
		if (bottomLine.getBoundingClientRect().top <= window.innerHeight) {
			dispatcher("seen-all", { message: { length: newsList.length } });
		}
	}
</script>

<svelte:document on:scroll={scroll} />

<div class="newsList">
	{#each newsList || [] as news}
		<a href="/news/{news.id}">
			<OneNews
				title={news.title}
				myClass={news.class}
				myDescription={news.content}
				imgURL={news.imgURL}
			/>
		</a>
	{:else}
		<h2>Not Items</h2>
	{/each}
	<h2 class="bottom-line">
		{#if !addNews}
			Loading...
		{/if}
	</h2>
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
