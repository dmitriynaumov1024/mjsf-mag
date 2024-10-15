<script setup lang="ts">
import type {Item} from "@/components/types";
withDefaults(defineProps<Item<Product>>(), { item: null });
</script>

<template>
    <div class="bg-white shadow-md rounded-lg p-4">
        <router-link :to="`/product/${item.id}`">
            <figure>
                <img class="aspect-square" :src="item.images[0]" :alt="item.name"/>
                <figcaption class="font-semibold text-center py-2">{{ item.name }}</figcaption>
            </figure>
        </router-link>
    </div>
</template>

<style scoped>

</style>
