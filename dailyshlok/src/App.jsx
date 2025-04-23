import React, { useState } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import SearchBar from "./components/SearchBar";
import ShlokDisplay from "./components/ShlokDisplay";
import GoalTracker from "./components/GoalTracker";
import SettingsCorner from "./components/Setting";
import Star from "./components/Star";
import PayMeButton from "./components/Pay";

// Draggable component wrapper
const DraggableComponent = ({ id, index, moveComponent, children }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "component",
    item: { id, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const [, drop] = useDrop(() => ({
    accept: "component",
    hover: (item) => {
      if (item.index !== index) {
        moveComponent(item.index, index);
        item.index = index;
      }
    },
  }));

  return (
    <div 
      ref={(node) => drag(drop(node))}
      className={`${isDragging ? 'opacity-50' : 'opacity-100'} transition-opacity duration-200 h-full cursor-move`}
    >
      {children}
    </div>
  );
};

function App() {
  // This represents the structure of the second column
  const [rightColumnComponents, setRightColumnComponents] = useState([
    { id: "goalTracker", component: <GoalTracker /> },
    { id: "searchBar", component: <SearchBar /> }
  ]);

  // Function to handle the movement of components
  const moveComponent = (fromIndex, toIndex) => {
    const updatedComponents = [...rightColumnComponents];
    const [movedItem] = updatedComponents.splice(fromIndex, 1);
    updatedComponents.splice(toIndex, 0, movedItem);
    setRightColumnComponents(updatedComponents);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="min-h-screen bg-amber-50 pb-16">
        {/* Corner Components */}
        <Star />
        <SettingsCorner />
        <PayMeButton />
        
        {/* Main Grid Layout */}
        <div className="max-w-6xl mx-auto px-4 pt-16">
          {/* Two-column grid with ShlokDisplay taking half, and GoalTracker+SearchBar taking the other half */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left column - ShlokDisplay */}
            <div className="h-full">
              <DraggableComponent id="shlokDisplay" index={0} moveComponent={() => {}}>
                <ShlokDisplay />
              </DraggableComponent>
            </div>
            
            {/* Right column - GoalTracker on top, SearchBar on bottom */}
            <div className="grid grid-rows-2 gap-6 h-full">
              {rightColumnComponents.map((item, index) => (
                <DraggableComponent 
                  key={item.id} 
                  id={item.id} 
                  index={index}
                  moveComponent={moveComponent}
                >
                  {item.component}
                </DraggableComponent>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DndProvider>
  );
}

export default App;