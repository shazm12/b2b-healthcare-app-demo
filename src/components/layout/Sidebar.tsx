import { NavLink } from 'react-router-dom'

const navItems = [
  { label: 'Dashboard', path: '/dashboard' },
  { label: 'Patients', path: '/patients' },
  { label: 'Analytics', path: '/analytics' },
]

export default function Sidebar() {
  return (
    <aside className="w-64 shrink-0 bg-white border-r border-gray-200 flex flex-col">
      <div className="h-16 flex items-center px-6 border-b border-gray-200">
        <span className="text-lg font-semibold text-gray-900">HealthCare B2B</span>
      </div>
      <nav className="flex-1 py-4 px-3 space-y-1">
        {navItems.map(({ label, path }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-blue-50 text-blue-700'
                  : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
              }`
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}
