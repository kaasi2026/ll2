<!-- TODO: Is this necessary? -->
<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children, class: className = '' }: { children?: Snippet; class?: string } = $props();
</script>

<div class={`content ${className}`}>
	{#if children}{@render children()}{/if}
</div>

<style type="text/scss">
	@use 'bulma/sass/utilities/initial-variables.sass';
	@use 'bulma/sass/utilities/derived-variables.sass';
	@use 'bulma/sass/utilities/mixins.sass';
	@use 'bulma/sass/elements/content.sass';
</style>
