import React, { useState } from 'react';
import { Brain, Cpu, Sparkles, Zap } from 'lucide-react';
import { supabase } from '../lib/supabase';

const backgroundImage = 'https://images.unsplash.com/photo-1712002641088-9d76f9080889?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const { error } = await supabase
        .from('newsletter_subscribers')
        .insert([{ email }]);

      if (error) throw error;
      
      setStatus('success');
      setEmail('');
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong');
    }
  };

  return (
    <div className="relative isolate min-h-[100dvh] flex items-center">
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt="AI Technology Background"
          className="h-full w-full object-cover object-right"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-white/70 via-white/40 to-transparent" />
      </div>
      
      <div className="relative z-10 ml-auto w-full max-w-2xl mr-4 sm:mr-8 lg:mr-16 xl:mr-24 my-8 sm:my-12 lg:my-16 bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl">
        <div className="px-6 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
        <div className="space-y-12">
          <div className="space-y-8 text-right">
            <div className="flex space-x-3 sm:space-x-4 justify-end">
              <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-indigo-600/10 backdrop-blur-sm flex items-center justify-center border border-indigo-500/20">
                <Brain className="h-6 w-6 text-indigo-600" />
              </div>
              <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-indigo-600/10 backdrop-blur-sm flex items-center justify-center border border-indigo-500/20">
                <Cpu className="h-6 w-6 text-indigo-600" />
              </div>
              <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-indigo-600/10 backdrop-blur-sm flex items-center justify-center border border-indigo-500/20">
                <Zap className="h-6 w-6 text-indigo-600" />
              </div>
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight text-gray-800 mb-4 sm:mb-6">
                AI Insights <span className="text-indigo-400">Weekly</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-700 ml-auto max-w-xl">
                  Stay ahead of the curve with our curated AI newsletter. Get the latest insights,
                  breakthroughs, and practical applications in AI technology.
              </p>                 
            </div>
          </div>
          
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-xl w-full ring-1 ring-gray-100">
            <div className="flex items-center justify-end space-x-2 mb-6">
              <Sparkles className="h-5 w-5 text-indigo-600" />
              <span className="text-sm font-medium text-indigo-600">Join 5,000+ subscribers</span>
            </div>
            
            <form onSubmit={handleSubmit}>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="min-w-0 flex-auto rounded-lg border-0 bg-gray-50 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                placeholder="Enter your email address"
                disabled={status === 'loading'}
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="flex-none rounded-lg bg-indigo-600 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-50 transition-colors duration-200"
              >
                {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
              </button>
            </div>
            {status === 'success' && (
              <p className="mt-4 text-sm text-green-600 text-center">
                Thanks for subscribing! Check your email for confirmation.
              </p>
            )}
            {status === 'error' && (
              <p className="mt-4 text-sm text-red-600 text-center">
                {errorMessage}
              </p>
            )}
            <p className="mt-4 sm:mt-6 text-xs sm:text-sm text-gray-500 text-right">
              By subscribing, you agree to receive weekly updates about AI technology.
              You can unsubscribe at any time.
            </p>
            </form>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}