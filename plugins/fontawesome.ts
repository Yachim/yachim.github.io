import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// This is important, we are going to let Nuxt worry about the CSS
config.autoAddCss = false

import { faChevronUp, faFloppyDisk, faArrowRight, faArrowUpRightFromSquare, faChevronLeft, faChevronRight, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
library.add(faFloppyDisk, faChevronUp, faGithub, faLinkedin, faArrowRight, faArrowUpRightFromSquare, faChevronLeft, faChevronRight, faEnvelope)

export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon, {})
})
