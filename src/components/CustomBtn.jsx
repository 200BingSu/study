/* eslint-disable react/prop-types */
import styles from "./CustomBtn.module.scss";

const CustomBtn = ({
  label,
  filterList = [{ label: "", value: "" }],
  onClassName = styles.filterListItem,
  onChange,
}) => {
  return (
    <div className={styles.customBtn}>
      <div className={styles.label}>{label}</div>
      <div className={styles.filterList}>
        {filterList.map((item, index) => {
          return (
            <button
              type="button"
              key={index}
              className={`${styles.filterListItem} ${onClassName(styles, item)}`}
              onClick={() => onChange && onChange(item)}
            >
              {item.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};
export default CustomBtn;
