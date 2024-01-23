import { useState } from "react";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default ({
  options: optionsProps,
  label,
}: {
  options: Array<string>;
  label: string;
}) => {
  const options = ["all", ...optionsProps];
  const [selectedValue, setSelectedValue] = useState(null);
  const [showOptions, setShowOptions] = useState(false);

  const toggleShowOptions = () => setShowOptions(!showOptions);

  const setValue = (e) => {
    setSelectedValue(e.target.value);
    toggleShowOptions();
  };

  const onBlur = (e) => {
    if (e.relatedTarget && options.includes(e.relatedTarget.value)) {
      const value = e.relatedTarget.value;
      setSelectedValue(value === "all" ? undefined : value);
    }
    setShowOptions(false);
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
            <button
              value={option}
              onClick={(e) => {
                console.log("option", e);
                setValue(e);
              }}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
