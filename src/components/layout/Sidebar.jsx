import { NavLink, useNavigate } from "react-router-dom"
import { useAuth } from "../../context/AuthContext"
import { useState } from "react"
import {
  LayoutDashboard,
  Folder,
  ScanLine,
  Calendar,
  Bell,
  Settings,
  LifeBuoy,
  Menu,
  X
} from "lucide-react"

export default function Sidebar() {
  const navigate = useNavigate()
  const { logout } = useAuth()
  const [open, setOpen] = useState(false)

  const handleLogoClick = () => {
    logout()
    navigate("/")
  }

  const navItem =
    "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition"

  const inactive =
    "text-gray-600 hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-[#222]"

  const active =
    "bg-[#DFF6F2] text-primary"

  return (
    <>
      {/* MOBILE TOP BAR */}
      <div className="lg:hidden flex items-center justify-between px-4 py-4 border-b border-gray-200 dark:border-borderDark bg-white dark:bg-surface">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-primary"></div>
          <span className="font-semibold text-primary">aps</span>
        </div>

        <button onClick={() => setOpen(true)}>
          <Menu size={22} />
        </button>
      </div>

      {/* OVERLAY (Mobile Only) */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
        />
      )}

      {/* SIDEBAR */}
      <aside
  className={`
    fixed top-0 left-0 z-50
    w-64 h-screen
    bg-white dark:bg-surface
    border-r border-gray-200 dark:border-borderDark
    flex flex-col justify-between
    transform transition-transform duration-300
    ${open ? "translate-x-0" : "-translate-x-full"}
    lg:translate-x-0
  `}
>
        {/* CLOSE BUTTON (Mobile Only) */}
        <div className="lg:hidden flex justify-end p-4">
          <button onClick={() => setOpen(false)}>
            <X size={20} />
          </button>
        </div>

        {/* TOP SECTION */}
        <div>
          {/* Logo */}
          <div
            onClick={handleLogoClick}
            className="flex items-center gap-2 px-6 py-6 cursor-pointer"
          >
            <div className="w-3 h-3 rounded-full bg-primary"></div>
            <span className="text-lg font-semibold text-primary">APS</span>
          </div>

          {/* Navigation */}
          <nav className="px-4 space-y-2">

            <NavLink
              to="/dashboard"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `${navItem} ${isActive ? active : inactive}`
              }
            >
              <LayoutDashboard size={18} />
              Dashboard
            </NavLink>

            <div className={`${navItem} ${inactive}`}>
              <Folder size={18} />
              Projects
            </div>

            <div className={`${navItem} ${inactive}`}>
              <ScanLine size={18} />
              Scans
            </div>

            <div className={`${navItem} ${inactive}`}>
              <Calendar size={18} />
              Schedule
            </div>

            <div className="border-t border-gray-200 dark:border-borderDark my-4" />

            <div className={`${navItem} ${inactive}`}>
              <Bell size={18} />
              Notifications
            </div>

            <div className={`${navItem} ${inactive}`}>
              <Settings size={18} />
              Settings
            </div>

            <div className={`${navItem} ${inactive}`}>
              <LifeBuoy size={18} />
              Support
            </div>

          </nav>
        </div>

        {/* Bottom Profile */}
        <div className="border-t border-gray-200 dark:border-borderDark p-4">
          <div className="flex items-center gap-3">
            <img
              src="https://i.pravatar.cc/40"
              alt="avatar"
              className="w-10 h-10 rounded-full"
            />
            <div className="flex-1">
              <p className="text-xs text-gray-700">
                admin.aps@gmail.com
              </p>
              <p className="text-sm font-medium text-black dark:text-white">
                Security Lead
              </p>
            </div>
            <span className="text-gray-600">›</span>
          </div>
        </div>

      </aside>
    </>
  )
}