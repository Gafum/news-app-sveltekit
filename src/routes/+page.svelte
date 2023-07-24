<script>
	import TopNews from "$lib/components/topNews.svelte";
	import OneNews from "$lib/components/oneNews.svelte";
	import findMax from "$lib/functions/findMax";
	/** @type {import('./$types').PageData} */
	export let data;

	let top = data.data[findMax(data.data.map(({ likes }) => Number(likes)))];
	const newsList = data.data;
</script>

<nav>
	<li><a href="/business">Business</a></li>
	<li><a href="/entertainment">Entertainment</a></li>
	<li><a href="/general">General</a></li>
	<li><a href="/health">Health</a></li>
	<li><a href="/science">Science</a></li>
</nav>

<TopNews title={top.title} myClass={top.class} />

{#each newsList as news}
	<OneNews title={news.title} myClass={news.class} myDescription={news.content} />
{:else}
	<h2>Loading</h2>
{/each}

<style lang="scss">
	::-webkit-scrollbar {
		height: 0;
		width: 0;
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
