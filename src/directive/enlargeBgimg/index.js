import Vue from 'vue'
Vue.directive('enlarge-styleBackground', function(el) {
  el.style.backgroundSize = '100%'
  el.style.backgroundRepeat = 'no-repeat'
  el.style.backgroundPosition = '50% 50%'
  el.style.overflow = 'hidden'
  el.style.transition = 'all 0.3s ease-in-out'
  el.style.cursor = 'pointer'
  el.onmouseover = () => {
    el.style.backgroundSize = '110%'
  }
  el.onmouseout = () => {
    el.style.backgroundSize = '100%'
  }
})
