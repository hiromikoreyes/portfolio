import './App.css';
import Navbar from './components/Navbar/navbar';
import Box from './components/Box/Box';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function App() {
  return (
    <div className="App"> 
        <Navbar/>
        <Canvas className="canvas">
          <OrbitControls enableZoom={false}></OrbitControls>
          <ambientLight intensity={0.75}></ambientLight>
          <directionalLight position={[-2,5,2]} intensity={1}></directionalLight>
          <Box />
        </Canvas>
    </div>
  );
}

export default App;
