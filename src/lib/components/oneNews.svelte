<script>
	export let title = "",
		myImg = "#000",
		myClass = "",
		myDescription = "";
</script>

<div class="oneNews">
	<h3>
		<a href="/category/{myClass.toLowerCase()}">{myClass}</a>
	</h3>
	<div class="main-content">
		<h2 class="title">{title}</h2>
		<div class="img" style="background-color: {myImg};" />
	</div>
	<p class="description">{myDescription}</p>
</div>

<style lang="scss">
	.oneNews {
		margin-top: 24px;
	}
	.main-content {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		align-content: center;
		margin-top: 8px;
		.title {
			max-width: 70%;
		}
		.img {
			width: 115px;
			height: 92px;
		}
	}

	.description {
		margin-top: 8px;
		font-size: 14px;
		line-height: 24px;
		text-align: left;
	}
</style>
