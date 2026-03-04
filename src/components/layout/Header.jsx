import { useContext } from "react"
import { ThemeContext } from "../../context/ThemeContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons"

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

{/* Dark Mode Toggle (Icon Based) */}
          <button
  onClick={toggleTheme}
  className="ml-2
  text-black dark:text-white
  transition-all duration-200
  hover:scale-110"
>
  <FontAwesomeIcon
    icon={theme === "light" ? faMoon : faSun}
    className="text-lg"
  />
</button>

          {/* Export Button */}
          <button
            className="border 
            border-gray-700 dark:border-borderDark
            text-gray-700 dark:text-gray-200
            px-4 py-2 rounded-lg text-sm
            hover:bg-gray-300 dark:hover:bg-surface2
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

          



        </div>
      </div>
    </header>
  )
}