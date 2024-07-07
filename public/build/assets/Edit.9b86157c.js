import{L as p}from"./Layout.0009a302.js";import{L as y,H as k,i as g,r as v,o as l,c as r,a as f,w as u,b as s,j as x,k as n,l as _,n as d,t as c,d as m,v as b,F as U,m as V,f as S,g as N}from"./app.81794f3f.js";import{S as L}from"./sweetalert2.all.647ccf08.js";import{_ as E}from"./_plugin-vue_export-helper.cdc0426e.js";const A={layout:p,components:{Link:y,Head:k},props:{errors:Object,user:Object},setup(t){const e=g({id:t.user.id,name:t.user.name,email:t.user.email,password:"",password_confirmation:"",level:t.user.level,is_active:t.user.is_active});return{form:e,submit:()=>{V.Inertia.put(`/admin/users/${t.user.id}`,{name:e.name,id:e.id,email:e.email,password:e.password,password_confirmation:e.password_confirmation,level:e.level,is_active:e.is_active},{onSuccess:()=>{L.fire({title:"Success!",text:"User Berhasil Disimpan!.",icon:"success",showConfirmButton:!1,timer:1e3})}})}}}},B={class:"page-wrapper"},C={class:"page-content"},P=S('<div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3"><div class="breadcrumb-title pe-3">User</div><div class="ps-3"><nav aria-label="breadcrumb"><ol class="breadcrumb mb-0 p-0"><li class="breadcrumb-item"><a href="javascript:;"><i class="bx bx-home-alt"></i></a></li><li class="breadcrumb-item active" aria-current="page">Edit User</li></ol></nav></div></div>',1),j={class:"card"},H={class:"card-body"},D={class:"d-lg-flex align-items-center"},K={class:"ms-auto"},M=N("Kembali"),F={class:"col-12"},O=s("label",{class:"form-label"},"Nama",-1),T={key:0,class:"invalid-feedback"},z={class:"col-12"},I=s("label",{class:"form-label"},"Email",-1),q={key:0,class:"invalid-feedback"},G={class:"col-12"},J=s("label",{class:"form-label"},"password",-1),Q={key:0,class:"invalid-feedback"},R={class:"col-12"},W=s("label",{class:"form-label"},"Konfirmasi Password",-1),X={key:0,class:"invalid-feedback"},Y={class:"col-12",style:{display:"none"}},Z=s("label",{class:"form-label"},"Level",-1),$=s("option",{value:""},"[ Pilih ]",-1),ss=s("option",{value:"1"},"Admin",-1),es=s("option",{value:"2"},"User",-1),os=[$,ss,es],as={key:0,class:"invalid-feedback"},is={class:"col-12"},ts=s("label",{class:"form-label"},"Status Akun",-1),ls=s("option",{value:""},"[ Pilih ]",-1),rs=s("option",{value:"1"},"Active",-1),ns=s("option",{value:"0"},"Non Active",-1),ds=[ls,rs,ns],cs={key:0,class:"invalid-feedback"},ms=s("div",{class:"col-12"},[s("button",{type:"submit",class:"btn btn-primary px-5"},"Submit")],-1);function _s(t,e,o,a,vs,fs){const h=v("Head"),w=v("Link");return l(),r(U,null,[f(h,null,{default:u(()=>[s("title",null,c(t.appName)+" - Edit User",1)]),_:1}),s("div",B,[s("div",C,[P,s("div",j,[s("div",H,[s("div",D,[s("div",K,[f(w,{href:"/admin/users",class:"btn btn-primary mt-2 mt-lg-0"},{default:u(()=>[M]),_:1})])]),s("form",{onSubmit:e[7]||(e[7]=x((...i)=>a.submit&&a.submit(...i),["prevent"])),class:"row g-3"},[s("div",F,[n(s("input",{type:"hidden",class:d(["form-control",{"is-invalid":o.errors.id}]),"onUpdate:modelValue":e[0]||(e[0]=i=>a.form.id=i)},null,2),[[_,a.form.id]]),O,n(s("input",{type:"text",class:d(["form-control",{"is-invalid":o.errors.name}]),"onUpdate:modelValue":e[1]||(e[1]=i=>a.form.name=i),placeholder:"Nama"},null,2),[[_,a.form.name]]),o.errors.name?(l(),r("div",T,c(o.errors.name),1)):m("",!0)]),s("div",z,[I,n(s("input",{type:"email",class:d(["form-control",{"is-invalid":o.errors.email}]),"onUpdate:modelValue":e[2]||(e[2]=i=>a.form.email=i),placeholder:"Email"},null,2),[[_,a.form.email]]),o.errors.email?(l(),r("div",q,c(o.errors.email),1)):m("",!0)]),s("div",G,[J,n(s("input",{type:"password",class:d(["form-control",{"is-invalid":o.errors.password}]),"onUpdate:modelValue":e[3]||(e[3]=i=>a.form.password=i),placeholder:"Password"},null,2),[[_,a.form.password]]),o.errors.password?(l(),r("div",Q,c(o.errors.password),1)):m("",!0)]),s("div",R,[W,n(s("input",{type:"password",class:d(["form-control",{"is-invalid":o.errors.password_confirmation}]),"onUpdate:modelValue":e[4]||(e[4]=i=>a.form.password_confirmation=i),placeholder:"Konfirmasi Password"},null,2),[[_,a.form.password_confirmation]]),o.errors.password_confirmation?(l(),r("div",X,c(o.errors.password_confirmation),1)):m("",!0)]),s("div",Y,[Z,n(s("select",{"onUpdate:modelValue":e[5]||(e[5]=i=>a.form.level=i),class:d([{"is-invalid":o.errors.level},"form-select"])},os,2),[[b,a.form.level]]),o.errors.level?(l(),r("div",as,c(o.errors.level),1)):m("",!0)]),s("div",is,[ts,n(s("select",{"onUpdate:modelValue":e[6]||(e[6]=i=>a.form.is_active=i),class:d([{"is-invalid":o.errors.is_active},"form-select"])},ds,2),[[b,a.form.is_active]]),o.errors.is_active?(l(),r("div",cs,c(o.errors.is_active),1)):m("",!0)]),ms],32)])])])])],64)}const ps=E(A,[["render",_s]]);export{ps as default};