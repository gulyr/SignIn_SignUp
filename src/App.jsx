import React from 'react'
import './assets/css/style.css'
import FormsContainer from './components/FormsContainer/FormsContainer'
import PanelsContainer from './components/PanelsContainer/PanelsContainer'
import { useDispatch, useSelector } from 'react-redux'
import { enableSignInMode, enableSignUpMode } from './redux/slices/slice'

const App = () => {
  const isSignUpMode = useSelector((state) => state.auth.isSignUpMode)
  const dispatch = useDispatch()
  return (
    <div className={`container ${isSignUpMode ? 'sign_up_mode' : ''}`}>
      <FormsContainer />
      <PanelsContainer
        onSignUpClick={() => dispatch(enableSignUpMode())}
        onSignInClick={() => dispatch(enableSignInMode())}
      />
    </div>
  )
}

export default App
