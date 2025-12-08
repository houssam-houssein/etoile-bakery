import { useState, type FormEvent } from 'react'

interface AdminLoginProps {
  errorMessage?: string | null
  onSubmit: (password: string) => void
  onBack: () => void
}

export function AdminLogin({ errorMessage, onSubmit, onBack }: AdminLoginProps) {
  const [password, setPassword] = useState('')
  const [localError, setLocalError] = useState<string | null>(null)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!password.trim()) {
      setLocalError('Password is required.')
      return
    }

    setLocalError(null)
    onSubmit(password.trim())
  }

  return (
    <div className="admin-login-page">
      <div className="admin-login-card">
          <button type="button" className="btn ghost" onClick={onBack}>
            ← Back to site
          </button>

        <header>
          <p className="eyebrow">Restricted Area</p>
          <h1>Admin Login</h1>
          <p>Enter the administrator password to manage the menu.</p>
        </header>

        <form onSubmit={handleSubmit}>
          <label htmlFor="admin-password">Password</label>
          <input
            id="admin-password"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="••••••••"
            required
          />

          {(localError || errorMessage) && <p className="form-error">{localError ?? errorMessage}</p>}

          <button type="submit" className="btn primary">
            Access dashboard
          </button>
        </form>
      </div>
    </div>
  )
}

