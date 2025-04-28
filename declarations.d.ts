// declarations.d.ts
declare module 'three/examples/jsm/controls/OrbitControls.js' {
    import { Camera, EventDispatcher, MOUSE, Object3D, TOUCH, Vector3 } from 'three';
  
    export class OrbitControls extends EventDispatcher {
      constructor(object: Camera, domElement?: HTMLElement);
  
      object: Camera;
      domElement: HTMLElement | HTMLDocument;
  
      enabled: boolean;
      target: Vector3;
  
      minDistance: number;
      maxDistance: number;
  
      minZoom: number;
      maxZoom: number;
  
      minPolarAngle: number;
      maxPolarAngle: number;
  
      minAzimuthAngle: number;
      maxAzimuthAngle: number;
  
      enableDamping: boolean;
      dampingFactor: number;
  
      enableZoom: boolean;
      zoomSpeed: number;
  
      enableRotate: boolean;
      rotateSpeed: number;
  
      enablePan: boolean;
      panSpeed: number;
      screenSpacePanning: boolean;
      keyPanSpeed: number;
  
      autoRotate: boolean;
      autoRotateSpeed: number;
  
      enableKeys: boolean;
      keys: { LEFT: string; UP: string; RIGHT: string; BOTTOM: string };
  
      mouseButtons: { LEFT: MOUSE; MIDDLE: MOUSE; RIGHT: MOUSE };
      touches: { ONE: TOUCH; TWO: TOUCH };
  
      update(): boolean;
      reset(): void;
      dispose(): void;
  
      saveState(): void;
    }
  }
  