import { useEffect } from "react";

const CHAT_SCRIPT_URL = "//code.tidio.co/grs4q7oajazzzjh5jg3fcwqccuamwfm7.js";

export const useChatSupport = () => {
  useEffect(() => {
    const loadChatScript = () => {
      const chatScript = document.createElement("script");
      chatScript.async = true;
      chatScript.src = CHAT_SCRIPT_URL;

      document.body.appendChild(chatScript);
    };

    // Load chat script on mount
    loadChatScript();

    // Cleanup function to remove script on component unmount
    return () => {
      const existingScript = document.querySelector(
        `script[src="${CHAT_SCRIPT_URL}"]`
      );
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);
};

