"use strict";(self["webpackChunkportfolio"]=self["webpackChunkportfolio"]||[]).push([[611],{2611:(l,s,t)=>{t.r(s),t.d(s,{default:()=>f});var e=t(9835);const a={key:0,class:"q-mt-md q-mb-md"},o={class:"row justify-center"},n={class:"col-10"};function i(l,s,t,i,r,c){const u=(0,e.up)("q-btn"),k=(0,e.up)("FormSkill");return r.skill?((0,e.wg)(),(0,e.iD)("div",a,[(0,e.Wm)(u,{to:{name:"skillsIndex"},round:"",flat:"",size:"35px",color:"secondary",icon:"arrow_circle_left"}),(0,e._)("section",o,[(0,e._)("div",n,[(0,e.Wm)(k,{lastLabel:this.$route.params.label,update:!0,skill:r.skill},null,8,["lastLabel","skill"])])])])):(0,e.kq)("",!0)}var r=t(6108);const c={components:{FormSkill:r.Z},data(){return{skill:null}},async mounted(){this.skill=await this.$store.dispatch("fetchSkill",{label:this.$route.params.label})}};var u=t(1639),k=t(8879),d=t(9984),m=t.n(d);const p=(0,u.Z)(c,[["render",i]]),f=p;m()(c,"components",{QBtn:k.Z})}}]);