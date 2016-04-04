// Compiled by ClojureScript 1.8.40 {}
goog.provide('hipo.dom');
goog.require('cljs.core');
hipo.dom.create_element = (function hipo$dom$create_element(namespace_uri,tag){
if(cljs.core.truth_(namespace_uri)){
return document.createElementNS(namespace_uri,tag);
} else {
return document.createElement(tag);
}
});
hipo.dom.element_QMARK_ = (function hipo$dom$element_QMARK_(el){
if(cljs.core.truth_(el)){
return ((1) === el.nodeType);
} else {
return null;
}
});
hipo.dom.text_element_QMARK_ = (function hipo$dom$text_element_QMARK_(el){
if(cljs.core.truth_(el)){
return ((3) === el.nodeType);
} else {
return null;
}
});
hipo.dom.child_at = (function hipo$dom$child_at(el,i){
if(cljs.core.truth_(hipo.dom.element_QMARK_.call(null,el))){
} else {
throw (new Error("Assert failed: (element? el)"));
}

if(!((i < (0)))){
} else {
throw (new Error("Assert failed: (not (neg? i))"));
}

return (el.childNodes[i]);
});
hipo.dom.children = (function hipo$dom$children(var_args){
var args283968 = [];
var len__36461__auto___283976 = arguments.length;
var i__36462__auto___283977 = (0);
while(true){
if((i__36462__auto___283977 < len__36461__auto___283976)){
args283968.push((arguments[i__36462__auto___283977]));

var G__283979 = (i__36462__auto___283977 + (1));
i__36462__auto___283977 = G__283979;
continue;
} else {
}
break;
}

var G__283970 = args283968.length;
switch (G__283970) {
case 1:
return hipo.dom.children.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hipo.dom.children.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args283968.length)].join('')));

}
});

hipo.dom.children.cljs$core$IFn$_invoke$arity$1 = (function (el){
return hipo.dom.children.call(null,el,(0));
});

hipo.dom.children.cljs$core$IFn$_invoke$arity$2 = (function (el,i){
if(cljs.core.truth_(hipo.dom.element_QMARK_.call(null,el))){
} else {
throw (new Error("Assert failed: (element? el)"));
}

if(!((i < (0)))){
} else {
throw (new Error("Assert failed: (not (neg? i))"));
}

var fel = el.firstChild;
if(cljs.core.truth_(fel)){
var cel = fel;
var acc = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cel], null);
while(true){
var nel = cel.nextSibling;
if(cljs.core.truth_((function (){var and__35380__auto__ = !(((cljs.core.count.call(null,acc) - (i + (1))) === (0)));
if(and__35380__auto__){
return nel;
} else {
return and__35380__auto__;
}
})())){
var G__283983 = nel;
var G__283984 = cljs.core.conj.call(null,acc,nel);
cel = G__283983;
acc = G__283984;
continue;
} else {
return acc;
}
break;
}
} else {
return null;
}
});

hipo.dom.children.cljs$lang$maxFixedArity = 2;
hipo.dom.replace_BANG_ = (function hipo$dom$replace_BANG_(el,nel){
if(cljs.core.truth_(hipo.dom.element_QMARK_.call(null,el))){
} else {
throw (new Error("Assert failed: (element? el)"));
}

if(cljs.core.truth_(hipo.dom.element_QMARK_.call(null,nel))){
} else {
throw (new Error("Assert failed: (element? nel)"));
}

if(!((el.parentElement == null))){
} else {
throw (new Error("Assert failed: (not (nil? (.-parentElement el)))"));
}

return el.parentElement.replaceChild(nel,el);
});
hipo.dom.replace_text_BANG_ = (function hipo$dom$replace_text_BANG_(el,s){
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hipo.dom.element_QMARK_.call(null,el),typeof s === 'string'], null)], null);

if(cljs.core.truth_(hipo.dom.text_element_QMARK_.call(null,el))){
return el.textContent = s;
} else {
return hipo.dom.replace_BANG_.call(null,el,document.createTextNode(s));
}
});
hipo.dom.clear_BANG_ = (function hipo$dom$clear_BANG_(el){
if(cljs.core.truth_(hipo.dom.element_QMARK_.call(null,el))){
} else {
throw (new Error("Assert failed: (element? el)"));
}

return el.innerHTML = "";
});
hipo.dom.remove_trailing_children_BANG_ = (function hipo$dom$remove_trailing_children_BANG_(el,n){
if(cljs.core.truth_(hipo.dom.element_QMARK_.call(null,el))){
} else {
throw (new Error("Assert failed: (element? el)"));
}

if(!((n < (0)))){
} else {
throw (new Error("Assert failed: (not (neg? n))"));
}

var n__36306__auto__ = n;
var _ = (0);
while(true){
if((_ < n__36306__auto__)){
if(typeof el.remove !== 'undefined'){
el.lastChild.remove();
} else {
el.removeChild(el.lastChild);
}

var G__283991 = (_ + (1));
_ = G__283991;
continue;
} else {
return null;
}
break;
}
});
hipo.dom.insert_child_at_BANG_ = (function hipo$dom$insert_child_at_BANG_(el,i,nel){
if(cljs.core.truth_(hipo.dom.element_QMARK_.call(null,el))){
} else {
throw (new Error("Assert failed: (element? el)"));
}

if(!((i < (0)))){
} else {
throw (new Error("Assert failed: (not (neg? i))"));
}

if(cljs.core.truth_(hipo.dom.element_QMARK_.call(null,nel))){
} else {
throw (new Error("Assert failed: (element? nel)"));
}

return el.insertBefore(nel,hipo.dom.child_at.call(null,el,i));
});
