import serviceProviderInstance from '@/services'

export const serviceProvider = {
  install: (app) => {
    app.config.globalProperties.$serviceProvider = serviceProviderInstance
    app.provide('serviceProvider', serviceProviderInstance)
  }
}
