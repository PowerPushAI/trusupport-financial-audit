import React, { useState, useEffect } from "react";
import {
  DollarSign,
  Users,
  Clock,
  Calculator,
  TrendingDown,
  Zap,
  PieChart,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { calculateCosts } from "./utils/supportMath";
// Import specific icons from react-icons
import { FaRocket, FaGlobeAmericas, FaShieldAlt } from "react-icons/fa";
import { HiOutlineStatusOnline } from "react-icons/hi";
import { RiDashboardFill, RiBookOpenLine } from "react-icons/ri";

/**
 * 1. BRAND LOGO CONSTANT
 * Usage: <BrandLogo /> or <BrandLogo size="sm" />
 */
export const BrandLogo = ({ size = "base" }) => (
  <div className="flex items-center gap-3 group cursor-pointer">
    <div
      className={`${size === "sm" ? "w-8 h-8" : "w-10 h-10"} bg-[#9B51E0]/10 rounded-xl flex items-center justify-center `}
    >
      <img
        src="/logo.png"
        alt="TruSupport"
        className="rounded-full transition-transform duration-500 group-hover:scale-110"
      />
    </div>
    <span
      className={`${size === "sm" ? "text-lg" : "text-2xl"} font-black tracking-tighter text-[#E1E1E1]`}
    >
      Tru<span className="text-[#9B51E0]">Support</span>
    </span>
  </div>
);

/**
 * 2. NAVBAR CONSTANT
 */
export const Navbar = () => {
  const links = [
    { name: "Audit Engine", icon: <RiDashboardFill /> },
    { name: "SaaS Benchmarks", icon: <FaGlobeAmericas /> },
  ];

  return (
    <nav className="sticky top-0 z-[100] border-b border-white/5 bg-[#181818]/80 backdrop-blur-xl px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <BrandLogo />

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href="#"
              className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-slate-400 hover:text-[#9B51E0] transition-colors"
            >
              <span className="text-[#9B51E0]/60">{link.icon}</span>
              {link.name}
            </a>
          ))}
          <button className="px-5 py-2 bg-[#9B51E0] text-white text-[11px] font-bold uppercase rounded-xl hover:opacity-90 shadow-lg shadow-[#9B51E0]/20 transition-all flex items-center gap-2">
            Connect CRM <FaRocket />
          </button>
        </div>
      </div>
    </nav>
  );
};

/**
 * 3. FOOTER CONSTANT
 */
export const Footer = () => {
  const sections = [
    {
      title: "Resources",
      icon: <RiBookOpenLine className="mb-1" />,
      items: ["SLA Guide", "API Docs", "Support Index"],
    },
    {
      title: "Company",
      icon: <FaShieldAlt className="mb-1" />,
      items: ["Privacy", "Terms", "Security"],
    },
  ];

  return (
    <footer className="relative z-10 border-t border-white/5 bg-[#121212] pt-16 pb-8 px-6 mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2 space-y-6">
            <BrandLogo size="sm" />
            <p className="text-slate-500 text-sm max-w-sm leading-relaxed">
              Standardizing support efficiency via the SSSI framework. Auditing
              human performance for modern SaaS teams across the globe.
            </p>
          </div>

          {sections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h4 className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#9B51E0]">
                {section.icon}
                {section.title}
              </h4>
              <ul className="space-y-2 text-sm text-slate-400">
                {section.items.map((item) => (
                  <li
                    key={item}
                    className="hover:text-white cursor-pointer transition-colors"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4">
          <p className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">
            &copy; {new Date().getFullYear()} TRUSUPPORT. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest bg-white/5 px-3 py-1.5 rounded-full border border-white/5">
            <HiOutlineStatusOnline className="text-emerald-500 text-sm animate-pulse" />
            Systems Operational
          </div>
        </div>
      </div>
    </footer>
  );
};

const SupportCostCalculator = () => {
  const [inputs, setInputs] = useState({
    ticketsPerDay: 50,
    agents: 3,
    handlingTime: 15,
    salary: 3500,
  });

  const [results, setResults] = useState(null);

  useEffect(() => {
    const data = calculateCosts(inputs);
    setResults(data);
  }, [inputs]);

  return (
    <div className="min-h-screen bg-[#181818] text-[#E1E1E1]  font-sans">
      <Navbar />
      <div className="max-w-6xl mx-auto py-8 md:py-12 px-4 md:px-6">
        <div className="fixed inset-0 overflow-hidden pointer-events-none p-4 md:p-0">
          <div className="absolute -top-[10%] -left-[10%] w-[60%] h-[40%] bg-[#9B51E0]/5 blur-[120px] rounded-full" />
          <div className="absolute -bottom-[10%] -right-[10%] w-[60%] h-[40%] bg-[#9B51E0]/5 blur-[120px] rounded-full" />
        </div>
        <header className="mb-8 md:mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#9B51E0]/30 text-[#9B51E0] text-[10px] md:text-xs font-bold uppercase mb-4">
            <Calculator size={14} /> Financial Audit
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-4 tracking-tight leading-tight">
            Support <span style={{ color: "#9B51E0" }}>Cost Calculator</span>
          </h1>
          <p className="text-slate-500 max-w-xl mx-auto text-sm md:text-base px-2">
            Discover the hidden operational costs of your support team and how
            much AI can reclaim.
          </p>
        </header>

        {/* Changed items-stretch to help with vertical flow on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-stretch">
          {/* INPUT SECTION - Order 2 on mobile so they see results first after typing */}
          <div className="lg:col-span-5 flex flex-col order-2 lg:order-1">
            <div className="w-full bg-[#181818] border border-white/10 p-6 md:p-8 rounded-3xl shadow-2xl flex flex-col h-full">
              <h3 className="text-lg md:text-xl font-bold mb-6 md:mb-8 flex items-center gap-2">
                <PieChart className="text-[#9B51E0]" size={20} /> Input Metrics
              </h3>

              <div className="space-y-5 md:space-y-6 flex-grow">
                <CostInput
                  label="Tickets Per Day"
                  icon={<PieChart size={16} />}
                  value={inputs.ticketsPerDay}
                  onChange={(v) => setInputs({ ...inputs, ticketsPerDay: v })}
                />
                <CostInput
                  label="Total Support Agents"
                  icon={<Users size={16} />}
                  value={inputs.agents}
                  onChange={(v) => setInputs({ ...inputs, agents: v })}
                />
                <CostInput
                  label="Avg. Handling Time (Min)"
                  icon={<Clock size={16} />}
                  value={inputs.handlingTime}
                  onChange={(v) => setInputs({ ...inputs, handlingTime: v })}
                />
                <CostInput
                  label="Avg. Monthly Salary ($)"
                  icon={<DollarSign size={16} />}
                  value={inputs.salary}
                  onChange={(v) => setInputs({ ...inputs, salary: v })}
                />
              </div>
            </div>
          </div>

          {/* OUTPUT SECTION - Order 1 on mobile */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <AnimatePresence mode="wait">
              {results && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-[#181818] border border-white/10 p-6 md:p-8 rounded-3xl h-full flex flex-col shadow-2xl relative overflow-hidden"
                >
                  <div className="flex flex-col sm:flex-row justify-between items-start gap-6 mb-8 md:mb-10">
                    <div>
                      <p className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
                        Monthly Operational Cost
                      </p>
                      {/* Responsive text size for the big dollar amount */}
                      <h2 className="text-4xl md:text-6xl font-black text-[#E1E1E1]">
                        ${results.monthlyTotal}
                      </h2>
                    </div>
                    <div className="w-full sm:w-auto p-4 bg-white/5 border border-white/10 rounded-2xl text-center">
                      <p className="text-[10px] font-bold text-slate-500 uppercase">
                        Cost Per Ticket
                      </p>
                      <p className="text-xl md:text-2xl font-black text-[#9B51E0]">
                        ${results.costPerTicket}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6 md:space-y-8 flex-grow">
                    <div className="space-y-3">
                      <div className="flex justify-between text-[10px] md:text-xs font-bold uppercase tracking-tighter">
                        <span className="text-slate-500">
                          Resource Efficiency
                        </span>
                        <span className="text-[#9B51E0]">
                          {results.efficiencyScore.toFixed(0)}%
                        </span>
                      </div>
                      <div className="h-3 md:h-4 w-full bg-white/5 rounded-full overflow-hidden p-[1px] md:p-[2px]">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${results.efficiencyScore}%` }}
                          className="h-full rounded-full"
                          style={{ backgroundColor: "#9B51E0" }}
                        />
                      </div>
                    </div>

                    <div className="bg-[#9B51E0]/5 border border-[#9B51E0]/20 p-5 md:p-6 rounded-2xl relative group">
                      <div className="flex items-center gap-3 mb-4 text-[#9B51E0]">
                        <Zap size={20} fill="#9B51E0" />
                        <h4 className="font-bold uppercase tracking-tighter text-xs md:text-sm">
                          Potential AI Savings
                        </h4>
                      </div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl md:text-4xl font-black text-[#E1E1E1]">
                          ${results.potentialSavings}
                        </span>
                        <span className="text-slate-500 text-xs md:text-sm font-medium">
                          / month
                        </span>
                      </div>
                      <p className="text-[10px] md:text-xs text-slate-500 mt-3 leading-relaxed">
                        Based on a 45% deflection rate and automated triaging
                        with TruSupport AI.
                      </p>
                    </div>
                  </div>

                  {/* CTA Area */}
                  <div className="mt-8 pt-6 md:pt-8 border-t border-white/5">
                    <button
                      className="w-full py-4 md:py-5 rounded-2xl font-black text-[#E1E1E1] transition-all flex items-center justify-center gap-3 hover:brightness-110 active:scale-[0.98] shadow-xl text-sm md:text-base"
                      style={{ backgroundColor: "#9B51E0" }}
                    >
                      <TrendingDown size={18} />
                      REDUCE OPERATIONAL COSTS NOW
                    </button>
                    <p className="text-center text-[9px] md:text-[10px] text-slate-600 mt-4 uppercase tracking-[0.2em] font-bold">
                      TruSupport: Automate SLA. Reduce Churn.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const CostInput = ({ label, value, onChange, icon }) => (
  <div className="space-y-1.5 md:space-y-2">
    <label className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-widest ml-1 flex items-center gap-2">
      {icon} {label}
    </label>
    <div className="relative">
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full bg-white/5 border border-white/10 rounded-xl py-3 md:py-4 px-4 md:px-5 text-[#E1E1E1] focus:border-[#9B51E0] focus:ring-4 focus:ring-[#9B51E0]/10 outline-none transition-all font-mono text-sm md:text-base"
      />
    </div>
  </div>
);

export default SupportCostCalculator;
