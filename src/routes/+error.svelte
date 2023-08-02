<script>
	import { page } from "$app/stores";
</script>

<h1>ERROR!!!</h1>

<h1>{$page.status}</h1>

<p>{$page.error.message}</p>
