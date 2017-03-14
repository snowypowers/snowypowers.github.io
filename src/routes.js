import Home from './content/Home.vue'
import Projects from './content/Projects.vue'
import NotFound from './content/NotFound.vue'

const routes = [
  {path: '/', component: Home},
  {path:'/projects', component: Projects},
  {path: '*', component: NotFound}
]

export default routes
