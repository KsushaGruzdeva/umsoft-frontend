<script setup lang="ts">
    const cards = [
        {
            title: "Зелёная печать",
            info: "Программное обеспечение для экономии тонера при печати до 70%, контроля печати, отслеживания печати нецелевых документов",
            img: "green-stamp"
        },
        {
            title: "Pick-by-Voice",
            info: "Автоматизированная система управления складом, которая использует голосовые команды для идентификации и отбора товаров на складе",
            img: "pick-by-voice"
        },
        {
            title: "Garpix Load System",
            info: "Программное обеспечение для загрузки контейнеров, грузовиков, палет и других транспортных средств. Совместим с 1С",
            img: "garpix-load-system"
        }
    ]
</script>

<template>
    <section id="ProjectsAndCases" class="content-section">
        <div class="content-section__wrapper">
            <div class="content-section__container">
                <div class="products">
                    <div class="products__wrapper">
                        <h2 class="products__title">Продукты и кейсы</h2>
                        <div class="products__conteiner">
                            <input id="productsShowBtn" class="products__show-input" type="checkbox">
                            <label v-if="cards.length > 3" class="products__show-label button_outlined_black" for="productsShowBtn">
                                <span class="products__show-text">{{}}</span>
                            </label>
                            <div class="products__content">
                                <CardProjectsAndCases v-for="(card, key) in cards" :key="key" :title="card.title" :info="card.info" :img="card.img"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>