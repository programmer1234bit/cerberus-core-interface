import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import { ChatPanel } from "@/components/chat/ChatPanel";
import { VoicePanel } from "@/components/voice/VoicePanel";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 flex p-6 gap-6">
        {/* Chat Panel - 60% width */}
        <div className="w-3/5">
          <ChatPanel />
        </div>
        
        {/* Voice Panel - 40% width */}
        <div className="w-2/5">
          <VoicePanel />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
