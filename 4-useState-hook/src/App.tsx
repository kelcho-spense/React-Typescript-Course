import './App.css'
import Counter from './components/Counter'
import TodoList from './components/TodoList'
import UserForm from './components/UserForm'

function App() {

  return (
    <>
      <h3>Counter</h3>
      <Counter />
      <h3>Form</h3>
      <UserForm />
      <h3>Todo</h3>
      <TodoList />
    </>
  )
}

export default App
