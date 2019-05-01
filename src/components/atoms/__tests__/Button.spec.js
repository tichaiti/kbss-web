import { shallowMount } from '@vue/test-utils';
import { Button } from '@/components/atoms';

describe('Button.vue', () => {
  it('should render props.class and slots when passed', () => {
    const name = 'Button';
    const wrapper = shallowMount(Button, {
      propsData: {
        class: 'red'
      },
      slots: {
        default: name
      }
    });
    expect(wrapper.text()).toMatch(name);
    expect(wrapper.attributes('class')).toBe('red');
  });
});
