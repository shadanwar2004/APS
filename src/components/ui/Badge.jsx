export default function Badge({ color, children }) {
  const colors = {
    red: "bg-red-100 text-red-600",
    orange: "bg-orange-100 text-orange-600",
    amber: "bg-amber-100 text-amber-600",
    green: "bg-green-100 text-green-600",
  }

  return (
    <span className={`px-2 py-1 text-xs rounded-md ${colors[color]}`}>
      {children}
    </span>
  )
}