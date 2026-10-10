import { get_course } from '../../../course-client';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	const { courseName } = params;
	const course = await get_course({ courseName });

	return { course };
};
