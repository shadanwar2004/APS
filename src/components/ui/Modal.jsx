export default function Modal({ open, onClose, children }) {
  if (!open) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-surface p-8 rounded-xl w-96 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4"
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  )
}