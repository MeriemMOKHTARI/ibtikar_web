import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from '../components/Logo'
import { EyeIcon, EyeOffIcon } from '../components/icons'

export default function Login() {
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    // Add your login logic here
    // For now, we'll just navigate to the dashboard
    navigate('/dashboard')
  }

  return (
    <div className="flex h-screen font-poppins">
      {/* Left side - Form */}
      <div className="w-1/2 p-12 flex flex-col justify-center">
        <div className="max-w-md mx-auto w-full flex flex-col justify-between">
          <div className="space-y-8">
            <Logo />
            <div className="space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold text-gray-900">Hello admin,</h1>
                <p className="text-xl font-bold text-gray-900">Ravi de vous revoir sur SmartRoad !</p>
              </div>

              <div className="text-base text-gray-600">
                Connectez-vous pour débloquer votre compte et plonger directement dedans.
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-primary-text">
                    Nom d'utilisateur
                  </label>
                  <input
                    type="text"
                    placeholder="Saisissez votre nom d'utilisateur..."
                    className="form-input text-primary-text"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-primary-text">
                    Mot de passe
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Saisissez votre mot de passe..."
                      className="form-input text-primary-text pr-10"
                      required
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 -translate-y-1/2"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOffIcon className="w-5 h-5 text-primary-text" />
                      ) : (
                        <EyeIcon className="w-5 h-5 text-primary-text" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    <span className="text-sm text-gray-600">Remember me</span>
                  </label>
                  <a href="#" className="text-sm text-primary hover:underline">
                    Forgot password ?
                  </a>
                </div>

                <button type="submit" className="btn-primary shadow-lg">
                  Login
                </button>
              </form>
              <div className="mt-8 text-center text-sm text-gray-500">
                © 2024 TOUS DROITS RÉSERVÉS - SMARTROAD
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Video/Animation */}
      <div className="w-1/2 relative bg-gray-100">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="video.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  )
}

