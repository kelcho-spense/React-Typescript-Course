import './App.css'
import Button from './components/ButtonProps'
import Greeting from './components/GreetingProps'

function App() {

  const handleClick = () => {
    alert('Button clicked!')
  }
  return (
    <>
      <Greeting name="Alice" age={30} isMember={true} />

      <Button label="Click Me" onClick={handleClick} />
      <Button label="Submit" onClick={handleClick} disabled={true} />
    </>
  )
}

export default App


// Greeting Component:
// The Greeting component is used in the App component, with the name, age, and
//  isMember props passed to it.
// This renders the appropriate greeting, age, and membership status on the page.

//Button component :
//The Button component now also accepts an optional disabled prop. 
// If disabled is not provided, it defaults to false.
// This allows you to create multiple buttons with different labels, behaviors, and states.
