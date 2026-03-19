import { useAnalytics } from '../../hooks/useAnalytics'
import { NumberWidget, BarChartWidget } from '../../components/common'

export default function Analytics() {
  const { summary, isLoading, error } = useAnalytics()

  if (isLoading) return <div className="text-gray-500">Loading analytics...</div>
  if (error) return <div className="text-red-500">{error}</div>
  if (!summary) return null

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Analytics</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <NumberWidget
          label="Total Patients"
          value={summary.totalPatients}
          accent="blue"
        />
        <NumberWidget
          label="Average Patient Age"
          value={summary.averageAge}
          subtext="years"
          accent="green"
        />
        <NumberWidget
          label="Total Reports"
          value={summary.totalReports}
          accent="blue"
        />
      </div>

      <div className="mt-6">
        <BarChartWidget
          title="Report Status Distribution"
          data={summary.reportStatusDist}
          colorMap={{
            Completed: '#16a34a',
            Pending: '#ca8a04',
            Cancelled: '#dc2626',
          }}
        />
      </div>
    </div>
  )
}
