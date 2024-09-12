import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todos/todosSlice'
import { PlusCircle } from 'lucide-react'

export default function TodoForm() {
  const [newTodo, setNewTodo] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (newTodo.trim()) {
      dispatch(addTodo(newTodo.trim()))
      setNewTodo('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex mb-4">
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        className="flex-grow mr-2 p-2 border rounded"
        placeholder="Add a new task"
      />
      <button type="submit" className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        <PlusCircle size={24} />
      </button>
    </form>
  )
}