<script setup lang="ts">
import { ref } from 'vue';
import SimpleForm from '~/components/SimpleForm.vue';

const { showHeaderMenu, setVisibleHeaderMenu } = useHeaderMenu();
const showSimpleForm = ref(false);

const clickBurgerBtnHandler = () => {
    setVisibleHeaderMenu(true);
};

const clickCloseBtnHandler = () => {
    setVisibleHeaderMenu(false);
};

const clickGetKPBtnHandler = () => {
    showSimpleForm.value = true;
};

const closeForm = () => {
    showSimpleForm.value = false;
};
</script>

<template>
    <header class="header">
        <div class="header__container">
            <div class="header__wrapper">
                <div :class="['header__overlay', showHeaderMenu ? 'show-overlay' : '']">{{}}</div>
                <div class="header__logo-container">
                    <NuxtLink class="header__logo" to="/" />
                </div>
                <div :class="['header__menu', showHeaderMenu ? 'show-menu' : '']">
                    <button class="header__menu-btn" @click="clickCloseBtnHandler">{{}}</button>
                    <div class="header__navigation-container">
                        <UiHeaderNavigation />
                    </div>
                </div>
                <div itemscope itemtype="https://schema.org/CommunicateAction" class="header__btn-container">
                    <meta itemprop="name" content="Получить консультацию">
                    <button itemprop="target" class="button button_outlined_black" type="button" @click="clickGetKPBtnHandler">Получить консультацию</button>
                </div>
                <button class="header__burger-btn" @click="clickBurgerBtnHandler">{{}}</button>
            </div>
        </div>
    </header>
    
    <!-- Новая форма -->
    <SimpleForm :isOpen="showSimpleForm" @close="closeForm" />
</template>