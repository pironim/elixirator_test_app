import { useState } from "react";
import DisplayStylePanel from "./components/DisplayStylePanel";
import TasksList from "./components/TasksList";
import ProjectsList from "./components/ProjectsList";

function App() {
  return (
    <>
      <div className="w-full">
        <DisplayStylePanel />
      </div>
      <div className="w-1/3">
        <ProjectsList />
      </div>
      <div className="w-2/3">
        
      </div>
    </>
  );
}

export default App;
