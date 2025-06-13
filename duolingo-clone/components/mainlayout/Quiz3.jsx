'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { X } from 'lucide-react';

export default function Quiz() {
  const [quizData, setQuizData] = useState(null);
  const [selected, setSelected] = useState(null);
  const [checked, setChecked] = useState(false);
  const router = useRouter();

  useEffect(() => {
    async function fetchQuiz() {
      try {
        const res = await fetch('http://localhost:5000/api/quizzes/quiz3');
        if (!res.ok) throw new Error('Failed to fetch quiz');
        const data = await res.json();
        setQuizData(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchQuiz();
  }, []);

  if (!quizData) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  // Hardcoded correct index for now
  const correctIndex = quizData.correct_index;

  const handleCheckOrNext = () => {
    if (!checked) {
      setChecked(true);
    } else {
      router.push('/quiz4'); // After Quiz3, redirect to Learn or another summary page
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-white pt-8 pb-4 px-2">
      {/* Top Bar */}
      <div className="flex items-center w-full max-w-3xl mx-auto mb-8">
        <button
          className="text-gray-400 hover:text-gray-600"
          onClick={() => router.push('/learn')}
        >
          <X size={28} />
        </button>
        <div className="flex-1 mx-4">
          <div className="h-3 bg-gray-200 rounded-full">
            <div className="h-3 bg-gray-300 rounded-full" style={{ width: '100%' }} />
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

      {/* Quiz Content */}
      <div className="w-full max-w-xl mx-auto flex flex-col items-center">
        <div className="text-xs font-bold text-purple-400 mb-2 flex items-center gap-2">
          <svg width="18" height="18" fill="none">
            <circle cx="9" cy="9" r="9" fill="#c3a6ff" />
          </svg>
          NEW VOCABULARY
        </div>
        <h2 className="text-2xl font-extrabold text-gray-800 mb-8 text-center">
          <span className="font-bold">{quizData.question}</span>
        </h2>
        <div className="flex gap-6 w-full justify-center mb-10">
          {quizData.options.map((opt, idx) => (
            <button
              key={idx}
              onClick={() => {
                setSelected(idx);
                setChecked(false);
              }}
              className={`flex flex-col items-center border rounded-2xl px-8 py-6 bg-white transition shadow-sm
                ${selected === idx && checked
                  ? idx === correctIndex
                    ? 'border-[#58cc02] shadow-lg ring-2 ring-[#58cc02]'
                    : 'border-red-400 shadow-lg ring-2 ring-red-400'
                  : selected === idx
                    ? 'border-[#58cc02] shadow-lg'
                    : 'border-gray-200'
                }`}
              style={{ minWidth: 140 }}
              disabled={checked}
            >
              <img
                src={opt.image_url}
                alt={`option-${idx + 1}`}
                className="w-20 h-20 object-contain mb-2"
              />
              <span className="mt-2 text-xs border border-gray-300 rounded bg-gray-50 px-2 py-0.5 text-gray-500">
                {idx + 1}
              </span>
            </button>
          ))}
        </div>
        {checked && (
          <div className="mb-4 text-lg font-bold text-center">
            {selected === correctIndex ? (
              <span className="text-[#58cc02]">Correct!</span>
            ) : (
              <span className="text-red-500">Incorrect!</span>
            )}
          </div>
        )}
      </div>

      {/* Bottom Buttons */}
      <div className="flex w-full max-w-xl mx-auto justify-between mt-auto pt-8">
        <button
          className="bg-gray-100 text-gray-400 font-bold rounded-xl px-8 py-3 text-lg"
          onClick={() => router.push('/quiz4')}
        >
          Skip
        </button>
        <button
          className={`font-bold rounded-xl px-8 py-3 text-lg transition ${selected === null
            ? 'bg-gray-100 text-gray-400'
            : checked
              ? 'bg-[#1cb0f6] text-white hover:bg-[#1299d6]'
              : 'bg-[#58cc02] text-white hover:bg-[#46a302]'
            }`}
          disabled={selected === null}
          onClick={handleCheckOrNext}
        >
          {checked ? 'Finish' : 'Check'}
        </button>
      </div>
    </div>
  );
}
