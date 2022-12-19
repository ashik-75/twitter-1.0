import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import React from "react";

function Trend({ trend }) {
  return (
    <div className="flex justify-between">
      <div>
        <p className="text-xs text-slate-400">Trending in Bangladesh</p>
        <p className="font-bold">#{trend.title}</p>
        <p className="text-xs text-slate-400">{trend.count} Tweets</p>
      </div>
      <div>
        <EllipsisHorizontalIcon className="w-5 h-5" />
      </div>
    </div>
  );
}

export default Trend;
