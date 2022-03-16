import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import Introduction from '@/views/Introduction.vue'
import Formula from '@/views/Formula.vue'
import VanillaBinomialDistribution from '@/views/VanillaBinomialDistribution'
import rendimentoIstruzione from '@/views/rendimentoIstruzione.vue'
import SellerProblem from '@/views/SellerProblem.vue'
import Conclusions from '@/views/Conclusions.vue'

const routes = [
  {
    path: '/',
    component: HomeView
  },
  {
    path: '/introduction',
    component: Introduction
  },
  {
    path: '/formula',
    component: Formula
  },
  {
    path: '/vanilla-binomial-distribution',
    component: VanillaBinomialDistribution
  },
  {
    path: "/rendimento-dell-istruzione",
    component: rendimentoIstruzione
  },
  {
    path: "/seller-problem",
    component: SellerProblem
  },
  {
    path: "/conclusions",
    component: Conclusions
  },

  {
    path: "/:catchAll(.*)", // redirect not found pages to homeview
    redirect: "/"
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// // scroll on top of window on route change
// router.beforeEach((to, from, next) => {
//   window.scrollTo(0, 0)
//   console.log(1)
//   // ...
// })

export default router
