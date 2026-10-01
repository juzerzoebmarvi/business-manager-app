function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <header className="mb-10 flex items-center justify-between border-b border-slate-800 pb-6">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-400">Business Manager</p>
            <h1 className="mt-2 text-4xl font-bold">Finance & Operations Dashboard</h1>
          </div>
          <button className="rounded-lg bg-cyan-500 px-4 py-2 font-medium text-slate-950 transition hover:bg-cyan-400">
            + New Invoice
          </button>
        </header>

        <section className="grid gap-6 md:grid-cols-4">
          <StatCard label="Revenue" value="$48,250" delta="+12.4%" />
          <StatCard label="Expenses" value="$21,940" delta="-3.1%" />
          <StatCard label="Outstanding" value="$14,760" delta="5 due this week" />
          <StatCard label="Inventory" value="1,284" delta="17 low stock" />
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-[1.5fr_1fr]">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="mb-4 text-xl font-semibold">Recent activity</h2>
            <div className="space-y-4">
              {[
                { title: 'Invoice INV-1024', sub: 'Acme Industries', amount: '$2,450.00' },
                { title: 'Bill BILL-884', sub: 'Northwind Supplies', amount: '$1,120.00' },
                { title: 'Inventory restock', sub: '12 units moved', amount: '+120' },
                { title: 'Customer payment', sub: 'Brightline Co.', amount: '$980.00' }
              ].map((item) => (
                <div key={item.title} className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950 p-3">
                  <div>
                    <p className="font-medium text-slate-100">{item.title}</p>
                    <p className="text-sm text-slate-400">{item.sub}</p>
                  </div>
                  <span className="font-semibold text-cyan-400">{item.amount}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="mb-4 text-xl font-semibold">Quick reports</h2>
            <div className="space-y-3">
              {['Supplier Invoice Report', 'Payment Report', 'Cash Flow', 'P&L Summary', 'Inventory Aging'].map((report) => (
                <div
                  key={report}
                  className="flex cursor-pointer items-center justify-between rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-slate-200 transition hover:border-cyan-500 hover:text-cyan-300"
                >
                  <span>{report}</span>
                  <span aria-hidden="true">→</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function StatCard({ label, value, delta }: { label: string; value: string; delta: string }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 shadow-lg shadow-slate-950/30">
      <p className="text-sm text-slate-400">{label}</p>
      <p className="mt-3 text-3xl font-bold text-white">{value}</p>
      <p className="mt-2 text-sm text-emerald-400">{delta}</p>
    </div>
  );
}

export default App;
