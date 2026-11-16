
import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Html,
  Line,
  OrbitControls,
} from "@react-three/drei";
import { useReducedMotion } from "motion/react";
import * as THREE from "three";

type NodeName =
  | "Backend"
  | "Databases"
  | "Product"
  | "DevOps"
  | "System Architecture";

type GraphNodeData = {
  name: NodeName;
  position: [number, number, number];
};

type GraphPosition = GraphNodeData["position"];

const nodes: GraphNodeData[] = [
  { name: "Backend", position: [-3.15, 2.1, 0] },
  { name: "Databases", position: [2.45, 1.5, 0] },
  { name: "Product", position: [0, -2.85, 0] },
  { name: "DevOps", position: [-2.55, -1.3, 0] },
  { name: "System Architecture", position: [0, 3.05, 0] },
];

const satelliteNodes: GraphPosition[] = [
  [-3.35, 2.25, -0.1],
  [-1.6, 2.8, 0.1],
  [0, 3.25, -0.15],
  [1.65, 2.75, 0.1],
  [3.35, 2.15, -0.1],
  [-3.6, 0.2, 0.1],
  [-3.5, -2.1, -0.15],
  [-1.8, -2.65, 0.1],
  [1.65, -2.75, -0.1],
  [3.55, -2, 0.1],
  [3.55, 0.25, -0.1],
  [-1.35, 0.75, -0.2],
  [1.35, 0.55, -0.2],
  [-0.9, -1.25, -0.2],
  [0.95, -1.45, -0.2],
  [-2.05, 2.35, -0.2],
  [2.05, 2.25, -0.2],
  [-2.1, -2.25, -0.2],
  [2.15, -2.25, -0.2],
];

const networkVertices: GraphPosition[] = [
  ...nodes.map(({ position }) => position),
  ...satelliteNodes,
];

const networkEdges: [number, number][] = [
  [0, 5], [0, 6], [0, 20], [1, 8], [1, 9], [1, 21],
  [2, 13], [2, 14], [2, 23], [3, 12], [3, 22], [4, 10],
  [4, 11], [4, 20], [5, 10], [5, 16], [6, 7], [6, 22],
  [7, 8], [7, 23], [8, 9], [8, 23], [9, 10], [10, 11],
  [11, 12], [11, 16], [11, 20], [12, 13], [12, 14], [12, 17],
  [13, 14], [13, 22], [14, 15], [14, 18], [15, 16], [15, 17],
  [16, 18], [17, 18], [17, 22], [18, 19], [19, 23], [18, 23],
];

const packetEdges: [number, number][] = [
  [0, 5],
  [1, 9],
  [2, 14],
  [4, 10],
];

const connections: [number, number][] = [
  [0, 2], [1, 2], [2, 3], [2, 4], [0, 3], [1, 4],
];

const nodeDetails: Record<NodeName, {
  title: string;
  description: string;
  technologies: string;
}> = {
  Backend: {
    title: "Backend Development",
    description: "Building application logic, backend services, and APIs.",
    technologies: "Java · Node.js · Express · Python",
  },
  Databases: {
    title: "Data Systems",
    description: "Working with relational databases and time-series data.",
    technologies: "PostgreSQL · TimescaleDB · MongoDB",
  },
  Product: {
    title: "Product & User Experience",
    description: "Combining engineering with interface design and product thinking.",
    technologies: "React · Vue.js · UI/UX",
  },
  DevOps: {
    title: "DevOps & Infrastructure",
    description: "Building, deploying, and supporting reliable software.",
    technologies: "Docker · Linux · OpenTelemetry",
  },
  "System Architecture": {
    title: "System Architecture",
    description: "Exploring how software systems fit together and scale.",
    technologies: "APIs · Databases · Distributed Systems",
  },
};

const nodeIconPaths: Record<NodeName, string> = {
  Backend: "m8 8-4 4 4 4m8-8 4 4-4 4m-5 2 2-12",
  Databases:
    "M12 3c-4.4 0-8 1.3-8 3s3.6 3 8 3 8-1.3 8-3-3.6-3-8-3Zm-8 3v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6m-16 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6",
  Product:
    "M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2m6-10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm6-7.8a4 4 0 0 1 0 7.6m2 4.2a4 4 0 0 1 2 3.5V21",
  DevOps: "M3 5h18v13H3zM8 22h8m-4-4v4",
  "System Architecture":
    "m8 8-4 4 4 4m8-8 4 4-4 4m-5 2 2-12",
};

function GraphNode({
  node,
  active,
  onHover,
  onSelect,
}: {
  node: GraphNodeData;
  active: boolean;
  onHover: (name: NodeName | null) => void;
  onSelect: (name: NodeName) => void;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const targetScale = useRef(1);

  useFrame((_, delta) => {
    if (!meshRef.current) return;

    targetScale.current = active ? 1.4 : 1;

    meshRef.current.scale.lerp(
      new THREE.Vector3(
        targetScale.current,
        targetScale.current,
        targetScale.current
      ),
      1 - Math.exp(-12 * delta)
    );
    meshRef.current.position.z = THREE.MathUtils.damp(
      meshRef.current.position.z,
      active ? 0.45 : node.position[2],
      12,
      delta
    );
  });

  return (
    <mesh
      ref={meshRef}
      position={node.position}
      onPointerOver={(event) => {
        event.stopPropagation();
        onHover(node.name);
      }}
      onPointerOut={() => onHover(null)}
      onClick={(event) => {
        event.stopPropagation();
        onSelect(node.name);
      }}
    >
      <sphereGeometry args={[0.2, 24, 24]} />
      <meshStandardMaterial
        color={active ? "#C5E9A0" : "#7F9C75"}
        emissive={active ? "#7F9C75" : "#253A2B"}
        emissiveIntensity={active ? 0.85 : 0.25}
        roughness={0.4}
      />

      <Html position={[0, 0.25, 0]} center distanceFactor={8}>
        <span className="pointer-events-none inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-border bg-surface/95 px-2.5 py-1 font-mono text-[10px] text-text-primary shadow-lg sm:gap-2 sm:px-3 sm:text-xs">
          <svg
            aria-hidden="true"
            className="h-3.5 w-3.5 shrink-0 text-highlight sm:h-4 sm:w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d={nodeIconPaths[node.name]} />
          </svg>
          {node.name}
        </span>
      </Html>
    </mesh>
  );
}

function Connections({
  activeNode,
}: {
  activeNode: NodeName | null;
}) {
  return (
    <>
      {connections.map(([start, end], index) => {
        const a = nodes[start];
        const b = nodes[end];

        const highlighted =
          activeNode === null ||
          a.name === activeNode ||
          b.name === activeNode;

        return (
          <Line
            key={index}
            points={[a.position, b.position]}
            color={highlighted ? "#7F9C75" : "#34413D"}
            lineWidth={highlighted ? 1.2 : 0.65}
            transparent
            opacity={highlighted ? 0.7 : 0.2}
          />
        );
      })}
    </>
  );
}

function NetworkMesh({ reducedMotion }: { reducedMotion: boolean }) {
  return (
    <>
      {networkEdges.map(([start, end], index) => (
        <Line
          key={`edge-${index}`}
          points={[networkVertices[start], networkVertices[end]]}
          color="#7F9C75"
          lineWidth={0.55}
          transparent
          opacity={0.19}
        />
      ))}

      {satelliteNodes.map((position, index) => (
        <mesh key={`satellite-${index}`} position={position}>
          <sphereGeometry args={[index % 4 === 0 ? 0.075 : 0.05, 12, 12]} />
          <meshBasicMaterial
            color={index % 4 === 0 ? "#C5E9A0" : "#7F9C75"}
            transparent
            opacity={index % 4 === 0 ? 0.72 : 0.45}
          />
        </mesh>
      ))}

      {!reducedMotion &&
        packetEdges.map(([start, end], index) => (
          <DataPulse
            key={`pulse-${index}`}
            start={networkVertices[start]}
            end={networkVertices[end]}
            offset={index * 0.23}
          />
        ))}
    </>
  );
}

function DataPulse({
  start,
  end,
  offset,
}: {
  start: GraphPosition;
  end: GraphPosition;
  offset: number;
}) {
  const pulseRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!pulseRef.current) return;

    const progress = (state.clock.elapsedTime * 0.12 + offset) % 1;
    pulseRef.current.position.set(
      THREE.MathUtils.lerp(start[0], end[0], progress),
      THREE.MathUtils.lerp(start[1], end[1], progress),
      THREE.MathUtils.lerp(start[2], end[2], progress) + 0.04
    );
  });

  return (
    <mesh ref={pulseRef}>
      <sphereGeometry args={[0.045, 10, 10]} />
      <meshBasicMaterial color="#C5E9A0" />
    </mesh>
  );
}

function Scene({
  activeNode,
  reducedMotion,
  compact,
  onHover,
  onSelect,
}: {
  activeNode: NodeName | null;
  reducedMotion: boolean;
  compact: boolean;
  onHover: (name: NodeName | null) => void;
  onSelect: (name: NodeName) => void;
}) {
  const graphRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (!graphRef.current || !compact || reducedMotion || activeNode) return;

    graphRef.current.rotation.z += delta * 0.1;
  });

  return (
    <>
      <ambientLight intensity={1.1} />
      <pointLight position={[0, 0, 2]} intensity={1.4} color="#C5E9A0" />
      <directionalLight position={[3, 4, 5]} intensity={1.3} />

      <mesh position={[0, 0, -0.4]}>
        <circleGeometry args={[0.35, 48]} />
        <meshBasicMaterial color="#7F9C75" transparent opacity={0.07} />
      </mesh>

      <group ref={graphRef} scale={compact ? 0.82 : 1}>
        <NetworkMesh reducedMotion={reducedMotion} />
        <Connections activeNode={activeNode} />

        {nodes.map((node) => (
          <GraphNode
            key={node.name}
            node={node}
            active={activeNode === node.name}
            onHover={onHover}
            onSelect={onSelect}
          />
        ))}
      </group>

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={!compact && !reducedMotion}
        rotateSpeed={0.35}
        minPolarAngle={Math.PI / 2.8}
        maxPolarAngle={Math.PI / 1.8}
      />
    </>
  );
}

type SystemGraph3DProps = {
  compact?: boolean;
};

function SystemGraph3D({ compact = false }: SystemGraph3DProps) {
  const prefersReducedMotion = useReducedMotion() ?? false;
  const [hoveredNode, setHoveredNode] = useState<NodeName | null>(null);
  const [selectedNode, setSelectedNode] = useState<NodeName | null>(null);

  const activeNode = hoveredNode ?? selectedNode;
  const details = selectedNode ? nodeDetails[selectedNode] : null;

  return (
    <div className={compact ? "h-full w-full overflow-hidden" : "w-full"}>
      <div className={compact ? "relative h-full min-h-[340px] w-full overflow-hidden" : "h-[450px] w-full"}>
        <Canvas
          camera={{
            position: [0, 0, compact ? 8.2 : 7],
            fov: 45,
          }}
          dpr={[1, 1.5]}
          onPointerMissed={() => setSelectedNode(null)}
          fallback={<p className="p-6 text-text-secondary">3D graph unavailable on this device.</p>}
        >
          <Scene
            activeNode={activeNode}
            reducedMotion={prefersReducedMotion}
            compact={compact}
            onHover={setHoveredNode}
            onSelect={setSelectedNode}
          />
        </Canvas>
      </div>

      {!compact && (
        <div className="min-h-[170px] border-t border-border p-6" aria-live="polite">
          {details ? (
            <>
              <p className="font-mono text-xs uppercase tracking-widest text-accent">
                {selectedNode}
              </p>
              <h3 className="mt-3 text-2xl text-text-primary">
                {details.title}
              </h3>
              <p className="mt-2 text-sm leading-7 text-text-secondary">
                {details.description}
              </p>
              <p className="mt-4 font-mono text-xs text-accent">
                {details.technologies}
              </p>
            </>
          ) : (
            <p className="flex min-h-[110px] items-center justify-center text-center text-sm text-text-secondary">
              Select a node to explore my engineering interests and work.
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default SystemGraph3D;
