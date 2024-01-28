import{d as V,k,r as v,m as C,c as u,e as b,b as e,n as q,q as S,l as a,v as r,s as E,i as h,f as R,u as U,F as z,h as p,R as N,p as Z,j as D}from"./index-FGR3vbBp.js";import{N as M,_ as P}from"./NavbarComponent-RTQflMgb.js";import{S as n,c as A,d as Y}from"./sweetalert2.all-N-XHufSx.js";const l=c=>(Z("data-v-861c3a3a"),c=c(),D(),c),$={class:"text-white"},I={class:"row g-0",style:{height:"calc(100dvh - 120px)"}},T=l(()=>e("div",{class:"col-6 d-none d-lg-block"},[e("div",{class:"login-bg"})],-1)),j={class:"col-12 col-lg-6 bg-dark d-flex justify-content-center align-items-center title-deco-bg-line"},B={class:"w-75 p-5"},F={key:0,class:"text-primary mb-2 fs-6"},L=l(()=>e("h2",{class:"mb-4 subtitle"},"立即註冊",-1)),G={class:"row mb-5"},H=l(()=>e("div",{class:"col-4 text-center"},[e("span",{class:"step-bg step-bg-active"},"1"),e("span",null,"輸入信箱及密碼")],-1)),J=l(()=>e("div",{class:"col-4 text-secondary step-line"},null,-1)),K={class:"col-4 text-center text-secondary"},O=l(()=>e("span",null,"填寫基本資料",-1)),Q={key:1},W={class:"mb-3"},X=l(()=>e("label",{for:"email",class:"form-label"},"電子信箱",-1)),ee={class:"mb-3"},te=l(()=>e("label",{for:"password",class:"form-label"},"密碼",-1)),se={class:"mb-5"},oe=l(()=>e("label",{for:"confirmPassword",class:"form-label"},"確認密碼",-1)),le={key:2},ae={class:"mb-3"},re=l(()=>e("label",{for:"name",class:"form-label"},"姓名",-1)),ne={class:"mb-3"},ie=l(()=>e("label",{for:"phone",class:"form-label"},"手機號碼",-1)),de={class:"mb-3"},ce=l(()=>e("label",{for:"birth_year",class:"form-label"},"生日",-1)),ue={class:"d-flex"},pe={class:"mb-3"},me=l(()=>e("label",{for:"address",class:"form-label"},"地址",-1)),ve={class:"d-flex mb-2"},be={class:"mb-5"},fe=l(()=>e("label",{class:"form-check-label",for:"agree"},"我已閱讀並同意本網站個資使用規範",-1)),he=V({__name:"RegisterView",setup(c){const _=k(),d=v(1),t=v({email:"",password:"",confirmPassword:"",name:"",phone:"",bornYear:void 0,bornMonth:void 0,bornDay:void 0,address:{zipcode:void 0,city:"",country:"",detail:""}}),m=v(!1),y=i=>{if(i.preventDefault(),t.value.email==""){n.fire({title:"請填寫Email",icon:"warning"});return}if(!t.value.email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)){n.fire({title:"Email格式錯誤",text:"請輸入正確有效的Email",icon:"error"});return}if(!t.value.password.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)){n.fire({title:"請填寫密碼",text:"密碼至少 8 碼以上，須包含英文字母和數字",icon:"warning"});return}if(t.value.password!==t.value.confirmPassword){n.fire({title:"密碼與確認密碼不同",icon:"error"});return}A(t.value.email).then(({data:s})=>{s.result.isEmailExists?n.fire({title:"此帳號已經註冊過囉！",icon:"error"}):d.value=2})},x=()=>{d.value=1},w=()=>{if(!t.value.name||!t.value.phone||!t.value.bornYear||!t.value.bornMonth||!t.value.bornDay||!t.value.address.city||!t.value.address.country||!t.value.address.detail){n.fire({title:"表單未完成",text:"請確實填寫註冊資料",icon:"warning"});return}if(!m.value){n.fire({title:"表單未完成",text:"您尚未同意個資使用規範",icon:"warning"});return}t.value.birthday=`${t.value.bornYear}/${t.value.bornMonth}/${t.value.bornDay}`,console.log(t.value),Y(t.value).then(()=>{n.fire({title:"註冊成功",text:"即將前往登入頁",icon:"success"}),_.push("/login")}).catch(i=>{n.fire({title:"註冊失敗",text:i.response.data.message,icon:"error"})})},g=i=>{t.value.address.zipcode=Number(i.value.zipCode),t.value.address.city=i.value.countyName,t.value.address.country=i.value.name};return(i,s)=>{const f=C("VueTwZipCodeSelector");return p(),u(z,null,[b(M),e("div",$,[e("div",I,[T,e("div",j,[e("form",B,[d.value===1?(p(),u("span",F," 享樂酒店，誠摯歡迎")):q("",!0),L,e("div",G,[H,J,e("div",K,[e("span",{class:S(["step-bg",d.value===2?"step-bg-active":"none"])},"2",2),O])]),d.value===1?(p(),u("div",Q,[e("div",W,[X,a(e("input",{"onUpdate:modelValue":s[0]||(s[0]=o=>t.value.email=o),type:"email",class:"form-control mb-3",id:"email","aria-describedby":"emailHelp",placeholder:"hello@exsample.com",required:""},null,512),[[r,t.value.email]])]),e("div",ee,[te,a(e("input",{"onUpdate:modelValue":s[1]||(s[1]=o=>t.value.password=o),type:"password",class:"form-control",id:"password",placeholder:"請輸入密碼",required:""},null,512),[[r,t.value.password]])]),e("div",se,[oe,a(e("input",{"onUpdate:modelValue":s[2]||(s[2]=o=>t.value.confirmPassword=o),type:"password",class:"form-control",id:"confirmPassword",placeholder:"請再輸入一次密碼",required:""},null,512),[[r,t.value.confirmPassword]])]),e("button",{type:"button",class:"btn w-100 p-3 mb-5 light-btn",onClick:y}," 下一步 ")])):(p(),u("div",le,[e("div",ae,[re,a(e("input",{"onUpdate:modelValue":s[3]||(s[3]=o=>t.value.name=o),type:"text",class:"form-control mb-3",id:"name",placeholder:"請輸入姓名",required:""},null,512),[[r,t.value.name]])]),e("div",ne,[ie,a(e("input",{"onUpdate:modelValue":s[4]||(s[4]=o=>t.value.phone=o),type:"text",class:"form-control",id:"phone",placeholder:"請輸入手機號碼",required:""},null,512),[[r,t.value.phone]])]),e("div",de,[ce,e("div",ue,[a(e("input",{"onUpdate:modelValue":s[5]||(s[5]=o=>t.value.bornYear=o),type:"text",class:"form-control me-2",id:"birth_year",placeholder:"1990年",required:""},null,512),[[r,t.value.bornYear]]),a(e("input",{"onUpdate:modelValue":s[6]||(s[6]=o=>t.value.bornMonth=o),type:"text",class:"form-control me-2",placeholder:"8月",required:""},null,512),[[r,t.value.bornMonth]]),a(e("input",{"onUpdate:modelValue":s[7]||(s[7]=o=>t.value.bornDay=o),type:"text",class:"form-control",placeholder:"15日",required:""},null,512),[[r,t.value.bornDay]])])]),e("div",pe,[me,e("div",ve,[b(f,{onGetSelectedZone:g})]),a(e("input",{"onUpdate:modelValue":s[8]||(s[8]=o=>t.value.address.detail=o),type:"text",class:"form-control me-2",placeholder:"請輸入詳細地址"},null,512),[[r,t.value.address.detail]])]),e("div",be,[a(e("input",{"onUpdate:modelValue":s[9]||(s[9]=o=>m.value=o),type:"checkbox",class:"form-check-input",id:"agree",required:""},null,512),[[E,m.value]]),fe]),e("div",{class:"d-flex justify-content-between"},[e("button",{type:"button",class:"btn w-50 p-3 light-btn me-3 mb-5",onClick:x}," 上一步 "),e("button",{type:"submit",class:"btn btn-primary w-50 p-3 mb-5 text-white",onClick:w}," 完成註冊 ")])])),e("p",null,[h("已經有會員了嗎? "),b(U(N),{to:"/login",class:"text-primary"},{default:R(()=>[h("立即登入")]),_:1})])])])])])],64)}}}),we=P(he,[["__scopeId","data-v-861c3a3a"]]);export{we as default};