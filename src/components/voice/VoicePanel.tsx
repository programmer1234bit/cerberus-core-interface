import { useState } from "react";
import { Mic, MicOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WaveformVisualizer } from "./WaveformVisualizer";

export function VoicePanel() {
  const [isListening, setIsListening] = useState(false);
  const [lastCommand, setLastCommand] = useState<string>('');
  const [currentResponse, setCurrentResponse] = useState<string>('');

  const toggleListening = () => {
    setIsListening(!isListening);
    
    if (!isListening) {
      // Simulate voice recognition
      setLastCommand('');
      setCurrentResponse('Listening...');
      
      // Mock voice command after 3 seconds
      setTimeout(() => {
        setLastCommand('Show system status dashboard');
        setCurrentResponse('Processing your voice command. I can help you access the system status dashboard. Voice integration is in development - coming soon!');
      }, 3000);
    } else {
      setCurrentResponse('');
    }
  };

  return (
    <div className="flex flex-col h-full bg-voice-panel rounded-lg border border-border/50">
      {/* Voice Header */}
      <div className="p-4 border-b border-border/50">
        <h2 className="text-lg font-semibold text-foreground">Voice Interface</h2>
        <p className="text-sm text-muted-foreground">Speak with Cerberus AI</p>
      </div>

      {/* Voice Interaction Area */}
      <div className="flex-1 flex flex-col items-center justify-center p-6 space-y-6">
        
        {/* Last Voice Command */}
        {lastCommand && (
          <div className="w-full max-w-sm">
            <p className="text-xs text-muted-foreground mb-2">Last voice command:</p>
            <div className="bg-muted/50 rounded-lg p-3 border border-border/30">
              <p className="text-sm text-foreground">"{lastCommand}"</p>
            </div>
          </div>
        )}

        {/* Waveform Visualizer */}
        <div className="flex flex-col items-center space-y-4">
          <WaveformVisualizer isActive={isListening} />
          
          {/* Microphone Button */}
          <Button
            onClick={toggleListening}
            size="lg"
            className={`
              w-20 h-20 rounded-full gradient-primary hover:glow-primary transition-glow
              ${isListening ? 'mic-active' : ''}
            `}
          >
            {isListening ? (
              <MicOff className="w-8 h-8" />
            ) : (
              <Mic className="w-8 h-8" />
            )}
          </Button>
          
          <p className="text-sm text-muted-foreground">
            {isListening ? 'Tap to stop listening' : 'Tap to start listening'}
          </p>
        </div>

        {/* Current Response */}
        {currentResponse && (
          <div className="w-full max-w-sm">
            <p className="text-xs text-muted-foreground mb-2">Cerberus response:</p>
            <div className="bg-chat-ai border border-chat-ai-border rounded-lg p-3 ai-message-glow">
              <p className="text-sm text-foreground">{currentResponse}</p>
            </div>
          </div>
        )}
      </div>

      {/* Voice Status */}
      <div className="p-4 border-t border-border/50">
        <div className="flex items-center justify-center space-x-2 text-sm">
          <div className={`w-2 h-2 rounded-full ${isListening ? 'bg-primary' : 'bg-muted-foreground'}`}></div>
          <span className="text-muted-foreground">
            {isListening ? 'Voice recognition active' : 'Voice recognition ready'}
          </span>
        </div>
      </div>
    </div>
  );
}