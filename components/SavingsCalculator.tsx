'use client';

import { useMemo, useState } from 'react';
import Reveal from './Reveal';

// PLACEHOLDER assumptions — replace with real, verified Green Drift figures
// before this goes live. Keeping the math simple and transparent on purpose.
const ASSUMPTIONS = {
  petrolFuelPerDay: 150, // ₹ PLACEHOLDER
  petrolMaintenancePerMonth: 800, // ₹ PLACEHOLDER
  evRentalPerMonth: 5400, // ₹ PLACEHOLDER
  evChargingPerDay: 40, // ₹ PLACEHOLDER
};

export default function SavingsCalculator() {
  const [dailyEarning, setDailyEarning] = useState(1000);

  const { petrolMonthly, evMonthly, savings } = useMemo(() => {
    const days = 30;
    const petrolMonthly = ASSUMPTIONS.petrolFuelPerDay * days + ASSUMPTIONS.petrolMaintenancePerMonth;
    const evMonthly = ASSUMPTIONS.evChargingPerDay * days + ASSUMPTIONS.evRentalPerMonth;
    const savings = Math.max(petrolMonthly - evMonthly, 0);
    return { petrolMonthly, evMonthly, savings };
  }, []);

  return (
    <section className="bg-surface2">
      <div className="max-w-[1240px] mx-auto px-6 py-24">
        <Reveal className="max-w-[560px] mb-12">
          <span className="eyebrow">EV VS PETROL</span>
          <h2 className="font-display font-bold uppercase text-[clamp(1.6rem,3vw,2.2rem)] mt-4">
            See what switching actually saves you.
          </h2>
          <p className="text-steel mt-4 leading-relaxed">
            Move the slider to your daily earnings. The numbers below are illustrative — your real plan cost
            depends on your city and vehicle class.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="border border-line rounded-lg bg-surface p-8 md:p-10">
            <label htmlFor="earnings" className="font-mono text-xs uppercase tracking-widest text-steelDim">
              Daily earnings: <span className="text-leafBright">₹{dailyEarning}</span>
            </label>
            <input
              id="earnings"
              type="range"
              min={0}
              max={2000}
              step={50}
              value={dailyEarning}
              onChange={(e) => setDailyEarning(Number(e.target.value))}
              className="w-full mt-4 accent-leafBright"
            />

            <div className="grid md:grid-cols-3 gap-6 mt-10">
              <div>
                <div className="font-mono text-[0.7rem] uppercase tracking-widest text-steelDim">Petrol, per month</div>
                <div className="font-display font-bold text-2xl mt-1.5">₹{petrolMonthly.toLocaleString('en-IN')}</div>
              </div>
              <div>
                <div className="font-mono text-[0.7rem] uppercase tracking-widest text-steelDim">Green Drift EV, per month</div>
                <div className="font-display font-bold text-2xl mt-1.5">₹{evMonthly.toLocaleString('en-IN')}</div>
              </div>
              <div>
                <div className="font-mono text-[0.7rem] uppercase tracking-widest text-leafBright">You save</div>
                <div className="font-display font-bold text-2xl mt-1.5 text-leafBright">
                  ₹{savings.toLocaleString('en-IN')}/mo
                </div>
              </div>
            </div>
            <p className="font-mono text-[0.68rem] text-steelDim mt-8">
              Illustrative figures based on placeholder assumptions — replace with verified pricing before launch.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
