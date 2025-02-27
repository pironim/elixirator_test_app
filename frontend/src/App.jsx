import { useState } from "react";
import DisplayStylePanel from "./components/DisplayStylePanel";
import TasksList from "./components/TasksList";
import ProjectsList from "./components/ProjectsList";

function App() {
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  function selectProject(projectId) {
    setSelectedProjectId(projectId)
  }

  return (
    <div className="flex flex-col items-center h-screen">
      <div className="w-1/3 mb-5">
        <DisplayStylePanel />
      </div>
      <div className="flex flex-row w-full h-screen pt-5">
        <div className="w-1/3">
          <ProjectsList onSelect={selectProject} selectedProjectId={selectedProjectId} />
        </div>
        <div className="pl-15 w-2/3  border-l-2">
          {!selectedProjectId && <p className="text-4xl">Please Select project!</p>}
          {selectedProjectId && <TasksList projectId={selectedProjectId} />}
        </div>
      </div>
    </div>
  );
}

export default App;
