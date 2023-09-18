import { defineStore } from 'pinia'
export const useUserStore = defineStore({
  id: 'app-user',
  state: (): any => ({
    token: '',
    userInfo: null
  }),
  actions: {}
})
