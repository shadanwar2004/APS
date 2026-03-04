export default function StatusChip({ status }) {
  const styles = {
    Completed:
      "bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400",
    Scheduled:
      "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400",
    Failed:
      "bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-400",
  }

  return (
    <span
      className={`px-3 py-1 text-xs font-medium rounded-full ${styles[status]}`}
    >
      {status}
    </span>
  )
}