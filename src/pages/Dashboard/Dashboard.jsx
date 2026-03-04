import Layout from "../../components/layout/Layout"
import StatsCard from "../../components/dashboard/StatsCard"
import ScanTable from "../../components/dashboard/ScanTable"

export default function Dashboard() {
  return (
    <Layout titlePath="Scan / Private Assets / New Scan">

      {/* Org Info Row */}
      <div className="flex items-center justify-between text-sm text-gray-500 mb-8 whitespace-nowrap overflow-x-auto">
        <div className="flex items-center gap-10 min-w-max">
          <p><span className="font-medium text-black dark:text-white">Org : Project XYZ</span></p>
          <p><span className="font-medium text-black dark:text-white">Owner : Shad Anwar</span></p>
          <p><span className="font-medium text-black dark:text-white">Total Scans : 100</span></p>
          <p><span className="font-medium text-black dark:text-white">Scheduled : 1000</span></p>
          <p><span className="font-medium text-black dark:text-white">Rescans : 100</span></p>
          <p><span className="font-medium text-black dark:text-white">Failed Scans : 100</span></p>
          <p className="flex items-center gap-1">
            <span className="font-medium text-black dark:text-white">⟳ 10 mins ago</span>
          </p>
        </div>
      </div> {/* <-- THIS WAS MISSING */}

      {/* Severity Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <StatsCard label="Critical" value="86" change="+2%" color="red" />
        <StatsCard label="High" value="16" change="+0.9%" color="orange" />
        <StatsCard label="Medium" value="26" change="-0.9%" color="amber" />
        <StatsCard label="Low" value="16" change="+0.9%" color="green" />
      </div>

      <ScanTable />

    </Layout>
  )
}