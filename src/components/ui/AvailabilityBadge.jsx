import React from "react";

/**
 * AvailabilityBadge
 *
 * Small pill indicating open project slots.
 *
 * Usage:
 *  <AvailabilityBadge count={2} />
 *  <AvailabilityBadge count={1} label="spot" />
 */
const AvailabilityBadge = ({ count = 2, label = "projects" }) => {
  return (
    <div className="inline-flex items-center gap-2 rounded-[8px] border border-gray-300 bg-white pl-3 pr-4 py-1.5 w-fit font-inter">
      <span className="flex items-center gap-1">
        <span className="w-[12px] h-[12px] border-[1.5px] border-indigo-800 rounded-full bg-indigo-100" />
        <span className="w-[12px] h-[12px] border-[1.5px] border-indigo-800 rounded-[2px] bg-indigo-100" />
      </span>
      <span className="text-[14px] font-medium text-gray-800">
        Accepting {count} more {label}
      </span>
    </div>
  );
};

export default AvailabilityBadge;