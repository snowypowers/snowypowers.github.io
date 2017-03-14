import Home from './content/Home.vue'
import Projects from './content/Projects.vue'
import NotFound from './content/NotFound.vue'
import Contact from './content/Contact.vue'

const routes = [
  {path: '/', component: Home},
  {path:'/projects', component: Projects},
  {path:'/contact', component: Contact},
  {path: '*', component: NotFound}
]

export default routes
