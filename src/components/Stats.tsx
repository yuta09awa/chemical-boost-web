
import { useEffect, useState } from "react";

const stats = [
  { label: "Years of Experience", value: 25 },
  { label: "Global Partners", value: 150 },
  { label: "Products Available", value: 1000 },
  { label: "Satisfied Clients", value: 500 },
];

export const Stats = () => {
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const animationDuration = 2000;
    const steps = 50;
    const stepDuration = animationDuration / steps;

    stats.forEach((stat, index) => {
      const increment = stat.value / steps;
      let currentStep = 0;

      const interval = setInterval(() => {
        if (currentStep === steps) {
          clearInterval(interval);
          return;
        }

        setCounts((prevCounts) => {
          const newCounts = [...prevCounts];
          newCounts[index] = Math.round(increment * currentStep);
          return newCounts;
        });

        currentStep++;
      }, stepDuration);
    });
  }, []);

  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center text-white animate-fade-up">
              <div className="text-4xl font-bold mb-2">{counts[index]}+</div>
              <div className="text-sm opacity-80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
