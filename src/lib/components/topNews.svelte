<script>
	export let title = "",
		myClass = "",
		imgURL = undefined;
</script>

<div>
	<h3><a href="/category/{myClass.toLowerCase()}">{myClass}</a></h3>
	<h2 class="title">{title}</h2>
	<div class="img" style="background-image: url({imgURL});" />
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
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
	}
</style>
