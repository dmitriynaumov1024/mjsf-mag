<template>
    <div class="container mx-6" v-if="auth.user">
        <h1 class="text-2xl font-bold mb-4 text-gray-800">My profile</h1>
        <div class="mb-4">
            <p class="mb-2">E-mail</p>
            <p>{{auth.user.email}}</p>
        </div>
        <div class="mb-4">
            <button class="button w-80" @click="doLogout">Log out</button>
        </div>
    </div>    
</template>

<script setup>
import { useRouter } from "vue-router"
import { useAuth } from "@/composables/useAuth"

let { auth, logout } = useAuth()
let router = useRouter()

function doLogout() {
    if (logout()) {
        setTimeout(()=> router.push("/"), 400)
    }
    else {
        console.log("something went wrong when trying to log out.")
    }
}

</script>
