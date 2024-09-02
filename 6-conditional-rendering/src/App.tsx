import './App.css'
import TernaryExample from './components/TernaryExample'
import AndOperatorExample from './components/AndOperatorExample'
import IfElseExample from './components/IfElseExample'
import SwitchExample from './components/SwitchExample'

function App() {

  return (
    <>
      <h2>Ternary Operator (?) </h2>
      <TernaryExample />
      <h2>Logical AND (&&) Operator</h2>
      <AndOperatorExample />
      <h2>if-else Statements</h2>
      <IfElseExample />
      <h2>switch Statements</h2>
      <SwitchExample />
      <h2>TypeScript’s Union Types</h2>
    </>
  )
}

export default App

// Logical AND (&&): {isAdmin && <p>You have admin privileges.</p>} 
// renders the message only if isAdmin is true. If isAdmin is false, nothing is rendered.
