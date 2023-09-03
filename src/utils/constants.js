import ladder from './../assets/images/ladder.png';
import loupe from './../assets/images/loupe.png';
import user1 from './../assets/images/user1.jpg';
import user2 from './../assets/images/user2.jpg';

//Experience
export const EXPERIENCE_DATA = [
	{
		date: '2013-2014',
		info: {
			company: 'Google',
			job: 'Front-end developer / php programmer',
			description:
				'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor',
		},
	},
	{
		date: '2012',
		info: {
			company: 'Twitter',
			job: 'Web developer',
			description:
				'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor',
		},
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

// Timeline
export const TIMELINE_DATA = [
	{
		date: 2001,
		title: 'Title 0',
		text: 'Elit voluptate ad nostrud laboris. Elit incididunt mollit enim enim id id laboris dolore et et mollit. Mollit adipisicing ullamco exercitation ullamco proident aute enim nisi. Dolore eu fugiat consectetur nulla sunt Lorem ex ad. Anim eiusmod do tempor fugiat minim do aliqua amet ex dolore velit.\r\n',
	},
	{
		date: 2000,
		title: 'Title 1',
		text: 'Et irure culpa ad proident labore excepteur elit dolore. Quis commodo elit culpa eiusmod dolor proident non commodo excepteur aute duis duis eu fugiat. Eu duis occaecat nulla eiusmod non esse cillum est aute elit amet cillum commodo.\r\n',
	},
	{
		date: 2012,
		title: 'Title 2',
		text: 'Labore esse tempor nisi non mollit enim elit ullamco veniam elit duis nostrud. Enim pariatur ullamco dolor eu sunt ad velit aute eiusmod aliquip voluptate. Velit magna labore eiusmod eiusmod labore amet eiusmod. In duis eiusmod commodo duis. Exercitation Lorem sint do aliquip veniam duis elit quis culpa irure quis nulla. Reprehenderit fugiat amet sint commodo ex.\r\n',
	},
];

// Portfolio

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
