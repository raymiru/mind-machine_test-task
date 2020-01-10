import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'
import Login from '@/views/Login'
import { routes } from '@/router'

const localVue = createLocalVue()
localVue.use(VueRouter)


describe('Login Page', () => {
  let wrapper

  beforeEach(() => {
    const router = new VueRouter({ routes })
    wrapper = shallowMount(Login, {
      localVue,
      router
    })
  })

  const checkError = async function() {
    wrapper.find('#codeword').setValue(this.val)
    wrapper.find('.codeword-form').trigger('submit.prevent')
    await wrapper.vm.$nextTick()
    expect(wrapper.find('.error-message').text()).toBe(this.text)
  }

  it(
    'correct error if codeword is required',
    checkError.bind({
      val: '',
      text: 'Not so fast! Codeword is required!'
    })
  )

  it(
    'correct error if codeword is incorrect',
    checkError.bind({
      val: 'hello world',
      text: 'You can do better! Incorrect code word!'
    })
  )

  it(
    'no error message if codeword is correct',
    checkError.bind({
      val: 'test',
      text: ''
    })
  )

  it('should go to main page', async () => {
    wrapper.find('#codeword').setValue('test')
    wrapper.find('.codeword-form').trigger('submit.prevent')
    await wrapper.vm.$nextTick()
    expect(wrapper.vm.$route.path).toBe('/main')
  })
})
