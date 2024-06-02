interface Project {
	name: string
	desc: string
	image: string
	alt: string
}

interface Category {
	name: string
	desc: string
	projects: Project[]
}

interface CategoriesData {
	[key: string]: Category
}

export const categoriesData: CategoriesData = {
	'web-design': {
		name: 'Web Design',
		desc: 'We build websites that serve as powerful marketing tools and bring memorable brand experiences.',
		projects: [
			{
				name: 'EXPRESS',
				desc: 'A multi-carrier shipping website for ecommerce businesses',
				image: '/images/web-design/image-express.jpg',
				alt: 'Screenshot of EXPRESS shipping website'
			},
			{
				name: 'TRANSFER',
				desc: 'Site for low-cost money transfers and sending money within seconds',
				image: '/images/web-design/image-transfer.jpg',
				alt: 'Screenshot of TRANSFER money transfer website'
			},
			{
				name: 'PHOTON',
				desc: 'A state-of-the-art music player with high-resolution audio and DSP effects',
				image: '/images/web-design/image-photon.jpg',
				alt: 'Screenshot of PHOTON music player website'
			},
			{
				name: 'BUILDER',
				desc: 'Connects users with local contractors based on their location',
				image: '/images/web-design/image-builder.jpg',
				alt: 'Screenshot of BUILDER contractor connection website'
			},
			{
				name: 'BLOGR',
				desc: 'Blogr is a platform for creating an online blog oration',
				image: '/images/web-design/image-blogr.jpg',
				alt: 'Screenshot of BLOGR blog creation platform'
			},
			{
				name: 'CAMP',
				desc: 'Get expert training in coding, data, design, and digital marketing',
				image: '/images/web-design/image-camp.jpg',
				alt: 'Screenshot of CAMP training website'
			}
		]
	},
	'app-design': {
		name: 'App Design',
		desc: 'Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.',
		projects: [
			{
				name: 'AIRFILTER',
				desc: 'Solving the problem of poor indoor air quality by filtering the air',
				image: '/images/app-design/image-airfilter.jpg',
				alt: 'Screenshot of AIRFILTER air quality app'
			},
			{
				name: 'EYECAM',
				desc: 'Product that lets you edit your favorite photos and videos at any time',
				image: '/images/app-design/image-eyecam.jpg',
				alt: 'Screenshot of EYECAM photo editing app'
			},
			{
				name: 'FACEIT',
				desc: 'Get to meet your favorite internet superstar with the faceit app',
				image: '/images/app-design/image-faceit.jpg',
				alt: 'Screenshot of FACEIT meet-and-greet app'
			},
			{
				name: 'TODO',
				desc: 'A todo app that features cloud sync with light and dark mode',
				image: '/images/app-design/image-todo.jpg',
				alt: 'Screenshot of TODO app'
			},
			{
				name: 'LOOPSTUDIOS',
				desc: 'A VR experience app made for Loopstudios',
				image: '/images/app-design/image-loopstudios.jpg',
				alt: 'Screenshot of LOOPSTUDIOS VR experience app'
			}
		]
	},
	'graphic-design': {
		name: 'Graphic Design',
		desc: 'We deliver eye-catching branding materials that are tailored to meet your business objectives.',
		projects: [
			{
				name: 'TIM BROWN',
				desc: 'A book cover designed for Tim Brown’s new release, ‘Change’',
				image: '/images/graphic-design/image-change.jpg',
				alt: 'Book cover for Tim Brown’s release, ‘Change’'
			},
			{
				name: 'BOXED WATER',
				desc: 'A simple packaging concept made for Boxed Water',
				image: '/images/graphic-design/image-boxed-water.jpg',
				alt: 'Packaging concept for Boxed Water'
			},
			{
				name: 'SCIENCE!',
				desc: 'A poster made in collaboration with the Federal Art Project',
				image: '/images/graphic-design/image-science.jpg',
				alt: 'Poster for the Federal Art Project'
			}
		]
	}
}
