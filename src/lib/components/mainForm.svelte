<script>
	import CustomInput from "$lib/components/customInput.svelte";
	import categoryList from "$lib/const/categoryList";
	import CustomButtom from "$lib/components/customButtom.svelte";
	export let myTitle = "",
		content = "",
		imgURL = "",
		submitText = "Create",
		myClass = categoryList[0];
</script>

<div class="main-form">
	<CustomInput myName="myTitle" placeholder="Title..." value={myTitle} />
	<CustomInput myName="myContent" placeholder="Content..." isTextArea={true} value={content} />
	<CustomInput
		myName="imgURL"
		placeholder="Image URL"
		value={imgURL}
		isRequired={false}
		type="url"
	/>
	<select name="myClass" required value={myClass}>
		{#each categoryList as category}
			<option value={category}>{category}</option>
		{/each}
	</select>
	<CustomButtom title={submitText} />
</div>

<style>
	.main-form {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		align-content: center;
		width: 100%;
		padding: 20px;
		gap: 20px;
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
