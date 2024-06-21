import{L as h}from"./Layout.fb27969f.js";import{L as v,H as p,i as g,r as c,o as n,c as r,a as m,w as d,b as a,j as x,k as y,l as k,n as b,t as l,d as u,F as w,m as N,f as S,g as C}from"./app.16f70518.js";import{S as L}from"./sweetalert2.all.11ff916e.js";import{_ as T}from"./_plugin-vue_export-helper.cdc0426e.js";const V={layout:h,components:{Link:v,Head:p},props:{errors:Object},setup(){const s=g({name:"",thumbnail:""});return{form:s,submit:()=>{N.Inertia.post("/admin/categories",{forceFormData:!0,name:s.name,thumbnail:s.thumbnail},{onSuccess:()=>{L.fire({title:"Success!",text:"Kategori Berhasil Disimpan!.",icon:"success",showConfirmButton:!1,timer:1e3})}})}}}},B={class:"page-wrapper"},K={class:"page-content"},D=S('<div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3"><div class="breadcrumb-title pe-3">Kategori Peminatan</div><div class="ps-3"><nav aria-label="breadcrumb"><ol class="breadcrumb mb-0 p-0"><li class="breadcrumb-item"><a href="javascript:;"><i class="bx bx-home-alt"></i></a></li><li class="breadcrumb-item active" aria-current="page">Tambah Kategori Peminatan</li></ol></nav></div></div>',1),H={class:"card"},j={class:"card-body"},F={class:"d-lg-flex align-items-center"},P={class:"ms-auto"},I=C("Kembali"),M={class:"col-12"},z=a("label",{class:"form-label"},"Nama",-1),A={key:0,class:"invalid-feedback"},E={class:"col-12"},O=a("label",{class:"form-label"},"Thumbnail",-1),U={key:0,class:"invalid-feedback"},q=a("div",{class:"col-12"},[a("button",{type:"submit",class:"btn btn-primary px-5"},"Submit")],-1);function G(s,e,t,i,J,Q){const _=c("Head"),f=c("Link");return n(),r(w,null,[m(_,null,{default:d(()=>[a("title",null,l(s.appName)+" - Tambah Kategori Peminatan",1)]),_:1}),a("div",B,[a("div",K,[D,a("div",H,[a("div",j,[a("div",F,[a("div",P,[m(f,{href:"/admin/categories",class:"btn btn-primary mt-2 mt-lg-0"},{default:d(()=>[I]),_:1})])]),a("form",{onSubmit:e[2]||(e[2]=x((...o)=>i.submit&&i.submit(...o),["prevent"])),class:"row g-3"},[a("div",M,[z,y(a("input",{type:"text",class:b(["form-control",{"is-invalid":t.errors.name}]),"onUpdate:modelValue":e[0]||(e[0]=o=>i.form.name=o),placeholder:"Nama"},null,2),[[k,i.form.name]]),t.errors.name?(n(),r("div",A,l(t.errors.name),1)):u("",!0)]),a("div",E,[O,a("input",{type:"file",class:b(["form-control",{"is-invalid":t.errors.thumbnail}]),onInput:e[1]||(e[1]=o=>i.form.thumbnail=o.target.files[0]),placeholder:"Thumbnail"},null,34),t.errors.thumbnail?(n(),r("div",U,l(t.errors.thumbnail),1)):u("",!0)]),q],32)])])])])],64)}const Z=T(V,[["render",G]]);export{Z as default};
