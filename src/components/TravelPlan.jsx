import { useState } from "react";
import { initialTravelPlan } from "../data/data.js";
import PlaceTree from "./PlaceTree";

export default function TravelPlan() {
  const [plan] = useState(initialTravelPlan);
  const places = plan.childPlaces;

  return (
    <div className="min-h-screen bg-red-100 flex justify-center items-start py-12">
      <div className="w-full max-w-xl bg-white rounded-xl shadow-md px-12 py-8">
        <h2 className="text-2xl font-bold text-red-800 mb-4 text-center">
          My Places to Visit
        </h2>
        <ol className="list-decimal list-insidespace-y-2">
          {places.map((place) => (
            <PlaceTree key={place.id} place={place} />
          ))}
        </ol>
      </div>
    </div>
  );
}
