import React from "react";
import Trend from "./Trend";

const trends = [
  {
    id: 1,
    title: "Bangladesh",
    count: "1M",
  },
  {
    id: 2,
    title: "GOAT",
    count: "533K",
  },
  {
    id: 3,
    title: "Messi",
    count: "873K",
  },
  {
    id: 4,
    title: "Elon",
    count: "2M",
  },
];

function Trending() {
  return (
    <div className="px-4 py-2 space-y-4 bg-slate-50 rounded-xl">
      <p className="font-bold text-xl">Trending foy You</p>

      {trends.map((trend) => (
        <Trend key={trend.id} trend={trend} />
      ))}
    </div>
  );
}

export default Trending;
