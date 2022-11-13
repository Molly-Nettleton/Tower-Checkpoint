import{_ as h,o as E,c as r,E as g,M,a as o,b as t,F as l,r as _,d as u,P as p,A as n,e as a,f as v,p as T,g as w,h as y}from"./index.b9029f53.js";const x={setup(){async function s(){try{await u.getEventsForAccount()}catch(e){console.error("[GetMyEvents]",e),p.error(e)}}async function i(){try{await u.getTicketsForAccount()}catch(e){console.error("[GetMyTickets]",e),p.error(e)}}return E(()=>{s(),i()}),{account:r(()=>n.account),myEvents:r(()=>n.myEvents.filter(e=>e.creator.id==n.account.id)),myTickets:r(()=>n.myTickets),event:r(()=>n.events)}},components:{EventCard:g,MyTicketsCard:M}},f=s=>(T("data-v-3fe85f8a"),s=s(),w(),s),C=f(()=>t("div",{class:"pt-5 text-success"},[t("h5",null,"My Events")],-1)),A={class:"col-11 pt-1 d-flex flex-wrap"},S={class:"row eventrow"},F=f(()=>t("div",{class:"pt-5 text-success"},[t("h5",null,"Upcoming Events")],-1)),I={class:"row overflow-auto"};function P(s,i,e,d,B,G){const m=y("EventCard"),k=y("MyTicketsCard");return a(),o("section",null,[C,t("div",A,[t("div",S,[(a(!0),o(l,null,_(d.myEvents,c=>(a(),o("div",{key:c.id,class:"p-3 col-4"},[v(m,{event:c},null,8,["event"])]))),128))])]),F,t("div",I,[(a(!0),o(l,null,_(d.myTickets,c=>(a(),o("div",{key:c.id,class:"p-3"},[v(k,{ticket:c},null,8,["ticket"])]))),128))])])}const V=h(x,[["render",P],["__scopeId","data-v-3fe85f8a"]]);export{V as default};