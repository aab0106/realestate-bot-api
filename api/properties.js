export default function handler(req, res) {
  // Dummy real estate listings
  const properties = [
    {
      id: 1,
      title: "10 Marla Plot in DHA Phase 1",
      area: "DHA Multan",
      price: "PKR 12,500,000",
      category: "Residential Plot",
      status: "Available",
      description: "Corner plot near park with registry done."
    },
    {
      id: 2,
      title: "1 Kanal Luxury House in Rumanza",
      area: "DHA Multan - Rumanza",
      price: "PKR 45,000,000",
      category: "House",
      status: "Available",
      description: "Fully furnished house near Golf Club."
    },
    {
      id: 3,
      title: "5 Marla Commercial Plot",
      area: "Business Hub",
      price: "PKR 18,000,000",
      category: "Commercial Plot",
      status: "Sold",
      description: "Ideal investment location for plaza construction."
    }
  ];

  res.status(200).json({
    company: "Bodla Group",
    updated: new Date().toISOString(),
    total: properties.length,
    listings: properties
  });
}
