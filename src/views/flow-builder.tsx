"use client";

import { InputNode } from "@/components/nodes/input-node";
import { Background, ReactFlow } from "@xyflow/react";
import "@xyflow/react/dist/base.css";

const nodeTypes = {
  input: InputNode,
};

export const FlowBuilder = () => {
  return (
    <ReactFlow
      nodes={[
        {
          id: "node-1",
          type: "input",
          position: { x: 0, y: 0 },
          data: { value: 123 },
        },
      ]}
      edges={[]}
      nodeTypes={nodeTypes}
      proOptions={{
        hideAttribution: true,
      }}
      minZoom={1}
    >
      <Background bgColor="#fafafa" />
    </ReactFlow>
  );
};
