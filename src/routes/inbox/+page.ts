import { faker } from '@faker-js/faker';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	// fetch users from API
	const res = await fetch('https://jsonplaceholder.typicode.com/users');
	const users = await res.json();

	const emails = users.map((user) => {
		return {
			name: user.name,
			email: user.email,
			subject: faker.lorem.sentence(),
			body: faker.lorem.paragraph(),
			date: faker.date.recent()
		};
	});

	return { emails };
};
