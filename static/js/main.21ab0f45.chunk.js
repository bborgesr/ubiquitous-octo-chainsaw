(this["webpackJsonpps-flux"]=this["webpackJsonpps-flux"]||[]).push([[0],{31:function(e,t,a){e.exports=a(46)},46:function(e,t,a){"use strict";a.r(t);a(32);var n=a(0),r=a.n(n),c=a(9),o=a(4);var u=function(){return r.a.createElement("div",{className:"jumbotron"},r.a.createElement("h1",null,"Pluralsight Admin"),r.a.createElement("p",null,"React, Flux, and React Router for ultra-fast responsive web apps."),r.a.createElement(o.b,{to:"/about",className:"btn btn-primary"},"About"))},l=a(13),s=a(14),i=a(19),m=a(15),E=a(20),h=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"About"),r.a.createElement("p",null,"This app uses React."))}}]),t}(r.a.Component);var d=function(){var e={color:"orange"};return r.a.createElement("nav",null,r.a.createElement(o.c,{activeStyle:e,exact:!0,to:"/"},"Home")," ","|",r.a.createElement(o.c,{activeStyle:e,to:"/about"},"About")," ","|",r.a.createElement(o.c,{activeStyle:e,to:"/courses"},"Courses"))},b=a(10),f=a(29),g=new(a(30).Dispatcher),p={CREATE_COURSE:"CREATE_COURSE",UPDATE_COURSE:"UPDATE_COURSE",DELETE_COURSE:"DELETE_COURSE",LOAD_COURSES:"LOAD_COURSES"},C=[],v=new(function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(s.a)(t,[{key:"addChangeListener",value:function(e){this.on("change",e)}},{key:"removeChangeListener",value:function(e){this.removeListener("change",e)}},{key:"emitChange",value:function(){this.emit("change")}},{key:"getCourses",value:function(){return C}},{key:"getCourseBySlug",value:function(e){return C.find((function(t){return t.slug===e}))}}]),t}(f.EventEmitter));g.register((function(e){switch(e.actionType){case p.CREATE_COURSE:C.push(e.course),v.emitChange();break;case p.UPDATE_COURSE:C=C.map((function(t){return t.id===e.course.id?e.course:t})),v.emitChange();break;case p.DELETE_COURSE:C=C.filter((function(t){return t.id!==parseInt(e.id,10)})),v.emitChange();break;case p.LOAD_COURSES:C=e.courses,v.emitChange()}}));var O=v;function y(e){return r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"\xa0"),r.a.createElement("th",null,"Title"),r.a.createElement("th",null,"Author ID"),r.a.createElement("th",null,"Category"))),r.a.createElement("tbody",null,e.courses.map((function(t){return r.a.createElement("tr",{key:t.id},r.a.createElement("td",null,r.a.createElement("button",{className:"btn btn-outline-danger",onClick:function(){return e.deleteCourse(t.id)}},"Delete")),r.a.createElement("td",null,r.a.createElement(o.b,{to:"/course/"+t.slug},t.title)),r.a.createElement("td",null,t.authorId),r.a.createElement("td",null,t.category))}))))}y.defaultProps={courses:[]};var S=y,j=a(16),R=a(24),A=a.n(R);function T(e){var t;return A.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if(!e.ok){a.next=2;break}return a.abrupt("return",e.json());case 2:if(400!==e.status){a.next=7;break}return a.next=5,A.a.awrap(e.text());case 5:throw t=a.sent,new Error(t);case 7:throw new Error("Network response was not ok.");case 8:case"end":return a.stop()}}))}function U(e){throw console.error("API call failed. "+e),e}var _=Object({NODE_ENV:"production",PUBLIC_URL:"/ubiquitous-octo-chainsaw"}).REACT_APP_API_URL+"/courses/";function k(e){return function(e){return fetch(_+(e.id||""),{method:e.id?"PUT":"POST",headers:{"content-type":"application/json"},body:JSON.stringify(Object(j.a)({},e,{authorId:parseInt(e.authorId,10)}))}).then(T).catch(U)}(e).then((function(t){g.dispatch({actionType:e.id?p.UPDATE_COURSE:p.CREATE_COURSE,course:t})}))}function N(){return fetch(_).then(T).catch(U).then((function(e){g.dispatch({actionType:p.LOAD_COURSES,courses:e})}))}function D(e){return(t=e,fetch(_+t,{method:"DELETE"}).then(T).catch(U)).then((function(){g.dispatch({actionType:p.DELETE_COURSE,id:e})}));var t}var L=function(){var e=Object(n.useState)(O.getCourses()),t=Object(b.a)(e,2),a=t[0],c=t[1];function u(){c(O.getCourses())}return Object(n.useEffect)((function(){return O.addChangeListener(u),0===O.getCourses().length&&N(),function(){return O.removeChangeListener(u)}}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Courses"),r.a.createElement(o.b,{className:"btn btn-primary",to:"/course"},"Add course"),r.a.createElement(S,{courses:a,deleteCourse:D}))},I=a(8);var w=function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Page Not Found"),r.a.createElement("p",null,r.a.createElement(o.b,{to:"/"},"Back to Home")))},P=a(17);function x(e){var t="form-group";return e.error&&e.error.length>0&&(t+=" has-error"),r.a.createElement("div",{className:t},r.a.createElement("label",{htmlFor:e.id},e.label),r.a.createElement("div",{className:"field"},r.a.createElement("input",{id:e.id,type:"text",onChange:e.onChange,name:e.name,className:"form-control",value:e.value||""})),e.error&&r.a.createElement("div",{className:"alert alert-danger"},e.error))}x.defaultProps={error:""};var F=x;var B=function(e){return r.a.createElement("form",{onSubmit:e.onSubmit},r.a.createElement(F,{id:"title",label:"Title",onChange:e.onChange,name:"title",value:e.course.title,error:e.errors.title}),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"author"},"Author"),r.a.createElement("div",{className:"field"},r.a.createElement("select",{id:"author",name:"authorId",onChange:e.onChange,value:e.course.authorId,className:"form-control"},r.a.createElement("option",{value:""}),r.a.createElement("option",{value:"1"},"Cory House"),r.a.createElement("option",{value:"2"},"Scott Allen"))),e.errors.authorId&&r.a.createElement("div",{className:"alert alert-danger"},e.errors.authorId)),r.a.createElement(F,{id:"category",label:"Category",onChange:e.onChange,name:"category",value:e.course.category,error:e.errors.category}),r.a.createElement("input",{type:"submit",value:"Save",className:"btn btn-primary"}))},q=a(18),H=function(e){var t=Object(n.useState)({}),a=Object(b.a)(t,2),c=a[0],o=a[1],u=Object(n.useState)(O.getCourses()),l=Object(b.a)(u,2),s=l[0],i=l[1],m=Object(n.useState)({id:null,slug:"",title:"",authorId:null,category:""}),E=Object(b.a)(m,2),h=E[0],d=E[1];function f(){i(O.getCourses())}function g(){var e={};return h.title||(e.title="Title is required"),h.authorId||(e.authorId="Author ID is required"),h.category||(e.category="Category is required"),o(e),0===Object.keys(e).length}return Object(n.useEffect)((function(){O.addChangeListener(f);var t=e.match.params.slug;return 0===s.length?N():t&&d(O.getCourseBySlug(t)),function(){return O.removeChangeListener(f)}}),[s.length,e.match.params.slug]),r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Manage Course"),r.a.createElement(B,{errors:c,course:h,onChange:function(e){var t=e.target;d(Object(j.a)({},h,Object(P.a)({},t.name,t.value)))},onSubmit:function(t){t.preventDefault(),g&&k(h).then((function(){e.history.push("/courses"),q.b.success("Course saved.")}))}}))};a(45);var J=function(){return r.a.createElement("div",{className:"container-fluid"},r.a.createElement(q.a,{autoClose:3e3,hideProgressBar:!0}),r.a.createElement(d,null),r.a.createElement(I.d,null,r.a.createElement(I.b,{path:"/",exact:!0,component:u}),r.a.createElement(I.b,{path:"/courses",component:L}),r.a.createElement(I.b,{path:"/course/:slug",component:H}),r.a.createElement(I.b,{path:"/course",component:H}),r.a.createElement(I.b,{path:"/about",component:h}),r.a.createElement(I.a,{from:"/about-page",to:"about"}),r.a.createElement(I.b,{component:w})))};Object(c.render)(r.a.createElement(o.a,null,r.a.createElement(J,null)),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.21ab0f45.chunk.js.map