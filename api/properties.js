export default function handler(req, res) {
  const properties = [
    { id: 1, title: "Luxury 3-Bed in DHA", area: "DHA", price: "PKR 18,500,000", size: "1500 sqft" },
    { id: 2, title: "Corner House – Garden View", area: "Gulberg", price: "PKR 25,000,000", size: "2200 sqft" },
    { id: 3, title: "Modern 2-Bed Apartment", area: "Askari 11", price: "PKR 12,000,000", size: "900 sqft" }
  ];

  res.status(200).json(properties);
}
