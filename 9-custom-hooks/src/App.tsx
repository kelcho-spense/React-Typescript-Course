import './App.css'
import UsersComponent from './components/UsersComponent';
import useLocalStorage from './hooks/useLocalStorage'

function App() {
  const [name, setName] = useLocalStorage<string>('name', 'John Doe');

  return (
    <>
    <h2>Custom Hook (useLocalStorage):</h2>
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p>Stored Name: {name}</p>
      </div>
      
      <h2>Custom Hook (useFetch):</h2>
      <UsersComponent />


    </>
  )
}

export default App
