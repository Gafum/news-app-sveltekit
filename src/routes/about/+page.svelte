<script>
	const sections = [
		{
			name: "Introduction",
			description:
				"Welcome to 'News,' your ultimate source for timely and informative updates. Discover the latest happenings from around the world, contributed by a community of news enthusiasts and professionals."
		},
		{
			name: "Stay Informed",
			description:
				"With an intuitive interface, 'News' empowers you to access breaking news, insightful features, analyses, and captivating stories. From local events to global affairs, you'll never miss out on important information."
		},
		{
			name: "User-Curated Content",
			description:
				"'News' is more than a platform; it's a community where you can share your own news stories, experiences, and observations. Join a diverse group of voices shaping the news conversation."
		},
		{
			name: "Tailored Experience",
			description:
				"Personalize your newsfeed by choosing from various categories like politics, technology, science, and more. Our smart algorithms learn your preferences to deliver content that resonates with your interests."
		},
		{
			name: "Engage and Discuss",
			description:
				"Every article on 'News' is accompanied by a comments section, enabling you to engage in meaningful discussions, exchange ideas, and gain new perspectives from fellow readers."
		},
		{
			name: "Global Coverage, Local Focus",
			description:
				"'News' partners with reputable news agencies worldwide, offering a balanced blend of international headlines and hyper-local stories that matter to your community."
		},
		{
			name: "Multimedia Enrichment",
			description:
				"Immerse yourself in multimedia-rich articles featuring high-resolution images, videos, infographics, and interactive elements. Experience news in a dynamic and engaging way."
		},
		{
			name: "Archives and Research",
			description:
				"Our comprehensive archive system allows you to easily access and revisit past stories, creating a valuable resource for research, fact-checking, or nostalgic reminiscing."
		},
		{
			name: "Credibility and Accuracy",
			description:
				"Trust is paramount. The 'News' team of experienced editors and fact-checkers ensure that the content adheres to the highest journalistic standards, providing you with reliable and trustworthy news."
		}
	];
</script>

<div class="about-wrapper">
	{#each sections as { name, description } (name)}
		<h4>{name}</h4>
		<p>{description}</p>
	{/each}
</div>

<style lang="scss">
	.about-wrapper {
		padding: 5px 20px;

		h4 {
			font-size: 20px;
			margin-top: 15px;
			font-weight: bold;
			text-align: left;
		}

		p {
			margin-top: 5px;
			text-align: left;
		}
	}
</style>
