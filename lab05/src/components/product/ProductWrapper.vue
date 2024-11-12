<script setup lang="ts">
import type { Loader } from "@/components/types";
import ProductCard from "./ProductCard.vue";
import ProductSkeleton from "@/components/Skeleton.vue";

withDefaults(defineProps<Loader<Product>>(), {
    items: () => [],
    loading: false
});
</script>
<template>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <template v-if="items">
            <template v-for="product in items" :key="product.id">
                <ProductCard  :item="product" />
            </template>
        </template>
        <template v-else-if="loading">
            <template v-for="index in 4" :key="index">
                <ProductSkeleton />
            </template>
        </template>
        <template v-else> 
            <p>Error: could not load Products. Check console for more info.</p>
        </template>
    </div>
</template>
