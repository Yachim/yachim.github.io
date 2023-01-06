<script lang="ts" setup>
import ProjectItem from "../ProjectItem.vue";
import { ProjectsData } from "../../data";
</script>

<template>
<a id="projects" name="projects" class="scroll-mt-32" />
<div class="page-part h-auto flex-col gap-10">
	<h2 class="text-3xl">Projects</h2>
	<div class="flex flex-col gap-10 items-center w-3/5">
		<ProjectItem
			v-for="(project, index) in ProjectsData"
			v-bind:key="index"

			v-bind="project"
			:align="index % 2 ? 'right' : 'left'"
		/>
	</div>
</div>
</template>
