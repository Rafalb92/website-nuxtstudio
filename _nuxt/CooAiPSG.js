import{u as g}from"./Di48-UV9.js";import{q as m}from"./CVWCcDG_.js";import{d as C,a5 as S,D as b,m as _,$,a4 as k,a1 as A,a3 as N}from"./D37-tK65.js";import"./CTm_ng7E.js";const O=C({name:"ContentQuery",props:{path:{type:String,required:!1,default:void 0},only:{type:Array,required:!1,default:void 0},without:{type:Array,required:!1,default:void 0},where:{type:Object,required:!1,default:void 0},sort:{type:Object,required:!1,default:void 0},limit:{type:Number,required:!1,default:void 0},skip:{type:Number,required:!1,default:void 0},locale:{type:String,required:!1,default:void 0},find:{type:String,required:!1,default:void 0}},async setup(a){const{path:t,only:r,without:o,where:u,sort:f,limit:l,skip:d,locale:s,find:p}=S(a),y=b(()=>{var e;return(e=t.value)==null?void 0:e.includes("/_")}),h=!_().public.content.experimental.advanceQuery;$(()=>a,()=>n(),{deep:!0});const i=e=>h?e!=null&&e.surround?e.surround:e!=null&&e._id||Array.isArray(e)?e:e==null?void 0:e.result:e.result,{data:v,refresh:n}=await g(`content-query-${k(a)}`,()=>{let e;return t.value?e=m(t.value):e=m(),r.value&&(e=e.only(r.value)),o.value&&(e=e.without(o.value)),u.value&&(e=e.where(u.value)),f.value&&(e=e.sort(f.value)),l.value&&(e=e.limit(l.value)),d.value&&(e=e.skip(d.value)),s.value&&(e=e.where({_locale:s.value})),p.value==="one"?e.findOne().then(i):p.value==="surround"?t.value?h?e.findSurround(t.value):e.withSurround(t.value).findOne().then(i):(console.warn("[Content] Surround queries requires `path` prop to be set."),console.warn("[Content] Query without `path` will return regular `find()` results."),e.find().then(i)):e.find().then(i)});return{isPartial:y,data:v,refresh:n}},render(a){var c;const t=A(),{data:r,refresh:o,isPartial:u,path:f,only:l,without:d,where:s,sort:p,limit:y,skip:h,locale:i,find:v}=a,n={path:f,only:l,without:d,where:s,sort:p,limit:y,skip:h,locale:i,find:v};if(n.find==="one"){if(!r&&(t!=null&&t["not-found"]))return t["not-found"]({props:n,...this.$attrs});if(t!=null&&t.empty&&(r==null?void 0:r._type)==="markdown"&&!((c=r==null?void 0:r.body)!=null&&c.children.length))return t.empty({props:n,...this.$attrs})}else if((!r||!r.length)&&t!=null&&t["not-found"])return t["not-found"]({props:n,...this.$attrs});return t!=null&&t.default?t.default({data:r,refresh:o,isPartial:u,props:n,...this.$attrs}):((w,q)=>N("pre",null,JSON.stringify({message:"You should use slots with <ContentQuery>!",slot:w,data:q},null,2)))("default",{data:r,props:n,isPartial:u})}}),D=O;export{D as default};
