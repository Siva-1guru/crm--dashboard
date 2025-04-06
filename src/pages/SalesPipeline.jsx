// src/pages/SalesPipeline.jsx
// import { Card } from "@/components/ui/card";
// import { Card } from "/components/ui/Card";  // Correct relative path
// import { Card } from "../../components/ui/Card";  // Correct relative path
import { Card } from "@/components/ui/Card";

import { useState } from "react";

const SalesPipeline = () => {
  const [deals, setDeals] = useState([
    { id: 1, stage: "Lead", name: "John Doe" },
    { id: 2, stage: "Negotiation", name: "Jane Smith" },
  ]);

  return (
    <div className="grid grid-cols-3 gap-4">
      {["Lead", "Negotiation", "Closed"].map((stage) => (
        <Card key={stage}>
          <h2>{stage}</h2>
          {deals.filter((deal) => deal.stage === stage).map((deal) => (
            <div key={deal.id}>{deal.name}</div>
          ))}
        </Card>
      ))}
    </div>
  );
};

export default SalesPipeline;
