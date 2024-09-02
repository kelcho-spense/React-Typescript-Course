import './App.css'
import ExampleComponent from './components/ExampleComponent'
import FocusInput from './components/FocusInput'
import RenderCounter from './components/RenderCounter'
import Timer from './components/Timer'

function App() {

  return (
    <>
     <h2>Basic usage of useRef</h2>
      <ExampleComponent />
      <h2>Focusing an Input Element</h2>
      <FocusInput />
      <h2>Focusing an Input Element</h2>
      <Timer />
      <h2>Counting Component Renders</h2>
      <RenderCounter />
    </>
  )
}

export default App
