import Vue from 'vue'
import homeContent from '@/components/homeContent'

describe('homeContent.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(homeContent)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
      .toEqual('Welcome to Your Vue.js App')
  })
})
