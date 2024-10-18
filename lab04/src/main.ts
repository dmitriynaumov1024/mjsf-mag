import '@/assets/main.scss'

import {createApp} from 'vue'
import {createPinia} from 'pinia'
import directivesPlugin from '@/plugins/directives';
import i18n from '@/plugins/i18n'
import App from './App.vue'
import DemoI18n from "@/DemoI18n.vue";
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(directivesPlugin);
app.use(i18n, {
    greetings: {
        hi: 'Привіт!'
    }
});

import {serviceProvider} from "@/plugins/service-provider"
app.use(serviceProvider)

document.addEventListener("click", (e)=> {
    console.log(e)
})

app.mount('#app')
