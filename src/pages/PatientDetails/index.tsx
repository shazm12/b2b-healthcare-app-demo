import { useParams } from 'react-router-dom'
import { usePatientDetails } from '../../hooks/usePatientDetails'
import { ReportListView } from '../../components/common'

export default function PatientDetails() {
  const { id } = useParams<{ id: string }>()
  const { patient, reports, isLoading, error } = usePatientDetails(id)

  if (isLoading) return <div className="text-gray-500">Loading patient details...</div>
  if (error) return <div className="text-red-500">{error}</div>
  if (!patient) return <div className="text-gray-500">Patient not found.</div>

  return (
    <div className="space-y-6">
      {/* Patient Card */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          {patient.first_name} {patient.last_name}
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wide">Age & Gender</p>
            <p className="mt-1 font-medium text-gray-900">{patient.age} · {patient.gender}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wide">Blood Group</p>
            <p className="mt-1 font-medium text-gray-900">{patient.blood_group}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wide">Phone</p>
            <p className="mt-1 font-medium text-gray-900">{patient.contact.phone}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wide truncate">Email</p>
            <p className="mt-1 font-medium text-gray-900 truncate">{patient.contact.email}</p>
          </div>
          <div className="sm:col-span-2">
            <p className="text-xs text-gray-500 uppercase tracking-wide truncate">Address</p>
            <p className="mt-1 font-medium text-gray-900 sm:truncate">
              {patient.contact.address.street}, {patient.contact.address.city}, {patient.contact.address.state} — {patient.contact.address.pincode}
            </p>
          </div>
        </div>
      </div>

      {/* Reports */}
      {reports.length === 0 ? (
        <p className="text-sm text-gray-400">No reports found for this patient.</p>
      ) : (
        reports.map((report) => (
          <div key={report.report_id}>
            {/* Report Metadata Card */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-900">Report</h2>
                <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                  report.status === 'Completed' ? 'bg-green-50 text-green-700' :
                  report.status === 'Pending'   ? 'bg-yellow-50 text-yellow-700' :
                                                  'bg-red-50 text-red-700'
                }`}>
                  {report.status}
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">Date</p>
                  <p className="mt-1 font-medium text-gray-900">{report.report_date}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">Ordered By</p>
                  <p className="mt-1 font-medium text-gray-900">{report.ordered_by.name}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">Lab</p>
                  <p className="mt-1 font-medium text-gray-900">{report.lab.name} · {report.lab.branch}</p>
                </div>
                {report.doctor_notes && (
                  <div className="col-span-2 sm:col-span-3">
                    <p className="text-xs text-gray-500 uppercase tracking-wide">Doctor Notes</p>
                    <p className="mt-1 text-gray-700">{report.doctor_notes}</p>
                  </div>
                )}
              </div>

              <ReportListView findings={report.findings} />
            </div>
          </div>
        ))
      )}
    </div>
  )
}
