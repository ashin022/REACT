import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { store } from './redux/Store.js'
import { Provider } from 'react-redux'
// import { UserProvider } from './Components/hooks/useContext/UserContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <UserProvider> */}
      <Provider store={store}>
        <App />
      </Provider>
    {/* </UserProvider> */}
  </StrictMode>,
)
