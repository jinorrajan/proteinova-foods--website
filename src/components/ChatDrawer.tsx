import React, { useState } from 'react';
import { MessageSquare, X, Send, Sparkles, ChefHat, HelpCircle } from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
}

export const ChatDrawer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputVal, setInputVal] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      sender: 'bot',
      text: 'Hello! I am the Proteinova Culinary Concierge. How can I assist your kitchen or supply inquiry today?',
      timestamp: 'Just now',
    },
  ]);

  const quickPrompts = [
    'How do I achieve zero-browning soft scramble?',
    'Ideal boiling time for jammy ramen yolks?',
    'What does Haugh Unit 88+ mean?',
    'Wholesale crate delivery for restaurants?',
  ];

  const handleSend = (textToSend?: string) => {
    const query = textToSend || inputVal;
    if (!query.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: query,
      timestamp: 'Just now',
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputVal('');

    // Instant culinary knowledge answer
    setTimeout(() => {
      let botResponse = '';
      const q = query.toLowerCase();

      if (q.includes('soft scramble') || q.includes('browning') || q.includes('scramble')) {
        botResponse =
          'For zero-browning soft curds: keep burner heat low (~62°C to 65°C). Whisk in cold butter cubes into raw eggs before heating. Take the pan off the flame when curds are 85% set—residual heat finishes cooking without sweating moisture!';
      } else if (q.includes('jammy') || q.includes('boil') || q.includes('ramen')) {
        botResponse =
          'For perfection: gently lower cold Proteinova eggs into rolling boiling water (100°C) with a slotted spoon. Boil for exactly 6 minutes 15 seconds, then immediately plunge into a deep ice-water bath for 10 minutes. The thermal shock cleanly contracts the membrane!';
      } else if (q.includes('haugh') || q.includes('freshness') || q.includes('quality')) {
        botResponse =
          'The Haugh Unit measures the height of the thick albumen (egg white) relative to egg weight. Standard supermarket eggs sit at 60-70 Haugh. Proteinova eggs measure 86-94 Haugh due to 6-hour farm-gate packing and unbroken cold chain!';
      } else if (q.includes('wholesale') || q.includes('b2b') || q.includes('crate') || q.includes('hotel')) {
        botResponse =
          'We supply 30-egg crates and palletized 180-egg consignments directly to commercial kitchens, 5-star hotels, and bakeries. Visit our "Partner With Us" tab or call +91 (022) 4893-7200 for institutional rate cards!';
      } else if (q.includes('duck') || q.includes('quail')) {
        botResponse =
          'Duck eggs have 30% larger yolks with higher albumin viscosity, making them ideal for high-rise soufflés and rich emulsions. Quail eggs pack 3x vitamin B1 and zinc per gram and boil to jammy perfection in just 2.5 minutes!';
      } else {
        botResponse =
          'Thank you for your question! Proteinova eggs are clinically graded for high albumen viscosity, natural flaxseed Omega-3, and zero antibiotics. Try our curated recipes in the Recipes tab or ask me about specific cooking temperatures!';
      }

      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: 'bot',
          text: botResponse,
          timestamp: 'Just now',
        },
      ]);
    }, 400);
  };

  return (
    <>
      {/* Floating Trigger Button strictly matching the HTML */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 bg-[#073b2a] text-white px-5 py-3 rounded-full shadow-[0_8px_24px_-4px_rgba(7,59,42,0.35)] hover:bg-[#002418] hover:scale-105 active:scale-95 transition-all cursor-pointer border border-[#bbeed5]/30"
        aria-label="Open Proteinova Concierge Chat"
      >
        <span className="w-6 h-6 rounded-full bg-[#fdc826] text-[#002418] flex items-center justify-center">
          <MessageSquare className="w-3.5 h-3.5 fill-current" />
        </span>
        <span className="text-sm font-bold pr-1">Chat with Proteinova</span>
      </button>

      {/* Slide-out / Floating Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 sm:right-6 z-50 w-[92vw] sm:w-[380px] bg-white rounded-3xl shadow-2xl border border-[#073b2a]/15 overflow-hidden flex flex-col h-[520px] animate-in slide-in-from-bottom-5 duration-200">
          {/* Header */}
          <div className="bg-[#073b2a] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#fdc826] text-[#002418] flex items-center justify-center font-bold">
                <ChefHat className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-headline text-sm font-bold leading-tight">
                  Proteinova Concierge
                </h3>
                <div className="flex items-center gap-1.5 text-xs text-[#bbeed5]">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Culinary &amp; Product Support</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-full hover:bg-white/10 text-white transition-colors cursor-pointer"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Prompts Banner */}
          <div className="bg-[#ecf7e9] p-3 border-b border-[#bbeed5]/40 flex gap-1.5 overflow-x-auto no-scrollbar">
            {quickPrompts.map((prompt, i) => (
              <button
                key={i}
                onClick={() => handleSend(prompt)}
                className="whitespace-nowrap px-3 py-1 bg-white hover:bg-[#dbe5d8] text-[#002418] text-xs font-semibold rounded-full border border-[#bbeed5] transition-colors cursor-pointer shrink-0"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Chat Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-[#f6f7f5]">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${
                  msg.sender === 'user' ? 'items-end' : 'items-start'
                }`}
              >
                <div
                  className={`p-3 rounded-2xl text-xs sm:text-sm max-w-[85%] leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-[#002418] text-white rounded-br-xs'
                      : 'bg-white text-[#151e16] border border-slate-200/80 rounded-bl-xs shadow-xs'
                  }`}
                >
                  {msg.text}
                </div>
                <span className="text-[10px] text-[#717974] mt-1 px-1">
                  {msg.timestamp}
                </span>
              </div>
            ))}
          </div>

          {/* Input Box */}
          <div className="p-3 bg-white border-t border-slate-100 flex items-center gap-2">
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask about eggs, recipes or supply..."
              className="flex-1 bg-[#ecf7e9] px-3.5 py-2.5 rounded-xl text-xs sm:text-sm text-[#151e16] placeholder:text-[#717974] focus:outline-none focus:ring-2 focus:ring-[#073b2a]/30"
            />
            <button
              onClick={() => handleSend()}
              disabled={!inputVal.trim()}
              className="p-2.5 rounded-xl bg-[#fdc826] text-[#002418] disabled:opacity-50 hover:bg-[#f4bf1b] transition-colors cursor-pointer"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};
