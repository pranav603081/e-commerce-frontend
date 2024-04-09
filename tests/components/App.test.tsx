 //import { render, screen } from '@testing-library/react';
// import React from 'react';
//  import { describe, it, expect } from 'vitest';
//  import App from '../../src/pages/home';
//  import '@testing-library/jest-dom'

// describe('App', () => {
//   it('renders headline', () => {
//     render(<App />);
//     //const input = screen.getByText(/LATEST PRODUCTS/i)
//     //screen.debug();
//     expect(screen.getByText(/LATEST PRODUCTS/i)).toBeInTheDocument()
//     // check if App components renders headline
//   });
// });
//import React from 'react';
// import { render } from '@testing-library/react';

//import App from './App';

// import { Provider } from 'react-redux';
// import configureStore from 'redux-mock-store';

// describe('With React Testing Library', () => {
//     const initialState = { output: 10 };
//     const mockStore = configureStore();
//     let store;

//     it('Shows "Hello world!"', () => {
//         store = mockStore(initialState);
//         const { getByText } = render(
//             <Provider store={store}>
//                 <App />
//             </Provider>
//         );

//         expect(getByText(/LATEST PRODUCTS/i)).toBeInTheDocument()
//     });
// });