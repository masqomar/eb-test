import{L as y}from"./Layout.fb27969f.js";import{L as h,H as x,i as k,r as g,o as s,c as o,a as u,w as f,b as a,j as C,k as n,l as c,n as m,t as d,d as _,F as V,m as N,f as p,g as w}from"./app.16f70518.js";import{S}from"./sweetalert2.all.11ff916e.js";import{_ as D}from"./_plugin-vue_export-helper.cdc0426e.js";const L={layout:y,components:{Link:h,Head:x},props:{errors:Object,valueCategory:Object,detailValueCategory:Object},setup(t){const e=k({min_grade:t.detailValueCategory.min_grade,max_grade:t.detailValueCategory.max_grade,category_grade:t.detailValueCategory.category_grade,final_grade:t.detailValueCategory.final_grade});return{form:e,submit:()=>{N.Inertia.put(`/admin/value-categories/${t.valueCategory.id}/detail-value-categories/${t.detailValueCategory.id}`,{value_category_id:t.valueCategory.id,min_grade:e.min_grade,max_grade:e.max_grade,category_grade:e.category_grade,final_grade:e.final_grade},{onSuccess:()=>{S.fire({title:"Success!",text:"Detail Kategori Penilaian Berhasil Disimpan!.",icon:"success",showConfirmButton:!1,timer:1e3})}})}}}},M={class:"page-wrapper"},j={class:"page-content"},B=p('<div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3"><div class="breadcrumb-title pe-3">Kategori Penilaian</div><div class="ps-3"><nav aria-label="breadcrumb"><ol class="breadcrumb mb-0 p-0"><li class="breadcrumb-item"><a href="javascript:;"><i class="bx bx-home-alt"></i></a></li><li class="breadcrumb-item active" aria-current="page">Edit Detail Kategori Penilaian</li></ol></nav></div></div>',1),K={class:"card"},E={class:"card-body"},H={class:"d-lg-flex align-items-center"},P={class:"ms-auto"},A=w("Kembali"),O={class:"col-12"},U=a("label",{class:"form-label"},"Nilai Minimal",-1),F={key:0,class:"invalid-feedback"},T={class:"col-12"},z=a("label",{class:"form-label"},"Nilai Maksimal",-1),I={key:0,class:"invalid-feedback"},q={class:"col-12"},G=a("label",{class:"form-label"},"Nilai Akhir",-1),J={key:0,class:"invalid-feedback"},Q=a("div",{class:"col-12"},[a("button",{type:"submit",class:"btn btn-primary px-5"},"Submit")],-1);function R(t,e,i,r,W,X){const b=g("Head"),v=g("Link");return s(),o(V,null,[u(b,null,{default:f(()=>[a("title",null,d(t.appName)+" - Edit Detail Kategori Penilaian",1)]),_:1}),a("div",M,[a("div",j,[B,a("div",K,[a("div",E,[a("div",H,[a("div",P,[u(v,{href:`/admin/value-categories/${i.valueCategory.id}/detail-value-categories`,class:"btn btn-primary mt-2 mt-lg-0"},{default:f(()=>[A]),_:1},8,["href"])])]),a("form",{onSubmit:e[3]||(e[3]=C((...l)=>r.submit&&r.submit(...l),["prevent"])),class:"row g-3"},[a("div",O,[U,n(a("input",{type:"number",class:m(["form-control",{"is-invalid":i.errors.min_grade}]),"onUpdate:modelValue":e[0]||(e[0]=l=>r.form.min_grade=l),placeholder:"Nilai Minimal"},null,2),[[c,r.form.min_grade]]),i.errors.min_grade?(s(),o("div",F,d(i.errors.min_grade),1)):_("",!0)]),a("div",T,[z,n(a("input",{type:"number",class:m(["form-control",{"is-invalid":i.errors.max_grade}]),"onUpdate:modelValue":e[1]||(e[1]=l=>r.form.max_grade=l),placeholder:"Nilai Maksimal"},null,2),[[c,r.form.max_grade]]),i.errors.max_grade?(s(),o("div",I,d(i.errors.max_grade),1)):_("",!0)]),a("div",q,[G,n(a("input",{type:"text",class:m(["form-control",{"is-invalid":i.errors.final_grade}]),"onUpdate:modelValue":e[2]||(e[2]=l=>r.form.final_grade=l),placeholder:"Nilai Akhir"},null,2),[[c,r.form.final_grade]]),i.errors.final_grade?(s(),o("div",J,d(i.errors.final_grade),1)):_("",!0)]),Q],32)])])])])],64)}const ea=D(L,[["render",R]]);export{ea as default};
