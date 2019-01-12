import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import 'jsdom-global/register';
import * as React from 'react';
import App from './App';
import * as collection from './constants';

Enzyme.configure({ adapter: new Adapter() });

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
        const button: any = component.find('.test-speck-btn').at(2);
        expect(component.state().field[0]).toEqual(collection.END_GAME[0]);
        expect(component.state().field[1]).toEqual(collection.END_GAME[1]);
        button.simulate('click');
        expect(component.state().field[0]).toEqual([1, 2, 0, 4]);
        expect(component.state().field[1]).toEqual([5, 6, 3, 8]);
    });
    it('should move speck up', () => {
        const component: any = setUp();
        const button: any = component.find('.test-speck-btn').at(10);
        expect(component.state().field[1]).toEqual(collection.END_GAME[1]);
        expect(component.state().field[2]).toEqual(collection.END_GAME[2]);
        button.simulate('click');
        expect(component.state().field[1]).toEqual([5, 6, 11, 8]);
        expect(component.state().field[2]).toEqual([9, 10, 0, 12]);
    });
    it('should move speck left', () => {
        const component: any = setUp();
        const button: any = component.find('.test-speck-btn').at(7);
        expect(component.state().field[1]).toEqual(collection.END_GAME[1]);
        button.simulate('click');
        expect(component.state().field[1]).toEqual([5, 6, 8, 0]);
    });
    it('should move speck right', () => {
        const component: any = setUp();
        const button: any = component.find('.test-speck-btn').at(5);
        expect(component.state().field[1]).toEqual(collection.END_GAME[1]);
        button.simulate('click');
        expect(component.state().field[1]).toEqual([5, 0, 6, 8]);
    });
    it('should store pass', () => {
        const component: any = setUp();
        const button: any = component.find('.test-speck-btn').at(5);
        button.simulate('click');
        expect(localStorage.getItem('pass')).toEqual('1');
    });
    it('should show passes count', () => {
        const component: any = setUp();
        const button: any = component.find('.test-speck-btn').at(5);
        button.simulate('click');
        expect(component.find('.test-pass-count-class').text()).toEqual('1');
    });
    it('should reset count', () => {
        localStorage.setItem('pass', '5');
        const component: any = setUp();
        const button: any = component.find('.test-new-game');
        button.simulate('click');
        expect(component.find('.test-pass-count-class').text()).toEqual('0');
    });
    it('should raver up after collection.TIME_OUT', (done) => {
        const component: any = setUp();
        component.find('.test-new-game').simulate('click');
        expect(component.state().raver).toEqual(0);
        setTimeout(() => {
            expect(component.state().raver).toEqual(2);
            done();
        }, collection.TIME_OUT * 2);
    });
    it('should set end to false', (done) => {
        const component: any = setUp();
        component.setState({ end: true });
        component.find('.test-new-game').simulate('click');
        setTimeout(() => {
            expect(component.state().end).toEqual(false);
            done();
        }, collection.TIME_OUT * 18);
    });
    it('should set end game', (done) => {
        localStorage.setItem('field', collection.PASS_TO_WIN);
        const component: any = setUp();
        const button: any = component.find('.test-speck-btn').last();
        button.simulate('click');
        expect(component.state().end).toEqual(false);
        setTimeout(() => {
            expect(component.state().end).toEqual(true);
            done()
        }, collection.TIME_OUT * 18);
    });
    it('should set best score', (done) => {
        localStorage.setItem('field', collection.PASS_TO_WIN);
        const component: any = setUp();
        const button: any = component.find('.test-speck-btn').last();
        button.simulate('click');
        setTimeout(() => {
            expect(localStorage.getItem('best')).toEqual('1');
            done()
        }, collection.TIME_OUT * 17);
    });
    it('should start rave on win', (done) => {
        localStorage.setItem('field', collection.PASS_TO_WIN);
        const component: any = setUp();
        const button: any = component.find('.test-speck-btn').last();
        button.simulate('click');
        expect(component.state().raver).toEqual(0);
        setTimeout(() => {
            expect(component.state().raver).toEqual(2);
            done()
        }, collection.TIME_OUT * 3);
    });
    it('should desabled specks when win', () => {
        const component: any = setUp();
        component.setState({ end: true });
        component.find('.test-speck-btn').forEach((node: any): void => {
            expect(node.prop('disabled')).toEqual(true);
        });

    })
});
