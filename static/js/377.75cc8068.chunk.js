"use strict";(self.webpackChunkreact_kabzda_1=self.webpackChunkreact_kabzda_1||[]).push([[377],{1377:function(e,s,a){a.r(s),a.d(s,{default:function(){return V}});var r=a(8649),n=a(1413),t=(a(2791),"Messages_title__xxcPb"),i="Messages_dialogsContent__d9Y7D",l="Messages_users__lh1u0",d="Messages_messages__q35da",u="Messages_messagesValue__FaYeb",c="Messages_messagesInput__D5gif",m="Messages_textareaError__03pvP",g="Messages_errorMessage__8EjtL",_="Messages_messageSubmit__xlFQh",o=a(1087),x="User_user__ll1wX",v="User_active__CCkho",h=a(184);function f(e){return(0,h.jsx)("div",{className:x,children:(0,h.jsx)(o.OL,{to:"/messages/".concat(e.userId),className:function(e){return e.isActive?v:""},children:e.userName})})}var j="Message_message__jtINc";function M(e){return(0,h.jsx)("div",{className:j,children:e.messageText})}var N=a(3896),b=function(e){var s,a=(0,N.cI)({mode:"all"}),r=a.register,t=a.handleSubmit,i=a.formState,l=i.errors,d=i.isValid,u=a.reset;return(0,h.jsxs)("form",{onSubmit:t((function(s){e.addMessage(s.messageValue),u()})),children:[(0,h.jsx)("textarea",(0,n.Z)({className:null!==l&&void 0!==l&&l.messageValue?m:"",rows:"3",cols:100,maxLength:"301",placeholder:"Enter your message"},r("messageValue",{required:"\u041f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0432\u0432\u043e\u0434\u0430!",minLength:{value:3,message:"\u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u0430 3 \u0441\u0438\u043c\u0432\u043e\u043b\u0430!"},maxLength:{value:300,message:"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u0430 250 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432!"}}))),(0,h.jsx)("div",{className:g,children:(null===l||void 0===l?void 0:l.messageValue)&&(0,h.jsx)("p",{children:(null===l||void 0===l||null===(s=l.messageValue)||void 0===s?void 0:s.message)||"\u041d\u0435\u043f\u0440\u0438\u0434\u0432\u0438\u0434\u0435\u043d\u0430\u044f \u041e\u0448\u0438\u0431\u043a\u0430"})}),(0,h.jsx)("input",{value:"",type:"submit",disabled:!d,className:_})]})};var p=a(3531),I=a(5927),k=(0,a(7781).qC)((0,p.$j)((function(e){return{dataUserInfo:e.messagesPage.dataUserInfo,dataMessage:e.messagesPage.dataMessage}}),{addMessage:function(e){return(0,r.k)(e)}}),I.D)((function(e){var s=e.dataUserInfo.map((function(e,s){return(0,h.jsx)(f,{userId:e.id,userName:e.name},s)})),a=e.dataMessage.map((function(e,s){return(0,h.jsx)(M,{messageId:e.id,messageText:e.text},s)}));return(0,h.jsxs)("div",{className:"dialogs",children:[(0,h.jsx)("h2",{className:t,children:"DIALOGS"}),(0,h.jsxs)("div",{className:i,children:[(0,h.jsx)("div",{className:l,children:s}),(0,h.jsxs)("div",{className:d,children:[(0,h.jsx)("div",{className:u,children:a}),(0,h.jsx)("div",{className:c,children:(0,h.jsx)(b,(0,n.Z)({},e))})]})]})]})})),V=k}}]);
//# sourceMappingURL=377.75cc8068.chunk.js.map