<script setup lang="ts">
</script>

<template>
    <nav class="header__navigation">
        <ul class="header__navigation-list">
            <div class="header__navigation-item-container">
                <UiHeaderListItem :link="'#DevelopmentManagement'" :name="'Направления разработки'" />
                <UiHeaderListItem :link="'#ProjectsAndCases'" :name="'Проекты и кейсы'" />
            </div>
            <div class="header__navigation-item-container">
                <UiHeaderListItem :link="'#AboutTheCompany'" :name="'О компании'" />
                <UiHeaderListItem :link="'#Contacts'" :name="'Контакты'" />
            </div>
        </ul>
    </nav>
</template>