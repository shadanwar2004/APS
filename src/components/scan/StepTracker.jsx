export default function StepTracker({ active }) {
  const steps = ["Spidering", "Mapping", "Testing", "Validating", "Reporting"]

  return (
    <div className="flex items-center gap-10">
      {steps.map((step, index) => (
        <div key={step} className="flex flex-col items-center">

          <div
            className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-medium
            ${
              index === active
                ? "bg-primary text-white"
                : "bg-gray-200 text-gray-500"
            }`}
          >
            {index + 1}
          </div>

          <span className="text-xs mt-3 text-gray-500">
            {step}
          </span>
        </div>
      ))}
    </div>
  )
}