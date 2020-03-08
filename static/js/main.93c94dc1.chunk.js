(this["webpackJsonpsynonyms-search-app"]=this["webpackJsonpsynonyms-search-app"]||[]).push([[0],{168:function(e,t,n){e.exports=n(352)},173:function(e,t,n){},174:function(e,t,n){},352:function(e,t,n){"use strict";n.r(t);var a,r=n(0),s=n.n(r),o=n(3),i=n.n(o),l=(n(173),n(47)),c=n(48),m=n(52),y=n(49),u=n(53),d=(n(174),n(354)),h=n(358),v=n(359),p=n(360),f=n(355),b=n(357),E=n(108),S=n.n(E);a="local"===Object({NODE_ENV:"production",PUBLIC_URL:"/synonyms-search-ui",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_STAGE?"http://localhost:8080":"https://synonyms-search-api.herokuapp.com";var g={addSynonyms:function(e){var t="".concat(a,"/synonyms/add");return S.a.post(t,e)},searchSynonyms:function(e,t){var n="".concat(a,"/synonyms/search?word=").concat(e);return null!=t&&(n+="&depth=".concat(t)),S.a.get(n)}},w=v.a.Search,k=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(m.a)(this,Object(y.a)(t).call(this,e))).state={visible:n.props.visible,searchResults:[]},n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"searchSynonyms",value:function(e){var t=this;g.searchSynonyms(e,null).then((function(e){t.setState({searchResults:e.data})})).catch((function(e){console.error(e),p.a.error("Unexpected problem occurred during search!")}))}},{key:"render",value:function(){return s.a.createElement("div",{className:"App",style:{display:this.state.visible?"block":"none"}},s.a.createElement(d.a,{justify:"center",style:{paddingTop:"6em"}},s.a.createElement(f.a,{xs:22,sm:14,md:10,lg:8},s.a.createElement("p",null,"Enter word for synonyms search"))),s.a.createElement(d.a,{justify:"center",style:{paddingTop:"1em"}},s.a.createElement(f.a,{xs:22,sm:14,md:10,lg:8},s.a.createElement(w,{placeholder:"Enter a word",onSearch:this.searchSynonyms.bind(this),enterButton:!0}))),s.a.createElement(d.a,{justify:"center",style:{paddingTop:"1em"}},s.a.createElement(f.a,{xs:22,sm:14,md:10,lg:8},s.a.createElement(b.a,{size:"small",dataSource:this.state.searchResults,renderItem:function(e){return s.a.createElement(b.a.Item,null,e)}}))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return{visible:e.visible}}}]),t}(s.a.Component),O=n(356),j=n(111),P=v.a.TextArea,T=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(m.a)(this,Object(y.a)(t).call(this,e))).wordPattern=/^[a-zA-Z]+$/,n.splitPattern=/[^\r\n]+/g,n.state={visible:n.props.visible},n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"onFinish",value:function(e){console.log(e);var t=e.synonyms.match(this.splitPattern);if(null==t||0===t.length)return Promise.resolve();var n=!0,a=!1,r=void 0;try{for(var s,o=t[Symbol.iterator]();!(n=(s=o.next()).done);n=!0){var i=s.value;i=i.trim()}}catch(l){a=!0,r=l}finally{try{n||null==o.return||o.return()}finally{if(a)throw r}}console.log(t),console.log(g),g.addSynonyms({word:e.word,synonyms:t}).then((function(){p.a.success("Synonyms successfully added!")})).catch((function(e){console.error(e),p.a.error("Unexpected problem occurred during adding synonyms!")}))}},{key:"onFinishFailed",value:function(e){console.log("error: ",e),p.a.error("Please fill form correcly!",1)}},{key:"validatorForSynonyms",value:function(e,t){if(null==t)return Promise.resolve();var n=t.match(this.splitPattern);if(null==n||0===n.length)return Promise.resolve();var a=!0,r=!1,s=void 0;try{for(var o,i=n[Symbol.iterator]();!(a=(o=i.next()).done);a=!0){var l=o.value;if(console.log(l.trim()),!this.wordPattern.test(l.trim()))return Promise.reject("Words can only include letters of english alphabeth!")}}catch(c){r=!0,s=c}finally{try{a||null==i.return||i.return()}finally{if(r)throw s}}return Promise.resolve()}},{key:"render",value:function(){return s.a.createElement("div",{className:"App",style:{display:this.state.visible?"block":"none"}},s.a.createElement(d.a,{justify:"center",style:{paddingTop:"6em"}},s.a.createElement(f.a,{xs:22,sm:14,md:10,lg:8},s.a.createElement(O.a,{layout:"vertical",onFinish:this.onFinish.bind(this),onFinishFailed:this.onFinishFailed},s.a.createElement(O.a.Item,{label:"Enter a word:",name:"word",rules:[{required:!0,message:"Please input a word!"},{max:30,message:"Max length of word is 30 characters"}]},s.a.createElement(v.a,{placeholder:"Enter a word"})),s.a.createElement(O.a.Item,{label:"Synonyms:",name:"synonyms",rules:[{required:!0,message:"Please input synonyms!"},{validator:this.validatorForSynonyms.bind(this)}]},s.a.createElement(P,{placeholder:"One synonym per line",autoSize:{minRows:3,maxRows:10}})),s.a.createElement(O.a.Item,null,s.a.createElement(j.a,{type:"primary",htmlType:"submit"},"Add synonyms"))))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return{visible:e.visible}}}]),t}(s.a.Component),x=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(m.a)(this,Object(y.a)(t).call(this,e))).state={searchSynonymsVisible:!0,addNewSynonymsVisible:!1},n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"handleMenuClick",value:function(e){console.log("click ",e),this.setState({searchSynonymsVisible:"searchSynonyms"===e.key,addNewSynonymsVisible:"addSynonyms"===e.key}),console.log(this.state)}},{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement(d.a,{justify:"center"},s.a.createElement(h.a,{mode:"horizontal",onClick:this.handleMenuClick.bind(this)},s.a.createElement(h.a.Item,{key:"searchSynonyms"},"Search synonyms"),s.a.createElement(h.a.Item,{key:"addSynonyms"},"Add synonyms"))),s.a.createElement(k,{visible:this.state.searchSynonymsVisible}),s.a.createElement(T,{visible:this.state.addNewSynonymsVisible}))}}]),t}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[168,1,2]]]);
//# sourceMappingURL=main.93c94dc1.chunk.js.map