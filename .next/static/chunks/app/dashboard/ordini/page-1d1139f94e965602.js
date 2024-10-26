(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[487],{6652:function(e,r,t){Promise.resolve().then(t.t.bind(t,8173,23)),Promise.resolve().then(t.t.bind(t,231,23)),Promise.resolve().then(t.bind(t,6949)),Promise.resolve().then(t.bind(t,9973))},6949:function(e,r,t){"use strict";var n=t(7437);t(2265);var a=t(9472),i=t(9354);let l={initial:{"--x":"100%",scale:.8},animate:{"--x":"-100%",scale:1},whileTap:{scale:.95},transition:{repeat:1/0,repeatType:"loop",repeatDelay:1,type:"spring",stiffness:20,damping:15,mass:2,scale:{type:"spring",stiffness:200,damping:5,mass:.5}}};r.default=e=>{let{children:r,className:t,...o}=e;return(0,n.jsxs)(a.E.button,{...l,...o,className:(0,i.cn)("relative rounded-lg font-medium backdrop-blur-xl transition-shadow duration-300 ease-in-out hover:shadow dark:bg-[radial-gradient(circle_at_50%_0%,hsl(var(--primary)/10%)_0%,transparent_60%)] dark:hover:shadow-[0_0_20px_hsl(var(--primary)/10%)]",t),children:[(0,n.jsx)("span",{className:"relative block size-full text-sm uppercase tracking-wide text-[rgb(0,0,0,65%)] dark:font-light dark:text-[rgb(255,255,255,90%)]",style:{maskImage:"linear-gradient(-75deg,hsl(var(--primary)) calc(var(--x) + 20%),transparent calc(var(--x) + 30%),hsl(var(--primary)) calc(var(--x) + 100%))"},children:r}),(0,n.jsx)("span",{style:{mask:"linear-gradient(rgb(0,0,0), rgb(0,0,0)) content-box,linear-gradient(rgb(0,0,0), rgb(0,0,0))",WebkitMaskComposite:"exclude",maskComposite:"exclude"},className:"absolute inset-0 z-10 block rounded-[inherit] bg-[linear-gradient(-75deg,hsl(var(--primary)/10%)_calc(var(--x)+20%),hsl(var(--primary)/50%)_calc(var(--x)+25%),hsl(var(--primary)/10%)_calc(var(--x)+100%))] p-px"})]})}},9973:function(e,r,t){"use strict";t.d(r,{Separator:function(){return o}});var n=t(7437),a=t(2265),i=t(8484),l=t(9354);let o=a.forwardRef((e,r)=>{let{className:t,orientation:a="horizontal",decorative:o=!0,...s}=e;return(0,n.jsx)(i.f,{ref:r,decorative:o,orientation:a,className:(0,l.cn)("shrink-0 bg-slate-200 dark:bg-slate-800","horizontal"===a?"h-[1px] w-full":"h-full w-[1px]",t),...s})});o.displayName=i.f.displayName},9354:function(e,r,t){"use strict";t.d(r,{cn:function(){return i},f:function(){return l}});var n=t(4839),a=t(6164);function i(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return(0,a.m6)((0,n.W)(r))}let l=e=>new Intl.NumberFormat("it-IT",{style:"currency",currency:"EUR"}).format(e)},2988:function(e,r,t){"use strict";function n(){return(n=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}t.d(r,{Z:function(){return n}})},1584:function(e,r,t){"use strict";t.d(r,{F:function(){return a},e:function(){return i}});var n=t(2265);function a(...e){return r=>e.forEach(e=>{"function"==typeof e?e(r):null!=e&&(e.current=r)})}function i(...e){return(0,n.useCallback)(a(...e),e)}},8676:function(e,r,t){"use strict";t.d(r,{WV:function(){return d},jH:function(){return f}});var n=t(2988),a=t(2265),i=t(4887),l=t(1584);let o=(0,a.forwardRef)((e,r)=>{let{children:t,...i}=e,l=a.Children.toArray(t),o=l.find(u);if(o){let e=o.props.children,t=l.map(r=>r!==o?r:a.Children.count(e)>1?a.Children.only(null):(0,a.isValidElement)(e)?e.props.children:null);return(0,a.createElement)(s,(0,n.Z)({},i,{ref:r}),(0,a.isValidElement)(e)?(0,a.cloneElement)(e,void 0,t):null)}return(0,a.createElement)(s,(0,n.Z)({},i,{ref:r}),t)});o.displayName="Slot";let s=(0,a.forwardRef)((e,r)=>{let{children:t,...n}=e;return(0,a.isValidElement)(t)?(0,a.cloneElement)(t,{...function(e,r){let t={...r};for(let n in r){let a=e[n],i=r[n];/^on[A-Z]/.test(n)?a&&i?t[n]=(...e)=>{i(...e),a(...e)}:a&&(t[n]=a):"style"===n?t[n]={...a,...i}:"className"===n&&(t[n]=[a,i].filter(Boolean).join(" "))}return{...e,...t}}(n,t.props),ref:r?(0,l.F)(r,t.ref):t.ref}):a.Children.count(t)>1?a.Children.only(null):null});s.displayName="SlotClone";let c=({children:e})=>(0,a.createElement)(a.Fragment,null,e);function u(e){return(0,a.isValidElement)(e)&&e.type===c}let d=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,r)=>{let t=(0,a.forwardRef)((e,t)=>{let{asChild:i,...l}=e,s=i?o:r;return(0,a.useEffect)(()=>{window[Symbol.for("radix-ui")]=!0},[]),(0,a.createElement)(s,(0,n.Z)({},l,{ref:t}))});return t.displayName=`Primitive.${r}`,{...e,[r]:t}},{});function f(e,r){e&&(0,i.flushSync)(()=>e.dispatchEvent(r))}},8484:function(e,r,t){"use strict";t.d(r,{f:function(){return u}});var n=t(2988),a=t(2265),i=t(8676);let l="horizontal",o=["horizontal","vertical"],s=(0,a.forwardRef)((e,r)=>{let{decorative:t,orientation:o=l,...s}=e,u=c(o)?o:l;return(0,a.createElement)(i.WV.div,(0,n.Z)({"data-orientation":u},t?{role:"none"}:{"aria-orientation":"vertical"===u?u:void 0,role:"separator"},s,{ref:r}))});function c(e){return o.includes(e)}s.propTypes={orientation(e,r,t){let n=e[r],a=String(n);return n&&!c(n)?Error(`Invalid prop \`orientation\` of value \`${a}\` supplied to \`${t}\`, expected one of:
  - horizontal
  - vertical

Defaulting to \`${l}\`.`):null}};let u=s}},function(e){e.O(0,[868,231,472,173,971,23,744],function(){return e(e.s=6652)}),_N_E=e.O()}]);