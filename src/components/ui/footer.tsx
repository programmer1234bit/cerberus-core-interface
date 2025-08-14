import { useEffect, useState } from "react";

export function Footer() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeString = currentTime.toLocaleTimeString('en-US', {
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });

  return (
    <footer className="h-12 bg-gradient-header border-t border-border/50 flex items-center justify-between px-6 text-sm text-muted-foreground">
      <div className="flex items-center space-x-4">
        <span>Cerberus AI Assistant</span>
        <span>•</span>
        <span>Version 1.0.0</span>
      </div>
      
      <div className="flex items-center space-x-2">
        <span>{timeString}</span>
      </div>
    </footer>
  );
}