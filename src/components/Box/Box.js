import React from "react";
import { PlaneGeometry } from "three";


export default function Box(){
    return (
        <mesh rotation={[90,0,20]}>
            <dodecahedronGeometry attach="geometry"></dodecahedronGeometry>
            <meshLambertMaterial attach="material" color="green"></meshLambertMaterial>
        </mesh>
    );
}