import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../store'
import { toggleTodo, updateTodo, deleteTodo } from '../features/todos/todosSlice'
import { Trash2, Edit2, Check, X } from 'lucide-react'

export default function TodoList() {
  const todos = useSelector((state: RootState) => state.todos.todos)
  const dispatch = useDispatch()
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editText, setEditText] = useState('')

  const startEditing = (id: string, text: string) => {
    setEditingId(id)
    setEditText(text)
  }

  const saveEdit = () => {
    if (editingId) {
      dispatch(updateTodo({ id: editingId, text: editText.trim() }))
      setEditingId(null)
    }
  }

  const cancelEdit = () => {
    setEditingId(null)
    setEditText('')
  }

  return (
    <ul className="space-y-2">
      {todos.map(todo => (
        <li key={todo.id} className="flex items-center bg-gray-100 p-2 rounded">
          {editingId === todo.id ? (
            <>
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                className="flex-grow mr-2 p-1 border rounded"
              />
              <button onClick={saveEdit} className="p-1 text-green-600 hover:text-green-800">
                <Check size={20} />
              </button>
              <button onClick={cancelEdit} className="p-1 text-red-600 hover:text-red-800">
                <X size={20} />
              </button>
            </>
          ) : (
            <>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => dispatch(toggleTodo(todo.id))}
                className="mr-2"
              />
              <span className={`flex-grow ${todo.completed ? 'line-through text-gray-500' : ''}`}>
                {todo.text}
              </span>
              <button onClick={() => startEditing(todo.id, todo.text)} className="p-1 text-blue-600 hover:text-blue-800">
                <Edit2 size={20} />
              </button>
              <button onClick={() => dispatch(deleteTodo(todo.id))} className="p-1 text-red-600 hover:text-red-800">
                <Trash2 size={20} />
              </button>
            </>
          )}
        </li>
      ))}
    </ul>
  )
}