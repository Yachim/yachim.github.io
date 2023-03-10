import petsImg1 from "@/assets/pets1.png";
import petsImg2 from "@/assets/pets2.png";

// type also defined in /src/components/ProjectItem.vue
// importing type from file in Vue component is not possible
const projectsData: {
	name: string;
	description: string;
	image1: string;
	image2: string;
	siteUrl: string;
	ghUrl: string;
}[] = [
		{
			name: "SfPets",
			description: "A helper for the popular online game [Shakes & Fidget]. \
			Once a user reaches certain level, they gain access to a collectible minigame - [pets]. \
			Each pet has different [requirements] for it to be collectable. \
			For example, some pets are available at night, others during the day. \
			This app [checks the availability] and lets the user [mark collected pets].",
			image1: petsImg1,
			image2: petsImg2,
			siteUrl: "https://sfpets.yachim.cz",
			ghUrl: "https://github.com/yachim/sfpets"
		}
	];

export default projectsData;
