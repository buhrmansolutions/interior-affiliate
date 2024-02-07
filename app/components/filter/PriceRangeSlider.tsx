import { useEffect, useState, MouseEventHandler } from "react"

type Props = {
  minPrice: number
  maxPrice: number
  onChange: ({
    minPrice,
    maxPrice,
  }: {
    minPrice: number
    maxPrice: number
  }) => void
}

const PriceRangeSlider = ({ minPrice, maxPrice, onChange }: Props) => {
  const currency = "SEK"
  const steps = (maxPrice - minPrice) / 100
  const [from, setFrom] = useState(minPrice)
  const [to, setTo] = useState(maxPrice)

  const onSliderClick: MouseEventHandler<HTMLDivElement> = (e) => {
    if ((e.target as HTMLDivElement).id === "slider-distance") {
      const OFFSET_LEFT = window.innerWidth < 1080 ? 20 : 100
      const position = e.clientX - OFFSET_LEFT
      const width = (e.target as HTMLDivElement).offsetWidth
      const value = minPrice + (position / width) * (maxPrice - minPrice)

      const shouldChangeFrom =
        Math.abs(from - value) < Math.abs(to - value) ||
        (from === to && value < from)
      if (shouldChangeFrom) {
        setFrom(value)
        const percentageValue = Math.max(0, 100 * (position / width))

        document.getElementById("from-handle")!.style.left =
          percentageValue + "%"
        document.getElementById("range")!.style.left = percentageValue + "%"
        document.getElementById("range")!.style.width =
          (100 * (to - value)) / (maxPrice - minPrice) + "%"
      } else {
        setTo(value)
        const percentageValue = Math.min(100, 100 * (position / width))

        document.getElementById("to-handle")!.style.left = percentageValue + "%"
        document.getElementById("range")!.style.right = percentageValue + "%"
        document.getElementById("range")!.style.width =
          (100 * (value - from)) / (maxPrice - minPrice) + "%"
      }
    }
  }

  const onFromInput = (e: any) => {
    const newValue = e.target.value
    const newFromValue = Math.min(newValue, to)
    const percentageValue =
      100 * ((newFromValue - minPrice) / (maxPrice - minPrice))

    document.getElementById("from-handle")!.style.left = percentageValue + "%"
    document.getElementById("range")!.style.left = percentageValue + "%"
    document.getElementById("range")!.style.width =
      (100 * (to - newFromValue)) / (maxPrice - minPrice) + "%"
    setFrom(newFromValue)
  }
  const onToInput = (e: any) => {
    const newValue = e.target.value
    const newToValue = Math.max(newValue, from)
    const percentageValue =
      100 * ((newToValue - minPrice) / (maxPrice - minPrice))

    document.getElementById("to-handle")!.style.left = percentageValue + "%"
    document.getElementById("range")!.style.right = percentageValue + "%"
    document.getElementById("range")!.style.width =
      (100 * (newToValue - from)) / (maxPrice - minPrice) + "%"
    setTo(newToValue)
  }

  useEffect(() => {
    onChange({ minPrice: from, maxPrice: to })
  }, [from, to, onChange])
  return (
    <div className="slider-container">
      <div id="slider-distance" onClick={onSliderClick}>
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
        Pris:{" "}
        {new Intl.NumberFormat("sv-SE", {
          style: "currency",
          currency: currency,
          minimumFractionDigits: 0,
          maximumFractionDigits: 2,
        }).format(from)}{" "}
        -{" "}
        {new Intl.NumberFormat("sv-SE", {
          style: "currency",
          currency: currency,
          minimumFractionDigits: 0,
          maximumFractionDigits: 2,
        }).format(to)}
      </div>
    </div>
  )
}

export default PriceRangeSlider
