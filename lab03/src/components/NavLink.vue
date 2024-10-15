<script setup lang="ts">
import {RouterLink} from "vue-router";
defineProps<{
    to: string
}>()
</script>

<template>
    <RouterLink :to="to" aria-current="page"
     activeClass="font-semibold text-black dark:text-white bg-gray-100"
     class="block py-2 px-3 rounded hover:bg-gray-100">
        <slot></slot>
    </RouterLink>    
</template>
