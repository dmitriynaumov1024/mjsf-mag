<script setup lang="ts">

import {onMounted, ref, reactive} from "vue";
import type { Product } from "@/types";
import serviceProvider from "@/services";
import type { Loader } from "@/components/types.ts"
import ProductWrapper from "@/components/product/ProductWrapper.vue";

const products = reactive<Loader<Product>>({
    items: [],
    loading: true
})

async function fetchProducts() {
    try {
        products.items = await serviceProvider.getProductsService().get({limit: 8, offset: 0})
    } catch (e) {
        console.error(e)
    } finally {
        products.loading = false
    }
}

onMounted(()=> {
    fetchProducts();
})
</script>

<template>
    <main class="container mx-auto">
        <h1 class="text-center font-semibold p-8">Products</h1>
        <ProductWrapper :items ="products.items" :loading="products.loading" />
    </main>
</template>
