(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{JyPR:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),c=n("TJpk"),o=n.n(c),i=n("Wbzz"),l=n("7oih"),s=n("d8MH"),m=n("xPX6"),p=n.n(m),u=n("ekcH"),v=n.n(u);m.versions.unshift(m.current);var d=function(e){var t=e.location,n=e.currentVersion;return r.a.createElement("select",{onChange:function(e){return function(e,t,n){var a=v.a.getPrefixedVersion(e.target.value);if(m.current!==a)if(""!==n){var r=t.pathname.replace(n,a+"/");Object(i.navigate)(r)}else{var c=t.pathname.replace("docs/","docs/"+a+"/");Object(i.navigate)(c)}else{var o=t.pathname.replace(n,"");Object(i.navigate)(o)}}(e,t,n)},value:""===n?m.current:n.slice(0,-1)},m.versions.map((function(e){var t=v.a.getPrefixedVersion(e),n=p.a[e+"Version"];return r.a.createElement("option",{key:t,value:t},(t+(n?" ("+v.a.getPrefixedVersion(n)+")":"")).toUpperCase())})))};t.default=function(e){var t=e.location,n=e.pageContext;return r.a.createElement(l.a,{location:t},r.a.createElement("div",{className:"page__docs"},r.a.createElement(o.a,{title:n.title&&n.title||"Documentation"},""!==n.version&&[r.a.createElement("link",{key:"canonical",rel:"canonical",href:m.siteUrl+t.pathname.replace(new RegExp("/("+m.versions.map(v.a.getPrefixedVersion).join("|")+")/"),"/")}),r.a.createElement("meta",{key:"robots",name:"robots",content:"noindex"})],r.a.createElement("meta",{name:"docsearch:version",content:""===n.version?v.a.getPrefixedVersion(m.currentVersion):n.prefixedVersion}),r.a.createElement("meta",{property:"og:description",content:n.title})),r.a.createElement("div",{className:"container docs__content"},r.a.createElement(d,{location:t,currentVersion:n.version}),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:n.html}}),r.a.createElement("div",{className:"docs__content__help"},r.a.createElement("p",null,r.a.createElement("a",{href:n.urlEditDocumentation},"You can also help us improve the documentation of this page.")))),r.a.createElement("div",{className:"container docs__nav"},n.previous.slug&&r.a.createElement(i.Link,{className:"prev",to:""+n.previous.slug},r.a.createElement("span",{className:"icon-chevron-left"}),r.a.createElement("span",null,n.previous.title)),n.next.slug&&r.a.createElement(i.Link,{className:"next",to:""+n.next.slug},r.a.createElement("span",null,n.next.title),r.a.createElement("span",{className:"icon-chevron-right"}))),r.a.createElement(s.a,{version:n.version,nav:n.nav.chapters,location:t})))}}}]);
//# sourceMappingURL=component---src-templates-doc-js-883fa28641d78b7fe0c5.js.map