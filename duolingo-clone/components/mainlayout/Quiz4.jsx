'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { X, Volume2 } from 'lucide-react';

const choices = ['tea', 'cake', 'apple', 'orange', 'food'];
const correctAnswer = ['tea'];

export default function Quiz4() {
    const [answer, setAnswer] = useState([]);
    const [checked, setChecked] = useState(false);
    const [selectedIdx, setSelectedIdx] = useState(null);
    const router = useRouter();

    const handleChoiceClick = (word, idx) => {
        if (checked) return;
        if (!answer.includes(word)) {
            setAnswer([...answer, word]);
            setSelectedIdx(idx);
        }
    };

    const handleRemove = (idx) => {
        if (checked) return;
        setAnswer(answer.filter((_, i) => i !== idx));
    };

    const handleCheckOrNext = () => {
        if (!checked) {
            setChecked(true);
        } else {
            router.push('/quiz5');
        }
    };

    const isCorrect = JSON.stringify(answer) === JSON.stringify(correctAnswer);

    return (
        <div className="min-h-screen flex flex-col items-center bg-white pt-8 pb-4 px-2">
            {/* Top bar */}
            <div className="flex items-center w-full max-w-3xl mx-auto mb-8">
                <button
                    className="text-gray-400 hover:text-gray-600"
                    onClick={() => router.push('/learn')}
                >
                    <X size={28} />
                </button>
                <div className="flex-1 mx-4">
                    <div className="h-3 bg-gray-200 rounded-full">
                        <div
                            className="h-3 bg-green-400 rounded-full"
                            style={{ width: '70%' }}
                        />
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
                    She is serving ______
                </h2>
                <div className="flex items-center gap-4 mb-6">
                    <img
                        src="tea.png"
                        alt="character"
                        className="w-20 h-20"
                    />
                    <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-xl border border-gray-200">
                        <Volume2 className="text-blue-500" />
                        <span className="font-semibold text-gray-700"></span>
                    </div>
                </div>
                {/* Answer area */}
                <div className="flex gap-2 min-h-[48px] mb-8 border-b-2 border-gray-200 w-full justify-center pb-6">
                    {answer.length === 0 ? (
                        <span className="text-gray-400">...</span>
                    ) : (
                        answer.map((word, idx) => (
                            <button
                                key={idx}
                                className="px-4 py-2 rounded-lg border border-gray-300 bg-gray-100 text-gray-700 font-semibold text-lg"
                                onClick={() => handleRemove(idx)}
                                disabled={checked}
                            >
                                {word}
                            </button>
                        ))
                    )}
                </div>
                {/* Choices */}
                <div className="flex flex-wrap gap-4 justify-center">
                    {choices.map((word, idx) => (
                        <button
                            key={word}
                            className={`px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 font-semibold text-lg transition
                                ${answer.includes(word) ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100"}
                            `}
                            onClick={() => handleChoiceClick(word, idx)}
                            disabled={answer.includes(word) || checked}
                        >
                            {word}
                        </button>
                    ))}
                </div>
                {checked && (
                    <div className="mt-6 text-lg font-bold text-center">
                        {isCorrect ? (
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
                    onClick={() => router.push('/quiz5')}
                >
                    Skip
                </button>
                <button
                    className={`font-bold rounded-xl px-8 py-3 text-lg transition ${answer.length === 0
                        ? 'bg-gray-100 text-gray-400'
                        : checked
                            ? 'bg-[#1cb0f6] text-white hover:bg-[#1299d6]'
                            : 'bg-[#58cc02] text-white hover:bg-[#46a302]'
                        }`}
                    disabled={answer.length === 0}
                    onClick={handleCheckOrNext}
                >
                    {checked ? 'Next' : 'Check'}
                </button>
            </div>
        </div>
    );
}