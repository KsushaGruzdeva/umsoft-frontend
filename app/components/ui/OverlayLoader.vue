<script setup lang="ts">
import { usePreloaderState } from '~/composables/useStates';

const preloader = usePreloaderState();
</script>

<template>
    <Teleport to="#teleports">
        <div v-if="preloader.status.value"  class="modal-form show-modal">
            <Loader />
        </div>
    </Teleport>
</template>