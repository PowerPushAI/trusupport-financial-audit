//Project 2
export const calculateCosts = (data) => {
  const { ticketsPerDay, agents, handlingTime, salary } = data;

  const ticketsPerMonth = ticketsPerDay * 22; // Business days
  const monthlySalaryCost = agents * salary;

  const costPerTicket =
    ticketsPerMonth > 0 ? (monthlySalaryCost / ticketsPerMonth).toFixed(2) : 0;

  // AI Savings Logic: AI typically deflects 30-50% of tickets and reduces handling time
  const potentialSavings = (monthlySalaryCost * 0.45).toFixed(0);

  return {
    monthlyTotal: monthlySalaryCost.toLocaleString(),
    costPerTicket,
    potentialSavings: Number(potentialSavings).toLocaleString(),
    ticketsPerMonth: ticketsPerMonth.toLocaleString(),
    efficiencyScore: Math.max(100 - costPerTicket * 2, 10), // Mock efficiency score
  };
};
