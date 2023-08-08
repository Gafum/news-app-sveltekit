<script>
	import { goto } from "$app/navigation";
</script>

<div class="layout-wrapper">
	<header>
		<a href="/" class="site-name"> NEWS </a>
		<div class="btns">
			<button on:click={() => goto("/search")}>
				<svg viewBox="0 0 24 24" width="24" height="24">
					<circle
						cx="10"
						cy="10"
						r="6"
						fill="none"
						stroke="#000"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
					/>
					<path
						fill="none"
						stroke="#000"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M14.24 14.24 20 20"
					/>
				</svg>
			</button>
			<button on:click={() => goto("/user")}>
				<svg viewBox="0 0 32 36" width="20" height="20">
					<path
						stroke-width="2"
						d="M15.58 2.73A6.25 6.25 0 119.33 9a6.25 6.25 0 016.25-6.24m0-2.73a9 9 0 109 9 9 9 0 00-9-9zM26.67 22.84a2 2 0 012 2c0 4.07-7 8.21-12 8.21H14.67c-5 0-11.94-4.14-11.94-8.21a2 2 0 012-2H26.67m0-2.72H4.74A4.74 4.74 0 000 24.86H0c0 6 8.63 10.94 14.67 10.94h2.07c6 0 14.67-4.9 14.67-10.94h0a4.74 4.74 0 00-4.74-4.74z"
					/>
				</svg>
			</button>
		</div>
	</header>

	<main>
		<slot />
	</main>

	<footer>
		<div class="link">
			<a href="/">Home</a>
			<a href="/user">Account</a>
			<a href="/about">About Us</a>
		</div>
		<div class="powered">Powered by <span>Gafum</span></div>
	</footer>
</div>

<style lang="scss">
	.layout-wrapper {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		min-height: 100lvh;
	}
	header {
		z-index: 100;
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
			transition: opacity 0.3s;
		}

		.btns {
			display: flex;
			gap: 13px;
			justify-content: center;
			align-items: center;
			align-content: center;
			button {
				width: 20px;
				display: flex;
				justify-content: center;
				align-items: center;
				align-content: center;
				transition: opacity 0.3s;

				@media (pointer: fine) {
					&:hover {
						opacity: 0.5;
					}
				}
				@media (pointer: coarse) {
					&:active {
						opacity: 0.5;
					}
				}
			}
		}
	}

	@media (pointer: fine) {
		.site-name:hover {
			opacity: 0.65;
		}
	}
	@media (pointer: coarse) {
		.site-name:active {
			opacity: 0.65;
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
			span {
				font-weight: 700;
				font-size: 12px;
				color: #096ffa;
			}
		}
	}
</style>
