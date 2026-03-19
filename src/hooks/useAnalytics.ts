import { useState, useEffect } from 'react'
import type { AnalyticsSummary } from '../types/analytics'
import { getAnalyticsSummary } from '../services/analyticsService'

interface UseAnalyticsResult {
  summary: AnalyticsSummary | null
  isLoading: boolean
  error: string | null
}

export function useAnalytics(): UseAnalyticsResult {
  const [summary, setSummary] = useState<AnalyticsSummary | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    getAnalyticsSummary()
      .then(setSummary)
      .catch(() => setError('Failed to load analytics.'))
      .finally(() => setIsLoading(false))
  }, [])

  return { summary, isLoading, error }
}
