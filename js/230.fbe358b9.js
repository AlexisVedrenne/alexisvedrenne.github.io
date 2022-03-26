"use strict";(self["webpackChunkportfolio"]=self["webpackChunkportfolio"]||[]).push([[230],{183:(l,e,s)=>{s.d(e,{Z:()=>Z});var t=s(9835),i=s(6970);const a={class:"container"},o={class:"row justify-center"},n={class:"col"},r={class:"text-dark"},c={class:"text-overline"},u={class:"absolute-full flex flex-center"},d={class:"row justify-center q-mt-sm"};function m(l,e,s,m,p,k){const v=(0,t.up)("q-parallax"),_=(0,t.up)("q-badge"),g=(0,t.up)("q-linear-progress"),h=(0,t.up)("q-btn"),y=(0,t.up)("q-card-section"),b=(0,t.up)("q-card");return(0,t.wg)(),(0,t.iD)("div",null,[(0,t._)("div",a,[(0,t._)("div",o,[(0,t._)("div",n,[(0,t.Wm)(b,{class:"my-card"},{default:(0,t.w5)((()=>[(0,t.Wm)(v,{height:150,width:100,src:p.skil.image},{default:(0,t.w5)((()=>[(0,t._)("h1",r,(0,i.zw)(p.skil.label),1)])),_:1},8,["src"]),(0,t.Wm)(y,null,{default:(0,t.w5)((()=>[(0,t._)("div",c,[(0,t.Wm)(_,{outline:"",style:(0,i.j5)("color:"+p.skil.color),label:p.skil.type},null,8,["style","label"])]),(0,t.Wm)(g,{size:"25px",value:p.skil.level/100,class:"q-mt-md",color:p.skil.level<30?"negative":p.skil.level>=30&&p.skil.level<70?"warning":s.skill.level>=70?"positive":""},{default:(0,t.w5)((()=>[(0,t._)("div",u,[(0,t.Wm)(_,{color:"white","text-color":"accent",label:p.skil.level+"%"},null,8,["label"])])])),_:1},8,["value","color"]),(0,t._)("div",d,[(0,t.Wm)(h,{outline:"",style:(0,i.j5)("color:"+p.skil.color),label:"Voir les projets : "+p.skil.label,href:"/#/my-projects/"+p.skil.label},null,8,["style","label","href"])])])),_:1})])),_:1})])])])])}const p={props:{skill:{type:Object,required:!0}},data(){return{skil:this.skill}},methods:{color(){return this.skil>30?"negative":this.skil>30&&this.skil<70?"warning":this.skil>70?"positive":void 0}}};var k=s(1639),v=s(4458),_=s(6536),g=s(3190),h=s(990),y=s(8289),b=s(8879),f=s(9984),w=s.n(f);const q=(0,k.Z)(p,[["render",m]]),Z=q;w()(p,"components",{QCard:v.Z,QParallax:_.Z,QCardSection:g.Z,QBadge:h.Z,QLinearProgress:y.Z,QBtn:b.Z})},3230:(l,e,s)=>{s.r(e),s.d(e,{default:()=>H});var t=s(9835);const i={class:"container"},a={class:"row justify-center"},o={class:"col-6 q-mr-xl"},n={class:"col-4"},r=(0,t._)("h6",{class:"text-center"},"Prévisualisation de la compétence",-1),c=(0,t._)("div",{style:{height:"100px"}},null,-1),u=(0,t._)("div",{style:{height:"200px"}},null,-1);function d(l,e,s,d,m,p){const k=(0,t.up)("FormSkill"),v=(0,t.up)("SkillCard"),_=(0,t.up)("q-scroll-area");return(0,t.wg)(),(0,t.iD)("div",null,[(0,t._)("div",i,[(0,t._)("div",a,[(0,t._)("div",o,[(0,t.Wm)(k,{skill:m.skill},null,8,["skill"])]),(0,t._)("div",n,[r,(0,t.Wm)(_,{style:{height:"400px"}},{default:(0,t.w5)((()=>[c,(0,t.Wm)(v,{skill:m.skill},null,8,["skill"]),u])),_:1})])])])])}var m=s(6970);const p={class:"text-center"},k={class:"container"},v={class:"row justify-center"},_={class:"col q-mr-lg"},g={class:"col-8"},h={class:"row justify-center"},y={class:"col q-mb-sm"},b={class:"row justify-center"},f={class:"col q-mb-sm"},w={class:"row justify-center"},q={class:"col q-mb-sm"},Z=(0,t._)("div",{class:"row justify-center"},null,-1),W={class:"row justify-center"},j={class:"col q-mb-sm"},V={class:"row justify-center"},x=(0,t.Uk)("Ajouter une compétence");function S(l,e,s,i,a,o){const n=(0,t.up)("q-color"),r=(0,t.up)("q-input"),c=(0,t.up)("q-select"),u=(0,t.up)("q-badge"),d=(0,t.up)("q-slider"),S=(0,t.up)("q-btn"),Q=(0,t.up)("q-form");return(0,t.wg)(),(0,t.iD)("div",null,[(0,t._)("h6",p,"Nom de la compétences : "+(0,m.zw)(s.skill.label),1),(0,t.Wm)(Q,{onSubmit:o.addSkill},{default:(0,t.w5)((()=>[(0,t._)("div",k,[(0,t._)("div",v,[(0,t._)("div",_,[(0,t.Wm)(n,{modelValue:a.ski.color,"onUpdate:modelValue":e[0]||(e[0]=l=>a.ski.color=l),class:"my-picker"},null,8,["modelValue"])]),(0,t._)("div",g,[(0,t._)("div",h,[(0,t._)("div",y,[(0,t.Wm)(r,{modelValue:a.ski.label,"onUpdate:modelValue":e[1]||(e[1]=l=>a.ski.label=l),"lazy-rules":"",rules:[l=>l&&l.length>0||"Entrer le nom de la compétence !"],label:"Nom de la compétence"},null,8,["modelValue","rules"])])]),(0,t._)("div",b,[(0,t._)("div",f,[(0,t.Wm)(c,{modelValue:a.ski.type,"onUpdate:modelValue":e[2]||(e[2]=l=>a.ski.type=l),"lazy-rules":"",options:a.options,label:"Selectionner le type de la compétence"},null,8,["modelValue","options"])])]),(0,t._)("div",w,[(0,t._)("div",q,[(0,t.Wm)(u,{color:"accent"},{default:(0,t.w5)((()=>[(0,t.Uk)(" Niveau de la compétence : "+(0,m.zw)(s.skill.level+"%"),1)])),_:1}),(0,t.Wm)(d,{modelValue:a.ski.level,"onUpdate:modelValue":e[3]||(e[3]=l=>a.ski.level=l),min:0,max:100,"lazy-rules":"",step:.5},null,8,["modelValue","step"])])]),Z,(0,t._)("div",W,[(0,t._)("div",j,[(0,t.Wm)(r,{modelValue:a.ski.image,"onUpdate:modelValue":e[4]||(e[4]=l=>a.ski.image=l),"lazy-rules":"",rules:[l=>l&&l.length>0||"Mettre une image ! "],label:"Mettre l'image de la compétence"},null,8,["modelValue","rules"])])]),(0,t._)("div",V,[(0,t.Wm)(S,{class:"q-mr-sm",loading:a.loading,type:"submit",outline:"",color:"accent"},{default:(0,t.w5)((()=>[x])),_:1},8,["loading"])])])])])])),_:1},8,["onSubmit"])])}const Q={props:{skill:{type:Object,required:!0}},data(){return{ski:this.skill,loading:!1,options:["Back","Front","Framework","Management"]}},methods:{async addSkill(){this.loading=!0;await this.$store.dispatch("createSkills",{skill:this.ski});this.loading=!1}}};var z=s(1639),C=s(8326),U=s(5524),B=s(3119),F=s(8401),D=s(990),M=s(8423),N=s(8879),P=s(9984),A=s.n(P);const O=(0,z.Z)(Q,[["render",S]]),E=O;A()(Q,"components",{QForm:C.Z,QColor:U.Z,QInput:B.Z,QSelect:F.Z,QBadge:D.Z,QSlider:M.Z,QBtn:N.Z});var I=s(183);const L={name:"addSkill",components:{FormSkill:E,SkillCard:I.Z},data(){return{skill:{color:"",label:null,type:null,level:0,image:""}}}};var $=s(6663);const G=(0,z.Z)(L,[["render",d]]),H=G;A()(L,"components",{QScrollArea:$.Z})}}]);