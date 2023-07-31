"use strict";(self.webpackChunk_upgrade_helper_gatsby_docs=self.webpackChunk_upgrade_helper_gatsby_docs||[]).push([[247],{8274:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return s},default:function(){return u}});var n=a(3366),r=(a(7294),a(4983)),l=a(4295),o=["components"],s={},i={_frontmatter:s},c=l.Z;function u(e){var t=e.components,a=(0,n.Z)(e,o);return(0,r.kt)(c,Object.assign({},i,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"If you have feedback, or wish to raise an issue and you are not a Merative\nrepresentative, please contact your local IBM Account Executive."),(0,r.kt)("p",null,"To submit an issue or provide feedback, please create\nan issue\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/merative/spm-ui-upgrade-helper/issues"},"here"),".\nWe strongly suggest that you click Watch or Star the repository on\nGitHub to be updated about the latest changes."),(0,r.kt)("h2",null,"Please follow the template for creating issues"),(0,r.kt)("p",null,"This is a basic template to follow if issues arise."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Describe the bug:")),(0,r.kt)("p",null,"A clear and concise description of what the bug is."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Steps to reproduce the behavior:")),(0,r.kt)("p",null,"Clear and concise steps to reproduce the behaviour"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"One"),(0,r.kt)("li",{parentName:"ul"},"Two"),(0,r.kt)("li",{parentName:"ul"},"Three")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Expected behavior:")),(0,r.kt)("p",null,"A clear and concise description of what you expected to happen."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Screenshots:")),(0,r.kt)("p",null,"If applicable, add screenshots to help explain your problem."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"System Information:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    OS: []\n    Docker Version: []\n    Minikube Version: []\n    Ant Version: []\n    Java Version: []\n    Liberty  Version: []\n    Cúram SPM Version: []\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Additional context:")),(0,r.kt)("p",null,"Add any other context about the problem here."))}u.isMDXComponent=!0},4295:function(e,t,a){a.d(t,{Z:function(){return N}});var n=a(7294),r=a(6745),l=a.n(r),o=a(5444),s=a(6127),i=a(3321),c=a(5900),u=a.n(c),p=function(e){var t,a=e.title,r=e.theme,l=e.tabs,o=void 0===l?[]:l;return n.createElement("div",{className:u()("PageHeader-module--page-header--PZk0n",(t={},t["PageHeader-module--with-tabs--23d0d"]=o.length,t["PageHeader-module--dark-mode--1snw_"]="dark"===r,t))},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--1JBrD"},a)))))},m=function(e){var t=e.relativePagePath,a=e.repository,r=(0,o.useStaticQuery)("1364590287").site.siteMetadata.repository,l=a||r,s=l.baseUrl,i=l.subDirectory,c=s+"/edit/"+l.branch+i+"/src/pages"+t;return s?n.createElement("div",{className:"bx--row EditLink-module--row--1Bhkt"},n.createElement("div",{className:"bx--col"},n.createElement("a",{className:"EditLink-module--link--evBpU",href:c},"Edit this page on GitHub"))):null},d=a(4275),h=a(1721),g=function(e){function t(){return e.apply(this,arguments)||this}return(0,h.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,r=e.slug,s=r.split("/").filter(Boolean).slice(-1)[0],i=a.map((function(e){var t,a=l()(e,{lower:!0,strict:!0}),i=a===s,c=new RegExp(s+"/?(#.*)?$"),p=r.replace(c,a);return n.createElement("li",{key:e,className:u()((t={},t["PageTabs-module--selected-item--18GsE"]=i,t),"PageTabs-module--list-item--Iy7tm")},n.createElement(o.Link,{className:"PageTabs-module--link--NRtef",to:""+p},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--3frXa"},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},n.createElement("nav",{"aria-label":t},n.createElement("ul",{className:"PageTabs-module--list--1kwNv"},i))))))},t}(n.Component),b=g,k=a(2881),f=a(6958),v=a(36),E=function(e){var t=e.date,a=new Date(t);return t?n.createElement(v.X2,{className:"last-modified-date-module--row--pOpRN"},n.createElement(v.sg,null,n.createElement("div",{className:"last-modified-date-module--text--45Vrg"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},N=function(e){var t=e.pageContext,a=e.children,r=e.location,c=e.Title,u=t.frontmatter,h=void 0===u?{}:u,g=t.relativePagePath,v=t.titleType,N=h.tabs,y=h.title,w=h.theme,x=h.description,P=h.keywords,T=h.date,_=(0,f.Z)().interiorTheme,Z=(0,o.useStaticQuery)("2456312558").site.pathPrefix,D=Z?r.pathname.replace(Z,""):r.pathname,S=N?D.split("/").filter(Boolean).slice(-1)[0]||l()(N[0],{lower:!0}):"",C=w||_;return n.createElement(i.Z,{tabs:N,homepage:!1,theme:C,pageTitle:y,pageDescription:x,pageKeywords:P,titleType:v},n.createElement(p,{title:c?n.createElement(c,null):y,label:"label",tabs:N,theme:C}),N&&n.createElement(b,{title:y,slug:D,tabs:N,currentTab:S}),n.createElement(k.Z,{padded:!0},a,n.createElement(m,{relativePagePath:g}),n.createElement(E,{date:T})),n.createElement(d.Z,{pageContext:t,location:r,slug:D,tabs:N,currentTab:S}),n.createElement(s.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-contact-contact-us-mdx-6dd8cd59b14deb6a92a6.js.map