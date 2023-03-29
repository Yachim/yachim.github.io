<template>
	<a id="projects" name="projects" class="scroll-mt-32" />
	<div class="page-part h-auto flex-col gap-10 pb-8">
		<h2 class="text-3xl">Projects</h2>
		<div class="flex flex-col gap-10 items-center w-3/5">
			<ProjectItem name="SfPets" image1="/images/projects/sfpets/pets1.png"
				image2="/images/projects/sfpets/pets2.png" siteUrl="https://sfpets.yachim.cz"
				ghUrl="https://github.com/yachim/sfpets" align="left">
				<p>
					A helper for the popular online game
					<span class="emphasized">Shakes & Fidget</span>.
					Once a user reaches certain level, they gain access to a collectible minigame -
					<span class="emphasized">pets</span>.
					Each pet has different
					<span class="emphasized">requirements</span>
					for it to be collectable.
					For example, some pets are available at night, others during the day.
					This app
					<span class="emphasized">checks the availability</span>
					and lets the user
					<span class="emphasized">mark collected pets</span>.
				</p>
			</ProjectItem>
		</div>
		<h3 class="text-2xl">Other projects</h3>
		<div class="flex flex-row justify-center gap-10 overflow-x-auto w-3/4 scrollbar relative pb-5">
			<OtherProjectItem name="Breaking Bad Quotes Client" image="/images/other_projects/brba.png"
				siteUrl="https://brba-quotes.yachim.cz/" ghUrl="https://github.com/Yachim/brba-quotes-client">
				<p>
					Using the
					<span class="emphasized">React</span>
					library an
					<span class="emphasized">API</span>
					returning a response containing the
					author and the quote, I created a client that uses
					<span class="emphasized">React query</span>
					to fetch a quote and displays it on the client.
				</p>
			</OtherProjectItem>

			<OtherProjectItem name="Ascii Tree Builder" image="/images/other_projects/ascii_tree.png"
				siteUrl="https://ascii-tree-builder.yachim.cz/" ghUrl="https://github.com/yachim/ascii-tree-builder">
				<p>
					An app built in
					<span class="emphasized">Svelte</span>.
					On the first panel the user can add folders and files. The folders and files can be renamed
					and rearranged. The other panel updates the ascii output in real time.
					Real time updates to the UI required the usage of
					<span class="emphasized">stores</span>.
				</p>
			</OtherProjectItem>

			<OtherProjectItem name="Tower of Hanoi" image="/images/other_projects/hanoi.png"
				siteUrl="https://towerofhanoi.yachim.cz/" ghUrl="https://github.com/Yachim/towerofhanoi/">
				<p>
					A famous mathematical puzzle called the
					<span class="emphasized">Tower of Hanoi</span>
					built in
					<span class="emphasized">React</span>.
					The user can change the number of blocks in the
					puzzle, undo and redo their moves.
					The game counts user's total number of moves and allows to show all his moves.
				</p>
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
