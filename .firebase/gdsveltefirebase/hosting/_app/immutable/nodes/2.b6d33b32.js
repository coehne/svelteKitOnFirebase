import{S as b,i as z,d as R,s as q,v as C,p as _,y as f,c as I,q as g,r as $,z as p,l as i,f as K,x,u as N,g as y,M as r,N as S}from"../chunks/index.2909a02b.js";const w="src/routes/+page.svelte";function P(v){let e,l,c,t,s,n,h,u;const k={c:function(){e=_("h1"),l=f("Welcome to SvelteKit"),c=I(),t=_("p"),s=f("Visit "),n=_("a"),h=f("kit.svelte.dev"),u=f(` to read the documentation. It is amazing.
	Really.`),this.h()},l:function(a){e=g(a,"H1",{});var o=$(e);l=p(o,"Welcome to SvelteKit"),o.forEach(i),c=K(a),t=g(a,"P",{});var m=$(t);s=p(m,"Visit "),n=g(m,"A",{href:!0});var E=$(n);h=p(E,"kit.svelte.dev"),E.forEach(i),u=p(m,` to read the documentation. It is amazing.
	Really.`),m.forEach(i),this.h()},h:function(){x(e,w,0,0,0),N(n,"href","https://kit.svelte.dev"),x(n,w,2,7,41),x(t,w,1,0,30)},m:function(a,o){y(a,e,o),r(e,l),y(a,c,o),y(a,t,o),r(t,s),r(t,n),r(n,h),r(t,u)},p:S,i:S,o:S,d:function(a){a&&i(e),a&&i(c),a&&i(t)}};return R("SvelteRegisterBlock",{block:k,id:P.name,type:"component",source:"",ctx:v}),k}function O(v,e){let{$$slots:l={},$$scope:c}=e;C("Page",l,[]);const t=[];return Object.keys(e).forEach(s=>{!~t.indexOf(s)&&s.slice(0,2)!=="$$"&&s!=="slot"&&console.warn(`<Page> was created with unknown prop '${s}'`)}),[]}class W extends b{constructor(e){super(e),z(this,e,O,P,q,{}),R("SvelteRegisterComponent",{component:this,tagName:"Page",options:e,id:P.name})}}export{W as component};
