import { shallowMount } from '@vue/test-utils'
import Main from '@/views/Main'

describe('Main page', () => {
  let wrapper = shallowMount(Main)
  it('should be contain text', () => {
    expect(wrapper.text().toLowerCase()).toContain('you are awesome')
    expect(wrapper.text().toLowerCase()).toContain('chuck norris approves')
  })

  it('should be contain image', async () => {
    wrapper.setData({
      gifReady: true
    })
    await wrapper.vm.$nextTick()
    expect(wrapper.html()).toContain('img')
  })
})
