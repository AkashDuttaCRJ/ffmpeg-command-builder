import { cn } from "@/lib/utils";
import { BadgeInfo } from "lucide-react";
import { Ref } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

interface BaseNodeProps {
  icon: React.ReactNode;
  header: string;
  children: React.ReactNode;
  ref?: Ref<HTMLDivElement>;
  selected?: boolean;
  className?: string;
  helpText?: string;
}

export const BaseNode: React.FC<BaseNodeProps> = ({
  ref,
  header,
  icon,
  children,
  selected,
  className,
  helpText,
}) => {
  return (
    <div
      ref={ref}
      className={cn(
        "rounded-md border bg-card text-card-foreground shadow min-w-60",
        className,
        selected ? "border-muted-foreground shadow-lg" : "",
        "hover:ring-1"
      )}
    >
      <div className="flex items-center gap-4 px-3 py-2 bg-neutral-200">
        <div className="flex items-center gap-2 flex-1">
          {icon}
          {header}
        </div>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <BadgeInfo size={16} />
            </TooltipTrigger>
            <TooltipContent>{helpText}</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      {children}
    </div>
  );
};
