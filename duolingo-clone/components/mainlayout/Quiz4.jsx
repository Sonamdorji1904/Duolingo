'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { X, Volume2 } from 'lucide-react';
import Image from 'next/image';

export default function Quiz4() {
  const [quizData, setQuizData] = useState(null);
  const [answer, setAnswer] = useState(null);
  const [checked, setChecked] = useState(false);
  const router = useRouter();

  useEffect(() => {
    async function fetchQuiz() {
      try {
        const res = await fetch('http://localhost:5000/api/quizzes/quiz4');
        const data = await res.json();
        setQuizData(data);
      } catch (err) {
        console.error('Failed to fetch quiz:', err);
      }
    }
    fetchQuiz();
  }, []);

  if (!quizData) return <div className="min-h-screen flex justify-center items-center">Loading...</div>;

  const handleDrop = (e) => {
    if (checked) return;
    const idx = e.dataTransfer.getData('text/plain');
    if (answer === null) {
      setAnswer(Number(idx));
    }
  };

  const handleDragStart = (e, idx) => {
    e.dataTransfer.setData('text/plain', idx);
  };

  const handleRemoveAnswer = () => {
    if (checked) return;
    setAnswer(null);
  };

  const handleCheckOrNext = () => {
    if (!checked) {
      setChecked(true);
    } else {
      router.push('/quiz5');
    }
  };

  const isCorrect = answer === quizData.correct_index;

  return (
    <div className="min-h-screen flex flex-col items-center bg-white pt-8 pb-4 px-2">
      {/* Top bar */}
      <div className="flex items-center w-full max-w-3xl mx-auto mb-6">
        <button className="text-gray-400 hover:text-gray-600" onClick={() => router.push('/learn')}>
          <X size={28} />
        </button>
        <div className="flex-1 mx-4">
          <div className="h-3 bg-gray-200 rounded-full">
            <div className="h-3 bg-green-400 rounded-full" style={{ width: '70%' }} />
          </div>
        </div>
        <div className="flex items-center gap-1 text-red-500 font-bold text-lg">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              fill="#ef4444"
            />
          </svg>
          <span>5</span>
        </div>
      </div>

      {/* Question */}
      <h2 className="text-2xl font-extrabold text-gray-800 mb-4 text-center">
        {quizData.question}
      </h2>

      {/* Image + sound */}
      <div className="flex items-center gap-4 mb-6">
        <Image
          src="/tea.png"
          alt="quiz image"
          width={100}
          height={100}
        />
        <div className="p-2 rounded-xl border border-gray-200 bg-gray-50">
          <Volume2 className="text-blue-500" />
        </div>
      </div>

      {/* Drop zone */}
      <div
        className="min-h-[48px] border-b-2 border-gray-300 mb-6 w-full max-w-xs text-center pb-4"
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
      >
        {answer !== null ? (
          <button
            className="px-4 py-2 rounded-lg border border-gray-300 bg-gray-100 text-gray-700 font-semibold text-lg"
            onClick={handleRemoveAnswer}
          >
            {quizData.options[answer].option_text}
          </button>
        ) : (
          <span className="text-gray-400">- - -</span>
        )}
      </div>

      {/* Draggable options */}
      <div className="flex gap-4 overflow-x-auto mb-8 px-2">
        {quizData.options.map((opt, idx) => (
          <div
            key={idx}
            draggable={!checked && answer !== idx}
            onDragStart={(e) => handleDragStart(e, idx)}
            className={`px-4 py-2 border rounded-xl font-semibold text-sm cursor-grab whitespace-nowrap
              ${checked && idx === quizData.correct_index ? 'bg-green-100 border-green-500 text-green-700' : ''}
              ${checked && idx === answer && answer !== quizData.correct_index ? 'bg-red-100 border-red-500 text-red-700' : ''}
              ${answer === idx ? 'opacity-50 cursor-not-allowed' : 'bg-white hover:bg-gray-100 text-gray-800'}
            `}
          >
            {opt.option_text}
          </div>
        ))}
      </div>

      {/* Feedback */}
      {checked && (
        <div className="text-lg font-bold text-center mb-4">
          {isCorrect ? (
            <span className="text-[#58cc02]">Correct!</span>
          ) : (
            <span className="text-red-500">Incorrect!</span>
          )}
        </div>
      )}

      {/* Bottom buttons */}
      <div className="flex w-full max-w-xl mx-auto justify-between mt-auto pt-8">
        <button
          className="bg-gray-100 text-gray-400 font-bold rounded-xl px-6 py-3 text-sm"
          onClick={() => router.push('/quiz5')}
        >
          Skip
        </button>
        <button
          className={`font-bold rounded-xl px-6 py-3 text-sm transition
            ${answer === null
              ? 'bg-gray-100 text-gray-400'
              : checked
                ? 'bg-[#1cb0f6] text-white hover:bg-[#1299d6]'
                : 'bg-[#58cc02] text-white hover:bg-[#46a302]'}
          `}
          disabled={answer === null}
          onClick={handleCheckOrNext}
        >
          {checked ? 'Next' : 'Check'}
        </button>
      </div>
    </div>
  );
}
