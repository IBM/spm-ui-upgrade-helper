"use strict";(self.webpackChunk_upgrade_helper_gatsby_docs=self.webpackChunk_upgrade_helper_gatsby_docs||[]).push([[687],{2770:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return p},default:function(){return d}});var r,n=a(3366),l=(a(7294),a(4983)),o=a(4295),i=["components"],p={},m=(r="InlineNotification",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",e)}),s={_frontmatter:p},u=o.Z;function d(e){var t=e.components,a=(0,n.Z)(e,i);return(0,l.kt)(u,Object.assign({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Complete the following steps to configure and run the tool and to review and implement any required changes."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Run ",(0,l.kt)("inlineCode",{parentName:"p"},"docker login"),".")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Download the appropriate batch file or shell script for your environment:"),(0,l.kt)("p",{parentName:"li"},"Windows ™️"),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"curl -L https://raw.githubusercontent.com/IBM/spm-ui-upgrade-helper/main/spm-ui-upgrade-helper.bat -o spm-ui-upgrade-helper.bat")),(0,l.kt)("p",{parentName:"li"},"Linux ®️"),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"curl -L https://raw.githubusercontent.com/IBM/spm-ui-upgrade-helper/main/spm-ui-upgrade-helper.sh -o spm-ui-upgrade-helper.sh"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"(Linux®️ only) Make the shell script executable with ",(0,l.kt)("inlineCode",{parentName:"p"},"chmod +x spm-ui-upgrade-helper.sh"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Download the docker-compose.yml file:"),(0,l.kt)("p",{parentName:"li"},"Windows ™️"),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"curl -L https://raw.githubusercontent.com/IBM/spm-ui-upgrade-helper/main/docker-compose.yml -o docker-compose.yml")),(0,l.kt)("p",{parentName:"li"},"Linux ®️"),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"curl -L https://raw.githubusercontent.com/IBM/spm-ui-upgrade-helper/main/docker-compose.yml -o docker-compose.yml"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Run ",(0,l.kt)("inlineCode",{parentName:"p"},"chmod -R 777 <output_folder>")," so that Docker can interact with the temporary output folder. For example, ",(0,l.kt)("inlineCode",{parentName:"p"},"C:\\temp\\upgrade")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"/tmp/upgrade"),".")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Set the required variables and run the batch file or shell script:"),(0,l.kt)(m,{mdxType:"InlineNotification"},(0,l.kt)("p",{parentName:"li"}," Warning:  Do not point the output folder at your version 8 development environment as it is a temporary folder that is wiped each time that the UI Upgrade Helper runs.")),(0,l.kt)("p",{parentName:"li"},"Windows ™️"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-batch"},"Set INPUT_FOLDER=`<input_folder>`\nSet OUTPUT_FOLDER=`<output_folder>`\nSet VERSION=`<version>`\nspm-ui-upgrade-helper.bat\n")),(0,l.kt)("p",{parentName:"li"},"Linux ®️"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"export INPUT_FOLDER=`<input_folder>\nexport OUTPUT_FOLDER=`<output_folder>`\nexport VERSION=`<version>` \nsh spm-ui-upgrade-helper.sh\n")),(0,l.kt)("p",{parentName:"li"},"Where:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"VERSION")," is the version of the tool on DockerHub -typically ",(0,l.kt)("inlineCode",{parentName:"li"},"latest"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"INPUT_FOLDER")," is the absolute path to the input files for the tool. Typically this is the Social Program Management installation folder, which by default is ",(0,l.kt)("inlineCode",{parentName:"li"},"C:\\IBM\\Curam\\Development")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"opt/IBM/Curam/Development"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"OUTPUT_FOLDER")," is the absolute path to your temporary output folder. For example, ",(0,l.kt)("inlineCode",{parentName:"li"},"C:\\temp\\upgrade")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"/tmp/upgrade"),".")))),(0,l.kt)("h2",null,"Run the tool and review the changes"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Open your browser to ",(0,l.kt)("a",{parentName:"p",href:"http://localhost:3000/#/home/workspace"},"http://localhost:3000/#/home/workspace"),".")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Press the F1 key or Cmd + Shift + p.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Type “Run SPM UI Upgrade Helper” and click on the shortcut. The files in the ",(0,l.kt)("inlineCode",{parentName:"p"},"input")," folder are scanned and the results are placed in the ",(0,l.kt)("inlineCode",{parentName:"p"},"output")," folder.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Wait a few minutes for the tool to finish.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Click the ",(0,l.kt)("inlineCode",{parentName:"p"},"Source Control: Git")," button on the left sidebar to inspect the changes."),(0,l.kt)("img",{parentName:"li",src:"/spm-ui-upgrade-helper/d9be6be1041ad9537325beb9cef2a05a/upgrade-helper.gif",alt:'1. Press F1, 2. Type "Run SPM UI Upgrade Helper", 3. Select the shortcut, 4. Wait for the tool to finish, 5. Click "Source Control: Git" to see the output',title:"Running the UI Upgrade Helper tool"})),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"For more information about Window Size Tool changes, see ",(0,l.kt)("a",{parentName:"p",href:"../../setup/tools#reviewing-window-size-tool-changes"},"Reviewing Window Size Tool changes"),".")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"When you are happy with the changes, copy the contents of the ",(0,l.kt)("inlineCode",{parentName:"p"},"output")," folder into your v8 development environment.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Build and test your v8 development environment."))),(0,l.kt)("h2",null,"Errors"),(0,l.kt)("p",null,"Docker container logs are available in the console, or by using ",(0,l.kt)("inlineCode",{parentName:"p"},"docker logs spm-ui-upgrade-helper"),"."),(0,l.kt)("p",null,"You can save the logs to a file. For example, by using ",(0,l.kt)("inlineCode",{parentName:"p"},"docker logs spm-ui-upgrade-helper > /tmp/logs.txt"),"."),(0,l.kt)("h2",null,"Troubleshooting"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Ensure that you are logged in to Docker, (run ",(0,l.kt)("inlineCode",{parentName:"li"},"docker login"),")."),(0,l.kt)("li",{parentName:"ul"},"Ensure that the correct folders are shared in Docker Desktop."),(0,l.kt)("li",{parentName:"ul"},"Restart Docker Desktop."),(0,l.kt)("li",{parentName:"ul"},"Delete the ",(0,l.kt)("inlineCode",{parentName:"li"},"<output_folder>")," and try again."),(0,l.kt)("li",{parentName:"ul"},"Make sure you have run ",(0,l.kt)("inlineCode",{parentName:"li"},"chmod -R 777 <output_folder>")," so that Docker can write to it."),(0,l.kt)("li",{parentName:"ul"},"Don’t refresh ",(0,l.kt)("a",{parentName:"li",href:"http://localhost:3000/#/home/workspace/output"},"http://localhost:3000/#/home/workspace/output"),", but go to ",(0,l.kt)("a",{parentName:"li",href:"http://localhost:3000/#/home/workspace"},"http://localhost:3000/#/home/workspace"),"."),(0,l.kt)("li",{parentName:"ul"},"To kill the Docker container, use ",(0,l.kt)("inlineCode",{parentName:"li"},"docker stop spm-ui-upgrade-helper")," followed by ",(0,l.kt)("inlineCode",{parentName:"li"},"docker rm spm-ui-upgrade-helper"),".")))}d.isMDXComponent=!0},4295:function(e,t,a){a.d(t,{Z:function(){return y}});var r=a(7294),n=a(6745),l=a.n(n),o=a(5444),i=a(6127),p=a(3321),m=a(5900),s=a.n(m),u=function(e){var t,a=e.title,n=e.theme,l=e.tabs,o=void 0===l?[]:l;return r.createElement("div",{className:s()("PageHeader-module--page-header--PZk0n",(t={},t["PageHeader-module--with-tabs--23d0d"]=o.length,t["PageHeader-module--dark-mode--1snw_"]="dark"===n,t))},r.createElement("div",{className:"bx--grid"},r.createElement("div",{className:"bx--row"},r.createElement("div",{className:"bx--col-lg-12"},r.createElement("h1",{id:"page-title",className:"PageHeader-module--text--1JBrD"},a)))))},d=function(e){var t=e.relativePagePath,a=e.repository,n=(0,o.useStaticQuery)("1364590287").site.siteMetadata.repository,l=a||n,i=l.baseUrl,p=l.subDirectory,m=i+"/edit/"+l.branch+p+"/src/pages"+t;return i?r.createElement("div",{className:"bx--row EditLink-module--row--1Bhkt"},r.createElement("div",{className:"bx--col"},r.createElement("a",{className:"EditLink-module--link--evBpU",href:m},"Edit this page on GitHub"))):null},c=a(4275),h=a(1721),k=function(e){function t(){return e.apply(this,arguments)||this}return(0,h.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,i=n.split("/").filter(Boolean).slice(-1)[0],p=a.map((function(e){var t,a=l()(e,{lower:!0,strict:!0}),p=a===i,m=new RegExp(i+"/?(#.*)?$"),u=n.replace(m,a);return r.createElement("li",{key:e,className:s()((t={},t["PageTabs-module--selected-item--18GsE"]=p,t),"PageTabs-module--list-item--Iy7tm")},r.createElement(o.Link,{className:"PageTabs-module--link--NRtef",to:""+u},e))}));return r.createElement("div",{className:"PageTabs-module--tabs-container--3frXa"},r.createElement("div",{className:"bx--grid"},r.createElement("div",{className:"bx--row"},r.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},r.createElement("nav",{"aria-label":t},r.createElement("ul",{className:"PageTabs-module--list--1kwNv"},p))))))},t}(r.Component),N=k,g=a(2881),f=a(6958),b=a(36),v=function(e){var t=e.date,a=new Date(t);return t?r.createElement(b.X2,{className:"last-modified-date-module--row--pOpRN"},r.createElement(b.sg,null,r.createElement("div",{className:"last-modified-date-module--text--45Vrg"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},y=function(e){var t=e.pageContext,a=e.children,n=e.location,m=e.Title,s=t.frontmatter,h=void 0===s?{}:s,k=t.relativePagePath,b=t.titleType,y=h.tabs,w=h.title,C=h.theme,E=h.description,x=h.keywords,D=h.date,T=(0,f.Z)().interiorTheme,P=(0,o.useStaticQuery)("2456312558").site.pathPrefix,_=P?n.pathname.replace(P,""):n.pathname,R=y?_.split("/").filter(Boolean).slice(-1)[0]||l()(y[0],{lower:!0}):"",I=C||T;return r.createElement(p.Z,{tabs:y,homepage:!1,theme:I,pageTitle:w,pageDescription:E,pageKeywords:x,titleType:b},r.createElement(u,{title:m?r.createElement(m,null):w,label:"label",tabs:y,theme:I}),y&&r.createElement(N,{title:w,slug:_,tabs:y,currentTab:R}),r.createElement(g.Z,{padded:!0},a,r.createElement(d,{relativePagePath:k}),r.createElement(v,{date:D})),r.createElement(c.Z,{pageContext:t,location:n,slug:_,tabs:y,currentTab:R}),r.createElement(i.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-run-running-the-tool-mdx-c5f4d27042e42fdea70d.js.map