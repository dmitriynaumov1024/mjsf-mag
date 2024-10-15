<script setup lang="ts">

import {onMounted, ref, reactive} from "vue";
import type { User } from "@/types";
import serviceProvider from "@/services";
import type { Loader } from "@/components/types.ts"
import UserWrapper from "@/components/user/UserWrapper.vue";

const users = reactive<Loader<User>>({
    items: [],
    loading: true
})

async function fetchUsers() {
    try {
        users.items = await serviceProvider.getUsersService().get({limit: 8, offset: 0})
    } catch (e) {
        console.error(e)
    } finally {
        users.loading = false
    }
}

onMounted(()=> {
    fetchUsers();
})
</script>

<template>
    <main class="container mx-auto">
        <h1 class="text-center font-semibold p-8">Users</h1>
        <UserWrapper :items ="users.items" :loading="users.loading" />
    </main>
</template>
