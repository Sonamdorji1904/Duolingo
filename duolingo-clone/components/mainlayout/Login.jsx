'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { X } from 'lucide-react';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleLogin = async () => {
        setError('');
        if (!email || !password) {
            setError('Please enter both email and password.');
            return;
        }
        try {
            const res = await fetch('http://localhost:5000/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || 'Login failed');
            router.push('/learn');
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="relative flex min-h-screen justify-center items-center bg-white font-sans">
            <button
                onClick={() => router.push('/')}
                className="absolute top-6 left-8 text-gray-400 hover:text-gray-600"
            >
                <X size={28} />
            </button>
            <button
                className="absolute top-6 right-8 border border-gray-200 px-4 py-1 rounded-full text-sm font-bold text-[#1cb0f6] hover:bg-gray-100"
                onClick={() => router.push('/profile')}
            >
                SIGN UP
            </button>
            <div className="w-full max-w-sm px-6">
                <h1 className="text-2xl font-bold text-center mb-8 mt-2">Log in</h1>
                <input
                    type="text"
                    placeholder="Email or username"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="w-full bg-gray-100 border border-gray-300 rounded-xl p-4 mb-4 placeholder-gray-500 text-lg"
                />
                <div className="relative mb-4">
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        className="w-full bg-gray-100 border border-gray-300 rounded-xl p-4 pr-24 placeholder-gray-500 text-lg"
                    />
                    <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm font-bold cursor-pointer select-none">
                        FORGOT?
                    </span>
                </div>
                {error && <div className="text-red-500 mb-2 text-center">{error}</div>}
                <button
                    onClick={handleLogin}
                    className="w-full bg-[#1cb0f6] hover:bg-[#1299d6] text-white font-bold rounded-xl py-3 mb-4 text-lg"
                >
                    LOG IN
                </button>
                <div className="flex items-center mb-4">
                    <hr className="flex-grow border-gray-200" />
                    <span className="mx-2 text-sm text-gray-400 font-bold">OR</span>
                    <hr className="flex-grow border-gray-200" />
                </div>
                <div className="flex gap-4 mb-4">
                    <button className="flex-1 border border-gray-300 rounded-xl py-3 text-sm font-bold text-[#3b5998] flex items-center justify-center gap-2 bg-white">
                        <span className="text-lg">f</span> FACEBOOK
                    </button>
                    <button className="flex-1 border border-gray-300 rounded-xl py-3 text-sm font-bold text-[#1cb0f6] flex items-center justify-center gap-2 bg-white">
                        <span className="text-lg" ><img src="google.png" alt="Google" width={28} height={28} /></span> GOOGLE
                    </button>
                </div>
                <p className="text-[11px] text-gray-400 text-center mt-6 leading-snug">
                    By signing in to Duolingo, you agree to our{' '}
                    <span className="font-semibold">Terms and Privacy Policy</span>.
                </p>
                <p className="text-[10px] text-gray-400 text-center mt-2 px-2 leading-snug">
                    This site is protected by reCAPTCHA Enterprise and the Google{' '}
                    <span className="underline">Privacy Policy</span> and{' '}
                    <span className="underline">Terms of Service</span> apply.
                </p>
            </div>
        </div>
    );
}