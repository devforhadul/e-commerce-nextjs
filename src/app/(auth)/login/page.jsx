'use client';
import { signIn } from "next-auth/react"
import { useState } from "react"

export default function Login() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = async (e) => {
    e.preventDefault()
    const result = await signIn("credentials", {
      redirect: true,
      email,
      password,
      callbackUrl: "/", // login হলে কোথায় redirect হবে
    })
    console.log(result)
  }

  return (
    <div className="flex h-screen items-center justify-center ">
      <div className="w-full max-w-md rounded bg-white p-6 shadow">
        <h2 className="mb-6 text-center text-2xl font-bold">Sign In</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded border px-3 py-2"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded border px-3 py-2"
          />
          <button
            type="submit"
            className="w-full rounded bg-blue-600 py-2 text-white hover:bg-blue-700"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-500">
          Don’t have an account? <a href="/auth/register" className="text-blue-600">Sign up</a>
        </p>
        <div>
          <p>OR</p>
        </div>
      </div>
    </div>
  )
}
