import{l as h,k as y,o as S,d as I,u as we,b9 as gt,h as d,bT as Z,ai as O,bU as K,bV as oe,bW as L,bX as he,bY as ae,g as z,a3 as pe,a4 as be,c as m,a as xt,f as Ke,Z as We,bZ as ye,b_ as Be,b$ as Ne,c0 as Fe,$ as yt,n as Ct,m as W,s as wt,q as kt,v as X,c1 as St,B as $t,z as Te,A as Ge,y as Ut,a0 as re,C as Pe,D as Rt,E as He,P as Vt,V as zt,G as Pt,I as _t,T as At,J as Mt,K as It,Q as Se,N as $e,O as Dt,c2 as Xe,c3 as Je,bs as Tt,aE as ce,aF as Ue,aK as V,aN as Qe,a8 as Bt,aO as Nt,aG as b,aL as x,aS as Ft,aJ as Ht,c4 as Ot,aP as Lt,aQ as Et,aM as Y,aH as qt,c5 as jt,aU as Gt,c6 as Zt}from"./index-b7e16cdb.js";import{N as Kt}from"./FormItem-b472662c.js";import{N as Ye}from"./Input-f7e74d79.js";import{a as Wt,N as Xt}from"./Grid-509b3f39.js";import{N as Jt,a as ve}from"./Tabs-144246ab.js";import"./get-slot-1efb97e5.js";import"./Add-112b6895.js";function et(e,t,r){t/=100,r/=100;const o=t*Math.min(r,1-r)+r;return[e,o?(2-2*r/o)*100:0,o*100]}function ze(e,t,r){t/=100,r/=100;const o=r-r*t/2,n=Math.min(o,1-o);return[e,n?(r-o)/n*100:0,o*100]}function G(e,t,r){t/=100,r/=100;let o=(n,a=(n+e/60)%6)=>r-r*t*Math.max(Math.min(a,4-a,1),0);return[o(5)*255,o(3)*255,o(1)*255]}function Oe(e,t,r){e/=255,t/=255,r/=255;let o=Math.max(e,t,r),n=o-Math.min(e,t,r),a=n&&(o==e?(t-r)/n:o==t?2+(r-e)/n:4+(e-t)/n);return[60*(a<0?a+6:a),o&&n/o*100,o*100]}function Le(e,t,r){e/=255,t/=255,r/=255;let o=Math.max(e,t,r),n=o-Math.min(e,t,r),a=1-Math.abs(o+o-n-1),s=n&&(o==e?(t-r)/n:o==t?2+(r-e)/n:4+(e-t)/n);return[60*(s<0?s+6:s),a?n/a*100:0,(o+o-n)*50]}function Ee(e,t,r){t/=100,r/=100;let o=t*Math.min(r,1-r),n=(a,s=(a+e/30)%12)=>r-o*Math.max(Math.min(s-3,9-s,1),-1);return[n(0)*255,n(8)*255,n(4)*255]}const Qt=h("input-group",`
 display: inline-flex;
 width: 100%;
 flex-wrap: nowrap;
 vertical-align: bottom;
`,[y(">",[h("input",[y("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),y("&:not(:first-child)",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 margin-left: -1px!important;
 `)]),h("button",[y("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `,[S("state-border, border",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)]),y("&:not(:first-child)",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `,[S("state-border, border",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])]),y("*",[y("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `,[y(">",[h("input",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),h("base-selection",[h("base-selection-label",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),h("base-selection-tags",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),S("box-shadow, border, state-border",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)])])]),y("&:not(:first-child)",`
 margin-left: -1px!important;
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `,[y(">",[h("input",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),h("base-selection",[h("base-selection-label",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),h("base-selection-tags",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),S("box-shadow, border, state-border",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])])])])])]),Yt={},er=I({name:"InputGroup",props:Yt,setup(e){const{mergedClsPrefixRef:t}=we(e);return gt("-input-group",Qt,t),{mergedClsPrefix:t}},render(){const{mergedClsPrefix:e}=this;return d("div",{class:`${e}-input-group`},this.$slots)}});function tr(e,t){switch(e[0]){case"hex":return t?"#000000FF":"#000000";case"rgb":return t?"rgba(0, 0, 0, 1)":"rgb(0, 0, 0)";case"hsl":return t?"hsla(0, 0%, 0%, 1)":"hsl(0, 0%, 0%)";case"hsv":return t?"hsva(0, 0%, 0%, 1)":"hsv(0, 0%, 0%)"}return"#000000"}function Ce(e){return e===null?null:/^ *#/.test(e)?"hex":e.includes("rgb")?"rgb":e.includes("hsl")?"hsl":e.includes("hsv")?"hsv":null}function rr(e){return e=Math.round(e),e>=360?359:e<0?0:e}function or(e){return e=Math.round(e*100)/100,e>1?1:e<0?0:e}const ar={rgb:{hex(e){return Z(O(e))},hsl(e){const[t,r,o,n]=O(e);return K([...Le(t,r,o),n])},hsv(e){const[t,r,o,n]=O(e);return oe([...Oe(t,r,o),n])}},hex:{rgb(e){return L(O(e))},hsl(e){const[t,r,o,n]=O(e);return K([...Le(t,r,o),n])},hsv(e){const[t,r,o,n]=O(e);return oe([...Oe(t,r,o),n])}},hsl:{hex(e){const[t,r,o,n]=he(e);return Z([...Ee(t,r,o),n])},rgb(e){const[t,r,o,n]=he(e);return L([...Ee(t,r,o),n])},hsv(e){const[t,r,o,n]=he(e);return oe([...et(t,r,o),n])}},hsv:{hex(e){const[t,r,o,n]=ae(e);return Z([...G(t,r,o),n])},rgb(e){const[t,r,o,n]=ae(e);return L([...G(t,r,o),n])},hsl(e){const[t,r,o,n]=ae(e);return K([...ze(t,r,o),n])}}};function tt(e,t,r){return r=r||Ce(e),r?r===t?e:ar[r][t](e):null}const ue="12px",nr=12,ee="6px",lr=6,ir="linear-gradient(90deg,red,#ff0 16.66%,#0f0 33.33%,#0ff 50%,#00f 66.66%,#f0f 83.33%,red)",sr=I({name:"HueSlider",props:{clsPrefix:{type:String,required:!0},hue:{type:Number,required:!0},onUpdateHue:{type:Function,required:!0},onComplete:Function},setup(e){const t=z(null);function r(a){t.value&&(pe("mousemove",document,o),pe("mouseup",document,n),o(a))}function o(a){const{value:s}=t;if(!s)return;const{width:i,left:u}=s.getBoundingClientRect(),$=rr((a.clientX-u-lr)/(i-nr)*360);e.onUpdateHue($)}function n(){var a;be("mousemove",document,o),be("mouseup",document,n),(a=e.onComplete)===null||a===void 0||a.call(e)}return{railRef:t,handleMouseDown:r}},render(){const{clsPrefix:e}=this;return d("div",{class:`${e}-color-picker-slider`,style:{height:ue,borderRadius:ee}},d("div",{ref:"railRef",style:{boxShadow:"inset 0 0 2px 0 rgba(0, 0, 0, .24)",boxSizing:"border-box",backgroundImage:ir,height:ue,borderRadius:ee,position:"relative"},onMousedown:this.handleMouseDown},d("div",{style:{position:"absolute",left:ee,right:ee,top:0,bottom:0}},d("div",{class:`${e}-color-picker-handle`,style:{left:`calc((${this.hue}%) / 359 * 100 - ${ee})`,borderRadius:ee,width:ue,height:ue}},d("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:`hsl(${this.hue}, 100%, 50%)`,borderRadius:ee,width:ue,height:ue}})))))}}),ge="12px",dr=12,te="6px",ur=I({name:"AlphaSlider",props:{clsPrefix:{type:String,required:!0},rgba:{type:Array,default:null},alpha:{type:Number,default:0},onUpdateAlpha:{type:Function,required:!0},onComplete:Function},setup(e){const t=z(null);function r(a){!t.value||!e.rgba||(pe("mousemove",document,o),pe("mouseup",document,n),o(a))}function o(a){const{value:s}=t;if(!s)return;const{width:i,left:u}=s.getBoundingClientRect(),$=(a.clientX-u)/(i-dr);e.onUpdateAlpha(or($))}function n(){var a;be("mousemove",document,o),be("mouseup",document,n),(a=e.onComplete)===null||a===void 0||a.call(e)}return{railRef:t,railBackgroundImage:m(()=>{const{rgba:a}=e;return a?`linear-gradient(to right, rgba(${a[0]}, ${a[1]}, ${a[2]}, 0) 0%, rgba(${a[0]}, ${a[1]}, ${a[2]}, 1) 100%)`:""}),handleMouseDown:r}},render(){const{clsPrefix:e}=this;return d("div",{class:`${e}-color-picker-slider`,ref:"railRef",style:{height:ge,borderRadius:te},onMousedown:this.handleMouseDown},d("div",{style:{borderRadius:te,position:"absolute",left:0,right:0,top:0,bottom:0,overflow:"hidden"}},d("div",{class:`${e}-color-picker-checkboard`}),d("div",{class:`${e}-color-picker-slider__image`,style:{backgroundImage:this.railBackgroundImage}})),this.rgba&&d("div",{style:{position:"absolute",left:te,right:te,top:0,bottom:0}},d("div",{class:`${e}-color-picker-handle`,style:{left:`calc(${this.alpha*100}% - ${te})`,borderRadius:te,width:ge,height:ge}},d("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:L(this.rgba),borderRadius:te,width:ge,height:ge}}))))}}),Re="12px",Ve="6px",cr=I({name:"Pallete",props:{clsPrefix:{type:String,required:!0},rgba:{type:Array,default:null},displayedHue:{type:Number,required:!0},displayedSv:{type:Array,required:!0},onUpdateSV:{type:Function,required:!0},onComplete:Function},setup(e){const t=z(null);function r(a){t.value&&(pe("mousemove",document,o),pe("mouseup",document,n),o(a))}function o(a){const{value:s}=t;if(!s)return;const{width:i,height:u,left:$,bottom:k}=s.getBoundingClientRect(),U=(k-a.clientY)/u,P=(a.clientX-$)/i,p=100*(P>1?1:P<0?0:P),_=100*(U>1?1:U<0?0:U);e.onUpdateSV(p,_)}function n(){var a;be("mousemove",document,o),be("mouseup",document,n),(a=e.onComplete)===null||a===void 0||a.call(e)}return{palleteRef:t,handleColor:m(()=>{const{rgba:a}=e;return a?`rgb(${a[0]}, ${a[1]}, ${a[2]})`:""}),handleMouseDown:r}},render(){const{clsPrefix:e}=this;return d("div",{class:`${e}-color-picker-pallete`,onMousedown:this.handleMouseDown,ref:"palleteRef"},d("div",{class:`${e}-color-picker-pallete__layer`,style:{backgroundImage:`linear-gradient(90deg, white, hsl(${this.displayedHue}, 100%, 50%))`}}),d("div",{class:`${e}-color-picker-pallete__layer ${e}-color-picker-pallete__layer--shadowed`,style:{backgroundImage:"linear-gradient(180deg, rgba(0, 0, 0, 0%), rgba(0, 0, 0, 100%))"}}),this.rgba&&d("div",{class:`${e}-color-picker-handle`,style:{width:Re,height:Re,borderRadius:Ve,left:`calc(${this.displayedSv[0]}% - ${Ve})`,bottom:`calc(${this.displayedSv[1]}% - ${Ve})`}},d("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:this.handleColor,borderRadius:Ve,width:Re,height:Re}})))}}),qe=xt("n-color-picker");function hr(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(Number.parseInt(e),255)):!1}function pr(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(Number.parseInt(e),360)):!1}function br(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(Number.parseInt(e),100)):!1}function fr(e){const t=e.trim();return/^#[0-9a-fA-F]+$/.test(t)?[4,5,7,9].includes(t.length):!1}function mr(e){return/^\d{1,3}\.?\d*%$/.test(e.trim())?Math.max(0,Math.min(Number.parseInt(e)/100,100)):!1}const vr={paddingSmall:"0 4px"},Ze=I({name:"ColorInputUnit",props:{label:{type:String,required:!0},value:{type:[Number,String],default:null},showAlpha:Boolean,onUpdateValue:{type:Function,required:!0}},setup(e){const t=z(""),{themeRef:r}=Ke(qe,null);We(()=>{t.value=o()});function o(){const{value:s}=e;if(s===null)return"";const{label:i}=e;return i==="HEX"?s:i==="A"?`${Math.floor(s*100)}%`:String(Math.floor(s))}function n(s){t.value=s}function a(s){let i,u;switch(e.label){case"HEX":u=fr(s),u&&e.onUpdateValue(s),t.value=o();break;case"H":i=pr(s),i===!1?t.value=o():e.onUpdateValue(i);break;case"S":case"L":case"V":i=br(s),i===!1?t.value=o():e.onUpdateValue(i);break;case"A":i=mr(s),i===!1?t.value=o():e.onUpdateValue(i);break;case"R":case"G":case"B":i=hr(s),i===!1?t.value=o():e.onUpdateValue(i);break}}return{mergedTheme:r,inputValue:t,handleInputChange:a,handleInputUpdateValue:n}},render(){const{mergedTheme:e}=this;return d(Ye,{size:"small",placeholder:this.label,theme:e.peers.Input,themeOverrides:e.peerOverrides.Input,builtinThemeOverrides:vr,value:this.inputValue,onUpdateValue:this.handleInputUpdateValue,onChange:this.handleInputChange,style:this.label==="A"?"flex-grow: 1.25;":""})}}),gr=I({name:"ColorInput",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},modes:{type:Array,required:!0},showAlpha:{type:Boolean,required:!0},value:{type:String,default:null},valueArr:{type:Array,default:null},onUpdateValue:{type:Function,required:!0},onUpdateMode:{type:Function,required:!0}},setup(e){return{handleUnitUpdateValue(t,r){const{showAlpha:o}=e;if(e.mode==="hex"){e.onUpdateValue((o?Z:ye)(r));return}let n;switch(e.valueArr===null?n=[0,0,0,0]:n=Array.from(e.valueArr),e.mode){case"hsv":n[t]=r,e.onUpdateValue((o?oe:Fe)(n));break;case"rgb":n[t]=r,e.onUpdateValue((o?L:Ne)(n));break;case"hsl":n[t]=r,e.onUpdateValue((o?K:Be)(n));break}}}},render(){const{clsPrefix:e,modes:t}=this;return d("div",{class:`${e}-color-picker-input`},d("div",{class:`${e}-color-picker-input__mode`,onClick:this.onUpdateMode,style:{cursor:t.length===1?"":"pointer"}},this.mode.toUpperCase()+(this.showAlpha?"A":"")),d(er,null,{default:()=>{const{mode:r,valueArr:o,showAlpha:n}=this;if(r==="hex"){let a=null;try{a=o===null?null:(n?Z:ye)(o)}catch{}return d(Ze,{label:"HEX",showAlpha:n,value:a,onUpdateValue:s=>{this.handleUnitUpdateValue(0,s)}})}return(r+(n?"a":"")).split("").map((a,s)=>d(Ze,{label:a.toUpperCase(),value:o===null?null:o[s],onUpdateValue:i=>{this.handleUnitUpdateValue(s,i)}}))}}))}}),xr=I({name:"ColorPickerTrigger",props:{clsPrefix:{type:String,required:!0},value:{type:String,default:null},hsla:{type:Array,default:null},disabled:Boolean,onClick:Function},setup(e){const{colorPickerSlots:t,renderLabelRef:r}=Ke(qe,null);return()=>{const{hsla:o,value:n,clsPrefix:a,onClick:s,disabled:i}=e,u=t.label||r.value;return d("div",{class:[`${a}-color-picker-trigger`,i&&`${a}-color-picker-trigger--disabled`],onClick:i?void 0:s},d("div",{class:`${a}-color-picker-trigger__fill`},d("div",{class:`${a}-color-picker-checkboard`}),d("div",{style:{position:"absolute",left:0,right:0,top:0,bottom:0,backgroundColor:o?K(o):""}}),n&&o?d("div",{class:`${a}-color-picker-trigger__value`,style:{color:o[2]>50||o[3]<.5?"black":"white"}},u?u(n):n):null))}}});function yr(e,t){if(t==="hsv"){const[r,o,n,a]=ae(e);return L([...G(r,o,n),a])}return e}function Cr(e){const t=document.createElement("canvas").getContext("2d");return t?(t.fillStyle=e,t.fillStyle):"#000000"}const wr=I({name:"ColorPickerSwatches",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},swatches:{type:Array,required:!0},onUpdateColor:{type:Function,required:!0}},setup(e){const t=m(()=>e.swatches.map(a=>{const s=Ce(a);return{value:a,mode:s,legalValue:yr(a,s)}}));function r(a){const{mode:s}=e;let{value:i,mode:u}=a;return u||(u="hex",/^[a-zA-Z]+$/.test(i)?i=Cr(i):(yt("color-picker",`color ${i} in swatches is invalid.`),i="#000000")),u===s?i:tt(i,s,u)}function o(a){e.onUpdateColor(r(a))}function n(a,s){a.key==="Enter"&&o(s)}return{parsedSwatchesRef:t,handleSwatchSelect:o,handleSwatchKeyDown:n}},render(){const{clsPrefix:e}=this;return d("div",{class:`${e}-color-picker-swatches`},this.parsedSwatchesRef.map(t=>d("div",{class:`${e}-color-picker-swatch`,tabindex:0,onClick:()=>{this.handleSwatchSelect(t)},onKeydown:r=>{this.handleSwatchKeyDown(r,t)}},d("div",{class:`${e}-color-picker-swatch__fill`,style:{background:t.legalValue}}))))}}),kr=I({name:"ColorPreview",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},color:{type:String,default:null,validator:e=>{const t=Ce(e);return!!(!e||t&&t!=="hsv")}},onUpdateColor:{type:Function,required:!0}},setup(e){function t(r){var o;const n=r.target.value;(o=e.onUpdateColor)===null||o===void 0||o.call(e,tt(n.toUpperCase(),e.mode,"hex")),r.stopPropagation()}return{handleChange:t}},render(){const{clsPrefix:e}=this;return d("div",{class:`${e}-color-picker-preview__preview`},d("span",{class:`${e}-color-picker-preview__fill`,style:{background:this.color||"#000000"}}),d("input",{class:`${e}-color-picker-preview__input`,type:"color",value:this.color,onChange:this.handleChange}))}}),Sr=y([h("color-picker",`
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
 `,[Ct(),h("input",`
 text-align: center;
 `)]),h("color-picker-checkboard",`
 background: white; 
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[y("&::after",`
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
 `,[S("image",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `),y("&::after",`
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
 `,[S("fill",`
 box-sizing: border-box;
 border: 2px solid white;
 `)]),h("color-picker-pallete",`
 height: 180px;
 position: relative;
 margin-bottom: 8px;
 cursor: crosshair;
 `,[S("layer",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[W("shadowed",`
 box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, .24);
 `)])]),h("color-picker-preview",`
 display: flex;
 `,[S("sliders",`
 flex: 1 0 auto;
 `),S("preview",`
 position: relative;
 height: 30px;
 width: 30px;
 margin: 0 0 8px 6px;
 border-radius: 50%;
 box-shadow: rgba(0, 0, 0, .15) 0px 0px 0px 1px inset;
 overflow: hidden;
 `),S("fill",`
 display: block;
 width: 30px;
 height: 30px;
 `),S("input",`
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
 `),S("mode",`
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
 `,[S("value",`
 white-space: nowrap;
 position: relative;
 `),S("fill",`
 border-radius: var(--n-border-radius);
 position: absolute;
 display: flex;
 align-items: center;
 justify-content: center;
 left: 4px;
 right: 4px;
 top: 4px;
 bottom: 4px;
 `),W("disabled","cursor: not-allowed"),h("color-picker-checkboard",`
 border-radius: var(--n-border-radius);
 `,[y("&::after",`
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
 `,[S("fill",`
 position: relative;
 width: 100%;
 height: 100%;
 border-radius: 3px;
 box-shadow: rgba(0, 0, 0, .15) 0px 0px 0px 1px inset;
 cursor: pointer;
 `),y("&:focus",`
 outline: none;
 `,[S("fill",[y("&::after",`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 background: inherit;
 filter: blur(2px);
 content: "";
 `)])])])])]),$r=Object.assign(Object.assign({},X.props),{value:String,show:{type:Boolean,default:void 0},defaultShow:Boolean,defaultValue:String,modes:{type:Array,default:()=>["rgb","hex","hsl"]},placement:{type:String,default:"bottom-start"},to:He.propTo,showAlpha:{type:Boolean,default:!0},showPreview:Boolean,swatches:Array,disabled:{type:Boolean,default:void 0},actions:{type:Array,default:null},internalActions:Array,size:String,renderLabel:Function,onComplete:Function,onConfirm:Function,onClear:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),Ur=I({name:"ColorPicker",props:$r,setup(e,{slots:t}){const r=z(null);let o=null;const n=wt(e),{mergedSizeRef:a,mergedDisabledRef:s}=n,{localeRef:i}=kt("global"),{mergedClsPrefixRef:u,namespaceRef:$,inlineThemeDisabled:k}=we(e),U=X("ColorPicker","-color-picker",Sr,St,e,u);$t(qe,{themeRef:U,renderLabelRef:Te(e,"renderLabel"),colorPickerSlots:t});const P=z(e.defaultShow),p=Ge(Te(e,"show"),P);function _(l){const{onUpdateShow:c,"onUpdate:show":v}=e;c&&Se(c,l),v&&Se(v,l),P.value=l}const{defaultValue:ne}=e,je=z(ne===void 0?tr(e.modes,e.showAlpha):ne),A=Ge(Te(e,"value"),je),le=z([A.value]),F=z(0),_e=m(()=>Ce(A.value)),{modes:rt}=e,N=z(Ce(A.value)||rt[0]||"rgb");function ot(){const{modes:l}=e,{value:c}=N,v=l.findIndex(g=>g===c);~v?N.value=l[(v+1)%l.length]:N.value="rgb"}let D,T,ie,se,E,q,j,B;const me=m(()=>{const{value:l}=A;if(!l)return null;switch(_e.value){case"hsv":return ae(l);case"hsl":return[D,T,ie,B]=he(l),[...et(D,T,ie),B];case"rgb":case"hex":return[E,q,j,B]=O(l),[...Oe(E,q,j),B]}}),J=m(()=>{const{value:l}=A;if(!l)return null;switch(_e.value){case"rgb":case"hex":return O(l);case"hsv":return[D,T,se,B]=ae(l),[...G(D,T,se),B];case"hsl":return[D,T,ie,B]=he(l),[...Ee(D,T,ie),B]}}),Ae=m(()=>{const{value:l}=A;if(!l)return null;switch(_e.value){case"hsl":return he(l);case"hsv":return[D,T,se,B]=ae(l),[...ze(D,T,se),B];case"rgb":case"hex":return[E,q,j,B]=O(l),[...Le(E,q,j),B]}}),at=m(()=>{switch(N.value){case"rgb":case"hex":return J.value;case"hsv":return me.value;case"hsl":return Ae.value}}),ke=z(0),Me=z(1),Ie=z([0,0]);function nt(l,c){const{value:v}=me,g=ke.value,C=v?v[3]:1;Ie.value=[l,c];const{showAlpha:f}=e;switch(N.value){case"hsv":w((f?oe:Fe)([g,l,c,C]),"cursor");break;case"hsl":w((f?K:Be)([...ze(g,l,c),C]),"cursor");break;case"rgb":w((f?L:Ne)([...G(g,l,c),C]),"cursor");break;case"hex":w((f?Z:ye)([...G(g,l,c),C]),"cursor");break}}function lt(l){ke.value=l;const{value:c}=me;if(!c)return;const[,v,g,C]=c,{showAlpha:f}=e;switch(N.value){case"hsv":w((f?oe:Fe)([l,v,g,C]),"cursor");break;case"rgb":w((f?L:Ne)([...G(l,v,g),C]),"cursor");break;case"hex":w((f?Z:ye)([...G(l,v,g),C]),"cursor");break;case"hsl":w((f?K:Be)([...ze(l,v,g),C]),"cursor");break}}function it(l){switch(N.value){case"hsv":[D,T,se]=me.value,w(oe([D,T,se,l]),"cursor");break;case"rgb":[E,q,j]=J.value,w(L([E,q,j,l]),"cursor");break;case"hex":[E,q,j]=J.value,w(Z([E,q,j,l]),"cursor");break;case"hsl":[D,T,ie]=Ae.value,w(K([D,T,ie,l]),"cursor");break}Me.value=l}function w(l,c){c==="cursor"?o=l:o=null;const{nTriggerFormChange:v,nTriggerFormInput:g}=n,{onUpdateValue:C,"onUpdate:value":f}=e;C&&Se(C,l),f&&Se(f,l),v(),g(),je.value=l}function st(l){w(l,"input"),Dt(de)}function de(l=!0){const{value:c}=A;if(c){const{nTriggerFormChange:v,nTriggerFormInput:g}=n,{onComplete:C}=e;C&&C(c);const{value:f}=le,{value:M}=F;l&&(f.splice(M+1,f.length,c),F.value=M+1),v(),g()}}function dt(){const{value:l}=F;l-1<0||(w(le.value[l-1],"input"),de(!1),F.value=l-1)}function ut(){const{value:l}=F;l<0||l+1>=le.value.length||(w(le.value[l+1],"input"),de(!1),F.value=l+1)}function ct(){w(null,"input");const{onClear:l}=e;l&&l(),_(!1)}function ht(){const{value:l}=A,{onConfirm:c}=e;c&&c(l),_(!1)}const pt=m(()=>F.value>=1),bt=m(()=>{const{value:l}=le;return l.length>1&&F.value<l.length-1});Ut(p,l=>{l||(le.value=[A.value],F.value=0)}),We(()=>{if(!(o&&o===A.value)){const{value:l}=me;l&&(ke.value=l[0],Me.value=l[3],Ie.value=[l[1],l[2]])}o=null});const De=m(()=>{const{value:l}=a,{common:{cubicBezierEaseInOut:c},self:{textColor:v,color:g,panelFontSize:C,boxShadow:f,border:M,borderRadius:R,dividerColor:Q,[re("height",l)]:mt,[re("fontSize",l)]:vt}}=U.value;return{"--n-bezier":c,"--n-text-color":v,"--n-color":g,"--n-panel-font-size":C,"--n-font-size":vt,"--n-box-shadow":f,"--n-border":M,"--n-border-radius":R,"--n-height":mt,"--n-divider-color":Q}}),H=k?Pe("color-picker",m(()=>a.value[0]),De,e):void 0;function ft(){var l;const{value:c}=J,{value:v}=ke,{internalActions:g,modes:C,actions:f}=e,{value:M}=U,{value:R}=u;return d("div",{class:[`${R}-color-picker-panel`,H==null?void 0:H.themeClass.value],onDragstart:Q=>{Q.preventDefault()},style:k?void 0:De.value},d("div",{class:`${R}-color-picker-control`},d(cr,{clsPrefix:R,rgba:c,displayedHue:v,displayedSv:Ie.value,onUpdateSV:nt,onComplete:de}),d("div",{class:`${R}-color-picker-preview`},d("div",{class:`${R}-color-picker-preview__sliders`},d(sr,{clsPrefix:R,hue:v,onUpdateHue:lt,onComplete:de}),e.showAlpha?d(ur,{clsPrefix:R,rgba:c,alpha:Me.value,onUpdateAlpha:it,onComplete:de}):null),e.showPreview?d(kr,{clsPrefix:R,mode:N.value,color:J.value&&ye(J.value),onUpdateColor:Q=>{w(Q,"input")}}):null),d(gr,{clsPrefix:R,showAlpha:e.showAlpha,mode:N.value,modes:C,onUpdateMode:ot,value:A.value,valueArr:at.value,onUpdateValue:st}),((l=e.swatches)===null||l===void 0?void 0:l.length)&&d(wr,{clsPrefix:R,mode:N.value,swatches:e.swatches,onUpdateColor:Q=>{w(Q,"input")}})),f!=null&&f.length?d("div",{class:`${R}-color-picker-action`},f.includes("confirm")&&d($e,{size:"small",onClick:ht,theme:M.peers.Button,themeOverrides:M.peerOverrides.Button},{default:()=>i.value.confirm}),f.includes("clear")&&d($e,{size:"small",onClick:ct,disabled:!A.value,theme:M.peers.Button,themeOverrides:M.peerOverrides.Button},{default:()=>i.value.clear})):null,t.action?d("div",{class:`${R}-color-picker-action`},{default:t.action}):g?d("div",{class:`${R}-color-picker-action`},g.includes("undo")&&d($e,{size:"small",onClick:dt,disabled:!pt.value,theme:M.peers.Button,themeOverrides:M.peerOverrides.Button},{default:()=>i.value.undo}),g.includes("redo")&&d($e,{size:"small",onClick:ut,disabled:!bt.value,theme:M.peers.Button,themeOverrides:M.peerOverrides.Button},{default:()=>i.value.redo})):null)}return{mergedClsPrefix:u,namespace:$,selfRef:r,hsla:Ae,rgba:J,mergedShow:p,mergedDisabled:s,isMounted:Rt(),adjustedTo:He(e),mergedValue:A,handleTriggerClick(){_(!0)},handleClickOutside(l){var c;!((c=r.value)===null||c===void 0)&&c.contains(Vt(l))||_(!1)},renderPanel:ft,cssVars:k?void 0:De,themeClass:H==null?void 0:H.themeClass,onRender:H==null?void 0:H.onRender}},render(){const{$slots:e,mergedClsPrefix:t,onRender:r}=this;return r==null||r(),d("div",{class:[this.themeClass,`${t}-color-picker`],ref:"selfRef",style:this.cssVars},d(zt,null,{default:()=>[d(Pt,null,{default:()=>d(xr,{clsPrefix:t,value:this.mergedValue,hsla:this.hsla,disabled:this.mergedDisabled,onClick:this.handleTriggerClick},{label:e.label})}),d(_t,{placement:this.placement,show:this.mergedShow,containerClass:this.namespace,teleportDisabled:this.adjustedTo===He.tdkey,to:this.adjustedTo},{default:()=>d(At,{name:"fade-in-scale-up-transition",appear:this.isMounted},{default:()=>this.mergedShow?Mt(this.renderPanel(),[[It,this.handleClickOutside,void 0,{capture:!0}]]):null})})]}))}}),Rr=h("layout-header",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 box-sizing: border-box;
 width: 100%;
 background-color: var(--n-color);
 color: var(--n-text-color);
`,[W("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 `),W("bordered",`
 border-bottom: solid 1px var(--n-border-color);
 `)]),Vr={position:Xe,inverted:Boolean,bordered:{type:Boolean,default:!1}},zr=I({name:"LayoutHeader",props:Object.assign(Object.assign({},X.props),Vr),setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:r}=we(e),o=X("Layout","-layout-header",Rr,Je,e,t),n=m(()=>{const{common:{cubicBezierEaseInOut:s},self:i}=o.value,u={"--n-bezier":s};return e.inverted?(u["--n-color"]=i.headerColorInverted,u["--n-text-color"]=i.textColorInverted,u["--n-border-color"]=i.headerBorderColorInverted):(u["--n-color"]=i.headerColor,u["--n-text-color"]=i.textColor,u["--n-border-color"]=i.headerBorderColor),u}),a=r?Pe("layout-header",m(()=>e.inverted?"a":"b"),n,e):void 0;return{mergedClsPrefix:t,cssVars:r?void 0:n,themeClass:a==null?void 0:a.themeClass,onRender:a==null?void 0:a.onRender}},render(){var e;const{mergedClsPrefix:t}=this;return(e=this.onRender)===null||e===void 0||e.call(this),d("div",{class:[`${t}-layout-header`,this.themeClass,this.position&&`${t}-layout-header--${this.position}-positioned`,this.bordered&&`${t}-layout-header--bordered`],style:this.cssVars},this.$slots)}}),Pr=h("layout-footer",`
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 color: var(--n-text-color);
 background-color: var(--n-color);
 box-sizing: border-box;
`,[W("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 bottom: 0;
 `),W("bordered",`
 border-top: solid 1px var(--n-border-color);
 `)]),_r=Object.assign(Object.assign({},X.props),{inverted:Boolean,position:Xe,bordered:Boolean}),Ar=I({name:"LayoutFooter",props:_r,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:r}=we(e),o=X("Layout","-layout-footer",Pr,Je,e,t),n=m(()=>{const{common:{cubicBezierEaseInOut:s},self:i}=o.value,u={"--n-bezier":s};return e.inverted?(u["--n-color"]=i.footerColorInverted,u["--n-text-color"]=i.textColorInverted,u["--n-border-color"]=i.footerBorderColorInverted):(u["--n-color"]=i.footerColor,u["--n-text-color"]=i.textColor,u["--n-border-color"]=i.footerBorderColor),u}),a=r?Pe("layout-footer",m(()=>e.inverted?"a":"b"),n,e):void 0;return{mergedClsPrefix:t,cssVars:r?void 0:n,themeClass:a==null?void 0:a.themeClass,onRender:a==null?void 0:a.onRender}},render(){var e;const{mergedClsPrefix:t}=this;return(e=this.onRender)===null||e===void 0||e.call(this),d("div",{class:[`${t}-layout-footer`,this.themeClass,this.position&&`${t}-layout-footer--${this.position}-positioned`,this.bordered&&`${t}-layout-footer--bordered`],style:this.cssVars},this.$slots)}}),Mr=h("h",`
 font-size: var(--n-font-size);
 font-weight: var(--n-font-weight);
 margin: var(--n-margin);
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
`,[y("&:first-child",{marginTop:0}),W("prefix-bar",{position:"relative",paddingLeft:"var(--n-prefix-width)"},[W("align-text",{paddingLeft:0},[y("&::before",{left:"calc(-1 * var(--n-prefix-width))"})]),y("&::before",`
 content: "";
 width: var(--n-bar-width);
 border-radius: calc(var(--n-bar-width) / 2);
 transition: background-color .3s var(--n-bezier);
 left: 0;
 top: 0;
 bottom: 0;
 position: absolute;
 `),y("&::before",{backgroundColor:"var(--n-bar-color)"})])]),Ir=Object.assign(Object.assign({},X.props),{type:{type:String,default:"default"},prefix:String,alignText:Boolean}),fe=e=>I({name:`H${e}`,props:Ir,setup(t){const{mergedClsPrefixRef:r,inlineThemeDisabled:o}=we(t),n=X("Typography","-h",Mr,Tt,t,r),a=m(()=>{const{type:i}=t,{common:{cubicBezierEaseInOut:u},self:{headerFontWeight:$,headerTextColor:k,[re("headerPrefixWidth",e)]:U,[re("headerFontSize",e)]:P,[re("headerMargin",e)]:p,[re("headerBarWidth",e)]:_,[re("headerBarColor",i)]:ne}}=n.value;return{"--n-bezier":u,"--n-font-size":P,"--n-margin":p,"--n-bar-color":ne,"--n-bar-width":_,"--n-font-weight":$,"--n-text-color":k,"--n-prefix-width":U}}),s=o?Pe(`h${e}`,m(()=>t.type[0]),a,t):void 0;return{mergedClsPrefix:r,cssVars:o?void 0:a,themeClass:s==null?void 0:s.themeClass,onRender:s==null?void 0:s.onRender}},render(){var t;const{prefix:r,alignText:o,mergedClsPrefix:n,cssVars:a,$slots:s}=this;return(t=this.onRender)===null||t===void 0||t.call(this),d(`h${e}`,{class:[`${n}-h`,`${n}-h${e}`,this.themeClass,{[`${n}-h--prefix-bar`]:r,[`${n}-h--align-text`]:o}],style:a},s)}}),Dr=fe("1");fe("2");fe("3");fe("4");fe("5");fe("6");const xe={__name:"ThemeSection",props:{variables:{type:Object,required:!0}},emits:["update:variable"],setup(e,{emit:t}){const r=t,o=i=>i.replace(/([A-Z])/g," $1").replace(/^./,u=>u.toUpperCase()),n=i=>/^(#|rgb|hsl)/.test(i),a=(i,u)=>{r("update:variable",i,u)},s=(i,u)=>{r("update:variable",i,u)};return(i,u)=>(ce(),Ue(b(Xt),{"x-gap":12,"y-gap":8,cols:24},{default:V(()=>[(ce(!0),Qe(Bt,null,Nt(e.variables,($,k)=>(ce(),Ue(b(Wt),{key:k,span:12},{default:V(()=>[x(b(Kt),{label:o(k)},{default:V(()=>[n($)?(ce(),Ue(b(Ur),{key:0,value:$,"onUpdate:value":U=>a(k,U)},null,8,["value","onUpdate:value"])):(ce(),Ue(b(Ye),{key:1,value:$,"onUpdate:value":U=>s(k,U)},null,8,["value","onUpdate:value"]))]),_:2},1032,["label"])]),_:2},1024))),128))]),_:1}))}},Tr={class:"mx-8 my-4"},qr={__name:"index",setup(e){Ft();const t=Ht();let r=t.theme==="dark"?t.darkThemeVars:t.normalThemeVars;const o=m(()=>({baseColor:r.baseColor,bodyColor:r.bodyColor,popoverColor:r.popoverColor,cardColor:r.cardColor,modalColor:r.modalColor,tableColor:r.tableColor})),n=m(()=>({primaryColor:r.primaryColor,infoColor:r.infoColor,successColor:r.successColor,warningColor:r.warningColor,errorColor:r.errorColor,textColorBase:r.textColorBase,textColor1:r.textColor1,textColor2:r.textColor2,textColor3:r.textColor3})),a=m(()=>({fontFamily:r.fontFamily,fontFamilyMono:r.fontFamilyMono,fontSize:r.fontSize,fontWeight:r.fontWeight,lineHeight:r.lineHeight})),s=m(()=>({borderRadius:r.borderRadius,heightTiny:r.heightTiny,heightSmall:r.heightSmall,heightMedium:r.heightMedium,heightLarge:r.heightLarge})),i=m(()=>({boxShadow1:r.boxShadow1,boxShadow2:r.boxShadow2,boxShadow3:r.boxShadow3})),u=()=>{t.theme==="dark"?t.setDarkThemeVars(r):t.setlightThemeVars(r)},$=z([{label:"Light",value:"light"},{label:"Dark",value:"dark"}]),k=z(t.theme),U=p=>{k.value=p,t.setTheme(p),r=p==="dark"?t.darkThemeVars:t.normalThemeVars},P=(p,_)=>{r[p]=_,u()};return(p,_)=>(ce(),Qe("div",Tr,[x(b(Zt),{"theme-overrides":p.themeOverrides},{default:V(()=>[x(b(Ot),null,{default:V(()=>[x(b(zr),null,{default:V(()=>[x(b(Dr),null,{default:V(()=>[Lt(Et(("t"in p?p.t:b(Y))("common.theme_control")),1)]),_:1}),x(b(qt),{value:k.value,"onUpdate:value":[_[0]||(_[0]=ne=>k.value=ne),U],options:$.value,placeholder:("t"in p?p.t:b(Y))("common.select_theme")},null,8,["value","options","placeholder"])]),_:1}),x(b(jt),null,{default:V(()=>[x(b(Gt),null,{default:V(()=>[x(b(Jt),{type:"line",animated:""},{default:V(()=>[x(b(ve),{name:"general",tab:("t"in p?p.t:b(Y))("common.general")},{default:V(()=>[x(xe,{variables:o.value,"onUpdate:variable":P},null,8,["variables"])]),_:1},8,["tab"]),x(b(ve),{name:"colors",tab:("t"in p?p.t:b(Y))("common.colors")},{default:V(()=>[x(xe,{variables:n.value,"onUpdate:variable":P},null,8,["variables"])]),_:1},8,["tab"]),x(b(ve),{name:"typography",tab:("t"in p?p.t:b(Y))("common.typography")},{default:V(()=>[x(xe,{variables:a.value,"onUpdate:variable":P},null,8,["variables"])]),_:1},8,["tab"]),x(b(ve),{name:"sizes",tab:("t"in p?p.t:b(Y))("common.sizes")},{default:V(()=>[x(xe,{variables:s.value,"onUpdate:variable":P},null,8,["variables"])]),_:1},8,["tab"]),x(b(ve),{name:"effects",tab:("t"in p?p.t:b(Y))("common.effects")},{default:V(()=>[x(xe,{variables:i.value,"onUpdate:variable":P},null,8,["variables"])]),_:1},8,["tab"])]),_:1})]),_:1})]),_:1}),x(b(Ar))]),_:1})]),_:1},8,["theme-overrides"])]))}};export{qr as default};
