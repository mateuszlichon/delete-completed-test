import 'jsdom-global/register'
import React from 'react';
import { mount } from 'enzyme';
import configureMockStore from "redux-mock-store";
import { App } from '../components/App';
import { Provider } from 'react-redux';
import reducer from '../reducers/todos';

const props = {
    todos: [
        {
            text: '111',
            id: 1,
            completed: false
        },
        {
            text: '222',
            id: 2,
            completed: true
        },
        {
            text: '333',
            id: 3,
            completed: false
        },
        {
            text: '444',
            id: 4,
            completed: true
        },
        {
            text: '555',
            id: 5,
            completed: false
        },
    ],
    visibilityFilter: "SHOW_ALL",
}

const mockStore = configureMockStore();
const store = mockStore(props);

describe('todo list testing', () => {
    it('presents list of 5 todo items and deletes 2 completed todos when delete completed button is clicked', () => {
        const wrapper = mount(<Provider store={store}><App /></Provider>);
        expect(wrapper.find("[data-test='todo-item']").length).toBe(5);
        wrapper.find("[data-test='delete-completed-button']").simulate('click');
        expect(mount(
            <Provider store={mockStore({ ...props, todos: reducer(props.todos, store.getActions()[0]) })}>
                <App />
            </Provider>
        ).find("[data-test='todo-item']").length).toBe(3);
    })
})