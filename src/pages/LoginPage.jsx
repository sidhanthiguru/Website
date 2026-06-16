import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import './LoginPage.css'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loginLoading, setLoginLoading] = useState(false)
  const { login, currentUser, loading } = useAuth()
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && currentUser) {
      navigate('/dashboard');
    }
  }, [currentUser, loading, navigate]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      setError('')
      setLoginLoading(true)
      await login(email, password)
      navigate('/dashboard')
    } catch (err) {
      console.error(err)
      setError('Failed to log in. Please check your credentials.')
    } finally {
      setLoginLoading(false)
    }
  };

  return (
    <div className="login-page">
      <div className="login-page__bg">
        <div className="login-page__blob login-page__blob--1"></div>
        <div className="login-page__blob login-page__blob--2"></div>
      </div>
      
      <div className="login-container">
        <div className="login-card glass-card">
          <div className="login-header">
            <img src="/images/Sidhanthi_Guru_Logo__1_-removebg-preview.png" alt="Logo" className="login-logo" />
            <h2>Welcome Back</h2>
            <p>Sign in to your administrative dashboard</p>
          </div>
          
          {error && <div className="error-message">{error}</div>}
          
          <form className="login-form" onSubmit={handleLogin}>
            <div className="form-group">
              <label>Email Address</label>
              <input 
                type="email" 
                placeholder="admin@example.com" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
              />
            </div>
            
            <div className="form-group">
              <label>Password</label>
              <input 
                type="password" 
                placeholder="••••••••" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required 
              />
            </div>
            
            <button 
              type="submit" 
              className="btn btn-primary btn-block"
              disabled={loginLoading}
            >
              {loginLoading ? 'Signing In...' : 'Sign In'}
            </button>
          </form>
          
          <div className="login-footer">
            <p>Authorized access only.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
