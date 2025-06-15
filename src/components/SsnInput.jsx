/* eslint-disable react/prop-types */
import { useRef } from "react";

const SsnInput = ({ value = "", onChange }) => {
  const handleChange = e => {
    // '-' 포함 허용, 숫자 및 '-'만 필터링
    const next = e.target.value.replace(/[^0-9-]/g, "").slice(0, 14);
    onChange(next);
  };

  const getMasked = val => {
    const nums = val.replace(/[^0-9]/g, "");
    if (nums.length <= 6) return nums;
    if (nums.length === 7) return `${nums.slice(0, 6)}-${nums[6]}`;
    return `${nums.slice(0, 6)}-${nums[6]}${"•".repeat(nums.length - 7)}`;
  };

  return (
    <input
      type="text"
      inputMode="numeric"
      value={getMasked(value)}
      onChange={handleChange}
      className="w-full px-2 py-1 font-mono border rounded tracking-wider"
      maxLength={14}
    />
  );
};

export default SsnInput;
