import type { Patient } from '../../types/patient'

interface PatientGridViewProps {
  patients: Patient[]
  onSelect: (id: string) => void
}

export default function PatientGridView({ patients, onSelect }: PatientGridViewProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {patients.map((p) => (
        <div
          key={p.patient_id}
          onClick={() => onSelect(p.patient_id)}
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
  )
}
