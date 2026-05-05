//Import Keyword is used for importing the components
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css' // Single dot for the same folder, double dots for coming from the outside for the current directory
import App from './App.jsx'
import ValidatedForm from './ValidatedForm.jsx'
import Bmicalculator from './bmicalculator.jsx'
import StudentRegistrationForm from './StudentRegistrationForm.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StudentRegistrationForm/>
  </StrictMode>,
)
