"use strict";(self.webpackChunk_upgrade_helper_gatsby_docs=self.webpackChunk_upgrade_helper_gatsby_docs||[]).push([[955],{4922:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return o},default:function(){return u}});var l=a(3366),n=(a(7294),a(4983)),r=a(4295),i=["components"],o={},s={_frontmatter:o},c=r.Z;function u(e){var t=e.components,a=(0,l.Z)(e,i);return(0,n.kt)(c,Object.assign({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",null,"Docker"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The tool is run as a Docker container."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"spm-ui-upgrade-helper.bat"),"/",(0,n.kt)("inlineCode",{parentName:"li"},"spm-ui-upgrade-helper.sh")," will map local folders to the Docker container thus allowing it access to the customer code."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"dev.bat"),"/",(0,n.kt)("inlineCode",{parentName:"li"},"dev.sh")," will map code to the Docker container allowing you to edit and test code on the fly.")),(0,n.kt)("h2",null,"Front end"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://theia-ide.org/"},"Eclipse Theia")," is our front-end. It is an IDE inside the browser. Located at ",(0,n.kt)("a",{parentName:"p",href:"http://localhost:3000"},"localhost:3000")),(0,n.kt)("p",null,"The SPM UI Upgrade Helper tool is a plugin to Eclipse Theia that appears as an ",(0,n.kt)("inlineCode",{parentName:"p"},"F1")," shortcut named “Run SPM UI Upgrade Helper”. This plugin calls a Rest API that does the actual work."),(0,n.kt)("h2",null,"Back end"),(0,n.kt)("h3",null,"Main tool"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"This tool is run by the “Run SPM UI Upgrade Helper” shortcut described above."),(0,n.kt)("li",{parentName:"ul"},"Located in ",(0,n.kt)("inlineCode",{parentName:"li"},"packages/main-tool"),"."),(0,n.kt)("li",{parentName:"ul"},"Running this tool does the following:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Calls ",(0,n.kt)("inlineCode",{parentName:"li"},"packages/shared-utils/src/init.js"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Wipes the output folder"),(0,n.kt)("li",{parentName:"ul"},"Creates an empty git repo in the output folder"),(0,n.kt)("li",{parentName:"ul"},"Copies the working set of files to the output folder"),(0,n.kt)("li",{parentName:"ul"},"Commits the files so that if they change we can use Git to diff them"))),(0,n.kt)("li",{parentName:"ul"},"Iterates through ",(0,n.kt)("inlineCode",{parentName:"li"},"config/tools.json")," and activates any tools that have ",(0,n.kt)("inlineCode",{parentName:"li"},"enabled: true")),(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("inlineCode",{parentName:"li"},"Source Control: Git")," tab in Eclipse Theia will diff the changes")))),(0,n.kt)("h3",null,"CSS rules tool"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Located in ",(0,n.kt)("inlineCode",{parentName:"li"},"packages/css-rules-tool"),"."),(0,n.kt)("li",{parentName:"ul"},"Iterates over customer CSS files and applies the rules from ",(0,n.kt)("inlineCode",{parentName:"li"},"packages/css-rules-tool/rules/*.json"),".")),(0,n.kt)("h3",null,"Icon replacer tool"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Located in ",(0,n.kt)("inlineCode",{parentName:"li"},"packages/icon-replacer-tool"),"."),(0,n.kt)("li",{parentName:"ul"},"Loads icon replacement mappings from ",(0,n.kt)("inlineCode",{parentName:"li"},"packages/icon-replacer-tool/icon-mappings.json"),"."),(0,n.kt)("li",{parentName:"ul"},"Iterates over customer files and replaces any references to old icons with new icons."),(0,n.kt)("li",{parentName:"ul"},"Replaces any old icon files it finds with the new version of the icon.")))}u.isMDXComponent=!0},4295:function(e,t,a){a.d(t,{Z:function(){return v}});var l=a(7294),n=a(6745),r=a.n(n),i=a(5444),o=a(6127),s=a(3321),c=a(5900),u=a.n(c),m=function(e){var t,a=e.title,n=e.theme,r=e.tabs,i=void 0===r?[]:r;return l.createElement("div",{className:u()("PageHeader-module--page-header--PZk0n",(t={},t["PageHeader-module--with-tabs--23d0d"]=i.length,t["PageHeader-module--dark-mode--1snw_"]="dark"===n,t))},l.createElement("div",{className:"bx--grid"},l.createElement("div",{className:"bx--row"},l.createElement("div",{className:"bx--col-lg-12"},l.createElement("h1",{id:"page-title",className:"PageHeader-module--text--1JBrD"},a)))))},p=function(e){var t=e.relativePagePath,a=e.repository,n=(0,i.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,o=r.baseUrl,s=r.subDirectory,c=o+"/edit/"+r.branch+s+"/src/pages"+t;return o?l.createElement("div",{className:"bx--row EditLink-module--row--1Bhkt"},l.createElement("div",{className:"bx--col"},l.createElement("a",{className:"EditLink-module--link--evBpU",href:c},"Edit this page on GitHub"))):null},d=a(4275),h=a(1721),k=function(e){function t(){return e.apply(this,arguments)||this}return(0,h.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,o=n.split("/").filter(Boolean).slice(-1)[0],s=a.map((function(e){var t,a=r()(e,{lower:!0,strict:!0}),s=a===o,c=new RegExp(o+"/?(#.*)?$"),m=n.replace(c,a);return l.createElement("li",{key:e,className:u()((t={},t["PageTabs-module--selected-item--18GsE"]=s,t),"PageTabs-module--list-item--Iy7tm")},l.createElement(i.Link,{className:"PageTabs-module--link--NRtef",to:""+m},e))}));return l.createElement("div",{className:"PageTabs-module--tabs-container--3frXa"},l.createElement("div",{className:"bx--grid"},l.createElement("div",{className:"bx--row"},l.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},l.createElement("nav",{"aria-label":t},l.createElement("ul",{className:"PageTabs-module--list--1kwNv"},s))))))},t}(l.Component),g=k,N=a(2881),f=a(6958),b=a(36),E=function(e){var t=e.date,a=new Date(t);return t?l.createElement(b.X2,{className:"last-modified-date-module--row--pOpRN"},l.createElement(b.sg,null,l.createElement("div",{className:"last-modified-date-module--text--45Vrg"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},v=function(e){var t=e.pageContext,a=e.children,n=e.location,c=e.Title,u=t.frontmatter,h=void 0===u?{}:u,k=t.relativePagePath,b=t.titleType,v=h.tabs,w=h.title,y=h.theme,C=h.description,P=h.keywords,T=h.date,x=(0,f.Z)().interiorTheme,D=(0,i.useStaticQuery)("2456312558").site.pathPrefix,I=D?n.pathname.replace(D,""):n.pathname,S=v?I.split("/").filter(Boolean).slice(-1)[0]||r()(v[0],{lower:!0}):"",_=y||x;return l.createElement(s.Z,{tabs:v,homepage:!1,theme:_,pageTitle:w,pageDescription:C,pageKeywords:P,titleType:b},l.createElement(m,{title:c?l.createElement(c,null):w,label:"label",tabs:v,theme:_}),v&&l.createElement(g,{title:w,slug:I,tabs:v,currentTab:S}),l.createElement(N.Z,{padded:!0},a,l.createElement(p,{relativePagePath:k}),l.createElement(E,{date:T})),l.createElement(d.Z,{pageContext:t,location:n,slug:I,tabs:v,currentTab:S}),l.createElement(o.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-dev-project-overview-md-96af17305a0179dc8a2c.js.map