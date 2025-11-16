import { motion } from 'framer-motion';

export default function Showcase() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">See search in action</h2>
            <p className="mt-4 text-gray-600">Minimal UI, maximum clarity. Results stream in with smooth transitions and inline validation so you can act fast.</p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[1,2,3,4].map((i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="p-4 rounded-xl bg-white border border-gray-200 shadow-sm"
                >
                  <div className="h-28 rounded-lg bg-gradient-to-br from-gray-100 to-gray-200" />
                  <div className="mt-3 h-3 w-3/4 bg-gray-200 rounded" />
                  <div className="mt-2 h-3 w-2/3 bg-gray-200 rounded" />
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl border border-gray-200 bg-white shadow-xl overflow-hidden"
            >
              <div className="p-4 border-b border-gray-200 flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-red-400" />
                <div className="h-3 w-3 rounded-full bg-yellow-400" />
                <div className="h-3 w-3 rounded-full bg-green-400" />
              </div>
              <div className="p-6">
                <div className="h-10 w-full bg-gray-100 rounded-lg" />
                <div className="mt-4 space-y-3">
                  {Array.from({ length: 6 }).map((_, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.4, delay: idx * 0.05 }}
                      className="h-14 bg-gray-100 rounded-lg"
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
