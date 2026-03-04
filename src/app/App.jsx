import { Routes, Route } from "react-router-dom"
import Login from "../pages/Auth/Login"
import Dashboard from "../pages/Dashboard/Dashboard"
import ScanDetail from "../pages/ScanDetail/ScanDetail"
import ProtectedRoute from "./ProtectedRoute"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/scans/:id"
        element={
          <ProtectedRoute>
            <ScanDetail />
          </ProtectedRoute>
        }
      />
    </Routes>
  )
}