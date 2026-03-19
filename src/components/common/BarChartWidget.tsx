import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell, ResponsiveContainer } from 'recharts'

interface BarChartWidgetProps {
  title: string
  data: Record<string, number>
  colorMap?: Record<string, string>
  defaultColor?: string
  height?: number
}

const FALLBACK_COLOR = '#2563eb'

export default function BarChartWidget({
  title,
  data,
  colorMap = {},
  defaultColor = FALLBACK_COLOR,
  height = 220,
}: BarChartWidgetProps) {
  const chartData = Object.entries(data).map(([name, value]) => ({ name, value }))

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <p className="text-sm text-gray-500 font-medium mb-4">{title}</p>
      <ResponsiveContainer width="100%" height={height}>
        <BarChart data={chartData} barCategoryGap="35%">
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
          <XAxis
            dataKey="name"
            tick={{ fontSize: 12, fill: '#6b7280' }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            allowDecimals={false}
            tick={{ fontSize: 12, fill: '#6b7280' }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            cursor={{ fill: '#f9fafb' }}
            contentStyle={{ borderRadius: '8px', border: '1px solid #e5e7eb', fontSize: '12px' }}
          />
          <Bar dataKey="value" radius={[4, 4, 0, 0]}>
            {chartData.map((entry) => (
              <Cell
                key={entry.name}
                fill={colorMap[entry.name] ?? defaultColor}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
