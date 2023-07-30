<script>
	import categoryList from "$lib/const/categoryList.js";
	import { goto } from "$app/navigation";
	import CustomInput from "$lib/components/customInput.svelte";
	let navActive = false;
	function openNav() {
		navActive = !navActive;
	}
	function closeNav() {
		if (navActive) {
			navActive = false;
		}
	}
	function goToSearch(event) {
		let { myNews } = Object.fromEntries(new FormData(event.target).entries());
		if (!myNews || myNews.length <= 0) return;
		event.target.querySelector("input").value = "";
		closeNav();
		goto(`/search?text=${myNews}`);
	}
</script>

<svelte:document on:click={closeNav} />

<div class="wrapper">
	<header>
		<a href="/" class="site-name"> NEWSAPP </a>
		<button on:click|stopPropagation={openNav}>
			<div class="open-nav">
				<div class:active={navActive} />
			</div>
		</button>

		<nav class:showen={navActive}>
			<form on:submit|preventDefault={goToSearch}>
				<CustomInput placeholder="Find News..." myName="myNews" />
			</form>
			{#each categoryList as category}
				<div><a href="/category/{category}">{category}</a></div>
			{/each}
		</nav>
	</header>

	<main>
		<slot />
	</main>

	<footer>
		<div class="link">
			<a href="/user">Account</a>
			<a href="/about">About Us</a>
			<a href="/publishers">Publishers</a>
		</div>
		<div class="powered">Powered by <span>Gafum</span></div>
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

	nav {
		transition: all 0.4s;
		transform: scaleY(0);
		transform-origin: top;
		position: absolute;
		width: 100%;
		top: 100%;
		left: 0;
		background-color: white;
		padding: 20px;
		border-bottom: 1px solid #ededed;
		display: flex;
		flex-direction: column;
		gap: 26px;
		&.showen {
			transform: scaleY(1);
		}
		a {
			text-transform: uppercase;
			font-size: 22px;
			font-weight: 700;
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
