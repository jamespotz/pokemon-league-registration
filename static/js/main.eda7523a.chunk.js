(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{33:function(e,t,a){e.exports=a(77)},76:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(11),c=a.n(r),o=a(15),s=a.n(o),i=a(29),m=a(2),u=a(6),d=a(30),f=a.n(d),b=a(1),p=a(8),E=a.n(p),h=function(e){var t=e.onClick,a=Object(u.a)(e,["onClick"]),n=a.stats?a.stats.reduce(function(e,t){return e[t.stat.name]=t.base_stat,e},{}):{};return l.a.createElement("button",{className:"border rounded hover:shadow-md items-center pokedex-card overflow-hidden appearance-none w-full mt-4",onClick:function(){var e=Object(b.a)({},a);"function"===typeof t&&t.call(null,e)}},l.a.createElement("div",null,l.a.createElement("div",{className:"flex px-6 pt-6 items-center"},l.a.createElement("div",{className:"w-32"},l.a.createElement("div",{alt:a.name,className:"w-32 h-32 border bg-gray-300 border-transparent rounded-full bg-cover bg-center",style:{backgroundImage:"url(".concat(a.sprites.front_default,")")}}),l.a.createElement("span",{className:"text-sm text-gray-400"},"#",a.id)),l.a.createElement("div",{className:"ml-6 flex w-full text-left"},l.a.createElement("div",{className:"inline-flex flex-col text-left w-1/2"},l.a.createElement("div",{className:"flex flex-col"},l.a.createElement("strong",{className:"leading-normal text-md"},"Name:"),l.a.createElement("span",{className:"text-gray-700"},E()(a.name))),l.a.createElement("div",{className:"flex flex-col"},l.a.createElement("strong",{className:"leading-normal text-md"},"Type:"),l.a.createElement("span",{className:"text-gray-700"},a.types.map(function(e){return E()(e.type.name)}).join(", "))),l.a.createElement("div",{className:"flex flex-col"},l.a.createElement("strong",{className:"leading-normal text-md"},"Abilities:"),l.a.createElement("span",{className:"text-gray-700"},a.abilities.filter(function(e){return!e.is_hidden}).map(function(e){return E()(e.ability.name)}).join(", ")))),l.a.createElement("div",{className:"inline-flex flex-col text-left w-1/2"},l.a.createElement("div",{className:"flex flex-col"},l.a.createElement("strong",{className:"leading-normal text-md"},"Height:"),l.a.createElement("span",{className:"text-gray-700"},function(){var e=a.height,t=e/3.048,n=Math.floor(e/3.048),l=Math.ceil(12*(t-n));return"".concat(n,"' ").concat(l,"''")}())),l.a.createElement("div",{className:"flex flex-col"},l.a.createElement("strong",{className:"leading-normal text-md"},"Weight:"),l.a.createElement("span",{className:"text-gray-700"},function(){var e=(a.weight/4.536).toFixed(1);return"".concat(e," lbs")}())))))),l.a.createElement("div",{className:"flex flex-col mt-2 px-6 pb-6 text-left"},l.a.createElement("h2",null,"Stats"),l.a.createElement("table",{className:"w-full border"},l.a.createElement("thead",{className:"border"},l.a.createElement("tr",null,l.a.createElement("td",{className:"border px-1 text-left"},"HP"),l.a.createElement("td",{className:"border px-1 text-left"},"Atk"),l.a.createElement("td",{className:"border px-1 text-left"},"Def"),l.a.createElement("td",{className:"border px-1 text-left"},"Sp. Atk"),l.a.createElement("td",{className:"border px-1 text-left"},"Sp. Def"),l.a.createElement("td",{className:"border px-1 text-left"},"Speed"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",{className:"border px-1 text-left"},n.hp),l.a.createElement("td",{className:"border px-1 text-left"},n.attack),l.a.createElement("td",{className:"border px-1 text-left"},n.defense),l.a.createElement("td",{className:"border px-1 text-left"},n["special-attack"]),l.a.createElement("td",{className:"border px-1 text-left"},n["special-defense"]),l.a.createElement("td",{className:"border px-1 text-left"},n.speed))))))},x=a(5),g=a(3),v=function(e){var t=e.value,a=e.name,r=e.type,c=e.helperText,o=e.label,s=e.onChange,i=Object(u.a)(e,["value","name","type","helperText","label","onChange"]),d=Object(n.useState)(""),f=Object(m.a)(d,2),b=f[0],p=f[1];Object(n.useEffect)(function(){t&&p(t)},[t]);return l.a.createElement("div",{className:"flex flex-col"},l.a.createElement("label",{className:"text-gray-600 font-bold uppercase text-base",htmlFor:"input-".concat(a)},o),c&&l.a.createElement("small",{className:"text-gray-400 text-sm leading-normal"},c),l.a.createElement("input",Object.assign({type:r||"text",value:b,onChange:function(e){var t=e.target,a=t.name,n=t.value;if("number"===r&&i.max){var l=Number(n);n=l>i.max?i.max:l}p(n),"function"===typeof s&&s.call(null,{target:{value:n,name:a}})},id:"input-".concat(a),name:a},i,{className:"transition focus:outline-none focus:bg-white focus:border-gray-200 bg-gray-200 border border-transparent rounded w-full p-2 leading-normal appearance-none"})))},N=function(e){var t=Object(n.useState)({}),a=Object(m.a)(t,2),r=a[0],c=a[1];Object(n.useEffect)(function(){e.stat&&c(e.stat)},[e.stat]);var o=function(t){var a=t.target,n=a.name,l=a.value;switch(n){case"effort":return"function"===typeof e.onChange&&e.onChange(e.index,n,l),c(Object(b.a)({},r,{effort:l}));case"base_stat":return"function"===typeof e.onChange&&e.onChange(e.index,n,l),c(Object(b.a)({},r,{base_stat:l}));default:return!1}};return l.a.createElement("div",{className:"mt-2"},l.a.createElement("h2",{className:"text-gray-600 font-bold uppercase text-xl"},r.stat?r.stat.name:""),l.a.createElement("div",{className:"flex justify-between"},l.a.createElement("div",{className:"w-1/2 pr-4"},l.a.createElement(v,{label:"base_stat",name:"base_stat",value:r.base_stat,onChange:o,type:"number",min:"0",max:"255",helperText:"The base value of the stat."})),l.a.createElement("div",{className:"w-1/2"},l.a.createElement(v,{label:"effort",name:"effort",value:r.effort,onChange:o,type:"number",min:"0",max:"255",helperText:" The effort points (EV) the Pok\xe9mon"}))))},O=function(e){var t=e.index,a=Object(u.a)(e,["index"]),r=Object(n.useState)({}),c=Object(m.a)(r,2),o=c[0],s=c[1];Object(n.useEffect)(function(){a.ability&&s(a.ability)},[a.ability]);var i=function(e){var n=e.target,l=n.name,r=n.value;switch(l){case"name":return"function"===typeof a.onChange&&a.onChange(t,l,r),s(Object(b.a)({},o,{ability:Object(b.a)({},o.ability,{name:r})}));case"is_hidden":return"function"===typeof a.onChange&&a.onChange(t,l,"true"===r),s(Object(b.a)({},o,{is_hidden:"true"===r}));default:return!1}};return Object.keys(o).length>1&&l.a.createElement("div",{className:"mt-2"},l.a.createElement("div",{className:"flex justify-between relative"},l.a.createElement("div",{className:"w-1/2 pr-4"},l.a.createElement(v,{label:"name",name:"name",value:o.ability.name,onChange:i,helperText:"Ability name"})),l.a.createElement("div",{className:"w-1/2 flex flex-col"},l.a.createElement("label",{htmlFor:"ability-".concat(t,"-is_hidden"),className:"text-gray-600 font-bold uppercase text-base"},"Is Hidden?"),l.a.createElement("small",{className:"text-gray-400 text-sm leading-normal"},"Is the ability hidden?"),l.a.createElement("select",{value:o.is_hidden,onChange:i,id:"ability-".concat(t,"-is_hidden"),name:"is_hidden",className:"transition focus:outline-none focus:bg-white focus:border-gray-200 bg-gray-200 border border-transparent rounded w-full p-2 leading-normal appearance-none"},l.a.createElement("option",{value:"true"},"True"),l.a.createElement("option",{value:"false"},"False"))),!!o.uniqId&&l.a.createElement("button",{onClick:function(){o.uniqId&&"function"===typeof a.onRemove&&a.onRemove.call(null,o.uniqId)},className:"appearance-none absolute top-0 right-0 hover:text-red-400"},l.a.createElement("i",{className:"material-icons"},"cancel"))))},y=a(32),k=a.n(y),w=Object(x.b)(function(e){return{pokemon:e.pokemon}})(function(e){var t=Object(n.useState)({}),a=Object(m.a)(t,2),r=a[0],c=a[1];Object(n.useEffect)(function(){e.pokemon&&c(e.pokemon)},[e.pokemon]),Object(n.useEffect)(function(){Object.keys(r).length<=0||e.dispatch({type:"UPDATE_PREVIEW",pokemon:r})},[r,e]);var o=function(e){var t=e.target,a=t.name,n=t.value;switch(a){case"name":return c(Object(b.a)({},r,{name:n}));case"weight":return c(Object(b.a)({},r,{weight:n}));case"height":return c(Object(b.a)({},r,{height:n}));default:return!1}},s=function(e,t,a){var n=Object(g.a)(r.stats);n[e]&&(n[e][t]=a,c(Object(b.a)({},r,{stats:n})))},i=function(e,t,a){var n=Object(g.a)(r.abilities);if(n[e])switch(t){case"name":return n[e].ability.name=a,c(Object(b.a)({},r,{abilities:n}));case"is_hidden":return n[e].is_hidden=a,c(Object(b.a)({},r,{abilities:n}));default:return!1}},u=function(e){var t=Object(g.a)(r.abilities).filter(function(t){return t.uniqId!==e});c(Object(b.a)({},r,{abilities:t}))};return l.a.createElement("div",{className:"w-full border rounded-lg pokemon-data-container p-3 overflow-y-auto"},Object.keys(r).length>1&&l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",{className:"text-gray-400 text-xl font-bold leading-normal"},"Dex Id: #",r.id),l.a.createElement("div",{className:"flex justify-between"},l.a.createElement("div",{className:"w-1/3 pr-4"},l.a.createElement(v,{value:r.name,onChange:o,label:"name",name:"name",helperText:"Rename your pokemon"})),l.a.createElement("div",{className:"w-1/3 pr-4"},l.a.createElement(v,{value:r.weight,onChange:o,label:"weight",name:"weight",type:"number",helperText:"weight in hectometers",min:"1",max:"999"})),l.a.createElement("div",{className:"w-1/3"},l.a.createElement(v,{value:r.height,onChange:o,label:"height",name:"height",type:"number",helperText:"height in decimeter",min:"1",max:"999"}))),l.a.createElement("div",{className:"mt-4"},l.a.createElement("h1",{className:"text-2xl font-bold text-black leading-normal tracking-wide"},"Stats"),l.a.createElement("small",{className:"text-gray-400 text-sm leading-normal"},"Customize your stat here"),r.stats.map(function(e,t){return l.a.createElement(N,{stat:e,key:e.stat.name,index:t,onChange:s})})),l.a.createElement("div",{className:"mt-4"},l.a.createElement("h1",{className:"text-2xl font-bold text-black leading-normal tracking-wide"},"Abilities"),l.a.createElement("small",{className:"text-gray-400 text-sm leading-normal"},"Customize your abilities or add new ability"),r.abilities.map(function(e,t){return l.a.createElement(O,{ability:e,index:t,key:"ability-".concat(t),onChange:i,onRemove:u})}),l.a.createElement("button",{onClick:function(){var e=Object(g.a)(r.abilities),t=Object(b.a)({},r.abilities[0]);e.push(Object(b.a)({},t,{ability:Object(b.a)({},t.ability,{name:""}),is_hidden:!0,uniqId:k()()})),c(Object(b.a)({},r,{abilities:e}))},className:"mt-2 p-2 flex items-center border apperance-none focus:outline-none rounded hover:shadow hover:bg-blue-500 hover:text-white"},l.a.createElement("i",{className:"material-icons"},"add")," Ability")),l.a.createElement("div",{className:"flex"},l.a.createElement("button",{onClick:function(){return c(e.pokemon)},className:"mt-2 p-2 flex items-center border apperance-none focus:outline-none rounded hover:shadow rounded-lg reset-btn"},l.a.createElement("i",{className:"material-icons"},"refresh")," Reset"),l.a.createElement("button",{onClick:function(){e.dispatch({type:"UPDATE_POKEMON",pokemon:r})},className:"mt-2 ml-3 text-gray-300 hover:text-gray-100 p-2 flex items-center border apperance-none focus:outline-none rounded hover:shadow rounded-lg text-white save-btn"},l.a.createElement("i",{className:"material-icons"},"save")," Save"))))}),j=function(e){return l.a.createElement("div",null,l.a.createElement("h1",{className:"text-xl font-bold mt-4 text-gray-700"},"Preview Changes"),l.a.createElement(h,e))},_=Object(x.b)(function(e){return{preview:e.previewPokemon}})(function(e){var t=e.dispatch,a=Object(u.a)(e,["dispatch"]),r=Object(n.useState)(""),c=Object(m.a)(r,2),o=c[0],d=c[1],b=Object(n.useState)(null),p=Object(m.a)(b,2),E=p[0],x=p[1],g=Object(n.useState)(!1),v=Object(m.a)(g,2),N=v[0],O=v[1],y=function(){var e=Object(i.a)(s.a.mark(function e(){var t,a;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(o){e.next=2;break}return e.abrupt("return",O(!1));case 2:return e.prev=2,e.next=5,f.a.get("https://pokeapi.co/api/v2/pokemon/".concat(o.toLowerCase()));case 5:t=e.sent,a=t.data,x(a),O(!1),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(2),x(null),O(!1);case 15:case"end":return e.stop()}},e,null,[[2,11]])}));return function(){return e.apply(this,arguments)}}();return l.a.createElement("div",{className:"mt-2"},l.a.createElement("input",{type:"text",value:o,onKeyDown:function(e){"Enter"===e.key&&(O(!0),x(null),y())},onChange:function(e){return d(e.target.value)},className:"transition focus:outline-none focus:bg-white focus:border-gray-200 bg-gray-200 border border-transparent rounded w-full p-2 leading-normal appearance-none",placeholder:"Enter the name/id of your pok\xe9mon"}),N&&l.a.createElement("p",null,"Loading..."),E&&l.a.createElement(h,Object.assign({},E,{onClick:function(e){t(function(e){return{type:"ADD_POKEMON",pokemon:e}}(e)),d(""),x(null)}})),Object.keys(a.preview).length>1&&l.a.createElement(j,a.preview))}),C=Object(x.b)(function(e){return{selectedPokemon:e.pokemon.id}})(function(e){var t=e.toggleSelect,a=e.onRemove,r=e.selectedPokemon,c=Object(u.a)(e,["toggleSelect","onRemove","selectedPokemon"]),o=Object(n.useState)(!1),s=Object(m.a)(o,2),i=s[0],d=s[1];return Object(n.useEffect)(function(){r&&d(r===c.id)},[c.id,r]),l.a.createElement("div",{className:"w-1/3 relative"},l.a.createElement("div",{className:"w-full h-40 p-2"},l.a.createElement("div",{className:"transition w-full h-full bg-gray-200 border rounded-lg border-transparent flex flex-col items-center justify-center hover:shadow-md"},c.sprites&&l.a.createElement("div",{className:"w-24 h-24 border rounded-full bg-gray-300 border-transparent bg-cover bg-center",style:{backgroundImage:"url(".concat(c.sprites.front_default,")")}}),"Pokemon"!==c.name&&l.a.createElement("h2",null,E()(c.name)))),Object.keys(c).length>2&&l.a.createElement("div",{className:"flex absolute top-0 right-0 mx-3 my-4"},l.a.createElement("button",{className:"w-8 h-8 focus:outline-none",title:"Select Pokemon",onClick:function(){"function"===typeof t&&t.call(null,c,!i),d(!i)}},l.a.createElement("i",{className:"material-icons"},i?"check_box":"check_box_outline_blank")),l.a.createElement("button",{title:"Remove Pokemon",className:"w-8 h-8 focus:outline-none",onClick:function(){if("function"===typeof a)return a.call(null,c.id)}},l.a.createElement("i",{className:"material-icons"},"clear"))))}),P=function(e){return Array(e).fill({name:"Pokemon"})},S=Object(x.b)(function(e){return{pokemons:e.pokemonLineups,pokemon:e.pokemon}})(function(e){var t=Object(n.useState)([]),a=Object(m.a)(t,2),r=a[0],c=a[1];Object(n.useEffect)(function(){c(P(6))},[]),Object(n.useEffect)(function(){if(e.pokemons){var t=e.pokemons.length,a=Object(g.a)(e.pokemons);t<6&&(a=[].concat(Object(g.a)(e.pokemons),Object(g.a)(P(Math.abs(t-6))))),c(a)}},[e]);var o=function(t,a){a&&(e.dispatch(function(e){return{type:"SELECT_POKEMON",pokemon:e}}(t)),e.dispatch(function(e){return{type:"ADD_PREVIEW",pokemon:e}}(t))),t.id===e.pokemon.id&&(e.dispatch({type:"REMOVE_SELECTED_POKEMON"}),e.dispatch({type:"REMOVE_PREVIEW"}))},s=function(t){e.pokemon.id===t&&(e.dispatch({type:"REMOVE_SELECTED_POKEMON"}),e.dispatch({type:"REMOVE_PREVIEW"})),e.dispatch(function(e){return{type:"REMOVE_POKEMON",id:e}}(t))};return l.a.createElement("div",{className:"w-full flex flex-wrap border rounded-lg"},r.map(function(e,t){return l.a.createElement(C,Object.assign({},e,{toggleSelect:o,onRemove:s,key:e.id||t}))}))});var R=function(){return l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"container mx-auto h-screen"},l.a.createElement("div",{className:"flex w-full h-full justify-center items-center"},l.a.createElement("div",{className:"w-full flex bg-white shadow-md rounded-lg overflow-hidden min-h-18 p-10"},l.a.createElement("div",{className:"flex flex-col w-8/12 pr-6"},l.a.createElement("div",{className:"w-full"},l.a.createElement("h1",{className:"tracking-wide text-2xl font-sans font-bold leading-normal"},"Pok\xe9mon Lineup"),l.a.createElement("small",{className:"text-gray-500 text-sm"},"Select a pok\xe9mon by checking the box. Remove pok\xe9mon by clicking on the 'X' symbol."),l.a.createElement(S,null)),l.a.createElement("div",{className:"w-full mt-4"},l.a.createElement("h1",{className:"tracking-wide text-2xl font-sans font-bold leading-normal"},"Pok\xe9mon Data"),l.a.createElement("small",{className:"text-gray-500 text-sm"},"Select a pok\xe9mon from the top and edit your pok\xe9mon attributes here."),l.a.createElement(w,null))),l.a.createElement("div",{className:"flex flex-col w-4/12 pl-6"},l.a.createElement("h1",{className:"tracking-wide text-2xl font-sans font-bold leading-normal"},"Pok\xe9dex"),l.a.createElement("small",{className:"text-gray-500 text-sm"},"Search pok\xe9mon by name or id and press enter."),l.a.createElement(_,null))))))};a(76),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var T=a(10),D=[],M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_POKEMON":return function(e,t){return 6===e.length?e:e.filter(function(e){return e.id===t.id}).length>0?Object(g.a)(e):[].concat(Object(g.a)(e),[t])}(e,t.pokemon);case"REMOVE_POKEMON":return function(e,t){var a=e.filter(function(e){return e.id!==t});return Object(g.a)(a)}(e,t.id);case"UPDATE_POKEMON":return function(e,t){var a=Object(g.a)(e),n=a.findIndex(function(e){return e.id===t.id});return n>=0?(a.splice(n,1,t),Object(g.a)(a)):e}(e,t.pokemon);default:return e}},I={},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SELECT_POKEMON":return Object(b.a)({},t.pokemon);case"REMOVE_SELECTED_POKEMON":return I;default:return e}},A={},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_PREVIEW":return Object(b.a)({},t.pokemon);case"REMOVE_PREVIEW":return A;case"UPDATE_PREVIEW":return function(e,t){return Object.keys(e).length>1?Object(b.a)({},t):e}(e,t.pokemon);default:return e}},L=Object(T.b)({pokemonLineups:M,pokemon:V,previewPokemon:K}),W=Object(T.c)(L,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());c.a.render(l.a.createElement(x.a,{store:W},l.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[33,1,2]]]);
//# sourceMappingURL=main.eda7523a.chunk.js.map