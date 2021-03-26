import ReactDOM from 'react-dom';
import './app/layouts/style.css';
import App from './app/layouts/App';
import reportWebVitals from './reportWebVitals';
import 'semantic-ui-css/semantic.min.css'
import { store, StoreContext } from './app/store/store';
import { BrowserRouter } from 'react-router-dom';
import 'react-calendar/dist/Calendar.css';
import 'react-toastify/dist/ReactToastify.min.css';

ReactDOM.render(
  <StoreContext.Provider value={store}>
    <BrowserRouter>
      <App /></BrowserRouter>
  </StoreContext.Provider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
