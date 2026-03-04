export default function FindingCard({
  severity,
  title,
  endpoint,
  description,
  time,
}) {
  const severityColor = {
    Critical: "bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-400",
    High: "bg-orange-100 text-orange-700 dark:bg-orange-900/20 dark:text-orange-400",
    Medium: "bg-amber-100 text-amber-700 dark:bg-amber-900/20 dark:text-amber-400",
  }

  return (
    <div className="bg-white dark:bg-surface border border-gray-200 dark:border-borderDark rounded-xl p-4 hover:shadow-md transition">

      <div className="flex justify-between items-center mb-2">
        <span className={`px-3 py-1 text-xs rounded-full font-medium ${severityColor[severity]}`}>
          {severity}
        </span>
        <span className="text-xs text-gray-400">
          {time}
        </span>
      </div>

      <h4 className="font-semibold mb-1">
        {title}
      </h4>

      <p className="text-primary text-sm mb-2">
        {endpoint}
      </p>

      <p className="text-sm text-gray-500">
        {description}
      </p>
    </div>
  )
}