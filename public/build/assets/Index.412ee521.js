import{L as f}from"./Layout.fb27969f.js";import{P as y}from"./Pagination.e8499661.js";import{S as x}from"./sweetalert2.all.11ff916e.js";import{L as w,H as S,r as c,o as t,c as s,a as l,w as _,b as e,d,t as i,F as m,e as B,m as C,f as h,j,g as P}from"./app.16f70518.js";import{_ as L}from"./_plugin-vue_export-helper.cdc0426e.js";const T={layout:f,components:{Link:w,Head:S,Pagination:y},props:{exams:Object},setup(){return{buyExam:r=>{x.fire({title:"Apakah Anda yakin akan membeli paket ini ?",text:"jika membeli paket ini, silakan lakukan konfirmasi",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Ya",cancelButtonText:"Tidak"}).then(n=>{n.isConfirmed&&C.Inertia.get(`/user/transactions/exams/${r}/buy`)})}}},methods:{formatPrice(o){return(o/1).toFixed().replace(".",",").toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}}},A={class:"page-wrapper"},N={class:"page-content"},E=h('<div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3"><div class="breadcrumb-title pe-3">Ujian</div><div class="ps-3"><nav aria-label="breadcrumb"><ol class="breadcrumb mb-0 p-0"><li class="breadcrumb-item"><a href="javascript:;"><i class="bx bx-home-alt"></i></a></li><li class="breadcrumb-item active" aria-current="page">Soal</li></ol></nav></div></div><h4 class="mb-0 text-uppercase text-center">Pilih Soal Try Out Yang Akan Anda Kerjakan....</h4><hr>',3),V={key:0},H=h('<div class="row row-cols-12 row-cols-md-12 row-cols-lg-12 row-cols-xl-12"><div class="col"><div class="card border-bottom border-3 border-0"><div class="card-body"><h5 class="card-title text-center">Soal Belum Tersedia.</h5></div></div></div></div>',1),I=[H],$={key:1,class:"alert alert-danger border-0"},F={class:"row"},K={class:"card border-bottom border-3 border-0"},O=["src"],Y={class:"card-body"},D={class:"card-title"},G=e("p",{class:"card-text"},"Kerjakan Soal Sesuai Intruksi Yang Ada Dalam Informasi.",-1),M=e("hr",null,null,-1),R={class:"text-center"},U={key:0},q=e("h5",null,[e("span",{class:"badge badge-pill bg-primary ms-1"},"Enrolled")],-1),z=[q],J={key:1},Q={key:0},W=e("span",{class:"badge badge-pill bg-success ms-1"},"Gratis",-1),X=[W],Z={key:1},ee={class:"badge badge-pill bg-danger ms-1"},te=e("hr",null,null,-1),se={class:"text-center"},ae={key:0},oe=P("Kerjakan Soal"),ne={key:1},ie=["onClick"],re={key:2,class:"row"},ce={class:"col"},le=e("br",null,null,-1),de=e("br",null,null,-1);function _e(o,r,n,u,me,b){const p=c("Head"),g=c("Link"),v=c("Pagination");return t(),s(m,null,[l(p,null,{default:_(()=>[e("title",null,i(o.appName)+" - Soal",1)]),_:1}),e("div",A,[e("div",N,[E,n.exams.data.length?d("",!0):(t(),s("div",V,I)),o.$page.props.session.error?(t(),s("div",$,i(o.$page.props.session.error),1)):d("",!0),e("div",F,[(t(!0),s(m,null,B(n.exams.data,(a,k)=>(t(),s("div",{class:"col-xs-12 col-sm-6 col-md-6 col-lg-3",key:k},[e("div",K,[e("img",{src:"/storage/upload_files/categories/"+a.category.thumbnail,class:"card-img-top"},null,8,O),e("div",Y,[e("h6",D,i(a.title),1),G,M,e("div",R,[a.transaction.length>0?(t(),s("div",U,z)):(t(),s("div",J,[a.price===0?(t(),s("h5",Q,X)):(t(),s("h5",Z,[e("span",ee,"Rp. "+i(b.formatPrice(a.price)),1)]))]))]),te,e("div",se,[a.transaction.length>0||a.price===0?(t(),s("div",ae,[l(g,{href:`/user/categories/${a.category_id}/exams/${a.id}`,class:"btn btn-outline-primary w-100"},{default:_(()=>[oe]),_:2},1032,["href"])])):(t(),s("div",ne,[e("a",{href:"#",onClick:j(he=>u.buyExam(a.id),["prevent"]),class:"btn btn-outline-danger w-100 btn-block"},"Beli Paket Try Out",8,ie)]))])])])]))),128))]),n.exams.data.length?(t(),s("div",re,[e("div",ce,[l(v,{links:n.exams.links,align:"center"},null,8,["links"]),le,de])])):d("",!0)])])],64)}const ke=L(T,[["render",_e]]);export{ke as default};
