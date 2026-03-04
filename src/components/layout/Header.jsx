import { useContext } from "react"
import { ThemeContext } from "../../context/ThemeContext"

export default function Header({ titlePath }) {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <header
      className="border-b 
      border-gray-200 dark:border-borderDark 
      bg-white dark:bg-surface 
      px-8 py-4 
      transition-colors duration-300"
    >
      <div className="flex justify-between items-center">

        {/* LEFT SIDE - Breadcrumb */}
        <div className="text-sm text-blue-900 dark:text-mutedDark">
          {titlePath}
        </div>

        {/* RIGHT SIDE - Actions */}
        <div className="flex items-center gap-4">

          {/* Export Button */}
          <button
            className="border 
            border-gray-300 dark:border-borderDark
            text-gray-700 dark:text-gray-200
            px-4 py-2 rounded-lg text-sm
            hover:bg-gray-100 dark:hover:bg-surface2
            transition"
          >
            Export Report
          </button>

          {/* Stop Scan Button */}
          <button
            className="border 
            border-red-500 
            text-red-500 
            px-4 py-2 rounded-lg text-sm
            hover:bg-red-500 hover:text-white
            dark:hover:bg-red-600
            transition"
          >
            Stop Scan
          </button>

          {/* Theme Toggle */}
          <button
  onClick={toggleTheme}
  className="ml-2 px-3 py-2 text-xs rounded-lg
  bg-black text-white
  dark:bg-white dark:text-black
  hover:opacity-80 transition"
>
  {theme === "light" ? "Dark Mode" : "Light Mode"}
</button>

        </div>
      </div>
    </header>
  )
}