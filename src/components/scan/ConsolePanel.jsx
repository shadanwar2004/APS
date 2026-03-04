import { useState } from "react"

export default function ConsolePanel() {
  const [tab, setTab] = useState("activity")

  return (
    <div className="bg-white dark:bg-surface border border-gray-200 dark:border-borderDark rounded-2xl overflow-hidden">

      {/* Top Bar */}
      <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200 dark:border-borderDark">

        <div className="flex items-center gap-3">
          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          <span className="font-medium text-sm">Live Scan Console</span>
          <span className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-500">
            Running...
          </span>
        </div>

        <span className="text-gray-400 cursor-pointer">✕</span>
      </div>

      {/* Tabs */}
      <div className="flex gap-6 px-6 py-3 border-b border-gray-200 dark:border-borderDark text-sm">
        <button
          onClick={() => setTab("activity")}
          className={tab === "activity" ? "text-primary font-medium" : "text-gray-500"}
        >
          Activity Log
        </button>

        <button
          onClick={() => setTab("verification")}
          className={tab === "verification" ? "text-primary font-medium" : "text-gray-500"}
        >
          Verification Loops
        </button>
      </div>

      {/* Body */}
      <div className="p-6 h-80 overflow-y-auto text-sm font-mono text-gray-600 bg-gray-50 dark:bg-[#111]">

        <p>[10:00:00] I'll begin a systematic penetration test...</p>
        <p>[10:01:00] Target is online. Performing scan...</p>
        <p>[10:02:00] Recon results: Apache server detected.</p>
        <p>[10:03:00] Testing login form at /password/test</p>
        <p>[10:04:00] X-User-Id header vulnerability discovered</p>

      </div>

    </div>
  )
}