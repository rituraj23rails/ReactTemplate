/**
 *
 APP TEST FILE
 * @format
 */
 import React from 'react';
 import App from './App';
 import renderer from 'react-test-renderer';
 import { BrowserRouter } from 'react-router-dom';
 import { Provider } from 'react-redux';
 import store from './app/redux/store/store';

 jest.useFakeTimers();

 describe('Launching App', () => {
  it('App root file loads properly', () => {
    const testRenderer: any = renderer.create(<Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>).toJSON();
    expect(testRenderer.children.length).toBe(1);
    expect(testRenderer).toMatchSnapshot();
  });
});