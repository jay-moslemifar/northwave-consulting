import { redirect } from '@sveltejs/kit';

export const load = ({ params }) => {
	if (!params.lang) {
		throw redirect(307, '/en');
	}
};
