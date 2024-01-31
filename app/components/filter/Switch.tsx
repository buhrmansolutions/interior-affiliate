const Switch = ({ label }: { label: string }) => (
  <div className="switch-container">
    {label}
    <label className="switch">
      <input type="checkbox" />
      <span className="slider round" />
    </label>
  </div>
)

export default Switch
