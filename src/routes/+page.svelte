<script>
	import TopNews from "../lib/components/topNews.svelte";
	import OneNews from "../lib/components/oneNews.svelte";

	const newsList = [
		{
			title: "Big Tech is making its stuff slower and stupider — on purpose",
			myImg: "#000",
			myClass: "Reuters",
			myDescription:
				"Massive cuts at tech giants like Meta and Microsoft dominate headlines, but don’t tell the whole story. Here’s a full picture of job cuts around the world."
		},
		{
			title: "Global Layoffs Extend Far Beyond Big Tech",
			myImg: "#000",
			myClass: "Bloomberg",
			myDescription:
				"Google, Amazon, and Meta are making their core products worse — on purpose. The user's experience has become subordinate"
		},
		{
			title: "Work Shift: The Future of Work at SXSW",
			myImg: "#000",
			myClass: "Bloomberg",
			myDescription:
				"Welcome to this week’s edition of the Work Shift newsletter. If you aren’t signed up already to receive it, you can do so here"
		}
	];
</script>

<nav>
	<li><a href="/business">Business</a></li>
	<li><a href="/entertainment">Entertainment</a></li>
	<li><a href="/general">General</a></li>
	<li><a href="/health">Health</a></li>
	<li><a href="/science">Science</a></li>
</nav>

<TopNews />

{#each newsList as news}
	<OneNews {...news} />
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
