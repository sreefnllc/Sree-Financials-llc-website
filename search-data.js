// search-data.js
// Simple local search index for Sree Financials LLC (static site)

window.SREE_SEARCH_INDEX = [
  // Core pages
  { title: "Home", url: "index.html", tags: ["home", "sree financials", "bridgewater", "nj", "whatsapp"] },
  { title: "Services", url: "services.html", tags: ["services", "financial planning", "investment", "retirement", "wealth", "health insurance", "medicare"] },
  { title: "Contact", url: "contact.html", tags: ["contact", "phone", "email", "address", "appointment", "whatsapp"] },

  // Service pages
  { title: "Financial Planning", url: "financial-planning.html", tags: ["financial planning", "planning", "goals", "budget", "cash flow", "roadmap", "cfpb", "consumerfinance"] },
  { title: "Investment Management", url: "investment-management.html", tags: ["investment", "investing", "diversification", "risk", "review", "strategy", "investor.gov", "sec"] },
  { title: "Retirement Planning", url: "retirement-planning.html", tags: ["retirement", "income", "timeline", "social security", "ssa", "irs"] },
  { title: "Wealth Management", url: "wealth-management.html", tags: ["wealth", "holistic", "assets", "long-term", "planning"] },
  { title: "Health Insurance", url: "health-insurance.html", tags: ["health insurance", "coverage", "enrollment", "healthcare.gov", "get covered nj", "marketplace"] },
  { title: "Medicare Planning", url: "medicare-planning.html", tags: ["medicare", "enrollment", "parts", "coverage", "medicare.gov"] },

  // FAQs / common questions (link to the most relevant page)
  { title: "FAQ: How do I get started?", url: "index.html#faq", tags: ["faq", "get started", "begin", "first steps", "consultation"] },
  { title: "FAQ: Do you help with Medicare and health insurance?", url: "index.html#faq", tags: ["faq", "medicare", "health insurance", "help"] },
  { title: "FAQ: Can I book a consultation on WhatsApp?", url: "contact.html", tags: ["faq", "whatsapp", "book", "appointment", "consultation"] },

  // Official resources section
  { title: "Official Resource: Investor.gov", url: "index.html#resources", tags: ["investor.gov", "sec", "investor education", "official resource"] },
  { title: "Official Resource: Medicare.gov", url: "index.html#resources", tags: ["medicare.gov", "official resource", "medicare"] },
  { title: "Official Resource: HealthCare.gov", url: "index.html#resources", tags: ["healthcare.gov", "marketplace", "official resource"] },
  { title: "Official Resource: Social Security (Retirement)", url: "index.html#resources", tags: ["ssa", "social security", "retirement", "official resource"] }
];
