import React, { useState } from 'react';

export default function NumberItemsButton() {
  const [increment, setIncrement] = useState(0);

  const addIncrement = () => {
    setIncrement(increment + 1);
  }

  const removeIncrement = () => {
    setIncrement(increment > 0 ? increment -1 : 0);
  }

  return (
    <button className="flex gap-2 w-full justify-between font-neue text-link font-regular">
      <div onClick={removeIncrement} className="border  border-[#E5E5E5] w-1/6 h-full hover:bg-[#E5E5E5] transition-colors duration-75">
        -
      </div>
      <div className="border border-[#E5E5E5] h-full w-1/6 flex flex-1 justify-center">
        {increment}
      </div>
      <div onClick={addIncrement} className="border border-[#E5E5E5] w-1/6 h-full hover:bg-[#E5E5E5] transition-colors duration-75">
        +
      </div>
    </button>
  );
}
