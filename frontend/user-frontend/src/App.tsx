import { useState } from 'react'
import LoginPage from './pages/login-page'
import SignupPage from './pages/signup-page'
import { BrowserRouter ,  Routes , Route } from 'react-router'
SignupPage
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/signup" element={<SignupPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
