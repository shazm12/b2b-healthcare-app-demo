import type {Patient} from '../types/patient';
import type {PatientReport} from '../types/report';
import patientsData from '../assets/data/patients.json';
import paitentReportData from '../assets/data/patients_reports.json';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export async function getPatients(): Promise<Patient[]> {
    await delay(500);
    return patientsData as Patient[];
}

export async function getPatientById(patient_id: string): Promise<Patient | null> {
    await delay(300);
    const patient = (patientsData as Patient[]).find(p => p.patient_id === patient_id);
    return patient || null;
}

export async function getPatientReports(patient_id: string): Promise<PatientReport[]> {
    await delay(400);
    const reports = (paitentReportData as unknown as PatientReport[]).filter(r => r.patient_id === patient_id);
    return reports;
}
