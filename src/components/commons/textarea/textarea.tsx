import styled from "@emotion/styled";
import { useCallback, useRef } from "react";

const Textarea = styled.textarea`
  height: 30px;
  max-height: 15vh;
  padding-top: 7px;
  border: none;
  background: none;
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  overflow: hidden;
`;

export function TextArea() {
  const textRef = useRef<HTMLTextAreaElement>(null);

  const handleResizeHeight = useCallback(() => {
    const textArea = textRef.current;
    if (!textArea) return;
    if (!textArea.value) textArea.style.height = "30px";

    textArea.style.height = textArea.scrollHeight + "px";
  }, []);

  return <Textarea ref={textRef} onInput={handleResizeHeight} />;
}