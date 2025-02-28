import { useState } from "react";
import DisplayStylePanel from "./components/DisplayStylePanel.jsx";
import Tasks from "./components/Tasks.jsx";
import Projects from "./components/Projects.jsx";

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
          <Projects onSelect={selectProject} selectedProjectId={selectedProjectId} />
        </div>
        <div className="pl-15 w-2/3  border-l-2">
          {!selectedProjectId && <p className="text-4xl">Please Select project!</p>}
          {selectedProjectId && <Tasks projectId={selectedProjectId} />}
        </div>
      </div>
    </div>
  );
}

export default App;
