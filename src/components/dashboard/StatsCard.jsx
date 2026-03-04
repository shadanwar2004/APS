export default function StatsCard({ label, value, change, color }) {
  const colors = {
    red: "text-red-600 dark:text-red-600",
    orange: "text-orange-600 dark:text-orange-600",
    amber: "text-amber-600 dark:text-amber-600",
    green: "text-green-600 dark:text-green-600",
  }

  const badgeBg = {
    red: "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400",
    orange: "bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400",
    amber: "bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400",
    green: "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400",
  }

  const isIncrease = change.startsWith("+")

  return (
    <div
      className="bg-white dark:bg-surface 
      border border-gray-200 dark:border-borderDark 
      rounded-xl p-6 
      transition-colors duration-300"
    >

      {/* Top */}
      <div className="flex justify-between items-center mb-3">
        <p className="text-sm text-gray-500 dark:text-mutedDark">
          {label} Severity
        </p>

        <div className={`px-2 py-1 text-xs rounded-md ${badgeBg[color]}`}>
          ⚠
        </div>
      </div>

      {/* Value */}
      <h2 className={`text-3xl font-bold ${colors[color]}`}>
        {value}
      </h2>

      {/* Change */}
      <p
        className={`text-xs mt-2 ${
          isIncrease
            ? "text-red-500 dark:text-red-400"
            : "text-green-600 dark:text-green-400"
        }`}
      >
        {change} {isIncrease ? "increase" : "decrease"} than yesterday
      </p>

    </div>
  )
}