import './App.css'
import Greeting from './components/DefaultExports﻿'; // import default export
import {Greeting2, Farewell, NamedExports} from './components/NamedExports' //import named exports 

function App() {

  return (
   <>
   <Greeting />
   <Greeting2 />
   <Farewell />
   <NamedExports />
   </>
  )
}

export default App

// Only one default export per file.
// Import can be named anything.

// Multiple named exports per file.
// Must use the exact name when importing.