<script>
	import { resolve } from '$app/paths';
	import { getLocale, t } from '$lib/i18n';

	let { open = $bindable() } = $props();
</script>

<header
	class="sticky top-0 z-50 flex h-16 w-full border-b border-border bg-background/90 py-3 backdrop-blur"
>
	<div
		class="mx-auto flex w-full items-center justify-between px-4 md:w-[90%] md:px-0"
	>
		<a
			href={resolve('/[lang=lang]', { lang: getLocale() })}
			class="hover:no-underline! focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none"
		>
			<div class="flex items-center justify-center gap-2">
				<svg
					width="20"
					height="20"
					viewBox="0 0 40 40"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M20 0C25.3043 4.00466e-07 30.3919 2.10669 34.1426 5.85742C34.8157 6.53058 35.4354 7.24719 36 8H20C16.8174 8 13.7651 9.26421 11.5146 11.5146C9.26421 13.7651 8 16.8174 8 20H20L36.9102 9.31934C38.1656 11.3074 39.0611 13.5027 39.5547 15.8027L32 20H40L39.9941 20.4971C39.8669 25.6213 37.776 30.5092 34.1426 34.1426C30.3919 37.8933 25.3043 40 20 40C14.6957 40 9.60815 37.8933 5.85742 34.1426C5.18426 33.4694 4.56459 32.7528 4 32H20C23.1826 32 26.2349 30.7358 28.4854 28.4854C30.5952 26.3755 31.8383 23.5608 31.9854 20.5947L32 20H20L3.08984 30.6787C1.83452 28.6906 0.941002 26.4951 0.447266 24.1953L8 20H0C8.00931e-07 14.6957 2.1067 9.60815 5.85742 5.85742C9.60815 2.1067 14.6957 -5.79361e-10 20 0Z"
						fill="#4f46e5"
					></path>
				</svg>
				<span class="text-accent hover:no-underline">Northwave</span>
			</div>
		</a>
		<button
			class="inline-flex items-center justify-center p-2 hover:bg-surface md:hidden"
			aria-label="Open menu"
			aria-expanded={open}
			aria-controls="mobile-menu"
			onclick={() => (open = !open)}
		>
			{#if open}
				<svg
					class="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					aria-hidden="true"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M6 18L18 6M6 6l12 12"
					/>
				</svg>
			{:else}
				<svg
					class="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					aria-hidden="true"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16M4 18h16"
					/>
				</svg>
			{/if}
		</button>

		<div class="hidden gap-5 md:flex">
			<a href={resolve('/[lang=lang]', { lang: getLocale() })}
				>{t('nav.home')}</a
			>
			<a href={resolve('/[lang=lang]/about', { lang: getLocale() })}
				>{t('nav.about')}</a
			>
			<a href={resolve('/[lang=lang]/contact', { lang: getLocale() })}
				>{t('nav.contact')}</a
			>
		</div>
	</div>
</header>
