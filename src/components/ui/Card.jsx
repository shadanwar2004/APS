export default function Card({ children, className = "" }) {
  return (
    <div
      className={`bg-white dark:bg-[#1A1A1A] 
      border border-gray-200 dark:border-[#2A2A2A] 
      rounded-2xl p-6 shadow-sm ${className}`}
    >
      {children}
    </div>
  )
}