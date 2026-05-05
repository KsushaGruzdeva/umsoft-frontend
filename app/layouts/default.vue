<script setup lang="ts">
</script>

<template>
    <div>
        <TheHeader />
        <main class="main">
            <slot />
        </main>
        <TheFooter />
        <UiOverlayLoader />
        <ModalsBaseModal />
    </div>
</template>