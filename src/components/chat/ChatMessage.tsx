import { cn } from "@/lib/utils";

interface ChatMessageProps {
  message: {
    id: string;
    content: string;
    sender: 'user' | 'ai';
    timestamp: Date;
  };
}

export function ChatMessage({ message }: ChatMessageProps) {
  const timeString = message.timestamp.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit'
  });

  return (
    <div className={cn(
      "flex mb-4 animate-fade-in",
      message.sender === 'user' ? "justify-end" : "justify-start"
    )}>
      <div className={cn(
        "max-w-[70%] rounded-lg px-4 py-3 relative transition-glow",
        message.sender === 'user' 
          ? "bg-chat-user text-secondary-foreground ml-auto" 
          : "bg-chat-ai border border-chat-ai-border ai-message-glow"
      )}>
        <p className="text-sm leading-relaxed">{message.content}</p>
        <div className={cn(
          "text-xs mt-2 opacity-70",
          message.sender === 'user' ? "text-right" : "text-left"
        )}>
          {timeString}
        </div>
        
        {/* Glowing accent for AI messages */}
        {message.sender === 'ai' && (
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/10 to-secondary/10 -z-10"></div>
        )}
      </div>
    </div>
  );
}