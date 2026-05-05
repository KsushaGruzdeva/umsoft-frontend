<script setup lang="ts">
    const listItems = [
        {
            num: "2+",
            text: "года профессионального опыта в автоматизации и роботизации"
        },
        {
            num: "100+",
            text: "профессионалов в команде, реализующих проекты «под ключ»"
        },
        {
            num: "250+",
            text: "успешно выполненных проектов в различных отраслях"
        },
        {
            num: "50+",
            text: "авторизованных партнеров и поставщиков оборудования"
        }
    ]
</script>

<template>
    <section id="AboutTheCompany" class="content-section content-section_grey_color">
        <div class="content-section__wrapper">
            <div class="content-section__container">
                <div class="about-us">
                    <div class="about-us__content">
                        <div class="about-us__col-left">
                            <div class="about-us__title">О компании</div>
                            <div class="about-us__group-info">
                                <p class="about-us__caption">Входит в состав группы UMSERV</p>
                                <p class="about-us__info">Умный Софт — дочерняя компания группы UMSERV. Мы разрабатываем программное обеспечение как в интересах внутренних, так и внешних заказчиков.</p>
                            </div>
                            <div class="about-us__group-info">
                                <p class="about-us__caption">Разработка и внедрение ПО для компаний и государственных организаций</p>
                                <p class="about-us__info">Разрабатываем и внедряем программные решения под задачи бизнеса и госструктур — от технического задания до запуска и сопровождения. Работаем по требованиям безопасности и совместимости с внутренними системами заказчика.</p>
                            </div>
                        </div>
                        <div class="about-us__col-right">
                            <ul class="about-us__list">
                                <ListItem v-for="(listItem, key) in listItems" :key="key" :num="listItem.num" :text="listItem.text" />
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>