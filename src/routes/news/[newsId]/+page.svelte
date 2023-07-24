<script>
	/** @type {import('./$types').PageData} */
	export let data;
	let title = "",
		content = "";
	if (data) {
		title = data.title;
		content = data.content;
	}
</script>

<div style="background-color: #096ffa;" class="img" />
<div class="wrapper">
	<h2>{title}</h2>
	<p>{content}</p>
</div>

<style>
	.wrapper {
		padding: 0 20px;
	}
	.img {
		height: 270px;
		width: 100%;
		border-bottom-left-radius: 20px;
		border-bottom-right-radius: 20px;
		background-size: cover;
	}
	h2,
	p {
		margin-top: 16px;
		text-align: left;
	}
</style>
