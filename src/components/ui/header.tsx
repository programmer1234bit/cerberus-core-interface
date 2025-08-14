import { Settings, Wifi } from "lucide-react";
import { Button } from "./button";

export function Header() {
  const currentTime = new Date().toLocaleTimeString('en-US', {
    hour12: false,
    hour: '2-digit',
    minute: '2-digit'
  });

  return (
    <header className="h-16 bg-gradient-header border-b border-border/50 flex items-center justify-between px-6">
      <div className="flex items-center space-x-4">
        <h1 className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">
          Cerberus Control Center
        </h1>
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2 text-sm">
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-success rounded-full glow-subtle"></div>
            <span className="text-success-foreground">Online</span>
          </div>
          <span className="text-muted-foreground">•</span>
          <span className="text-muted-foreground">{currentTime}</span>
        </div>
        
        <Button variant="ghost" size="sm" className="hover:glow-subtle transition-glow">
          <Settings className="w-4 h-4" />
        </Button>
      </div>
    </header>
  );
}