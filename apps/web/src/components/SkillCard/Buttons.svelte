<script lang="ts">
	import Button from 'components/Button.svelte';

	let { practiceHref, completed, started } = $props();
</script>

<div class="container">
	{#if completed}
		<Button style="primary" href={practiceHref}>
			Practice
		</Button>
	{:else if started}
		<Button style="primary" href={practiceHref}>
			Continue learning
		</Button>
	{:else}
		<Button style="primary" href={practiceHref}>
			Learn
		</Button>
	{/if}
</div>

<style>
	.container {
		display: flex;
		justify-content: center;
	}
</style>
