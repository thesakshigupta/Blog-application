import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Approuter from './routers/Approuter.jsx'

createRoot(document.getElementById('root')).render(
  <Approuter>
     <App />
  </Approuter>  
)


