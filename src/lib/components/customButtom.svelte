<script>
	import { createEventDispatcher } from "svelte";

	export let title = "CLick";
	const dispatcher = createEventDispatcher();
	function clicked() {
		dispatcher("click");
	}
</script>

<button on:click={clicked}>{title}</button>

<style>
	button {
		width: 100%;
		padding: 12px;
		border-radius: 8px;
		background-color: #096ffa;
		color: white;
		transition: filter 0.2s;
		&:hover,
		&:focus {
			filter: brightness(0.8);
		}
	}
</style>
