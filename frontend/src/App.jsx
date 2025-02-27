import { useState } from "react";
import DisplayStylePanel from "./components/DisplayStylePanel";
import TasksList from "./components/TasksList";
import ProjectsList from "./components/ProjectsList";

function App() {
  return (
    <div className="flex flex-col items-center h-screen">
      <div className="w-1/3 mb-5">
        <DisplayStylePanel />
      </div>
      <div className="flex flex-row w-full h-screen border-2 border-y pt-5">
        <div className="w-1/3">
          <ProjectsList />
        </div>
        <div className="w-2/3">
          <TasksList projectId={1} displayStyle={"list"} />
        </div>
      </div>
    </div>
  );
}

export default App;
