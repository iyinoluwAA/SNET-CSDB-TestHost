import './App.css'
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom'
import SignUpWithDiscord from './Pages/SignUpWithDiscord'
import SetUsernamePassword from './Components/SetUsernamePassword'



const App = () => {

  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<SignUpWithDiscord />} />
        <Route path="/setup-username-password" element={<SetUsernamePassword />} />
      </Routes>
     </Router>
    </>
  )
}

export default App
