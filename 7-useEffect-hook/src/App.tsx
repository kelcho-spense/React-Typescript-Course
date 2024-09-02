import './App.css'
import Clock from './components/Clock'
import DataFetchingComponent from './components/DataFetchingComponent'
import DependencyExample from './components/DependencyExample'
import ExampleComponent from './components/ExampleComponent'
import MemoizedFunctionExample from './components/MemoizedFunctionExample'

function App() {

  return (
    <>
      <h2>Basics of useEffect</h2>
      <ExampleComponent />
      <h2>Synchronizing with External Systems</h2>
      <Clock />
      <h2>Fetching Data on Component Mount</h2>
      <DataFetchingComponent />
      <h2>Using Dependency Arrays</h2>
      <DependencyExample />
      <h2>Avoiding Unnecessary Renders with useCallback</h2>
      <MemoizedFunctionExample />
    </>
  )
}

export default App

// Common Pitfalls with Dependency Arrays
// 1.Forgetting to Add Dependencies:
// 2.Unnecessary Dependencies:
// 3.Dealing with Functions in Dependencies:
