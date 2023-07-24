<script>
	function openNav(params) {}
</script>

<div class="wrapper">
	<header>
		<span> NEWSAPP </span>
		<button class="open-nav" on:click={openNav}><div /></button>
	</header>

	<main>
		<slot />
	</main>

	<footer>
		<div class="link">
			<a href="/login">Log In</a>
			<a href="/about">About Us</a>
			<a href="/publishers">Publishers</a>
			<a href="/sitemap">Sitemap</a>
		</div>
		<div class="powered">Powered by Gafum</div>
	</footer>
</div>

<style lang="scss">
	.wrapper {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		min-height: 100lvh;
	}
	header {
		position: sticky;
		top: 0;
		background-color: white;
		padding: 22px 20px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		align-content: center;
		border-bottom: 1px solid #ededed;
		> span {
			font-size: 24px;
			font-weight: 700;
			letter-spacing: 2.4px;
		}
		.open-nav {
			height: 3px;
			width: 20px;
			position: relative;
			display: flex;
			justify-content: center;
			align-items: center;
			align-content: center;
			> div {
				background-color: #000;
				height: 100%;
				width: 100%;
				&::before,
				&::after {
					content: "";
					height: 100%;
					width: 100%;
					background-color: #000;
					position: absolute;
				}
				&::before {
					top: 220%;
					left: 0;
				}

				&::after {
					bottom: 220%;
					left: 0;
				}
			}
		}
	}

	main {
		flex: 1 1 auto;
		padding: 0 20px;
	}

	footer {
		margin: 72px 20px 0;
		padding: 40px 0;
		justify-content: center;
		align-items: center;
		align-content: center;
		border-top: 1px solid #ededed;
		.link {
			display: flex;
			justify-content: center;
			align-items: center;
			align-content: center;
			gap: 20px;
			a {
				font-size: 12px;
			}
		}
		.powered {
			margin-top: 28px;
			font-size: 12px;
		}
	}
</style>
