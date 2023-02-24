<script lang="ts" setup>
import ProjectItem from "../ProjectItem.vue";
import OtherProjectItem from "../OtherProjectItem.vue";
import { projectsData } from "../../data";
import { otherProjectsData } from "../../data";
</script>

<template>
	<a id="projects" name="projects" class="scroll-mt-32" />
	<div class="page-part h-auto flex-col gap-10 pb-8">
		<h2 class="text-3xl">Projects</h2>
		<div class="flex flex-col gap-10 items-center w-3/5">
			<ProjectItem v-for="(project, index) in projectsData" v-bind:key="index" v-bind="project"
				:align="index % 2 ? 'right' : 'left'" />
		</div>
		<h3 class="text-2xl">Other projects</h3>
		<div class="flex flex-row justify-center gap-10 overflow-x-auto w-3/4 scrollbar relative pb-5">
			<OtherProjectItem v-for="(project, index) in otherProjectsData" v-bind:key="index" v-bind="project" />
		</div>
	</div>
</template>

<style scoped>
.scrollbar {
	scrollbar-width: thin;
	scrollbar-color: theme("colors.accent") theme("colors.bg");
}
</style>
