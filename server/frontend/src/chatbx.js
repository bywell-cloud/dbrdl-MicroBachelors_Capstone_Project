import './bootstrap.min.css';
import React, { useEffect, useState } from "react";
import HomePage from './homepage.js';
import ContactUs from './contactus.js';



function Chatbx()
 {
    useEffect(() => {
        window.watsonAssistantChatOptions = {
            integrationID: "e6c69a1b-9fff-4664-ac80-619d30062dcc", // The ID of this integration.
            region: "eu-gb", // The region your integration is hosted in.
            serviceInstanceID: "b011b788-c5c4-4ea0-9af0-7f546ecc8216", // The ID of your service instance.
            onLoad: function(instance) { instance.render(); }
        };
        setTimeout(function(){
            const t=document.createElement('script');
            t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js"
            document.head.appendChild(t);
        });
    });
    
  

    return (
      <div>
        
      </div>
    );
  }


export default Chatbx;
