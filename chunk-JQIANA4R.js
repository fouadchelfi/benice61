import{Aa as fe,Ab as Le,Bb as z,Ca as ge,D as u,Ea as xe,F as c,Fa as he,G as r,Ga as _e,H as i,Ha as ye,Hb as je,I as s,Ia as Ce,J as g,Ja as ve,K as x,Ka as we,L as k,La as Se,M as C,Ma as be,N as _,Na as Ee,Oa as Ie,P as T,Q as D,R as M,S as a,T as S,U as ie,Va as H,W as re,X as ne,Xa as Pe,Y as oe,aa as ae,ba as V,ca as me,e as J,f as K,fb as Q,g as X,h as Y,hb as Fe,ib as Ge,j as Z,k as ee,kb as ke,lb as Te,mb as De,n as N,na as le,nb as Me,ob as Ne,pa as R,pb as qe,q,qa as de,qb as Ae,r as A,rb as Ve,s as v,sb as Re,t as w,ta as O,tb as He,u as te,ua as ce,ub as Qe,va as b,wa as pe,wb as L,x as G,xa as ue,xb as j,y as m,z as h,za as se}from"./chunk-VQKOQMAP.js";var Je=["nameField"];function Ke(e,t){if(e&1&&(r(0,"li"),a(1),i()),e&2){let d=t.$implicit;m(),S(d)}}function Xe(e,t){if(e&1&&(r(0,"div",43),u(1,Ke,2,1,"li",22),i()),e&2){let d=_();m(),c("ngForOf",d.errors)}}function Ye(e,t){e&1&&(r(0,"my-error"),a(1," Champ obligatoire"),i())}function Ze(e,t){e&1&&(r(0,"my-error"),a(1," Champ obligatoire"),i())}function et(e,t){e&1&&(r(0,"my-error"),a(1," Champ obligatoire"),i())}function tt(e,t){e&1&&(r(0,"my-error"),a(1," Champ obligatoire"),i())}function it(e,t){if(e&1&&(g(0),r(1,"option",44),a(2),i(),x()),e&2){let d=t.$implicit;m(),c("value",d.id),m(),S(d.name)}}function rt(e,t){e&1&&(r(0,"my-error"),a(1," Veuillez remplir ce champ. "),i())}function nt(e,t){e&1&&(r(0,"my-error"),a(1," Champ obligatoire"),i())}function ot(e,t){if(e&1&&s(0,"img",45),e&2){let d,n=_();c("src",(d=n.productFormGroup.get("image"))==null?null:d.value,G)}}function at(e,t){e&1&&(r(0,"my-error"),a(1," Champ obligatoire"),i())}function mt(e,t){if(e&1&&s(0,"img",53),e&2){let d=_().index,n=_();c("src",n.images.at(d).value,G)}}function lt(e,t){if(e&1){let d=k();r(0,"div")(1,"div",46)(2,"input",47),C("change",function(l){let o=v(d).index,p=_();return w(p.onFileSelectedAt(l,o))}),i(),s(3,"textarea",48),r(4,"div",49)(5,"label",50),s(6,"i",30),r(7,"span"),a(8,"Choisissez une image"),i()(),r(9,"small",31),s(10,"i",32),a(11," Choisissez une image."),i(),r(12,"button",51),C("click",function(){let l=v(d).index,o=_();return w(o.removeImageAt(l))}),a(13,"Supprimer"),i()(),u(14,mt,1,1,"img",52),i()()}if(e&2){let d,n=t.index,l=_();m(2),c("id",n),m(),c("formControlName",n),m(2),c("for",n),m(9),c("ngIf",(d=l.images.at(n))==null?null:d.value)}}var B=(()=>{let t=class t{get images(){return this.productFormGroup.get("images")}constructor(n,l,o,p,f,y){this.fb=n,this.route=l,this.productsHttp=o,this.snackbar=p,this.router=f,this.categoriesHttp=y,this.errors=[],this.productFormGroup=this.fb.group({id:[void 0],name:["",[b.required]],oldPrice:[0,[b.required]],newPrice:[0,[b.required]],showAsDiscount:[!1,[b.required]],showQuantityInStock:[!1,[b.required]],quantityInStock:[0,[b.required]],image:["",[b.required]],description:[""],categoryId:[void 0,[b.required]],images:this.fb.array([])})}ngAfterViewInit(){setTimeout(()=>{this.nameField.nativeElement.focus()},300)}ngOnInit(){this.params={mode:this.route.snapshot.paramMap.get("mode"),id:this.route.snapshot.paramMap.get("id")},this.productFormGroup.valueChanges.subscribe({next:n=>this.errors=[]}),this.params.mode=="edit"&&this.productsHttp.getProduct(this.params.id).subscribe({next:n=>{this.productFormGroup.patchValue({id:n.id,name:n.name,oldPrice:n.oldPrice,newPrice:n.newPrice,showAsDiscount:n.showAsDiscount,showQuantityInStock:n.showQuantityInStock,quantityInStock:n.quantityInStock,image:n.image,description:n.description,categoryId:n.categoryId}),n.images.forEach(l=>{this.images.push(this.fb.control(l.content))})}}),this.categories=this.categoriesHttp.getCategories()}saveProduct(){this.params.mode=="creation"?this.productsHttp.createProduct(this.productFormGroup.getRawValue()).subscribe({next:n=>{n.success&&(this.snackbar.open("Cr\xE9ation r\xE9ussie!","\u2705",{duration:6e3}),this.router.navigate(["/authenticated/products"]))},error:n=>{console.log(n),this.errors.push(n.error.errors.name)}}):this.productsHttp.updateProduct(this.productFormGroup.getRawValue()).subscribe({next:n=>{n.success&&(this.snackbar.open(n.message,"\u2705",{duration:6e3}),this.router.navigate(["/authenticated/products"]))},error:n=>{console.log(n),this.errors.push(n.error.errors.name)}})}onFileSelected(n){let l=n.target.files[0],o=new FileReader;o.readAsDataURL(l),o.onload=()=>{let p=o.result;this.productFormGroup.get("image")?.patchValue(p)}}addImageItem(){this.images.push(this.fb.control(""))}removeImageAt(n){this.images.removeAt(n)}onFileSelectedAt(n,l){let o=n.target.files[0],p=new FileReader;p.readAsDataURL(o),p.onload=()=>{let f=p.result;this.images.at(l).patchValue(f)}}};t.\u0275fac=function(l){return new(l||t)(h(ve),h(le),h(z),h(Q),h(R),h(Le))},t.\u0275cmp=q({type:t,selectors:[["app-product-form"]],viewQuery:function(l,o){if(l&1&&T(Je,5),l&2){let p;D(p=M())&&(o.nameField=p.first)}},decls:83,vars:21,consts:[["nameField",""],[1,"flex","flex-col","flex-1"],[1,"flex","flex-row","items-center","p-5"],[1,"text-black","font-medium","text-xl"],["class","flex flex-col gap-y-1 bg-red-100 my-4 mx-5 px-4 py-3 w-fit rounded-sm text-red-600",4,"ngIf"],[1,"flex","flex-col","gap-y-2","mt-6","px-5",3,"formGroup"],["animationDuration","0ms"],["label","Informations"],[1,"!my-8"],["formControlName","id","type","number",1,"!hidden"],[3,"required"],["myInput","","formControlName","name",1,"!w-96"],[4,"ngIf"],[1,"flex","flex-row","items-center","gap-x-3","w-fit"],["myInput","","formControlName","oldPrice","type","number",1,"!w-48"],[1,"absolute","right-0","top-8","px-2","text-sm","py-1","mx-2","font-medium","text-black","bg-accent","rounded"],["myInput","","formControlName","newPrice","type","number",1,"!w-48"],["formControlName","showAsDiscount"],[1,"flex","flex-col","gap-y-3"],["formControlName","showQuantityInStock",1,"w-72"],["myInput","","formControlName","quantityInStock","type","number",1,"!w-48"],["formControlName","categoryId","myInput","","size","small",1,"!max-w-80"],[4,"ngFor","ngForOf"],[1,"mt-6"],["myTextarea","","formControlName","description",1,"!w-[600px]","!h-80"],["label","Images"],[1,"relative","my-8"],[1,"flex","flex-col","gap-y-1"],[1,"text-2xl","font-medium","text-black","my-2"],["for","mainImage",1,"flex","flex-row","items-center","px-4","py-2","gap-x-3","w-fit","cursor-pointer","rounded","border","border-primary","bg-blue-50","hover:bg-primary","hover:text-white","text-primary"],[1,"ri-upload-2-line"],[1,"text-xs"],[1,"ri-information-line"],["type","file","id","mainImage",1,"!hidden",3,"change"],["myInput","","formControlName","image",1,"!hidden"],["alt","Photo Principale","class","!max-h-72 !max-w-max-h-72 mt-8 rounded-xl",3,"src",4,"ngIf"],[1,"flex","flex-col","gap-y-2"],["formArrayName","images",1,"flex","flex-col","!gap-y-8"],["mat-stroked-button","","color","accent",1,"!w-fit","mt-8",3,"click"],[1,"ri-add-line","text-lg"],[1,"flex","flex-row","p-5","gap-x-6","mt-6"],["mat-stroked-button","","color","primary","routerLink","/authenticated/products"],["mat-flat-button","","color","primary",3,"click","disabled"],[1,"flex","flex-col","gap-y-1","bg-red-100","my-4","mx-5","px-4","py-3","w-fit","rounded-sm","text-red-600"],[3,"value"],["alt","Photo Principale",1,"!max-h-72","!max-w-max-h-72","mt-8","rounded-xl",3,"src"],[1,"flex","flex-row","items-center","gap-x-6"],["type","file",1,"!hidden",3,"change","id"],["myInput","",1,"!hidden",3,"formControlName"],[1,"flex","flex-col"],[1,"flex","flex-row","items-center","px-4","py-2","gap-x-3","w-fit","cursor-pointer","rounded","border","border-primary","bg-blue-50","hover:bg-primary","hover:text-white","text-primary",3,"for"],["mat-stroked-button","","color","warn",1,"!mt-3","!border","!border-warn","!bg-red-50","hover:!bg-warn","hover:!text-white","!text-warn",3,"click"],["alt","Photo Principale","class","!max-h-36 !max-w-36max-h-36 !rounded-xl !shadow-sm",3,"src",4,"ngIf"],["alt","Photo Principale",1,"!max-h-36","!max-w-36max-h-36","!rounded-xl","!shadow-sm",3,"src"]],template:function(l,o){if(l&1){let p=k();r(0,"div",1)(1,"div",2)(2,"div",3),a(3),i()(),u(4,Xe,2,1,"div",4),r(5,"form",5)(6,"mat-tab-group",6)(7,"mat-tab",7)(8,"div",8),s(9,"input",9),r(10,"my-form-field")(11,"my-label",10),a(12,"Nom du produit"),i(),s(13,"input",11,0),u(15,Ye,2,0,"my-error",12),i(),r(16,"div",13)(17,"my-form-field")(18,"my-label",10),a(19,"Ancien Prix"),i(),s(20,"input",14),u(21,Ze,2,0,"my-error",12),r(22,"div",15),a(23," DA"),i()(),r(24,"my-form-field")(25,"my-label",10),a(26,"Nouveau Prix"),i(),s(27,"input",16),u(28,et,2,0,"my-error",12),r(29,"div",15),a(30," DA"),i()()(),r(31,"mat-checkbox",17),a(32,"Aficher en tant que promotion?"),i(),r(33,"div",18)(34,"mat-checkbox",19),a(35,"Afficher la quantit\xE9 au stock? "),i(),r(36,"my-form-field")(37,"my-label",10),a(38," Quantit\xE9 en Stock"),i(),s(39,"input",20),u(40,tt,2,0,"my-error",12),i()(),r(41,"my-form-field")(42,"my-label",10),a(43,"Cat\xE9gorie"),i(),r(44,"select",21),u(45,it,3,2,"ng-container",22),ne(46,"async"),i(),u(47,rt,2,0,"my-error",12),i(),r(48,"my-form-field",23)(49,"my-label"),a(50,"Description"),i(),s(51,"textarea",24),u(52,nt,2,0,"my-error",12),i()()(),r(53,"mat-tab",25)(54,"div")(55,"div",26)(56,"div",27)(57,"div",28),a(58,"La Photo Pricipale"),i(),r(59,"label",29),s(60,"i",30),r(61,"span"),a(62,"Choisissez une image"),i()(),r(63,"small",31),s(64,"i",32),a(65," Choisissez l'image principale pour le produit."),i(),r(66,"input",33),C("change",function(y){return v(p),w(o.onFileSelected(y))}),i()(),s(67,"textarea",34),u(68,ot,1,1,"img",35)(69,at,2,0,"my-error",12),i(),r(70,"div",36)(71,"div",28),a(72,"Autres Images"),i(),r(73,"div",37),u(74,lt,15,4,"div",22),r(75,"button",38),C("click",function(){return v(p),w(o.addImageItem())}),s(76,"i",39),a(77," Ajouter une Photo "),i()()()()()()(),r(78,"div",40)(79,"button",41),a(80,"Retour"),i(),r(81,"button",42),C("click",function(){return v(p),w(o.saveProduct())}),a(82,"Enregistrer"),i()()()}if(l&2){let p,f,y,I,E,P,W,F;m(3),ie(" ",o.params.mode=="creation"?"Nouveau Produit":"Modifier Cat\xE9gorie"," "),m(),c("ngIf",o.errors.length>0),m(),c("formGroup",o.productFormGroup),m(6),c("required",!0),m(4),c("ngIf",(((p=o.productFormGroup.get("name"))==null?null:p.dirty)||((p=o.productFormGroup.get("name"))==null?null:p.touched))&&((p=o.productFormGroup.get("name"))==null?null:p.getError("required"))),m(3),c("required",!0),m(3),c("ngIf",(((f=o.productFormGroup.get("oldPrice"))==null?null:f.dirty)||((f=o.productFormGroup.get("oldPrice"))==null?null:f.touched))&&((f=o.productFormGroup.get("oldPrice"))==null?null:f.getError("required"))),m(4),c("required",!0),m(3),c("ngIf",(((y=o.productFormGroup.get("newPrice"))==null?null:y.dirty)||((y=o.productFormGroup.get("newPrice"))==null?null:y.touched))&&((y=o.productFormGroup.get("newPrice"))==null?null:y.getError("required"))),m(9),c("required",!0),m(3),c("ngIf",(((I=o.productFormGroup.get("quantityInStock"))==null?null:I.dirty)||((I=o.productFormGroup.get("quantityInStock"))==null?null:I.touched))&&((I=o.productFormGroup.get("quantityInStock"))==null?null:I.getError("required"))),m(2),c("required",!0),m(3),c("ngForOf",oe(46,19,o.categories)),m(2),c("ngIf",((E=o.productFormGroup.get("categoryId"))==null?null:E.invalid)&&(((E=o.productFormGroup.get("categoryId"))==null?null:E.dirty)||((E=o.productFormGroup.get("categoryId"))==null?null:E.touched))&&((E=o.productFormGroup.get("categoryId"))==null?null:E.getError("required"))),m(5),c("ngIf",(((P=o.productFormGroup.get("description"))==null?null:P.dirty)||((P=o.productFormGroup.get("description"))==null?null:P.touched))&&((P=o.productFormGroup.get("description"))==null?null:P.getError("required"))),m(16),c("ngIf",(W=o.productFormGroup.get("image"))==null?null:W.value),m(),c("ngIf",(((F=o.productFormGroup.get("image"))==null?null:F.dirty)||((F=o.productFormGroup.get("image"))==null?null:F.touched))&&((F=o.productFormGroup.get("image"))==null?null:F.getError("required"))),m(5),c("ngForOf",o.images.controls),m(7),c("disabled",o.productFormGroup.invalid)}},dependencies:[ae,V,de,se,ye,Ce,ce,fe,_e,pe,ue,ge,he,xe,H,Fe,Ge,ke,be,Ie,we,Se,Ee,me],styles:[`app-product-form{display:flex;flex:1}
`],encapsulation:2});let e=t;return e})();var dt=()=>[5,10,20,30,50,100];function ct(e,t){e&1&&(r(0,"th",23),a(1,"Produit"),i())}function pt(e,t){if(e&1&&(r(0,"td",24),a(1),i()),e&2){let d=t.$implicit;m(),S(d.name)}}function ut(e,t){e&1&&(r(0,"th",23),a(1,"Ancien Prix"),i())}function st(e,t){if(e&1&&(r(0,"td",24),a(1),i()),e&2){let d=t.$implicit;m(),S(d.oldPrice)}}function ft(e,t){e&1&&(r(0,"th",23),a(1,"Nouveau Prix"),i())}function gt(e,t){if(e&1&&(r(0,"td",24),a(1),i()),e&2){let d=t.$implicit;m(),S(d.newPrice)}}function xt(e,t){e&1&&(r(0,"th",23),a(1,"R\xE9duction"),i())}function ht(e,t){e&1&&(r(0,"div",27),a(1,"Remise"),i())}function _t(e,t){e&1&&(r(0,"div",28),a(1,"Prix Normal"),i())}function yt(e,t){if(e&1&&(r(0,"td",24),u(1,ht,2,0,"div",25)(2,_t,2,0,"div",26),i()),e&2){let d=t.$implicit;m(),c("ngIf",d.showAsDiscount),m(),c("ngIf",!d.showAsDiscount)}}function Ct(e,t){e&1&&(r(0,"th",23),a(1,"Afficher la Quantit\xE9 en Stock"),i())}function vt(e,t){e&1&&(r(0,"div",31),a(1,"Visible"),i())}function wt(e,t){e&1&&(r(0,"div",32),a(1,"Cach\xE9e"),i())}function St(e,t){if(e&1&&(r(0,"td",24),u(1,vt,2,0,"div",29)(2,wt,2,0,"div",30),i()),e&2){let d=t.$implicit;m(),c("ngIf",d.showQuantityInStock),m(),c("ngIf",!d.showQuantityInStock)}}function bt(e,t){e&1&&(r(0,"th",23),a(1,"Quantit\xE9 en Stock"),i())}function Et(e,t){if(e&1&&(r(0,"td",24),a(1),i()),e&2){let d=t.$implicit;m(),S(d.quantityInStock)}}function It(e,t){e&1&&(r(0,"th",23),a(1,"Image"),i())}function Pt(e,t){if(e&1&&(r(0,"td",24),s(1,"img",33),i()),e&2){let d=t.$implicit;m(),c("src",d.image,G)}}function Ft(e,t){e&1&&(r(0,"th",23),a(1,"Cat\xE9gorie"),i())}function Gt(e,t){if(e&1&&(r(0,"td",24),a(1),i()),e&2){let d=t.$implicit;m(),S(d.category.name)}}function kt(e,t){e&1&&(r(0,"th",34),a(1,"Action"),i())}function Tt(e,t){if(e&1){let d=k();r(0,"td",24)(1,"div",35)(2,"button",36),C("click",function(){let l=v(d).$implicit,o=_();return w(o.deleteItem(l.id))}),s(3,"i",37),i(),r(4,"button",36),C("click",function(){let l=v(d).$implicit,o=_();return w(o.newItem("edit",l.id))}),s(5,"i",38),i()()()}}function Dt(e,t){e&1&&s(0,"tr",39)}function Mt(e,t){e&1&&s(0,"tr",40)}var U=(()=>{let t=class t{constructor(n,l,o){this.productsHttp=n,this.snackbar=l,this.router=o,this.displayedColumns=["name","category.name","oldPrice","newPrice","showAsDiscount","showQuantityInStock","quantityInStock","image","actions"],this.data=[],this.resultsLength=0,this.isLoadingResults=!0,this.isRateLimitReached=!1,this.refresh=new te}ngAfterViewInit(){this.sort.sortChange.subscribe(()=>this.paginator.pageIndex=0),X(this.sort.sortChange,this.paginator.page,this.refresh).pipe(Z({}),ee(()=>(this.isLoadingResults=!0,this.productsHttp.paginateProducts(this.sort.active,this.sort.direction,this.paginator.pageIndex,this.paginator.pageSize).pipe(Y(()=>J(null))))),K(n=>(this.isLoadingResults=!1,this.isRateLimitReached=n?.items?.length==0,n?.items===null?[]:(this.resultsLength=n?.totalCount,n?.items)))).subscribe(n=>this.data=n)}ngOnInit(){}newItem(n="creation",l=0){this.router.navigate([`/authenticated/products/${n}/${l}`])}deleteItem(n){confirm("\xCAtes-vous s\xFBr de l'avoir fait?")&&this.productsHttp.deleteProduct(n).subscribe({next:l=>{this.refresh.emit(),this.snackbar.open("La suppression a \xE9t\xE9 r\xE9ussie","\u2705",{duration:6e3})}})}};t.\u0275fac=function(l){return new(l||t)(h(z),h(Q),h(R))},t.\u0275cmp=q({type:t,selectors:[["app-products-grid"]],viewQuery:function(l,o){if(l&1&&(T(L,5),T(j,5)),l&2){let p;D(p=M())&&(o.paginator=p.first),D(p=M())&&(o.sort=p.first)}},decls:40,vars:9,consts:[[1,"flex","flex-col","flex-1"],[1,"flex","flex-row","justify-between","items-center","px-6","py-4"],[1,"text-xl","font-medium","text-black"],["mat-flat-button","","color","primary",3,"click"],[1,"ri-add-line","text-lg"],[1,"flex","flex-col","m-6","shadow"],[1,"max-h-[calc(100vh-300px)]","overflow-auto"],["mat-table","","matSort","","matSortActive","id","matSortDisableClear","","matSortDirection","desc",3,"dataSource"],["matColumnDef","name"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","oldPrice"],["matColumnDef","newPrice"],["matColumnDef","showAsDiscount"],["matColumnDef","showQuantityInStock"],["matColumnDef","quantityInStock"],["matColumnDef","image"],["matColumnDef","category.name"],["matColumnDef","actions"],["mat-header-cell","","class","!text-center w-20 ",4,"matHeaderCellDef"],["mat-header-row","",4,"matHeaderRowDef","matHeaderRowDefSticky"],["mat-row","",4,"matRowDef","matRowDefColumns"],["aria-label","Select page of GitHub search results",3,"pageSizeOptions","length","pageSize","showFirstLastButtons"],["mat-header-cell",""],["mat-cell",""],["class","px-2 py-1 w-fit bg-red-100 text-red-600 rounded font-medium !text-sm min-w-24 text-center",4,"ngIf"],["class","px-2 py-1 w-fit bg-gray-100 text-gray-600 rounded font-medium !text-sm min-w-24 text-center",4,"ngIf"],[1,"px-2","py-1","w-fit","bg-red-100","text-red-600","rounded","font-medium","!text-sm","min-w-24","text-center"],[1,"px-2","py-1","w-fit","bg-gray-100","text-gray-600","rounded","font-medium","!text-sm","min-w-24","text-center"],["class","px-2 py-1 w-fit bg-blue-100 text-primary rounded font-medium !text-sm min-w-24 text-center",4,"ngIf"],["class","px-2 py-1 w-fit bg-orange-100 text-orange-600 rounded font-medium !text-sm min-w-24 text-center",4,"ngIf"],[1,"px-2","py-1","w-fit","bg-blue-100","text-primary","rounded","font-medium","!text-sm","min-w-24","text-center"],[1,"px-2","py-1","w-fit","bg-orange-100","text-orange-600","rounded","font-medium","!text-sm","min-w-24","text-center"],["alt","row.name",1,"rounded-full","w-9","h-9",3,"src"],["mat-header-cell","",1,"!text-center","w-20"],[1,"flex","flex-row","items-center","space-x-2"],["mat-icon-button","",3,"click"],[1,"ri-delete-bin-6-line","text-red-600"],[1,"ri-pencil-line"],["mat-header-row",""],["mat-row",""]],template:function(l,o){l&1&&(r(0,"div",0)(1,"div",1)(2,"div",2),a(3,"Produits"),i(),r(4,"button",3),C("click",function(){return o.newItem()}),s(5,"i",4),a(6," Nouveau Produit"),i()(),r(7,"div",5)(8,"div",6)(9,"table",7),g(10,8),u(11,ct,2,0,"th",9)(12,pt,2,1,"td",10),x(),g(13,11),u(14,ut,2,0,"th",9)(15,st,2,1,"td",10),x(),g(16,12),u(17,ft,2,0,"th",9)(18,gt,2,1,"td",10),x(),g(19,13),u(20,xt,2,0,"th",9)(21,yt,3,2,"td",10),x(),g(22,14),u(23,Ct,2,0,"th",9)(24,St,3,2,"td",10),x(),g(25,15),u(26,bt,2,0,"th",9)(27,Et,2,1,"td",10),x(),g(28,16),u(29,It,2,0,"th",9)(30,Pt,2,1,"td",10),x(),g(31,17),u(32,Ft,2,0,"th",9)(33,Gt,2,1,"td",10),x(),g(34,18),u(35,kt,2,0,"th",19)(36,Tt,6,0,"td",10),x(),u(37,Dt,1,0,"tr",20)(38,Mt,1,0,"tr",21),i()(),s(39,"mat-paginator",22),i()()),l&2&&(m(9),c("dataSource",o.data),m(28),c("matHeaderRowDef",o.displayedColumns)("matHeaderRowDefSticky",!0),m(),c("matRowDefColumns",o.displayedColumns),m(),c("pageSizeOptions",re(8,dt))("length",o.resultsLength)("pageSize",20)("showFirstLastButtons",!0))},dependencies:[V,H,Pe,Te,Me,Ve,Ne,De,Re,qe,Ae,He,Qe,L,j],styles:[`app-products-grid{display:flex;flex:1}
`],encapsulation:2});let e=t;return e})();var Nt=[{path:"",component:U},{path:":mode/:id",component:B}],ze=(()=>{let t=class t{};t.\u0275fac=function(l){return new(l||t)},t.\u0275mod=A({type:t}),t.\u0275inj=N({imports:[O.forChild(Nt),O]});let e=t;return e})();var pi=(()=>{let t=class t{};t.\u0275fac=function(l){return new(l||t)},t.\u0275mod=A({type:t}),t.\u0275inj=N({imports:[je,ze]});let e=t;return e})();export{pi as ProductsModule};
