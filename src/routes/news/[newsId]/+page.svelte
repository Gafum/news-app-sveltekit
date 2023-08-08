<script>
	import { goto } from "$app/navigation";
	/** @type {import('./$types').PageData} */
	export let data;
	let { title = "", content = "", author = "", myNews = false, imgURL = undefined } = data;
	$: {
		if (data) {
			title = data.title;
			content = data.content;
			author = data.author;
			myNews = data.myNews;
		}
	}

	async function deleteNews() {
		try {
			if (!confirm("Do you want to delete this news?")) return;
			const response = await fetch("?/deleteNews", {
				method: "POST",
				body: "test"
			});
			if (response.ok) {
				console.log("redirect");
				goto("/");
			}
		} catch (error) {
			console.error("Error deleting news:", error);
		}
	}
</script>

{#if data}
	<div class="main-data">
		{#if imgURL}
			<img width="700" src={imgURL} height="auto" class="one-news-img" alt="img for {title}" />
		{/if}
		<div class="news-wrapper">
			<h2>
				{title}
			</h2>
			<h4 class="create-by">
				<span>{author}</span>
				{#if myNews}
					<button type="button" on:click={deleteNews}>
						<svg viewBox="0 0 24 24" width="20" height="20">
							<path
								d="M20 3h-5.18a2.988 2.988 0 0 0-5.64 0H4a2 2 0 0 0 0 4v13.89A2.117 2.117 0 0 0 6.11 23h11.78A2.117 2.117 0 0 0 20 20.89V7a2 2 0 0 0 0-4ZM9 18a1 1 0 0 1-2 0v-7a1 1 0 0 1 2 0Zm4 0a1 1 0 0 1-2 0v-7a1 1 0 0 1 2 0Zm4 0a1 1 0 0 1-2 0v-7a1 1 0 0 1 2 0Z"
							/>
						</svg>
					</button>
					<form action="?/goToUpdate" method="post">
						<button>
							<svg width="24" height="24" viewBox="0 0 24 24">
								<path
									d="M17.864 3.6a1 1 0 0 0-1.414 0l-1.414 1.415 4.242 4.242 1.414-1.414a1 1 0 0 0 0-1.414L17.864 3.6zm0 7.072-4.243-4.243-8.9 8.9a1 1 0 0 0-.292.706v2.829a1 1 0 0 0 1 1h2.828a1 1 0 0 0 .707-.293l8.9-8.9z"
								/>
							</svg>
						</button>
					</form>
				{/if}
			</h4>
		</div>
	</div>
	<div class="news-wrapper">
		<p>{content}</p>
	</div>
{:else}
	<div class="news-wrapper">
		<h2>Page not found</h2>
	</div>
{/if}

<style lang="scss">
	.news-wrapper {
		padding: 0 20px;
	}
	.main-data {
		width: 100%;
		display: flex;
		justify-content: flex-start;
		@media (max-width: 500px) {
			flex-direction: column;
		}
		.one-news-img {
			width: 50%;
			max-width: 700px;
			border-bottom-right-radius: 20px;
			position: relative;
			background-position: center;
			background-size: cover;
			background-repeat: no-repeat;
			@media (max-width: 500px) {
				width: 100%;
				border-bottom-left-radius: 20px;
			}
		}
	}

	h2,
	p,
	.create-by {
		margin-top: 16px;
		text-align: left;
	}

	.create-by {
		font-size: 14px;
		display: flex;
		justify-content: left;
		align-items: center;
		align-content: center;
		gap: 10px;
		span {
			font-size: inherit;
		}
		button {
			padding-top: 5px;
		}
	}
</style>
