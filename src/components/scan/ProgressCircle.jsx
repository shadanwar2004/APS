export default function ProgressCircle({ progress }) {
  const radius = 60
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (progress / 100) * circumference

  return (
    <div className="relative w-40 h-40">
      <svg className="-rotate-90" width="160" height="160">
        <circle
          cx="80"
          cy="80"
          r={radius}
          stroke="#E5E7EB"
          strokeWidth="12"
          fill="transparent"
        />
        <circle
          cx="80"
          cy="80"
          r={radius}
          stroke="#0CC8A8"
          strokeWidth="12"
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />
      </svg>

      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-3xl font-bold">{progress}%</span>
        <span className="text-xs text-gray-500">In Progress</span>
      </div>
    </div>
  )
}