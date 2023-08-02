<script>
	import ListGenerator from "$lib/components/listGenerator.svelte";
	export let data;
	let newsList = [];
	if (data && data.data) {
		newsList = data.data;
	} else {
		console.log("404");
	}
</script>

<div class="wrapper">
	<ListGenerator {newsList} />
</div>

<style lang="scss">
	.wrapper {
		padding: 0 20px;
	}
</style>
