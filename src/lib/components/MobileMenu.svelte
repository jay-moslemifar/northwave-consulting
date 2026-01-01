<script lang="ts">
	import { resolve } from '$app/paths';
	import { getLocale, t } from '$lib/i18n';

	let { open = $bindable() } = $props();
</script>

{#if open}
	<div
		class="fixed top-16 z-40 flex w-full flex-col items-start justify-start gap-4 rounded-b-md bg-background/80 p-4 shadow-xl/20 backdrop-blur md:hidden"
	>
		<a href={resolve('/[lang=lang]', { lang: getLocale() })}>{t('nav.home')}</a>
		<a href={resolve('/[lang=lang]/about', { lang: getLocale() })}
			>{t('nav.about')}</a
		>
		<a href={resolve('/[lang=lang]/contact', { lang: getLocale() })}
			>{t('nav.contact')}</a
		>
	</div>
{/if}
