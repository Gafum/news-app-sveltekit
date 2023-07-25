<script>
	let navActive = false;
	function openNav() {
		navActive = !navActive;
	}
</script>

<div class="wrapper">
	<header>
		<a href="/" class="site-name"> NEWSAPP </a>
		<button on:click={openNav}><div class="open-nav"><div class:active={navActive} /></div></button>
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
		> .site-name {
			font-size: 24px;
			font-weight: 700;
			letter-spacing: 2.4px;
		}
		> button {
			height: 24px;
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
				transition: width 0.2s;
				&.active {
					width: 0;
				}
				&::before,
				&::after {
					content: "";
					height: 100%;
					width: 100%;
					background-color: #000;
					position: absolute;
					transition: all 0.2s;
				}

				&::before {
					top: 220%;
					left: 0;
				}
				&.active::before {
					top: 0;
					transform: rotate(45deg);
				}

				&::after {
					bottom: 220%;
					left: 0;
				}
				&.active::after {
					bottom: 0;
					transform: rotate(-45deg);
				}
			}
		}
	}

	main {
		flex: 1 1 auto;
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
