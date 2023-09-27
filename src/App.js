import './App.css';
import Navbar from './components/Navbar/navbar';
import Box from './components/Box/Box';
import DescriptionBox from './components/DescriptionBox/DescriptionBox'
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import SkipArrow from './components/SkipArrow/skiparrow';
import AboutMeBox from './components/AboutMeBox/aboutmebox';

function App() {
  return (
    <div className="App"> 
        <Navbar/>
        <DescriptionBox/>
        
        <div id="canvas-container">
            <div>
            <Canvas flat camera={{ fov: 35, position: [0, 5, 0]}} className="canvas">
              <OrbitControls enableZoom={false} enablePan={false} autoRotate={true} autoRotateSpeed={-2}></OrbitControls>
              <ambientLight intensity={0.9}></ambientLight>
              <directionalLight position={[-2,5,2]} intensity={1}></directionalLight>
              <Box />
            </Canvas>

            <Canvas flat camera={{ fov: 35, position: [0, 5, 0]}} className="canvas">
              <OrbitControls enableZoom={false} enablePan={false} autoRotate={true} autoRotateSpeed={-2}></OrbitControls>
              <ambientLight intensity={0.9}></ambientLight>
              <directionalLight position={[-2,5,2]} intensity={1}></directionalLight>
              <Box />
            </Canvas>

            <Canvas flat camera={{ fov: 35, position: [0, 5, 0]}} className="canvas">
              <OrbitControls enableZoom={false} enablePan={false} autoRotate={true} autoRotateSpeed={-2}></OrbitControls>
              <ambientLight intensity={0.9}></ambientLight>
              <directionalLight position={[-2,5,2]} intensity={1}></directionalLight>
              <Box />
            </Canvas>

            </div>
        </div>


        <SkipArrow/>
        <AboutMeBox/>
    </div>
  );
}

export default App;
