import{j as e,u as s}from"./index-BHCe_Pz3.js";import{a as i}from"./style.module-BI-RpTR5.js";import{p as m}from"./README-ja20PUz3.js";const d=({className:t,...o})=>e.jsx("div",{...o,className:[i.card,t].filter(Boolean).join(" ")}),a=()=>e.jsx(d,{children:"demo1"}),l=`

import React from 'react'
import { Card } from 'my-lib'

const Demo1 = () => {
  return <Card>demo1</Card>
}

export default Demo1
`,u="Card Demo1 Title",p="Card demo1 description",f={code:l,title:u,desc:p},j=!0,h=Object.freeze(Object.defineProperty({__proto__:null,default:a,demoMeta:f,isDemo:j},Symbol.toStringTag,{value:"Module"})),x=()=>e.jsx(d,{children:"demo2"}),_=`

import React from 'react'
import { Card } from 'my-lib'

const Demo2 = () => {
  return <Card>demo2</Card>
}

export default Demo2
`,D="Card Demo2 Title",C="Card demo2 description",b={code:_,title:D,desc:C},g=!0,y=Object.freeze(Object.defineProperty({__proto__:null,default:x,demoMeta:b,isDemo:g},Symbol.toStringTag,{value:"Module"}));function r(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",strong:"strong",...s(),...t.components},{Demo:n}=o;return n||O("Demo",!0),e.jsxs(e.Fragment,{children:[e.jsx(o.h1,{id:"card",children:"Card"}),`
`,e.jsxs(o.p,{children:["This is a ",e.jsx(o.strong,{children:"markdown"})," document of the ",e.jsx(o.code,{children:"Card"})," component."]}),`
`,e.jsxs(o.p,{children:["You can put this page in a subGroup of the side menu using ",e.jsx(o.code,{children:"staticData.subGroup"}),"."]}),`
`,e.jsx(o.h2,{id:"demos",children:"Demos"}),`
`,e.jsx(o.p,{children:"You can import demos like this:"}),`
`,e.jsx(n,{...h}),`
`,e.jsx(n,{...y})]})}function M(t={}){const{wrapper:o}={...s(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(r,{...t})}):r(t)}function O(t,o){throw new Error("Expected "+(o?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}const S=Object.freeze(Object.defineProperty({__proto__:null,default:M},Symbol.toStringTag,{value:"Module"})),c={};c.main=S;c.outlineInfo=m;export{c as default};
