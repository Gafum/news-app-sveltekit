<script>
	import TopNews from "$lib/components/topNews.svelte";
	import ListGenerator from "$lib/components/listGenerator.svelte";
	import findMax from "$lib/functions/findMax";
	import categoryList from "$lib/const/categoryList.js";
	export let data;
	let top = { id: "1", title: "Waiting...", class: "Technology" },
		newsList = [];
	if (data && data.data) {
		top = data.data[findMax(data.data.map(({ views }) => Number(views)))];
		newsList = data.data;
	} else {
		console.log("404");
	}
</script>

<div class="wrapper">
	<nav>
		{#each categoryList as category}
			<div><a href="/category/{category}">{category}</a></div>
		{/each}
	</nav>

	<h2>Top Headlines</h2>

	<a href="/news/{top.id}">
		<TopNews title={top.title} myClass={top.class} />
	</a>
	<ListGenerator {newsList} />
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
		display: flex;
		justify-content: center;
		align-items: center;
		align-content: center;
		gap: 12px;
		margin: 20px 0 15px;
		overflow-x: scroll;
		overflow-y: hidden;
		a {
			font-size: 16px;
			text-transform: capitalize;
		}
	}
</style>
