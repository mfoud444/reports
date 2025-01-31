import{N as bt}from"./FormItem-46f2a014.js";import{l as h,k as g,o as k,d as F,u as Re,bb as ft,h as s,bI as K,ai as O,bJ as W,bK as ee,bL as E,bM as se,bN as te,g as V,a9 as de,a4 as ue,c as m,a as mt,f as We,Z as Ze,bO as xe,bP as Be,bQ as Fe,bR as He,$ as gt,n as vt,m as ce,s as xt,q as yt,v as he,bS as wt,B as kt,z as Te,A as Ge,y as Ct,a0 as Y,C as Le,D as _t,E as Ne,P as St,V as Ut,G as $t,I as Vt,T as Rt,J as zt,K as At,Q as Ce,N as _e,O as Pt,bT as Mt,bU as It,bu as Dt,aE as ie,aF as Se,aK as $,aN as Xe,a7 as Tt,aO as Bt,aG as me,aL as x,aS as Ft,aJ as Ht,bV as Nt,aP as Ot,aH as Et,aV as qt,bW as Lt,bX as jt}from"./index-92800e52.js";import{N as Je}from"./Input-00db6768.js";import{a as Gt,N as Kt}from"./Grid-a6572918.js";import{N as Wt,a as Zt}from"./Tabs-f82e4521.js";import"./get-slot-1efb97e5.js";import"./Add-dd418ab3.js";function Qe(e,t,r){t/=100,r/=100;const o=t*Math.min(r,1-r)+r;return[e,o?(2-2*r/o)*100:0,o*100]}function Ve(e,t,r){t/=100,r/=100;const o=r-r*t/2,a=Math.min(o,1-o);return[e,a?(r-o)/a*100:0,o*100]}function G(e,t,r){t/=100,r/=100;let o=(a,n=(a+e/60)%6)=>r-r*t*Math.max(Math.min(n,4-n,1),0);return[o(5)*255,o(3)*255,o(1)*255]}function Oe(e,t,r){e/=255,t/=255,r/=255;let o=Math.max(e,t,r),a=o-Math.min(e,t,r),n=a&&(o==e?(t-r)/a:o==t?2+(r-e)/a:4+(e-t)/a);return[60*(n<0?n+6:n),o&&a/o*100,o*100]}function Ee(e,t,r){e/=255,t/=255,r/=255;let o=Math.max(e,t,r),a=o-Math.min(e,t,r),n=1-Math.abs(o+o-a-1),i=a&&(o==e?(t-r)/a:o==t?2+(r-e)/a:4+(e-t)/a);return[60*(i<0?i+6:i),n?a/n*100:0,(o+o-a)*50]}function qe(e,t,r){t/=100,r/=100;let o=t*Math.min(r,1-r),a=(n,i=(n+e/30)%12)=>r-o*Math.max(Math.min(i-3,9-i,1),-1);return[a(0)*255,a(8)*255,a(4)*255]}const Xt=h("input-group",`
 display: inline-flex;
 width: 100%;
 flex-wrap: nowrap;
 vertical-align: bottom;
`,[g(">",[h("input",[g("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),g("&:not(:first-child)",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 margin-left: -1px!important;
 `)]),h("button",[g("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `,[k("state-border, border",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)]),g("&:not(:first-child)",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `,[k("state-border, border",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])]),g("*",[g("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `,[g(">",[h("input",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),h("base-selection",[h("base-selection-label",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),h("base-selection-tags",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),k("box-shadow, border, state-border",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)])])]),g("&:not(:first-child)",`
 margin-left: -1px!important;
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `,[g(">",[h("input",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),h("base-selection",[h("base-selection-label",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),h("base-selection-tags",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),k("box-shadow, border, state-border",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])])])])])]),Jt={},Qt=F({name:"InputGroup",props:Jt,setup(e){const{mergedClsPrefixRef:t}=Re(e);return ft("-input-group",Xt,t),{mergedClsPrefix:t}},render(){const{mergedClsPrefix:e}=this;return s("div",{class:`${e}-input-group`},this.$slots)}});function Yt(e,t){switch(e[0]){case"hex":return t?"#000000FF":"#000000";case"rgb":return t?"rgba(0, 0, 0, 1)":"rgb(0, 0, 0)";case"hsl":return t?"hsla(0, 0%, 0%, 1)":"hsl(0, 0%, 0%)";case"hsv":return t?"hsva(0, 0%, 0%, 1)":"hsv(0, 0%, 0%)"}return"#000000"}function ye(e){return e===null?null:/^ *#/.test(e)?"hex":e.includes("rgb")?"rgb":e.includes("hsl")?"hsl":e.includes("hsv")?"hsv":null}function er(e){return e=Math.round(e),e>=360?359:e<0?0:e}function tr(e){return e=Math.round(e*100)/100,e>1?1:e<0?0:e}const rr={rgb:{hex(e){return K(O(e))},hsl(e){const[t,r,o,a]=O(e);return W([...Ee(t,r,o),a])},hsv(e){const[t,r,o,a]=O(e);return ee([...Oe(t,r,o),a])}},hex:{rgb(e){return E(O(e))},hsl(e){const[t,r,o,a]=O(e);return W([...Ee(t,r,o),a])},hsv(e){const[t,r,o,a]=O(e);return ee([...Oe(t,r,o),a])}},hsl:{hex(e){const[t,r,o,a]=se(e);return K([...qe(t,r,o),a])},rgb(e){const[t,r,o,a]=se(e);return E([...qe(t,r,o),a])},hsv(e){const[t,r,o,a]=se(e);return ee([...Qe(t,r,o),a])}},hsv:{hex(e){const[t,r,o,a]=te(e);return K([...G(t,r,o),a])},rgb(e){const[t,r,o,a]=te(e);return E([...G(t,r,o),a])},hsl(e){const[t,r,o,a]=te(e);return W([...Ve(t,r,o),a])}}};function Ye(e,t,r){return r=r||ye(e),r?r===t?e:rr[r][t](e):null}const le="12px",or=12,J="6px",ar=6,nr="linear-gradient(90deg,red,#ff0 16.66%,#0f0 33.33%,#0ff 50%,#00f 66.66%,#f0f 83.33%,red)",lr=F({name:"HueSlider",props:{clsPrefix:{type:String,required:!0},hue:{type:Number,required:!0},onUpdateHue:{type:Function,required:!0},onComplete:Function},setup(e){const t=V(null);function r(n){t.value&&(de("mousemove",document,o),de("mouseup",document,a),o(n))}function o(n){const{value:i}=t;if(!i)return;const{width:d,left:u}=i.getBoundingClientRect(),C=er((n.clientX-u-ar)/(d-or)*360);e.onUpdateHue(C)}function a(){var n;ue("mousemove",document,o),ue("mouseup",document,a),(n=e.onComplete)===null||n===void 0||n.call(e)}return{railRef:t,handleMouseDown:r}},render(){const{clsPrefix:e}=this;return s("div",{class:`${e}-color-picker-slider`,style:{height:le,borderRadius:J}},s("div",{ref:"railRef",style:{boxShadow:"inset 0 0 2px 0 rgba(0, 0, 0, .24)",boxSizing:"border-box",backgroundImage:nr,height:le,borderRadius:J,position:"relative"},onMousedown:this.handleMouseDown},s("div",{style:{position:"absolute",left:J,right:J,top:0,bottom:0}},s("div",{class:`${e}-color-picker-handle`,style:{left:`calc((${this.hue}%) / 359 * 100 - ${J})`,borderRadius:J,width:le,height:le}},s("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:`hsl(${this.hue}, 100%, 50%)`,borderRadius:J,width:le,height:le}})))))}}),ge="12px",ir=12,Q="6px",sr=F({name:"AlphaSlider",props:{clsPrefix:{type:String,required:!0},rgba:{type:Array,default:null},alpha:{type:Number,default:0},onUpdateAlpha:{type:Function,required:!0},onComplete:Function},setup(e){const t=V(null);function r(n){!t.value||!e.rgba||(de("mousemove",document,o),de("mouseup",document,a),o(n))}function o(n){const{value:i}=t;if(!i)return;const{width:d,left:u}=i.getBoundingClientRect(),C=(n.clientX-u)/(d-ir);e.onUpdateAlpha(tr(C))}function a(){var n;ue("mousemove",document,o),ue("mouseup",document,a),(n=e.onComplete)===null||n===void 0||n.call(e)}return{railRef:t,railBackgroundImage:m(()=>{const{rgba:n}=e;return n?`linear-gradient(to right, rgba(${n[0]}, ${n[1]}, ${n[2]}, 0) 0%, rgba(${n[0]}, ${n[1]}, ${n[2]}, 1) 100%)`:""}),handleMouseDown:r}},render(){const{clsPrefix:e}=this;return s("div",{class:`${e}-color-picker-slider`,ref:"railRef",style:{height:ge,borderRadius:Q},onMousedown:this.handleMouseDown},s("div",{style:{borderRadius:Q,position:"absolute",left:0,right:0,top:0,bottom:0,overflow:"hidden"}},s("div",{class:`${e}-color-picker-checkboard`}),s("div",{class:`${e}-color-picker-slider__image`,style:{backgroundImage:this.railBackgroundImage}})),this.rgba&&s("div",{style:{position:"absolute",left:Q,right:Q,top:0,bottom:0}},s("div",{class:`${e}-color-picker-handle`,style:{left:`calc(${this.alpha*100}% - ${Q})`,borderRadius:Q,width:ge,height:ge}},s("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:E(this.rgba),borderRadius:Q,width:ge,height:ge}}))))}}),Ue="12px",$e="6px",dr=F({name:"Pallete",props:{clsPrefix:{type:String,required:!0},rgba:{type:Array,default:null},displayedHue:{type:Number,required:!0},displayedSv:{type:Array,required:!0},onUpdateSV:{type:Function,required:!0},onComplete:Function},setup(e){const t=V(null);function r(n){t.value&&(de("mousemove",document,o),de("mouseup",document,a),o(n))}function o(n){const{value:i}=t;if(!i)return;const{width:d,height:u,left:C,bottom:w}=i.getBoundingClientRect(),_=(w-n.clientY)/u,R=(n.clientX-C)/d,z=100*(R>1?1:R<0?0:R),P=100*(_>1?1:_<0?0:_);e.onUpdateSV(z,P)}function a(){var n;ue("mousemove",document,o),ue("mouseup",document,a),(n=e.onComplete)===null||n===void 0||n.call(e)}return{palleteRef:t,handleColor:m(()=>{const{rgba:n}=e;return n?`rgb(${n[0]}, ${n[1]}, ${n[2]})`:""}),handleMouseDown:r}},render(){const{clsPrefix:e}=this;return s("div",{class:`${e}-color-picker-pallete`,onMousedown:this.handleMouseDown,ref:"palleteRef"},s("div",{class:`${e}-color-picker-pallete__layer`,style:{backgroundImage:`linear-gradient(90deg, white, hsl(${this.displayedHue}, 100%, 50%))`}}),s("div",{class:`${e}-color-picker-pallete__layer ${e}-color-picker-pallete__layer--shadowed`,style:{backgroundImage:"linear-gradient(180deg, rgba(0, 0, 0, 0%), rgba(0, 0, 0, 100%))"}}),this.rgba&&s("div",{class:`${e}-color-picker-handle`,style:{width:Ue,height:Ue,borderRadius:$e,left:`calc(${this.displayedSv[0]}% - ${$e})`,bottom:`calc(${this.displayedSv[1]}% - ${$e})`}},s("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:this.handleColor,borderRadius:$e,width:Ue,height:Ue}})))}}),je=mt("n-color-picker");function ur(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(Number.parseInt(e),255)):!1}function cr(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(Number.parseInt(e),360)):!1}function hr(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(Number.parseInt(e),100)):!1}function pr(e){const t=e.trim();return/^#[0-9a-fA-F]+$/.test(t)?[4,5,7,9].includes(t.length):!1}function br(e){return/^\d{1,3}\.?\d*%$/.test(e.trim())?Math.max(0,Math.min(Number.parseInt(e)/100,100)):!1}const fr={paddingSmall:"0 4px"},Ke=F({name:"ColorInputUnit",props:{label:{type:String,required:!0},value:{type:[Number,String],default:null},showAlpha:Boolean,onUpdateValue:{type:Function,required:!0}},setup(e){const t=V(""),{themeRef:r}=We(je,null);Ze(()=>{t.value=o()});function o(){const{value:i}=e;if(i===null)return"";const{label:d}=e;return d==="HEX"?i:d==="A"?`${Math.floor(i*100)}%`:String(Math.floor(i))}function a(i){t.value=i}function n(i){let d,u;switch(e.label){case"HEX":u=pr(i),u&&e.onUpdateValue(i),t.value=o();break;case"H":d=cr(i),d===!1?t.value=o():e.onUpdateValue(d);break;case"S":case"L":case"V":d=hr(i),d===!1?t.value=o():e.onUpdateValue(d);break;case"A":d=br(i),d===!1?t.value=o():e.onUpdateValue(d);break;case"R":case"G":case"B":d=ur(i),d===!1?t.value=o():e.onUpdateValue(d);break}}return{mergedTheme:r,inputValue:t,handleInputChange:n,handleInputUpdateValue:a}},render(){const{mergedTheme:e}=this;return s(Je,{size:"small",placeholder:this.label,theme:e.peers.Input,themeOverrides:e.peerOverrides.Input,builtinThemeOverrides:fr,value:this.inputValue,onUpdateValue:this.handleInputUpdateValue,onChange:this.handleInputChange,style:this.label==="A"?"flex-grow: 1.25;":""})}}),mr=F({name:"ColorInput",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},modes:{type:Array,required:!0},showAlpha:{type:Boolean,required:!0},value:{type:String,default:null},valueArr:{type:Array,default:null},onUpdateValue:{type:Function,required:!0},onUpdateMode:{type:Function,required:!0}},setup(e){return{handleUnitUpdateValue(t,r){const{showAlpha:o}=e;if(e.mode==="hex"){e.onUpdateValue((o?K:xe)(r));return}let a;switch(e.valueArr===null?a=[0,0,0,0]:a=Array.from(e.valueArr),e.mode){case"hsv":a[t]=r,e.onUpdateValue((o?ee:He)(a));break;case"rgb":a[t]=r,e.onUpdateValue((o?E:Fe)(a));break;case"hsl":a[t]=r,e.onUpdateValue((o?W:Be)(a));break}}}},render(){const{clsPrefix:e,modes:t}=this;return s("div",{class:`${e}-color-picker-input`},s("div",{class:`${e}-color-picker-input__mode`,onClick:this.onUpdateMode,style:{cursor:t.length===1?"":"pointer"}},this.mode.toUpperCase()+(this.showAlpha?"A":"")),s(Qt,null,{default:()=>{const{mode:r,valueArr:o,showAlpha:a}=this;if(r==="hex"){let n=null;try{n=o===null?null:(a?K:xe)(o)}catch{}return s(Ke,{label:"HEX",showAlpha:a,value:n,onUpdateValue:i=>{this.handleUnitUpdateValue(0,i)}})}return(r+(a?"a":"")).split("").map((n,i)=>s(Ke,{label:n.toUpperCase(),value:o===null?null:o[i],onUpdateValue:d=>{this.handleUnitUpdateValue(i,d)}}))}}))}}),gr=F({name:"ColorPickerTrigger",props:{clsPrefix:{type:String,required:!0},value:{type:String,default:null},hsla:{type:Array,default:null},disabled:Boolean,onClick:Function},setup(e){const{colorPickerSlots:t,renderLabelRef:r}=We(je,null);return()=>{const{hsla:o,value:a,clsPrefix:n,onClick:i,disabled:d}=e,u=t.label||r.value;return s("div",{class:[`${n}-color-picker-trigger`,d&&`${n}-color-picker-trigger--disabled`],onClick:d?void 0:i},s("div",{class:`${n}-color-picker-trigger__fill`},s("div",{class:`${n}-color-picker-checkboard`}),s("div",{style:{position:"absolute",left:0,right:0,top:0,bottom:0,backgroundColor:o?W(o):""}}),a&&o?s("div",{class:`${n}-color-picker-trigger__value`,style:{color:o[2]>50||o[3]<.5?"black":"white"}},u?u(a):a):null))}}});function vr(e,t){if(t==="hsv"){const[r,o,a,n]=te(e);return E([...G(r,o,a),n])}return e}function xr(e){const t=document.createElement("canvas").getContext("2d");return t?(t.fillStyle=e,t.fillStyle):"#000000"}const yr=F({name:"ColorPickerSwatches",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},swatches:{type:Array,required:!0},onUpdateColor:{type:Function,required:!0}},setup(e){const t=m(()=>e.swatches.map(n=>{const i=ye(n);return{value:n,mode:i,legalValue:vr(n,i)}}));function r(n){const{mode:i}=e;let{value:d,mode:u}=n;return u||(u="hex",/^[a-zA-Z]+$/.test(d)?d=xr(d):(gt("color-picker",`color ${d} in swatches is invalid.`),d="#000000")),u===i?d:Ye(d,i,u)}function o(n){e.onUpdateColor(r(n))}function a(n,i){n.key==="Enter"&&o(i)}return{parsedSwatchesRef:t,handleSwatchSelect:o,handleSwatchKeyDown:a}},render(){const{clsPrefix:e}=this;return s("div",{class:`${e}-color-picker-swatches`},this.parsedSwatchesRef.map(t=>s("div",{class:`${e}-color-picker-swatch`,tabindex:0,onClick:()=>{this.handleSwatchSelect(t)},onKeydown:r=>{this.handleSwatchKeyDown(r,t)}},s("div",{class:`${e}-color-picker-swatch__fill`,style:{background:t.legalValue}}))))}}),wr=F({name:"ColorPreview",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},color:{type:String,default:null,validator:e=>{const t=ye(e);return!!(!e||t&&t!=="hsv")}},onUpdateColor:{type:Function,required:!0}},setup(e){function t(r){var o;const a=r.target.value;(o=e.onUpdateColor)===null||o===void 0||o.call(e,Ye(a.toUpperCase(),e.mode,"hex")),r.stopPropagation()}return{handleChange:t}},render(){const{clsPrefix:e}=this;return s("div",{class:`${e}-color-picker-preview__preview`},s("span",{class:`${e}-color-picker-preview__fill`,style:{background:this.color||"#000000"}}),s("input",{class:`${e}-color-picker-preview__input`,type:"color",value:this.color,onChange:this.handleChange}))}}),kr=g([h("color-picker",`
 display: inline-block;
 box-sizing: border-box;
 height: var(--n-height);
 font-size: var(--n-font-size);
 width: 100%;
 position: relative;
 `),h("color-picker-panel",`
 margin: 4px 0;
 width: 240px;
 font-size: var(--n-panel-font-size);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 `,[vt(),h("input",`
 text-align: center;
 `)]),h("color-picker-checkboard",`
 background: white; 
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[g("&::after",`
 background-image: linear-gradient(45deg, #DDD 25%, #0000 25%), linear-gradient(-45deg, #DDD 25%, #0000 25%), linear-gradient(45deg, #0000 75%, #DDD 75%), linear-gradient(-45deg, #0000 75%, #DDD 75%);
 background-size: 12px 12px;
 background-position: 0 0, 0 6px, 6px -6px, -6px 0px;
 background-repeat: repeat;
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),h("color-picker-slider",`
 margin-bottom: 8px;
 position: relative;
 box-sizing: border-box;
 `,[k("image",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `),g("&::after",`
 content: "";
 position: absolute;
 border-radius: inherit;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, .24);
 pointer-events: none;
 `)]),h("color-picker-handle",`
 z-index: 1;
 box-shadow: 0 0 2px 0 rgba(0, 0, 0, .45);
 position: absolute;
 background-color: white;
 overflow: hidden;
 `,[k("fill",`
 box-sizing: border-box;
 border: 2px solid white;
 `)]),h("color-picker-pallete",`
 height: 180px;
 position: relative;
 margin-bottom: 8px;
 cursor: crosshair;
 `,[k("layer",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[ce("shadowed",`
 box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, .24);
 `)])]),h("color-picker-preview",`
 display: flex;
 `,[k("sliders",`
 flex: 1 0 auto;
 `),k("preview",`
 position: relative;
 height: 30px;
 width: 30px;
 margin: 0 0 8px 6px;
 border-radius: 50%;
 box-shadow: rgba(0, 0, 0, .15) 0px 0px 0px 1px inset;
 overflow: hidden;
 `),k("fill",`
 display: block;
 width: 30px;
 height: 30px;
 `),k("input",`
 position: absolute;
 top: 0;
 left: 0;
 width: 30px;
 height: 30px;
 opacity: 0;
 z-index: 1;
 `)]),h("color-picker-input",`
 display: flex;
 align-items: center;
 `,[h("input",`
 flex-grow: 1;
 flex-basis: 0;
 `),k("mode",`
 width: 72px;
 text-align: center;
 `)]),h("color-picker-control",`
 padding: 12px;
 `),h("color-picker-action",`
 display: flex;
 margin-top: -4px;
 border-top: 1px solid var(--n-divider-color);
 padding: 8px 12px;
 justify-content: flex-end;
 `,[h("button","margin-left: 8px;")]),h("color-picker-trigger",`
 border: var(--n-border);
 height: 100%;
 box-sizing: border-box;
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 cursor: pointer;
 `,[k("value",`
 white-space: nowrap;
 position: relative;
 `),k("fill",`
 border-radius: var(--n-border-radius);
 position: absolute;
 display: flex;
 align-items: center;
 justify-content: center;
 left: 4px;
 right: 4px;
 top: 4px;
 bottom: 4px;
 `),ce("disabled","cursor: not-allowed"),h("color-picker-checkboard",`
 border-radius: var(--n-border-radius);
 `,[g("&::after",`
 --n-block-size: calc((var(--n-height) - 8px) / 3);
 background-size: calc(var(--n-block-size) * 2) calc(var(--n-block-size) * 2);
 background-position: 0 0, 0 var(--n-block-size), var(--n-block-size) calc(-1 * var(--n-block-size)), calc(-1 * var(--n-block-size)) 0px; 
 `)])]),h("color-picker-swatches",`
 display: grid;
 grid-gap: 8px;
 flex-wrap: wrap;
 position: relative;
 grid-template-columns: repeat(auto-fill, 18px);
 margin-top: 10px;
 `,[h("color-picker-swatch",`
 width: 18px;
 height: 18px;
 background-image: linear-gradient(45deg, #DDD 25%, #0000 25%), linear-gradient(-45deg, #DDD 25%, #0000 25%), linear-gradient(45deg, #0000 75%, #DDD 75%), linear-gradient(-45deg, #0000 75%, #DDD 75%);
 background-size: 8px 8px;
 background-position: 0px 0, 0px 4px, 4px -4px, -4px 0px;
 background-repeat: repeat;
 `,[k("fill",`
 position: relative;
 width: 100%;
 height: 100%;
 border-radius: 3px;
 box-shadow: rgba(0, 0, 0, .15) 0px 0px 0px 1px inset;
 cursor: pointer;
 `),g("&:focus",`
 outline: none;
 `,[k("fill",[g("&::after",`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 background: inherit;
 filter: blur(2px);
 content: "";
 `)])])])])]),Cr=Object.assign(Object.assign({},he.props),{value:String,show:{type:Boolean,default:void 0},defaultShow:Boolean,defaultValue:String,modes:{type:Array,default:()=>["rgb","hex","hsl"]},placement:{type:String,default:"bottom-start"},to:Ne.propTo,showAlpha:{type:Boolean,default:!0},showPreview:Boolean,swatches:Array,disabled:{type:Boolean,default:void 0},actions:{type:Array,default:null},internalActions:Array,size:String,renderLabel:Function,onComplete:Function,onConfirm:Function,onClear:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),_r=F({name:"ColorPicker",props:Cr,setup(e,{slots:t}){const r=V(null);let o=null;const a=xt(e),{mergedSizeRef:n,mergedDisabledRef:i}=a,{localeRef:d}=yt("global"),{mergedClsPrefixRef:u,namespaceRef:C,inlineThemeDisabled:w}=Re(e),_=he("ColorPicker","-color-picker",kr,wt,e,u);kt(je,{themeRef:_,renderLabelRef:Te(e,"renderLabel"),colorPickerSlots:t});const R=V(e.defaultShow),z=Ge(Te(e,"show"),R);function P(l){const{onUpdateShow:c,"onUpdate:show":b}=e;c&&Ce(c,l),b&&Ce(b,l),R.value=l}const{defaultValue:re}=e,we=V(re===void 0?Yt(e.modes,e.showAlpha):re),S=Ge(Te(e,"value"),we),I=V([S.value]),H=V(0),be=m(()=>ye(S.value)),{modes:ze}=e,D=V(ye(S.value)||ze[0]||"rgb");function Ae(){const{modes:l}=e,{value:c}=D,b=l.findIndex(f=>f===c);~b?D.value=l[(b+1)%l.length]:D.value="rgb"}let A,T,oe,ae,q,L,j,B;const fe=m(()=>{const{value:l}=S;if(!l)return null;switch(be.value){case"hsv":return te(l);case"hsl":return[A,T,oe,B]=se(l),[...Qe(A,T,oe),B];case"rgb":case"hex":return[q,L,j,B]=O(l),[...Oe(q,L,j),B]}}),Z=m(()=>{const{value:l}=S;if(!l)return null;switch(be.value){case"rgb":case"hex":return O(l);case"hsv":return[A,T,ae,B]=te(l),[...G(A,T,ae),B];case"hsl":return[A,T,oe,B]=se(l),[...qe(A,T,oe),B]}}),Pe=m(()=>{const{value:l}=S;if(!l)return null;switch(be.value){case"hsl":return se(l);case"hsv":return[A,T,ae,B]=te(l),[...Ve(A,T,ae),B];case"rgb":case"hex":return[q,L,j,B]=O(l),[...Ee(q,L,j),B]}}),et=m(()=>{switch(D.value){case"rgb":case"hex":return Z.value;case"hsv":return fe.value;case"hsl":return Pe.value}}),ke=V(0),Me=V(1),Ie=V([0,0]);function tt(l,c){const{value:b}=fe,f=ke.value,v=b?b[3]:1;Ie.value=[l,c];const{showAlpha:p}=e;switch(D.value){case"hsv":y((p?ee:He)([f,l,c,v]),"cursor");break;case"hsl":y((p?W:Be)([...Ve(f,l,c),v]),"cursor");break;case"rgb":y((p?E:Fe)([...G(f,l,c),v]),"cursor");break;case"hex":y((p?K:xe)([...G(f,l,c),v]),"cursor");break}}function rt(l){ke.value=l;const{value:c}=fe;if(!c)return;const[,b,f,v]=c,{showAlpha:p}=e;switch(D.value){case"hsv":y((p?ee:He)([l,b,f,v]),"cursor");break;case"rgb":y((p?E:Fe)([...G(l,b,f),v]),"cursor");break;case"hex":y((p?K:xe)([...G(l,b,f),v]),"cursor");break;case"hsl":y((p?W:Be)([...Ve(l,b,f),v]),"cursor");break}}function ot(l){switch(D.value){case"hsv":[A,T,ae]=fe.value,y(ee([A,T,ae,l]),"cursor");break;case"rgb":[q,L,j]=Z.value,y(E([q,L,j,l]),"cursor");break;case"hex":[q,L,j]=Z.value,y(K([q,L,j,l]),"cursor");break;case"hsl":[A,T,oe]=Pe.value,y(W([A,T,oe,l]),"cursor");break}Me.value=l}function y(l,c){c==="cursor"?o=l:o=null;const{nTriggerFormChange:b,nTriggerFormInput:f}=a,{onUpdateValue:v,"onUpdate:value":p}=e;v&&Ce(v,l),p&&Ce(p,l),b(),f(),we.value=l}function at(l){y(l,"input"),Pt(ne)}function ne(l=!0){const{value:c}=S;if(c){const{nTriggerFormChange:b,nTriggerFormInput:f}=a,{onComplete:v}=e;v&&v(c);const{value:p}=I,{value:M}=H;l&&(p.splice(M+1,p.length,c),H.value=M+1),b(),f()}}function nt(){const{value:l}=H;l-1<0||(y(I.value[l-1],"input"),ne(!1),H.value=l-1)}function lt(){const{value:l}=H;l<0||l+1>=I.value.length||(y(I.value[l+1],"input"),ne(!1),H.value=l+1)}function it(){y(null,"input");const{onClear:l}=e;l&&l(),P(!1)}function st(){const{value:l}=S,{onConfirm:c}=e;c&&c(l),P(!1)}const dt=m(()=>H.value>=1),ut=m(()=>{const{value:l}=I;return l.length>1&&H.value<l.length-1});Ct(z,l=>{l||(I.value=[S.value],H.value=0)}),Ze(()=>{if(!(o&&o===S.value)){const{value:l}=fe;l&&(ke.value=l[0],Me.value=l[3],Ie.value=[l[1],l[2]])}o=null});const De=m(()=>{const{value:l}=n,{common:{cubicBezierEaseInOut:c},self:{textColor:b,color:f,panelFontSize:v,boxShadow:p,border:M,borderRadius:U,dividerColor:X,[Y("height",l)]:ht,[Y("fontSize",l)]:pt}}=_.value;return{"--n-bezier":c,"--n-text-color":b,"--n-color":f,"--n-panel-font-size":v,"--n-font-size":pt,"--n-box-shadow":p,"--n-border":M,"--n-border-radius":U,"--n-height":ht,"--n-divider-color":X}}),N=w?Le("color-picker",m(()=>n.value[0]),De,e):void 0;function ct(){var l;const{value:c}=Z,{value:b}=ke,{internalActions:f,modes:v,actions:p}=e,{value:M}=_,{value:U}=u;return s("div",{class:[`${U}-color-picker-panel`,N==null?void 0:N.themeClass.value],onDragstart:X=>{X.preventDefault()},style:w?void 0:De.value},s("div",{class:`${U}-color-picker-control`},s(dr,{clsPrefix:U,rgba:c,displayedHue:b,displayedSv:Ie.value,onUpdateSV:tt,onComplete:ne}),s("div",{class:`${U}-color-picker-preview`},s("div",{class:`${U}-color-picker-preview__sliders`},s(lr,{clsPrefix:U,hue:b,onUpdateHue:rt,onComplete:ne}),e.showAlpha?s(sr,{clsPrefix:U,rgba:c,alpha:Me.value,onUpdateAlpha:ot,onComplete:ne}):null),e.showPreview?s(wr,{clsPrefix:U,mode:D.value,color:Z.value&&xe(Z.value),onUpdateColor:X=>{y(X,"input")}}):null),s(mr,{clsPrefix:U,showAlpha:e.showAlpha,mode:D.value,modes:v,onUpdateMode:Ae,value:S.value,valueArr:et.value,onUpdateValue:at}),((l=e.swatches)===null||l===void 0?void 0:l.length)&&s(yr,{clsPrefix:U,mode:D.value,swatches:e.swatches,onUpdateColor:X=>{y(X,"input")}})),p!=null&&p.length?s("div",{class:`${U}-color-picker-action`},p.includes("confirm")&&s(_e,{size:"small",onClick:st,theme:M.peers.Button,themeOverrides:M.peerOverrides.Button},{default:()=>d.value.confirm}),p.includes("clear")&&s(_e,{size:"small",onClick:it,disabled:!S.value,theme:M.peers.Button,themeOverrides:M.peerOverrides.Button},{default:()=>d.value.clear})):null,t.action?s("div",{class:`${U}-color-picker-action`},{default:t.action}):f?s("div",{class:`${U}-color-picker-action`},f.includes("undo")&&s(_e,{size:"small",onClick:nt,disabled:!dt.value,theme:M.peers.Button,themeOverrides:M.peerOverrides.Button},{default:()=>d.value.undo}),f.includes("redo")&&s(_e,{size:"small",onClick:lt,disabled:!ut.value,theme:M.peers.Button,themeOverrides:M.peerOverrides.Button},{default:()=>d.value.redo})):null)}return{mergedClsPrefix:u,namespace:C,selfRef:r,hsla:Pe,rgba:Z,mergedShow:z,mergedDisabled:i,isMounted:_t(),adjustedTo:Ne(e),mergedValue:S,handleTriggerClick(){P(!0)},handleClickOutside(l){var c;!((c=r.value)===null||c===void 0)&&c.contains(St(l))||P(!1)},renderPanel:ct,cssVars:w?void 0:De,themeClass:N==null?void 0:N.themeClass,onRender:N==null?void 0:N.onRender}},render(){const{$slots:e,mergedClsPrefix:t,onRender:r}=this;return r==null||r(),s("div",{class:[this.themeClass,`${t}-color-picker`],ref:"selfRef",style:this.cssVars},s(Ut,null,{default:()=>[s($t,null,{default:()=>s(gr,{clsPrefix:t,value:this.mergedValue,hsla:this.hsla,disabled:this.mergedDisabled,onClick:this.handleTriggerClick},{label:e.label})}),s(Vt,{placement:this.placement,show:this.mergedShow,containerClass:this.namespace,teleportDisabled:this.adjustedTo===Ne.tdkey,to:this.adjustedTo},{default:()=>s(Rt,{name:"fade-in-scale-up-transition",appear:this.isMounted},{default:()=>this.mergedShow?zt(this.renderPanel(),[[At,this.handleClickOutside,void 0,{capture:!0}]]):null})})]}))}}),Sr=h("layout-header",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 box-sizing: border-box;
 width: 100%;
 background-color: var(--n-color);
 color: var(--n-text-color);
`,[ce("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 `),ce("bordered",`
 border-bottom: solid 1px var(--n-border-color);
 `)]),Ur={position:It,inverted:Boolean,bordered:{type:Boolean,default:!1}},$r=F({name:"LayoutHeader",props:Object.assign(Object.assign({},he.props),Ur),setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:r}=Re(e),o=he("Layout","-layout-header",Sr,Mt,e,t),a=m(()=>{const{common:{cubicBezierEaseInOut:i},self:d}=o.value,u={"--n-bezier":i};return e.inverted?(u["--n-color"]=d.headerColorInverted,u["--n-text-color"]=d.textColorInverted,u["--n-border-color"]=d.headerBorderColorInverted):(u["--n-color"]=d.headerColor,u["--n-text-color"]=d.textColor,u["--n-border-color"]=d.headerBorderColor),u}),n=r?Le("layout-header",m(()=>e.inverted?"a":"b"),a,e):void 0;return{mergedClsPrefix:t,cssVars:r?void 0:a,themeClass:n==null?void 0:n.themeClass,onRender:n==null?void 0:n.onRender}},render(){var e;const{mergedClsPrefix:t}=this;return(e=this.onRender)===null||e===void 0||e.call(this),s("div",{class:[`${t}-layout-header`,this.themeClass,this.position&&`${t}-layout-header--${this.position}-positioned`,this.bordered&&`${t}-layout-header--bordered`],style:this.cssVars},this.$slots)}}),Vr=h("h",`
 font-size: var(--n-font-size);
 font-weight: var(--n-font-weight);
 margin: var(--n-margin);
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
`,[g("&:first-child",{marginTop:0}),ce("prefix-bar",{position:"relative",paddingLeft:"var(--n-prefix-width)"},[ce("align-text",{paddingLeft:0},[g("&::before",{left:"calc(-1 * var(--n-prefix-width))"})]),g("&::before",`
 content: "";
 width: var(--n-bar-width);
 border-radius: calc(var(--n-bar-width) / 2);
 transition: background-color .3s var(--n-bezier);
 left: 0;
 top: 0;
 bottom: 0;
 position: absolute;
 `),g("&::before",{backgroundColor:"var(--n-bar-color)"})])]),Rr=Object.assign(Object.assign({},he.props),{type:{type:String,default:"default"},prefix:String,alignText:Boolean}),pe=e=>F({name:`H${e}`,props:Rr,setup(t){const{mergedClsPrefixRef:r,inlineThemeDisabled:o}=Re(t),a=he("Typography","-h",Vr,Dt,t,r),n=m(()=>{const{type:d}=t,{common:{cubicBezierEaseInOut:u},self:{headerFontWeight:C,headerTextColor:w,[Y("headerPrefixWidth",e)]:_,[Y("headerFontSize",e)]:R,[Y("headerMargin",e)]:z,[Y("headerBarWidth",e)]:P,[Y("headerBarColor",d)]:re}}=a.value;return{"--n-bezier":u,"--n-font-size":R,"--n-margin":z,"--n-bar-color":re,"--n-bar-width":P,"--n-font-weight":C,"--n-text-color":w,"--n-prefix-width":_}}),i=o?Le(`h${e}`,m(()=>t.type[0]),n,t):void 0;return{mergedClsPrefix:r,cssVars:o?void 0:n,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var t;const{prefix:r,alignText:o,mergedClsPrefix:a,cssVars:n,$slots:i}=this;return(t=this.onRender)===null||t===void 0||t.call(this),s(`h${e}`,{class:[`${a}-h`,`${a}-h${e}`,this.themeClass,{[`${a}-h--prefix-bar`]:r,[`${a}-h--align-text`]:o}],style:n},i)}}),zr=pe("1");pe("2");pe("3");pe("4");pe("5");pe("6");const ve={__name:"ThemeSection",props:{variables:{type:Object,required:!0}},emits:["update:variable"],setup(e,{emit:t}){const r=t,o=d=>d.replace(/([A-Z])/g," $1").replace(/^./,u=>u.toUpperCase()),a=d=>/^(#|rgb|hsl)/.test(d),n=(d,u)=>{r("update:variable",d,u)},i=(d,u)=>{r("update:variable",d,u)};return(d,u)=>(ie(),Se(me(Kt),{"x-gap":12,"y-gap":8,cols:24},{default:$(()=>[(ie(!0),Xe(Tt,null,Bt(e.variables,(C,w)=>(ie(),Se(me(Gt),{key:w,span:12},{default:$(()=>[x(me(bt),{label:o(w)},{default:$(()=>[a(C)?(ie(),Se(me(_r),{key:0,value:C,"onUpdate:value":_=>n(w,_)},null,8,["value","onUpdate:value"])):(ie(),Se(me(Je),{key:1,value:C,"onUpdate:value":_=>i(w,_)},null,8,["value","onUpdate:value"]))]),_:2},1032,["label"])]),_:2},1024))),128))]),_:1}))}},Ar={class:"mx-8 my-4"},Hr={__name:"index",setup(e){Ft();const t=Ht();let r=t.theme==="dark"?t.darkThemeVars:t.normalThemeVars;const o=m(()=>({baseColor:r.baseColor,bodyColor:r.bodyColor,popoverColor:r.popoverColor,cardColor:r.cardColor,modalColor:r.modalColor,tableColor:r.tableColor})),a=m(()=>({primaryColor:r.primaryColor,infoColor:r.infoColor,successColor:r.successColor,warningColor:r.warningColor,errorColor:r.errorColor,textColorBase:r.textColorBase,textColor1:r.textColor1,textColor2:r.textColor2,textColor3:r.textColor3})),n=m(()=>({fontFamily:r.fontFamily,fontFamilyMono:r.fontFamilyMono,fontSize:r.fontSize,fontWeight:r.fontWeight,lineHeight:r.lineHeight})),i=m(()=>({borderRadius:r.borderRadius,heightTiny:r.heightTiny,heightSmall:r.heightSmall,heightMedium:r.heightMedium,heightLarge:r.heightLarge})),d=m(()=>({boxShadow1:r.boxShadow1,boxShadow2:r.boxShadow2,boxShadow3:r.boxShadow3})),u=()=>{t.theme==="dark"?t.setDarkThemeVars(r):t.setlightThemeVars(r)},C=V([{label:"Light",value:"light"},{label:"Dark",value:"dark"}]),w=V(t.theme),_=z=>{w.value=z,t.setTheme(z),r=z==="dark"?t.darkThemeVars:t.normalThemeVars},R=(z,P)=>{r[z]=P,u()};return(z,P)=>{const re=zr,we=Et,S=$r,I=Wt,H=Zt,be=qt,ze=Lt,D=jt,Ae=Nt;return ie(),Xe("div",Ar,[x(Ae,{"theme-overrides":z.themeOverrides},{default:$(()=>[x(D,null,{default:$(()=>[x(S,null,{default:$(()=>[x(re,null,{default:$(()=>[Ot("Theme Control")]),_:1}),x(we,{value:w.value,"onUpdate:value":[P[0]||(P[0]=A=>w.value=A),_],options:C.value,placeholder:"Select Theme"},null,8,["value","options"])]),_:1}),x(ze,null,{default:$(()=>[x(be,null,{default:$(()=>[x(H,{type:"line",animated:""},{default:$(()=>[x(I,{name:"general",tab:"General"},{default:$(()=>[x(ve,{variables:o.value,"onUpdate:variable":R},null,8,["variables"])]),_:1}),x(I,{name:"colors",tab:"Colors"},{default:$(()=>[x(ve,{variables:a.value,"onUpdate:variable":R},null,8,["variables"])]),_:1}),x(I,{name:"typography",tab:"Typography"},{default:$(()=>[x(ve,{variables:n.value,"onUpdate:variable":R},null,8,["variables"])]),_:1}),x(I,{name:"sizes",tab:"Sizes"},{default:$(()=>[x(ve,{variables:i.value,"onUpdate:variable":R},null,8,["variables"])]),_:1}),x(I,{name:"effects",tab:"Effects"},{default:$(()=>[x(ve,{variables:d.value,"onUpdate:variable":R},null,8,["variables"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["theme-overrides"])])}}};export{Hr as default};
