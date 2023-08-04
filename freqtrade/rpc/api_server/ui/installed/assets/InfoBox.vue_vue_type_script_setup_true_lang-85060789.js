import{d as l,i as a,aE as $,b4 as f,z as v,o as n,c,t as d,a as _,Y as p,g as b,C as m,v as g,b as y,f as x,j as P,s as h,k as C,h as T}from"./index-aef5ad26.js";const k=["title"],M=l({__name:"DateTimeTZ",props:{date:{required:!0,type:Number},showTimezone:{required:!1,type:Boolean,default:!1},dateOnly:{required:!1,type:Boolean,default:!1}},setup(e){const t=e,o=a(()=>t.dateOnly?$(t.date):t.showTimezone?f(t.date):v(t.date)),r=a(()=>{const i=f(t.date),s=f(t.date,"UTC");return i===s?s:`${i}
${s}`});return(i,s)=>(n(),c("span",{title:r.value},d(o.value),9,k))}}),q={class:"d-inline-block"},z=l({__name:"ProfitSymbol",props:{profit:{type:Number,required:!0}},setup(e){const t=e,o=a(()=>t.profit>0);return(r,i)=>(n(),c("div",q,[_("div",{class:p(o.value?"triangle-up":"triangle-down")},null,2)]))}});const A=b(z,[["__scopeId","data-v-fbb2e096"]]),R=["title"],S={class:"d-flex justify-content-center align-items-center flex-grow-1"},w=["title"],D=l({__name:"ProfitPill",props:{profitRatio:{required:!1,default:void 0,type:Number},profitAbs:{required:!1,default:void 0,type:Number},stakeCurrency:{required:!0,type:String},profitDesc:{required:!1,default:"",type:String}},setup(e){const t=e,o=a(()=>t.profitRatio!==void 0&&t.profitRatio>0||t.profitRatio===void 0&&t.profitAbs!==void 0&&t.profitAbs>0),r=a(()=>t.profitRatio!==void 0&&t.profitAbs!==void 0?`(${m(t.profitAbs,3)})`:t.profitAbs!==void 0?t.stakeCurrency!==void 0?`${g(t.profitAbs,t.stakeCurrency,3)}`:`${m(t.profitAbs,3)}`:"");return(i,s)=>(n(),c("div",{class:p(["d-flex justify-content-between align-items-center profit-pill ps-2 pe-1",o.value?"profit-pill-profit":""]),title:e.profitDesc},[y(A,{profit:(e.profitRatio||e.profitAbs)??0},null,8,["profit"]),_("div",S,[x(d(e.profitRatio!==void 0?P(h)(e.profitRatio,2):"")+" ",1),r.value?(n(),c("span",{key:0,class:p(["ms-1",e.profitRatio?"small":""]),title:e.stakeCurrency},d(r.value),11,w)):C("",!0)])],10,R))}});const B=b(D,[["__scopeId","data-v-c5b86aec"]]),W=l({__name:"TradeProfit",props:{trade:{required:!0,type:Object},mode:{required:!1,default:"default",type:String}},setup(e){const t=e,o={default:"Current profit",total:"Total profit",realized:"Realized profit"},r=a(()=>{switch(t.mode){case"default":return t.trade.profit_ratio;case"total":return t.trade.total_profit_ratio;case"realized":return t.trade.realized_profit_ratio;default:return}}),i=a(()=>{switch(t.mode){case"default":return t.trade.profit_abs;case"total":return t.trade.total_profit_abs;case"realized":return t.trade.realized_profit;default:return}}),s=a(()=>{let u=`${o[t.mode]}: ${r.value?h(r.value):""} (${i.value})`;return u+=`
Open since: ${v(t.trade.open_timestamp)}`,u});return(u,E)=>(n(),T(B,{"profit-ratio":r.value,"profit-abs":i.value,"profit-desc":s.value,"stake-currency":e.trade.quote_currency||"USDT"},null,8,["profit-ratio","profit-abs","profit-desc","stake-currency"]))}}),N={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},V=_("path",{fill:"currentColor",d:"M11 9h2V7h-2m1 13c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m-1 15h2v-6h-2v6Z"},null,-1),j=[V];function O(e,t){return n(),c("svg",N,j)}const I={name:"mdi-information-outline",render:O},U=["title"],Y=l({__name:"InfoBox",props:{hint:{type:String,required:!0}},setup(e){return(t,o)=>{const r=I;return n(),c("div",{title:e.hint},[y(r)],8,U)}}});export{B as P,M as _,W as a,Y as b};
//# sourceMappingURL=InfoBox.vue_vue_type_script_setup_true_lang-85060789.js.map