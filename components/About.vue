<template>
	<a id="top" />
	<div class="page-part">
		<div
			class="grid grid-areas-aboutMobile sm:grid-areas-about grid-cols-aboutMobile sm:grid-cols-about grid-rows-aboutMobile sm:grid-rows-about gap-x-8 gap-y-8 place-items-center">
			<h1 class="grid-in-heading font-medium text-6xl text-accent text-center">Jáchym Kohout</h1>
			<h2 class="grid-in-subheading text-3xl text-center">Frontend developper</h2>

			<div class="flex gap-3 grid-in-socials">
				<SocialButton title="GitHub" icon="fa-brands fa-github" href="https://github.com/Yachim" />
				<SocialButton title="LinkedIn" icon="fa-brands fa-linkedin"
					href="https://www.linkedin.com/in/jachym-kohout/" />
				<SocialButton title="Email" icon="fa-solid fa-envelope" href="mailto:jachym.kohout@gmail.com" />
			</div>

			<a href="#projects"
				class="flex grid-in-projects-button gap-3 items-center transition-seeSkills duration-300 hover:gap-5 py-2 px-7 border-accent border-2 rounded-[3rem] hover:bg-accent">
				See projects
				<ClientOnly>
					<font-awesome-icon icon="fa-solid fa-arrow-right" />
				</ClientOnly>
			</a>
		</div>
	</div>
</template>
