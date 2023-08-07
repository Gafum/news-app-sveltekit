<script>
	export let myName = "",
		placeholder = "",
		type = "text",
		isTextArea = false,
		value = "",
		isRequired = true;

	let isActive = false;
	function changeText({ target: { value } }) {
		if (!value) return (isActive = false);
		if (value.length > 0) {
			isActive = true;
		} else {
			isActive = false;
		}
	}
	changeText({ target: { value } });
</script>

<div class="inputes">
	{#if isTextArea}
		<textarea
			class:active={isActive}
			on:input={changeText}
			required={isRequired}
			name={myName}
			id={`myInput${myName}`}
			cols="30"
			rows="10">{value}</textarea
		>
	{:else}
		<input
			class:active={isActive}
			on:input={changeText}
			name={myName}
			{type}
			id={`myInput${myName}`}
			{value}
			required={isRequired}
		/>
	{/if}
	<label for={`myInput${myName}`}>{placeholder}</label>
</div>

<style lang="scss">
	.inputes {
		width: 100%;
		position: relative;
		input,
		textarea {
			text-align: left;
			border-radius: 8px;
			font-size: 16px;
			padding: 12px;
			width: 100%;
			border: 1px solid #000;
			&:focus ~ label,
			&.active ~ label {
				color: #000;
				transform: translateX(-5%) translateY(-95%) scale(0.75);
				background-color: white;
				border: 1px solid #000;
			}
		}
		label {
			border-radius: 7px;
			pointer-events: none;
			cursor: text;
			transition: 0.2s;
			color: #d4d8d9;
			font-size: 16px;
			position: absolute;
			left: 9px;
			top: 11px;
			padding: 0px 5px 2px;
		}
	}
</style>
