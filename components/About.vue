<template>
	<a id="top" />
	<div class="page-part">
		<div class="grid grid-cols-aboutArea grid-rows-aboutArea gap-x-8 gap-y-8 content-center">
			<h1 class="col-start-1 col-end-3 font-medium text-6xl text-accent text-center">Jáchym Kohout</h1>
			<h2 class="col-start-1 col-end-3 text-3xl text-center">Frontend developper</h2>

			<div class="flex justify-self-end gap-3 col-start-1 col-end-1">
				<SocialButton title="GitHub" icon="fa-brands fa-github" href="https://github.com/Yachim" />
				<SocialButton title="LinkedIn" icon="fa-brands fa-linkedin"
					href="https://www.linkedin.com/in/jachym-kohout/" />
				<SocialButton title="Email" icon="fa-solid fa-envelope" href="mailto:jachym.kohout@gmail.com" />
			</div>

			<div class="col-start-2 col-end-2 flex gap-3">
				<a href="#projects"
					class="flex gap-3 items-center justify-self-start transition-seeSkills duration-300 hover:gap-5 py-[auto] px-7 border-accent border-2 rounded-[3rem] hover:bg-accent">
					See projects
					<ClientOnly>
						<font-awesome-icon icon="fa-solid fa-arrow-right" />
					</ClientOnly>
				</a>
			</div>
		</div>
	</div>
</template>
