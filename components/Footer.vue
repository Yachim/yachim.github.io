<template>
	<footer class="flex justify-center items-center p-4 gap-4">
		<p>
			<a target="_blank" href="https://github.com/yachim/yachim.github.io"
				class="underline text-accent hover:opacity-[0.65] transition-opacity duration-300">Project</a>
			by
			<a target="_top" href="/"
				class="underline text-accent hover:opacity-[0.65] transition-opacity duration-300">Jáchym Kohout</a>
		</p>
		<p class="flex gap-2">
			<a class="hover:text-accent transition-colors duration-300" href="https://github.com/Yachim" title="GitHub">
				<ClientOnly>
					<font-awesome-icon icon="fa-brands fa-github" />
				</ClientOnly>
			</a>
			<a class="hover:text-accent transition-colors duration-300"
				href="https://www.linkedin.com/in/jachym-kohout/" title="LinkedIn">
				<ClientOnly>
					<font-awesome-icon icon="fa-brands fa-linkedin" />
				</ClientOnly>
			</a>
		</p>
	</footer>
</template>
