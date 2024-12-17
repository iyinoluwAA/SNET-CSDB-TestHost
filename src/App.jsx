import './App.css'
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom'
import SignUpWithDiscord from './Pages/SignUpWithDiscord'
import Members from './Pages/Members'




const App = () => {

  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<SignUpWithDiscord />} />
        <Route path="/members" element={<Members />}   />
      </Routes>
     </Router>
    </>
  )
}

export default App
