import React from "react";
import Header from "./components/Headers/Header";
import Cyber from "./components/Cybersecurity/Cyber";
import Navbar from "./components/Navbar/Navbar";
import Specific from "./components/Specific/Specific";
import ContCourses from "./components/courses/ContCourses";
import Lectors from "./components/lektors/Lectors";
import Students from "./components/Students/Students";

function App() {
  return (
    <div className="App">
     <Header />
     <Cyber />
     <Navbar />
     <Specific />
     <ContCourses />
     <Lectors />
     <Students />
    </div>
  );
}

export default App;
