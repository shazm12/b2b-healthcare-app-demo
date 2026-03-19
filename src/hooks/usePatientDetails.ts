import { useState, useEffect } from 'react'
import type { Patient } from '../types/patient'
import type { PatientReport } from '../types/report'
import { getPatientById, getPatientReports } from '../services/patientService'

interface UsePatientDetailsResult {
  patient: Patient | null
  reports: PatientReport[]
  isLoading: boolean
  error: string | null
}

export function usePatientDetails(id: string | undefined): UsePatientDetailsResult {
  const [patient, setPatient] = useState<Patient | null>(null)
  const [reports, setReports] = useState<PatientReport[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!id) return

    Promise.all([getPatientById(id), getPatientReports(id)])
      .then(([patientData, reportsData]) => {
        setPatient(patientData)
        setReports(reportsData)
      })
      .catch(() => setError('Failed to load patient details.'))
      .finally(() => setIsLoading(false))
  }, [id])

  return { patient, reports, isLoading, error }
}
