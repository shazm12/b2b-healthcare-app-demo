import type { Patient } from '../../types/patient'

interface PatientListViewProps {
  patients: Patient[]
  onSelect: (id: string) => void
}

const COLUMNS = ['Name', 'Age & Gender', 'Blood Group', 'Phone', 'Email']

export default function PatientListView({ patients, onSelect }: PatientListViewProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <table className="w-full text-sm">
        <thead className="bg-gray-50 border-b border-gray-200">
          <tr>
            {COLUMNS.map((h) => (
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
              onClick={() => onSelect(p.patient_id)}
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
  )
}
