import React from "react";

function Box(){
    return (
        <mesh rotation={[100,0,20]}>
            <boxGeometry attach="geometry"></boxGeometry>
            <meshLambertMaterial attach="material" color="green"></meshLambertMaterial>
        </mesh>
    );
}

export default Box;