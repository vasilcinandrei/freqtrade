import{o as d,c as y,a as _,aH as we,u as G,r as x,b8 as ne,b9 as ae,i as B,Z as W,ba as L,bb as $e,A as le,d as E,bc as re,bd as K,h as b,w as p,H as Se,t as O,j as n,k,q as Q,a3 as ue,X as D,S as ce,b as c,Y as R,U as A,Q as H,be as Be,aK as de,bf as me,bg as _e,f as j,$ as J,aN as Pe,aO as Ee,aR as Ue,bh as Ne,g as pe,x as fe,y as Ie,bi as se,bj as ze,V as Te,W as Le,bk as Me,a2 as Oe,J as Re,p as Fe,e as je}from"./index-aef5ad26.js";import{a as ve,_ as Ae}from"./EditValue.vue_vue_type_script_setup_true_lang-09e99154.js";import"./plus-box-outline-825c8b7c.js";var M=(u=>(u.string="string",u.number="number",u.boolean="boolean",u.option="option",u))(M||{});const He={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},De=_("path",{fill:"currentColor",d:"m17 12l-5 5v-3H8v-4h4V7l5 5M3 19V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2m2 0h14V5H5v14Z"},null,-1),Je=[De];function qe(u,o){return d(),y("svg",He,Je)}const Ze={name:"mdi-arrow-right-bold-box-outline",render:qe},q=we("pairlistConfig",()=>{var Y,ee,te,oe;const u=G(),o=x(!1),e=x(),a=x(((Y=u.activeBot)==null?void 0:Y.stakeCurrency)??"USDT"),v=x([]),g=x(!1),r=x({exchange:((ee=u.activeBot)==null?void 0:ee.botState.exchange)??"",trade_mode:{trading_mode:((te=u.activeBot)==null?void 0:te.botState.trading_mode)??ne.SPOT,margin_mode:((oe=u.activeBot)==null?void 0:oe.botState.trading_mode)===ne.FUTURES?ae.ISOLATED:ae.NONE}}),s=x(P()),t=x([]),m=x(""),w=B(()=>{var l;return!!((l=s.value.pairlists[0])!=null&&l.is_pairlist_generator)}),C=B(()=>w.value&&s.value.pairlists.length>0),U=B(()=>JSON.stringify(X(),null,2)),N=l=>t.value.findIndex(i=>i.name===l)>-1;function $(l,i){l=structuredClone(L(l)),l.showParameters=!1,l.id||(l.id=Date.now().toString(36)+Math.random().toString(36).substring(2));for(const h in l.params)l.params[h].value=$e(l.params[h].default)?l.params[h].default:"";s.value.pairlists.splice(i,0,l)}function S(l){s.value.pairlists.splice(l,1)}function I(l=""){const i=t.value.findIndex(h=>h.name===s.value.name);s.value.name=l,i>-1?t.value[i]=structuredClone(L(s.value)):t.value.push(structuredClone(L(s.value)))}function z(l){const i=P({name:l});t.value.push(i),s.value=structuredClone(i)}function F(l=""){const i=P({name:l,pairlists:L(s.value.pairlists),blacklist:L(s.value.blacklist)});t.value.push(i),s.value=structuredClone(i)}function f(){const l=t.value.findIndex(i=>i.name===s.value.name);l>-1&&(t.value.splice(l,1),V(t.value.length>0?t.value[0].name:"default"))}function V(l){const i=t.value.find(h=>l===h.name);i?s.value=structuredClone(L(i)):z(l)}function P({name:l="",pairlists:i=[],blacklist:h=[]}={}){return{name:l,pairlists:i,blacklist:h}}function he(){s.value.blacklist.push("")}function xe(l){s.value.blacklist.splice(l,1)}function Ce(l){const i=t.value.find(h=>h.name===l);i&&(s.value.blacklist=structuredClone(L(i.blacklist)))}async function Ve(){const l=ke();o.value=!0;try{const{job_id:i}=await u.activeBot.evaluatePairlist(l);console.log("jobId",i),e.value=setInterval(async()=>{if(!(await u.activeBot.getBackgroundJobStatus(i)).running){clearInterval(e.value);const T=await u.activeBot.getPairlistEvalResult(i);o.value=!1,T.status==="success"?v.value=T.result.whitelist:T.error&&(le(T.error,"danger"),o.value=!1)}},1e3)}catch{le("Evaluation failed","danger"),o.value=!1}}function ye(l,i){return l===M.number?Number(i):l===M.boolean?!!i:String(i)}function ke(){const i={pairlists:X(),stake_currency:a.value,blacklist:s.value.blacklist};return g.value&&(console.log("setting custom exchange props"),i.exchange=r.value.exchange,i.trading_mode=r.value.trade_mode.trading_mode,i.margin_mode=r.value.trade_mode.margin_mode),i}function X(){const l=[];return s.value.pairlists.forEach(i=>{const h={method:i.name};for(const T in i.params){const Z=i.params[T];Z.value&&(h[T]=ye(Z.type,Z.value))}l.push(h)}),l}return W(()=>s.value,()=>{m.value=s.value.name},{deep:!0}),{evaluating:o,whitelist:v,config:s,configJSON:U,savedConfigs:t,configName:m,startPairlistEvaluation:Ve,addToConfig:$,removeFromConfig:S,saveConfig:I,duplicateConfig:F,deleteConfig:f,newConfig:z,selectOrCreateConfig:V,addToBlacklist:he,removeFromBlacklist:xe,duplicateBlacklist:Ce,isSavedConfig:N,firstPairlistIsGenerator:w,pairlistValid:C,stakeCurrency:a,customExchange:g,selectedExchange:r}},{persist:{key:"ftPairlistConfig",paths:["savedConfigs","configName"]}}),Ge={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},We=_("path",{fill:"currentColor",d:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6l-6 6l1.41 1.41Z"},null,-1),Ke=[We];function Qe(u,o){return d(),y("svg",Ge,Ke)}const ge={name:"mdi-chevron-up",render:Qe},Xe={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},Ye=_("path",{fill:"currentColor",d:"M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6l1.41-1.42Z"},null,-1),et=[Ye];function tt(u,o){return d(),y("svg",Xe,et)}const be={name:"mdi-chevron-down",render:tt},ot=E({__name:"PairlistConfigParameter",props:re({param:{}},{modelValue:{}}),emits:["update:modelValue"],setup(u){const o=K(u,"modelValue");return(e,a)=>{const v=Q,g=ue,r=D,s=Se;return d(),b(s,{"label-cols":"4","label-size":"md",class:"pb-1 text-start",description:e.param.help},{label:p(()=>[_("label",null,O(e.param.description),1)]),default:p(()=>[e.param.type===n(M).string||e.param.type===n(M).number?(d(),b(v,{key:0,modelValue:o.value,"onUpdate:modelValue":a[0]||(a[0]=t=>o.value=t),size:"sm"},null,8,["modelValue"])):k("",!0),e.param.type===n(M).boolean?(d(),b(g,{key:1,modelValue:o.value,"onUpdate:modelValue":a[1]||(a[1]=t=>o.value=t)},null,8,["modelValue"])):k("",!0),e.param.type===n(M).option?(d(),b(r,{key:2,modelValue:o.value,"onUpdate:modelValue":a[2]||(a[2]=t=>o.value=t),options:e.param.options},null,8,["modelValue","options"])):k("",!0)]),_:1},8,["description"])}}}),nt={class:"d-flex text-start align-items-center"},at={class:"d-flex flex-grow-1 align-items-center"},lt={class:"fw-bold"},st={class:"text-small"},it=E({__name:"PairlistConfigItem",props:re({index:{}},{modelValue:{required:!0}}),emits:["update:modelValue"],setup(u){const o=q(),e=K(u,"modelValue"),a=B(()=>Object.keys(e.value.params).length>0);function v(){a.value&&(e.value.showParameters=!e.value.showParameters)}return(g,r)=>{const s=Be,t=de,m=be,w=ge,C=me,U=_e,N=ce;return d(),b(N,{"no-body":"",class:"mb-2"},{header:p(()=>[_("div",nt,[_("div",at,[c(s,{role:"button",class:"handle me-2 fs-4 flex-shrink-0",width:"24",height:"24"}),_("div",{role:"button",class:"d-flex flex-grow-1 align-items-start flex-column user-select-none",onClick:v},[_("span",lt,O(e.value.name),1),_("span",st,O(e.value.description),1)])]),c(t,{role:"button",width:"24",height:"24",class:"mx-2",onClick:r[0]||(r[0]=$=>n(o).removeFromConfig(g.index))}),e.value.showParameters?k("",!0):(d(),b(m,{key:0,class:R([a.value&&!e.value.showParameters?"visible":"invisible","fs-4"]),role:"button",onClick:v},null,8,["class"])),e.value.showParameters?(d(),b(w,{key:1,class:R([a.value&&e.value.showParameters?"visible":"invisible","fs-4"]),role:"button",onClick:v},null,8,["class"])):k("",!0)])]),default:p(()=>[c(U,{modelValue:e.value.showParameters,"onUpdate:modelValue":r[1]||(r[1]=$=>e.value.showParameters=$)},{default:p(()=>[c(C,null,{default:p(()=>[(d(!0),y(H,null,A(e.value.params,($,S)=>(d(),b(ot,{key:S,modelValue:e.value.params[S].value,"onUpdate:modelValue":I=>e.value.params[S].value=I,param:$},null,8,["modelValue","onUpdate:modelValue","param"]))),128))]),_:1})]),_:1},8,["modelValue"])]),_:1})}}}),rt=_("span",{class:"fw-bold fd-italic"},"Blacklist",-1),ut={class:"d-flex mb-4 align-items-center gap-2"},ct=_("span",{class:"col-auto"},"Copy from:",-1),dt=E({__name:"PairlistConfigBlacklist",setup(u){const o=q(),e=x(""),a=x(!1),v=B(()=>o.savedConfigs.filter(g=>g.name!==o.config.name).map(g=>g.name));return(g,r)=>{const s=be,t=ge,m=D,w=ve,C=J,U=Q,N=de,$=Pe,S=Ee,I=me,z=_e,F=ce;return d(),b(F,{"no-body":"",class:"mb-2"},{header:p(()=>[_("div",{class:"d-flex flex-row align-items-center justify-content-between",role:"button",onClick:r[0]||(r[0]=f=>a.value=!a.value)},[rt,a.value?k("",!0):(d(),b(s,{key:0,class:R([a.value?"invisible":"visible","fs-4"]),role:"button"},null,8,["class"])),a.value?(d(),b(t,{key:1,class:R([a.value?"visible":"invisible","fs-4"]),role:"button"},null,8,["class"])):k("",!0)])]),default:p(()=>[c(z,{modelValue:a.value,"onUpdate:modelValue":r[4]||(r[4]=f=>a.value=f)},{default:p(()=>[c(I,null,{default:p(()=>[_("div",ut,[ct,c(m,{modelValue:e.value,"onUpdate:modelValue":r[1]||(r[1]=f=>e.value=f),size:"sm",options:v.value},null,8,["modelValue","options"]),c(C,{title:"Copy",size:"sm",onClick:r[2]||(r[2]=f=>n(o).duplicateBlacklist(e.value))},{default:p(()=>[c(w)]),_:1})]),(d(!0),y(H,null,A(n(o).config.blacklist,(f,V)=>(d(),b(S,{key:V,class:"mb-2",size:"sm"},{default:p(()=>[c(U,{modelValue:n(o).config.blacklist[V],"onUpdate:modelValue":P=>n(o).config.blacklist[V]=P},null,8,["modelValue","onUpdate:modelValue"]),c($,null,{default:p(()=>[c(C,{size:"sm",onClick:P=>n(o).removeFromBlacklist(V)},{default:p(()=>[c(N)]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024))),128)),c(C,{size:"sm",onClick:r[3]||(r[3]=f=>n(o).addToBlacklist())},{default:p(()=>[j("Add")]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})}}}),mt={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},_t=_("path",{fill:"currentColor",d:"M15 9H5V5h10m-3 14a3 3 0 0 1-3-3a3 3 0 0 1 3-3a3 3 0 0 1 3 3a3 3 0 0 1-3 3m5-16H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7l-4-4Z"},null,-1),pt=[_t];function ft(u,o){return d(),y("svg",mt,pt)}const vt={name:"mdi-content-save",render:ft},gt={class:"d-flex flex-column flex-sm-row mb-2 gap-2"},bt=E({__name:"PairlistConfigActions",setup(u){const o=q();return(e,a)=>{const v=vt,g=J,r=D,s=Ue;return d(),y("div",gt,[c(g,{title:"Save configuration",size:"sm",variant:"primary",onClick:a[0]||(a[0]=t=>n(o).saveConfig(n(o).config.name))},{default:p(()=>[c(v)]),_:1}),c(Ae,{modelValue:n(o).config.name,"onUpdate:modelValue":a[3]||(a[3]=t=>n(o).config.name=t),"editable-name":"config","allow-add":!0,"allow-duplicate":!0,"allow-edit":!0,class:"d-flex flex-grow-1",onDelete:n(o).deleteConfig,onDuplicate:a[4]||(a[4]=(t,m)=>n(o).duplicateConfig(m)),onNew:a[5]||(a[5]=t=>n(o).newConfig(t)),onRename:a[6]||(a[6]=(t,m)=>n(o).saveConfig(m))},{default:p(()=>[c(r,{modelValue:n(o).configName,"onUpdate:modelValue":a[1]||(a[1]=t=>n(o).configName=t),size:"sm",options:n(o).savedConfigs.map(t=>t.name),onChange:a[2]||(a[2]=t=>n(o).selectOrCreateConfig(t))},null,8,["modelValue","options"])]),_:1},8,["modelValue","onDelete"]),c(g,{title:"Evaluate pairlist",disabled:n(o).evaluating||!n(o).pairlistValid,variant:"primary",class:"px-5",size:"sm",onClick:a[7]||(a[7]=t=>n(o).startPairlistEvaluation())},{default:p(()=>[n(o).evaluating?(d(),b(s,{key:0,small:""})):k("",!0),_("span",null,O(n(o).evaluating?"":"Evaluate"),1)]),_:1},8,["disabled"])])}}}),ht={class:"copy-container position-relative"},xt={class:"text-start border p-1 mb-0"},Ct=E({__name:"CopyableTextfield",props:{content:{type:[String,Array],required:!0},isValid:{type:Boolean,default:!0}},setup(u){const{copy:o,isSupported:e}=Ne();return(a,v)=>{const g=ve;return d(),y("div",ht,[n(e)&&u.isValid?(d(),b(g,{key:0,role:"button",class:"copy-button position-absolute end-0 mt-1 me-2",onClick:v[0]||(v[0]=r=>n(o)(typeof u.content=="string"?u.content:JSON.stringify(u.content)))})):k("",!0),_("pre",xt,[_("code",null,O(u.content),1)])])}}});const ie=pe(Ct,[["__scopeId","data-v-1609c93b"]]),Vt={class:"w-100 d-flex"},yt={class:"ms-2"},kt=E({__name:"ExchangeSelect",props:{modelValue:{type:Object,required:!0}},emits:["update:modelValue"],setup(u){const o=K(u,"modelValue"),e=G(),a=B(()=>{const r=e.activeBot.exchangeList.filter(t=>t.valid&&t.supported).sort((t,m)=>t.name.localeCompare(m.name)),s=e.activeBot.exchangeList.filter(t=>t.valid&&!t.supported).sort((t,m)=>t.name.localeCompare(m.name));return[{label:"Supported",options:r.map(t=>t.name)},{label:"Unsupported",options:s.map(t=>t.name)}]}),v=B(()=>{var s;return((s=e.activeBot.exchangeList.find(t=>t.name===o.value.exchange))==null?void 0:s.trade_modes)??[]}),g=B(()=>v.value.map(r=>({text:`${r.margin_mode} ${r.trading_mode}`,value:r})));return W(()=>o.value.exchange,()=>{v.value.length<2&&(o.value.trade_mode=v.value[0])}),fe(()=>{e.activeBot.exchangeList.length===0&&e.activeBot.getExchangeList()}),(r,s)=>{const t=D,m=Ie,w=J;return d(),y("div",Vt,[c(t,{id:"exchange-select",modelValue:o.value.exchange,"onUpdate:modelValue":s[0]||(s[0]=C=>o.value.exchange=C),size:"sm",options:a.value},null,8,["modelValue","options"]),c(t,{id:"tradeMode-select",modelValue:o.value.trade_mode,"onUpdate:modelValue":s[1]||(s[1]=C=>o.value.trade_mode=C),size:"sm",options:g.value,disabled:g.value.length<2},null,8,["modelValue","options","disabled"]),_("div",yt,[c(w,{size:"sm",onClick:n(e).activeBot.getExchangeList},{default:p(()=>[c(m)]),_:1},8,["onClick"])])])}}}),wt=u=>(Fe("data-v-5e884352"),u=u(),je(),u),$t={class:"d-flex px-3 mb-3 gap-3 flex-column flex-lg-row"},St={class:"d-flex flex-grow-1 align-items-start flex-column"},Bt={class:"fw-bold"},Pt={class:"text-small"},Et={class:"d-flex flex-column flex-fill"},Ut={class:"border rounded-1 p-2 mb-2"},Nt={class:"d-flex align-items-center gap-2 my-2"},It=wt(()=>_("span",{class:"col-auto"},"Stake currency: ",-1)),zt={class:"mb-2 border rounded-1 p-2 text-start"},Tt={class:"d-flex flex-column col-12 col-lg-3"},Lt={class:"position-relative flex-fill overflow-auto"},Mt=E({__name:"PairlistConfigurator",setup(u){const o=G(),e=q(),a=x([]),v=x(null),g=x(null),r=x("Config"),s=B(()=>e.config.pairlists.length==0);return se(g,a.value,{group:{name:"configurator",pull:"clone",put:!1},sort:!1,filter:".no-drag",dragClass:"dragging"}),se(v,e.config.pairlists,{handle:".handle",group:"configurator",onUpdate:async t=>{ze(e.config.pairlists,t.oldIndex,t.newIndex)},onAdd:t=>{const m=a.value[t.oldIndex];e.addToConfig(m,t.newIndex),t.clone.replaceWith(t.item),t.clone.remove()}}),fe(async()=>{a.value=(await o.activeBot.getPairlists()).pairlists.sort((t,m)=>t.is_pairlist_generator===m.is_pairlist_generator?t.name.localeCompare(m.name):t.is_pairlist_generator?-1:1),e.selectOrCreateConfig(e.isSavedConfig(e.configName)?e.configName:"default")}),W(()=>e.whitelist,()=>{r.value="Results"}),(t,m)=>{const w=Ze,C=J,U=Te,N=Le,$=Q,S=ue,I=Me,z=Oe,F=Re;return d(),y("div",$t,[c(N,{ref_key:"availablePairlistsEl",ref:g,class:"available-pairlists"},{default:p(()=>[(d(!0),y(H,null,A(a.value,f=>(d(),b(U,{key:f.name,class:R([{"no-drag":n(e).config.pairlists.length==0&&!f.is_pairlist_generator},"pairlist d-flex text-start align-items-center py-2 px-3"])},{default:p(()=>[_("div",St,[_("span",Bt,O(f.name),1),_("span",Pt,O(f.description),1)]),c(C,{class:"p-0 add-pairlist",style:{border:"none"},variant:"outline-light",disabled:n(e).config.pairlists.length==0&&!f.is_pairlist_generator,onClick:V=>n(e).addToConfig(f,n(e).config.pairlists.length)},{default:p(()=>[c(w,{class:"fs-4"})]),_:2},1032,["disabled","onClick"])]),_:2},1032,["class"]))),128))]),_:1},512),_("div",Et,[c(bt),_("div",Ut,[_("div",Nt,[It,c($,{modelValue:n(e).stakeCurrency,"onUpdate:modelValue":m[0]||(m[0]=f=>n(e).stakeCurrency=f),size:"sm"},null,8,["modelValue"])]),_("div",zt,[c(S,{modelValue:n(e).customExchange,"onUpdate:modelValue":m[1]||(m[1]=f=>n(e).customExchange=f),class:"mb-2"},{default:p(()=>[j(" Custom Exchange ")]),_:1},8,["modelValue"]),n(e).customExchange?(d(),b(kt,{key:0,modelValue:n(e).selectedExchange,"onUpdate:modelValue":m[2]||(m[2]=f=>n(e).selectedExchange=f)},null,8,["modelValue"])):k("",!0)])]),c(dt),c(I,{"model-value":n(e).config.pairlists.length>0&&!n(e).firstPairlistIsGenerator,variant:"warning"},{default:p(()=>[j(" First entry in the pairlist must be a Generating pairlist, like StaticPairList or VolumePairList. ")]),_:1},8,["model-value"]),_("div",{ref_key:"pairlistConfigsEl",ref:v,class:R(["d-flex flex-column flex-grow-1 position-relative border rounded-1 p-1",{empty:s.value}])},[(d(!0),y(H,null,A(n(e).config.pairlists,(f,V)=>(d(),b(it,{key:f.id,modelValue:n(e).config.pairlists[V],"onUpdate:modelValue":P=>n(e).config.pairlists[V]=P,index:V,onRemove:n(e).removeFromConfig},null,8,["modelValue","onUpdate:modelValue","index","onRemove"]))),128))],2)]),_("div",Tt,[c(F,{modelValue:r.value,"onUpdate:modelValue":m[3]||(m[3]=f=>r.value=f),class:"mb-2",size:"sm",buttons:""},{default:p(()=>[c(z,{button:"",value:"Config"},{default:p(()=>[j(" Config")]),_:1}),c(z,{button:"",value:"Results",disabled:n(e).whitelist.length===0},{default:p(()=>[j(" Results")]),_:1},8,["disabled"])]),_:1},8,["modelValue"]),_("div",Lt,[r.value==="Config"?(d(),b(ie,{key:0,class:"position-lg-absolute w-100",content:n(e).configJSON,"is-valid":n(e).pairlistValid},null,8,["content","is-valid"])):k("",!0),r.value==="Results"?(d(),b(ie,{key:1,class:"position-lg-absolute w-100",content:n(e).whitelist},null,8,["content"])):k("",!0)])])])}}});const Ot=pe(Mt,[["__scopeId","data-v-5e884352"]]),At=E({__name:"PairlistConfigView",setup(u){return(o,e)=>(d(),b(Ot,{class:"pt-4"}))}});export{At as default};
//# sourceMappingURL=PairlistConfigView-b1c68053.js.map
