// import React from "react";
import Header from "./components/Header"
import Display from "./components/Display"
import AddProject from "./components/AddProject"
import user from "../public/user-solid.png"
import github from "../public/square-github-brands-solid.png"
import email from "../public/envelope-solid.png"
import light from "../public/moon-regular.png"

function App() {
  return (
    <div className="App">
      <Header name="Timothy Darrell"  portfolio="https://summative-assesment-1.vercel.app/" user={user} git={github} mail={email} toggle={light} />
      <AddProject />
      <Display />
    </div>
  )
}

export default App