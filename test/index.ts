import { render, screen, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

export * from './helpers/customRender';
export {
   render,
   screen,
   fireEvent, // userEvent strongly preferred
   act,
};
