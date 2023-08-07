<script>
	/** @type {import('./$types').PageData} */
	import ListGenerator from "$lib/components/listGenerator.svelte";
	import { page } from "$app/stores";

	export let data;
	let newsList = [],
		addNews = true;
	$: {
		if (data) {
			newsList = data.data;
		} else {
			newsList = [];
			console.log("404");
		}
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

<div class="cagtegory-wrapper">
	<h3>{$page.params.classId.toString().toUpperCase()}</h3>
	<ListGenerator {newsList} on:seen-all={getNews} {addNews} />
</div>

<style>
	.cagtegory-wrapper {
		padding: 20px;
	}
	h3 {
		color: #096ffa;
		font-size: 20px;
		font-weight: 800;
		line-height: 30px;
		text-transform: capitalize;
		border-bottom: 1px solid #ededed;
		padding-bottom: 16px;
	}
</style>
