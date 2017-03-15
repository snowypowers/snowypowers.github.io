import Home from './content/Home.vue'
import Projects from './content/Projects.vue'
import NotFound from './content/NotFound.vue'
import Contact from './content/Contact.vue'
import About from './content/About.vue'

//Projects
import ProjHome from './proj/ProjHome.vue'
import GHPage from './proj/GHPage.vue'

const projChildren = [
  {path: '', redirect: 'home'},
  {path: 'home', component: ProjHome},
  {path: 'ghpage', component: GHPage}
]

const routes = [
  {path: '/', component: Home},
  {path: '/about', component: About},
  {path:'/projects', component: Projects, children: projChildren},
  {path:'/contact', component: Contact},
  {path: '*', component: NotFound}
]

export default routes
