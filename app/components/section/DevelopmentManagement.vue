<script setup lang="ts">
    const cards = [
        {
            title: "Разработка приложений для управления и оптимизации в области логистики",
            tags: [
                "#Vue 3",
                "#Nuxt JS",
                "#Typescript",
                "#Java (Spring)"
            ]
        },
        {
            title: "Внедрение ПО",
            tags: [
                "#Voiceman",
                "#EME",
                "#MDM",
                "#Agile EMM",
                "#SafeUEM",
                "#Аврора",
                "#Scalefusion"
            ]
        },
        {
            title: "Web приложения",
            tags: [
                "#Vue 3",
                "#Nuxt JS",
                "#Typescript",
                "#Java (Spring)",
                "#Ruby",
                "#PHP",
                "#Python (Django, Flask)",
                "#Go"
            ]
        },
        {
            title: "Мобильные приложения",
            tags: [
                "#Vue 3",
                "#Nuxt JS",
                "#Typescript",
                "#Java (Spring)",
                "#Ruby"
            ]
        },
        {
            title: "Десктопные приложения",
            tags: [
                "#Vue 3",
                "#Nuxt JS",
                "#Typescript",
                "#Java (Spring)",
                "#Ruby",
                "#PHP",
                "#Python (Django, Flask)",
                "#Go"
            ]
        },
        {
            title: "DevOps",
            tags: [
                "#Vue 3",
                "#Nuxt JS",
                "#Typescript",
                "#Java (Spring)"
            ]
        }
    ]
</script>

<template>
    <section id="DevelopmentManagement" class="content-section">
        <div class="content-section__wrapper">
            <div class="content-section__container">
                <div class="development">
                    <div class="development__wrapper">
                        <h2 class="development__title">Направления разработки</h2>
                        <div class="development__content">
                            <CardDevelopmentManagement v-for="(card, key) in cards" :key="key" :title="card.title" :tags="card.tags"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>