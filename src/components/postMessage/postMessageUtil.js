/**
 * ### 사용을 위한 useEffect 예시
 * ```javascript
 *  useEffect(() => {
 *    const handleMessage = event => {
 *     if (event.origin !== window.location.origin) return;
 *     if (event.data.type === "signatureCompleted") {
 *       console.log("부모 창에서 받은 서명:", event.data.payload);
 *       setSignature(event.data.payload);
 *     }
 *    };
 *    window.addEventListener("message", handleMessage);
 *    return () => window.removeEventListener("message", handleMessage);
 *  }, []);
 */

/**
 * 자식 창을 여는 함수
 * @param {*} childUrl - 자식 창의 URL
 * @param {*} childWindowName - 자식 창의 이름
 * @param {*} width - 자식 창의 너비
 * @param {*} height - 자식 창의 높이
 * @param {*} childWindowRef - 자식 창 참조
 */
export const openChildWindow = (
  childUrl,
  childWindowName = "childWindow", // 이름 다를 경우, url이 같아도 다른 창으로 인식됨
  width,
  height,
  childWindowRef,
) => {
  const child = window.open(
    childUrl,
    childWindowName,
    `width=${width},height=${height}`,
  );
  childWindowRef.current = child;
};

/**
 * 자식 창에 메시지를 전송하는 함수
 * @param {*} childWindowRef - 자식 창 참조
 * @param {*} messageType - 메시지 유형
 * @param {*} message - 전송할 메시지
 */
export const sendMessageToChild = (childWindowRef, messageType, message) => {
  if (childWindowRef.current) {
    childWindowRef.current.postMessage(
      { type: messageType, message: message },
      window.location.origin, // 보안을 위해 현재 오리진으로 제한
    );
  }
};

/**
 * 부모 창에 메시지를 전송하는 함수
 * @param {*} messageType - 메시지 유형
 * @param {*} message - 전송할 메시지
 * @param {*} closeWindow - 메시지 전송 후 창을 닫을지 여부 (기본값: false)
 */
export const sendMessageToParent = ({
  messageType,
  message,
  closeWindow = false,
}) => {
  if (window.opener) {
    window.opener.postMessage(
      {
        type: messageType,
        payload: message,
      },
      window.location.origin,
    );
    if (closeWindow) {
      window.close();
    }
  }
};
