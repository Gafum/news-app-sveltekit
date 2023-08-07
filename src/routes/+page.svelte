<script>
	import TopNews from "$lib/components/topNews.svelte";
	import ListGenerator from "$lib/components/listGenerator.svelte";
	import findMax from "$lib/functions/findMax";
	import categoryList from "$lib/const/categoryList.js";
	export let data;

	let addNews = false;

	/* Get Top news */
	let top = { id: "1", title: "Waiting...", class: "Technology", imgURL: undefined },
		newsList = [];

	/* Set Data */
	if (data && data.data) {
		top = data.data[findMax(data.data.map(({ views }) => Number(views)))];
		newsList = data.data;
	} else {
		console.log("404");
	}

	async function getNews(event) {
		try {
			if (addNews) return;
			addNews = true;

			/* Create data */
			const formData = new FormData();
			formData.append("oldLength", event.detail.message.length.toString());

			/* Request */
			const response = await fetch("?/getNews", {
				method: "POST",
				body: formData
			});
			if (!response.ok) {
				throw new Error("Failed to fetch latest news.");
			}

			/* Prse data */
			const data = await response.json();
			let newNews = JSON.parse(JSON.parse(data.data)[0]);
			if (!newNews) {
				throw new Error("Failed to fetch latest news.");
			}

			/* Set Data */
			if (newsList.length === event.detail.message.length) {
				if (newNews.length === 0) {
					return;
				}
				newsList = [...newsList, ...newNews];
			}
		} catch (error) {
			console.error("Error deleting news:", error);
		}
		addNews = false;
	}
</script>

<div class="wrapper">
	<nav>
		{#each categoryList as category}
			<a href="/category/{category}">{category}</a>
		{/each}
	</nav>

	{#if top.imgURL}
		<h2>Top Headlines</h2>

		<a href="/news/{top.id}" class="top-news">
			<TopNews title={top.title} myClass={top.class} imgURL={top.imgURL} />
		</a>
	{/if}
	<ListGenerator {newsList} on:seen-all={getNews} {addNews} />
</div>

<style lang="scss">
	::-webkit-scrollbar {
		height: 0;
		width: 0;
	}
	.wrapper {
		padding: 0 20px;
	}
	nav {
		max-width: 95vw;
		width: 100%;
		margin: 20px auto 15px;
		overflow: scroll;
		overflow-x: auto;
		scrollbar-width: none;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 15px;
		a {
			display: block;
			font-size: 16px;
			text-transform: capitalize;
		}
		@media (max-width: 450px) {
			& {
				justify-content: space-between;
			}
		}
	}
	@media (pointer: fine) {
		.top-news:hover {
			opacity: 0.93;
		}
	}
	@media (pointer: coarse) {
		.top-news:active {
			opacity: 0.93;
		}
	}
</style>
