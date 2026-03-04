import { useEffect, useState } from "react"
import Layout from "../../components/layout/Layout"
import ProgressCircle from "../../components/scan/ProgressCircle"
import StepTracker from "../../components/scan/StepTracker"
import ConsolePanel from "../../components/scan/ConsolePanel"
import FindingCard from "../../components/scan/FindingCard"

export default function ScanDetail() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => (prev >= 100 ? 100 : prev + 5))
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <Layout titlePath="Scan / Private Assets / New Scan">

      {/* Progress Section */}
      <div className="bg-white dark:bg-surface border border-gray-200 dark:border-borderDark rounded-2xl p-4 sm:p-6 lg:p-8 mb-8 flex flex-col lg:flex-row gap-8 lg:gap-16 items-start lg:items-center">

        <ProgressCircle progress={progress} />

        <div className="flex-1 w-full">
          <StepTracker active={Math.floor(progress / 20)} />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 mt-8 text-sm text-gray-500">
            <div>
              <p className="font-medium text-black dark:text-white">Scan Type</p>
              Grey Box
            </div>
            <div>
              <p className="font-medium text-black dark:text-white">Target</p>
              google.com
            </div>
            <div>
              <p className="font-medium text-black dark:text-white">Started At</p>
              Nov 22, 10:00AM
            </div>
            <div>
              <p className="font-medium text-black dark:text-white">Credentials</p>
              2 Active
            </div>
            <div>
              <p className="font-medium text-black dark:text-white">Files</p>
              Control.pdf
            </div>
            <div>
              <p className="font-medium text-black dark:text-white">Checklists</p>
              55/350
            </div>
          </div>
        </div>

      </div>

      {/* Console + Findings */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        <ConsolePanel />

        <div className="space-y-6">
          <FindingCard
            severity="Critical"
            title="SQL Injection in Authentication Endpoint"
            endpoint="/api/users/login"
            description="User-controlled input allows database-level access."
            time="18:45:25"
          />

          <FindingCard
            severity="High"
            title="Unauthorized Access to User Metadata"
            endpoint="/api/auth/login"
            description="Access control checks missing."
            time="18:46:12"
          />

          <FindingCard
            severity="Medium"
            title="Broken Authentication Rate Limiting"
            endpoint="/api/search"
            description="No effective rate limiting detected."
            time="18:47:02"
          />
        </div>

      </div>

    </Layout>
  )
}