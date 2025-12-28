import { useState } from "react";
import { normalizedTravelPlan } from "../data/normalized-data.js";
import PlaceTree from "./PlaceTree1";

export default function TravelPlan1() {
  const [plan] = useState(normalizedTravelPlan);
  const root = plan[0];
  const planetIds = root.childIds;

  return (
    <div className="min-h-screen bg-green-800 flex justify-center py-10">
      <div className="w-full max-w-xl bg-green-100 rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-green-800 mb-4 text-center">
          My Places to Visit
        </h2>

        <ol className="list-decimal list-inside space-y-2">
          {planetIds.map((id) => (
            <PlaceTree key={id} id={id} placesById={plan} />
          ))}
        </ol>
      </div>
    </div>
  );
}
