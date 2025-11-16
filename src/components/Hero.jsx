import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-[80vh] min-h-[560px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-white/20 pointer-events-none" />

      <div className="relative h-full">
        <div className="mx-auto max-w-7xl h-full px-4 sm:px-6 lg:px-8 flex items-end pb-16">
          <div className="w-full max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900"
            >
              The modern way for UK buyers to discover and track tenders
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-5 text-lg text-gray-600"
            >
              Search effortlessly across frameworks, contracts and notices. Built for public sector teams who care about speed, accuracy and compliance.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="mt-8 flex items-center gap-3"
            >
              <a href="#get-started" className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-red-600 hover:bg-red-700 px-4 py-2.5 rounded-xl transition">
                Start searching tenders
              </a>
              <a href="#demo" className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 bg-white hover:bg-gray-50 px-4 py-2.5 rounded-xl border border-gray-200 transition">
                View demo
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-6"
            >
              {[{label:'Active notices', value:'12,481'}, {label:'OJEU compliant', value:'100%'}, {label:'Avg. search time', value:'0.4s'}, {label:'Buyer teams', value:'2,900+'}].map((stat, i) => (
                <div key={stat.label} className="">
                  <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
