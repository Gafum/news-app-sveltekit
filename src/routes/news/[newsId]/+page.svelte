<script>
	/** @type {import('./$types').PageData} */
	export let data;
	let { title = "", content = "", author = "" } = data;
	$: {
		if (data) {
			title = data.title;
			content = data.content;
			author = data.author;
		}
	}
</script>

{#if data.message == "404"}
	<div class="wrapper">
		<h2>Page not found</h2>
	</div>
{:else}
	<div style="background-color: #096ffa;" class="one-news-img" />
	<div class="wrapper">
		<h2>{title}</h2>
		<h4 class="create-by">{author}</h4>
		<p>{content}</p>
	</div>
{/if}

<style>
	.wrapper {
		padding: 0 20px;
	}
	.one-news-img {
		height: 270px;
		width: 100%;
		border-bottom-left-radius: 20px;
		border-bottom-right-radius: 20px;
		background-size: cover;
	}
	h2,
	p,
	.create-by {
		margin-top: 16px;
		text-align: left;
	}
	.create-by {
		text-align: left;
		font-size: 14px;
	}
</style>
