(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){e.exports=a(25)},24:function(e,t,a){},25:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(12),r=a.n(o),i=a(1),s=a(2),d=a(5),c=a(3),m=a(6),u=function(e){var t=e.header,a=e.preview;return l.a.createElement("div",null,t,l.a.createElement("div",{className:"container-fluid h-100"},l.a.createElement("div",{className:"row border border-dark justify-content-center h-100"},l.a.createElement("div",{className:"col h-100"},a))))},p=function(e){var t=e.toolsSections;e.selectedNode;return l.a.createElement("div",{className:"conatiner"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm border-bottom justify-content-center border-dark"},l.a.createElement("h4",null,"Eszk\xf6zt\xe1r"))),t.map(function(e){return l.a.createElement("div",{key:e.key,className:"row"},l.a.createElement("div",{className:"col-sm"},e.section))}))},h=a(7),f=a(4),g=function(e){var t=e.options,a=e.inputName,n=e.handleInputChange,o=e.inputValue;return l.a.createElement("select",{name:a,onChange:n,className:"form-control form-control-sm",id:"exampleFormControlSelect1",value:o},t.map(function(e){return l.a.createElement("option",{key:e.toString(),value:e.toString()},e.toString())}))},b=a(8),v=a.n(b),y=function(e){var t=e.label,a=e.value,n=e.handleInputChange,o=e.deleteAttributes;return l.a.createElement("div",{className:"input-group input-group-sm mb-3"},l.a.createElement("div",{className:"input-group-prepend"},l.a.createElement("span",{className:"input-group-text",id:"inputGroup-sizing-sm"},t)),l.a.createElement("input",{type:"text",name:t,className:"form-control","aria-label":"Sizing example input","aria-describedby":"inputGroup-sizing-sm",onChange:function(e){return n(e)},value:a}),l.a.createElement("button",{type:"button",onClick:function(){return o(t)},className:"btn btn-danger btn-sm"},l.a.createElement("i",{className:"fas fa-trash"})))};y.propType={label:v.a.string.isRequired,value:v.a.string,handleInputChange:v.a.func.isRequired,deleteAttributes:v.a.func.isRequired};var E=y,N=function(e){var t=e.text,a=e.onClick,n=e.className,o=e.style,r=e.type;return l.a.createElement("button",{type:r,className:n,onClick:a,style:o},t)};N.defaultProps={className:"btn btn-primary btn-sm",style:{},type:"submit"};var w=N,k=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(d.a)(this,Object(c.a)(t).call(this,e))).makeArrayFromItems=function(e){var t=Object.keys(e),a=[];return t.map(function(t,n){var l=Object(f.a)({},t,e[t]);return a.push(l),a}),a},a.handleInputChange=function(e){var t=e.target,n=t.value,l=t.name,o=Object(h.a)({},a.state.data);o[l]=n,a.setState({data:o})},a.handleSubmit=function(e){var t=a.state.data,n=Object.keys(t),l={};n.map(function(e,a){"selectedElem"!==e&&(l[e]=t[e])}),console.log(l),a.props.modifyElems(l),e.preventDefault()},a.optionIsAlreadyAdded=function(e){return Object.keys(a.state.data).includes(e)},a.getNonSelectedElem=function(){console.log(a.props.options);var e=a.props.options.filter(function(e){return!a.optionIsAlreadyAdded(e)}),t=e[Math.floor(Math.random()*e.length)];return console.log(t),t},a.addNewAttributes=function(){var e=Object(h.a)({},a.state.data);e[e.selectedElem]="",e.selectedElem=a.getNonSelectedElem(),a.setState({data:e}),console.log(a.state.data),console.log(a.state)},a.deleteAttributes=function(e){var t=a.state.data;console.log(t),console.log(e),delete t[e],a.setState(t)},a.state={data:{}},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentWillReceiveProps",value:function(e){var t={selectedElem:e.options[0]};console.log(t);var a=Object(h.a)({},t,e.items);this.setState({data:a}),console.log("components will receive props: "),console.log(this.state.data)}},{key:"render",value:function(){var e=this,t=this.props,a=t.title,n=t.options,o=Object.keys(this.state.data);return l.a.createElement("form",{onSubmit:this.handleSubmit,className:"mt-3 border p-4 border-secondary"},l.a.createElement("h6",{className:"text-center"},a),l.a.createElement("div",{className:"form-group"},l.a.createElement(g,{options:n.filter(function(t){return!e.optionIsAlreadyAdded(t)}),inputName:"selectedElem",handleInputChange:this.handleInputChange,inputValue:this.state.data.selectedElem})),o.filter(function(e){return"selectedElem"!==e}).map(function(t){return console.log("map1"),console.log(e.state.data[t]),l.a.createElement(E,{key:t,label:t,value:e.state.data[t],handleInputChange:e.handleInputChange,deleteAttributes:e.deleteAttributes})}),l.a.createElement(w,{text:"Hozz\xe1ad\xe1s",type:"button",onClick:this.addNewAttributes,className:"btn btn-primary btn-sm w-50 mx-auto",style:{display:"block"}}),l.a.createElement(w,{text:"M\xf3dos\xedt\xe1s",value:"Submit",className:"btn btn-success btn-sm w-50 mx-auto",style:{display:"block"}}))}}]),t}(n.Component),x=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(d.a)(this,Object(c.a)(t).call(this,e))).handleInputChange=function(e){var t=e.target,n=t.value,l=t.name;a.setState(Object(f.a)({},l,n))},a.handleSubmit=function(e){a.props.addNewElem(a.state.selectedElem,a.state.selectedElemAddOptions),e.preventDefault()},a.state={selectedElem:"div",selectedElemAddOptions:"before"},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.title,a=e.tagOptions,n=e.addTagOptions;return l.a.createElement("form",{onSubmit:this.handleSubmit,className:"mt-3 border p-4 border-secondary"},l.a.createElement("h6",{className:"text-center"},t),l.a.createElement("div",{className:"form-group"},l.a.createElement(g,{options:a,inputName:"selectedElem",handleInputChange:this.handleInputChange,inputValue:this.state.selectedElem})),l.a.createElement("div",{className:"form-group"},l.a.createElement(g,{options:n,inputName:"selectedElemAddOptions",handleInputChange:this.handleInputChange,inputValue:this.state.selectedElemAddOptions})),l.a.createElement(w,{text:"Hozz\xe1ad\xe1s",value:"Submit",className:"btn btn-primary btn-sm w-50 mx-auto",style:{display:"block"}}))}}]),t}(n.Component);var S=function(e){var t=e.downloadFile,a=e.node,n=e.getCssFileText,o="<!DOCTYPE html>\n<html> \n<head> \n<title>Page Title</title>\n</head> \n<body> \n"+function e(t){var a="";return"undefined"!==typeof t.children&&t.children.length>0&&(a+=t.children.map(function(t,a){var n=t.model,l=n.id,o=n.type;return n.attributes,n.styles,"<"+o+" id="+l+">"+(t.children.length>0?"\n":" ")+e(t)+"\n</"+o+">\n"})),a}(a).split(",").join("").replace(/^\s*\n/gm,"")+"</body> \n</html>",r=n();return console.log(r),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row border border-dark"},l.a.createElement("div",{className:"col-sm"},l.a.createElement("h4",null,"Tervez\u0151fel\xfclet")),l.a.createElement("div",{className:"col-sm"},l.a.createElement(w,{text:"Fel\xfclet let\xf6lt\xe9se",onClick:function(){return t(o,r)},className:"btn btn-primary btn-sm w-50 mx-auto align-middle",style:{display:"block"}}))))},I=function e(t){var a,n=t.node;return null!=n.children&&(a=n.children.map(function(t,a){var n=t.model.styles||{},o=(t.model.value,t.model.attributes||{}),r=t.model.type,i=t.model.attributes.id||t.model.id;return l.a.createElement(r,Object(h.a)({id:i},o,{key:a,style:n}),l.a.createElement(e,{node:t}))})),l.a.createElement(l.a.Fragment,null,a)},j=function e(t){var a,n=t.node,o=t.selectElem,r=t.selectedNode;return null!=n.children&&(a=n.children.map(function(t,a){var n=t.model,i=n.id,s=n.type;return l.a.createElement("li",{className:i===r?"list-group-item list-group-item-action list-group-item-primary m-1 p-1":"list-group-item list-group-item-action list-group-item-secondary m-1 p-1",id:i,key:a,onClick:function(e){return o(e,t)}},l.a.createElement("span",null,s,"#",i),l.a.createElement(e,{node:t,selectElem:o,selectedNode:r}))})),l.a.createElement("ul",{className:"p-1"},a)},O=(a(11),a(13)),C=a.n(O),A=function(e){var t=e.title,a=e.children,n=e.deleteSelectedElem;return l.a.createElement("div",{className:"mt-3 border p-1 border-secondary align-middle pr-3"},l.a.createElement("h6",{className:"text-center"},t),l.a.createElement("div",{className:"list-group m-1"},a),l.a.createElement(w,{text:"T\xf6rl\xe9s",onClick:n,className:"btn btn-danger btn-sm w-50 mx-auto",style:{display:"block"}}))},z=a(21),T=a(11),F=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(d.a)(this,Object(c.a)(t).call(this,e))).selectElem=function(e,t){if(!e)e=window.event;e.cancelBubble=!0,e.stopPropagation&&e.stopPropagation(),a.setState({selectedNodeId:t.model.id})},a.addNewElem=function(e,t){var n=a.tree.parse({id:C()(),type:e,attributes:{id:11111},styles:{}}),l=a.state.selectedNodeId;if(null!=a.state.selectedNodeId){var o=a.state.root,r=o.first(function(e){return e.model.id===l});if(null!=r){switch(t){case"append":r.addChild(n);break;case"prepend":r.addChildAtIndex(n,0);break;default:r.addChild(n)}a.setState({root:o})}}},a.modifyAttribute=function(e){var t=a.state.selectedNodeId;if(null!=a.state.selectedNodeId){var n=a.state.root,l=n.first(function(e){return e.model.id===t});null!=l&&(l.model.id=e.id,l.model.attributes=e,a.setState({root:n}))}},a.modifyStyles=function(e){var t=a.state.selectedNodeId;if(null!=a.state.selectedNodeId){var n=a.state.root,l=n.first(function(e){return e.model.id===t});null!=l&&(l.model.styles=e,a.setState({root:n}))}},a.deletSelectedElem=function(){var e=a.state.selectedNodeId;if(null!=a.state.selectedNodeId){var t=a.state.root;console.log("selected node id: "+a.state.selectedNodeId);var n=t.first(function(t){return t.model.id===e});console.log(n),null!=n&&n.drop(),a.setState({root:t})}},a.getSelectedElemAttributes=function(){var e=a.state.selectedNodeId;if(null!=a.state.selectedNodeId){var t=a.state.root.first(function(t){return t.model.id===e});if(null!=t)return t.model.attributes}return{}},a.getSelectedElemStyle=function(){var e=a.state.selectedNodeId;if(null!=a.state.selectedNodeId){var t=a.state.root.first(function(t){return t.model.id===e});if(null!=t)return t.model.styles}return{}},a.getHtmlFileText=function(e){var t;return null!=e.children&&(t=e.children.map(function(e,t){var a=e.model;a.id,a.type,a.attributes,a.style;return"<${type} ${...attributes} style=${style}>"+this.getHtmlFileText(e)+"<${type}>"})),t},a.getCssFileText=function(){var e,t,n="",l="";return a.state.root.walk({strategy:"pre"},function(a){"html dom tree"===a.model.id?l="":(t=a.model.attributes.id||a.model.id,e=JSON.stringify(a.model.styles).replace("{","").replace("}",""),l="."+t+" { "+e+" } \n"),n+=l}),n.split(",").join("; ").split('"').join("")},a.downloadFiles=function(e,t){var a=new Blob([e],{type:"text/plain;charset=utf-8"});T.saveAs(a,"index.html");var n=new Blob([t],{type:"text/plain;charset=utf-8"});T.saveAs(n,"index.css")},a.tree=new z,a.state={root:a.tree.parse({id:"html dom tree",styles:{},children:[{id:"root",type:"div",attributes:{id:"root"},styles:{},children:[]}]}),selectedNodeId:"root"},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=[{key:"fourthSection",section:l.a.createElement(A,{title:"HTML DOM fa",deleteSelectedElem:this.deletSelectedElem,addNewElem:this.addNewElem,children:l.a.createElement(j,{node:this.state.root,selectElem:this.selectElem,selectedNode:this.state.selectedNodeId})})},{key:"firstSection",section:l.a.createElement(x,{title:"HTML c\xedmk\xe9k",tagOptions:["div","p","h1","h2","h3","h4","h5","h6","a","abbr","address","area","article","aside","audio","b","button","canvas","caption","code","col","colgroup","dd","del","dl","dt","em","footer","form","head","header","hr","i","iframe","img","input","label","li","link","map","nav","ol","pre","q","select","section","smoll","span","table","tbody","td","textarea","tfoot","th","thead","tr","u","ul"],addTagOptions:["append","prepend"],addNewElem:this.addNewElem})},{key:"secondSection",section:l.a.createElement(k,{title:"Attrib\xfatumok",options:["accept","accept-charset","accesskey","action","align","alt","async","autocomplete","autofocus","autoplay","bgcolor","border","checked","cite","class","color","cols","colspan","content","contenteditable","controls","coords","data","datetime","default","dir","dirname","disabled","download","draggable","dropzone","enctype","for","form","formaction","headers","height","hidden","high","hreflang","id","ismap","kind","label","lang","list","loop","low","max","maxlength","media","method","min","multiple","muted","name","novalidate","onabort","onblur","oncanplay","onchange","onclick","oncontextmenu","oncopy","ondblclick","ondrag","ondragenter","ondragleave","ondragover","ondragstart","ondrop","ondurationchange","onended","onerror","onfocus","oninput","oninvalid","onkeydown","onkeypress","onkeyup","onmousedown","onmousemove","onmouseout","onmouseover","onmouseup","onmousewheel","onpaste","onselect","placeholder","rel","required","rows","rowspan","sandbox","scope","selected","shape","size","span","src","start","title","type","value","width"],items:this.getSelectedElemAttributes(),modifyElems:this.modifyAttribute,selectedNode:this.state.selectedNodeId})},{key:"thirdSection",section:l.a.createElement(k,{title:"St\xedlus jegyek",options:["align-content","align-items","align-self","all","background","background-attachment","background-blend-mode","background-clip","background-color","background-image","background-origin","background-position","background-repeat","background-size","border","border-radius","border-image","border-collapse","border-spacing","bottom","box-shadow","box-sizing","caption-side","caret-color","clear","clip","color","column-count","column-fill","column-gap","column-rule","column-span","column-width","columns","cursor","direction","display","empty-cells","filter","flex","flex-flow","float","font","font-family","font-size","font-size-adjust","font-style","font-variant","font-weight","grid","grid-area","grid-auto-columns","grid-auto-flow","grid-auto-rows","grid-column","grid-column-end","grid-column-gap","grid-column-start","grid-gap","grid-row","grid-row-end","grid-row-gap","grid-row-start","grid-template","grid-template-areas","grid-template-columns","grid-template-rows","height","justify-content","left","letter-spacing","line-break","line-height","line-style","list-style","list-style-image","list-style-position","list-style-type","margin","max-height","max-width","min-height","min-width","mix-blend-mode","object-fit","object-position","opacity","order","outline","outline-offset","overflow","overflow-wrap","overflow-x","overflow-y","padding","position","quotes","resize","right","tab-size","table-layout","text-align","text-decoration","text-decoration-color","text-indent","text-justify","text-overflow","text-shadow","top","transition","vertical-align","visibility","width","word-break","word-spacing","word-wrap","writing-mode","z-index"],items:this.getSelectedElemStyle(),modifyElems:this.modifyStyles,selectedNode:this.state.selectedNodeId})}];return l.a.createElement("div",{className:"container-fluid d-flex h-100 flex-column"},l.a.createElement("div",{className:"row flex-grow-1 d-flex justify-content-start"},l.a.createElement("div",{className:"col-9 h-100"},l.a.createElement(u,{header:l.a.createElement(S,{downloadFile:this.downloadFiles,getHtmlFileText:this.getHtmlFileText,getCssFileText:this.getCssFileText,node:this.state.root}),preview:l.a.createElement(I,{node:this.state.root})})),l.a.createElement("div",{className:"col-3 border border-dark no-gutters"},l.a.createElement(p,{toolsSections:e,selectedNode:this.state.selectedNodeId}))))}}]),t}(n.Component);a(24),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[14,1,2]]]);
//# sourceMappingURL=main.6004ee8b.chunk.js.map