import './App.css'
import ReactMemoExample from './assets/components/React.MemoExample'
import ItemList from './assets/components/useCallBackExample'
import ParentComponent from './assets/components/useMemoExample'

function App() {

  return (
    <>
      <h2>useMemo: Optimizing Expensive Computations</h2>
      <ParentComponent />
      <h2>useCallback: Preventing Unnecessary Re-renders</h2>
      <ItemList />
      <h2>React.Memo: Preventing Unnecessary Re-renders with React.memo</h2>
      <ReactMemoExample />
    </>
  )
}

export default App
