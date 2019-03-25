import { shallowMount } from '@vue/test-utils';
import { Button } from '@/components/atoms';

describe('Button.vue', () => {
  it('renders props.name when passed', () => {
    const name = 'Button';
    const wrapper = shallowMount(Button, {
      propsData: { name },
    });
    expect(wrapper.text()).toMatch(name);
  });
});
