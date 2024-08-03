import ReactDOM from 'react-dom/client'
import App from './App'
import {BrowserRouter} from "react-router-dom"
import store from './redux/store.js'
import { Provider } from 'react-redux'

const root = document.getElementById('root')
if (root){
  ReactDOM.createRoot(root).render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
)
}
