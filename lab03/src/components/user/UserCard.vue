<script setup lang="ts">
import type {Item} from "@/components/types";
withDefaults(defineProps<Item<User>>(), { item: null });
</script>

<template>
    <div class="bg-white shadow-md rounded-lg p-4">
        <router-link :to="`/user/${item.id}`">
            <figure>
                <img class="aspect-square" :src="item.avatar" :alt="item.name"/>
                <figcaption class="font-semibold text-center py-2">{{ item.name }}</figcaption>
            </figure>
        </router-link>
    </div>
</template>

<style scoped>

</style>
