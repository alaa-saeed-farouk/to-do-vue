"use strict";(self["webpackChunkto_do_vue"]=self["webpackChunkto_do_vue"]||[]).push([[847],{6871:function(e,t,a){var o=a(144),l=a(6768);const u=()=>{const e=(0,o.KR)([]),t=()=>{localStorage.getItem("tasks")&&(e.value=JSON.parse(localStorage.getItem("tasks")))},a=()=>{localStorage.setItem("tasks",JSON.stringify(e.value))};return(0,l.sV)((()=>{t()})),{tasks:e,addToLocalSt:a}};t.A=u},7847:function(e,t,a){a.r(t),a.d(t,{default:function(){return v}});a(4114);var o=a(6768),l=a(5130),u=a(144),d=a(6871);const s={class:"todo"},r=["disabled"];var n={__name:"TodoApp",setup(e){const{tasks:t,addToLocalSt:a}=(0,d.A)(),n=(0,u.KR)({id:"",taskText:"",from:"",to:"",createdAt:"",completed:!1}),c=()=>{n.value.id=t.value.length+1,n.value.createdAt=new Date,t.value.push(n.value),a(),alert("Your Task Was Added Successfully"),n.value={id:"",taskText:"",from:"",to:"",createdAt:""}};return(e,t)=>((0,o.uX)(),(0,o.CE)("div",s,[t[3]||(t[3]=(0,o.Lk)("h1",null,"Add New Task",-1)),(0,o.Lk)("form",{action:"",onSubmit:(0,l.D$)(c,["prevent"])},[(0,o.bo)((0,o.Lk)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>n.value.taskText=e),id:"",placeholder:"Type Your Task",required:""},null,512),[[l.Jo,n.value.taskText]]),(0,o.bo)((0,o.Lk)("input",{type:"date","onUpdate:modelValue":t[1]||(t[1]=e=>n.value.from=e),placeholder:"from",required:""},null,512),[[l.Jo,n.value.from]]),(0,o.bo)((0,o.Lk)("input",{type:"date","onUpdate:modelValue":t[2]||(t[2]=e=>n.value.to=e),placeholder:"to",required:""},null,512),[[l.Jo,n.value.to]]),(0,o.Lk)("input",{type:"submit",value:"Add Task",disabled:""==n.value.taskText.trim()},null,8,r)],32)]))}},c=a(1241);const p=(0,c.A)(n,[["__scopeId","data-v-203110e5"]]);var v=p}}]);
//# sourceMappingURL=847.44bb7fcc.js.map