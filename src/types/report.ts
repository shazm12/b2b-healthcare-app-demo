export interface PatientReport {
    report_id: string
    patient_id: string
    ordered_by: {
        doctor_id: string
        name: string
    }
    report_date: string
    lab: {
        name: string
        branch: string
    }
    status: 'Pending' | 'Completed' | 'Cancelled'
    findings?: Record<string, FindingData>
    doctor_notes?: string
}
 
export interface FindingData {
    value: number
    unit: string
    normal_range: string
    flag: 'Normal' | 'High' | 'Low' | 'Borderline High'
}