function base64ToUint8Array(base64) {
  const binaryString = window.atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

/**
 * ### bytea 파일로 다운받기
 * @param {String} fileName -다운받아질 파일 이름
 * @param {String} base64String -bytea 데이터
 */
export function downloadByteaFile(fileName, base64String) {
  try {
    const byteArray = base64ToUint8Array(base64String);
    const blob = new Blob([byteArray], { type: "application/octet-stream" });
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    setTimeout(() => {
      window.URL.revokeObjectURL(link.href);
      document.body.removeChild(link);
    }, 100);
  } catch (e) {
    alert("파일 다운로드에 실패했습니다: " + e.message);
  }
}

/**
 * ### 휴대폰 번호 포멧
 * @param {String} value
 * @returns
 */
export const formatTellNumForPhone = value => {
  const onlyNums = value.replace(/[^0-9]/g, "");
  if (onlyNums.length < 4) return onlyNums;
  if (onlyNums.length < 8) {
    return `${onlyNums.slice(0, 3)}-${onlyNums.slice(3)}`;
  }
  return `${onlyNums.slice(0, 3)}-${onlyNums.slice(3, 7)}-${onlyNums.slice(7, 11)}`;
};

/**
 * ### 집전화 번호 포멧
 * @param {String} value
 * @returns
 */
export const formatTellNumForHome = value => {
  const onlyNums = value.replace(/[^0-9]/g, "");
  if (onlyNums.startsWith("02")) {
    // 서울(02) 지역번호
    if (onlyNums.length < 3) return onlyNums;
    if (onlyNums.length < 6) {
      return `${onlyNums.slice(0, 2)}-${onlyNums.slice(2)}`;
    }
    if (onlyNums.length < 10) {
      return `${onlyNums.slice(0, 2)}-${onlyNums.slice(2, 5)}-${onlyNums.slice(5, 9)}`;
    }
    return `${onlyNums.slice(0, 2)}-${onlyNums.slice(2, 6)}-${onlyNums.slice(6, 10)}`;
  } else {
    // 그 외 지역번호(3자리)
    if (onlyNums.length < 4) return onlyNums;
    if (onlyNums.length < 7) {
      return `${onlyNums.slice(0, 3)}-${onlyNums.slice(3)}`;
    }
    if (onlyNums.length < 11) {
      return `${onlyNums.slice(0, 3)}-${onlyNums.slice(3, 7)}-${onlyNums.slice(7, 11)}`;
    }
    return `${onlyNums.slice(0, 3)}-${onlyNums.slice(3, 7)}-${onlyNums.slice(7, 11)}`;
  }
};

/**
 * ### 주민등록번호 뒷자리 마스킹 함수 (예: 1234567 → 1••••••)
 * @param {String} value
 * @returns {String}
 */
export const maskSsnBack = value => {
  console.log("maskSsnBack", value);
  const onlyNums = value?.replace(/[^0-9]/g, "") ?? "";
  if (onlyNums.length !== 7) return value; // 뒷자리 7자리가 아닐 경우 원본 반환

  const first = onlyNums[0];
  const masked = "•".repeat(6);

  return `${first}${masked}`;
};

/**
 * ### base64 문자열을 File 객체와 dataUrl로 변환
 * @param {string} base64Str - base64 인코딩된 이미지 문자열 (data:image/png;base64,xxx 일 수도 있고 순수 base64일 수도 있음)
 * @param {string} fileName - 생성할 파일 이름
 * @returns {{ file: File, dataUrl: string }}
 */
export function base64ToFile(base64Str, fileName = "image.png") {
  // dataUrl 형식인지 확인
  let mime = "";
  let base64Data = "";

  if (base64Str.startsWith("data:")) {
    const parts = base64Str.split(",");
    mime = parts[0].match(/:(.*?);/)[1];
    base64Data = parts[1];
  } else {
    mime = "image/png"; // 기본값
    base64Data = base64Str;
  }

  // base64 → byte array
  const byteString = atob(base64Data);
  const ab = new ArrayBuffer(byteString.length);
  const ia = new Uint8Array(ab);

  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }

  // File 객체 생성
  const file = new File([ab], fileName, { type: mime });

  // dataUrl 반환 (미리보기용)
  const dataUrl = `data:${mime};base64,${base64Data}`;

  return { file, dataUrl };
}
