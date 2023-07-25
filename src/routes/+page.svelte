<script>
	import TopNews from "$lib/components/topNews.svelte";
	import OneNews from "$lib/components/oneNews.svelte";
	import findMax from "$lib/functions/findMax";
	export let data;
	let top, newsList;
	if (data) {
		top = data.data[findMax(data.data.map(({ likes }) => Number(likes)))];
		newsList = data.data;
	} else {
		console.log("404");
	}
</script>

<div class="wrapper">
	<nav>
		<li><a href="/business">Business</a></li>
		<li><a href="/entertainment">Entertainment</a></li>
		<li><a href="/general">General</a></li>
		<li><a href="/health">Health</a></li>
		<li><a href="/science">Science</a></li>
	</nav>

	<h2>Top Headlines</h2>

	<a href="/news/{top.id}">
		<TopNews title={top.title} myClass={top.class} />
	</a>

	{#each newsList as news}
		<a href="/news/{news.id}">
			<OneNews title={news.title} myClass={news.class} myDescription={news.content} />
		</a>
	{:else}
		<h2>Loading</h2>
	{/each}
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
		display: flex;
		justify-content: center;
		align-items: center;
		align-content: center;
		gap: 12px;
		margin-top: 20px;
		overflow-x: scroll;
		overflow-y: hidden;
		a {
			font-size: 16px;
		}
	}
</style>
