import { useConfig } from 'nextra-theme-docs';
import { Logo } from './components/logo';
import { useRouter } from 'next/router';

export default {
	logo: <Logo />,
	project: {
		link: 'https://github.com/geiger01/socialkit-docs',
	},
	docsRepositoryBase: 'https://github.com/geiger01/socialkit-docs',

	useNextSeoProps() {
		return {
			titleTemplate: 'Documentation - SocialKit',
			openGraph: {
				title:
					'Documentation | SocialKit - Analyze Social Media Videos with a simple API',
				description:
					'SocialKit is a powerful API for analyzing social media videos, extracting summaries, transcripts, and engagement metrics from YouTube, TikTok, Instagram, and more.',
				// images: [
				// 	{
				// 		url: 'https://socialkit-assets.s3.amazonaws.com/socialkit-og+(1).png',
				// 		width: 1200,
				// 		height: 630,
				// 	},
				// ],
			},
		};
	},
	head() {
		const config = useConfig();
		const title = config.title + ' | SocialKit';

		const description =
			'SocialKit is a powerful API for analyzing social media videos, extracting summaries, transcripts, and engagement metrics from YouTube, TikTok, Instagram, and more.';
		const ogImage =
			'https://socialkit-assets.s3.amazonaws.com/socialkit-og+(1).png';

		return (
			<>
				<title>{title}</title>
				<meta property='og:title' content={title} />
				<meta property='description' content={description} />
				<meta property='og:description' content={description} />
				{/* <meta property='og:image' content={ogImage} /> */}
			</>
		);
	},
	footer: {
		text: 'SocialKit Docs',
	},
};
