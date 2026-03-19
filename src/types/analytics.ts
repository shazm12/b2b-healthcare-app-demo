export interface AnalyticsSummary {
  totalPatients: number
  averageAge: number
  totalReports: number
  reportStatusDist: Record<string, number>
}
