import dayjs from "dayjs";
import styles from "./Privacy.module.scss";

const Privacy = ({ businessYear, fortyYear }) => {
  return (
    <div className={styles.wrapper}>
      <section className={styles.container}>
        <h1 className={styles.title}>
          울진군 지역주민 종합건강검진 신청서 (앞면)
        </h1>
        <div className={styles.frontTable}>
          <div className={styles.formNum}>
            <p>◯ 번호 :</p>
            <p className={styles.underLine}></p>
          </div>
          <div className={styles.table}>
            <div className={styles.tableRow}>
              <div className={styles.label}>
                <p>신청인</p>
              </div>
              <div className={styles.content}>
                <div className={styles.contentRow}>
                  <div className={styles.contentRowItem}>
                    <div className={styles.contentRowItem_label}>성명</div>
                    <div className={styles.contentRowItem_content}></div>
                  </div>
                  <div className={styles.contentRowItem}>
                    <div className={styles.contentRowItem_label}>성명</div>
                    <div className={styles.contentRowItem_content}>
                      <p>성명</p>
                    </div>
                  </div>
                  <div className={styles.contentRowItem}>
                    <div className={styles.contentRowItem_content}>
                      <p>남</p>
                      <p>/</p>
                      <p>여</p>
                    </div>
                  </div>
                </div>
                <div className={styles.contentRow}>
                  <div className={styles.contentRowItem}>
                    <div className={styles.contentRowItem_label}>주소</div>
                    <div className={styles.contentRowItem_content}>
                      <p>경북 울진군</p>
                    </div>
                  </div>
                  <div className={styles.contentRowItem}>
                    <div className={styles.contentRowItem_content}>
                      <p className={styles.underline}></p>
                      <p>리</p>
                    </div>
                  </div>
                </div>
                <div className={styles.contentRow}>
                  <div className={styles.contentRowItem}>
                    <div className={styles.contentRowItem_label}>연락처</div>
                    <div className={styles.contentRowItem_content}>
                      <div className={styles.contentRowItem_content_item}>
                        <div className={styles.item_label}>자택</div>
                        <div className={styles.item_content}></div>
                      </div>
                      <div className={styles.contentRowItem_content_item}>
                        <div className={styles.item_label}>휴대폰</div>
                        <div className={styles.item_content}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.tableRow}>
              <div className={styles.label}>
                <p>신청기준</p>
              </div>
              <div className={styles.content}>
                <div className={styles.sentence}>
                  <p>①</p>
                  <p>{businessYear}년 1월 1일 이전, 주민등록지 울진군</p>
                </div>
                <div className={styles.sentence}>
                  <p>②</p>
                  <p>
                    {fortyYear}년 12월 31일 이전 출생자(홀수년도)
                    <br />
                    단, 직장인 중 종합건강검진 지원자 제외
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.tableRow}>
              <div className={styles.label}>
                <p>우선순위</p>
              </div>
              <div className={styles.content}>
                <div className={styles.checkList}>
                  <div className={styles.checkListItem}>
                    <div className={styles.checkBox}></div>
                    <p>한울 건강검진 미수검자</p>
                  </div>
                </div>
                <div className={styles.checkList}>
                  <div className={styles.checkListItem}>
                    <div className={styles.checkBox}></div>
                    <p>국민기초생활보장수급자</p>
                  </div>
                  <div className={styles.checkListItem}>
                    <div className={styles.checkBox}></div>
                    <p>차상위계층</p>
                  </div>
                  <div className={styles.checkListItem}>
                    <div className={styles.checkBox}></div>
                    <p>장애인</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.tableRow}>
              <div className={styles.label}>
                <p>희망</p>
                <p>검진병원</p>
                <p>(0)</p>
              </div>
              <div className={styles.content}>
                <div className={styles.hospitalList}>
                  <div className={styles.hospital}>
                    <div className={styles.titleBox}>
                      <p className={styles.hospitalName}>강릉 아산병원</p>
                    </div>
                    <div className={styles.checkBox}></div>
                  </div>
                  <div className={styles.hospital}>
                    <div className={styles.titleBox}>
                      <p className={styles.hospitalName}>강릉 아산병원</p>
                    </div>
                    <div className={styles.checkBox}></div>
                  </div>
                  <div className={styles.hospital}>
                    <div className={styles.titleBox}>
                      <p className={styles.hospitalName}>강릉 아산병원</p>
                    </div>
                    <div className={styles.checkBox}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.tableRow}>
              <div className={styles.label}>
                <p>구비서류</p>
              </div>
              <div className={styles.content}>
                <div className={styles.sentence}>
                  <p>•</p>
                  <p>
                    주민등록초본({businessYear}년 1월 1일 이전, 울진군 거주사실
                    기재)
                  </p>
                </div>
                <div className={styles.sentence}>
                  <p>※</p>
                  <p>모든 서류는 주민등록번호 뒤 6자리는 비식별화하여 제출</p>
                </div>
              </div>
            </div>
            <div className={styles.tableRow}>
              <div className={styles.signContainer}>
                <div className={styles.sentence}>
                  <p>기재 사실 오류에 대한 책임은 본인에게 있음을 인지하며,</p>
                  <p>
                    한울 본부 지원 울진군 지역주민 종합건강검진사업의 대상자로
                    신청합니다.
                  </p>
                  <p className={styles.date}>
                    {businessYear}.{dayjs().format("MM.DD")}
                  </p>
                </div>
                <div className={styles.signWrapper}>
                  <div className={styles.signItem}>
                    <div className={styles.signLabel}>
                      <p>신청자</p>
                      <p>:</p>
                    </div>
                    <div className={styles.signContent}>
                      <div className={styles.sign}>
                        (서명)<div className={styles.signImg}></div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.signItem}>
                    <div className={styles.signLabel}>
                      <p>공무원 확인</p>
                      <p>:</p>
                    </div>
                    <div className={styles.signContent}>
                      <div className={styles.sign}>
                        (서명)<div className={styles.signImg}></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.fromDiv}>
                  <p>울진군 지역사회보장협의체</p>
                  <p>귀하</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.container}>
        <h1 className={styles.title}>
          개인정보 수집·이용·제3자 제공 동의서 (뒷면)
        </h1>
        <div className={styles.backTable}></div>
      </section>
      <section className={styles.signPadContainer}></section>
    </div>
  );
};
export default Privacy;
