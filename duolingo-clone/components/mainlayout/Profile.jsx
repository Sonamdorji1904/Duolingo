'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff, X } from 'lucide-react';

export default function CreateProfilePage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');
  const [name, setName] = useState('');
  const router = useRouter();
  const [validationErrors, setValidationErrors] = useState({});


  const handleSignup = async () => {
    const errors = {};
  
    if (!age || isNaN(Number(age)) || Number(age) < 13) {
      errors.age = 'Please enter your real age';
    }
  
    if (!email || !email.includes('@')) {
      errors.email = 'Invalid email address';
    }
  
    if (!password || password.length < 6) {
      errors.password = 'Password too short';
    }
  
    setValidationErrors(errors);
  
    if (Object.keys(errors).length > 0) return; // Stop here if there are errors
  
    try {
      const res = await fetch('http://localhost:5000/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          password,
          age: Number(age),
          name, // optional
        }),
      });
  
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
  
      alert('Signup successful! You can now login.');
      router.push('/learn');
    } catch (err) {
      alert(err.message);
    }
  };
  
  

  return (
    <div className="relative flex min-h-screen justify-center items-center bg-white font-sans">
      <button
        onClick={() => router.push('/learn')}
        className="absolute top-4 left-4 text-gray-400 hover:text-gray-600"
      >
        <X size={28} />
      </button>

      <button className="absolute top-4 right-4 border border-gray-300 px-4 py-1 rounded-full text-sm font-bold text-blue-500 hover:bg-gray-100">
        LOGIN
      </button>

      <div className="w-full max-w-sm px-6">
        <h1 className="text-2xl font-bold text-center mb-6">
          Create your profile
        </h1>

        <input
          type="text"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className={`w-full bg-gray-100 border ${validationErrors.age ? 'border-red-500' : 'border-gray-300'} rounded-xl p-3 mb-1 placeholder-gray-500`}
        />
        {validationErrors.age && (
          <p className="text-xs text-red-500 mb-4 flex items-center gap-1">
            <img src="mark.png" alt="" width={22} height={22}/>{validationErrors.age}
          </p>
        )}

        <p className="text-xs text-gray-500 mb-4 leading-snug">
          Providing your age ensures you get the right Duolingo experience. For
          more details, please visit our{' '}
          <span className="text-blue-500 cursor-pointer font-medium">
            Privacy Policy
          </span>.
        </p>

        <input
          type="text"
          placeholder="Name (optional)"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full bg-gray-100 border border-gray-300 rounded-xl p-3 mb-4 placeholder-gray-500"
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`w-full bg-gray-100 border ${validationErrors.email ? 'border-red-500' : 'border-gray-300'} rounded-xl p-3 mb-1 placeholder-gray-500`}
        />
        {validationErrors.email && (
          <p className="text-xs text-red-500 mb-4 flex items-center gap-1">
            <img src="mark.png" alt="" width={22} height={22}/>{validationErrors.email}
          </p>
        )}

        <div className="relative mb-1">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`w-full bg-gray-100 border ${validationErrors.password ? 'border-red-500' : 'border-gray-300'} rounded-xl p-3 pr-10 placeholder-gray-500`}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-500"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
        {validationErrors.password && (
          <p className="text-xs text-red-500 mb-4 flex items-center gap-1">
            <img src="mark.png" alt="" width={22} height={22}/>{validationErrors.password}
          </p>
        )}


        <button
          onClick={handleSignup}
          className="w-full bg-[#1cb0f6] hover:bg-[#1299d6] text-white font-bold rounded-xl py-3 mb-4"
        >
          CREATE ACCOUNT
        </button>

        <div className="flex items-center mb-4">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-2 text-sm text-gray-400">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        <button className="w-full border border-gray-300 rounded-xl py-3 text-sm font-bold text-[#3b5998]">
          <span className="mr-2">f</span> FACEBOOK
        </button>

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