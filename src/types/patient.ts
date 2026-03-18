export interface Patient {
    patient_id: string
    first_name: string
    last_name: string
    age: number
    gender: string
    blood_group: string
    contact: {
        phone: string
        email: string
        address: {
            street: string
            city: string
            state: string
            pincode: string
        }
    }
    registration_date: string
}