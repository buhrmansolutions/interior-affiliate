import { useState, FocusEvent } from "react"
import { faAngleDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Dropdown = ({
  options: optionsProps,
  label,
  onChange,
  defaultOption,
}: {
  options: Array<string>
  label: string
  onChange: (value: string) => void
  defaultOption?: string
}) => {
  const options = [defaultOption, ...optionsProps].filter(Boolean)
  const [selectedValue, setSelectedValue] = useState<string | null>(null)
  const [showOptions, setShowOptions] = useState(false)

  const toggleShowOptions = () => setShowOptions(!showOptions)

  const setValue = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation()
    setSelectedValue((e.target as HTMLInputElement).value)
    onChange((e.target as HTMLInputElement).value)
    toggleShowOptions()
  }

  const onBlur = (e: FocusEvent<HTMLButtonElement>) => {
    if (!(e.target.nodeName === "BUTTON")) setShowOptions(false)
  }

  return (
    <div>
      <button className="select" onClick={toggleShowOptions} onBlur={onBlur}>
        {selectedValue || label}
        <FontAwesomeIcon icon={faAngleDown} />
      </button>
      {showOptions && (
        <div className="options">
          {options.map((option) => (
            <button value={option} onClick={(e) => setValue(e)} key={option}>
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default Dropdown
