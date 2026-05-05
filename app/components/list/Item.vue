<script setup lang="ts">
    defineProps({
        num: {
            type: String,
            required: true
        },
        text: {
            type: String,
            required: true
        }
    });
</script>

<template>
    <li class="about-us__item">
        <div class="about-us__num">{{ num }}</div>
        <div class="about-us__text">{{ text }}</div>
    </li>
</template>