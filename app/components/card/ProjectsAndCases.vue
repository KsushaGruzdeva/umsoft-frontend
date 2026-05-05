<script setup lang="ts">
    defineProps({
        title: {
            type: String,
            required: true
        },
        info: {
            type: String,
            required: true
        },
        img: {
            type: String,
            required: true
        }
    });
</script>

<template>
    <article itemscope itemtype="https://schema.org/Product" class="card-product">
        <div class="card-product__img-wrapper">
            <picture>
                <source class="card-product__img" :srcset="`https://mybitrix.polshakoff.space/upload/umsoft/${img}-1920.webp`" media="(min-width: 1441px)">
                <source class="card-product__img" :srcset="`https://mybitrix.polshakoff.space/upload/umsoft/${img}-1440.webp`" media="(min-width: 321px)">
                <source class="card-product__img" :srcset="`https://mybitrix.polshakoff.space/upload/umsoft/${img}-320.webp`" media="(min-width: 1px)">
                <img itemprop="image" class="card-product__img" :src="`https://mybitrix.polshakoff.space/upload/umsoft/${img}-1920.webp`" :alt="title">
            </picture>
        </div>
        <div class="card-product__content">
            <div itemprop="name" class="card-product__title">{{ title }}</div>
            <div itemprop="description" class="card-product__info">{{ info }}</div>
        </div>
    </article>
</template>