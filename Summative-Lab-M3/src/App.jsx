import {useState} from "react";
import Header from "./components/Header"
import Display from "./components/Display"
import AddProject from "./components/AddProject"


let data = [{ "title": "Morning Routine", "description": "Start your day with a consistent routine to boost productivity and mental clarity." }, { "title": "Healthy Eating", "description": "Incorporate balanced meals with fruits, vegetables, and proteins for better health." }, { "title": "Exercise Daily", "description": "Engage in at least 30 minutes of physical activity to stay fit and energized." }, { "title": "Time Management", "description": "Plan your tasks effectively to maximize efficiency and reduce stress." }, { "title": "Learning New Skills", "description": "Continuously improve yourself by learning new skills and expanding your knowledge." }, { "title": "Financial Planning", "description": "Manage your finances wisely by budgeting, saving, and investing." }, { "title": "Mindfulness", "description": "Practice mindfulness and meditation to enhance focus and emotional well-being." }, { "title": "Social Connections", "description": "Build and maintain meaningful relationships with family and friends." }, { "title": "Career Growth", "description": "Set career goals and work consistently towards achieving them." }, { "title": "Work-Life Balance", "description": "Maintain a balance between professional responsibilities and personal life." }]

function App() {

  const [projects, setProjects] = useState(data)


  return (
    <div className="App">
      <Header name="Timothy Darrell" portfolio="https://summative-assesment-1.vercel.app/" git = "https://github.com/timothydarrell14-glitch" />
      <AddProject projects={projects} setProjects={setProjects} />
      <Display display = {projects}/>
    </div>
  )
}

export default App