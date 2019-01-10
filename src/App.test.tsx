import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import 'jsdom-global/register';
import * as React from 'react';
import App from './App';
import * as collection from './constants';
// import LocalStorageMock from './utils/local-storage-mock';

Enzyme.configure({ adapter: new Adapter() });
// global.window = { localStorage }
//
// export interface IWindow {
//     localStorage: any
// }
//
// export interface IGlobal {
//     window: IWindow;
// }
//
// let global: IGlobal;


describe('<App/>', () => {
    function setUp(): any {
        const component  = Enzyme.mount(<App/>)
        component.setState({ field: {
            0: [1, 2, 3, 4],
            1: [5, 6, 0, 8],
            2: [9, 10, 11, 12],
            3: [13, 14, 15, 7],
        }});
        return component
    }
    it('should move speck down', () => {
        // global.window = { ...global.window, localStorage: LocalStorageMock }
        // console.log(global.window.localStorage);
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
    })
});
