<script>
	export let title = "",
		myClass = "";
</script>

<div>
	<h2>Top Headlines</h2>
	<h3>{myClass}</h3>
	<h2 class="title">{title}</h2>
	<div class="img" />
</div>

<style>
	div {
		margin-top: 20px;
		padding-bottom: 40px;
		border-bottom: 1px solid #8d8d94;
	}
	h3 {
		margin-top: 16px;
	}
	.title {
		margin-top: 8px;
	}
	.img {
		width: 100%;
		height: 300px;
		background-color: #096ffa;
	}
</style>
