<script setup lang="ts">
import type { Loader } from "@/components/types";
import CategoryCard from "./CategoryCard.vue";
import CategorySkeleton from "./CategorySkeleton.vue";

withDefaults(defineProps<Loader<Category>>(), {
    items: () => [],
    loading: false
});
</script>
<template>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <template v-if="items">
            <template v-for="category in items" :key="category.id">
                <CategoryCard  :item="category" />
            </template>
        </template>
        <template v-else-if="loading">
            <template v-for="index in 4" :key="index">
                <CategorySkeleton />
            </template>
        </template>
        <template v-else> 
            <p>Error: could not load Categories. Check console for more info.</p>
        </template>
    </div>
</template>
