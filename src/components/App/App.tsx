import { ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';
import { store } from '../../services/store';
import { theme } from './theme';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { HomePage } from '../../pages';

export const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <BrowserRouter basename={"/"}>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </Provider>
);
