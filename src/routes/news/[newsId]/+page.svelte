<script>
	import CustomButtom from "$lib/components/customButtom.svelte";
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
				headers: {
					"Content-Type": "application/x-www-form-urlencoded"
				},
				body: JSON.stringify({ myData: true })
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
	{#if imgURL}
		<div style="background-image: url({imgURL});" class="one-news-img" />
	{/if}
	<div class="wrapper">
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
			{/if}
		</h4>
		<p>{content}</p>
		{#if myNews}
			<form action="?/goToUpdate" method="post">
				<CustomButtom title="Edit this news" />
			</form>
		{/if}
	</div>
{:else}
	<div class="wrapper">
		<h2>Page not found</h2>
	</div>
{/if}

<style lang="scss">
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

	form {
		margin-top: 28px;
	}
</style>
