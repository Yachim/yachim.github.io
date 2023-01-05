import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "./index.css"

import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronUp, faFloppyDisk } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faFloppyDisk)
library.add(faChevronUp)
library.add(faGithub, faLinkedin)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)

app.use(router)

app.mount('#app')
