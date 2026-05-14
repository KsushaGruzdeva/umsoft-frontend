<script setup lang="ts">
import TheForm from '../TheForm.vue';

const showSimpleForm = ref(false);

const clickHandler = () => {
    showSimpleForm.value = true;
};

const closeForm = () => {
    showSimpleForm.value = false;
};
</script>

<template>
    <section class="content-section content-section_black_color">
        <div class="content-section__wrapper">
            <div class="content-section__container">
                <div class="solution-demonstration">
                    <div class="solution-demonstration__container">
                        <h2 class="solution-demonstration__title">Закажите разработку ПО</h2>
                        <div class="solution-demonstration__info">Получите консультацию и оцените, как наши решения могут трансформировать вашу работу</div>
                        <div itemscope itemtype="https://schema.org/CommunicateAction" class="solution-demonstration__btn-wrapper">
                            <meta itemprop="name" content="Получить консультацию">
                            <button itemprop="target" class="button button_primary_white" type="button" @click="clickHandler">Получить консультацию</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <!-- Новая форма -->
    <TheForm :isOpen="showSimpleForm" @close="closeForm" />
</template>