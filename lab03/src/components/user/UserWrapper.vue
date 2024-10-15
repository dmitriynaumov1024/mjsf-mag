<script setup lang="ts">
import type { Loader } from "@/components/types";
import UserCard from "./UserCard.vue";
import UserSkeleton from "@/components/Skeleton.vue";

withDefaults(defineProps<Loader<User>>(), {
    items: () => [],
    loading: false
});
</script>
<template>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <template v-if="items">
            <template v-for="user in items" :key="user.id">
                <UserCard  :item="user" />
            </template>
        </template>
        <template v-else-if="loading">
            <template v-for="index in 4" :key="index">
                <UserSkeleton />
            </template>
        </template>
        <template v-else> 
            <p>Error: could not load Users. Check console for more info.</p>
        </template>
    </div>
</template>
