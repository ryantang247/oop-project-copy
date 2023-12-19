export const AMap3D = () => import('../..\\components\\AMap3D.vue' /* webpackChunkName: "components/a-map3-d" */).then(c => wrapFunctional(c.default || c))
export const AMapTest = () => import('../..\\components\\AMapTest.vue' /* webpackChunkName: "components/a-map-test" */).then(c => wrapFunctional(c.default || c))
export const ButtonGrids = () => import('../..\\components\\ButtonGrids.vue' /* webpackChunkName: "components/button-grids" */).then(c => wrapFunctional(c.default || c))
export const Choose = () => import('../..\\components\\choose.vue' /* webpackChunkName: "components/choose" */).then(c => wrapFunctional(c.default || c))
export const CommentSection = () => import('../..\\components\\CommentSection.vue' /* webpackChunkName: "components/comment-section" */).then(c => wrapFunctional(c.default || c))
export const DormFilter = () => import('../..\\components\\DormFilter.vue' /* webpackChunkName: "components/dorm-filter" */).then(c => wrapFunctional(c.default || c))
export const DormForm = () => import('../..\\components\\DormForm.vue' /* webpackChunkName: "components/dorm-form" */).then(c => wrapFunctional(c.default || c))
export const Dropdown = () => import('../..\\components\\Dropdown.vue' /* webpackChunkName: "components/dropdown" */).then(c => wrapFunctional(c.default || c))
export const Header = () => import('../..\\components\\Header.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c))
export const RoomDisplay = () => import('../..\\components\\RoomDisplay.vue' /* webpackChunkName: "components/room-display" */).then(c => wrapFunctional(c.default || c))
export const SamplrTest = () => import('../..\\components\\SamplrTest.vue' /* webpackChunkName: "components/samplr-test" */).then(c => wrapFunctional(c.default || c))
export const SelectGroup = () => import('../..\\components\\selectGroup.vue' /* webpackChunkName: "components/select-group" */).then(c => wrapFunctional(c.default || c))
export const SelectPage = () => import('../..\\components\\Select_page.vue' /* webpackChunkName: "components/select-page" */).then(c => wrapFunctional(c.default || c))
export const SliderCust = () => import('../..\\components\\SliderCust.vue' /* webpackChunkName: "components/slider-cust" */).then(c => wrapFunctional(c.default || c))
export const SmplrTest2 = () => import('../..\\components\\SmplrTest2.vue' /* webpackChunkName: "components/smplr-test2" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
