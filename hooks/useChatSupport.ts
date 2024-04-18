import { useEffect } from "react";

const CHAT_SCRIPT_URL = "//code.jivosite.com/widget/HgmcwUFVXi";

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