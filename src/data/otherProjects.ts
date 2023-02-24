import brbaImg from "@/assets/brba.png";
import asciiTreeImg from "@/assets/ascii_tree.png";
import hanoiImg from "@/assets/hanoi.png";

// type also defined in /src/components/OtherProjectItem.vue
// importing type from file in Vue component is not possible
const otherProjectsData: {
	name: string;
	description: string;
	image: string;
	siteUrl: string;
	ghUrl: string;
}[] = [
		{
			name: "Breaking Bad Quotes Client",
			description: "Using the [React] library an [API] returning a response containing the author and the quote, \
			I created a client that uses [React query] to fetch a quote and displays it on the client.",
			image: brbaImg,
			siteUrl: "https://brba-quotes.yachim.cz/",
			ghUrl: "https://github.com/Yachim/brba-quotes-client"
		},
		{
			name: "Ascii Tree Builder",
			description: "An app built in [Svelte]. \
			On the first panel the user can add folders and files. The folders and files can be renamed \
			and rearranged. The other panel updates the ascii output in real time. \
			Real time updates to the UI required the usage of [stores].",
			image: asciiTreeImg,
			siteUrl: "https://ascii-tree-builder.yachim.cz/",
			ghUrl: "https://github.com/yachim/ascii-tree-builder"
		},
		{
			name: "Tower of Hanoi",
			description: "A famous mathematical puzzle called the [Tower of Hanoi] built in [React]. \
			The user can change the number of blocks in the puzzle, undo and redo their moves. \
			The game counts user's total number of moves and allows to show all his moves.",
			image: hanoiImg,
			siteUrl: "https://towerofhanoi.yachim.cz/",
			ghUrl: "https://github.com/Yachim/towerofhanoi/"
		},
	];

export default otherProjectsData;
