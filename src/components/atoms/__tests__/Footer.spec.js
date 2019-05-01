import { shallowMount } from '@vue/test-utils';
import { Footer } from '@/components/atoms';

describe('Footer.vue', () => {
    it('should render props.class and slots when passed', () => {
        const name = 'Footer';
        const wrapper = shallowMount(Footer, {
            propsData: {
                class: 'red'
            },
            slots: {
                default: name
            }
        });

        expect(wrapper.text()).toMatch(name);
        expect(wrapper.attributes('class')).toMatch('red');
    });
});