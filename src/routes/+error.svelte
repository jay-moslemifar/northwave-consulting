<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import { getLocale, tError } from '$lib/i18n';
</script>

<h1>{page.status}</h1>
<p>{tError(page.status, 'message')}</p>
<a href={resolve('/[lang=lang]', { lang: getLocale() })}
	>{tError(page.status, 'action')}</a
>
