// import React from "react";
import Header from "./components/Header"
import Display from "./components/Display"
import AddProject from "./components/AddProject"

function App() {
  return (
    <div className="App">
      <Header name="Timothy Darrell"  portfolio="https://summative-assesment-1.vercel.app/" />
      <AddProject />
      <Display />
    </div>
  )
}

export default App