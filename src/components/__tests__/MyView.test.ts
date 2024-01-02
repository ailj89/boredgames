import { render, screen} from '@testing-library/vue';
import {describe, it, expect} from 'vitest'
import MyView from '../MyView.vue'

describe('MyView', () => {
    const viewText = 'Hello from inside a view';

    it('render span correctly', async () => {
        // arr ange
        const viewId = 'viewId';
        render(MyView, {
            props: {
                element: 'span',
                id: viewId
            },
            slots: {default: viewText}
        }) // mount components

        const view = await screen.findByText(viewText);

        expect(view.id).toBe(viewId);
        expect(view.innerHTML).toBe(viewText);
        expect(view.nodeName).toBe('SPAN');

        // expect(view).toContain('Hello from inside a view');
    })

    // it('snap shot matches', () => {
    //     const wrapper = render(MyView, {props: {element: 'div'}});
    //     expect(wrapper).toMatchSnapshot();
    // })

    //takes snapshot of the html code and compares it to future code
})
