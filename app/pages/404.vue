<script setup lang="ts">
</script>

<template>
    <main class="main">
        <div class="main__container">
            <section class="not-found">
                <div class="not-found__wrapper">
                    <div class="not-found__container">
                        <div class="not-found__content">
                            <div class="not-found__num">404</div>
                            <div class="not-found__text">Страница не найдена</div>
                            <div class="not-found__btn-wrapper">
                                <div class="not-found__caption">Вернитесь на главную</div>
                                <NuxtLink class="button-link button-link_outlined_black" to="/">Перейти на главную</NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </main>
</template>