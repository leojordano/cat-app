import App from './App.vue'
import { createApp } from 'vue'
import mitt from 'mitt'
import './index.css'

import { VueMasonryPlugin } from "vue-masonry";

const emitter = mitt();
let app = createApp(App)
app.config.globalProperties.emitter = emitter;
app.use(VueMasonryPlugin);

app.mount('#app')
