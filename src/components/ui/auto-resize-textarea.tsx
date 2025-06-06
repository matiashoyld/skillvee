import * as React from "react";
import TextareaAutosize from "react-textarea-autosize";
import { cn } from "~/lib/utils";

export interface AutoResizeTextareaProps
  extends React.ComponentProps<typeof TextareaAutosize> {
  className?: string;
}

const AutoResizeTextarea = React.forwardRef<
  HTMLTextAreaElement,
  AutoResizeTextareaProps
>(({ className, ...props }, ref) => {
  return (
    <TextareaAutosize
      className={cn(
        "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});

AutoResizeTextarea.displayName = "AutoResizeTextarea";

export { AutoResizeTextarea };