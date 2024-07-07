import{L as k}from"./Layout.f4a652d8.js";import{P as v}from"./Pagination.bd2d4abe.js";import{L as f,H as y,r as o,o as e,c as s,a as d,w as u,b as a,d as i,F as _,e as x,f as P,t as n}from"./app.a3273dac.js";import"./sweetalert2.all.bc4cd6cc.js";import{_ as L}from"./_plugin-vue_export-helper.cdc0426e.js";const T={layout:k,components:{Link:f,Head:y,Pagination:v},props:{transactions:Object},methods:{formatPrice(r){return"Rp."+(r/1).toFixed(2).replace(".",",").toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}}},B={class:"page-wrapper"},N={class:"page-content"},w=P('<div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3"><div class="breadcrumb-title pe-3">Transaksi</div><div class="ps-3"><nav aria-label="breadcrumb"><ol class="breadcrumb mb-0 p-0"><li class="breadcrumb-item"><a href="javascript:;"><i class="bx bx-home-alt"></i></a></li><li class="breadcrumb-item active" aria-current="page">Data Transaksi</li></ol></nav></div></div>',1),S={class:"card"},D={class:"card-body"},H=a("div",{class:"d-flex align-items-center"},[a("div",null,[a("h6",{class:"mb-3"},"Riwayat Transaksi")])],-1),V={class:"table-responsive"},C={class:"table mb-0"},F=a("thead",{class:"table-light"},[a("tr",null,[a("th",null,"No"),a("th",null,"Kode Transaksi"),a("th",null,"Kategori"),a("th",null,"Judul"),a("th",null,"Batas Pembayaran"),a("th",null,"Pembayaran"),a("th",null,"Status"),a("th",null,"Aksi")])],-1),j={key:0},A=a("td",{colspan:"8",align:"center"},"Belum ada transaksi",-1),K=[A],R={key:0,class:"badge bg-warning"},E={key:1,class:"badge bg-primary"},G={key:2,class:"badge bg-danger"},I={key:3,class:"badge bg-success"},J={class:"d-flex order-actions"},M=a("i",{class:"bx bx-grid-alt"},null,-1);function O(r,m,l,q,z,b){const h=o("Head"),p=o("Link"),g=o("Pagination");return e(),s(_,null,[d(h,null,{default:u(()=>[a("title",null,n(r.appName)+" - Data Transaksi",1)]),_:1}),a("div",B,[a("div",N,[w,a("div",S,[a("div",D,[H,a("div",V,[a("table",C,[F,a("tbody",null,[l.transactions.data.length?i("",!0):(e(),s("tr",j,K)),(e(!0),s(_,null,x(l.transactions.data,(t,c)=>(e(),s("tr",{key:c},[a("td",null,n(++c+(l.transactions.current_page-1)*l.transactions.per_page),1),a("td",null,n(t.code),1),a("td",null,n(t.exam.category.name),1),a("td",null,n(t.exam.title),1),a("td",null,n(t.maximum_payment_time),1),a("td",null,n(b.formatPrice(t.total_purchases)),1),a("td",null,[t.transaction_status=="pending"?(e(),s("span",R,"Menunggu Pembayaran")):i("",!0),t.transaction_status=="paid"?(e(),s("span",E,"Pembayaran Diterima")):i("",!0),t.transaction_status=="failed"?(e(),s("span",G,"Transakasi Gagal")):i("",!0),t.transaction_status=="done"?(e(),s("span",I,"Transaksi Selesai")):i("",!0)]),a("td",null,[a("div",J,[d(p,{href:`/user/transactions/${t.id}`},{default:u(()=>[M]),_:2},1032,["href"])])])]))),128))])])]),d(g,{links:l.transactions.links,align:"end"},null,8,["links"])])])])])],64)}const Z=L(T,[["render",O]]);export{Z as default};
