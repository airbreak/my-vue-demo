import store from '@/store'

const { body } = document
const WIDTH = 1024
const RATIO = 3

export default {
  watch: {
    $route (route) {
      if (this.device === 'mobile' && this.sidebar.opened) {
        store.dispach('CloseSideBar', {widthoutAnimation: false})
      }
    }
  },
  beforeMount () {
    window.addEventListener('resize', this.resizeHandlder)
  },
  mounted () {
    const isMoile = this.isMobile()
    if (isMoile) {
      store.dispatch('ToggleDevice', 'mobile')
      store.dispatch('CloseSideBar', {widthoutAnimation: true})
    }
  },
  methods: {
    isMobile () {
      const rect = body.getBoundingClientRect()
      return rect.width - RATIO < WIDTH
    },

    resizeHandlder () {
      if (!document.hidden) {
        const isMobile = this.isMobile()
        store.dispatch('ToggleDevice', isMobile ? 'mobile' : 'desktop')
        if (isMobile) {
          store.dispatch('CloseSideBar', {widthoutAnimation: true})
        }
      }
    }
  }
}
