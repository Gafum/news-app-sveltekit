<script>
	import CustomButton from "$lib/components/customButton.svelte";
	import ListGenerator from "$lib/components/listGenerator.svelte";
	import { goto } from "$app/navigation";
	export let data;

	let isAuth = false;

	$: isAuth = data.session;
	$: myNews = data.myNews;
</script>

<main>
	{#if isAuth}
		<h1>
			Hello, <span>{data.session.user.email.toString()}</span>
		</h1>
		<div class="myNews">
			{#if myNews.length > 0}
				<h2>My News <button class="plus-btn" on:click={() => goto("/news/create")}>+</button></h2>
				<ListGenerator newsList={myNews} />
			{:else}
				<h2>You don't have news</h2>
				<p>
					But you can create them here:
					<button style="font-weight: bold;" on:click={() => goto("/news/create")}>
						Create News
					</button>
				</p>
			{/if}
		</div>
		<form action="?/logout" method="post">
			<CustomButton title="Log out" />
		</form>
	{:else}
		<CustomButton title="Log In" on:click={() => goto("/user/login")} />
	{/if}
</main>

<style lang="scss">
	main {
		padding: 20px;
	}
	h1 {
		text-align: center;
		span {
			font-weight: bold;
		}
	}
	.myNews {
		border-top: 1px solid #8d8d94;
		margin-top: 20px;
		padding-top: 20px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		align-content: center;
		gap: 14px;
		h2 {
			text-align: left;
			width: 100%;
			position: relative;
			.plus-btn {
				text-align: right;
				position: absolute;
				right: 0;
				top: 0;
				font-size: 24px;
				line-height: 20px;
				height: fit-content;
				width: 40px;
				text-align: right;
				padding-right: 2px;
				transition: font-weigth 0.4s;
			}
		}
	}
	form {
		border-top: 1px solid #8d8d94;
		margin-top: 40px;
		padding-top: 20px;
	}

	@media (pointer: fine) {
		.plus-btn:hover {
			font-weight: bold;
		}
	}
	@media (pointer: coarse) {
		.plus-btn:active {
			font-weight: bold;
		}
	}
</style>
