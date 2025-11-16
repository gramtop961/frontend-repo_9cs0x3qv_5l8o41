import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Showcase from './components/Showcase';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Showcase />
        <section id="get-started" className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-gray-200 bg-gray-50 p-10 text-center">
              <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">Ready to search tenders with clarity?</h3>
              <p className="mt-3 text-gray-600 max-w-2xl mx-auto">Create a workspace for your team and start tracking opportunities with live alerts and compliance‑ready exports.</p>
              <div className="mt-6 flex items-center justify-center gap-3">
                <a href="#" className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-red-600 hover:bg-red-700 px-4 py-2.5 rounded-xl transition">Try it free</a>
                <a href="#" className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 bg-white hover:bg-gray-50 px-4 py-2.5 rounded-xl border border-gray-200 transition">Book a demo</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
