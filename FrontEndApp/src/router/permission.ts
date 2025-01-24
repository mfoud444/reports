import type {Router } from 'vue-router'

export function setupPageGuard(router: Router) {
  router.beforeEach(async (to, from, next) => {
    const isAuthenticated = true;
    // next({ name: 'dashboard' })
    if (to.meta.requiresAuth && !isAuthenticated) {
      next({ name: 'dashboard' })
    } else if (isAuthenticated && ['auth','signup', 'login', 'otp'].includes(to.name as string)) {
      next({ name: 'dashboard' })
    } else {
      next()
    }
  })
}
