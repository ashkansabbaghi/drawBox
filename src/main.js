import {
    createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import VueLodash from 'vue-lodash'
import lodash from 'lodash'
import 'bootstrap/dist/css/bootstrap.css'

createApp(App).use(store).use(lodash).use(router).mount('#app')