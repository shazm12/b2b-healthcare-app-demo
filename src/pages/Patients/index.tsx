import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { usePatients } from '../../hooks/usePatients'

type ViewMode = 'grid' | 'list'

export default function Patients() {
  const [view, setView] = useState<ViewMode>('grid')
  const { patients, isLoading, error } = usePatients()
  const navigate = useNavigate()

  if (isLoading) return <div className="text-gray-500">Loading patients...</div>
  if (error) return <div className="text-red-500">{error}</div>

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Patients</h1>
        <div className="flex rounded-lg border border-gray-200 overflow-hidden">
          <button
            onClick={() => setView('grid')}
            className={`px-4 py-2 text-sm font-medium transition-colors ${
              view === 'grid' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            Grid
          </button>
          <button
            onClick={() => setView('list')}
            className={`px-4 py-2 text-sm font-medium transition-colors ${
              view === 'list' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            List
          </button>
        </div>
      </div>

      {/* Grid View */}
      {view === 'grid' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {patients.map((p) => (
            <div
              key={p.patient_id}
              onClick={() => navigate(`/patients/${p.patient_id}`)}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 cursor-pointer hover:shadow-md transition-shadow"
            >
              <p className="text-lg font-semibold text-gray-900 underline decoration-solid decoration-2 transition-colors hover:decoration-blue-700 truncate">
                {p.first_name} {p.last_name}
              </p>
              <div className="flex gap-2 mt-2">
                <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full">
                  {p.age}{p.gender[0]}
                </span>
                <span className="text-xs bg-red-50 text-red-700 px-2 py-1 rounded-full">
                  {p.blood_group}
                </span>
              </div>
              <div className="mt-3 space-y-1">
                <p className="text-sm text-gray-500 truncate">{p.contact.phone}</p>
                <p className="text-sm text-gray-500 truncate">{p.contact.email}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* List View */}
      {view === 'list' && (
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                {['Name', 'Age & Gender', 'Blood Group', 'Phone', 'Email'].map((h) => (
                  <th
                    key={h}
                    className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase tracking-wide"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {patients.map((p) => (
                <tr
                  key={p.patient_id}
                  onClick={() => navigate(`/patients/${p.patient_id}`)}
                  className="hover:bg-gray-50 cursor-pointer transition-colors"
                >
                  <td className="px-4 py-3 font-medium text-gray-900">
                    {p.first_name} {p.last_name}
                  </td>
                  <td className="px-4 py-3 text-gray-600">{p.age}{p.gender[0]}</td>
                  <td className="px-4 py-3 text-gray-600">{p.blood_group}</td>
                  <td className="px-4 py-3 text-gray-600">{p.contact.phone}</td>
                  <td className="px-4 py-3 text-gray-600">{p.contact.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
