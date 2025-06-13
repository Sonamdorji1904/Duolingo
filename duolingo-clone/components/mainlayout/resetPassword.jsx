import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { supabase } from "../../lib/supabaseClient";

export default function ResetPasswordPage() {
    const router = useRouter();
    const [password, setPassword] = useState("");
    const [msg, setMsg] = useState("");
    const [loading, setLoading] = useState(false);

    // This page is loaded with access_token in the URL
    useEffect(() => {
        // Optionally, you can check router.query.access_token here
    }, [router.query]);

    const handleReset = async () => {
        setLoading(true);
        setMsg("");
        const { error } = await supabase.auth.updateUser({ password });
        if (error) setMsg(error.message);
        else setMsg("Password updated! You can now log in.");
        setLoading(false);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white">
            <div className="bg-gray-100 p-8 rounded-xl shadow w-full max-w-sm">
                <h2 className="text-xl font-bold mb-4">Set a New Password</h2>
                <input
                    type="password"
                    placeholder="New password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    className="w-full mb-4 p-3 rounded border"
                />
                <button
                    onClick={handleReset}
                    className="w-full bg-blue-500 text-white font-bold py-2 rounded"
                    disabled={loading}
                >
                    {loading ? "Updating..." : "Update Password"}
                </button>
                {msg && <div className="mt-4 text-center text-gray-600">{msg}</div>}
            </div>
        </div>
    );
}