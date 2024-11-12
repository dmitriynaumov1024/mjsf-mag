<template>
    <div class="container mx-6">
        <h1 class="text-2xl font-bold mb-4 text-gray-800">Log in</h1>
        <div class="mb-4">
            <p class="mb-2">E-mail</p>
            <input class="w-120" type="text" v-model="this.email" placeholder="mail@example.com" autocomplete="none">
        </div>
        <div class="mb-4">
            <p class="mb-2">Password</p>
            <input class="w-120" type="password" v-model="this.password" placeholder="******" autocomplete="none">
        </div>
        <div class="mb-6">
            <button class="button w-120" @click="this.completeLogin">Log in</button>
        </div>
        <div v-if="this.errorMessage">
            <p style="color: red;">{{this.errorMessage}}</p>
        </div>
    </div>
</template>
<script>
import { useAuth } from "@/composables/useAuth"

export default {
    data() {
        return {
            email: "",
            password: "",
            errorMessage: ""
        }
    },
    methods: {
        completeLogin() {
            if (this.email.length<2) {
                this.errorMessage = "E-mail is not valid."
            }
            else if (this.password.length<2) {
                this.errorMessage = "Password is incorrect."
            }
            else {
                let { login } = useAuth()
                if (login(this.email, this.password)) {
                    this.$router.push("/")
                }
                else {
                    this.errorMessage = "Something went wrong when trying to log in."
                }
            }
        }
    }
}
</script>

<style>
    input[type="text"], input[type="password"] {
        border-bottom: 2px solid #79a789;
        outline: none;
    }
    button.button {
        background-color: rgba(89,89,89, 0.1);
        border: 2px solid #79a789;
        padding: 0.25rem;
        text-align: center;
    }
    .w-120 {
        width: 30em;
        max-width: 100%;
    }
</style>
