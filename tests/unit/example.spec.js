import { shallowMount } from '@vue/test-utils';
import { Button } from '@/components/atoms';

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const name = 'new message';
    const wrapper = shallowMount(Button, {
      propsData: { name },
    });
    expect(wrapper.text()).toMatch(name);
  });
});
