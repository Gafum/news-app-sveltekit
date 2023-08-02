<script>
	import CustomInput from "$lib/components/customInput.svelte";
	import categoryList from "$lib/const/categoryList";
	import CustomButtom from "$lib/components/customButtom.svelte";
	export let mytitle = "",
		content = "",
		submitText = "Create";
</script>

<CustomInput myName="myTitle" placeholder="Title..." value={mytitle} />
<CustomInput myName="myContent" placeholder="Content..." isTextArea={true} value={content} />
<select name="myClass" required>
	{#each categoryList as category}
		<option value={category}>{category}</option>
	{/each}
</select>
<CustomButtom title={submitText} />

<style>
	select {
		appearance: none;
		border: 1px solid #000;
		padding: 12px;
		width: 100%;
		font-size: 18px;
		cursor: pointer;
	}
</style>
