import React from 'react';
import { coordChange } from '../_lib/coordChange';

// t : type, 0: liq, 1 : vap
export default function Point({ abc, val, t }: { abc: number[], val: number, t: number }) {
  const coord = coordChange(abc[0], abc[1], abc[2]);
  return (
    <mesh visible position={[coord.x, coord.y, val]}>
      <sphereGeometry attach="geometry" args={[0.01, 5, 5]} />
      { t === 0 ? <meshBasicMaterial attach="material" color="blue" /> : <meshBasicMaterial attach="material" color="hotpink"/>}
    </mesh>
  )
}