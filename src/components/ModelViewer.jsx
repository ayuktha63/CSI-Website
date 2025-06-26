// import React, { Suspense } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, useGLTF } from "@react-three/drei";

// // ✅ Define model URL properly
// const MODEL_URL = "https://modelviewer.dev/shared-assets/models/Astronaut.glb";

// // ✅ Model must be defined as a component
// const Model = () => {
//   const gltf = useGLTF(MODEL_URL);
//   return <primitive object={gltf.scene} scale={2} position={[0, -1.5, 0]} />;
// };

// const ModelViewer = () => {
//   return (
//     <div className="model-canvas" style={{ width: "100%", height: "100vh" }}>
//       <Canvas camera={{ position: [0, 0, 5] }}>
//         <ambientLight intensity={1} />
//         <directionalLight position={[5, 5, 5]} />
//         <Suspense fallback={null}>
//           <Model />
//         </Suspense>
//         <OrbitControls />
//       </Canvas>
//     </div>
//   );
// };

// export default ModelViewer;
