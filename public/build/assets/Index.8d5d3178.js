import{L as y}from"./Layout.692c566e.js";import{P as w}from"./Pagination.9c5a2963.js";import{L,H as B,x as C,r as u,o as i,c as o,a as r,w as d,b as s,j as b,k as S,l as N,F as p,e as U,m as f,f as A,g as v,t as a}from"./app.888d1dec.js";import{S as g}from"./sweetalert2.all.f6d25b91.js";import{_ as D}from"./_plugin-vue_export-helper.cdc0426e.js";const H={layout:y,components:{Link:L,Head:B,Pagination:w},props:{users:Object},setup(){const c=C(new URL(document.location).searchParams.get("search"));return{search:c,handleSearch:()=>{f.Inertia.get("/admin/users",{search:c.value})},destroy:t=>{g.fire({title:"Apakah Anda yakin?",text:"Anda tidak akan dapat mengembalikan ini!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Hapus"}).then(_=>{_.isConfirmed&&(f.Inertia.delete(`/admin/users/${t}`),g.fire({title:"Deleted!",text:"User Berhasil Dihapus!.",icon:"success",timer:1e3,showConfirmButton:!1}))})}}}},P={class:"page-wrapper"},V={class:"page-content"},T=A('<div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3"><div class="breadcrumb-title pe-3">User</div><div class="ps-3"><nav aria-label="breadcrumb"><ol class="breadcrumb mb-0 p-0"><li class="breadcrumb-item"><a href="javascript:;"><i class="bx bx-home-alt"></i></a></li><li class="breadcrumb-item active" aria-current="page">Data User</li></ol></nav></div></div>',1),j={class:"card"},I={class:"card-body"},M={class:"d-lg-flex align-items-center mb-4 gap-3"},E={class:"position-relative"},F=v(),q=s("span",{class:"position-absolute top-50 product-show translate-middle-y"},[s("i",{class:"bx bx-search"})],-1),O={class:"ms-auto"},R=s("i",{class:"bx bxs-plus-square"},null,-1),z=v(" Tambah User"),G={class:"table-responsive"},J={class:"table mb-0"},K=s("thead",{class:"table-light"},[s("tr",null,[s("th",null,"No"),s("th",null,"Nama"),s("th",null,"Email"),s("th",null,"Level"),s("th",null,"Dibuat pada"),s("th",null,"Status User"),s("th",null,"Last Login"),s("th",null,"Aksi")])],-1),Q={class:"badge bg-success"},W={key:0,class:"badge bg-success"},X={key:1,class:"badge bg-danger"},Y={class:"badge bg-danger"},Z={class:"d-flex order-actions"},$=s("i",{class:"bx bx-grid-alt"},null,-1),ss=s("i",{class:"bx bxs-edit"},null,-1),es=["onClick"],ts=s("i",{class:"bx bxs-trash"},null,-1),as=[ts];function ns(c,n,l,t,_,ls){const x=u("Head"),m=u("Link"),k=u("Pagination");return i(),o(p,null,[r(x,null,{default:d(()=>[s("title",null,a(c.appName)+" - Data User",1)]),_:1}),s("div",P,[s("div",V,[T,s("div",j,[s("div",I,[s("div",M,[s("form",{onSubmit:n[1]||(n[1]=b((...e)=>t.handleSearch&&t.handleSearch(...e),["prevent"]))},[s("div",E,[S(s("input",{type:"text","onUpdate:modelValue":n[0]||(n[0]=e=>t.search=e),class:"form-control ps-5 radius-20",placeholder:"Cari Berdasarkan Nama...."},null,512),[[N,t.search]]),F,q])],32),s("div",O,[r(m,{href:"/admin/users/create",class:"btn btn-primary mt-2 mt-lg-0"},{default:d(()=>[R,z]),_:1})])]),s("div",G,[s("table",J,[K,s("tbody",null,[(i(!0),o(p,null,U(l.users.data,(e,h)=>(i(),o("tr",{key:h},[s("td",null,a(++h+(l.users.current_page-1)*l.users.per_page),1),s("td",null,a(e.name),1),s("td",null,a(e.email),1),s("td",null,[s("span",Q,a(e.level==1?"Admin":"Member"),1)]),s("td",null,a(e.created_at),1),s("td",null,[e.is_active==1?(i(),o("span",W,"Active")):(i(),o("span",X,"Non-active"))]),s("td",null,[s("span",Y,a(e.last_login_at),1)]),s("td",null,[s("div",Z,[r(m,{href:`/admin/users/${e.id}`,class:"ms-2"},{default:d(()=>[$]),_:2},1032,["href"]),r(m,{href:`/admin/users/${e.id}/edit`,class:"ms-2"},{default:d(()=>[ss]),_:2},1032,["href"]),s("a",{href:"#",onClick:b(is=>t.destroy(e.id),["prevent"]),class:"ms-2"},as,8,es)])])]))),128))])])]),r(k,{links:l.users.links,align:"end"},null,8,["links"])])])])])],64)}const us=D(H,[["render",ns]]);export{us as default};