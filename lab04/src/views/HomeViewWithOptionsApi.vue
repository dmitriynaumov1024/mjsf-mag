<script lang="ts">
import CategoryWrapper from "@/components/category/CategoryWrapper.vue"
import type {Category} from "@/types";

export default {
    components: {
        CategoryWrapper
    },
    data(){
        return {
            categories: null,
            loading: null
        }
    },
    methods: {
        async fetchCategories() {
            try {
                this.loading = true
                this.categories = await this.$serviceProvider.getCategoriesService().get({limit: 8, offset: 0})
            } catch (e) {
                console.error(e)
            } finally {
                this.loading = false
            }
        }
    },
    mounted() {
        this.fetchCategories()
    }
}    
</script>

<template>
    <main class="container mx-auto">
        <h1 class="text-center font-semibold p-8"> My Shop Products Categories </h1>
        <CategoryWrapper :items ="this.categories" :loading="this.loading" />
    </main>
</template>
