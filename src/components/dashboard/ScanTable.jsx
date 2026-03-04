import { initialScans } from "../../data/scans"
import { useNavigate } from "react-router-dom"

export default function ScanTable() {
  const navigate = useNavigate()

  return (
    <div className="bg-white dark:bg-surface border border-gray-200 dark:border-borderDark rounded-2xl p-4 sm:p-6">

      {/* Search + Actions */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">

        <input
          placeholder="Search scans by name or type..."
          className="border px-4 py-2 rounded-lg w-full sm:w-1/3 text-sm"
        />

        <div className="flex flex-wrap gap-3">
          <button className="border px-4 py-2 rounded-lg text-sm">
            Filter
          </button>
          <button className="border px-4 py-2 rounded-lg text-sm">
            Column
          </button>
          <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm">
            + New Scan
          </button>
        </div>
      </div>

      {/* Table Scroll Wrapper */}
      <div className="overflow-x-auto">

        <table className="min-w-[900px] w-full text-sm border-collapse">

          <thead className="text-purple-900 dark:text-mutedDark border-b border-gray-200 dark:border-borderDark">
            <tr>
              <th className="text-left py-3 font-medium">Scan Name</th>
              <th className="text-left font-medium">Type</th>
              <th className="text-left font-medium">Status</th>
              <th className="text-left font-medium">Progress</th>
              <th className="text-left font-medium">Vulnerability</th>
              <th className="text-left font-medium">Last Scan</th>
            </tr>
          </thead>

          <tbody>
            {initialScans.map((scan) => (
              <tr
                key={scan.id}
                onClick={() => navigate(`/scans/${scan.id}`)}
                className="border-b border-gray-200 dark:border-borderDark hover:bg-gray-50 dark:hover:bg-[#222] cursor-pointer transition"
              >
                <td className="py-6 font-medium">
                  {scan.name}
                </td>

                <td>{scan.type}</td>

                <td>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      scan.status === "Completed"
                        ? "bg-green-100 text-green-700"
                        : scan.status === "In Progress"
                        ? "bg-amber-100 text-amber-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {scan.status}
                  </span>
                </td>

                <td>
                  <div className="flex items-center gap-3">
                    <div className="w-28 bg-gray-200 h-2 rounded-full">
                      <div
                        style={{ width: `${scan.progress}%` }}
                        className="bg-primary h-2 rounded-full"
                      />
                    </div>
                    <span>{scan.progress}%</span>
                  </div>
                </td>

                <td>
                  <div className="flex gap-2">
                    <span className="bg-red-500 text-white px-2 py-0.5 rounded text-xs">
                      {scan.vulnerabilities.critical}
                    </span>
                    <span className="bg-orange-400 text-white px-2 py-0.5 rounded text-xs">
                      {scan.vulnerabilities.high}
                    </span>
                    <span className="bg-amber-400 text-white px-2 py-0.5 rounded text-xs">
                      {scan.vulnerabilities.medium}
                    </span>
                    <span className="bg-green-500 text-white px-2 py-0.5 rounded text-xs">
                      {scan.vulnerabilities.low}
                    </span>
                  </div>
                </td>

                <td className="text-gray-500">
                  {scan.lastScan}
                </td>

              </tr>
            ))}
          </tbody>

        </table>
      </div>

    </div>
  )
}