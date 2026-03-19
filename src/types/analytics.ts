export interface AnalyticsSummary {
  totalPatients: number
  averageAge: number
  totalReports: number
  ageDist: Record<string, number>
  reportStatusDist: Record<string, number>
}
