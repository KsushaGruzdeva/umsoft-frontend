<script setup lang="ts">
    defineProps({
        name: {
            type: String,
            required: true
        }
    });
</script>

<template>
    <div class="card-development__text">{{ name }}</div>
</template>

<style scoped>
.card-development__text {
    color: #00ADB5;
}
</style>