<script setup lang="ts">
    defineProps({
        title: {
            type: String,
            required: true
        },
        tags: {
            type: Array<string>,
            required: true
        }
    })
</script>

<template>
    <div class="card-development">
        <div itemscope itemtype="https://schema.org/Service" class="card-development__wrapper">
            <div itemprop="name" class="card-development__title">{{ title }}</div>
            <div class="card-development__content">
                <UiCardDevelopmentManagementTag v-for="(tag, key) in tags" :key="key" :name="tag"/>
            </div>
        </div>
    </div>
</template>