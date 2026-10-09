<script lang="ts">
	import Button from 'components/Button.svelte';
	import Stack from 'components/Stack.svelte';
	import Hero from 'components/Hero/Hero.svelte';
	import Page from 'components/Page.svelte';
	import Footer from 'components/Footer.svelte';
	import Mascot from 'components/Mascot.svelte';
	import Heading from 'components/Heading.svelte';

	import { page } from '$app/state';

	let coursesFs = page.data.coursesFs;
</script>

<svelte:head>
	<title>LibreLingo - learn a language for free</title>
	<meta
		name="description"
		content="LibreLingo is an experiment to create a community driven language-learning platform. Learn a language for free."
	/>
</svelte:head>

<main class="main-content app-page">
	<Page>
		<Hero>
			<Stack direction="column" spacing="m" fullHeight justify="center">
				<Stack spacing="m" direction="column" directionDesktop="row">
					<Stack shrink={4}>
						<Mascot shadow={false} glow={true} />
					</Stack>
					<Stack direction="column" justify="center" shrink={2}>
						<Heading level={1}>
							an experiment to create a community-driven language-learning platform
						</Heading>
					</Stack>
				</Stack>

				<Stack spacing="m" direction="column">
					<!-- For each courses available locally.. -->
					{#if coursesFs}
						<h3 style="text-align:center">Courses available locally</h3>
						{#each coursesFs as course (course.path)}
							<Stack justify="center">
								<Button style="primary" size="large" href={`/course/${course.path}`}>
									Start learning {course.language}
								</Button>
							</Stack>
						{/each}
					{/if}
				</Stack>
			</Stack>
		</Hero>
		<Footer />
	</Page>
</main>
