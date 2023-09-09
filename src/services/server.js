import { createServer } from 'miragejs';

export default function server() {
	createServer({
		routes() {
			this.namespace = 'api';
			this.urlPrefix = 'http://localhost:3000';

			this.get(
				'/educations',
				() => {
					return [
						{
							date: 2023,
							title: 'Introduction to JavaScript Course',
							text: 'EPAM Systems\n\n•Web development course including HTML, CSS, JavaScript, unit testing, and React.\n•Delivered module tasks to comply with course requirements.',
						},
						{
							date: 2022,
							title: 'Product Management Course',
							text: 'EPAM Systems\n\n• Developed user personas, user requirements, and features.\n• Created strategical roadmap, themes, epics, user stories, and backlog definition.\n• Planned pre-launch, launch, and post-launch strategies and activities.',
						},
						{
							date: 2021,
							title: 'MSc degree in Biomedical Sciences and Technology',
							text: 'Instituto Nacional de Astrofísica, Óptica y Electrónica',
						},
						{
							date: 2015,
							title: 'BSc degree in Biomedical Engineering',
							text: 'Universidad Politécnica de Chiapas',
						},
					];
				},
				{ timing: 3000 }
			);

			this.get(
				'/skills',
				() => {
					return getSkills();
				},
				{ timing: 3000 }
			);

			this.post('/skills', (schema, request) => {
				let attrs = JSON.parse(request.requestBody);
				return { ...attrs };
			});
		},
	});
}

export const getSkills = () => {
	let data = localStorage.getItem('skills');
	return JSON.parse(data);
};
