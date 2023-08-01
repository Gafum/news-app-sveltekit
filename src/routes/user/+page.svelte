<script>
	import CustomButtom from "$lib/components/customButtom.svelte";
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
			<h2>My News</h2>
			<ListGenerator newsList={myNews} />

			<CustomButtom title="Create News" on:click={() => goto("/user/create")} />
		</div>
		<form action="?/logout" method="post">
			<CustomButtom title="Log out" />
		</form>
	{:else}
		<CustomButtom title="Log In" on:click={() => goto("/user/login")} />
	{/if}
</main>

<style lang="scss">
	main {
		padding: 20px;
	}
	h1 {
		text-align: center;
		padding-bottom: 20px;
		border-bottom: 1px solid #8d8d94;
		span {
			font-weight: bold;
		}
	}
	.myNews {
		margin-top: 20px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		align-content: center;
		gap: 14px;
	}
	form {
		margin-top: 28px;
	}
</style>
