import{o as s,c as n,a as l,d as v,t as p,b as d,g,u as w,r as x,i as T,w as f,k as c,h as u,j as a,W as N,aX as S,q,Q as I,U as j,V as E,$ as F,f as P}from"./index-aef5ad26.js";import{_ as U,a as z}from"./InfoBox.vue_vue_type_script_setup_true_lang-85060789.js";import{T as O}from"./TradeDetail-ad08c407.js";const A={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},H=l("path",{fill:"currentColor",d:"M20 11v2H8l5.5 5.5l-1.42 1.42L4.16 12l7.92-7.92L13.5 5.5L8 11h12Z"},null,-1),M=[H];function Q(t,e){return s(),n("svg",A,M)}const W={name:"mdi-arrow-left",render:Q},X={class:"d-flex"},Z={class:"px-1 d-flex flex-row flex-fill text-start justify-content-between align-items-center"},G={class:"me-1 fw-bold"},J={class:"text-secondary"},K=v({__name:"CustomTradeListEntry",props:{trade:{type:Object,required:!0},stakeCurrencyDecimals:{type:Number,required:!0},showDetails:{type:Boolean,default:!1}},setup(t){return(e,y)=>(s(),n("div",X,[l("div",Z,[l("span",null,[l("span",G,p(t.trade.pair),1),l("small",J,"(#"+p(t.trade.trade_id)+")",1)]),l("small",null,[d(U,{date:t.trade.open_timestamp,"date-only":!0},null,8,["date"])])]),d(z,{class:"col-5",trade:t.trade},null,8,["trade"])]))}});const R=g(K,[["__scopeId","data-v-1aed16f9"]]),Y={class:"h-100 overflow-auto p-1"},ee={key:0,class:"mt-5"},te={class:"w-100 d-flex justify-content-between mt-1"},ae=v({__name:"CustomTradeList",props:{trades:{required:!0,type:Array},title:{default:"Trades",type:String},stakeCurrency:{required:!1,default:"",type:String},activeTrades:{default:!1,type:Boolean},showFilter:{default:!1,type:Boolean},multiBotView:{default:!1,type:Boolean},emptyText:{default:"No Trades to show.",type:String},stakeCurrencyDecimals:{default:3,type:Number}},setup(t){const e=t,y=w(),r=x(1),_=x(""),i=e.activeTrades?200:25,k=T(()=>e.trades.length),C=T(()=>e.trades.slice((r.value-1)*i,r.value*i)),b=h=>{y.activeBot.setDetailTrade(h)};return(h,m)=>{const $=E,L=N,V=S,D=q;return s(),n("div",Y,[d(L,{id:"tradeList"},{default:f(()=>[(s(!0),n(I,null,j(C.value,o=>(s(),u($,{key:o.trade_id,class:"border border-secondary rounded my-05 px-1",onClick:re=>b(o)},{default:f(()=>[d(R,{trade:o,"stake-currency-decimals":t.stakeCurrencyDecimals},null,8,["trade","stake-currency-decimals"])]),_:2},1032,["onClick"]))),128))]),_:1}),t.trades.length==0?(s(),n("span",ee,p(t.emptyText),1)):c("",!0),l("div",te,[t.activeTrades?c("",!0):(s(),u(V,{key:0,modelValue:r.value,"onUpdate:modelValue":m[0]||(m[0]=o=>r.value=o),"total-rows":k.value,"per-page":a(i),"aria-controls":"tradeList"},null,8,["modelValue","total-rows","per-page"])),t.showFilter?(s(),u(D,{key:1,modelValue:_.value,"onUpdate:modelValue":m[1]||(m[1]=o=>_.value=o),type:"text",placeholder:"Filter",size:"sm",style:{width:"unset"}},null,8,["modelValue"])):c("",!0)])])}}});const B=g(ae,[["__scopeId","data-v-8b275c08"]]),se={key:2,class:"d-flex flex-column"},de=v({__name:"TradesList",props:{history:{default:!1,type:Boolean}},setup(t){const e=w();return(y,r)=>{const _=W,i=F;return s(),n("div",null,[!t.history&&!a(e).activeBot.detailTradeId?(s(),u(B,{key:0,trades:a(e).activeBot.openTrades,title:"Open trades","active-trades":!0,"stake-currency-decimals":a(e).activeBot.stakeCurrencyDecimals,"empty-text":"No open Trades."},null,8,["trades","stake-currency-decimals"])):c("",!0),t.history&&!a(e).activeBot.detailTradeId?(s(),u(B,{key:1,trades:a(e).activeBot.closedTrades,title:"Trade history","stake-currency-decimals":a(e).activeBot.stakeCurrencyDecimals,"empty-text":"No closed trades so far."},null,8,["trades","stake-currency-decimals"])):c("",!0),a(e).activeBot.detailTradeId&&a(e).activeBot.tradeDetail?(s(),n("div",se,[d(i,{size:"sm",class:"align-self-start mt-1 ms-1",onClick:r[0]||(r[0]=k=>a(e).activeBot.setDetailTrade(null))},{default:f(()=>[d(_),P(" Back")]),_:1}),d(O,{trade:a(e).activeBot.tradeDetail,"stake-currency":a(e).activeBot.stakeCurrency},null,8,["trade","stake-currency"])])):c("",!0)])}}});export{de as default};
//# sourceMappingURL=TradesList-66ad7b32.js.map