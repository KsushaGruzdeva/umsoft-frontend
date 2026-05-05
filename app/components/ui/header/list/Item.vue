<script setup lang="ts">
    const { setVisibleHeaderMenu } = useHeaderMenu();
    const props = defineProps({
        link: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        }
    });

    const clickLinkHandler = () => {
        setVisibleHeaderMenu(false);
        navigateTo(props.link);
    }
</script>

<template>
    <li class="header__navigation-item">
        <div style="cursor: pointer" class="header__navigation-link" @click="clickLinkHandler">{{ name }}</div>
    </li>
</template>