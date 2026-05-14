<script setup lang="ts">
import TheForm from './TheForm.vue';


const showSimpleForm = ref(false);

const clickHandler = () => {
    showSimpleForm.value = true;
};

const closeForm = () => {
    showSimpleForm.value = false;
};
</script>

<template>
    <section class="banner__wrapper">
        <div class="banner__container">
            <div class="banner">
                <div class="banner__content">
                    <div class="banner__info-wrapper">
                        <div class="banner__info">
                            <h1 class="banner__title">Умный софт – разработка и внедрение программного обеспечения</h1>
                            <div class="banner__text">Разрабатываем IT-решения для бизнеса и государственных структур</div>
                            <div itemscope itemtype="https://schema.org/CommunicateAction" class="banner__btn">
                                <meta itemprop="name" content="Связаться с нами">
                                <button itemprop="target" class="button" type="button" @click="clickHandler">Связаться с нами</button>
                            </div>
                        </div>
                    </div>
                    <div class="banner__img-wrapper">
                        <picture>
                            <source class="banner__img" srcset="https://mybitrix.polshakoff.space/upload/umsoft/main-img-1920_1.webp" media="(min-width: 1441px)">
                            <source class="banner__img" srcset="https://mybitrix.polshakoff.space/upload/umsoft/main-img-1440_1.webp" media="(min-width: 321px)">
                            <source class="banner__img" srcset="https://mybitrix.polshakoff.space/upload/umsoft/main-img-320_1.webp" media="(min-width: 1px)">
                            <img class="banner__img" src="https://mybitrix.polshakoff.space/upload/umsoft/main-img-1920_1.webp" alt="Умный софт – разработка и внедрение программного обеспечения">
                        </picture>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <TheForm :isOpen="showSimpleForm" @close="closeForm" />
</template>