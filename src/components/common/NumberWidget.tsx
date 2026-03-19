type Accent = 'blue' | 'green' | 'yellow' | 'red'

interface NumberWidgetProps {
  label: string
  value: number | string
  subtext?: string
  accent?: Accent
}

const ACCENT_STYLES: Record<Accent, string> = {
  blue: 'text-blue-600',
  green: 'text-green-600',
  yellow: 'text-yellow-600',
  red: 'text-red-600',
}

export default function NumberWidget({ label, value, subtext, accent = 'blue' }: NumberWidgetProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <p className="text-sm text-gray-500 font-medium">{label}</p>
      <p className={`text-4xl font-bold mt-2 ${ACCENT_STYLES[accent]}`}>{value}</p>
      {subtext && <p className="text-xs text-gray-400 mt-1">{subtext}</p>}
    </div>
  )
}
