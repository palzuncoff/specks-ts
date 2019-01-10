import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import 'jsdom-global/register';
import * as React from 'react';
import App from './App';
import * as collection from './constants';

Enzyme.configure({ adapter: new Adapter() });

export interface IGlobal {
    localStorage: any;
}

const defaultField: string = JSON.stringify(collection.END_GAME);

describe('<App/>', () => {
    function setUp(): any {
        return Enzyme.mount(<App/>)
    }
    beforeEach(() => {
        localStorage.setItem('field', defaultField);
        localStorage.setItem('pass', '0');
    });
    it('should move speck down', () => {
        const component: any = setUp();
        const button: any = component.find('button').at(3);
        expect(component.state().field[0]).toEqual(collection.END_GAME[0]);
        expect(component.state().field[1]).toEqual(collection.END_GAME[1]);
        button.simulate('click');
        expect(component.state().field[0]).toEqual([1, 2, 0, 4]);
        expect(component.state().field[1]).toEqual([5, 6, 3, 8])
    });
    it('should move speck up', () => {
        const component: any = setUp();
        const button: any = component.find('button').at(11);
        expect(component.state().field[1]).toEqual(collection.END_GAME[1]);
        expect(component.state().field[2]).toEqual(collection.END_GAME[2]);
        button.simulate('click');
        expect(component.state().field[1]).toEqual([5, 6, 11, 8]);
        expect(component.state().field[2]).toEqual([9, 10, 0, 12])
    });
    it('should move speck left', () => {
        const component: any = setUp();
        const button: any = component.find('button').at(8);
        expect(component.state().field[1]).toEqual(collection.END_GAME[1]);
        button.simulate('click');
        expect(component.state().field[1]).toEqual([5, 6, 8, 0]);
    });
    it('should move speck right', () => {
        const component: any = setUp();
        const button: any = component.find('button').at(6);
        expect(component.state().field[1]).toEqual(collection.END_GAME[1]);
        button.simulate('click');
        expect(component.state().field[1]).toEqual([5, 0, 6, 8]);
    });
    it('should store pass', () => {
        const component: any = setUp();
        const button: any = component.find('button').at(6);
        button.simulate('click');
        expect(localStorage.getItem('pass')).toEqual('1');
    });
    it('should show passes count', () => {
        const component: any = setUp();
        const button: any = component.find('button').at(6);
        button.simulate('click');
        expect(component.find('.test-pass-count-class').text()).toEqual('1');
    });
    it('should reset count', () => {
        localStorage.setItem('pass', '5');
        const component: any = setUp();
        const button: any = component.find('.test-new-game');
        button.simulate('click');
        expect(component.find('.test-pass-count-class').text()).toEqual('0');
    })
});
