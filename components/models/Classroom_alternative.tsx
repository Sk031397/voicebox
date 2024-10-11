

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF, PerspectiveCamera } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Plane147: THREE.Mesh
    Plane002: THREE.Mesh
    Plane: THREE.Mesh
    Cube: THREE.Mesh
    Plane001: THREE.Mesh
    Plane144: THREE.Mesh
    Circle094: THREE.Mesh
    Vert047: THREE.Mesh
    Plane145: THREE.Mesh
    Circle093: THREE.Mesh
    Circle095: THREE.Mesh
    Vert048: THREE.Mesh
    Circle096: THREE.Mesh
    Plane003: THREE.Mesh
    Plane003_1: THREE.Mesh
    Circle087: THREE.Mesh
    Vert042: THREE.Mesh
    Plane142: THREE.Mesh
    Circle086: THREE.Mesh
    Circle088_1: THREE.Mesh
    Vert043: THREE.Mesh
    Circle089: THREE.Mesh
    Plane011: THREE.Mesh
    Plane011_1: THREE.Mesh
    Circle091: THREE.Mesh
    Vert044: THREE.Mesh
    Plane146: THREE.Mesh
    Circle090: THREE.Mesh
    Circle092_1: THREE.Mesh
    Vert045: THREE.Mesh
    Circle097: THREE.Mesh
    Plane013: THREE.Mesh
    Plane013_1: THREE.Mesh
    Circle099: THREE.Mesh
    Vert046: THREE.Mesh
    Plane172: THREE.Mesh
    Circle098: THREE.Mesh
    Circle100: THREE.Mesh
    Vert049: THREE.Mesh
    Circle101: THREE.Mesh
    Plane015: THREE.Mesh
    Plane015_1: THREE.Mesh
    Circle103: THREE.Mesh
    Vert050: THREE.Mesh
    Plane174: THREE.Mesh
    Circle102: THREE.Mesh
    Circle104: THREE.Mesh
    Vert051: THREE.Mesh
    Circle105: THREE.Mesh
    Plane017: THREE.Mesh
    Plane017_1: THREE.Mesh
    Circle107: THREE.Mesh
    Vert052: THREE.Mesh
    Plane176: THREE.Mesh
    Circle106: THREE.Mesh
    Circle108: THREE.Mesh
    Vert053: THREE.Mesh
    Circle109: THREE.Mesh
    Plane019: THREE.Mesh
    Plane019_1: THREE.Mesh
    Circle111: THREE.Mesh
    Vert054: THREE.Mesh
    Plane178: THREE.Mesh
    Circle110: THREE.Mesh
    Circle112: THREE.Mesh
    Vert055: THREE.Mesh
    Circle113: THREE.Mesh
    Plane027: THREE.Mesh
    Plane027_1: THREE.Mesh
    Circle115: THREE.Mesh
    Vert056: THREE.Mesh
    Plane180: THREE.Mesh
    Circle114: THREE.Mesh
    Circle116: THREE.Mesh
    Vert057: THREE.Mesh
    Circle117: THREE.Mesh
    Plane029: THREE.Mesh
    Plane029_1: THREE.Mesh
    Circle119: THREE.Mesh
    Vert058: THREE.Mesh
    Plane182: THREE.Mesh
    Circle118: THREE.Mesh
    Circle120: THREE.Mesh
    Vert059: THREE.Mesh
    Circle121: THREE.Mesh
    Plane031: THREE.Mesh
    Plane031_1: THREE.Mesh
    Circle123: THREE.Mesh
    Vert060: THREE.Mesh
    Plane184: THREE.Mesh
    Circle122: THREE.Mesh
    Circle124: THREE.Mesh
    Vert061: THREE.Mesh
    Circle125: THREE.Mesh
    Plane033: THREE.Mesh
    Plane033_1: THREE.Mesh
    Circle127: THREE.Mesh
    Vert062: THREE.Mesh
    Plane186: THREE.Mesh
    Circle126: THREE.Mesh
    Circle128: THREE.Mesh
    Vert063: THREE.Mesh
    Circle129: THREE.Mesh
    Plane035: THREE.Mesh
    Plane035_1: THREE.Mesh
    Circle131: THREE.Mesh
    Vert064: THREE.Mesh
    Plane188: THREE.Mesh
    Circle130: THREE.Mesh
    Circle132: THREE.Mesh
    Vert065: THREE.Mesh
    Circle133: THREE.Mesh
    Plane037: THREE.Mesh
    Plane037_1: THREE.Mesh
    Circle135: THREE.Mesh
    Vert066: THREE.Mesh
    Plane190: THREE.Mesh
    Circle134: THREE.Mesh
    Circle136: THREE.Mesh
    Vert067: THREE.Mesh
    Circle137: THREE.Mesh
    Plane045: THREE.Mesh
    Plane045_1: THREE.Mesh
    Circle139: THREE.Mesh
    Vert068: THREE.Mesh
    Plane192: THREE.Mesh
    Circle138: THREE.Mesh
    Circle140: THREE.Mesh
    Vert069: THREE.Mesh
    Circle141: THREE.Mesh
    Plane047: THREE.Mesh
    Plane047_1: THREE.Mesh
    Circle143: THREE.Mesh
    Vert070: THREE.Mesh
    Plane194: THREE.Mesh
    Circle142: THREE.Mesh
    Circle144: THREE.Mesh
    Vert071: THREE.Mesh
    Circle145: THREE.Mesh
    Plane049: THREE.Mesh
    Plane049_1: THREE.Mesh
    Circle147: THREE.Mesh
    Vert072: THREE.Mesh
    Plane196: THREE.Mesh
    Circle146: THREE.Mesh
    Circle148: THREE.Mesh
    Vert073: THREE.Mesh
    Circle149: THREE.Mesh
    Plane051: THREE.Mesh
    Plane051_1: THREE.Mesh
    Circle151: THREE.Mesh
    Vert074: THREE.Mesh
    Plane198: THREE.Mesh
    Circle150: THREE.Mesh
    Circle152: THREE.Mesh
    Vert075: THREE.Mesh
    Circle153: THREE.Mesh
    Plane053: THREE.Mesh
    Plane053_1: THREE.Mesh
    Circle155: THREE.Mesh
    Vert076: THREE.Mesh
    Plane200: THREE.Mesh
    Circle154: THREE.Mesh
    Circle156: THREE.Mesh
    Vert077: THREE.Mesh
    Circle157: THREE.Mesh
    Plane055: THREE.Mesh
    Plane055_1: THREE.Mesh
    Circle159: THREE.Mesh
    Vert078: THREE.Mesh
    Plane202: THREE.Mesh
    Circle158: THREE.Mesh
    Circle160: THREE.Mesh
    Vert079: THREE.Mesh
    Circle161: THREE.Mesh
    Plane063: THREE.Mesh
    Plane063_1: THREE.Mesh
    Circle163: THREE.Mesh
    Vert080: THREE.Mesh
    Plane204: THREE.Mesh
    Circle162: THREE.Mesh
    Circle164: THREE.Mesh
    Vert081: THREE.Mesh
    Circle165: THREE.Mesh
    Cube024: THREE.Mesh
    Cube022: THREE.Mesh
    Sphere: THREE.Mesh
    Plane022: THREE.Mesh
    Plane023: THREE.Mesh
    Cube004: THREE.Mesh
    Cube006: THREE.Mesh
    Cube008: THREE.Mesh
    Cube010: THREE.Mesh
    Cube014: THREE.Mesh
    Cube016: THREE.Mesh
    Cube018: THREE.Mesh
    Cube020: THREE.Mesh
    Cube007: THREE.Mesh
    Cube009: THREE.Mesh
    Cube011: THREE.Mesh
    Cube017: THREE.Mesh
    Cube019: THREE.Mesh
    Cube021: THREE.Mesh
    Vert: THREE.Mesh
    Torus: THREE.Mesh
    Plane166: THREE.Mesh
    Torus018: THREE.Mesh
    Plane165: THREE.Mesh
    Vert002: THREE.Mesh
    Vert007: THREE.Mesh
    Torus001: THREE.Mesh
    Plane167: THREE.Mesh
    Torus002: THREE.Mesh
    Plane168: THREE.Mesh
    Vert003: THREE.Mesh
    Plane007: THREE.Mesh
    Cylinder: THREE.Mesh
    Cylinder001: THREE.Mesh
    Plane003_2: THREE.Mesh
    Plane021: THREE.Mesh
    Cylinder002: THREE.Mesh
    Cylinder003: THREE.Mesh
    Plane008: THREE.Mesh
    Plane026: THREE.Mesh
    Cylinder004: THREE.Mesh
    Cylinder005: THREE.Mesh
    Plane025: THREE.Mesh
    Plane040: THREE.Mesh
    Cylinder006: THREE.Mesh
    Cylinder007: THREE.Mesh
    Plane039: THREE.Mesh
    Plane042: THREE.Mesh
    Cylinder008: THREE.Mesh
    Cylinder009: THREE.Mesh
    Plane041: THREE.Mesh
    Plane044: THREE.Mesh
    Cylinder010: THREE.Mesh
    Cylinder011: THREE.Mesh
    Plane043: THREE.Mesh
    Plane058: THREE.Mesh
    Cylinder012: THREE.Mesh
    Cylinder013: THREE.Mesh
    Plane057: THREE.Mesh
    Plane060: THREE.Mesh
    Cylinder014: THREE.Mesh
    Cylinder015: THREE.Mesh
    Plane059: THREE.Mesh
    Plane062: THREE.Mesh
    Cylinder016: THREE.Mesh
    Cylinder017: THREE.Mesh
    Plane061: THREE.Mesh
    Plane150: THREE.Mesh
    Cylinder020: THREE.Mesh
    Cylinder021: THREE.Mesh
    Plane149: THREE.Mesh
    Plane152: THREE.Mesh
    Cylinder022: THREE.Mesh
    Cylinder023: THREE.Mesh
    Plane151: THREE.Mesh
    Plane154: THREE.Mesh
    Cylinder024: THREE.Mesh
    Cylinder025: THREE.Mesh
    Plane153: THREE.Mesh
    Plane156: THREE.Mesh
    Cylinder026: THREE.Mesh
    Cylinder027: THREE.Mesh
    Plane155_1: THREE.Mesh
    Circle003: THREE.Mesh
    Circle004: THREE.Mesh
    Circle005_1: THREE.Mesh
    Circle013: THREE.Mesh
    Plane148_1: THREE.Mesh
    Plane157: THREE.Mesh
    Circle: THREE.Mesh
    Circle002: THREE.Mesh
    Circle014: THREE.Mesh
    Plane169: THREE.Mesh
    Plane170: THREE.Mesh
    Circle015: THREE.Mesh
    Circle016: THREE.Mesh
    Circle025: THREE.Mesh
    Plane164: THREE.Mesh
    Cube025: THREE.Mesh
    Plane158: THREE.Mesh
    Plane159_1: THREE.Mesh
    Plane160: THREE.Mesh
    Plane161: THREE.Mesh
    Plane163: THREE.Mesh
  }
  materials: {
    Lectern: THREE.MeshStandardMaterial
    Ceiling: THREE.MeshStandardMaterial
    ['Material.030']: THREE.MeshStandardMaterial
    ['Material.053']: THREE.MeshStandardMaterial
    ['Material.049']: THREE.MeshStandardMaterial
    Bench: THREE.MeshStandardMaterial
    ['Material.035']: THREE.MeshStandardMaterial
    ['Material.033']: THREE.MeshStandardMaterial
    ['Material.034']: THREE.MeshStandardMaterial
    ['Material.037']: THREE.MeshStandardMaterial
    Shelf: THREE.MeshStandardMaterial
    ['Material.016']: THREE.MeshStandardMaterial
    ['Board upper']: THREE.MeshStandardMaterial
    ['Board lower']: THREE.MeshStandardMaterial
    ['Material.015']: THREE.MeshStandardMaterial
    ['Material.022']: THREE.MeshStandardMaterial
    ['Material.023']: THREE.MeshStandardMaterial
    ['Material.018']: THREE.MeshStandardMaterial
    ['Material.017']: THREE.MeshStandardMaterial
    ['Material.051']: THREE.MeshStandardMaterial
    ['Material.052']: THREE.MeshStandardMaterial
    ['Material.024']: THREE.MeshStandardMaterial
    ['Material.026']: THREE.MeshPhysicalMaterial
    ['Material.029']: THREE.MeshStandardMaterial
    ['Material.028']: THREE.MeshStandardMaterial
    ['Material.057']: THREE.MeshStandardMaterial
    ['Material.031']: THREE.MeshStandardMaterial
    ['Material.032']: THREE.MeshStandardMaterial
    ['Material.044']: THREE.MeshStandardMaterial
    ['Material.043']: THREE.MeshPhysicalMaterial
    ['Material.045']: THREE.MeshStandardMaterial
    ['Material.047']: THREE.MeshStandardMaterial
    ['Material.046']: THREE.MeshStandardMaterial
    ['Material.042']: THREE.MeshStandardMaterial
    ['Material.041']: THREE.MeshStandardMaterial
    ['Material.002']: THREE.MeshStandardMaterial
    Material: THREE.MeshStandardMaterial
    ['Material.001']: THREE.MeshStandardMaterial
    ['Material.005']: THREE.MeshStandardMaterial
    ['Material.004']: THREE.MeshStandardMaterial
    ['Material.003']: THREE.MeshStandardMaterial
    ['Door frame']: THREE.MeshStandardMaterial
    ['Material.039']: THREE.MeshStandardMaterial
    ['Material.038']: THREE.MeshStandardMaterial
  }
  animations: GLTFAction[]
}

export default function ClassRoomA(props: JSX.IntrinsicElements['group']) {
  const group = useRef(null);
  const { nodes, materials } = useGLTF('/classroom_alternative.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <PerspectiveCamera makeDefault={false} far={1000} near={0.1} fov={35.427} position={[24.215, 3.63, -1.05]} rotation={[0, Math.PI / 2, 0]} />
      <mesh geometry={nodes.Plane147.geometry} material={materials.Lectern} position={[-5.666, 0.425, -1.735]} />
      <mesh geometry={nodes.Plane002.geometry} material={materials.Ceiling} position={[-0.658, 9.088, 0.651]} />
      <mesh geometry={nodes.Plane.geometry} material={materials['Material.030']} position={[-1.111, 0, 1.757]} />
      <mesh geometry={nodes.Cube.geometry} material={materials['Material.053']} />
      <mesh geometry={nodes.Plane001.geometry} material={materials['Material.049']} />
      <mesh geometry={nodes.Plane144.geometry} material={materials.Bench} position={[19.372, 0, -9.291]}>
        <mesh geometry={nodes.Circle094.geometry} material={materials['Material.035']} position={[2.409, 0, 0]} />
        <mesh geometry={nodes.Vert047.geometry} material={materials['Material.033']} />
      </mesh>
      <mesh geometry={nodes.Plane145.geometry} material={materials.Bench} position={[22.131, 2.197, -9.291]}>
        <mesh geometry={nodes.Circle093.geometry} material={materials['Material.034']} position={[-0.562, -2.159, 0]} />
        <mesh geometry={nodes.Circle095.geometry} material={materials['Material.035']} position={[-0.562, -2.197, 0]} />
        <mesh geometry={nodes.Vert048.geometry} material={materials['Material.033']} position={[-0.562, -2.159, 0]} />
      </mesh>
      <mesh geometry={nodes.Circle096.geometry} material={nodes.Circle096.material} position={[21.57, 0.038, -9.291]} />
      <group position={[14.803, 0, -9.291]}>
        <mesh geometry={nodes.Plane003.geometry} material={materials.Bench} />
        <mesh geometry={nodes.Plane003_1.geometry} material={materials['Material.037']} />
        <mesh geometry={nodes.Circle087.geometry} material={materials['Material.035']} position={[2.409, 0, 0]} />
        <mesh geometry={nodes.Vert042.geometry} material={materials['Material.033']} />
      </group>
      <mesh geometry={nodes.Plane142.geometry} material={materials.Bench} position={[17.562, 2.197, -9.291]}>
        <mesh geometry={nodes.Circle086.geometry} material={materials['Material.034']} position={[-0.562, -2.159, 0]} />
        <mesh geometry={nodes.Circle088_1.geometry} material={materials['Material.035']} position={[-0.562, -2.197, 0]} />
        <mesh geometry={nodes.Vert043.geometry} material={materials['Material.033']} position={[-0.562, -2.159, 0]} />
      </mesh>
      <mesh geometry={nodes.Circle089.geometry} material={nodes.Circle089.material} position={[17, 0.038, -9.291]} />
      <group position={[10.234, 0, -9.291]}>
        <mesh geometry={nodes.Plane011.geometry} material={materials.Bench} />
        <mesh geometry={nodes.Plane011_1.geometry} material={materials['Material.037']} />
        <mesh geometry={nodes.Circle091.geometry} material={materials['Material.035']} position={[2.409, 0, 0]} />
        <mesh geometry={nodes.Vert044.geometry} material={materials['Material.033']} />
      </group>
      <mesh geometry={nodes.Plane146.geometry} material={materials.Bench} position={[12.993, 2.197, -9.291]}>
        <mesh geometry={nodes.Circle090.geometry} material={materials['Material.034']} position={[-0.562, -2.159, 0]} />
        <mesh geometry={nodes.Circle092_1.geometry} material={materials['Material.035']} position={[-0.562, -2.197, 0]} />
        <mesh geometry={nodes.Vert045.geometry} material={materials['Material.033']} position={[-0.562, -2.159, 0]} />
      </mesh>
      <mesh geometry={nodes.Circle097.geometry} material={nodes.Circle097.material} position={[12.431, 0.038, -9.291]} />
      <group position={[5.664, 0, -9.291]}>
        <mesh geometry={nodes.Plane013.geometry} material={materials.Bench} />
        <mesh geometry={nodes.Plane013_1.geometry} material={materials['Material.037']} />
        <mesh geometry={nodes.Circle099.geometry} material={materials['Material.035']} position={[2.409, 0, 0]} />
        <mesh geometry={nodes.Vert046.geometry} material={materials['Material.033']} />
      </group>
      <mesh geometry={nodes.Plane172.geometry} material={materials.Bench} position={[8.424, 2.197, -9.291]}>
        <mesh geometry={nodes.Circle098.geometry} material={materials['Material.034']} position={[-0.562, -2.159, 0]} />
        <mesh geometry={nodes.Circle100.geometry} material={materials['Material.035']} position={[-0.562, -2.197, 0]} />
        <mesh geometry={nodes.Vert049.geometry} material={materials['Material.033']} position={[-0.562, -2.159, 0]} />
      </mesh>
      <mesh geometry={nodes.Circle101.geometry} material={nodes.Circle101.material} position={[7.862, 0.038, -9.291]} />
      <group position={[1.095, 0, -9.291]}>
        <mesh geometry={nodes.Plane015.geometry} material={materials.Bench} />
        <mesh geometry={nodes.Plane015_1.geometry} material={materials['Material.037']} />
        <mesh geometry={nodes.Circle103.geometry} material={materials['Material.035']} position={[2.409, 0, 0]} />
        <mesh geometry={nodes.Vert050.geometry} material={materials['Material.033']} />
      </group>
      <mesh geometry={nodes.Plane174.geometry} material={materials.Bench} position={[3.854, 2.197, -9.291]}>
        <mesh geometry={nodes.Circle102.geometry} material={materials['Material.034']} position={[-0.562, -2.159, 0]} />
        <mesh geometry={nodes.Circle104.geometry} material={materials['Material.035']} position={[-0.562, -2.197, 0]} />
        <mesh geometry={nodes.Vert051.geometry} material={materials['Material.033']} position={[-0.562, -2.159, 0]} />
      </mesh>
      <mesh geometry={nodes.Circle105.geometry} material={nodes.Circle105.material} position={[3.293, 0.038, -9.291]} />
      <group position={[19.372, 0, -4.231]}>
        <mesh geometry={nodes.Plane017.geometry} material={materials.Bench} />
        <mesh geometry={nodes.Plane017_1.geometry} material={materials['Material.037']} />
        <mesh geometry={nodes.Circle107.geometry} material={materials['Material.035']} position={[2.409, 0, 0]} />
        <mesh geometry={nodes.Vert052.geometry} material={materials['Material.033']} />
      </group>
      <mesh geometry={nodes.Plane176.geometry} material={materials.Bench} position={[22.131, 2.197, -4.231]}>
        <mesh geometry={nodes.Circle106.geometry} material={materials['Material.034']} position={[-0.562, -2.159, 0]} />
        <mesh geometry={nodes.Circle108.geometry} material={materials['Material.035']} position={[-0.562, -2.197, 0]} />
        <mesh geometry={nodes.Vert053.geometry} material={materials['Material.033']} position={[-0.562, -2.159, 0]} />
      </mesh>
      <mesh geometry={nodes.Circle109.geometry} material={nodes.Circle109.material} position={[21.57, 0.038, -4.231]} />
      <group position={[14.803, 0, -4.231]}>
        <mesh geometry={nodes.Plane019.geometry} material={materials.Bench} />
        <mesh geometry={nodes.Plane019_1.geometry} material={materials['Material.037']} />
        <mesh geometry={nodes.Circle111.geometry} material={materials['Material.035']} position={[2.409, 0, 0]} />
        <mesh geometry={nodes.Vert054.geometry} material={materials['Material.033']} />
      </group>
      <mesh geometry={nodes.Plane178.geometry} material={materials.Bench} position={[17.562, 2.197, -4.231]}>
        <mesh geometry={nodes.Circle110.geometry} material={materials['Material.034']} position={[-0.562, -2.159, 0]} />
        <mesh geometry={nodes.Circle112.geometry} material={materials['Material.035']} position={[-0.562, -2.197, 0]} />
        <mesh geometry={nodes.Vert055.geometry} material={materials['Material.033']} position={[-0.562, -2.159, 0]} />
      </mesh>
      <mesh geometry={nodes.Circle113.geometry} material={nodes.Circle113.material} position={[17, 0.038, -4.231]} />
      <group position={[10.234, 0, -4.231]}>
        <mesh geometry={nodes.Plane027.geometry} material={materials.Bench} />
        <mesh geometry={nodes.Plane027_1.geometry} material={materials['Material.037']} />
        <mesh geometry={nodes.Circle115.geometry} material={materials['Material.035']} position={[2.409, 0, 0]} />
        <mesh geometry={nodes.Vert056.geometry} material={materials['Material.033']} />
      </group>
      <mesh geometry={nodes.Plane180.geometry} material={materials.Bench} position={[12.993, 2.197, -4.231]}>
        <mesh geometry={nodes.Circle114.geometry} material={materials['Material.034']} position={[-0.562, -2.159, 0]} />
        <mesh geometry={nodes.Circle116.geometry} material={materials['Material.035']} position={[-0.562, -2.197, 0]} />
        <mesh geometry={nodes.Vert057.geometry} material={materials['Material.033']} position={[-0.562, -2.159, 0]} />
      </mesh>
      <mesh geometry={nodes.Circle117.geometry} material={nodes.Circle117.material} position={[12.431, 0.038, -4.231]} />
      <group position={[5.664, 0, -4.231]}>
        <mesh geometry={nodes.Plane029.geometry} material={materials.Bench} />
        <mesh geometry={nodes.Plane029_1.geometry} material={materials['Material.037']} />
        <mesh geometry={nodes.Circle119.geometry} material={materials['Material.035']} position={[2.409, 0, 0]} />
        <mesh geometry={nodes.Vert058.geometry} material={materials['Material.033']} />
      </group>
      <mesh geometry={nodes.Plane182.geometry} material={materials.Bench} position={[8.424, 2.197, -4.231]}>
        <mesh geometry={nodes.Circle118.geometry} material={materials['Material.034']} position={[-0.562, -2.159, 0]} />
        <mesh geometry={nodes.Circle120.geometry} material={materials['Material.035']} position={[-0.562, -2.197, 0]} />
        <mesh geometry={nodes.Vert059.geometry} material={materials['Material.033']} position={[-0.562, -2.159, 0]} />
      </mesh>
      <mesh geometry={nodes.Circle121.geometry} material={nodes.Circle121.material} position={[7.862, 0.038, -4.231]} />
      <group position={[1.095, 0, -4.231]}>
        <mesh geometry={nodes.Plane031.geometry} material={materials.Bench} />
        <mesh geometry={nodes.Plane031_1.geometry} material={materials['Material.037']} />
        <mesh geometry={nodes.Circle123.geometry} material={materials['Material.035']} position={[2.409, 0, 0]} />
        <mesh geometry={nodes.Vert060.geometry} material={materials['Material.033']} />
      </group>
      <mesh geometry={nodes.Plane184.geometry} material={materials.Bench} position={[3.854, 2.197, -4.231]}>
        <mesh geometry={nodes.Circle122.geometry} material={materials['Material.034']} position={[-0.562, -2.159, 0]} />
        <mesh geometry={nodes.Circle124.geometry} material={materials['Material.035']} position={[-0.562, -2.197, 0]} />
        <mesh geometry={nodes.Vert061.geometry} material={materials['Material.033']} position={[-0.562, -2.159, 0]} />
      </mesh>
      <mesh geometry={nodes.Circle125.geometry} material={nodes.Circle125.material} position={[3.293, 0.038, -4.231]} />
      <group position={[19.372, 0, 0.829]}>
        <mesh geometry={nodes.Plane033.geometry} material={materials.Bench} />
        <mesh geometry={nodes.Plane033_1.geometry} material={materials['Material.037']} />
        <mesh geometry={nodes.Circle127.geometry} material={materials['Material.035']} position={[2.409, 0, 0]} />
        <mesh geometry={nodes.Vert062.geometry} material={materials['Material.033']} />
      </group>
      <mesh geometry={nodes.Plane186.geometry} material={materials.Bench} position={[22.131, 2.197, 0.829]}>
        <mesh geometry={nodes.Circle126.geometry} material={materials['Material.034']} position={[-0.562, -2.159, 0]} />
        <mesh geometry={nodes.Circle128.geometry} material={materials['Material.035']} position={[-0.562, -2.197, 0]} />
        <mesh geometry={nodes.Vert063.geometry} material={materials['Material.033']} position={[-0.562, -2.159, 0]} />
      </mesh>
      <mesh geometry={nodes.Circle129.geometry} material={nodes.Circle129.material} position={[21.57, 0.038, 0.829]} />
      <group position={[14.803, 0, 0.829]}>
        <mesh geometry={nodes.Plane035.geometry} material={materials.Bench} />
        <mesh geometry={nodes.Plane035_1.geometry} material={materials['Material.037']} />
        <mesh geometry={nodes.Circle131.geometry} material={materials['Material.035']} position={[2.409, 0, 0]} />
        <mesh geometry={nodes.Vert064.geometry} material={materials['Material.033']} />
      </group>
      <mesh geometry={nodes.Plane188.geometry} material={materials.Bench} position={[17.562, 2.197, 0.829]}>
        <mesh geometry={nodes.Circle130.geometry} material={materials['Material.034']} position={[-0.562, -2.159, 0]} />
        <mesh geometry={nodes.Circle132.geometry} material={materials['Material.035']} position={[-0.562, -2.197, 0]} />
        <mesh geometry={nodes.Vert065.geometry} material={materials['Material.033']} position={[-0.562, -2.159, 0]} />
      </mesh>
      <mesh geometry={nodes.Circle133.geometry} material={nodes.Circle133.material} position={[17, 0.038, 0.829]} />
      <group position={[10.234, 0, 0.829]}>
        <mesh geometry={nodes.Plane037.geometry} material={materials.Bench} />
        <mesh geometry={nodes.Plane037_1.geometry} material={materials['Material.037']} />
        <mesh geometry={nodes.Circle135.geometry} material={materials['Material.035']} position={[2.409, 0, 0]} />
        <mesh geometry={nodes.Vert066.geometry} material={materials['Material.033']} />
      </group>
      <mesh geometry={nodes.Plane190.geometry} material={materials.Bench} position={[12.993, 2.197, 0.829]}>
        <mesh geometry={nodes.Circle134.geometry} material={materials['Material.034']} position={[-0.562, -2.159, 0]} />
        <mesh geometry={nodes.Circle136.geometry} material={materials['Material.035']} position={[-0.562, -2.197, 0]} />
        <mesh geometry={nodes.Vert067.geometry} material={materials['Material.033']} position={[-0.562, -2.159, 0]} />
      </mesh>
      <mesh geometry={nodes.Circle137.geometry} material={nodes.Circle137.material} position={[12.431, 0.038, 0.829]} />
      <group position={[5.664, 0, 0.829]}>
        <mesh geometry={nodes.Plane045.geometry} material={materials.Bench} />
        <mesh geometry={nodes.Plane045_1.geometry} material={materials['Material.037']} />
        <mesh geometry={nodes.Circle139.geometry} material={materials['Material.035']} position={[2.409, 0, 0]} />
        <mesh geometry={nodes.Vert068.geometry} material={materials['Material.033']} />
      </group>
      <mesh geometry={nodes.Plane192.geometry} material={materials.Bench} position={[8.424, 2.197, 0.829]}>
        <mesh geometry={nodes.Circle138.geometry} material={materials['Material.034']} position={[-0.562, -2.159, 0]} />
        <mesh geometry={nodes.Circle140.geometry} material={materials['Material.035']} position={[-0.562, -2.197, 0]} />
        <mesh geometry={nodes.Vert069.geometry} material={materials['Material.033']} position={[-0.562, -2.159, 0]} />
      </mesh>
      <mesh geometry={nodes.Circle141.geometry} material={nodes.Circle141.material} position={[7.862, 0.038, 0.829]} />
      <group position={[1.095, 0, 0.829]}>
        <mesh geometry={nodes.Plane047.geometry} material={materials.Bench} />
        <mesh geometry={nodes.Plane047_1.geometry} material={materials['Material.037']} />
        <mesh geometry={nodes.Circle143.geometry} material={materials['Material.035']} position={[2.409, 0, 0]} />
        <mesh geometry={nodes.Vert070.geometry} material={materials['Material.033']} />
      </group>
      <mesh geometry={nodes.Plane194.geometry} material={materials.Bench} position={[3.854, 2.197, 0.829]}>
        <mesh geometry={nodes.Circle142.geometry} material={materials['Material.034']} position={[-0.562, -2.159, 0]} />
        <mesh geometry={nodes.Circle144.geometry} material={materials['Material.035']} position={[-0.562, -2.197, 0]} />
        <mesh geometry={nodes.Vert071.geometry} material={materials['Material.033']} position={[-0.562, -2.159, 0]} />
      </mesh>
      <mesh geometry={nodes.Circle145.geometry} material={nodes.Circle145.material} position={[3.293, 0.038, 0.829]} />
      <group position={[19.372, 0, 5.889]}>
        <mesh geometry={nodes.Plane049.geometry} material={materials.Bench} />
        <mesh geometry={nodes.Plane049_1.geometry} material={materials['Material.037']} />
        <mesh geometry={nodes.Circle147.geometry} material={materials['Material.035']} position={[2.409, 0, 0]} />
        <mesh geometry={nodes.Vert072.geometry} material={materials['Material.033']} />
      </group>
      <mesh geometry={nodes.Plane196.geometry} material={materials.Bench} position={[22.131, 2.197, 5.889]}>
        <mesh geometry={nodes.Circle146.geometry} material={materials['Material.034']} position={[-0.562, -2.159, 0]} />
        <mesh geometry={nodes.Circle148.geometry} material={materials['Material.035']} position={[-0.562, -2.197, 0]} />
        <mesh geometry={nodes.Vert073.geometry} material={materials['Material.033']} position={[-0.562, -2.159, 0]} />
      </mesh>
      <mesh geometry={nodes.Circle149.geometry} material={nodes.Circle149.material} position={[21.57, 0.038, 5.889]} />
      <group position={[14.803, 0, 5.889]}>
        <mesh geometry={nodes.Plane051.geometry} material={materials.Bench} />
        <mesh geometry={nodes.Plane051_1.geometry} material={materials['Material.037']} />
        <mesh geometry={nodes.Circle151.geometry} material={materials['Material.035']} position={[2.409, 0, 0]} />
        <mesh geometry={nodes.Vert074.geometry} material={materials['Material.033']} />
      </group>
      <mesh geometry={nodes.Plane198.geometry} material={materials.Bench} position={[17.562, 2.197, 5.889]}>
        <mesh geometry={nodes.Circle150.geometry} material={materials['Material.034']} position={[-0.562, -2.159, 0]} />
        <mesh geometry={nodes.Circle152.geometry} material={materials['Material.035']} position={[-0.562, -2.197, 0]} />
        <mesh geometry={nodes.Vert075.geometry} material={materials['Material.033']} position={[-0.562, -2.159, 0]} />
      </mesh>
      <mesh geometry={nodes.Circle153.geometry} material={nodes.Circle153.material} position={[17, 0.038, 5.889]} />
      <group position={[10.234, 0, 5.889]}>
        <mesh geometry={nodes.Plane053.geometry} material={materials.Bench} />
        <mesh geometry={nodes.Plane053_1.geometry} material={materials['Material.037']} />
        <mesh geometry={nodes.Circle155.geometry} material={materials['Material.035']} position={[2.409, 0, 0]} />
        <mesh geometry={nodes.Vert076.geometry} material={materials['Material.033']} />
      </group>
      <mesh geometry={nodes.Plane200.geometry} material={materials.Bench} position={[12.993, 2.197, 5.889]}>
        <mesh geometry={nodes.Circle154.geometry} material={materials['Material.034']} position={[-0.562, -2.159, 0]} />
        <mesh geometry={nodes.Circle156.geometry} material={materials['Material.035']} position={[-0.562, -2.197, 0]} />
        <mesh geometry={nodes.Vert077.geometry} material={materials['Material.033']} position={[-0.562, -2.159, 0]} />
      </mesh>
      <mesh geometry={nodes.Circle157.geometry} material={nodes.Circle157.material} position={[12.431, 0.038, 5.889]} />
      <group position={[5.664, 0, 5.889]}>
        <mesh geometry={nodes.Plane055.geometry} material={materials.Bench} />
        <mesh geometry={nodes.Plane055_1.geometry} material={materials['Material.037']} />
        <mesh geometry={nodes.Circle159.geometry} material={materials['Material.035']} position={[2.409, 0, 0]} />
        <mesh geometry={nodes.Vert078.geometry} material={materials['Material.033']} />
      </group>
      <mesh geometry={nodes.Plane202.geometry} material={materials.Bench} position={[8.424, 2.197, 5.889]}>
        <mesh geometry={nodes.Circle158.geometry} material={materials['Material.034']} position={[-0.562, -2.159, 0]} />
        <mesh geometry={nodes.Circle160.geometry} material={materials['Material.035']} position={[-0.562, -2.197, 0]} />
        <mesh geometry={nodes.Vert079.geometry} material={materials['Material.033']} position={[-0.562, -2.159, 0]} />
      </mesh>
      <mesh geometry={nodes.Circle161.geometry} material={nodes.Circle161.material} position={[7.862, 0.038, 5.889]} />
      <group position={[1.095, 0, 5.889]}>
        <mesh geometry={nodes.Plane063.geometry} material={materials.Bench} />
        <mesh geometry={nodes.Plane063_1.geometry} material={materials['Material.037']} />
        <mesh geometry={nodes.Circle163.geometry} material={materials['Material.035']} position={[2.409, 0, 0]} />
        <mesh geometry={nodes.Vert080.geometry} material={materials['Material.033']} />
      </group>
      <mesh geometry={nodes.Plane204.geometry} material={materials.Bench} position={[3.854, 2.197, 5.889]}>
        <mesh geometry={nodes.Circle162.geometry} material={materials['Material.034']} position={[-0.562, -2.159, 0]} />
        <mesh geometry={nodes.Circle164.geometry} material={materials['Material.035']} position={[-0.562, -2.197, 0]} />
        <mesh geometry={nodes.Vert081.geometry} material={materials['Material.033']} position={[-0.562, -2.159, 0]} />
      </mesh>
      <mesh geometry={nodes.Circle165.geometry} material={nodes.Circle165.material} position={[3.293, 0.038, 5.889]} />
      <mesh geometry={nodes.Cube024.geometry} material={materials.Shelf} position={[-7.041, -0.004, 8.736]}>
        <mesh geometry={nodes.Cube022.geometry} material={materials.Shelf} position={[-1.592, 1.776, -0.928]}>
          <mesh geometry={nodes.Sphere.geometry} material={materials['Material.016']} position={[2.174, 0.072, -0.102]} />
        </mesh>
      </mesh>
      <mesh geometry={nodes.Plane022.geometry} material={materials['Board upper']} position={[0, 0, -0.51]} />
      <mesh geometry={nodes.Plane023.geometry} material={materials['Board lower']} position={[0, 0, -0.51]} />
      <mesh geometry={nodes.Cube004.geometry} material={materials['Material.015']} position={[0, 5.171, 9.944]} />
      <mesh geometry={nodes.Cube006.geometry} material={materials['Material.022']} position={[-3.27, 5.238, 10.752]} />
      <mesh geometry={nodes.Cube008.geometry} material={materials['Material.023']} position={[-2.948, 5.238, 10.647]} />
      <mesh geometry={nodes.Cube010.geometry} material={materials['Material.018']} position={[3.173, 5.238, 10.541]} />
      <mesh geometry={nodes.Cube014.geometry} material={materials['Material.017']} position={[14.479, 5.171, 9.944]} />
      <mesh geometry={nodes.Cube016.geometry} material={materials['Material.051']} position={[15.45, 5.238, 10.752]} />
      <mesh geometry={nodes.Cube018.geometry} material={materials['Material.052']} position={[17.705, 5.238, 10.647]} />
      <mesh geometry={nodes.Cube020.geometry} material={materials['Material.024']} position={[16.104, 5.238, 10.541]} />
      <mesh geometry={nodes.Cube007.geometry} material={materials['Material.026']} position={[-3.27, 5.238, 10.752]} />
      <mesh geometry={nodes.Cube009.geometry} material={materials['Material.026']} position={[-2.948, 5.238, 10.647]} />
      <mesh geometry={nodes.Cube011.geometry} material={materials['Material.026']} position={[3.173, 5.238, 10.541]} />
      <mesh geometry={nodes.Cube017.geometry} material={materials['Material.026']} position={[15.45, 5.238, 10.752]} />
      <mesh geometry={nodes.Cube019.geometry} material={materials['Material.026']} position={[17.705, 5.238, 10.647]} />
      <mesh geometry={nodes.Cube021.geometry} material={materials['Material.026']} position={[16.104, 5.238, 10.541]} />
      <mesh geometry={nodes.Vert.geometry} material={materials['Material.029']} position={[14.497, 7.808, 9.664]}>
        <mesh geometry={nodes.Torus.geometry} material={materials['Material.028']} position={[4.289, -0.021, -0.146]}>
          <mesh geometry={nodes.Plane166.geometry} material={materials['Material.057']} position={[-0.389, -2.767, 0]} />
        </mesh>
        <mesh geometry={nodes.Torus018.geometry} material={materials['Material.028']} position={[-3.528, -0.021, -0.146]}>
          <mesh geometry={nodes.Plane165.geometry} material={materials['Material.057']} position={[-0.445, -2.768, -0.001]} />
        </mesh>
        <mesh geometry={nodes.Vert002.geometry} material={materials['Material.029']} />
      </mesh>
      <mesh geometry={nodes.Vert007.geometry} material={materials['Material.029']} position={[0, 7.808, 9.664]}>
        <mesh geometry={nodes.Torus001.geometry} material={materials['Material.028']} position={[-2.673, -0.021, -0.146]}>
          <mesh geometry={nodes.Plane167.geometry} material={materials['Material.057']} position={[-0.741, -2.768, -0.001]} />
        </mesh>
        <mesh geometry={nodes.Torus002.geometry} material={materials['Material.028']} position={[4.436, -0.021, -0.146]}>
          <mesh geometry={nodes.Plane168.geometry} material={materials['Material.057']} position={[-0.338, -2.767, 0]} />
        </mesh>
        <mesh geometry={nodes.Vert003.geometry} material={materials['Material.029']} />
      </mesh>
      <mesh geometry={nodes.Plane007.geometry} material={materials['Material.031']} position={[-8.515, 9.521, -1.02]}>
        <mesh geometry={nodes.Cylinder.geometry} material={materials['Material.032']} position={[0, -0.28, 0]} />
        <mesh geometry={nodes.Cylinder001.geometry} material={materials['Material.031']} position={[0, -0.28, 0]} />
        <mesh geometry={nodes.Plane003_2.geometry} material={materials['Material.031']} position={[0, -0.127, 0]} />
      </mesh>
      <mesh geometry={nodes.Plane021.geometry} material={materials['Material.031']} position={[-0.405, 9.521, -1.02]}>
        <mesh geometry={nodes.Cylinder002.geometry} material={materials['Material.031']} position={[0, -0.28, 0]} />
        <mesh geometry={nodes.Cylinder003.geometry} material={materials['Material.032']} position={[0, -0.28, 0]} />
        <mesh geometry={nodes.Plane008.geometry} material={materials['Material.031']} position={[0, -0.127, 0]} />
      </mesh>
      <mesh geometry={nodes.Plane026.geometry} material={materials['Material.031']} position={[7.706, 9.521, -1.02]}>
        <mesh geometry={nodes.Cylinder004.geometry} material={materials['Material.031']} position={[0, -0.28, 0]} />
        <mesh geometry={nodes.Cylinder005.geometry} material={materials['Material.032']} position={[0, -0.28, 0]} />
        <mesh geometry={nodes.Plane025.geometry} material={materials['Material.031']} position={[0, -0.127, 0]} />
      </mesh>
      <mesh geometry={nodes.Plane040.geometry} material={materials['Material.031']} position={[15.816, 9.521, -1.02]}>
        <mesh geometry={nodes.Cylinder006.geometry} material={materials['Material.031']} position={[0, -0.28, 0]} />
        <mesh geometry={nodes.Cylinder007.geometry} material={materials['Material.032']} position={[0, -0.28, 0]} />
        <mesh geometry={nodes.Plane039.geometry} material={materials['Material.031']} position={[0, -0.127, 0]} />
      </mesh>
      <mesh geometry={nodes.Plane042.geometry} material={materials['Material.031']} position={[23.926, 9.521, -1.02]}>
        <mesh geometry={nodes.Cylinder008.geometry} material={materials['Material.031']} position={[0, -0.28, 0]} />
        <mesh geometry={nodes.Cylinder009.geometry} material={materials['Material.032']} position={[0, -0.28, 0]} />
        <mesh geometry={nodes.Plane041.geometry} material={materials['Material.031']} position={[0, -0.127, 0]} />
      </mesh>
      <mesh geometry={nodes.Plane044.geometry} material={materials['Material.031']} position={[-4.261, 9.521, 6.216]}>
        <mesh geometry={nodes.Cylinder010.geometry} material={materials['Material.031']} position={[0, -0.28, 0]} />
        <mesh geometry={nodes.Cylinder011.geometry} material={materials['Material.032']} position={[0, -0.28, 0]} />
        <mesh geometry={nodes.Plane043.geometry} material={materials['Material.031']} position={[0, -0.127, 0]} />
      </mesh>
      <mesh geometry={nodes.Plane058.geometry} material={materials['Material.031']} position={[3.849, 9.521, 6.216]}>
        <mesh geometry={nodes.Cylinder012.geometry} material={materials['Material.031']} position={[0, -0.28, 0]} />
        <mesh geometry={nodes.Cylinder013.geometry} material={materials['Material.032']} position={[0, -0.28, 0]} />
        <mesh geometry={nodes.Plane057.geometry} material={materials['Material.031']} position={[0, -0.127, 0]} />
      </mesh>
      <mesh geometry={nodes.Plane060.geometry} material={materials['Material.031']} position={[11.959, 9.521, 6.216]}>
        <mesh geometry={nodes.Cylinder014.geometry} material={materials['Material.031']} position={[0, -0.28, 0]} />
        <mesh geometry={nodes.Cylinder015.geometry} material={materials['Material.032']} position={[0, -0.28, 0]} />
        <mesh geometry={nodes.Plane059.geometry} material={materials['Material.031']} position={[0, -0.127, 0]} />
      </mesh>
      <mesh geometry={nodes.Plane062.geometry} material={materials['Material.031']} position={[20.07, 9.521, 6.216]}>
        <mesh geometry={nodes.Cylinder016.geometry} material={materials['Material.031']} position={[0, -0.28, 0]} />
        <mesh geometry={nodes.Cylinder017.geometry} material={materials['Material.032']} position={[0, -0.28, 0]} />
        <mesh geometry={nodes.Plane061.geometry} material={materials['Material.031']} position={[0, -0.127, 0]} />
      </mesh>
      <mesh geometry={nodes.Plane150.geometry} material={materials['Material.031']} position={[-4.261, 9.521, -8.146]}>
        <mesh geometry={nodes.Cylinder020.geometry} material={materials['Material.031']} position={[0, -0.28, 0]} />
        <mesh geometry={nodes.Cylinder021.geometry} material={materials['Material.032']} position={[0, -0.28, 0]} />
        <mesh geometry={nodes.Plane149.geometry} material={materials['Material.031']} position={[0, -0.127, 0]} />
      </mesh>
      <mesh geometry={nodes.Plane152.geometry} material={materials['Material.031']} position={[3.849, 9.521, -8.146]}>
        <mesh geometry={nodes.Cylinder022.geometry} material={materials['Material.031']} position={[0, -0.28, 0]} />
        <mesh geometry={nodes.Cylinder023.geometry} material={materials['Material.032']} position={[0, -0.28, 0]} />
        <mesh geometry={nodes.Plane151.geometry} material={materials['Material.031']} position={[0, -0.127, 0]} />
      </mesh>
      <mesh geometry={nodes.Plane154.geometry} material={materials['Material.031']} position={[11.959, 9.521, -8.146]}>
        <mesh geometry={nodes.Cylinder024.geometry} material={materials['Material.031']} position={[0, -0.28, 0]} />
        <mesh geometry={nodes.Cylinder025.geometry} material={materials['Material.032']} position={[0, -0.28, 0]} />
        <mesh geometry={nodes.Plane153.geometry} material={materials['Material.031']} position={[0, -0.127, 0]} />
      </mesh>
      <mesh geometry={nodes.Plane156.geometry} material={materials['Material.031']} position={[20.07, 9.521, -8.146]}>
        <mesh geometry={nodes.Cylinder026.geometry} material={materials['Material.031']} position={[0, -0.28, 0]} />
        <mesh geometry={nodes.Cylinder027.geometry} material={materials['Material.032']} position={[0, -0.28, 0]} />
        <mesh geometry={nodes.Plane155_1.geometry} material={materials['Material.031']} position={[0, -0.127, 0]} />
      </mesh>
      <mesh geometry={nodes.Circle003.geometry} material={materials['Material.044']} position={[-9.85, 6.992, -11.591]}>
        <mesh geometry={nodes.Circle004.geometry} material={materials['Material.043']} position={[0.102, 0, 0]} />
        <mesh geometry={nodes.Circle005_1.geometry} material={materials['Material.045']} />
        <mesh geometry={nodes.Circle013.geometry} material={materials['Material.047']} position={[-0.112, 0, 0]} />
        <mesh geometry={nodes.Plane148_1.geometry} material={materials['Material.047']} />
        <mesh geometry={nodes.Plane157.geometry} material={materials['Material.046']} />
      </mesh>
      <mesh geometry={nodes.Circle.geometry} material={materials['Material.042']} position={[-9.2, 0, -11.561]}>
        <mesh geometry={nodes.Circle002.geometry} material={materials['Material.041']} position={[0, -0.04, 0]} />
      </mesh>
      <mesh geometry={nodes.Circle014.geometry} material={materials['Material.002']} position={[-9.34, 3.633, -5.125]} />
      <mesh geometry={nodes.Plane169.geometry} material={materials.Material} position={[-9.339, 3.506, -6.343]}>
        <mesh geometry={nodes.Plane170.geometry} material={materials['Material.001']} />
      </mesh>
      <mesh geometry={nodes.Circle015.geometry} material={materials['Material.005']} position={[-9.539, 3.633, -5.115]} />
      <mesh geometry={nodes.Circle016.geometry} material={materials['Material.004']} position={[-9.41, 3.633, -5.267]} />
      <mesh geometry={nodes.Circle025.geometry} material={materials['Material.003']} position={[-9.073, 3.636, -4.541]} />
      <mesh geometry={nodes.Plane164.geometry} material={materials['Door frame']} position={[-3.82, -0.076, -13.989]}>
        <mesh geometry={nodes.Cube025.geometry} material={materials['Material.039']} position={[0, 0.091, 0.141]} />
        <mesh geometry={nodes.Plane158.geometry} material={materials['Material.026']} position={[0, 4.153, 0.198]} />
        <mesh geometry={nodes.Plane159_1.geometry} material={materials['Material.038']} position={[0, 4.153, 0.321]} />
        <mesh geometry={nodes.Plane160.geometry} material={materials['Material.026']} position={[0, 4.153, 0.31]} />
        <mesh geometry={nodes.Plane161.geometry} material={materials['Material.026']} position={[0, 4.153, 0.198]} />
        <mesh geometry={nodes.Plane163.geometry} material={materials['Material.038']} position={[0, 4.153, 0.321]} />
      </mesh>
    </group>
  )
}

useGLTF.preload('/classroom_alternative.glb')
