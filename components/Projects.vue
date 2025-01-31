<script lang="ts" setup>
import { ProjectItem } from "#components";

const projects = ref<HTMLDivElement | null>(null);

onMounted(() => {
	const projectsObsFunc = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add("visible");
				observer.unobserve(entry.target);
			}
		});

	};

	const projectsObs = new IntersectionObserver(projectsObsFunc);
	projects.value!.childNodes.forEach(el => {
		projectsObs.observe(el as Element);
	})
});
</script>

<template>
	<a id="projects" name="projects" class="scroll-mt-32" />
	<div class="page-part h-auto flex-col gap-10 pb-8 overflow-x-hidden">
		<h2 class="text-3xl">Projects</h2>
		<div class="
				flex flex-col gap-10 items-center
				w-[90%] md:w-[85%] lg:w-[80%] xl:w-[75%] 2xl:w-[70%]
			" ref="projects">
			<ProjectItem name="Schwarzschild Raytracer" image1="/images/projects/schwarzschild_raytracer/schwarzschild1.png"
				image2="/images/projects/schwarzschild_raytracer/schwarzschild2.png"
				ghUrl="https://github.com/yachim/schwarzschild-raytracer" align="left">
				<p>
					One of the many consequences of the theory of general relativity is that light follows a curved path in spacetime.
					This project uses the <em>Schwarzschild metric</em> which describes the spacetime around a stationary non-rotating black hole.
				</p>
				<p>
					The project is built in <em>C++</em> with <em>OpenGL</em>.
					Raytracing is implemented in <em>GLSL</em> with the use of <em>RK4</em>.
					<em>GLM</em> handles the mathematical computations.
					The program allows the user to spawn several objects, animate them, export a video, and many more.
				</p>

				<template #extra-links-before>
					<SocialButton title="`Schwarzschild Raytracer's playlist`" icon="fa-brands fa-youtube" href="https://www.youtube.com/playlist?list=PLYFrWeMzFKBmzOyN9_OFjNwq-CUlwr6d5" />
				</template>
			</ProjectItem>

			<ProjectItem name="Geodesics" image1="/images/projects/geodesics/geodesics1.png"
				image2="/images/projects/geodesics/geodesics2.png" siteUrl="https://yachim.cz/geodesics"
				ghUrl="https://github.com/yachim/geodesics" align="right">
				<p>
					A geodesic is the shortest path between two points in curved space.
					Given the initial position and direction, one can compute the geodesic.
					One example of a geodesic is the path of an airplane that looks curved on a flat map.
				</p>
				<p>
					Using <em>React</em> and styled with <em>Tailwind CSS</em>,
					the app allows the user to input any surface and compute the geodesic given the initial conditions using the <em>Euler method</em> or the <em>RK4</em>.
					The extrinsic view is handled with <em>Three.js</em> and the intrinsic view uses <em>JSXGraph</em>.
				</p>
			</ProjectItem>

			<ProjectItem name="SfPets" image1="/images/projects/sfpets/pets1.png"
				image2="/images/projects/sfpets/pets2.png" siteUrl="https://sfpets.yachim.cz"
				ghUrl="https://github.com/yachim/sfpets" align="left">
				<p>
					The popular online game Shakes & Fidget has a collectible minigame - pets.
					Each pet has different requirements for it to be available.
					The app tracks these requirements and displays the availability of pets.
				</p>
				<p>
					Built with <em>React</em> and styled with <em>SCSS</em>.
					The app uses <em>React Context</em> for state management
					and <em>React Query</em> with <em>localStorage</em> for fetching users' data.
				</p>
			</ProjectItem>
		</div>
	</div>
</template>

<style scoped>
.scrollbar {
	scrollbar-width: thin;
	scrollbar-color: theme("colors.accent") theme("colors.bg");
}
</style>
