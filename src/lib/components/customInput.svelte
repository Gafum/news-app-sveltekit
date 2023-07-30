<script>
	export let myName = "",
		placeholder = "",
		type = "text";
</script>

<div class="inputes">
	<input name={myName} {type} id={`myInput${myName}`} required on:click|stopPropagation />
	<label for={`myInput${myName}`}>{placeholder}</label>
</div>

<style lang="scss">
	.inputes {
		width: 100%;
		position: relative;
		input {
			text-align: left;
			border-radius: 8px;
			font-size: 16px;
			padding: 12px;
			width: 100%;
			border: 1px solid #000;
			&:focus ~ label,
			&:valid ~ label {
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
