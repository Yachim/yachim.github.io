<template>
	<a id="top" />
	<div class="page-part">
		<div class="grid grid-cols-aboutArea grid-rows-aboutArea gap-x-8 gap-y-8">
			<div class="flex flex-col gap-3 justify-end col-start-1 col-end-1 row-start-1 row-end-1">
				<h1 class="font-medium text-6xl text-accent text-right">Jáchym Kohout</h1>
				<h2 class="text-3xl text-right">Frontend developper</h2>
			</div>
			<div class="flex justify-self-end gap-3 col-start-1 col-end-1 row-start-2 row-end-2">
				<SocialButton title="GitHub" icon="fa-brands fa-github" href="https://github.com/Yachim" />
				<SocialButton title="LinkedIn" icon="fa-brands fa-linkedin"
					href="https://www.linkedin.com/in/jachym-kohout/" />
				<SocialButton title="Email" icon="fa-solid fa-envelope" href="mailto:jachym.kohout@gmail.com" />
			</div>

			<div class="h-full w-[2px] bg-text row-span-2 col-start-2 col-end-2"></div>

			<p class="w-par row-start-1 row-end-1 col-start-3 col-end-3">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit voluptate ipsa magnam porro,
				harum laborum ipsam nam dolorem quisquam recusandae odio quis assumenda error inventore atque velit
				neque quidem asperiores!
			</p>

			<div class="row-start-2 row-end-2 col-start-3 col-end-3 flex gap-3">
				<a href="#projects"
					class="flex gap-3 items-center justify-self-start transition-seeSkills duration-300 hover:gap-5 py-[auto] px-7 border-accent border-2 rounded-[3rem] hover:bg-accent">
					See projects
					<font-awesome-icon icon="fa-solid fa-arrow-right" />
				</a>
			</div>
		</div>
	</div>
</template>
