//icons
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import {
	faUser,
	faGraduationCap,
	faPen,
	faGem,
	faSuitcase,
	faLocationArrow,
	faComment,
} from '@fortawesome/free-solid-svg-icons';
//images
import ladder from './../assets/images/ladder.png';
import loupe from './../assets/images/loupe.png';
import user1 from './../assets/images/user1.jpg';
import user2 from './../assets/images/user2.jpg';

//Navigation
export const NAVIGATION_DATA = [
	{
		icon: faUser,
		ref: '#about',
		title: 'About me',
	},
	{
		icon: faGraduationCap,
		ref: '#education',
		title: 'Education',
	},
	{
		icon: faPen,
		ref: '#experience',
		title: 'Experience',
	},
	{
		icon: faGem,
		ref: '#skills',
		title: 'Skills',
	},
	{
		icon: faSuitcase,
		ref: '#portfolio',
		title: 'Portfolio',
	},
	{
		icon: faLocationArrow,
		ref: '#contact',
		title: 'Contacts',
	},
	{
		icon: faComment,
		ref: '#feedback',
		title: 'Feedbacks',
	},
];

//About
export const ABOUT_DATA = {
	title: 'About me',
	content:
		'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque',
	reference: 'about',
};

//Experience
export const EXPERIENCE_DATA = [
	{
		date: '2023',
		info: {
			company: 'EPAM Systems',
			job: 'Junior Software Engineer',
			description:
				'•Create UIs based on design and technical requirements using React, HTML, CSS, SASS, as well as implementing routing and state management with third-party libraries such as React Router and Redux.\n•Perform unit and integration testing with React Testing Library and Jest.',
		},
	},
	{
		date: '2023',
		info: {
			company: 'Scale.ai',
			job: 'AI Training Code Specialist',
			description:
				'• Write code with reasoning to show an AI model how to respond to prompts.\r\n• Review and edit code written by AI to fix bugs and improve performance.',
		},
	},
];

// Timeline
export const TIMELINE_DATA = [
	{
		date: 2023,
		title: 'Introduction to JavaScript Course',
		text: 'EPAM Systems\n\n•Web development course including HTML, CSS, JavaScript, unit testing, and React.\n•Delivered module tasks to comply with course requirements.',
	},
	{
		date: 2022,
		title: 'Product Management Course,',
		text: 'EPAM Systems\n\n•Developed user personas, user requirements, and features.\n•Created strategical roadmap, themes, epics, user stories, and backlog definition.\n•Planned pre-launch, launch, and post-launch strategies and activities.',
	},
	{
		date: 2021,
		title: 'MSc degree in Biomedical Sciences and Technology',
		text: 'Instituto Nacional de Astrofísica, Óptica y Electrónica',
	},
	{
		date: 2015,
		title: 'BSc degree in Biomedical Engineering,',
		text: 'Universidad Politécnica de Chiapas',
	},
];

// Portfolio

export const CATEGORIES_DATA = [
	{ selector: '*', label: 'All' },
	{ selector: '.ui', label: 'UI' },
	{ selector: '.code', label: 'Code' },
];

export const PORTFOLIO_DATA = [
	{
		className: 'ui',
		title: 'Project 1',
		description:
			'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
		image: loupe,
		projectUrl: 'https://github.com/diana-sen/diana-sen.github.io',
	},
	{
		className: 'code',
		title: 'Project 2',
		description:
			'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
		image: loupe,
		projectUrl: 'https://github.com/diana-sen/courses-app-react',
	},
	{
		className: ' ui code',
		title: 'Third Project 3',
		description:
			'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. text',
		image: ladder,
		projectUrl: '#project3',
	},
	{
		className: 'code',
		title: 'Project 4',
		description:
			'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. text',
		image: ladder,
		projectUrl: '#project4',
	},
];

//Feedback
export const FEEDBACK_DATA = [
	{
		feedback:
			'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.',
		reporter: {
			photoUrl: user1,
			name: 'John Doe',
			citeUrl: 'https://www.citeexample.com',
		},
	},
	{
		feedback:
			'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.',
		reporter: {
			photoUrl: user2,
			name: 'Jane Doe',
			citeUrl: 'https://www.citeexample.com',
		},
	},
];

//Contacts
export const CONTACTS_DATA = [
	{
		icon: faPhone,
		title: '+522751109',
		href: 'tel:+522751109',
	},
	{
		icon: faEnvelope,
		title: 'diana.sensalinas@gmail.com',
		href: 'mailto:diana.sensalinas@gmail.com',
	},
	{
		title: 'LinkedIn',
		icon: faLinkedin,
		content: 'Diana Sen',
		href: 'https://www.linkedin.com/in/dianasen/',
	},
	{
		title: 'GitHub',
		icon: faGithub,
		content: 'diana-sen',
		href: 'https://github.com/diana-sen',
	},
];
