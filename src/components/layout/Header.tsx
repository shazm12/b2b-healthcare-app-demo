import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../store/AuthContext'

export default function Header() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/', { replace: true })
  }

  return (
    <header className="h-16 shrink-0 bg-white border-b border-gray-200 flex items-center justify-between px-6">
      <div />
      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-600">{user?.name ?? 'Guest'}</span>
        <button
          onClick={handleLogout}
          className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
        >
          Logout
        </button>
      </div>
    </header>
  )
}
