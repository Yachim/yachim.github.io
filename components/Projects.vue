<script lang="ts" setup>
import { ProjectItem, OtherProjectItem } from "#components";

const projects = ref<HTMLDivElement | null>(null);
const otherProjects = ref<HTMLDivElement | null>(null);

onMounted(() => {
	const projectsObsFunc = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add("visible");
				observer.unobserve(entry.target);
			}
		});

	};

	const otherProjectsObsFunc = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.childNodes.forEach(el => (el as Element).classList.add("visible"));
				observer.unobserve(entry.target);
			}
		});

	};

	const projectsObs = new IntersectionObserver(projectsObsFunc);
	projects.value!.childNodes.forEach(el => {
		projectsObs.observe(el as Element);
	})

	const otherProjectsObs = new IntersectionObserver(otherProjectsObsFunc);
	otherProjectsObs.observe(otherProjects.value!);
});
</script>

<template>
	<a id="projects" name="projects" class="scroll-mt-32" />
	<div class="page-part h-auto flex-col gap-10 pb-8">
		<h2 class="text-3xl">Projects</h2>
		<div class="flex flex-col gap-10 items-center w-3/5" ref="projects">
			<ProjectItem name="SfPets" image1="/images/projects/sfpets/pets1.png"
				image2="/images/projects/sfpets/pets2.png" siteUrl="https://sfpets.yachim.cz"
				ghUrl="https://github.com/yachim/sfpets" align="left" :order="0">
				<p>
					The popular online game Shakes & Fidget has a collectible minigame - pets.
					Each pet has different requirements for it to be collectable.
					The app tracks these requirements and displays the availability of pets.
				</p>
				<p>
					Built with <em>React</em> and styled with <em>SCSS</em>.
					The app uses <em>React Context</em> for state management
					and <em>React Query</em> with <em>Axios</em> for fetching user's data.
				</p>
			</ProjectItem>
		</div>
		<h3 class="text-2xl">Other smaller projects</h3>
		<div ref="otherProjects"
			class="flex flex-row justify-center gap-10 overflow-x-auto w-3/4 scrollbar relative pb-5">
			<OtherProjectItem :order="0" name="Breaking Bad Quotes Client" image="/images/other_projects/brba.png"
				siteUrl="https://brba-quotes.yachim.cz/" ghUrl="https://github.com/Yachim/brba-quotes-client">
				A <em>React</em> app that uses an
				<a href="https://github.com/shevabam/breaking-bad-quotes">API</a>
				to request a quote from the Breaking Bad series.
				<em>Tailwind CSS</em> was used for styling
				and <em>React Query</em> with <em>Axios</em> for fetching.
			</OtherProjectItem>

			<OtherProjectItem :order="1" name="Ascii Tree Builder" image="/images/other_projects/ascii_tree.png"
				siteUrl="https://ascii-tree-builder.yachim.cz/" ghUrl="https://github.com/yachim/ascii-tree-builder">
				An app for creating ASCII file trees made with <em>Svelte</em>
				and styled with <em>Tailwind CSS</em>.
				State management is done with the help of <em>stores</em>.
			</OtherProjectItem>

			<OtherProjectItem :order="2" name="Tower of Hanoi" image="/images/other_projects/hanoi.png"
				siteUrl="https://towerofhanoi.yachim.cz/" ghUrl="https://github.com/Yachim/towerofhanoi/">
				A famous mathematical puzzle called the
				<em>Tower of Hanoi</em> built in <em>React</em>.
				The app is using <em>SCSS</em> for styling.
				<em>React Context</em> is used for state management.
			</OtherProjectItem>
		</div>
	</div>
</template>

<style scoped>
.scrollbar {
	scrollbar-width: thin;
	scrollbar-color: theme("colors.accent") theme("colors.bg");
}
</style>
