<script setup lang="ts">
const props = defineProps<{
	title: string;
	icon: string;
	href: string;
}>();
</script>

<template>
	<a :title="props.title" class="social-button" :href="props.href" target="_blank" >
		<font-awesome-icon :icon="props.icon" />
	</a>
</template>
