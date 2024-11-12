<script setup lang="ts">

import {onMounted, ref, reactive} from "vue";
import type {Category} from "@/types";
import serviceProvider from "@/services";
import type { Loader } from "@/components/types.ts"
import CategoryWrapper from "@/components/category/CategoryWrapper.vue";

const categories = reactive<Loader<Category>>({
    items: [],
    loading: true
})

async function fetchCategories() {
    try {
        categories.items = await serviceProvider.getCategoriesService().get({limit: 8, offset: 0})
    } catch (e) {
        console.error(e)
    } finally {
        categories.loading = false
    }
}

onMounted(()=> {
    fetchCategories();
})
</script>

<template>
    <main class="container mx-auto">
        <h1 class="text-center font-semibold p-8">Product Categories</h1>
        <CategoryWrapper :items ="categories.items" :loading="categories.loading" />
    </main>
</template>
