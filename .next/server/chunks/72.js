"use strict";exports.id=72,exports.ids=[72],exports.modules={83855:(e,s,a)=>{a.d(s,{Z:()=>r});/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,a(62881).Z)("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]])},98091:(e,s,a)=>{a.d(s,{Z:()=>r});/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,a(62881).Z)("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]])},72409:(e,s,a)=>{a.d(s,{AccountAction:()=>Z,AddressForm:()=>R,DeleteAddressLoadingDialog:()=>P});var r=a(10326);a(15424);var t=a(46242);(0,t.$)("55aa07498a470d26fec83ec36ccda4f14b561b3e"),(0,t.$)("054d9a95db8a6b077763b7cd85e47163f242d63a"),(0,t.$)("f2507193706cca6e68352984f33996f51aa34482");var l=(0,t.$)("76e327acd14790783abc87d5604a23254bfb5cc9"),i=(0,t.$)("eca301dc92566f32c5739360be3e25a8c76db3a8"),o=(0,t.$)("53b624e3693ace9bb6892066e074243af6932c54"),n=a(12731),d=a(91664),c=a(24118),m=a(65188),x=a(44794),u=a(3236),g=a(17577),h=a(51223);let p=g.forwardRef(({className:e,...s},a)=>r.jsx("textarea",{className:(0,h.cn)("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",e),ref:a,...s}));p.displayName="Textarea";var j=a(74064),f=a(77506),y=a(62881);/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let N=(0,y.Z)("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]),b=(0,y.Z)("PenLine",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z",key:"ymcmye"}]]),v=(0,y.Z)("KeyRound",[["path",{d:"M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z",key:"167ctg"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor",key:"w0ekpg"}]]);var z=a(83855);/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let C=(0,y.Z)("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);var k=a(98091),w=a(35047),A=a(74723),D=a(27256);let I=D.z.object({name:D.z.string().min(3,{message:"Il nome \xe8 troppo breve"}).max(60,{message:"L'indirizzo email \xe8 troppo lungo"})}),T=({handleClose:e,setIsLoading:s})=>{let{control:a,handleSubmit:t,formState:{errors:l,isSubmitting:i},setError:o}=(0,A.cI)({resolver:(0,j.F)(I),mode:"onBlur"}),u=(0,w.useRouter)(),g=async a=>{o("root",{type:"manual",message:""}),s(!0);try{await (0,n.WY)(a.name),u.refresh(),s(!1),e()}catch(e){o("root",{type:"manual",message:e.message}),s(!1)}};return r.jsx("div",{children:(0,r.jsxs)("form",{onSubmit:t(g),className:"grid gap-4",children:[(0,r.jsxs)("div",{className:"grid gap-2",children:[r.jsx(x._,{htmlFor:"email",children:"Email"}),r.jsx(A.Qr,{name:"name",control:a,render:({field:e})=>r.jsx(m.I,{...e,id:"name",type:"text",placeholder:"Alessio Antonucci",className:l.name?"border-red-500":""})}),l.name&&r.jsx("p",{className:"text-red-500 text-xs",children:l.name.message})]}),l.root&&r.jsx("p",{className:"text-red-500 text-sm",children:l.root.message}),(0,r.jsxs)(c.cN,{children:[r.jsx(c.GG,{asChild:!0,children:r.jsx(d.z,{variant:"secondary",children:"Annulla"})}),r.jsx(d.z,{type:"submit",className:"",disabled:i,children:i?r.jsx(f.Z,{className:"animate-spin"}):"Aggiorna"})]})]})})},F=({tokens:e,handleClose:s,setIsLoading:a})=>{let{control:t,handleSubmit:l,formState:{errors:i,isSubmitting:o},setError:m}=(0,A.cI)(),x=(0,w.useRouter)(),u=async(r,t)=>{t.preventDefault(),m("root",{type:"manual",message:""}),a(!0);try{if(!e?.decodedToken.email)throw a(!1),Error("L'email non \xe8 definita.");await (0,n.c0)(e.decodedToken.email),a(!1),s(),x.refresh()}catch(e){m("root",{type:"manual",message:e.message}),a(!1)}};return r.jsx("div",{children:(0,r.jsxs)("form",{onSubmit:l(u),className:"grid gap-4",children:[i.root&&r.jsx("p",{className:"text-red-500 text-sm",children:i.root.message}),(0,r.jsxs)(c.cN,{children:[r.jsx(c.GG,{asChild:!0,children:r.jsx(d.z,{variant:"secondary",children:"Annulla"})}),r.jsx(d.z,{type:"submit",disabled:o,children:o?r.jsx(f.Z,{className:"animate-spin"}):(0,r.jsxs)(r.Fragment,{children:["Invia email ",r.jsx(N,{className:"ml-1",size:16})]})})]})]})})},Z=({action:e,tokens:s})=>{if(!e)return r.jsx(r.Fragment,{});let[a,t]=(0,g.useState)(!1),[l,i]=(0,g.useState)(!1);return(0,r.jsxs)(c.Dialog,{open:l||a,onOpenChange:e=>t(e),children:[r.jsx(c.hg,{asChild:!0,children:"update name"===e?r.jsx(d.z,{size:"icon",variant:"outline",onClick:()=>t(!0),children:r.jsx(b,{})}):"reset password"===e?(0,r.jsxs)(d.z,{children:["Reimposta password ",r.jsx(v,{className:"ml-2",size:16})]}):r.jsx(r.Fragment,{})}),(0,r.jsxs)(c.DialogContent,{children:[r.jsx(c.DialogTitle,{children:"update name"===e?"Aggiorna il tuo Nome":"reset password"===e?"Reimposta la Password":""}),"reset password"===e&&r.jsx(c.DialogDescription,{children:"Ti invieremo una mail per reimpostare la password."}),"update name"===e?r.jsx(T,{handleClose:()=>t(!1),setIsLoading:i}):"reset password"===e?r.jsx(F,{tokens:s,handleClose:()=>t(!1),setIsLoading:i}):r.jsx(r.Fragment,{})]})]})},S=D.z.object({fullAddress:D.z.string().max(180,{message:"Troppo lungo"}).optional(),street:D.z.string().min(1,{message:"La via \xe8 obbligatoria"}).max(100,{message:"Troppo lungo"}),houseNumber:D.z.string().max(10,{message:"Troppo lungo"}).refine(e=>""===e||!isNaN(e),{message:"Il numero civico deve essere, beh, un numero."}),city:D.z.string().min(1,{message:"La citt\xe0 \xe8 obbligatoria"}).max(80,{message:"Troppo lungo"}),province:D.z.string().min(1,{message:"Lo stato/provincia \xe8 obbligatorio"}).max(30,{message:"Troppo lungo"}),postalCode:D.z.string().min(1,{message:"Il CAP \xe8 obblicatorio"}).max(15,{message:"Troppo lungo"}).refine(e=>!isNaN(e),{message:"Il CAP deve essere un numero"}),country:D.z.string().min(1,{message:"Il paese \xe8 obbligatorio"}).max(30,{message:"Troppo lungo"}).default("Italia"),other:D.z.string().max(250,{message:"Troppo lungo"}).optional()});function R({trigger:e}){let[s,a]=(0,g.useState)([]),[t,n]=(0,g.useState)(""),h=(0,w.useRouter)(),[y,N]=(0,g.useState)(!1),[b,v]=(0,g.useState)(!1),[k,D]=(0,g.useState)(!1),I=(0,g.useRef)(null),{control:T,handleSubmit:F,setValue:Z,formState:{errors:R},setError:P,reset:L}=(0,A.cI)({resolver:(0,j.F)(S)}),M=async e=>{if(Z("fullAddress",e),e.length>3)try{a(await l(e))}catch(e){console.error("Errore nel recupero dei suggerimenti:",e)}else a([])},_=async e=>{I.current&&clearTimeout(I.current),D(!0),Z("fullAddress",e.address.label);try{let s=await i(e.id);console.log(s),Z("street",s.street||""),Z("houseNumber",s.houseNumber||""),Z("city",s.city||""),Z("province",s.county||s.state||""),Z("postalCode",s.postalCode||""),Z("country",s.countryName||""),n(e.id)}catch(e){console.error("Errore nel recupero dei dettagli dell'indirizzo:",e)}a([])},G=()=>{console.log("a"),D(!0),I.current&&clearTimeout(I.current)},Q=(0,g.useCallback)(()=>{I.current&&clearTimeout(I.current),I.current=setTimeout(()=>{D(!1)},150)},[]),V=async(e,s)=>{s.preventDefault();try{v(!0),await o(e),v(!1),N(!1),L(),h.refresh()}catch(e){P("root",{type:"manual",message:e.message}),v(!1)}};return(0,r.jsxs)(c.Dialog,{open:y||b,onOpenChange:e=>{N(e),e||L()},children:[r.jsx(c.hg,{asChild:!0,children:e||(0,r.jsxs)(d.z,{children:["Aggiungi ",r.jsx(z.Z,{size:16,className:"ml-1"})]})}),(0,r.jsxs)(c.DialogContent,{children:[r.jsx(c.DialogTitle,{children:"Aggiungi indirizzo"}),r.jsx(c.DialogDescription,{children:"Aggiungi il tuo indirizzo di spedizione."}),(0,r.jsxs)("form",{onSubmit:F(V),className:"space-y-4",children:[(0,r.jsxs)(u.ScrollArea,{className:"h-[65vh] max-h-[500px]",children:[(0,r.jsxs)("div",{className:"grid gap-4 p-1",children:[(0,r.jsxs)("div",{className:"grid gap-2",children:[r.jsx(x._,{htmlFor:"fullAddress",children:"Indirizzo completo"}),(0,r.jsxs)("div",{className:"relative",children:[r.jsx(A.Qr,{name:"fullAddress",control:T,render:({field:e})=>r.jsx(m.I,{...e,id:"fullAddress",placeholder:"Inizia a digitare il tuo indirizzo",onChange:s=>{e.onChange(s),M(s.target.value)},className:R.fullAddress?"border-red-500":"",onFocus:G,onBlur:Q})}),R.fullAddress&&r.jsx("p",{className:"text-red-500 text-xs mt-1",children:R.fullAddress.message}),s.length>0&&k&&r.jsx("ul",{className:"absolute z-10 w-full bg-white border rounded mt-1 max-h-60 overflow-auto",children:s.map((e,s)=>(0,r.jsxs)("li",{onClick:()=>_(e),className:"p-2 hover:bg-gray-100 cursor-pointer text-sm flex items-center gap-1",children:[r.jsx(C,{color:"red"}),e.address.label]},e.id))})]})]}),(0,r.jsxs)("div",{className:"grid grid-cols-3 gap-4 items-start",children:[(0,r.jsxs)("div",{className:"grid gap-2 col-span-2",children:[r.jsx(x._,{htmlFor:"street",children:"Via"}),r.jsx(A.Qr,{name:"street",control:T,render:({field:e})=>r.jsx(m.I,{...e,id:"street",placeholder:"Via",className:R.street?"border-red-500":""})}),R.street&&r.jsx("p",{className:"text-red-500 text-xs mt-1",children:R.street.message})]}),(0,r.jsxs)("div",{className:"grid gap-2",children:[r.jsx(x._,{htmlFor:"houseNumber",children:"Numero civico"}),r.jsx(A.Qr,{name:"houseNumber",control:T,render:({field:e})=>r.jsx(m.I,{...e,id:"houseNumber",placeholder:"Numero",className:R.houseNumber?"border-red-500":""})}),R.houseNumber&&r.jsx("p",{className:"text-red-500 text-xs mt-1",children:R.houseNumber.message})]})]}),(0,r.jsxs)("div",{className:"grid gap-2",children:[r.jsx(x._,{htmlFor:"city",children:"Citt\xe0"}),r.jsx(A.Qr,{name:"city",control:T,render:({field:e})=>r.jsx(m.I,{...e,id:"city",placeholder:"Citt\xe0",className:R.city?"border-red-500":""})}),R.city&&r.jsx("p",{className:"text-red-500 text-xs mt-1",children:R.city.message})]}),(0,r.jsxs)("div",{className:"grid gap-2",children:[r.jsx(x._,{htmlFor:"province",children:"Provincia"}),r.jsx(A.Qr,{name:"province",control:T,render:({field:e})=>r.jsx(m.I,{...e,id:"province",placeholder:"Provincia",className:R.province?"border-red-500":""})}),R.province&&r.jsx("p",{className:"text-red-500 text-xs mt-1",children:R.province.message})]}),(0,r.jsxs)("div",{className:"grid grid-cols-2 gap-4 items-start",children:[(0,r.jsxs)("div",{className:"grid gap-2",children:[r.jsx(x._,{htmlFor:"postalCode",children:"CAP"}),r.jsx(A.Qr,{name:"postalCode",control:T,render:({field:e})=>r.jsx(m.I,{...e,id:"postalCode",placeholder:"CAP",className:R.postalCode?"border-red-500":""})}),R.postalCode&&r.jsx("p",{className:"text-red-500 text-xs mt-1",children:R.postalCode.message})]}),(0,r.jsxs)("div",{className:"grid gap-2",children:[r.jsx(x._,{htmlFor:"country",children:"Paese"}),r.jsx(A.Qr,{name:"country",control:T,defaultValue:"Italia",render:({field:e})=>r.jsx(m.I,{...e,id:"country",placeholder:"Paese",className:R.country?"border-red-500":""})}),R.country&&r.jsx("p",{className:"text-red-500 text-xs mt-1",children:R.country.message})]})]}),(0,r.jsxs)("div",{className:"grid gap-2",children:[r.jsx(x._,{htmlFor:"other",children:"Altri dettagli"}),r.jsx(A.Qr,{name:"other",control:T,render:({field:e})=>r.jsx(p,{...e,id:"other",placeholder:"Interno... scala... consegnare al portinaio...",className:R.country?"border-red-500":""})}),R.country&&r.jsx("p",{className:"text-red-500 text-xs mt-1",children:R.country.message})]})]}),r.jsx(u.ScrollBar,{})]}),R.root&&r.jsx("p",{className:"text-red-500 text-xs mt-1",children:R.root.message}),(0,r.jsxs)(c.cN,{children:[r.jsx(c.GG,{asChild:!0,children:r.jsx(d.z,{variant:"secondary",children:"Annulla"})}),r.jsx(d.z,{type:"submit",disabled:b,children:b?r.jsx(f.Z,{className:"animate-spin"}):(0,r.jsxs)(r.Fragment,{children:["Aggiungi ",r.jsx(z.Z,{size:16,className:"ml-1"})]})})]})]})]})]})}let P=({userId:e,address:s})=>r.jsx(L,{handleClick:async()=>await (0,n._N)(e,s.key),title:"Eliminare l'indirizzo?",desc:"Stai per eliminare l'indirizzo: "+s.fullAddress,buttonProps:{variant:"destructive",children:"Elimina"},trigger:(0,r.jsxs)(d.z,{variant:"outline",size:"sm",className:"text-red-500 hover:text-red-700",children:[r.jsx(k.Z,{size:16,className:"mr-1"})," Elimina"]})}),L=({title:e,desc:s,handleClick:a,buttonProps:t,trigger:l,children:i})=>{let o=(0,w.useRouter)(),[n,m]=(0,g.useState)(!1),[x,u]=(0,g.useState)(!1);return(0,r.jsxs)(c.Dialog,{open:n||x,onOpenChange:m,children:[r.jsx(c.hg,{asChild:!0,children:l}),(0,r.jsxs)(c.DialogContent,{children:[r.jsx(c.DialogTitle,{children:e}),r.jsx(c.DialogDescription,{children:s}),i,(0,r.jsxs)(c.cN,{children:[r.jsx(c.GG,{asChild:!0,children:r.jsx(d.z,{variant:"secondary",children:"Annulla"})}),r.jsx(d.z,{type:"submit",...t,disabled:x,onClick:async()=>{u(!0),await a(),u(!1),m(!1),o.refresh()},children:x?r.jsx(f.Z,{className:"animate-spin"}):t.children})]})]})]})}},24118:(e,s,a)=>{a.d(s,{Dialog:()=>d,DialogContent:()=>g,DialogDescription:()=>f,DialogHeader:()=>h,DialogTitle:()=>j,GG:()=>x,cN:()=>p,hg:()=>c});var r=a(10326),t=a(17577),l=a(60784),i=a(94019),o=a(51223),n=a(35047);let d=t.forwardRef(({goBackIsClosed:e,children:s,...a},t)=>{if(!e)return r.jsx(l.fC,{...a,children:s});let i=(0,n.useRouter)();return r.jsx(l.fC,{onOpenChange:()=>i.back(),...a,children:s})});d.displayName=l.fC.displayName;let c=l.xz,m=l.h_,x=l.x8,u=t.forwardRef(({className:e,...s},a)=>r.jsx(l.aV,{ref:a,className:(0,o.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",e),...s}));u.displayName=l.aV.displayName;let g=t.forwardRef(({className:e,container:s,children:a,...t},n)=>(0,r.jsxs)(m,{container:s,children:[r.jsx(u,{}),(0,r.jsxs)(l.VY,{ref:n,className:(0,o.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",e),...t,children:[a,(0,r.jsxs)(l.x8,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[r.jsx(i.Z,{className:"h-4 w-4"}),r.jsx("span",{className:"sr-only",children:"Close"})]})]})]}));g.displayName=l.VY.displayName;let h=({className:e,...s})=>r.jsx("div",{className:(0,o.cn)("flex flex-col space-y-1.5 text-center sm:text-left",e),...s});h.displayName="DialogHeader";let p=({className:e,...s})=>r.jsx("div",{className:(0,o.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",e),...s});p.displayName="DialogFooter";let j=t.forwardRef(({className:e,...s},a)=>r.jsx(l.Dx,{ref:a,className:(0,o.cn)("text-lg font-semibold leading-none tracking-tight",e),...s}));j.displayName=l.Dx.displayName;let f=t.forwardRef(({className:e,...s},a)=>r.jsx(l.dk,{ref:a,className:(0,o.cn)("text-sm text-muted-foreground",e),...s}));f.displayName=l.dk.displayName}};