<script setup lang="ts">
const props = defineProps<{
	title: string;
	icon: string;
}>();
</script>

<template>
	<a :title="props.title" class="social-button">
		<font-awesome-icon :icon="props.icon" />
	</a>
</template>
