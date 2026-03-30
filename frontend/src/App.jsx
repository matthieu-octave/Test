import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight, Star, Leaf, Battery, Shield, Smartphone, Play, Zap, Check } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className={`text-2xl font-bold tracking-tighter ${scrolled ? 'text-gray-900' : 'text-white'}`}>MOWD<span className="text-primary-500">.</span></span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className={`font-medium hover:text-primary-500 transition-colors ${scrolled ? 'text-gray-600' : 'text-gray-200'}`}>Features</a>
            <a href="#how-it-works" className={`font-medium hover:text-primary-500 transition-colors ${scrolled ? 'text-gray-600' : 'text-gray-200'}`}>How it works</a>
            <a href="#testimonials" className={`font-medium hover:text-primary-500 transition-colors ${scrolled ? 'text-gray-600' : 'text-gray-200'}`}>Reviews</a>
            <a href="#pricing" className={`font-medium hover:text-primary-500 transition-colors ${scrolled ? 'text-gray-600' : 'text-gray-200'}`}>Pricing</a>
            <button className="bg-primary-600 text-white px-6 py-2 rounded-full font-medium hover:bg-primary-700 transition-colors shadow-lg shadow-primary-500/30">
              Pre-order Now
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className={`${scrolled ? 'text-gray-900' : 'text-white'}`}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white shadow-xl absolute w-full left-0 top-full"
          >
            <div className="px-4 pt-2 pb-6 space-y-1 sm:px-3 flex flex-col items-center">
              <a href="#features" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-base font-medium text-gray-800 hover:text-primary-600">Features</a>
              <a href="#how-it-works" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-base font-medium text-gray-800 hover:text-primary-600">How it works</a>
              <a href="#testimonials" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-base font-medium text-gray-800 hover:text-primary-600">Reviews</a>
              <a href="#pricing" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-base font-medium text-gray-800 hover:text-primary-600">Pricing</a>
              <button className="w-full mt-4 bg-primary-600 text-white px-6 py-3 rounded-full font-medium hover:bg-primary-700 transition-colors">
                Pre-order Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1741326757602-186060c5d5b5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNTl8MHwxfHNlYXJjaHwyfHxyb2JvdGljJTIwbGF3biUyMG1vd2VyfGVufDB8fHx8MTc3NDg5ODA4MXww&ixlib=rb-4.1.0&q=85" 
          alt="Robotic Lawn Mower" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/40"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-primary-500/20 border border-primary-500/30 text-primary-400 text-sm font-semibold tracking-wider mb-6 backdrop-blur-sm">
              INTRODUCING MOWD SERIES X
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight mb-6">
              The Future of <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-green-300">Lawn Care</span> is Autonomous
            </h1>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
              Say goodbye to weekend chores. Mowd is the intelligent, silent, and fully autonomous robotic mower that keeps your lawn pristine 24/7.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-500 transition-all shadow-[0_0_20px_rgba(34,197,94,0.4)] flex items-center justify-center group">
                Order Now
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center">
                <Play className="mr-2 h-5 w-5" /> Watch Video
              </button>
            </div>
            
            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-4">
                {[1,2,3,4].map((i) => (
                  <img key={i} className="w-10 h-10 rounded-full border-2 border-gray-900" src={`https://i.pravatar.cc/100?img=${i}`} alt="User" />
                ))}
              </div>
              <div>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-gray-300 text-sm mt-1">Join 10,000+ happy homeowners</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative slant */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-white clip-path-slant z-10"></div>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8 text-primary-600" />,
      title: "AI-Powered Navigation",
      description: "Maps your yard with millimeter precision, avoiding obstacles, pets, and garden beds intelligently."
    },
    {
      icon: <Battery className="w-8 h-8 text-primary-600" />,
      title: "Self-Charging",
      description: "When the battery runs low, Mowd automatically returns to its base station, charges, and resumes mowing."
    },
    {
      icon: <Smartphone className="w-8 h-8 text-primary-600" />,
      title: "App Controlled",
      description: "Set schedules, adjust cutting height, and monitor progress from anywhere using our intuitive mobile app."
    },
    {
      icon: <Leaf className="w-8 h-8 text-primary-600" />,
      title: "Whisper Quiet",
      description: "Operates at under 58dB. Run it overnight without waking your family or the neighbors."
    },
    {
      icon: <Shield className="w-8 h-8 text-primary-600" />,
      title: "Anti-Theft System",
      description: "Equipped with GPS tracking, an alarm system, and PIN code protection for ultimate peace of mind."
    },
    {
      icon: <Check className="w-8 h-8 text-primary-600" />,
      title: "Weather Aware",
      description: "Built-in rain sensors tell Mowd to return to base during heavy downpours, protecting your lawn."
    }
  ];

  return (
    <section id="features" className="py-24 bg-white relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary-600 font-semibold tracking-wide uppercase text-sm mb-3">Why Choose Mowd</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">Engineered for the perfect cut.</h3>
          <p className="text-xl text-gray-600">
            We've packed the most advanced robotic and AI technology into a sleek, weather-proof design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary-100 flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-gray-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-primary-400 font-semibold tracking-wide uppercase text-sm mb-3">How it works</h2>
              <h3 className="text-4xl md:text-5xl font-extrabold mb-8">Set it up once. <br/>Enjoy forever.</h3>
              
              <div className="space-y-10">
                {[
                  { step: "01", title: "Place the Base Station", desc: "Find a spot with access to power and let Mowd establish its home." },
                  { step: "02", title: "Map your Yard", desc: "Walk the perimeter once with the app. No burying wires required thanks to GPS-RTK." },
                  { step: "03", title: "Schedule and Relax", desc: "Set your preferred mowing times and let Mowd maintain the perfect grass height." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full border border-primary-500 flex items-center justify-center text-primary-400 font-bold text-lg">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                      <p className="text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1760643451158-d848ba9e9b1d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsYXdufGVufDB8fHx8MTc3NDg5ODA5Mnww&ixlib=rb-4.1.0&q=85" 
                alt="App Interface" 
                className="w-full h-auto object-cover rounded-2xl transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-6 left-6 right-6 z-20 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-300">Current Status</p>
                    <p className="text-xl font-bold text-white">Mowing Zone A</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-300">Battery</p>
                    <p className="text-xl font-bold text-green-400">78%</p>
                  </div>
                </div>
                <div className="w-full bg-gray-700 h-2 mt-4 rounded-full overflow-hidden">
                  <div className="bg-primary-500 w-[78%] h-full"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">Loved by homeowners.</h2>
          <p className="text-xl text-gray-600">Don't just take our word for it. Here's what our early adopters are saying.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Sarah J.", role: "Homeowner", text: "I used to spend 3 hours every Saturday mowing. Now I just sit on my patio and watch Mowd do the work. Best investment ever." },
            { name: "Michael T.", role: "Tech Enthusiast", text: "The wire-free setup is a game changer. The GPS-RTK positioning is incredibly accurate. It leaves perfect stripes on my lawn." },
            { name: "Elena R.", role: "Landscape Architect", text: "I recommend Mowd to all my clients. Because it cuts a tiny amount every day, the grass is healthier and thicker than ever." }
          ].map((t, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
            >
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
              </div>
              <p className="text-gray-700 italic mb-6 leading-relaxed">"{t.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center font-bold text-primary-700">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h5 className="font-bold text-gray-900">{t.name}</h5>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">Simple, transparent pricing.</h2>
          <p className="text-xl text-gray-600">Choose the perfect Mowd model for your yard size.</p>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 max-w-5xl mx-auto">
          {/* Standard */}
          <div className="w-full lg:w-1/2 bg-gray-50 border border-gray-200 rounded-3xl p-8 hover:shadow-xl transition-all">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Mowd Air</h3>
            <p className="text-gray-600 mb-6">Perfect for standard urban and suburban yards.</p>
            <div className="mb-6">
              <span className="text-5xl font-extrabold text-gray-900">$899</span>
            </div>
            <ul className="space-y-4 mb-8">
              {['Up to 0.5 Acres coverage', 'Wire-free GPS-RTK navigation', 'Smart app control', 'Anti-theft GPS tracking', 'Standard battery life'].map((item, i) => (
                <li key={i} className="flex items-center text-gray-700">
                  <Check className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0" /> {item}
                </li>
              ))}
            </ul>
            <button className="w-full bg-white border-2 border-primary-600 text-primary-600 px-6 py-4 rounded-full font-bold hover:bg-primary-50 transition-colors">
              Pre-order Mowd Air
            </button>
          </div>

          {/* Pro */}
          <div className="w-full lg:w-1/2 bg-gray-900 rounded-3xl p-8 shadow-2xl transform lg:scale-105 relative border border-gray-800">
            <div className="absolute top-0 right-8 transform -translate-y-1/2">
              <span className="bg-primary-500 text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg">Most Popular</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Mowd Pro</h3>
            <p className="text-gray-400 mb-6">For large estates and complex landscapes.</p>
            <div className="mb-6">
              <span className="text-5xl font-extrabold text-white">$1,499</span>
            </div>
            <ul className="space-y-4 mb-8">
              {['Up to 1.5 Acres coverage', 'All-Wheel Drive for steep slopes', 'Obstacle AI Vision + Radar', 'Extended high-capacity battery', 'Premium 24/7 support'].map((item, i) => (
                <li key={i} className="flex items-center text-gray-300">
                  <Check className="w-5 h-5 text-primary-400 mr-3 flex-shrink-0" /> {item}
                </li>
              ))}
            </ul>
            <button className="w-full bg-primary-600 text-white px-6 py-4 rounded-full font-bold hover:bg-primary-500 transition-colors shadow-lg shadow-primary-500/25">
              Pre-order Mowd Pro
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const backendUrl = import.meta.env.VITE_REACT_APP_BACKEND_URL || 'http://localhost:8001';
      const response = await fetch(`${backendUrl}/api/waitlist`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      
      if (response.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Waitlist error:', error);
      setStatus('error');
    }
  };

  return (
    <section className="relative py-24 bg-primary-600 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img 
          src="https://images.unsplash.com/photo-1589793929550-f29a6b7e4a32?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwxfHxncmVlbiUyMGxhd258ZW58MHx8fHwxNzc0ODk4MDk5fDA&ixlib=rb-4.1.0&q=85" 
          alt="Grass texture" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Ready for the perfect lawn?</h2>
        <p className="text-xl text-primary-100 mb-10">
          Join the waitlist today and get $100 off when we launch this Spring. No credit card required.
        </p>
        
        {status === 'success' ? (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/20 backdrop-blur-md rounded-xl p-6 inline-block"
          >
            <p className="text-2xl font-bold text-white flex items-center">
              <Check className="mr-2" /> You're on the list!
            </p>
            <p className="text-primary-100 mt-2">Keep an eye on your inbox for updates.</p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row max-w-lg mx-auto gap-4">
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address" 
              className="flex-grow px-6 py-4 rounded-full border-none focus:ring-2 focus:ring-white focus:outline-none text-gray-900"
              required
              disabled={status === 'loading'}
            />
            <button 
              type="submit" 
              disabled={status === 'loading'}
              className="bg-gray-900 text-white px-8 py-4 rounded-full font-bold hover:bg-gray-800 transition-colors whitespace-nowrap disabled:opacity-70 flex items-center justify-center"
            >
              {status === 'loading' ? 'Joining...' : 'Join Waitlist'}
            </button>
          </form>
        )}
        {status === 'error' && (
          <p className="text-red-200 mt-4 font-medium">Something went wrong. Please try again later.</p>
        )}
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-400 py-12 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center">
            <span className="text-2xl font-bold tracking-tighter text-white">MOWD<span className="text-primary-500">.</span></span>
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Support</a>
          </div>
          <p className="text-sm">© {new Date().getFullYear()} Mowd Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-primary-500 selection:text-white">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
}
