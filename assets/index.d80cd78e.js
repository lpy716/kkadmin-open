var b=(e,n,r)=>new Promise((s,u)=>{var c=t=>{try{i(r.next(t))}catch(o){u(o)}},a=t=>{try{i(r.throw(t))}catch(o){u(o)}},i=t=>t.done?s(t.value):Promise.resolve(t.value).then(c,a);i((r=r.apply(e,n)).next())});import{B as h,u as C}from"./useTable.db5b6908.js";import{T as g}from"./useForm.b6c2a03d.js";import{u as w}from"./index.2ebcc886.js";import{M as B,c as T,s as S}from"./MenuDrawer.1784b175.js";import{g as D,d as F}from"./friend.3d2f2fe1.js";import{_ as A,u as y,f as E}from"./index.7b14ca96.js";import{B as k,a1 as p,D as R,F as $,w as l,a6 as d,ae as _}from"./vendor.bf608252.js";import"./index.bcb8b925.js";import"./index.d9f90038.js";/* empty css               *//* empty css               */import"./useWindowSizeFn.011a8160.js";import"./useContentViewHeight.1879e431.js";/* empty css               *//* empty css               *//* empty css               */import"./index.d342e6c8.js";/* empty css                */import"./sortable.esm.b519ac50.js";/* empty css                *//* empty css              *//* empty css               */import"./index.398fa315.js";import"./download.48b2c8d7.js";/* empty css               */import"./index.b1fea038.js";const v=k({name:"FriendCircleList",components:{BasicTable:h,MenuDrawer:B,TableAction:g},setup(){const e=y(),{userInfo:n}=E(),[r,{openDrawer:s}]=w(),[u,{reload:c}]=C({title:"\u6211\u7684\u670B\u53CB\u5708\u94FE\u63A5\u8BA2\u9605\u5217\u8868",api:D,columns:T,formConfig:{labelWidth:120,schemas:S},isTreeTable:!1,pagination:!0,striped:!1,useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!0,canResize:!1,actionColumn:{width:80,title:"\u64CD\u4F5C",dataIndex:"action",slots:{customRender:"action"},fixed:void 0}});function a(){s(!0,{isUpdate:!1})}function i(f){s(!0,{record:f,isUpdate:!0})}function t(f){return b(this,null,function*(){yield F({_id:f._id}),o()})}function o(){c()}function m(){window.open(e.apiUrl+e.urlPrefix+`/friend/circle/${n==null?void 0:n._id}/200/0`)}return{registerTable:u,registerDrawer:r,handleCreate:a,handleEdit:i,handleDelete:t,handleSuccess:o,mySubscription:m}}}),M=_(" \u6211\u7684\u8BA2\u9605\u94FE\u63A5 "),U=_(" \u65B0\u589E\u8BA2\u9605\u94FE\u63A5 ");function x(e,n,r,s,u,c){const a=p("a-button"),i=p("TableAction"),t=p("BasicTable"),o=p("MenuDrawer");return R(),$("div",null,[l(t,{onRegister:e.registerTable},{toolbar:d(()=>[l(a,{type:"primary",onClick:e.mySubscription},{default:d(()=>[M]),_:1},8,["onClick"]),l(a,{type:"primary",onClick:e.handleCreate},{default:d(()=>[U]),_:1},8,["onClick"])]),action:d(({record:m})=>[l(i,{actions:[{icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,m)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",confirm:e.handleDelete.bind(null,m)}}]},null,8,["actions"])]),_:1},8,["onRegister"]),l(o,{onRegister:e.registerDrawer,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])}var le=A(v,[["render",x]]);export{le as default};
