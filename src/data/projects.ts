// type also defined in /src/components/ProjectItem.vue
// importing type from file in Vue component is not possible
const ProjectsData: {
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
			image1: "https://i.picsum.photos/id/717/1600/900.jpg?hmac=URP2_XVpUW2zMkDWsw7RSF-3o5qCtUkvtV_w2hM8cBY",
			image2: "https://i.picsum.photos/id/326/1600/900.jpg?hmac=Jo_9gPdNz5k_eRrpQLL_gEYfEI8p6UEiPzhXn86nUTM",
			siteUrl: "https://sfpets.yachim.cz",
			ghUrl: "https://github.com/yachim/sfpets"
		}
	];

export default ProjectsData;
