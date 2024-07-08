import{L as U}from"./Layout.38e1bb40.js";import{L as T,H as V,i as S,r as b,o as n,c as l,a as f,w as k,b as e,j,k as _,v as u,n as c,F as h,e as y,t as r,d,l as v,m as P,f as D,g as C}from"./app.dd9b9c21.js";import{S as N}from"./sweetalert2.all.773d28a4.js";import{E as M}from"./Editor.4e0e1891.js";import{a as g}from"./index.f3e95e9e.js";import{_ as B}from"./_plugin-vue_export-helper.cdc0426e.js";const L={layout:U,components:{Link:T,Head:V,Editor:M},props:{errors:Object,categories:Object},setup(){const a=S({category_id:"",question_title_id:"",title:"",duration:"",description:"",random_question:"",random_answer:"",show_answer:"",show_question_number_navigation:"",show_question_number:"",next_question_automatically:"",show_prev_next_button:"",type_option:"",price:"",total_tolerance:"",duration_type:"",value_category_id:"",duration_section:[],questionTitles:[],valueCategories:[]});return{form:a,submit:()=>{console.log(a.duration_section),P.Inertia.post("/admin/exams",{category_id:a.category_id,question_title_id:a.question_title_id,title:a.title,duration:a.duration,description:a.description,random_question:a.random_question,random_answer:a.random_answer,show_answer:a.show_answer,show_question_number_navigation:a.show_question_number_navigation,show_question_number:a.show_question_number,next_question_automatically:a.next_question_automatically,show_prev_next_button:a.show_prev_next_button,type_option:a.type_option,price:a.price,total_tolerance:a.total_tolerance,duration_type:a.duration_type,duration_section:a.duration_section},{onSuccess:()=>{N.fire({title:"Success!",text:"Ujian Berhasil Disimpan!.",icon:"success",showConfirmButton:!1,timer:1e3})}})},questionTitleData:()=>{a.question_title_id="",g.get(`/admin/categories/${a.category_id}/question-titles`).then(t=>{a.questionTitles=t.data}).catch(t=>console.error(t)),a.value_category_id="",g.get(`/admin/categories/${a.category_id}/value-categories`).then(t=>{a.valueCategories=t.data}).catch(t=>console.error(t))}}}},Y={class:"page-wrapper"},H={class:"page-content"},J=D('<div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3"><div class="breadcrumb-title pe-3">Ujian</div><div class="ps-3"><nav aria-label="breadcrumb"><ol class="breadcrumb mb-0 p-0"><li class="breadcrumb-item"><a href="javascript:;"><i class="bx bx-home-alt"></i></a></li><li class="breadcrumb-item active" aria-current="page">Tambah Ujian</li></ol></nav></div></div>',1),E={class:"card"},O={class:"card-body"},A={class:"d-lg-flex align-items-center"},K={class:"ms-auto"},W=C("Kembali"),z={class:"col-12"},F=e("label",{class:"form-label"},"Kategori Peminatan",-1),G=e("option",{value:""},"[ Pilih ]",-1),I=["value"],Q={key:0,class:"invalid-feedback"},R={class:"col-12"},X=e("label",{class:"form-label"},"Judul Soal",-1),Z=e("option",{value:""},"[ Pilih ]",-1),$=["value"],ee={key:0,class:"invalid-feedback"},oe={class:"col-12"},te=e("label",{class:"form-label"},"Jenis Waktu Ujian",-1),ie=e("option",{value:""},"[ Pilih ]",-1),se=e("option",{value:"1"},"Satu Waktu",-1),ae=e("option",{value:"2"},"Waktu Per Section",-1),ne=[ie,se,ae],le={key:0,class:"invalid-feedback"},re={key:0,class:"col-12"},de=e("label",{class:"form-label"},"Durasi Seluruh Ujian (Menit)",-1),_e={key:0,class:"invalid-feedback"},ce={class:"form-label"},ue=["onUpdate:modelValue"],me={key:0,class:"invalid-feedback"},ve={class:"col-12"},he=e("label",{class:"form-label"},"Judul Ujian",-1),be={key:0,class:"invalid-feedback"},fe={class:"col-12"},ye=e("label",{class:"form-label"},"Harga",-1),ke={key:0,class:"invalid-feedback"},ge={class:"col-12"},we=e("label",{class:"form-label"},"Deskripsi Ujian",-1),qe={key:0},pe={class:"col-12"},xe=e("label",{class:"form-label"},"Soal Acak",-1),Ue=e("option",{value:""},"[ Pilih ]",-1),Te=e("option",{value:"1"},"Ya",-1),Ve=e("option",{value:"0"},"Tidak",-1),Se=[Ue,Te,Ve],je={key:0,class:"invalid-feedback"},Pe={class:"col-12"},De=e("label",{class:"form-label"},"Jawaban Acak",-1),Ce=e("option",{value:""},"[ Pilih ]",-1),Ne=e("option",{value:"1"},"Ya",-1),Me=e("option",{value:"0"},"Tidak",-1),Be=[Ce,Ne,Me],Le={key:0,class:"invalid-feedback"},Ye={class:"col-12"},He=e("label",{class:"form-label"},"Tampilkan Jawaban",-1),Je=e("option",{value:""},"[ Pilih ]",-1),Ee=e("option",{value:"1"},"Ya",-1),Oe=e("option",{value:"0"},"Tidak",-1),Ae=[Je,Ee,Oe],Ke={key:0,class:"invalid-feedback"},We={class:"col-12"},ze=e("label",{class:"form-label"},"Tampilkan Navigasi Nomor Soal",-1),Fe=e("option",{value:""},"[ Pilih ]",-1),Ge=e("option",{value:"1"},"Ya",-1),Ie=e("option",{value:"0"},"Tidak",-1),Qe=[Fe,Ge,Ie],Re={key:0,class:"invalid-feedback"},Xe={class:"col-12"},Ze=e("label",{class:"form-label"},"Tampilkan Nomor Soal",-1),$e=e("option",{value:""},"[ Pilih ]",-1),eo=e("option",{value:"1"},"Ya",-1),oo=e("option",{value:"0"},"Tidak",-1),to=[$e,eo,oo],io={key:0,class:"invalid-feedback"},so={class:"col-12"},ao=e("label",{class:"form-label"},"Pertanyaan Selanjutnya Secara Otomatis",-1),no=e("option",{value:""},"[ Pilih ]",-1),lo=e("option",{value:"1"},"Ya",-1),ro=e("option",{value:"0"},"Tidak",-1),_o=[no,lo,ro],co={key:0,class:"invalid-feedback"},uo={class:"col-12"},mo=e("label",{class:"form-label"},"Tampilkan Button Sebelum & Selanjutnya",-1),vo=e("option",{value:""},"[ Pilih ]",-1),ho=e("option",{value:"1"},"Ya",-1),bo=e("option",{value:"0"},"Tidak",-1),fo=[vo,ho,bo],yo={key:0,class:"invalid-feedback"},ko={class:"col-12"},go=e("label",{class:"form-label"},"Tipe Pilihan Ganda",-1),wo=e("option",{value:""},"[ Pilih ]",-1),qo=e("option",{value:"1"},"Button Option dan Soal Menyatu (Normal)",-1),po=[wo,qo],xo={key:0,class:"invalid-feedback"},Uo={class:"col-12"},To=e("label",{class:"form-label"},"Maksimal Toleransi Keluar Tes",-1),Vo={key:0,class:"invalid-feedback"},So=e("div",{class:"col-12"},[e("button",{type:"submit",class:"btn btn-primary px-5"},"Submit")],-1);function jo(a,s,o,t,Po,Do){const w=b("Head"),q=b("Link"),p=b("Editor");return n(),l(h,null,[f(w,null,{default:k(()=>[e("title",null,r(a.appName)+" - Tambah Ujian",1)]),_:1}),e("div",Y,[e("div",H,[J,e("div",E,[e("div",O,[e("div",A,[e("div",K,[f(q,{href:"/admin/exams",class:"btn btn-primary mt-2 mt-lg-0"},{default:k(()=>[W]),_:1})])]),e("form",{onSubmit:s[17]||(s[17]=j((...i)=>t.submit&&t.submit(...i),["prevent"])),class:"row g-3"},[e("div",z,[F,_(e("select",{onChange:s[0]||(s[0]=(...i)=>t.questionTitleData&&t.questionTitleData(...i)),"onUpdate:modelValue":s[1]||(s[1]=i=>t.form.category_id=i),class:c([{"is-invalid":o.errors.category_id},"form-select"])},[G,(n(!0),l(h,null,y(o.categories,(i,m)=>(n(),l("option",{key:m,value:i.id},r(i.name),9,I))),128))],34),[[u,t.form.category_id]]),o.errors.category_id?(n(),l("div",Q,r(o.errors.category_id),1)):d("",!0)]),e("div",R,[X,_(e("select",{"onUpdate:modelValue":s[2]||(s[2]=i=>t.form.question_title_id=i),class:c([{"is-invalid":o.errors.question_title_id},"form-select"])},[Z,(n(!0),l(h,null,y(t.form.questionTitles,i=>(n(),l("option",{value:i.id},r(i.name),9,$))),256))],2),[[u,t.form.question_title_id]]),o.errors.question_title_id?(n(),l("div",ee,r(o.errors.question_title_id),1)):d("",!0)]),e("div",oe,[te,_(e("select",{"onUpdate:modelValue":s[3]||(s[3]=i=>t.form.duration_type=i),class:c([{"is-invalid":o.errors.duration_type},"form-select"])},ne,2),[[u,t.form.duration_type]]),o.errors.duration_type?(n(),l("div",le,r(o.errors.duration_type),1)):d("",!0)]),t.form.duration_type==1?(n(),l("div",re,[de,_(e("input",{type:"number",class:c(["form-control",{"is-invalid":o.errors.duration}]),"onUpdate:modelValue":s[4]||(s[4]=i=>t.form.duration=i),placeholder:"Durasi"},null,2),[[v,t.form.duration]]),o.errors.duration?(n(),l("div",_e,r(o.errors.duration),1)):d("",!0)])):d("",!0),t.form.duration_type==2?(n(!0),l(h,{key:1},y(t.form.valueCategories,(i,m)=>(n(),l("div",{key:m,class:"col-12"},[e("label",ce,"Durasi "+r(i.name)+" (Menit)",1),_(e("input",{type:"number",class:"form-control","onUpdate:modelValue":x=>t.form.duration_section[m]=x,placeholder:"Durasi"},null,8,ue),[[v,t.form.duration_section[m]]]),o.errors.duration_section+"."+m?(n(),l("div",me,r(o.errors.duration_section+"."+m),1)):d("",!0)]))),128)):d("",!0),e("div",ve,[he,_(e("input",{type:"text",class:c(["form-control",{"is-invalid":o.errors.title}]),"onUpdate:modelValue":s[5]||(s[5]=i=>t.form.title=i),placeholder:"Judul Ujian"},null,2),[[v,t.form.title]]),o.errors.title?(n(),l("div",be,r(o.errors.title),1)):d("",!0)]),e("div",fe,[ye,_(e("input",{type:"number",class:c(["form-control",{"is-invalid":o.errors.price}]),"onUpdate:modelValue":s[6]||(s[6]=i=>t.form.price=i),placeholder:"Harga"},null,2),[[v,t.form.price]]),o.errors.price?(n(),l("div",ke,r(o.errors.price),1)):d("",!0)]),e("div",ge,[we,f(p,{"api-key":"jd1k1wkrqz97iboswell3mi4br146c6g7vq60g3l3l0vid0w",modelValue:t.form.description,"onUpdate:modelValue":s[7]||(s[7]=i=>t.form.description=i),init:{images_upload_url:"https://englishboosterofficial.com/admin/upload_files",automatic_uploads:!0,height:400,plugins:["advlist autolink lists link image charmap print preview hr anchor pagebreak","searchreplace wordcount visualblocks visualchars code fullscreen","insertdatetime media nonbreaking save table contextmenu directionality","emoticons template paste textcolor colorpicker textpattern imagetools"],toolbar:"insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | print preview media | forecolor backcolor emoticons",image_advtab:!0}},null,8,["modelValue","init"]),o.errors.description?(n(),l("div",qe,r(o.errors.description),1)):d("",!0)]),e("div",pe,[xe,_(e("select",{"onUpdate:modelValue":s[8]||(s[8]=i=>t.form.random_question=i),class:c([{"is-invalid":o.errors.random_question},"form-select"])},Se,2),[[u,t.form.random_question]]),o.errors.random_question?(n(),l("div",je,r(o.errors.random_question),1)):d("",!0)]),e("div",Pe,[De,_(e("select",{"onUpdate:modelValue":s[9]||(s[9]=i=>t.form.random_answer=i),class:c([{"is-invalid":o.errors.random_answer},"form-select"])},Be,2),[[u,t.form.random_answer]]),o.errors.random_answer?(n(),l("div",Le,r(o.errors.random_answer),1)):d("",!0)]),e("div",Ye,[He,_(e("select",{"onUpdate:modelValue":s[10]||(s[10]=i=>t.form.show_answer=i),class:c([{"is-invalid":o.errors.show_answer},"form-select"])},Ae,2),[[u,t.form.show_answer]]),o.errors.show_answer?(n(),l("div",Ke,r(o.errors.show_answer),1)):d("",!0)]),e("div",We,[ze,_(e("select",{"onUpdate:modelValue":s[11]||(s[11]=i=>t.form.show_question_number_navigation=i),class:c([{"is-invalid":o.errors.show_question_number_navigation},"form-select"])},Qe,2),[[u,t.form.show_question_number_navigation]]),o.errors.show_question_number_navigation?(n(),l("div",Re,r(o.errors.show_question_number_navigation),1)):d("",!0)]),e("div",Xe,[Ze,_(e("select",{"onUpdate:modelValue":s[12]||(s[12]=i=>t.form.show_question_number=i),class:c([{"is-invalid":o.errors.show_question_number},"form-select"])},to,2),[[u,t.form.show_question_number]]),o.errors.show_question_number?(n(),l("div",io,r(o.errors.show_question_number),1)):d("",!0)]),e("div",so,[ao,_(e("select",{"onUpdate:modelValue":s[13]||(s[13]=i=>t.form.next_question_automatically=i),class:c([{"is-invalid":o.errors.next_question_automatically},"form-select"])},_o,2),[[u,t.form.next_question_automatically]]),o.errors.next_question_automatically?(n(),l("div",co,r(o.errors.next_question_automatically),1)):d("",!0)]),e("div",uo,[mo,_(e("select",{"onUpdate:modelValue":s[14]||(s[14]=i=>t.form.show_prev_next_button=i),class:c([{"is-invalid":o.errors.show_prev_next_button},"form-select"])},fo,2),[[u,t.form.show_prev_next_button]]),o.errors.show_prev_next_button?(n(),l("div",yo,r(o.errors.show_prev_next_button),1)):d("",!0)]),e("div",ko,[go,_(e("select",{"onUpdate:modelValue":s[15]||(s[15]=i=>t.form.type_option=i),class:c([{"is-invalid":o.errors.type_option},"form-select"])},po,2),[[u,t.form.type_option]]),o.errors.type_option?(n(),l("div",xo,r(o.errors.type_option),1)):d("",!0)]),e("div",Uo,[To,_(e("input",{type:"number",class:c(["form-control",{"is-invalid":o.errors.total_tolerance}]),"onUpdate:modelValue":s[16]||(s[16]=i=>t.form.total_tolerance=i),placeholder:"Maksimal Toleransi"},null,2),[[v,t.form.total_tolerance]]),o.errors.total_tolerance?(n(),l("div",Vo,r(o.errors.total_tolerance),1)):d("",!0)]),So],32)])])])])],64)}const Ho=B(L,[["render",jo]]);export{Ho as default};