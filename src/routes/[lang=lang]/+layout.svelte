<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import MobileMenu from '$lib/components/MobileMenu.svelte';

	let { children } = $props();

	let open = $state(false);
</script>

<Header bind:open />

<MobileMenu bind:open />

<main class="relative">
	{@render children()}
</main>

<Footer />
