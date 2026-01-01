<script>
	import { t } from '$lib/i18n';
</script>

<footer class="flex border-t border-border bg-[#0c1116] px-1 py-4">
	<div class="mx-auto flex w-[90%] flex-col gap-3">
		<div class="flex flex-col gap-2">
			<span>Northwave Consulting</span>
			<span>{t('footer.tagline')}</span>
		</div>
		<hr class="text-secondary" />
		<div>{t('footer.copyright')}</div>
	</div>
</footer>
