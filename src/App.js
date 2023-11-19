import './App.css';
// import { ThemeProvider } from '@emotion/react';
// import Bar from './components/Navbar';
import Intro from './components/Intro';
import Education from './components/Education';
import Experience from './components/Experience';
import Awards from './components/Awards';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">

      {/* <Bar /> */}
      <div  className="page-space">
        <Intro />
        <Education />
        <Experience />
        <Awards />
        <Projects />
      </div>
      

    </div>
  );
}

export default App;
