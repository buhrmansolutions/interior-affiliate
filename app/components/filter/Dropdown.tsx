import { useState } from "react";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default ({
  options: optionsProps,
  label,
  onChange,
  defaultOption,
}: {
  options: Array<string>;
  label: string;
  onChange: (value: string) => void;
  defaultOption: string;
}) => {
  const options = [defaultOption, ...optionsProps].filter(Boolean);
  const [selectedValue, setSelectedValue] = useState(null);
  const [showOptions, setShowOptions] = useState(false);

  const toggleShowOptions = () => setShowOptions(!showOptions);

  const setValue = (e) => {
    e.stopPropagation();
    setSelectedValue(e.target.value);
    onChange(e.target.value);
    toggleShowOptions();
  };

  const onBlur = (e) => {
    if (!(e.target.nodeName === "BUTTON")) setShowOptions(false);
  };

  return (
    <div>
      <button className="select" onClick={toggleShowOptions} onBlur={onBlur}>
        {selectedValue || label}
        <FontAwesomeIcon icon={faAngleDown} />
      </button>
      {showOptions && (
        <div className="options">
          {options.map((option) => (
            <button value={option} onClick={(e) => setValue(e)}>
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
