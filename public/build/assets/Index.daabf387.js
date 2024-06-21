import{L as y}from"./Layout.fb27969f.js";import{P as B}from"./Pagination.e8499661.js";import{L as w,H as C,x as N,r as c,o as n,c as o,a as d,w as m,b as a,j as b,k as S,l as L,d as D,F as p,e as A,m as k,f as P,g as f,t as l}from"./app.16f70518.js";import{S as g}from"./sweetalert2.all.11ff916e.js";import{_ as V}from"./_plugin-vue_export-helper.cdc0426e.js";const H={layout:y,components:{Link:w,Head:C,Pagination:B},props:{banks:Object},setup(){const r=N(new URL(document.location).searchParams.get("search"));return{search:r,handleSearch:()=>{k.Inertia.get("/admin/banks",{search:r.value})},destroy:e=>{g.fire({title:"Apakah Anda yakin?",text:"Anda tidak akan dapat mengembalikan ini!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Hapus"}).then(u=>{u.isConfirmed&&(k.Inertia.delete(`/admin/banks/${e}`),g.fire({title:"Deleted!",text:"Pelajaran Berhasil Dihapus!.",icon:"success",timer:1e3,showConfirmButton:!1}))})}}}},j={class:"page-wrapper"},T={class:"page-content"},I=P('<div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3"><div class="breadcrumb-title pe-3">Bank</div><div class="ps-3"><nav aria-label="breadcrumb"><ol class="breadcrumb mb-0 p-0"><li class="breadcrumb-item"><a href="javascript:;"><i class="bx bx-home-alt"></i></a></li><li class="breadcrumb-item active" aria-current="page">Data Bank</li></ol></nav></div></div>',1),F={class:"card"},M={class:"card-body"},R={class:"d-lg-flex align-items-center mb-4 gap-3"},U={class:"position-relative"},q=f(),E=a("span",{class:"position-absolute top-50 product-show translate-middle-y"},[a("i",{class:"bx bx-search"})],-1),O={class:"ms-auto"},z=a("i",{class:"bx bxs-plus-square"},null,-1),G=f(" Tambah Bank"),J={class:"table-responsive"},K={class:"table mb-0"},Q=a("thead",{class:"table-light"},[a("tr",null,[a("th",null,"No"),a("th",null,"Logo Bank"),a("th",null,"Nama Bank"),a("th",null,"Nomor Rekening"),a("th",null,"Atas Nama"),a("th",null,"Status"),a("th",null,"Aksi")])],-1),W={key:0,align:"center",colspan:"6"},X={key:0},Y=["src"],Z={key:1},$={class:"badge bg-success"},aa={class:"d-flex order-actions"},ta=a("i",{class:"bx bxs-edit"},null,-1),ea=["onClick"],sa=a("i",{class:"bx bxs-trash"},null,-1),na=[sa];function oa(r,i,s,e,u,la){const v=c("Head"),_=c("Link"),x=c("Pagination");return n(),o(p,null,[d(v,null,{default:m(()=>[a("title",null,l(r.appName)+" - Data Bank",1)]),_:1}),a("div",j,[a("div",T,[I,a("div",F,[a("div",M,[a("div",R,[a("form",{onSubmit:i[1]||(i[1]=b((...t)=>e.handleSearch&&e.handleSearch(...t),["prevent"]))},[a("div",U,[S(a("input",{type:"text","onUpdate:modelValue":i[0]||(i[0]=t=>e.search=t),class:"form-control ps-5 radius-20",placeholder:"Cari Berdasarkan Nama...."},null,512),[[L,e.search]]),q,E])],32),a("div",O,[d(_,{href:"/admin/banks/create",class:"btn btn-primary mt-2 mt-lg-0"},{default:m(()=>[z,G]),_:1})])]),a("div",J,[a("table",K,[Q,a("tbody",null,[a("tr",null,[s.banks.data.length?D("",!0):(n(),o("td",W,"Data Bank kosong"))]),(n(!0),o(p,null,A(s.banks.data,(t,h)=>(n(),o("tr",{key:h},[a("td",null,l(++h+(s.banks.current_page-1)*s.banks.per_page),1),a("td",null,[t.image?(n(),o("div",X,[a("img",{src:"/storage/upload_files/banks/"+t.image,style:{width:"90px"}},null,8,Y)])):(n(),o("div",Z," - "))]),a("td",null,l(t.bank_name),1),a("td",null,l(t.rekening_number),1),a("td",null,l(t.rekening_name),1),a("td",null,[a("span",$,l(t.status),1)]),a("td",null,[a("div",aa,[d(_,{href:`/admin/banks/${t.id}/edit`,class:"ms-2"},{default:m(()=>[ta]),_:2},1032,["href"]),a("a",{href:"#",onClick:b(ia=>e.destroy(t.id),["prevent"]),class:"ms-2"},na,8,ea)])])]))),128))])])]),d(x,{links:s.banks.links,align:"end"},null,8,["links"])])])])])],64)}const _a=V(H,[["render",oa]]);export{_a as default};
