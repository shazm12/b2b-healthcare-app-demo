import type { PatientReport, FindingData } from '../../types/report'

interface ReportListViewProps {
  findings: PatientReport['findings']
}

const FLAG_STYLES: Record<FindingData['flag'], string> = {
  Normal: 'bg-green-50 text-green-700',
  High: 'bg-red-50 text-red-700',
  Low: 'bg-blue-50 text-blue-700',
  'Borderline High': 'bg-yellow-50 text-yellow-700',
}

const COLUMNS = ['Test', 'Value', 'Unit', 'Normal Range', 'Flag']

export default function ReportListView({ findings }: ReportListViewProps) {
  if (!findings || Object.keys(findings).length === 0) {
    return <p className="text-sm text-gray-400 mt-2">No findings recorded.</p>
  }

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden mt-3">
      <div className="overflow-x-auto">
      <table className="w-full text-sm min-w-125">
        <thead className="bg-gray-50 border-b border-gray-200">
          <tr>
            {COLUMNS.map((col) => (
              <th
                key={col}
                className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase tracking-wide"
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {Object.entries(findings).map(([test, data]) => (
            <tr key={test}>
              <td className="px-4 py-3 font-medium text-gray-900">{test}</td>
              <td className="px-4 py-3 text-gray-600">{data.value}</td>
              <td className="px-4 py-3 text-gray-600">{data.unit}</td>
              <td className="px-4 py-3 text-gray-600">{data.normal_range}</td>
              <td className="px-4 py-3">
                <span className={`text-xs px-2 py-1 rounded-full font-medium ${FLAG_STYLES[data.flag]}`}>
                  {data.flag}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  )
}
