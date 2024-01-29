import { useEffect, useState } from "react";

export default ({ minPrice, maxPrice, onChange }) => {
  const currency = "USD";
  const steps = (maxPrice - minPrice) / 100;
  const [from, setFrom] = useState(minPrice);
  const [to, setTo] = useState(maxPrice);

  const onFromInput = (e: any) => {
    const newValue = e.target.value;
    const newFromValue = Math.min(newValue, to);
    const percentageValue = 100 * (newFromValue / (maxPrice - minPrice));
    document.getElementById("from-handle")!.style.left = percentageValue + "%";
    document.getElementById("range")!.style.left = percentageValue + "%";
    document.getElementById("range")!.style.width =
      (100 * (to - newFromValue)) / (maxPrice - minPrice) + "%";
    setFrom(newFromValue);
  };
  const onToInput = (e: any) => {
    const newValue = e.target.value;
    const newToValue = Math.max(newValue, from);
    const percentageValue = 100 * (newToValue / (maxPrice - minPrice));

    document.getElementById("to-handle")!.style.left = percentageValue + "%";
    document.getElementById("range")!.style.right = percentageValue + "%";
    document.getElementById("range")!.style.width =
      (100 * (newToValue - from)) / (maxPrice - minPrice) + "%";
    setTo(newToValue);
  };

  useEffect(() => {
    onChange({ minPrice: from, maxPrice: to });
  }, [from, to]);
  return (
    <div className="slider-container">
      <div id="slider-distance">
        <div>
          <div id="background-range" />
          <div id="range" style={{ left: "0%", right: "0%" }}></div>
          <span
            id="from-handle"
            className="thumb"
            style={{ left: "0%" }}
          ></span>
          <span
            id="to-handle"
            className="thumb"
            style={{ left: "100%" }}
          ></span>
        </div>
        <input
          id="from-input"
          type="range"
          value={from}
          max={maxPrice}
          min={minPrice}
          step={steps}
          onInput={onFromInput}
        />

        <input
          id="to-input"
          type="range"
          value={to}
          max={maxPrice}
          min={minPrice}
          step={steps}
          onInput={onToInput}
        />
      </div>
      <div className="label">
        Price:{" "}
        {new Intl.NumberFormat("sv-SE", {
          style: "currency",
          currency: currency,
        }).format(from)}{" "}
        -{" "}
        {new Intl.NumberFormat("sv-SE", {
          style: "currency",
          currency: currency,
        }).format(to)}
      </div>
    </div>
  );
};
