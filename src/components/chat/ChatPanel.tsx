import { useState, useRef, useEffect } from "react";
import { Send, Paperclip } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChatMessage } from "./ChatMessage";

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

// Mock initial messages
const initialMessages: Message[] = [
  {
    id: '1',
    content: 'Hello! I am Cerberus, your AI assistant. How can I help you today?',
    sender: 'ai',
    timestamp: new Date(Date.now() - 60000)
  },
  {
    id: '2',
    content: 'Hi Cerberus! Can you help me with system monitoring?',
    sender: 'user',
    timestamp: new Date(Date.now() - 30000)
  },
  {
    id: '3',
    content: 'Absolutely! I can assist you with real-time system monitoring, performance analytics, and security oversight. What specific metrics would you like me to track?',
    sender: 'ai',
    timestamp: new Date(Date.now() - 15000)
  }
];

export function ChatPanel() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = () => {
    if (!inputValue.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: `I understand your request: "${inputValue}". I'm processing this information and will provide you with a comprehensive response. This is a demo interface - full AI integration coming soon!`,
        sender: 'ai',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 2000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="flex flex-col h-full bg-gradient-panel rounded-lg border border-border/50">
      {/* Chat Header */}
      <div className="p-4 border-b border-border/50">
        <h2 className="text-lg font-semibold text-foreground">Chat Interface</h2>
        <p className="text-sm text-muted-foreground">Communicate with Cerberus AI</p>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
        
        {/* Typing Indicator */}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-chat-ai border border-chat-ai-border rounded-lg px-4 py-3 max-w-[70%]">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-primary rounded-full typing-indicator"></div>
                <div className="w-2 h-2 bg-primary rounded-full typing-indicator" style={{animationDelay: '0.5s'}}></div>
                <div className="w-2 h-2 bg-primary rounded-full typing-indicator" style={{animationDelay: '1s'}}></div>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 border-t border-border/50">
        <div className="flex items-center space-x-2">
          <Button 
            variant="ghost" 
            size="sm" 
            className="hover:glow-subtle transition-glow"
          >
            <Paperclip className="w-4 h-4" />
          </Button>
          
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message to Cerberus..."
            className="flex-1 bg-input border-border/50 focus:border-primary focus:glow-subtle transition-glow"
          />
          
          <Button 
            onClick={sendMessage}
            disabled={!inputValue.trim()}
            className="gradient-primary hover:glow-primary transition-glow"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}