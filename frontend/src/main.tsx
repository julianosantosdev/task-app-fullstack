import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './providers/AuthProvider.tsx';
import { TaskProvider } from './providers/TaskProvider.tsx';
import { ModalProvider } from './providers/ModalProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ModalProvider>
        <TaskProvider>
          <AuthProvider>
            <App />
          </AuthProvider>
        </TaskProvider>
      </ModalProvider>
    </BrowserRouter>
  </React.StrictMode>
);
