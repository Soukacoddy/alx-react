import { login, logout, displayNotificationDrawer, hideNotificationDrawer, loginRequest } from "./uiActionCreators";
// import thunk from 'redux-thunk';
// import configureMockStore from 'redux-mock-store';
// import fetchMock from 'fetch-mock';
// import { LOGIN_FAILURE } from "./uiActionTypes";

describe('Test for the actions', () => {
    it('should return { type: LOGIN, user : { email, password } }', () => {
        const action = {
            type: 'LOGIN',
            user: {
                email: 1,
                password: 2,
            },
        };
        expect(login(1, 2)).toEqual(action);
    });
    it('should return { type: LOGOUT }', () => {
        const action = {
            type: 'LOGOUT',
        };
        expect(logout()).toEqual(action);
    });
    it('should return { type: DISPLAY_NOTIFICATION_DRAWER }', () => {
        const action = {
            type: 'DISPLAY_NOTIFICATION_DRAWER',
        };
        expect(displayNotificationDrawer()).toEqual(action);
    });
    it('should return { type: HIDE_NOTIFICATION_DRAWER }', () => {
        const action = {
            type: 'HIDE_NOTIFICATION_DRAWER',
        };
        expect(hideNotificationDrawer()).toEqual(action);
    });
});

// const middlewares = [thunk];
// const mockStore = configureMockStore(middlewares);

// describe('uiActionCreators', () => {
    // afterEach(() => {
    //     fetchMock.reset();
    // });

    // it('should dispatch LOGIN and LOGIN_SUCCESS on successful API call', async () => {
    //     fetchMock.getOnce('/login-success.json', { status: 200, body: {} });
    //     const expectedActions = [{ type: 'LOGIN' }, { type: LOGIN_SUCCESS }];
    //     const store = mockStore({});
    //     store.dispatch(loginRequest('test@example.com', 'password'));
    //     expect(store.getActions()).toEqual(expectedActions);
    // });

    // it('should dispatch LOGIN and LOGIN_FAILURE on failed API call', async () => {
    //     fetchMock.getOnce('/login-success.json', { status: 500 });
    //     const expectedActions = [{ type: 'LOGIN' }, { type: LOGIN_FAILURE }];
    //     const store = mockStore({});
    //     store.dispatch(loginRequest('test@example.com', 'password'));
    //     expect(store.getActions()).toEqual(expectedActions);
    // });
// });