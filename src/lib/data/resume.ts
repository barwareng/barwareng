import { Github, Globe, HomeIcon } from 'lucide-svelte';
// Navbar Icons
import GithubSvg from '$lib/imgs/github.svg';
import GithubDarkSvg from '$lib/imgs/github-dark.svg';

import GmailSvg from '$lib/imgs/gmail.svg';
import GmailDarkSvg from '$lib/imgs/gmail-dark.svg';

import PhoneSvg from '$lib/imgs/phone.svg';
import PhoneDarkSvg from '$lib/imgs/phone-dark.svg';

import LinkedinSvg from '$lib/imgs/linkedin.svg';
import LinkedinDarkSvg from '$lib/imgs/linkedin-dark.svg';

import TwitterSvg from '$lib/imgs/x.svg';
import TwitterDarkSvg from '$lib/imgs/x-dark.svg';

import YgoImg from '$lib/imgs/ygo.png';
import CollosseumImg from '$lib/imgs/collosseum.png';
import IDSImg from '$lib/imgs/ids.png';
import AfricasTalkingImg from '$lib/imgs/at.jpg';
import JkuatImg from '$lib/imgs/jkuat.png';
import MeImg from '$lib/imgs/me.png';

// Your resume data
export const DATA = {
	name: 'Cleophas Barwareng',
	initials: 'CB',
	url: 'https://github.com/barwareng',
	// img: 'https://i.pinimg.com/736x/9e/dc/a6/9edca66eba199828bda2dbaf35642154.jpg',
	location: 'Nairobi, Kenya',
	locationLink: 'https://www.google.com/maps/place/nairobi',
	description:
		'Full Stack Engineer with 5+ years of experience building fast, scalable web and SaaS applications using SvelteKit, Node.js, and Golang — trusted by startups in travel, crypto, and fintech.',
	summary: `I'm a **Full Stack Engineer** with 5+ years of experience turning product ideas into fast, scalable, and user-friendly web applications. I specialize in **SvelteKit**, **Golang**, **Node.js**, and **Supabase**, and have contributed to products across tourism, fintech, Web3, and communications.

I've worked with diverse, remote teams in the US and Europe, delivering impactful projects like:

- A whitelabel travel platform at **[Ygo](https://ygotrips.com/)** that helped double sales and drive €1M in revenue in 6 months  
- The full SvelteKit web app for **[Colosseum](https://colosseum.org/)**, used to run Solana’s largest hackathons with over 100K participants  
- An NFT sales site for **Gala Games** through **[IDS](https://ids.company/)**, generating **$5M in sales** in its first week  
- Real-time dashboards for **[Africa's Talking](https://africastalking.com/)**, powering IoT insights across Africa  

I enjoy working closely with designers, product managers, and engineers to ship meaningful features — from MVPs to complex full-stack systems. I'm also passionate about clean code, developer experience, and performance optimization.
`,
	avatarUrl: MeImg,
	// avatarUrl: 'https://static.narrative-violation.com/D6UTiosM3sWmARyRF7gNT',
	skills: [
		'Svelte',
		'SvelteKit',
		'Typescript',
		'Node.js',
		'Golang',
		'Postgres',
		'Docker',
		'TailwindCSS',
		'Supabase',
		'Kysely',
		'Drizzle',
		'Firebase',
		'Pocketbase',
		'Bits UI',
		'Shadcn Svelte'
	],
	navbar: [
		{ href: '/', icon: HomeIcon, label: 'Home' }
		// { href: '#', icon: CodeIcon, label: 'Projects' }
	],
	contact: {
		email: 'cleophas.barwareng@gmail.com',
		tel: '+254729230021',
		social: {
			GitHub: {
				name: 'GitHub',
				url: 'https://github.com/barwareng',
				// // icon: Icons.github,
				icon: GithubSvg,
				navbar: true,
				dark_icon: GithubDarkSvg
			},
			LinkedIn: {
				name: 'LinkedIn',
				url: 'https://www.linkedin.com/in/barwareng/',
				// // icon: Icons.linkedin,
				icon: LinkedinSvg,
				navbar: true,
				dark_icon: LinkedinDarkSvg
			},
			X: {
				name: 'X',
				url: 'https://twitter.com/moura_quid',
				// // icon: Icons.x,
				icon: TwitterSvg,
				navbar: true,
				dark_icon: TwitterDarkSvg
			},

			Email: {
				name: 'Send Email',
				url: 'mailto:cleophas.barwareng@gmail.com',
				// // icon: Icons.email,
				icon: GmailSvg,
				navbar: true,
				dark_icon: GmailDarkSvg
			},
			Phone: {
				name: 'Call',
				url: 'tel:+254729230021',
				icon: PhoneSvg,
				navbar: true,
				dark_icon: PhoneDarkSvg
			}
		}
	},
	work: [
		{
			company: 'YGO GmbH',
			href: 'https://ygotrips.com',
			badges: [],
			location: 'Remote',
			title: 'Senior Software Engineer',
			logoUrl: YgoImg,
			start: 'Sep 2024',
			end: 'Apr 2025',
			description:
				'Built and scaled a white-label travel booking platform using SvelteKit and TailwindCSS, helping double partner sales and contributing to €1M+ revenue growth in 6 months. Integrated analytics tools for performance insights and led A/B tests that significantly improved conversion rates. Collaborated closely with product and design teams to ship high-impact features fast.'
		},
		{
			company: 'Colosseum',
			badges: [],
			href: 'https://www.colosseum.org/',
			location: 'Remote',
			title: 'Senior Software Engineer',
			logoUrl: CollosseumImg,
			start: 'Oct 2023',
			end: 'April 2024',
			description:
				'Converted a full Figma design into a fully responsive SvelteKit app powering Solana’s largest hackathons (100K+ users). Developed the REST API client, wrote core backend services, and collaborated with Web3 engineers to deliver scalable infrastructure. Helped launch a platform that distributed $200K+ in funding to winning projects in under 6 months.'
		},
		{
			company: 'Intentionally Designed Solutions',
			href: 'https://ids.company/',
			badges: [],
			location: 'Remote',
			title: 'Senior Software Engineer and Project Manager',
			logoUrl: IDSImg,
			start: 'Dec 2021',
			end: 'Nov 2023',
			description:
				'Worked across multiple client projects, building web apps end-to-end using modern stacks like SvelteKit, Supabase, and Node.js. Collaborated with cross-functional teams to translate feature requests into deliverables and timelines. Reviewed code for quality, aligned with clients through regular updates, and delivered production-ready solutions tailored to business goals'
		},
		{
			company: "Africa's Talking",
			href: 'https://africastalking.com',
			badges: [],
			location: 'Nairobi, Kenya',
			title: 'Software Engineer',
			logoUrl: AfricasTalkingImg,
			start: 'Oct 2019',
			end: 'Aug 2021',
			description:
				'Built real-time IoT dashboards that visualized device data using modern frontend tools and backend APIs. Helped bridge device-level data with business insights for clients across Africa. Worked with internal APIs to support integrations with voice, SMS, and other communication services.'
		}
	],
	education: [
		{
			school: 'Jomo Kenyatta University of Agriculture and Technology',
			href: 'https://www.jkuat.ac.ke',
			degree: "Bachelor's of Science in Mechatronics Engineering",
			logoUrl: JkuatImg,
			start: '2012',
			end: '2017'
		}
	]
};
