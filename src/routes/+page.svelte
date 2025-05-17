<script lang="ts">
	import { delayed } from '$lib/index.js';
	
	let count = $state(0);
</script>

<svelte:boundary>
	<button onclick={() => count += 1}>increment</button>
	<p>{count} * 2 = {await delayed(count * 2)}</p>
	
	{#snippet pending()}
		<p>loading...</p>
	{/snippet}
</svelte:boundary>
