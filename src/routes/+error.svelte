<script>
	import { page } from "$app/stores";
</script>

<h2>ERROR!!!</h2>
<h1>{$page.status}</h1>

<p>{$page.error.message}</p>
