const CustomInput = ({ label, name, value, onChange }) => {
  return (
    <div>
      <label>{label}</label>
      <input type="text" name={name} value={value ?? ""} onChange={onChange} />
      {/* textRange */}
      <div className={`${styles.CustomInput} ${styles.textRange}`}>
        <div
          className="input-wrapper"
          style="position: relative; display: inline-block;"
        >
          <input type="text" style="padding-right: 30px;" />
          <span
            style="
                  position: absolute;
                  right: 10px;
                  top: 50%;
                  transform: translateY(-50%);
                  pointer-events: none;
                  color: #555;
                  font-size: 14px;
                "
          >
            세
          </span>
        </div>
        <div
          className="input-wrapper"
          style="position: relative; display: inline-block;"
        >
          <input type="text" style="padding-right: 30px;" />
          <span
            style="
                  position: absolute;
                  right: 10px;
                  top: 50%;
                  transform: translateY(-50%);
                  pointer-events: none;
                  color: #555;
                  font-size: 14px;
                "
          >
            세
          </span>
        </div>
      </div>
    </div>
  );
};
export default CustomInput;
