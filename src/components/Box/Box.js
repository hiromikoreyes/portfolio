import React from "react";
import { PlaneGeometry } from "three";


export default function Box(){
    return (
        <mesh rotation={[90,0,20]}>
            <boxGeometry attach="geometry"></boxGeometry>
            <meshLambertMaterial attach="material" color="lime"></meshLambertMaterial>
        </mesh>
    );
}