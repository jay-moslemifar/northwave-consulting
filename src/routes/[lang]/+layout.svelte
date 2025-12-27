<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { data, children } = $props();
	const { lang, tr } = $derived(data);
</script>

<Header />

<main>
	{@render children()}
</main>

<Footer />
