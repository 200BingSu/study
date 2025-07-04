import React, { useState } from "react";

const CustomInput = () => {
  return (
    <>
      <div>검색필터</div>
    </>
  );
};

const SendMessage = () => {
  const [dataList, setDataList] = useState([]);
  return (
    <div className="wrapper">
      <div className="searchFilterWrapper"></div>
      <div className="body flex align-center gap-2">
        <section className="dataListWrapper  border border-slate-950 flex flex-col">
          <div className="title">건강검진 접수자 목록</div>
          <div className="content">
            <div className="titleRow flex align-center">
              <div className="titleRow_item">순번</div>
              <div className="titleRow_item">읍면동</div>
              <div className="titleRow_item">접수번호</div>
              <div className="titleRow_item">신청자 이름</div>
              <div className="titleRow_item">생년월일</div>
              <div className="titleRow_item">휴대폰번호</div>
              <div className="titleRow_item">신청상태</div>
            </div>
            <div className="tableBody flex flex-col">
              {dataList.map((item, index) => {
                return (
                  <div key={index} className="tableRow flex align-center">
                    <div className="tableRow_item">{index + 1}</div>
                    <div className="tableRow_item">{item.emd}</div>
                    <div className="tableRow_item">{item.emd_row_num}</div>
                    <div className="tableRow_item">{item.application_name}</div>
                    <div className="tableRow_item">
                      {item.application_birth}
                    </div>
                    <div className="tableRow_item">{item.application_tell}</div>
                    <div className="tableRow_item">{item.state}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <section className="messageWrapper  border border-slate-950 flex flex-col">
          <div className="title px-[20px] py-[13px]">메시지 미리보기</div>
          <div className="content p-[20px]">
            <div className="mockupPhone">
              <div
                className="header flex align-center justify-end pt-[13px] pb-[9px] px-[14px]
              border border-[#BFBFBF]
              bg-[#2D3E52] rounded-t-[20px]"
              >
                LTE
              </div>
              <div
                className="body flex flex-col gap-[16px] pl-[21px] pr-[10px] py-[11px] h-[417px] overflow-y-auto
              border-r border-l border-[#BFBFBF]"
              >
                <div className="message p-[12px] bg-[#DDD] rounded-[10px] font-[12px]">
                  <p>[울진군 보건소 종합건강검진 대상자 안내]</p>
                  <p>
                    종합건강검진 지원 대상자에 선정되지 않았음을 안내드립니다.
                  </p>
                </div>
                <div className="message p-[12px] bg-[#DDD] rounded-[10px] font-[12px]">
                  <p>[울진군 보건소 종합건강검진 대상자 안내]</p>
                  <p>
                    종합건강검진 지원 대상자에 선정되지 않았음을 안내드립니다.
                  </p>
                </div>
                <div className="message p-[12px] bg-[#DDD] rounded-[10px] font-[12px]">
                  <p>[울진군 보건소 종합건강검진 대상자 안내]</p>
                  <p>
                    종합건강검진 지원 대상자에 선정되지 않았음을 안내드립니다.
                  </p>
                </div>
                <div className="message p-[12px] bg-[#DDD] rounded-[10px] font-[12px]">
                  <p>[울진군 보건소 종합건강검진 대상자 안내]</p>
                  <p>
                    종합건강검진 지원 대상자에 선정되지 않았음을 안내드립니다.
                  </p>
                </div>
                <div className="message p-[12px] bg-[#DDD] rounded-[10px] font-[12px]">
                  <p>[울진군 보건소 종합건강검진 대상자 안내]</p>
                  <p>
                    종합건강검진 지원 대상자에 선정되지 않았음을 안내드립니다.
                  </p>
                </div>
              </div>
              <div className="footer flex align-center justify-end pt-[13px] pb-[9px] px-[14px] border border-[#BFBFBF] bg-[#fff] rounded-b-[20px]">
                <button
                  type="button"
                  className="px-[15px] py-[6px] bg-[#2D3E52] text-white rounded-[43px]"
                >
                  전송
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SendMessage;
