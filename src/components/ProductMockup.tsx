"use client";

export default function ProductMockup() {
  return (
    <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100 overflow-hidden">
      {/* Top bar */}
      <div className="flex items-center gap-3 mb-5">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-neutral-200" />
          <div className="w-2.5 h-2.5 rounded-full bg-neutral-200" />
          <div className="w-2.5 h-2.5 rounded-full bg-neutral-200" />
        </div>
        <div className="h-6 bg-neutral-100 rounded-md flex-1 max-w-[240px]" />
      </div>

      {/* Timeline row */}
      <div className="flex items-center gap-3 mb-4">
        <div className="h-2 w-2 rounded-full bg-emerald-400" />
        <div className="h-[1px] flex-1 bg-gradient-to-r from-emerald-200 to-transparent" />
        <div className="flex gap-2">
          {["Dispatched", "In Transit", "Arrived"].map((s) => (
            <span
              key={s}
              className="text-[11px] px-3 py-1 rounded-full bg-white border border-neutral-100 text-neutral-500"
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {/* Dock status */}
        <div className="bg-white rounded-xl p-4 border border-neutral-100">
          <div className="text-[10px] uppercase tracking-wider text-neutral-400 mb-2">
            Dock Status
          </div>
          <div className="flex gap-1.5 mb-2">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className={`h-6 flex-1 rounded ${
                  i <= 2 ? "bg-emerald-100" : "bg-neutral-100"
                }`}
              />
            ))}
          </div>
          <div className="text-[11px] text-neutral-400">2 of 4 active</div>
        </div>

        {/* Shipment chip */}
        <div className="bg-white rounded-xl p-4 border border-neutral-100">
          <div className="text-[10px] uppercase tracking-wider text-neutral-400 mb-2">
            Shipment
          </div>
          <div className="text-[20px] font-semibold text-neutral-800 mb-1">
            24
          </div>
          <div className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span className="text-[11px] text-emerald-600">On time</span>
          </div>
        </div>

        {/* Document confirmation */}
        <div className="bg-white rounded-xl p-4 border border-neutral-100">
          <div className="text-[10px] uppercase tracking-wider text-neutral-400 mb-2">
            Documents
          </div>
          <div className="space-y-1.5">
            {["e-Waybill", "POD", "Invoice"].map((d) => (
              <div key={d} className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-emerald-50 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-sm bg-emerald-400" />
                </div>
                <span className="text-[11px] text-neutral-500">{d}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Delivery proof */}
        <div className="bg-white rounded-xl p-4 border border-neutral-100">
          <div className="text-[10px] uppercase tracking-wider text-neutral-400 mb-2">
            Delivery Proof
          </div>
          <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center mb-2">
            <svg
              width="18"
              height="18"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="text-emerald-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <div className="text-[11px] text-emerald-600">Confirmed</div>
        </div>
      </div>
    </div>
  );
}
