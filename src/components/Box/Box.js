import React from "react";
import { PlaneGeometry } from "three";


export default function Box(){
    return (
        <mesh rotation={[100,0,20]}>
            <boxGeometry attach="geometry"></boxGeometry>
            <meshLambertMaterial attach="material" color="green"></meshLambertMaterial>
        </mesh>
    );
}