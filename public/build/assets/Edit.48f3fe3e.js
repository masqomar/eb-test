import{L as q}from"./Layout.fb27969f.js";import{L as x,H as E,i as V,r as c,o as d,c as m,a as u,w as f,b as e,j as A,k as C,l as S,n as j,t as b,d as v,F,m as L,f as N,g as B}from"./app.16f70518.js";import{S as D}from"./sweetalert2.all.11ff916e.js";import{E as U}from"./Editor.c93a3a60.js";import{_ as H}from"./_plugin-vue_export-helper.cdc0426e.js";const Q={layout:q,components:{Link:x,Head:E,Editor:U},props:{errors:Object,faq:Object},setup(a){const t=V({question:a.faq.question,answer:a.faq.answer});return{form:t,submit:()=>{L.Inertia.put(`/admin/faqs/${a.faq.id}`,{question:t.question,answer:t.answer},{onSuccess:()=>{D.fire({title:"Success!",text:"FAQ Berhasil Diupdate!.",icon:"success",showConfirmButton:!1,timer:1e3})}})}}}},T={class:"page-wrapper"},z={class:"page-content"},I=N('<div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3"><div class="breadcrumb-title pe-3">FAQ</div><div class="ps-3"><nav aria-label="breadcrumb"><ol class="breadcrumb mb-0 p-0"><li class="breadcrumb-item"><a href="javascript:;"><i class="bx bx-home-alt"></i></a></li><li class="breadcrumb-item active" aria-current="page">Edit FAQ</li></ol></nav></div></div>',1),M={class:"card"},O={class:"card-body"},R={class:"d-lg-flex align-items-center"},J={class:"ms-auto"},K=B("Kembali"),P={class:"col-12"},G=e("label",{class:"form-label"},"Pertanyaan",-1),W={key:0,class:"invalid-feedback"},X={class:"col-12"},Y=e("label",{class:"form-label"},[e("b",null,"Jawaban")],-1),Z={key:0},$=e("div",{class:"col-12"},[e("button",{type:"submit",class:"btn btn-primary px-5"},"Submit")],-1);function ee(a,t,s,o,te,ae){const g=c("Head"),h=c("Link"),w=c("Editor");return d(),m(F,null,[u(g,null,{default:f(()=>[e("title",null,b(a.appName)+" - Edit FAQ",1)]),_:1}),e("div",T,[e("div",z,[I,e("div",M,[e("div",O,[e("div",R,[e("div",J,[u(h,{href:"/admin/faqs",class:"btn btn-primary mt-2 mt-lg-0"},{default:f(()=>[K]),_:1})])]),e("form",{onSubmit:t[2]||(t[2]=A((...i)=>o.submit&&o.submit(...i),["prevent"])),class:"row g-3"},[e("div",P,[G,C(e("input",{type:"text",class:j(["form-control",{"is-invalid":s.errors.question}]),"onUpdate:modelValue":t[0]||(t[0]=i=>o.form.question=i),placeholder:"Nama"},null,2),[[S,o.form.question]]),s.errors.question?(d(),m("div",W,b(s.errors.question),1)):v("",!0)]),e("div",X,[Y,u(w,{"api-key":"jd1k1wkrqz97iboswell3mi4br146c6g7vq60g3l3l0vid0w",modelValue:o.form.answer,"onUpdate:modelValue":t[1]||(t[1]=i=>o.form.answer=i),init:{automatic_uploads:!0,height:400,external_plugins:{tiny_mce_wiris:"/assets/plugins/wiris/mathtype-tinymce5/plugin.min.js"},plugins:["advlist autolink lists link image charmap print preview hr anchor pagebreak","searchreplace wordcount visualblocks visualchars code fullscreen","insertdatetime media nonbreaking save table contextmenu directionality","emoticons template paste textcolor colorpicker textpattern imagetools"],draggable_modal:!0,toolbar:"insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | print preview media | forecolor backcolor emoticons | tiny_mce_wiris_formulaEditor tiny_mce_wiris_formulaEditorChemistry",image_advtab:!0,image_title:!0,automatic_uploads:!0,images_upload_url:"/upload",images_upload_credentials:!0,file_picker_types:"image",file_picker_callback:function(i,ie,se){var r=a.document.createElement("input");r.setAttribute("type","file"),r.setAttribute("accept","image/*"),r.onchange=function(){var l=this.files[0],n=new a.FileReader;n.readAsDataURL(l),n.onload=function(){var k="blobid"+new Date().getTime(),_=a.tinymce.activeEditor.editorUpload.blobCache,y=n.result.split(",")[1],p=_.create(k,l,y);_.add(p),i(p.blobUri(),{title:l.name})}},r.click()}}},null,8,["modelValue","init"]),s.errors.answer?(d(),m("div",Z,b(s.errors.answer),1)):v("",!0)]),$],32)])])])])],64)}const de=H(Q,[["render",ee]]);export{de as default};
