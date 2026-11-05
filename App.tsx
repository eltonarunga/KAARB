import React, { lazy, Suspense } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import ErrorBoundary from './components/common/ErrorBoundary';
import ScrollToTop from './components/common/ScrollToTop';

const KenyaFinalAIExam = lazy(() => import('./pages/KenyaFinalAIExam'));
const AIModelResults = lazy(() => import('./pages/AIModelResults'));
const ClaudeExamResponse = lazy(() => import('./pages/ClaudeExamResponse'));
const ClaudeQ2ExamResponse = lazy(() => import('./pages/ClaudeQ2ExamResponse'));
const ClaudeSonnet5Q3ExamResponse = lazy(() => import('./pages/ClaudeSonnet5Q3ExamResponse'));
const QwenExamResponse = lazy(() => import('./pages/QwenExamResponse'));
const QwenQ2ExamResponse = lazy(() => import('./pages/QwenQ2ExamResponse'));
const QwenQ3ExamResponse = lazy(() => import('./pages/QwenQ3ExamResponse'));
const ChatGPTExamResponse = lazy(() => import('./pages/ChatGPTExamResponse'));
const ChatGPTQ2ExamResponse = lazy(() => import('./pages/ChatGPTQ2ExamResponse'));
const ChatGPTGPT5Q3ExamResponse = lazy(() => import('./pages/ChatGPTGPT5Q3ExamResponse'));
const DeepSeekExamResponse = lazy(() => import('./pages/DeepSeekExamResponse'));
const DeepSeekQ2ExamResponse = lazy(() => import('./pages/DeepSeekQ2ExamResponse'));
const DeepSeekQ3ExamResponse = lazy(() => import('./pages/DeepSeekQ3ExamResponse'));
const PerplexityExamResponse = lazy(() => import('./pages/PerplexityExamResponse'));
const PerplexityQ2ExamResponse = lazy(() => import('./pages/PerplexityQ2ExamResponse'));
const PerplexityQ3ExamResponse = lazy(() => import('./pages/PerplexityQ3ExamResponse'));
const GeminiExamResponse = lazy(() => import('./pages/GeminiExamResponse'));
const GeminiQ2ExamResponse = lazy(() => import('./pages/GeminiQ2ExamResponse'));
const GeminiQ3ExamResponse = lazy(() => import('./pages/GeminiQ3ExamResponse'));
const GrokExamResponse = lazy(() => import('./pages/GrokExamResponse'));
const GrokQ2ExamResponse = lazy(() => import('./pages/GrokQ2ExamResponse'));
const GrokQ3ExamResponse = lazy(() => import('./pages/GrokQ3ExamResponse'));
const MistralExamResponse = lazy(() => import('./pages/MistralExamResponse'));
const MistralQ2ExamResponse = lazy(() => import('./pages/MistralQ2ExamResponse'));
const MistralQ3ExamResponse = lazy(() => import('./pages/MistralQ3ExamResponse'));
const KimiExamResponse = lazy(() => import('./pages/KimiExamResponse'));
const KimiQ2ExamResponse = lazy(() => import('./pages/KimiQ2ExamResponse'));
const CopilotExamResponse = lazy(() => import('./pages/CopilotExamResponse'));
const CopilotQ2ExamResponse = lazy(() => import('./pages/CopilotQ2ExamResponse'));
const CopilotQ3ExamResponse = lazy(() => import('./pages/CopilotQ3ExamResponse'));
const MetaAIExamResponse = lazy(() => import('./pages/MetaAIExamResponse'));
const MetaAIQ2ExamResponse = lazy(() => import('./pages/MetaAIQ2ExamResponse'));
const MetaAIQ3ExamResponse = lazy(() => import('./pages/MetaAIQ3ExamResponse'));

const LoadingFallback = () => (
  <div className="flex min-h-[50vh] items-center justify-center px-6 text-sm text-slate-500" role="status" aria-live="polite">
    Loading K-AARB…
  </div>
);

const App = () => (
  <HashRouter>
    <ScrollToTop />
    <div className="min-h-screen bg-white text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5">
          <a href="#/" className="font-semibold tracking-tight text-slate-950">K-AARB</a>
          <nav className="flex gap-5 text-sm text-slate-600">
            <a href="#/kenya-ai-exam" className="hover:text-slate-950">The Exam</a>
            <a href="#/ai-model-results" className="hover:text-slate-950">Model Results</a>
          </nav>
        </div>
      </header>
      <main className="min-h-[70vh]">
        <ErrorBoundary>
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<KenyaFinalAIExam />} />
              <Route path="/kenya-ai-exam" element={<KenyaFinalAIExam />} />
              <Route path="/ai-model-results" element={<AIModelResults />} />
              <Route path="/claude-exam-response" element={<ClaudeExamResponse />} />
              <Route path="/claude-q2-exam-response" element={<ClaudeQ2ExamResponse />} />
              <Route path="/claude-sonnet-5-q3-exam-response" element={<ClaudeSonnet5Q3ExamResponse />} />
              <Route path="/qwen-exam-response" element={<QwenExamResponse />} />
              <Route path="/qwen-q2-exam-response" element={<QwenQ2ExamResponse />} />
              <Route path="/qwen-q3-exam-response" element={<QwenQ3ExamResponse />} />
              <Route path="/qwen-3-8-max-q3-exam-response" element={<QwenQ3ExamResponse />} />
              <Route path="/chatgpt-exam-response" element={<ChatGPTExamResponse />} />
              <Route path="/chatgpt-q2-exam-response" element={<ChatGPTQ2ExamResponse />} />
              <Route path="/chatgpt-gpt5-q3-exam-response" element={<ChatGPTGPT5Q3ExamResponse />} />
              <Route path="/deepseek-exam-response" element={<DeepSeekExamResponse />} />
              <Route path="/deepseek-q2-exam-response" element={<DeepSeekQ2ExamResponse />} />
              <Route path="/deepseek-q3-exam-response" element={<DeepSeekQ3ExamResponse />} />
              <Route path="/perplexity-exam-response" element={<PerplexityExamResponse />} />
              <Route path="/perplexity-q2-exam-response" element={<PerplexityQ2ExamResponse />} />
              <Route path="/perplexity-q3-exam-response" element={<PerplexityQ3ExamResponse />} />
              <Route path="/gemini-exam-response" element={<GeminiExamResponse />} />
              <Route path="/gemini-q2-exam-response" element={<GeminiQ2ExamResponse />} />
              <Route path="/gemini-q3-exam-response" element={<GeminiQ3ExamResponse />} />
              <Route path="/grok-exam-response" element={<GrokExamResponse />} />
              <Route path="/grok-q2-exam-response" element={<GrokQ2ExamResponse />} />
              <Route path="/grok-q3-exam-response" element={<GrokQ3ExamResponse />} />
              <Route path="/mistral-exam-response" element={<MistralExamResponse />} />
              <Route path="/mistral-q2-exam-response" element={<MistralQ2ExamResponse />} />
              <Route path="/mistral-q3-exam-response" element={<MistralQ3ExamResponse />} />
              <Route path="/kimi-exam-response" element={<KimiExamResponse />} />
              <Route path="/kimi-q2-exam-response" element={<KimiQ2ExamResponse />} />
              <Route path="/copilot-exam-response" element={<CopilotExamResponse />} />
              <Route path="/copilot-q2-exam-response" element={<CopilotQ2ExamResponse />} />
              <Route path="/copilot-q3-exam-response" element={<CopilotQ3ExamResponse />} />
              <Route path="/meta-ai-exam-response" element={<MetaAIExamResponse />} />
              <Route path="/meta-ai-q2-exam-response" element={<MetaAIQ2ExamResponse />} />
              <Route path="/meta-ai-q3-exam-response" element={<MetaAIQ3ExamResponse />} />
              <Route path="/mistral-medium-3-5-q3-exam-response" element={<MistralQ3ExamResponse />} />
              <Route path="/deepseek-v4-1-flash-q3-exam-response" element={<DeepSeekQ3ExamResponse />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </main>
      <footer className="border-t border-slate-200 py-8 text-center text-xs text-slate-500">
        Kenya AI Alignment &amp; Reasoning Benchmark · K-AARB
      </footer>
    </div>
  </HashRouter>
);

export default App;
