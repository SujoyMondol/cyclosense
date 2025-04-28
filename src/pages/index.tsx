//import Image from "next/image";

export default function Home() {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900/95 via-teal-900/20 to-emerald-900/5">
        {/* Navigation */}
        <nav className="flex items-center justify-between px-8 py-6">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 bg-emerald-400 rounded-full"></div>
            <span className="text-2xl font-bold text-white">CycloSense</span>
          </div>
          <div className="hidden md:flex gap-8">
            <button className="text-emerald-200 hover:text-white transition-colors">Features</button>
            <button className="text-emerald-200 hover:text-white transition-colors">Safety</button>
            <button className="text-emerald-200 hover:text-white transition-colors">Tech Specs</button>
          </div>
        </nav>
  
        {/* Hero Section */}
        <div className="container mx-auto px-6 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Smart Protection<br />
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                For Modern Cyclists
              </span>
            </h1>
            <p className="text-xl text-cyan-100 mb-12">
              The next generation bicycle helmet with integrated safety systems<br /> 
              and real-time health monitoring
            </p>
            <div className="flex gap-4 justify-center">
              <button className="bg-emerald-500 hover:bg-emerald-400 text-white px-8 py-4 rounded-full text-lg transition-all transform hover:scale-105">
                Pre-order Now
              </button>
              <button className="border-2 border-cyan-400 text-cyan-100 hover:bg-cyan-400/10 px-8 py-4 rounded-full text-lg transition-all">
                Learn More
              </button>
            </div>
          </div>
        </div>
  
        {/* Feature Highlights */}
        <div className="container mx-auto px-6 py-24">
          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <div className="bg-white/5 p-8 rounded-3xl backdrop-blur-sm border border-white/10 hover:border-emerald-400/30 transition-all">
              <div className="w-16 h-16 bg-emerald-400/20 rounded-2xl mb-6 flex items-center justify-center">
                <div className="w-8 h-8 bg-emerald-400 rounded-full"></div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Smart Lighting</h3>
              <p className="text-cyan-100">Adaptive LED system with automatic brake and turn signals</p>
            </div>
  
            <div className="bg-white/5 p-8 rounded-3xl backdrop-blur-sm border border-white/10 hover:border-emerald-400/30 transition-all">
              <div className="w-16 h-16 bg-emerald-400/20 rounded-2xl mb-6 flex items-center justify-center">
                <div className="w-8 h-8 bg-cyan-400 rounded-full"></div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Health Monitor</h3>
              <p className="text-cyan-100">Real-time heart rate tracking and fatigue detection</p>
            </div>
  
            <div className="bg-white/5 p-8 rounded-3xl backdrop-blur-sm border border-white/10 hover:border-emerald-400/30 transition-all">
              <div className="w-16 h-16 bg-emerald-400/20 rounded-2xl mb-6 flex items-center justify-center">
                <div className="w-8 h-8 bg-emerald-400 rounded-full"></div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Crash Detection</h3>
              <p className="text-cyan-100">Instant emergency alerts with GPS location</p>
            </div>
          </div>
        </div>
  
        {/* CTA Section */}
        <div className="bg-emerald-900/20 py-24">
          <div className="max-w-4xl mx-auto text-center px-6">
            <h2 className="text-4xl font-bold text-white mb-8">
              Ready to Revolutionize Your Ride?
            </h2>
            <p className="text-cyan-100 text-xl mb-12">
              Join thousands of cyclists who have already upgraded their safety
            </p>
            <button className="bg-cyan-400 hover:bg-cyan-300 text-blue-900 px-12 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105">
              Get Protected Now
            </button>
          </div>
        </div>
  
        {/* Footer */}
        <footer className="border-t border-white/10 mt-24 py-12">
          <div className="container mx-auto px-6 text-center text-cyan-100">
            <p>© 2025 CycloSense. All rights reserved.</p>
          </div>
        </footer>
      </div>
    );
  }