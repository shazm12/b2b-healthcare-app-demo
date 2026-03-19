import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { usePatients } from '../../hooks/usePatients'
import { PatientGridView, PatientListView } from '../../components/common'

type ViewMode = 'grid' | 'list'

export default function Patients() {
  const [view, setView] = useState<ViewMode>('grid')
  const { patients, isLoading, error } = usePatients()
  const navigate = useNavigate()

  if (isLoading) return <div className="text-gray-500">Loading patients...</div>
  if (error) return <div className="text-red-500">{error}</div>

  const handleSelect = (id: string) => navigate(`/patients/${id}`)

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

      {view === 'grid'
        ? <PatientGridView patients={patients} onSelect={handleSelect} />
        : <PatientListView patients={patients} onSelect={handleSelect} />
      }
    </div>
  )
}
