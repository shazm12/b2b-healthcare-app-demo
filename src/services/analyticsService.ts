
import patientsData from '../assets/data/patients.json';
import paitentReportData from '../assets/data/patients_reports.json';
import type { Patient } from '../types/patient';
import type { PatientReport } from '../types/report';


const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
const patients = patientsData as unknown as Patient[];
const reports = paitentReportData as unknown as PatientReport[];

export async function calculateTotalPatients(): Promise<number> {
    await delay(200);
    return patients.length;

}

export async function calculateAverageAge(): Promise<number> {
    await delay(200);
    const totalAge = patients.reduce((sum, p) => sum + p.age, 0);
    return totalAge / patients.length;
}

export async function calculateTotalReports(): Promise<number> {
    await delay(200);
    return reports.length;
}

export async function computeAgeDistribution(): Promise<Record<string, number>> {
    await delay(200);
    const distribution: Record<string, number> = {
        '0-18': 0,
        '19-35': 0,
        '36-60': 0,
        '60+': 0
    };
    
    patients.forEach(p => {
        if (p.age <= 18) distribution['0-18']++;
        else if (p.age <= 35) distribution['19-35']++;
        else if (p.age <= 60) distribution['36-60']++;
        else distribution['60+']++;
    });

    return distribution;
}

export function computeReportStatusDistribution(): Record<string, number> {
    const distribution: Record<string, number> = {
        'Pending': 0,
        'Completed': 0,
        'Cancelled': 0
    };

    reports.forEach(r => {
        distribution[r.status]++;
    });

    return distribution;
}

export async function getAnalyticsSummary() {
    const [totalPatients, averageAge, totalReports, reportStatusDist] = await Promise.all([
        calculateTotalPatients(),
        calculateAverageAge(),
        calculateTotalReports(),
        computeReportStatusDistribution()
    ])

    return {
        totalPatients,
        averageAge: Math.round(averageAge),
        totalReports,
        reportStatusDist,
    }
}


