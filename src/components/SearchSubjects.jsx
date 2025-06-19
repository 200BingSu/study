import CustomInput from "./CustomInput";
import styles from "./SearchSubjects.module.css";
const SearchSubjects = () => {
  return (
    <div className={styles.formWrapper}>
      <div className={styles.form}>
        <div className={styles.formRow}>
          <div className={styles.formRow_item}>
            <CustomInput type="title" label="사업명" />
          </div>
        </div>
        <div className={styles.formRow}>
          <div className={styles.formRow_item}>
            <CustomInput type="selectList" label="검진병원" />
            <CustomInput type="selectList" label="행정읍/면/동" />
          </div>
        </div>
        <div className={styles.formRow}>
          <div className={styles.formRow_item}>
            <CustomInput
              type="text"
              label="신청자 이름"
              placeholder="이름을 입력하세요"
            />
            <CustomInput
              type="selectList"
              label="성별"
              placeholder="성별을 선택하세요"
            />
            <CustomInput type="textRange" label="나이" />
            <div className={styles.btnWrapper}>
              <CustomBtn />
              <CustomBtn />
            </div>
          </div>
        </div>
        <div className={styles.formRow}>
          <div className={styles.formRow_item}>
            <CustomInput type="filterList" label="검색필터" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default SearchSubjects;
