<script>
	export let title = "",
		imgURL = undefined,
		myClass = "",
		myDescription = "";
</script>

<div class="oneNews">
	<h3>
		<a href="/category/{myClass.toLowerCase()}">{myClass}</a>
	</h3>
	<div class="main-content">
		<h2 class="title" class:full={!imgURL}>{title.slice(0, 100)}</h2>
		{#if imgURL}
			<div class="img" style="background-image: url({imgURL});" />
		{/if}
	</div>
	<p class="description">{myDescription.slice(0, 125)}</p>
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
			max-width: 60%;
			&.full {
				width: 100%;
				max-width: 100%;
			}
		}

		.img {
			width: 115px;
			height: 92px;
			background-size: cover;
			background-position: center;
		}
	}

	.description {
		margin-top: 8px;
		font-size: 14px;
		line-height: 24px;
		text-align: left;
	}
</style>
