import{L as b}from"./Auth.91a6c4cd.js";import{H as f,L as k,i as g,r as _,o as n,c as r,a as m,w as h,b as s,j as v,d as l,g as o,t as c,k as w,l as y,n as H,F as L,m as N}from"./app.f685ded8.js";import{_ as x}from"./_plugin-vue_export-helper.cdc0426e.js";const P={layout:b,components:{Head:f,Link:k},props:{errors:Object,session:Object,user:Object},setup(){const e=g({phone_number:""});return{form:e,submit:()=>{N.Inertia.post("/user/forgot-password",{phone_number:e.phone_number})}}}},j={class:"authentication-reset-password d-flex align-items-center justify-content-center"},C={class:"row"},V={class:"col-12 col-lg-10 mx-auto"},A={class:"card"},F={class:"row g-0"},M={class:"col-lg-12 border-end"},T={class:"card-body"},$={class:"p-5"},B=s("h3",{class:""},"Reset Password",-1),O=o("Sudah memiliki akun ? "),S=o("Login disini"),D=s("p",{class:"text-muted"},"Pastikan nomor handphone yang dimasukan adalah nomor handphone yang telah didaftarkan.",-1),E={class:"mb-3 mt-0"},I={key:0,class:"alert alert-danger border-0"},R=s("i",{class:"fa fa-exclamation-triangle"},null,-1),U=o(),z=["innerHTML"],K={key:1,class:"alert alert-success border-0"},W=s("i",{class:"fa fa-exclamation-triangle"},null,-1),q={class:"mb-3 mt-0"},G=s("label",{class:"form-label"},"Nomor Hp (WA)",-1),J=["placeholder"],Q={key:0,class:"invalid-feedback"},X=s("div",{class:"d-grid gap-2"},[s("button",{type:"submit",class:"btn btn-primary"},"Kirim Perubahan Password")],-1),Y={class:"text-center"},Z=s("br",null,null,-1),ss={class:"text-muted"},es=o(" Nomor tidak terdaftar, "),os=["href"],ts=o(" untuk perbaikan ");function as(e,t,i,a,ns,rs){const u=_("Head"),p=_("Link");return n(),r(L,null,[m(u,null,{default:h(()=>[s("title",null,c(e.appName)+" - Forgot Password",1)]),_:1}),s("div",j,[s("div",C,[s("div",V,[s("div",A,[s("div",F,[s("div",M,[s("div",T,[s("form",{onSubmit:t[1]||(t[1]=v((...d)=>a.submit&&a.submit(...d),["prevent"])),class:"row g-3"},[s("div",$,[B,s("p",null,[O,m(p,{href:"/login"},{default:h(()=>[S]),_:1})]),D,s("div",E,[e.$page.props.session.error?(n(),r("div",I,[R,U,s("div",{innerHTML:e.$page.props.session.error},null,8,z)])):l("",!0),e.$page.props.session.success?(n(),r("div",K,[W,o(" "+c(e.$page.props.session.success),1)])):l("",!0)]),s("div",q,[G,w(s("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=d=>a.form.phone_number=d),class:H([{"is-invalid":i.errors.phone_number},"form-control"]),placeholder:`Contoh: ${e.wa}`},null,10,J),[[y,a.form.phone_number]]),i.errors.phone_number?(n(),r("div",Q,c(i.errors.phone_number),1)):l("",!0)]),X,s("div",Y,[Z,s("p",ss,[es,s("a",{href:`https://wa.me/${e.wa}?text=${encodeURI(`Hallo, Admin saya sudah daftar dan ingin reset password, ketika konfirmasi nomor tidak terdaftar, berikut data saya untuk perbaikan:

Nama:
Email:
Nomor Handphone Aktif:

 terimakasih.`)}`,target:"_blank"},"klik disini",8,os),ts])])])],32)])])])])])])])],64)}const cs=x(P,[["render",as]]);export{cs as default};