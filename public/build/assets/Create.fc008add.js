import{L as k}from"./Layout.fb27969f.js";import{L as x,H as S,i as N,r as _,o as n,c as l,a as b,w as u,b as e,j as w,k as c,v,n as d,F as f,e as V,t as r,d as m,l as h,m as B,f as K,g as L}from"./app.16f70518.js";import{S as P}from"./sweetalert2.all.11ff916e.js";import{_ as C}from"./_plugin-vue_export-helper.cdc0426e.js";const T={layout:k,components:{Link:x,Head:S},props:{errors:Object,categories:Object},setup(){const i=N({name:"",category_id:"",description:"",assessment_type:"",section:""});return{form:i,submit:()=>{B.Inertia.post("/admin/value-categories",{name:i.name,category_id:i.category_id,assessment_type:i.assessment_type,section:i.section},{onSuccess:()=>{P.fire({title:"Success!",text:"Kategori Penilaian Berhasil Disimpan!.",icon:"success",showConfirmButton:!1,timer:1e3})}})}}}},j={class:"page-wrapper"},H={class:"page-content"},J=K('<div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3"><div class="breadcrumb-title pe-3">Kategori Penilaian</div><div class="ps-3"><nav aria-label="breadcrumb"><ol class="breadcrumb mb-0 p-0"><li class="breadcrumb-item"><a href="javascript:;"><i class="bx bx-home-alt"></i></a></li><li class="breadcrumb-item active" aria-current="page">Tambah Kategori Penilaian</li></ol></nav></div></div>',1),U={class:"card"},D={class:"card-body"},M={class:"d-lg-flex align-items-center"},F={class:"ms-auto"},O=L("Kembali"),z={class:"col-12"},A=e("label",{class:"form-label"},"Kategori",-1),E=e("option",{value:""},"[ Pilih ]",-1),I=["value"],q={key:0,class:"invalid-feedback"},G={class:"col-12"},Q=e("label",{class:"form-label"},"Nama Kategori",-1),R={key:0,class:"invalid-feedback"},W={class:"col-12"},X=e("label",{class:"form-label"},"Jenis Penilaian",-1),Y=e("option",{value:""},"[ Pilih ]",-1),Z=e("option",{value:"1"},"Nilai = Jumlah Benar : Total Soal",-1),$=e("option",{value:"2"},"Nilai = Jumlah Jawaban Benar",-1),ee=[Y,Z,$],se={key:0,class:"invalid-feedback"},ae={class:"col-12"},te=e("label",{class:"form-label"},"Section",-1),oe={key:0,class:"invalid-feedback"},ie=e("div",{class:"col-12"},[e("button",{type:"submit",class:"btn btn-primary px-5"},"Submit")],-1);function ne(i,t,s,o,le,re){const g=_("Head"),y=_("Link");return n(),l(f,null,[b(g,null,{default:u(()=>[e("title",null,r(i.appName)+" - Tambah Kategori Penilaian",1)]),_:1}),e("div",j,[e("div",H,[J,e("div",U,[e("div",D,[e("div",M,[e("div",F,[b(y,{href:"/admin/value-categories",class:"btn btn-primary mt-2 mt-lg-0"},{default:u(()=>[O]),_:1})])]),e("form",{onSubmit:t[4]||(t[4]=w((...a)=>o.submit&&o.submit(...a),["prevent"])),class:"row g-3"},[e("div",z,[A,c(e("select",{"onUpdate:modelValue":t[0]||(t[0]=a=>o.form.category_id=a),class:d([{"is-invalid":s.errors.category_id},"form-select"])},[E,(n(!0),l(f,null,V(s.categories,(a,p)=>(n(),l("option",{key:p,value:a.id},r(a.name),9,I))),128))],2),[[v,o.form.category_id]]),s.errors.category_id?(n(),l("div",q,r(s.errors.category_id),1)):m("",!0)]),e("div",G,[Q,c(e("input",{type:"text",class:d(["form-control",{"is-invalid":s.errors.name}]),"onUpdate:modelValue":t[1]||(t[1]=a=>o.form.name=a),placeholder:"Nama"},null,2),[[h,o.form.name]]),s.errors.name?(n(),l("div",R,r(s.errors.name),1)):m("",!0)]),e("div",W,[X,c(e("select",{"onUpdate:modelValue":t[2]||(t[2]=a=>o.form.assessment_type=a),class:d([{"is-invalid":s.errors.assessment_type},"form-select"])},ee,2),[[v,o.form.assessment_type]]),s.errors.assessment_type?(n(),l("div",se,r(s.errors.assessment_type),1)):m("",!0)]),e("div",ae,[te,c(e("input",{type:"text",class:d(["form-control",{"is-invalid":s.errors.section}]),"onUpdate:modelValue":t[3]||(t[3]=a=>o.form.section=a),placeholder:"Section"},null,2),[[h,o.form.section]]),s.errors.section?(n(),l("div",oe,r(s.errors.section),1)):m("",!0)]),ie],32)])])])])],64)}const be=C(T,[["render",ne]]);export{be as default};
