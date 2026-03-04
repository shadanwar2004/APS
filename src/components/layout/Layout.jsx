import Sidebar from "./Sidebar"
import Header from "./Header"

export default function Layout({ children, titlePath }) {
  return (
    <div className="flex min-h-screen bg-lightbg dark:bg-darkbg text-gray-900 dark:text-gray-200 transition-colors duration-300">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col lg:ml-64">

        <Header titlePath={titlePath} />

        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          {children}
        </main>

      </div>
    </div>
  )
}