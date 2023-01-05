<script lang="ts" setup>
const props = defineProps<{
	seeText: string;
	href: string;
}>();
</script>

<template>
<a :href="props.href" class="flex gap-3 items-center justify-self-start transition-seeSkills duration-300 hover:gap-5 py-[auto] px-7 border-accent border-2 rounded-[3rem] hover:bg-accent">
	See {{props.seeText}} <font-awesome-icon icon="fa-solid fa-arrow-right" />
</a>
</template>
