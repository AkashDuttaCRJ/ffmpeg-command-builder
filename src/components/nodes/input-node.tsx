import { FileInput } from "lucide-react";
import { BaseNode } from "../base-node";

export const InputNode = () => {
  return (
    <BaseNode icon={<FileInput size={16} />} header="Input" helpText="Sample">
      <div></div>
    </BaseNode>
  );
};
