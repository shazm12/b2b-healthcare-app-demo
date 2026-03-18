import { useParams } from 'react-router-dom'

export default function PatientDetails() {
  const { id } = useParams<{ id: string }>()
  return <div>Patient Details Page — ID: {id}</div>
}
