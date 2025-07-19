import { ReactNode, CSSProperties } from "react";

interface ConversationBubbleProps {
  children: ReactNode;
  direction?: "left" | "right";
  className?: string;
  style?: CSSProperties;
}

export function ConversationBubble({ 
  children, 
  direction = "right", 
  className = "",
  style
}: ConversationBubbleProps) {
  const bubbleClasses = direction === "left" 
    ? "bg-card border-2 border-primary/20 text-card-foreground" 
    : "bg-gradient-primary text-primary-foreground";
    
  const arrowClasses = direction === "left"
    ? "absolute left-6 top-full w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[12px] border-t-primary/20"
    : "absolute right-6 top-full w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[12px] border-t-primary";

  return (
    <div className={`relative max-w-sm ${className}`} style={style}>
      <div className={`
        ${bubbleClasses}
        px-4 py-3 rounded-lg shadow-soft
        font-medium text-sm leading-relaxed
        transform transition-all duration-300 hover:scale-105
      `}>
        {children}
      </div>
      <div className={arrowClasses} />
    </div>
  );
}