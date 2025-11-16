import { motion } from 'framer-motion';
import { ShieldCheck, Search, Bell, Users } from 'lucide-react';

const items = [
  {
    icon: Search,
    title: 'Precision search',
    desc: 'Filter by region, CPV, value, framework, buyer and more. Save views and share with your team.'
  },
  {
    icon: Bell,
    title: 'Proactive alerts',
    desc: 'Never miss a notice. Real‑time email and in‑app alerts based on your saved searches.'
  },
  {
    icon: Users,
    title: 'Built for buyers',
    desc: 'Collaborate with colleagues, add notes, shortlist notices and manage upcoming events.'
  },
  {
    icon: ShieldCheck,
    title: 'Compliance-first',
    desc: 'Stay aligned with UK procurement regulations with transparent audit trails.'
  }
];

export default function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">Designed for public sector buyers</h2>
          <p className="mt-4 text-gray-600">Everything you need to search, validate and act on opportunities with confidence.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="p-6 rounded-2xl border border-gray-200 hover:border-gray-300 transition bg-white shadow-sm"
            >
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-red-500 to-rose-600 text-white flex items-center justify-center">
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{item.title}</h3>
              <p className="mt-2 text-sm text-gray-600 leading-6">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
