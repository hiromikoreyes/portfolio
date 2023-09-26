import './App.css';
import Navbar from './components/Navbar/navbar';
import Box from './components/Box/Box';
import DescriptionBox from './components/DescriptionBox/DescriptionBox'
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import SkipArrow from './components/SkipArrow/skiparrow';

function App() {
  return (
    <div className="App"> 
        <Navbar/>
        <DescriptionBox/>
        <SkipArrow/>
        <div id="canvas-container">
            <div>
            <Canvas flat className="canvas">
              <OrbitControls enableZoom={false} autoRotate={1} autoRotateSpeed={-2}></OrbitControls>
              <ambientLight intensity={0.9}></ambientLight>
              <directionalLight position={[-2,5,2]} intensity={1}></directionalLight>
              <Box />
            </Canvas>
            <Canvas flat className="canvas">
              <OrbitControls enableZoom={false} autoRotate={1}></OrbitControls>
              <ambientLight intensity={0.9}></ambientLight>
              <Box />
            </Canvas>
            <Canvas flat className="canvas">
              <OrbitControls enableZoom={false} autoRotate={1}></OrbitControls>
              <ambientLight intensity={0.9}></ambientLight>
              <Box />
            </Canvas>
            </div>
        </div>


    </div>
  );
}

export default App;
