import { render } from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '@/store';
import userEvent from '@testing-library/user-event';

// setup a DOM element as a render target
// eslint-disable-next-line import/no-mutable-exports
let container: any = null;
beforeEach(() => {
   container = document.createElement('div');
   document.body.appendChild(container);
});

// cleanup on exiting
afterEach(() => {
   unmountComponentAtNode(container);
   container.remove();
   container = null;
});

const RenderWrapper = ({ children }: { children: React.ReactNode }): JSX.Element => (
   <BrowserRouter>
      <Provider store={store}>{children}</Provider>
   </BrowserRouter>
);

export const customRender = (element: JSX.Element, { route = '/' } = {}) => {
   window.history.pushState({}, 'test page', route);

   return {
      user: userEvent.setup({ delay: null }),
      ...render(element, { container, wrapper: RenderWrapper }),
   };
};
