import { useState, useEffect } from "react";
import type { Patient } from "../types/patient";
import { getPatients } from "../services/patientService";


interface UsePaitentsResult {
    patients: Patient[]
    isLoading: boolean
    error: string | null
}


export function usePatients(): UsePaitentsResult {
const [patients, setPatients] = useState<Patient[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
      getPatients()
        .then(setPatients)
        .catch(() => setError('Failed to load patients.'))
        .finally(() => setIsLoading(false))
    }, [])

    return { patients, isLoading, error }
}
