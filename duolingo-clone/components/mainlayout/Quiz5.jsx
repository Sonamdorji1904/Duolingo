'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { X, Volume2 } from 'lucide-react';
import Image from 'next/image';

export default function Quiz5() {
  const [quiz, setQuiz] = useState(null);
  const [selected, setSelected] = useState(null);
  const [checked, setChecked] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/quizzes/quiz5');
        const data = await res.json();
        setQuiz(data);
      } catch (error) {
        console.error('Failed to fetch quiz:', error);
      }
    };
    fetchQuiz();
  }, []);

  const handleCheckOrNext = () => {
    if (!checked) {
      setChecked(true);
    } else {
      router.push('/learn');
    }
  };

  if (!quiz) {
    return <div className="text-center mt-20 text-gray-500">Loading...</div>;
  }

  const { question, prompt_text, options, correct_index } = quiz;

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
            <div className="h-3 bg-green-400 rounded-full" style={{ width: '100%' }} />
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
        <h2 className="text-2xl font-extrabold text-gray-800 mb-6 text-center">
          {question}
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-4 mb-8 w-full justify-center">
          {/* Character + Prompt */}
          <div className="flex gap-2">
            <Image
              src="https://simg-ssl.duolingo.com/world-characters/avatars/eddy_avatar_icon.svg"
              alt="character"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-xl border border-gray-200">
              <Volume2 className="text-blue-500" />
              <span className="font-semibold text-gray-700">{prompt_text}</span>
            </div>
          </div>

          {/* Reply Bubble */}
          <div className="flex flex-col items-center mt-5 md:mt-30">
            <div className="relative mb-2">
              <div className="absolute left-1/2 -top-1 -translate-x-1/2 bg-white border border-gray-200 rounded-xl px-6 py-2 min-w-[120px] text-center text-gray-700 font-semibold">
                {selected !== null ? options[selected].option_text : <span className="text-gray-300">______</span>}
              </div>
            </div>
          </div>
        </div>

        {/* Options */}
        <div className="flex flex-col gap-4 w-full max-w-md mb-1 mt-10">
          {options.map((opt, idx) => (
            <button
              key={idx}
              onClick={() => {
                if (!checked) setSelected(idx);
              }}
              className={`flex items-center w-full border rounded-xl px-6 py-4 text-lg font-medium transition
                ${selected === idx
                ? checked
                  ? idx === correct_index
                    ? 'border-[#58cc02] bg-[#e6f9d7] text-[#58cc02]'
                    : 'border-red-400 bg-red-50 text-red-500'
                  : 'border-[#58cc02] bg-[#f0fdf4] text-[#58cc02]'
                : 'border-gray-200 bg-white text-gray-700 hover:bg-gray-50'}
              `}
              disabled={checked}
            >
              <span className="mr-4 text-gray-400">{idx + 1}</span>
              {opt.option_text}
            </button>
          ))}
        </div>

        {/* Feedback */}
        {checked && (
          <div className="mb-4 text-lg font-bold text-center">
            {selected === correct_index ? (
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
          onClick={() => router.push('/learn')}
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
          {checked ? 'Next' : 'Check'}
        </button>
      </div>
    </div>
  );
}
