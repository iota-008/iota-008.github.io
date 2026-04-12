export const projects = [
	{
		title: "CalorieTaker",
		featured: true,
		description:
			"Built an AI-powered fitness and nutrition application with multi-provider LLM orchestration, context-aware prompt pipelines, social feed support, and reliable offline fallbacks.",
		image: "/images/project-thumbnail/calorietaker/1.png",
		images: [
			"/images/project-thumbnail/calorietaker/1.png",
		],
		tags: ["React Native", "Python", "LLM APIs", "Google Fit", "RevenueCat"],
		playstore: "https://play.google.com/store/apps/details?id=com.calorietaker.app",
		visit: "https://www.calorietaker.com/",
		id: 0,
	},
	{
		title: "IntraTrade",
		featured: true,
		description:
			"Engineered a high-concurrency ORB trading bot with event-driven live tick processing and sub-second order execution using Kite Connect APIs.",
		image: "/images/project-thumbnail/intratrade/1.jpg",
		images: [
			"/images/project-thumbnail/intratrade/1.jpg",
		],
		tags: ["React", "Node.js", "Socket.io", "Kite API"],
		source: "https://github.com/iota-008/ORB-Strategy",
		visit: "https://intra-trade.duckdns.org/",
		id: 1,
	},
	{
		title: "Score Master",
		featured: false,
		description:
			"Developed and deployed an IPL score prediction service using Ridge Regression trained on historical match data, exposed through a production-ready Flask API.",
		image: "/images/project-thumbnail/score-master/1.png",
		images: [
			"/images/project-thumbnail/score-master/1.png",
		],
		tags: ["Flask", "Python", "Machine Learning", "Ridge Regression", "Heroku"],
		source: "https://github.com/iota-008/IPL-Score-Predictor",
		visit: "https://ipl-score-master.herokuapp.com/",
		id: 2,
	},
	{
		title: "Memories",
		featured: false,
		description:
			"A social posting platform built during my early full-stack journey with authentication and CRUD flows for sharing personal memories.",
		image: "/images/project-thumbnail/memories/1.png",
		images: [
			"/images/project-thumbnail/memories/1.png",
		],
		tags: ["MongoDB", "Express", "React", "Node.js", "Passport.js"],
		source: "https://github.com/iota-008/Create-Memories",
		visit: "https://create-your-memory.netlify.app/",
		id: 4,
	},
	{
		title: "YouTube Tools",
		featured: true,
		description:
			"Production-grade Python Flask multi-tool workspace for content creators with transcript extraction, video stream selection, thumbnail downloads, SEO optimization, channel audits, and idea generation. Features resilient data sourcing via multiple providers (yt-dlp, pytubefix, transcript APIs), run history tracking with JSON API, Docker Compose deployment with PostgreSQL, and GitHub Actions CI/CD.",
		image: "/images/project-thumbnail/yt-tools/1.png",
		images: [
			"/images/project-thumbnail/yt-tools/1.png",
			"/images/project-thumbnail/yt-tools/2.png",
		],
		tags: ["Flask", "Python", "PostgreSQL", "Docker", "GitHub Actions", "yt-dlp"],
		source: "https://github.com/iota-008/YoutubeTools",
		visit: "https://yt-tools.duckdns.org/",
		id: 5,
	},
	{
		title: "Video Chat Application",
		featured: false,
		description:
			"A real-time video chat app developed to explore WebRTC signaling and live communication using sockets.",
		image: "/images/project-thumbnail/video-chat/1.jpg",
		images: [
			"/images/project-thumbnail/video-chat/1.jpg",
		],
		tags: ["React", "JavaScript", "Socket.io", "WebRTC"],
		source: "https://github.com/iota-008/ShowYourFace",
		visit: "",
		id: 6,
	},
	{
		title: "URL Shortener",
		featured: true,
		description:
			"Production-oriented Flask URL shortener (Shortly Studio) with Redis-backed redirect caching, async click analytics via queue workers, custom aliases and auto-generated codes, guest + authenticated user scopes, rate limiting, JSON API, and full VM deployment automation via GitHub Actions. Handles collision-safe code creation and resilient fallback to PostgreSQL for reliability.",
		image: "/images/project-thumbnail/url-shortner/1.png",
		images: [
			"/images/project-thumbnail/url-shortner/1.png",
			"/images/project-thumbnail/url-shortner/2.png",
		],
		tags: ["Flask", "Python", "PostgreSQL", "Redis", "Docker", "GitHub Actions"],
		source: "https://github.com/iota-008/URL-shortner",
		visit: "https://myshortly.duckdns.org/",
		id: 7,
	},
	{
		title: "Heart Disease Risk Estimation",
		featured: false,
		description:
			"A machine learning project using KNN to estimate heart disease risk from medical attributes as part of my foundational ML learning phase.",
		image: "/images/project-thumbnail/heart-disease-risk-estimation/1.jpg",
		images: [
			"/images/project-thumbnail/heart-disease-risk-estimation/1.jpg",
		],
		tags: ["Machine Learning", "Python", "KNN", "Jupyter Notebook"],
		source:
			"https://github.com/iota-008/Estimate-the-probility-of-heart-disease-for-patients-using-KNN-model-of-Machine-learning",
		visit: "",
		id: 8,
	},
	{
		title: "Gender Classification from Tweets",
		featured: false,
		description:
			"An NLP learning project with an ensemble of Naive Bayes, SVM, and Logistic Regression for tweet-based classification.",
		image: "/images/project-thumbnail/twitter-classification/1.jpg",
		images: [
			"/images/project-thumbnail/twitter-classification/1.jpg",
		],
		tags: [
			"Machine Learning",
			"Python",
			"NLP",
			"Naive Bayes",
			"SVM",
			"Logistic Regression",
		],
		source: "https://github.com/iota-008/verzeo-internship-MajorProject",
		visit: "",
		id: 9,
	},
];

export const ExperienceData = [
	{
		company: "JumpCloud",
		role: "Software Engineer 2",
		period: "Jan 2024 — Present",
		location: "Remote",
		stack: ["Golang", "Node.js", "AWS", "Azure", "Redis", "SCIM", "OAuth"],
		highlights: [
			"Delivered distributed locking for OAuth token rotation, improving connector reliability and supporting ARR retention.",
			"Scaled queue partitioning and worker patterns for 120K+ integration messages in production workloads.",
			"Shipped security-critical improvements including mTLS hardening for SCIM endpoints and platform reliability upgrades.",
		],
	},
	{
		company: "Siemens Healthineers",
		role: "Design & Development Engineer",
		period: "Jul 2022 — Dec 2023",
		location: "India",
		stack: ["Angular", "Node.js", "Snowflake", "Azure", "SQL", "Enterprise Apps"],
		highlights: [
			"Built and supported full-stack product workflows and internal engineering solutions in a healthcare technology environment.",
			"Improved reporting and analytics throughput with Snowflake-focused optimizations that reduced processing time by roughly 70%.",
			"Progressed from internship to full-time ownership by delivering reliable features across cloud and application layers.",
		],
	},
];

export const TimeLineData = [
	{ year: 2018, month: "Aug", text: "Started B.Tech in Computer Science at IIIT Nagpur" },
	{ year: 2021, month: "Feb", text: "Joined Labcolabs as a Fullstack Developer Intern" },
	{
		year: 2021,
		month: "Aug",
		text: "Started Software Development Internship at Siemens Healthineers",
	},
	{ year: 2022, month: "Jun", text: "Graduated with B.Tech CSE from IIIT Nagpur" },
	{ year: 2022, month: "Jul", text: "Joined Siemens Healthineers as Design & Development Engineer" },
	{ year: 2024, month: "Jan", text: "Joined JumpCloud as Software Engineer 2 (Remote)" },
	{ year: 2025, month: "Dec", text: "Started building CalorieTaker AI health product" },
	{ year: 2026, month: "Apr", text: "Open to international remote backend/full-stack roles" },
];

export const AccomplishmentsData = [
	{
		number: "120K+",
		text: "Messages processed with queue partitioning and worker-scaling architecture",
	},
	{
		number: "$500K",
		text: "ARR retention impact through production fixes and reliability improvements",
	},
	{
		number: "70%",
		text: "Faster Snowflake reporting and analytics processing",
	},
	{
		number: "70%",
		text: "Reduction in support dependency via AI chatbot automation",
	},
	{
		number: "600+",
		text: "Algorithmic problems solved across coding platforms",
	},
	{
		number: "3⭐",
		text: "CodeChef rating 1717 with global rank 411/24,541 in March Long Challenge",
	},
	{
		number: "Spot",
		text: "Received Spot Awards for high-impact delivery and ownership across product engineering initiatives",
	},
];

export const InterviewExperience = [
	{
		id: 1,
		name: "GoldmanSachs",
		title: "New graduate Analyst(Engineering Division)",
		description: `

      Round 1: Hackerank test

      Round 2: Hirevue round

      Round 3: Final 2 Interviews of 45 minutes

      `,
		location: "Warsaw, Poland",
		image: "/images/company-logo/GoldmanSachs.png",
		date: "",
		result: "Rejected",
	},
	{
		id: 2,
		name: "AlphaGrep",
		title: "Python Developer",
		description: `Round 1: Codepair round`,
		location: "India",
		image: "/images/company-logo/AlphaGrep.png",
		date: "",
		result: "Rejected",
	},
	{
		id: 3,
		name: "Mercari",
		title: "Software Devloper",
		location: "Japan",
		description: `

      Round 1: Hackerrank test

      Round 2: Technical Interview

      `,
		image: "/images/company-logo/Mercari.png",
		date: "",
		result: "Rejected",
	},
	{
		id: 4,
		name: "Siemens Healthineers",
		title: "Fullstack Developer",
		description: `

      Round 1: Online coding test

      Round 2: Technical Interview

      Round 3: Manegerial Interview

      Round 4: HR Interview

      `,
		location: "India",
		image: "/images/company-logo/SiemensHealthineers.png",
		date: "",
		result: "Selected",
	},
	{
		id: 5,
		name: "Infosys",
		title: "Digital Specialist Engineer",
		description: `

      Round 1: Infytq test

      Round 2: Technical Interview round

      `,
		location: "India",
		image: "/images/company-logo/Infosys.png",
		date: "",
		result: "Selected",
	},
	{
		id: 6,
		name: "Amazon",
		title: "",
		description: `

      Round 1: Online Assessment test

      Round 2: Work simulation questions and amazon principles questions

      Round 3: 2 Technical Interview of 60 minutes each.

      `,
		location: "Berlin, Germany",
		image: "/images/company-logo/Amazon.png",
		date: "",
		result: "Rejected",
	},
	{
		id: 7,
		name: "Bharat Pe",
		title: "Software Engineer - Backend",
		description: `

      Round 1: Technical Interview (By interview vector)

      Round 2: interview round with CTO BharatPe

      `,
		location: "India",
		image: "/images/company-logo/BharatPe.jpg",
		date: "",
		result: "In Process",
	},
	{
		id: 8,
		name: "Publicis Sapients",
		title: "Associate Software Engineer",
		description: `

      Round 1: Technical Interview

      Round 2: HR Interview Round
      `,
		location: "India",
		image: "/images/company-logo/PublicisSapients.png",
		date: "",
		result: "Selected",
	},
	{
		id: 9,
		name: "Josh Technology Group",
		title: "",
		description: "",
		location: "India",
		image: "",
		date: "",
		result: "Rejected",
	},
	{
		id: 10,
		name: "Juspay",
		title: "",
		description: "",
		location: "India",
		image: "",
		date: "",
		result: "Rejected",
	},
	{
		id: 11,
		name: "Truminds",
		title: "",
		description: "",
		location: "India",
		image: "/images/company-logo/Truminds.png",
		date: "",
		result: "Rejected",
	},
	{
		id: 12,
		name: "Matelabs",
		title: "",
		description: "",
		location: "India",
		image: "/images/company-logo/MateLabs.png",
		date: "",
		result: "Rejected",
	},
	{
		id: 13,
		name: "Labcolabs",
		title: "",
		description: "",
		location: "India",
		image: "/images/company-logo/LabColabs.jpeg",
		date: "",
		result: "Selected",
	},
	{
		id: 14,
		name: "Limelight Networks",
		title: "Fullstack Developer",
		description: `

      Round 1: Take home assignment
      Round 2: Interview discussing about role, company and behavioural questions.

    `,
		location: "Remote USA",
		image: "/images/company-logo/LimeLightNetworks.png",
		date: "",
		result: "Rejected",
	},
	{
		id: 15,
		name: "Couchbase",
		title: "Software Engineer",
		description: `

      Round 1: Initial screening with recruiter over call
      Round 2: 2 simple ds-algo Questions with follow ups involving synchronization and writing code for it.

    `,
		location: "Bangalore India",
		image: "/images/company-logo/Couchbase.png",
		date: "",
		result: "Rejected",
	},
];
