// App.jsx
import React from 'react';
import { FloatingWhatsApp } from 'react-floating-whatsapp';

const WhatsappPlugin = () => {
  return (
    
      <FloatingWhatsApp
        phoneNumber="919599579007"          // ✅ Your WhatsApp number with country code
        accountName="SharmaJEE Support Team"       // ✅ Display name
        avatar="/fevicon.png"  // ✅ Custom avatar (optional)
        chatMessage="Hello! 👋 How can I help you today?" // ✅ Initial chat message
        statusMessage="Expect reply in 10 Minutes"  // ✅ Status below name
        placeholder="Type your message here..."          // ✅ Input placeholder
        darkMode={false}                     // ✅ Light/dark theme
        allowClickAway={true}                // ✅ Close when clicking outside
        notification={true}                  // ✅ Show popup notification
        notificationSound={true}             // ✅ Play sound on popup
        messageDelay={2000}                  // ✅ Delay before chat bubble appears (ms)
                               // ✅ Set z-index
      />
  );
};

export default WhatsappPlugin;
