<script>
	import CustomInput from "$lib/components/customInput.svelte";
	import categoryList from "$lib/const/categoryList";
	import CustomButtom from "$lib/components/customButtom.svelte";

	export let data;
</script>

{#if data.data}
	<form action="?/createNews" method="post">
		<CustomInput myName="myTitle" placeholder="Title..." />
		<textarea
			required
			name="myContent"
			id="myContent"
			cols="30"
			rows="10"
			placeholder="Content..."
		/>
		<select name="myClass" required>
			{#each categoryList as category}
				<option value={category}>{category}</option>
			{/each}
		</select>
		<CustomButtom title="Create" />
	</form>
{/if}

<style lang="scss">
	form {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		align-content: center;
		width: 100%;
		padding: 20px;
		gap: 20px;
	}

	textarea {
		text-align: left;
		border-radius: 8px;
		font-size: 16px;
		padding: 12px;
		width: 100%;
		border: 1px solid #000;
		resize: vertical;
		&::placeholder {
			color: #d4d8d9;
		}
	}

	select {
		appearance: none;
		border: 1px solid #000;
		padding: 12px;
		width: 100%;
		font-size: 18px;
		cursor: pointer;
	}
</style>
