import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import store from './redux/store';
import { Provider } from 'react-redux';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    // 모든 하위 컴포넌트들이 리덕스 스토어의 state에 접근할 수 있게 된다! 
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

