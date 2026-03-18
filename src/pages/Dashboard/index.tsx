import { Link } from 'react-router-dom'
import { useAuth } from '../../store/AuthContext'

export default function Dashboard() {
  const { user } = useAuth()

  return (
    <div className="max-w-2xl">
      <h1 className="text-4xl font-bold text-gray-900">
        Hello, {user?.name ?? 'there'} 👋
      </h1>

      <ul className="mt-8 space-y-4">
        <li className="flex items-start gap-3">
          <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-blue-500" />
          <p className="text-gray-600">
            Check your patients data
            {' '}
            at <Link to="/patients" className="font-medium text-blue-600 hover:underline">
             Paitents page.
            </Link>{' '}
          </p>
        </li>
        <li className="flex items-start gap-3">
          <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-blue-500" />
          <p className="text-gray-600">
            Head over to the{' '}
            <Link to="/analytics" className="font-medium text-blue-600 hover:underline">
              Analytics page
            </Link>{' '}
            to see analysis on patient data.
          </p>
        </li>
      </ul>
    </div>
  )
}
