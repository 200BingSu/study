const handleSaveSign = () => {
  const signApplyPad = signApplyPadRef.current;
  const signAgentPad = signAgentPadRef.current;
  if (signApplyPad.isEmpty() || signAgentPad.isEmpty()) {
    alert("서명을 먼저 해주세요.");
    return;
  }
  signApplyPad.canvas.toBlob(blob => {
    if (blob) {
      const file = new File([blob], "sign_apply.png", { type: "image/png" });
      setForm(prev => ({ ...prev, sign_apply: file }));
    }
  }, "image/png");
  signAgentPad.canvas.toBlob(blob => {
    if (blob) {
      const file = new File([blob], "sign_agent.png", { type: "image/png" });
      setForm(prev => ({ ...prev, sign_agent: file }));
    }
  }, "image/png");
};