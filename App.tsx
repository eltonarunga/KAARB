import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import KenyaFinalAIExam from './pages/KenyaFinalAIExam';
import AIModelResults from './pages/AIModelResults';
import ClaudeExamResponse from './pages/ClaudeExamResponse';
import ClaudeQ2ExamResponse from './pages/ClaudeQ2ExamResponse';
import ClaudeSonnet5Q3ExamResponse from './pages/ClaudeSonnet5Q3ExamResponse';
import QwenExamResponse from './pages/QwenExamResponse';
import QwenQ2ExamResponse from './pages/QwenQ2ExamResponse';
import ChatGPTExamResponse from './pages/ChatGPTExamResponse';
import ChatGPTQ2ExamResponse from './pages/ChatGPTQ2ExamResponse';
import ChatGPTGPT5Q3ExamResponse from './pages/ChatGPTGPT5Q3ExamResponse';
import DeepSeekExamResponse from './pages/DeepSeekExamResponse';
import DeepSeekQ2ExamResponse from './pages/DeepSeekQ2ExamResponse';
import DeepSeekQ3ExamResponse from './pages/DeepSeekQ3ExamResponse';
import PerplexityExamResponse from './pages/PerplexityExamResponse';
import PerplexityQ3ExamResponse from './pages/PerplexityQ3ExamResponse';
import GeminiExamResponse from './pages/GeminiExamResponse';
import GeminiQ2ExamResponse from './pages/GeminiQ2ExamResponse';
import GeminiQ3ExamResponse from './pages/GeminiQ3ExamResponse';
import GrokExamResponse from './pages/GrokExamResponse';
import GrokQ2ExamResponse from './pages/GrokQ2ExamResponse';
import GrokQ3ExamResponse from './pages/GrokQ3ExamResponse';
import MistralExamResponse from './pages/MistralExamResponse';
import MistralQ2ExamResponse from './pages/MistralQ2ExamResponse';
import MistralQ3ExamResponse from './pages/MistralQ3ExamResponse';
import KimiExamResponse from './pages/KimiExamResponse';
import KimiQ2ExamResponse from './pages/KimiQ2ExamResponse';
import CopilotExamResponse from './pages/CopilotExamResponse';
import CopilotQ3ExamResponse from './pages/CopilotQ3ExamResponse';
import MetaAIExamResponse from './pages/MetaAIExamResponse';
import MetaAIQ2ExamResponse from './pages/MetaAIQ2ExamResponse';
import MetaAIQ3ExamResponse from './pages/MetaAIQ3ExamResponse';
import ErrorBoundary from './components/common/ErrorBoundary';
import ScrollToTop from './components/common/ScrollToTop';

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
          <Routes>
            <Route path="/" element={<KenyaFinalAIExam />} />
            <Route path="/kenya-ai-exam" element={<KenyaFinalAIExam />} />
            <Route path="/ai-model-results" element={<AIModelResults />} />
            <Route path="/claude-exam-response" element={<ClaudeExamResponse />} />
            <Route path="/claude-q2-exam-response" element={<ClaudeQ2ExamResponse />} />
            <Route path="/claude-sonnet-5-q3-exam-response" element={<ClaudeSonnet5Q3ExamResponse />} />
            <Route path="/qwen-exam-response" element={<QwenExamResponse />} />
            <Route path="/qwen-q2-exam-response" element={<QwenQ2ExamResponse />} />
            <Route path="/chatgpt-exam-response" element={<ChatGPTExamResponse />} />
            <Route path="/chatgpt-q2-exam-response" element={<ChatGPTQ2ExamResponse />} />
            <Route path="/chatgpt-gpt5-q3-exam-response" element={<ChatGPTGPT5Q3ExamResponse />} />
            <Route path="/deepseek-exam-response" element={<DeepSeekExamResponse />} />
            <Route path="/deepseek-q2-exam-response" element={<DeepSeekQ2ExamResponse />} />
            <Route path="/deepseek-q3-exam-response" element={<DeepSeekQ3ExamResponse />} />
            <Route path="/perplexity-exam-response" element={<PerplexityExamResponse />} />
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
            <Route path="/copilot-q3-exam-response" element={<CopilotQ3ExamResponse />} />
            <Route path="/meta-ai-exam-response" element={<MetaAIExamResponse />} />
            <Route path="/meta-ai-q2-exam-response" element={<MetaAIQ2ExamResponse />} />
            <Route path="/meta-ai-q3-exam-response" element={<MetaAIQ3ExamResponse />} />
            <Route path="/copilot-q2-exam-response" element={<Navigate to="/ai-model-results" replace />} />
            <Route path="/perplexity-q2-exam-response" element={<Navigate to="/ai-model-results" replace />} />
            <Route path="/qwen-q3-exam-response" element={<Navigate to="/ai-model-results" replace />} />
            <Route path="/qwen-3-8-max-q3-exam-response" element={<Navigate to="/ai-model-results" replace />} />
            <Route path="/mistral-medium-3-5-q3-exam-response" element={<MistralQ3ExamResponse />} />
            <Route path="/deepseek-v4-1-flash-q3-exam-response" element={<DeepSeekQ3ExamResponse />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </ErrorBoundary>
      </main>
      <footer className="border-t border-slate-200 py-8 text-center text-xs text-slate-500">
        Kenya AI Alignment &amp; Reasoning Benchmark · K-AARB
      </footer>
    </div>
  </HashRouter>
);

export default App;
