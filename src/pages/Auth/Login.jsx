import { useAuth } from "../../context/AuthContext"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGoogle, faApple, faMeta } from "@fortawesome/free-brands-svg-icons"

export default function Login() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [isLogin, setIsLogin] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!e.currentTarget.checkValidity()) return

    login()
    navigate("/dashboard")
  }

  return (
    <div className="min-h-screen flex font-inter">

      {/* LEFT SIDE */}
      <div className="hidden lg:flex w-1/2 relative overflow-hidden text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#063C35] to-[#0CC8A8]" />

        <div className="relative z-10 p-20 flex flex-col justify-center max-w-xl">
          <h1 className="text-5xl font-bold leading-tight mb-8">
            Expert level Cybersecurity <br />
            in <span className="text-primary">hours</span> not weeks.
          </h1>

          <div className="space-y-4 text-gray-300">
            <p>✔ Effortlessly spider and map targets</p>
            <p>✔ Deliver validated findings in hours</p>
            <p>✔ Generate enterprise security reports</p>
          </div>

          <div className="mt-10 text-sm text-gray-400">
            ⭐ Trustpilot <br />
            Rated 4.5/5.0 (100k+ reviews)
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex w-full lg:w-1/2 items-center justify-center bg-[#F5F5F5] dark:bg-darkbg">

        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-surface p-10 rounded-2xl shadow-2xl w-full max-w-md transition-all duration-300"
        >
          <h2 className="text-3xl font-semibold text-center mb-6 text-black dark:text-white">
  {isLogin ? "Log in" : "Sign up"}
</h2>

<p className="text-center text-sm text-gray-500 dark:text-gray-400 mb-6">
  {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
  <button
    type="button"
    onClick={() => setIsLogin(!isLogin)}
    className="text-primary font-medium dark:text-primary"
  >
    {isLogin ? "Sign up" : "Log in"}
  </button>
</p>

          {/* Signup Fields */}
          {!isLogin && (
            <>
              <input
                type="text"
                placeholder="First name"
                required
                className="w-full border p-3 rounded-xl mb-4 focus:ring-2 focus:ring-primary"
              />
              <input
                type="text"
                placeholder="Last name"
                required
                className="w-full border p-3 rounded-xl mb-4 focus:ring-2 focus:ring-primary"
              />
            </>
          )}

          {/* Common Fields */}
          <input
            type="email"
            placeholder="Email address"
            required
            className="w-full border p-3 rounded-xl mb-4 focus:ring-2 focus:ring-primary"
          />

          <input
            type="password"
            placeholder="Password"
            required
            minLength={6}
            className="w-full border p-3 rounded-xl mb-6 focus:ring-2 focus:ring-primary"
          />

          <button
  type="submit"
  className="w-full bg-primary text-white py-3 rounded-xl font-medium 
  hover:bg-green-500 transition-all duration-200"
>
  {isLogin ? "Log in" : "Create account"}
</button>

         <div className="flex gap-4 mt-6">

  {/* Apple */}
  <button
    type="button"
    className="flex-1 bg-black text-white py-2 rounded-xl 
    flex items-center justify-center gap-2 
    hover:bg-gray-600 transition-all duration-200"
  >
    <FontAwesomeIcon icon={faApple} />
  </button>

  {/* Google */}
  <button
    type="button"
    className="flex-1 bg-red-600 text-white py-2 rounded-xl 
    flex items-center justify-center gap-2 
    hover:bg-gray-600 transition-all duration-200"
  >
    <FontAwesomeIcon icon={faGoogle} />
  </button>

  {/* Meta (Facebook) */}
  <button
    type="button"
    className="flex-1 bg-blue-600 text-white py-2 rounded-xl 
    flex items-center justify-center gap-2 
    hover:bg-gray-600 transition-all duration-200"
  >
    <FontAwesomeIcon icon={faMeta} />
  </button>

</div>
        </form>
      </div>
    </div>
  )
}