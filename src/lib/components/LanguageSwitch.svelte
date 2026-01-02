<script lang="ts">
	import { page } from '$app/state';
	import { getOtherLocale } from '$lib/i18n';

	const newRoute = $derived(
		getOtherLocale() +
			'/' +
			page.url.pathname.split('/').filter(Boolean).slice(1),
	);
</script>

<a
	data-sveltekit-preload-data="off"
	href={`/${newRoute}`}
	class="text-secondary!">{getOtherLocale()?.toUpperCase()}</a
>
