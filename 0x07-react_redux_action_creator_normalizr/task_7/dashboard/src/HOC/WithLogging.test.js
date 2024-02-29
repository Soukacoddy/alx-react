import React from 'react';
import { shallow } from 'enzyme';
import WithLogging from './WithLogging';

console.log = jest.fn();

describe('WithLogging HOC Tests', () => {
    afterEach(() => {
        jest.restoreAllMocks();
    });

    it('should call console.log on mount and unmount with pure HTML', () => {
        const WrappedComponent = WithLogging(() => <p />);
        const wrapper = shallow(<WrappedComponent />);
        expect(console.log).toHaveBeenCalledWith('Component is mounted');
        wrapper.unmount();
        expect(console.log).toHaveBeenCalledWith('Component is going to unmount');
    });

    it('should call console.log on mount and unmount with component name for Login component', () => {
        const Login = () => <div>Login component content</div>;
        const WrappedLogin = WithLogging(Login);
        const wrapper = shallow(<WrappedLogin />);
        expect(console.log).toHaveBeenCalledWith('Login is mounted');
        wrapper.unmount();
        expect(console.log).toHaveBeenCalledWith('Login is going to unmount');
    });
});