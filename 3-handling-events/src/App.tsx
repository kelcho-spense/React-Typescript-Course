import './App.css'
import EnterKeyExample from './components/HandlingSpecificKeys'
import MouseEvent from './components/MouseEvent'
import OnChangeExample from './components/OnChangeExample'
import KeyDownExample from './components/OnKeyDownExample'
import KeyUpExample from './components/onKeyUpExample'
import ScrollExample from './components/onScrollExample'
import FormSubmitExample from './components/OnSubmitExample'
import ParameterButton from './components/ParameterButton'
import WindowScrollExample from './components/WindowScrollExample'

function App() {

  return (
    <>
    <MouseEvent />
    <ParameterButton />
    <OnChangeExample />
    <FormSubmitExample />

    <KeyDownExample />
    <KeyUpExample />
    <EnterKeyExample />
    
    <ScrollExample />
    <WindowScrollExample />
      
    </>
  )
}

export default App
