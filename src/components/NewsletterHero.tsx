import React from 'react';
import { Bot, Cpu, Sparkles } from 'lucide-react';

const backgroundImage = 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80';

export function NewsletterHero() {
  return (
    <div className="relative isolate overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt="AI Technology Background"
          className="h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/50 to-black/30 mix-blend-multiply" />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 relative z-10 text-center">
          <div className="flex justify-center space-x-4 mb-8">
            <div className="rounded-full bg-white/10 p-4 backdrop-blur-sm ring-1 ring-white/20">
              <Bot className="h-8 w-8 text-indigo-300" />
            </div>
            <div className="rounded-full bg-white/10 p-4 backdrop-blur-sm ring-1 ring-white/20">
              <Cpu className="h-8 w-8 text-indigo-300" />
            </div>
            <div className="rounded-full bg-white/10 p-4 backdrop-blur-sm ring-1 ring-white/20">
              <Sparkles className="h-8 w-8 text-indigo-300" />
            </div>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl bg-clip-text">
            AI Insights Weekly
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Stay ahead of the curve with our curated AI newsletter. Get the latest insights,
            breakthroughs, and practical applications delivered to your inbox.
          </p>
        </div>
      </div>
    </div>
  );
}