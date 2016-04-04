// Compiled by ClojureScript 1.8.40 {}
goog.provide('garden.compiler');
goog.require('cljs.core');
goog.require('garden.units');
goog.require('garden.types');
goog.require('garden.util');
goog.require('garden.color');
goog.require('garden.selectors');
goog.require('garden.compression');
goog.require('clojure.string');
/**
 * The current compiler flags.
 */
garden.compiler._STAR_flags_STAR_ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"pretty-print?","pretty-print?",1932217158),true,new cljs.core.Keyword(null,"preamble","preamble",1641040241),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"output-to","output-to",-965533968),null,new cljs.core.Keyword(null,"vendors","vendors",-153040496),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"auto-prefix","auto-prefix",1484803466),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"media-expressions","media-expressions",1920421643),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nesting-behavior","nesting-behavior",-1555995755),new cljs.core.Keyword(null,"default","default",-1987822328)], null)], null);
/**
 * Retun a function to call when rendering a media expression.
 *   The returned function accepts two arguments: the media
 *   expression being evaluated and the current media expression context.
 *   Both arguments are maps. This is used to provide semantics for nested
 *   media queries.
 */
garden.compiler.media_expression_behavior = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"merge","merge",-1804319409),(function (expr,context){
return cljs.core.merge.call(null,context,expr);
}),new cljs.core.Keyword(null,"default","default",-1987822328),(function (expr,_){
return expr;
})], null);
/**
 * The current parent selector context.
 */
garden.compiler._STAR_selector_context_STAR_ = null;
/**
 * The current media query context.
 */
garden.compiler._STAR_media_query_context_STAR_ = null;
garden.compiler.with_selector_context = (function garden$compiler$with_selector_context(var_args){
var args__36468__auto__ = [];
var len__36461__auto___284845 = arguments.length;
var i__36462__auto___284846 = (0);
while(true){
if((i__36462__auto___284846 < len__36461__auto___284845)){
args__36468__auto__.push((arguments[i__36462__auto___284846]));

var G__284847 = (i__36462__auto___284846 + (1));
i__36462__auto___284846 = G__284847;
continue;
} else {
}
break;
}

var argseq__36469__auto__ = ((((3) < args__36468__auto__.length))?(new cljs.core.IndexedSeq(args__36468__auto__.slice((3)),(0),null)):null);
return garden.compiler.with_selector_context.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__36469__auto__);
});

garden.compiler.with_selector_context.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,selector_context,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("garden.compiler","*selector-context*","garden.compiler/*selector-context*",1030088346,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,selector_context)))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),body)))))));
});

garden.compiler.with_selector_context.cljs$lang$maxFixedArity = (3);

garden.compiler.with_selector_context.cljs$lang$applyTo = (function (seq284832){
var G__284833 = cljs.core.first.call(null,seq284832);
var seq284832__$1 = cljs.core.next.call(null,seq284832);
var G__284834 = cljs.core.first.call(null,seq284832__$1);
var seq284832__$2 = cljs.core.next.call(null,seq284832__$1);
var G__284835 = cljs.core.first.call(null,seq284832__$2);
var seq284832__$3 = cljs.core.next.call(null,seq284832__$2);
return garden.compiler.with_selector_context.cljs$core$IFn$_invoke$arity$variadic(G__284833,G__284834,G__284835,seq284832__$3);
});

garden.compiler.with_selector_context.cljs$lang$macro = true;
garden.compiler.with_media_query_context = (function garden$compiler$with_media_query_context(var_args){
var args__36468__auto__ = [];
var len__36461__auto___284858 = arguments.length;
var i__36462__auto___284859 = (0);
while(true){
if((i__36462__auto___284859 < len__36461__auto___284858)){
args__36468__auto__.push((arguments[i__36462__auto___284859]));

var G__284860 = (i__36462__auto___284859 + (1));
i__36462__auto___284859 = G__284860;
continue;
} else {
}
break;
}

var argseq__36469__auto__ = ((((3) < args__36468__auto__.length))?(new cljs.core.IndexedSeq(args__36468__auto__.slice((3)),(0),null)):null);
return garden.compiler.with_media_query_context.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__36469__auto__);
});

garden.compiler.with_media_query_context.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,selector_context,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("garden.compiler","*media-query-context*","garden.compiler/*media-query-context*",-1783105708,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,selector_context)))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),body)))))));
});

garden.compiler.with_media_query_context.cljs$lang$maxFixedArity = (3);

garden.compiler.with_media_query_context.cljs$lang$applyTo = (function (seq284851){
var G__284852 = cljs.core.first.call(null,seq284851);
var seq284851__$1 = cljs.core.next.call(null,seq284851);
var G__284853 = cljs.core.first.call(null,seq284851__$1);
var seq284851__$2 = cljs.core.next.call(null,seq284851__$1);
var G__284854 = cljs.core.first.call(null,seq284851__$2);
var seq284851__$3 = cljs.core.next.call(null,seq284851__$2);
return garden.compiler.with_media_query_context.cljs$core$IFn$_invoke$arity$variadic(G__284852,G__284853,G__284854,seq284851__$3);
});

garden.compiler.with_media_query_context.cljs$lang$macro = true;
/**
 * Return the current list of browser vendors specified in `*flags*`.
 */
garden.compiler.vendors = (function garden$compiler$vendors(){
return cljs.core.seq.call(null,new cljs.core.Keyword(null,"vendors","vendors",-153040496).cljs$core$IFn$_invoke$arity$1(garden.compiler._STAR_flags_STAR_));
});
/**
 * Return the current list of auto-prefixed properties specified in `*flags*`.
 */
garden.compiler.auto_prefixed_properties = (function garden$compiler$auto_prefixed_properties(){
return cljs.core.set.call(null,cljs.core.map.call(null,cljs.core.name,new cljs.core.Keyword(null,"auto-prefix","auto-prefix",1484803466).cljs$core$IFn$_invoke$arity$1(garden.compiler._STAR_flags_STAR_)));
});
garden.compiler.auto_prefix_QMARK_ = (function garden$compiler$auto_prefix_QMARK_(property){
return cljs.core.contains_QMARK_.call(null,garden.compiler.auto_prefixed_properties.call(null),property);
});
garden.compiler.top_level_expression_QMARK_ = (function garden$compiler$top_level_expression_QMARK_(x){
var or__35392__auto__ = garden.util.rule_QMARK_.call(null,x);
if(cljs.core.truth_(or__35392__auto__)){
return or__35392__auto__;
} else {
var or__35392__auto____$1 = garden.util.at_import_QMARK_.call(null,x);
if(cljs.core.truth_(or__35392__auto____$1)){
return or__35392__auto____$1;
} else {
var or__35392__auto____$2 = garden.util.at_media_QMARK_.call(null,x);
if(cljs.core.truth_(or__35392__auto____$2)){
return or__35392__auto____$2;
} else {
return garden.util.at_keyframes_QMARK_.call(null,x);
}
}
}
});
/**
 * Return a vector of [(filter pred coll) (remove pred coll)].
 */
garden.compiler.divide_vec = (function garden$compiler$divide_vec(pred,coll){
return cljs.core.juxt.call(null,cljs.core.filter,cljs.core.remove).call(null,pred,coll);
});

/**
 * @interface
 */
garden.compiler.IExpandable = function(){};

/**
 * Return a list containing the expanded form of `this`.
 */
garden.compiler.expand = (function garden$compiler$expand(this$){
if((!((this$ == null))) && (!((this$.garden$compiler$IExpandable$expand$arity$1 == null)))){
return this$.garden$compiler$IExpandable$expand$arity$1(this$);
} else {
var x__36055__auto__ = (((this$ == null))?null:this$);
var m__36056__auto__ = (garden.compiler.expand[goog.typeOf(x__36055__auto__)]);
if(!((m__36056__auto__ == null))){
return m__36056__auto__.call(null,this$);
} else {
var m__36056__auto____$1 = (garden.compiler.expand["_"]);
if(!((m__36056__auto____$1 == null))){
return m__36056__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IExpandable.expand",this$);
}
}
}
});

/**
 * Like flatten but only affects seqs.
 */
garden.compiler.expand_seqs = (function garden$compiler$expand_seqs(coll){
return cljs.core.mapcat.call(null,(function (x){
if(cljs.core.seq_QMARK_.call(null,x)){
return garden$compiler$expand_seqs.call(null,x);
} else {
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x);
}
}),coll);
});
garden.compiler.expand_declaration_1 = (function garden$compiler$expand_declaration_1(d){
var prefix = (function (p1__284903_SHARP_,p2__284904_SHARP_){
return garden.util.as_str.call(null,p1__284903_SHARP_,"-",p2__284904_SHARP_);
});
return cljs.core.reduce.call(null,((function (prefix){
return (function (m,p__284910){
var vec__284911 = p__284910;
var k = cljs.core.nth.call(null,vec__284911,(0),null);
var v = cljs.core.nth.call(null,vec__284911,(1),null);
if(cljs.core.truth_(garden.util.hash_map_QMARK_.call(null,v))){
return cljs.core.reduce.call(null,((function (vec__284911,k,v,prefix){
return (function (m1,p__284912){
var vec__284913 = p__284912;
var k1 = cljs.core.nth.call(null,vec__284913,(0),null);
var v1 = cljs.core.nth.call(null,vec__284913,(1),null);
return cljs.core.assoc.call(null,m1,prefix.call(null,k,k1),v1);
});})(vec__284911,k,v,prefix))
,m,garden$compiler$expand_declaration_1.call(null,v));
} else {
return cljs.core.assoc.call(null,m,garden.util.to_str.call(null,k),v);
}
});})(prefix))
,cljs.core.PersistentArrayMap.EMPTY,d);
});
garden.compiler.expand_declaration = (function garden$compiler$expand_declaration(d){
if(cljs.core.seq.call(null,d)){
return cljs.core.with_meta.call(null,garden.compiler.expand_declaration_1.call(null,d),cljs.core.meta.call(null,d));
} else {
return null;
}
});
/**
 * Matches a single "&" or "&" follow by one or more 
 *   non-whitespace characters.
 */
garden.compiler.parent_selector_re = /^&(?:\S+)?$/;
/**
 * Extract the selector portion of a parent selector reference.
 */
garden.compiler.extract_reference = (function garden$compiler$extract_reference(selector){
var temp__4657__auto__ = cljs.core.re_find.call(null,garden.compiler.parent_selector_re,garden.util.to_str.call(null,cljs.core.last.call(null,selector)));
if(cljs.core.truth_(temp__4657__auto__)){
var reference = temp__4657__auto__;
return cljs.core.apply.call(null,cljs.core.str,cljs.core.rest.call(null,reference));
} else {
return null;
}
});
garden.compiler.expand_selector_reference = (function garden$compiler$expand_selector_reference(selector){
var temp__4655__auto__ = garden.compiler.extract_reference.call(null,selector);
if(cljs.core.truth_(temp__4655__auto__)){
var reference = temp__4655__auto__;
var parent = cljs.core.butlast.call(null,selector);
return cljs.core.concat.call(null,cljs.core.butlast.call(null,parent),cljs.core._conj.call(null,cljs.core.List.EMPTY,garden.util.as_str.call(null,cljs.core.last.call(null,parent),reference)));
} else {
return selector;
}
});
garden.compiler.expand_selector = (function garden$compiler$expand_selector(selector,parent){
var selector__$1 = cljs.core.map.call(null,garden.selectors.css_selector,selector);
var selector__$2 = ((cljs.core.seq.call(null,parent))?cljs.core.map.call(null,cljs.core.flatten,garden.util.cartesian_product.call(null,parent,selector__$1)):cljs.core.map.call(null,cljs.core.list,selector__$1));
return cljs.core.map.call(null,garden.compiler.expand_selector_reference,selector__$2);
});
garden.compiler.expand_rule = (function garden$compiler$expand_rule(rule){
var vec__284944 = cljs.core.split_with.call(null,garden.selectors.selector_QMARK_,rule);
var selector = cljs.core.nth.call(null,vec__284944,(0),null);
var children = cljs.core.nth.call(null,vec__284944,(1),null);
var selector__$1 = garden.compiler.expand_selector.call(null,selector,garden.compiler._STAR_selector_context_STAR_);
var children__$1 = garden.compiler.expand.call(null,children);
var vec__284945 = garden.compiler.divide_vec.call(null,garden.util.declaration_QMARK_,children__$1);
var declarations = cljs.core.nth.call(null,vec__284945,(0),null);
var xs = cljs.core.nth.call(null,vec__284945,(1),null);
var ys = (function (){var _STAR_selector_context_STAR_284946 = garden.compiler._STAR_selector_context_STAR_;
garden.compiler._STAR_selector_context_STAR_ = ((cljs.core.seq.call(null,selector__$1))?selector__$1:garden.compiler._STAR_selector_context_STAR_);

try{return cljs.core.doall.call(null,cljs.core.mapcat.call(null,garden.compiler.expand,xs));
}finally {garden.compiler._STAR_selector_context_STAR_ = _STAR_selector_context_STAR_284946;
}})();
return cljs.core.conj.call(null,ys,cljs.core.conj.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector__$1], null),cljs.core.mapcat.call(null,garden.compiler.expand,declarations)));
});
if(typeof garden.compiler.expand_at_rule !== 'undefined'){
} else {
garden.compiler.expand_at_rule = (function (){var method_table__36316__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__36317__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__36318__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__36319__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__36320__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"garden.compiler","expand-at-rule"),new cljs.core.Keyword(null,"identifier","identifier",-805503498),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__36320__auto__,method_table__36316__auto__,prefer_table__36317__auto__,method_cache__36318__auto__,cached_hierarchy__36319__auto__));
})();
}
cljs.core._add_method.call(null,garden.compiler.expand_at_rule,new cljs.core.Keyword(null,"default","default",-1987822328),(function (at_rule){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,at_rule);
}));
cljs.core._add_method.call(null,garden.compiler.expand_at_rule,new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012),(function (p__284962){
var map__284963 = p__284962;
var map__284963__$1 = ((((!((map__284963 == null)))?((((map__284963.cljs$lang$protocol_mask$partition0$ & (64))) || (map__284963.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__284963):map__284963);
var value = cljs.core.get.call(null,map__284963__$1,new cljs.core.Keyword(null,"value","value",305978217));
var map__284965 = value;
var map__284965__$1 = ((((!((map__284965 == null)))?((((map__284965.cljs$lang$protocol_mask$partition0$ & (64))) || (map__284965.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__284965):map__284965);
var identifier = cljs.core.get.call(null,map__284965__$1,new cljs.core.Keyword(null,"identifier","identifier",-805503498));
var frames = cljs.core.get.call(null,map__284965__$1,new cljs.core.Keyword(null,"frames","frames",1765687497));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,(new garden.types.CSSAtRule(new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"identifier","identifier",-805503498),garden.util.to_str.call(null,identifier),new cljs.core.Keyword(null,"frames","frames",1765687497),cljs.core.mapcat.call(null,garden.compiler.expand,frames)], null),null,null,null)));
}));
garden.compiler.expand_media_query_expression = (function garden$compiler$expand_media_query_expression(expression){
var temp__4655__auto__ = garden.compiler.media_expression_behavior.call(null,cljs.core.get_in.call(null,garden.compiler._STAR_flags_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"media-expressions","media-expressions",1920421643),new cljs.core.Keyword(null,"nesting-behavior","nesting-behavior",-1555995755)], null)));
if(cljs.core.truth_(temp__4655__auto__)){
var f = temp__4655__auto__;
return f.call(null,expression,garden.compiler._STAR_media_query_context_STAR_);
} else {
return expression;
}
});
cljs.core._add_method.call(null,garden.compiler.expand_at_rule,new cljs.core.Keyword(null,"media","media",-1066138403),(function (p__284977){
var map__284978 = p__284977;
var map__284978__$1 = ((((!((map__284978 == null)))?((((map__284978.cljs$lang$protocol_mask$partition0$ & (64))) || (map__284978.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__284978):map__284978);
var value = cljs.core.get.call(null,map__284978__$1,new cljs.core.Keyword(null,"value","value",305978217));
var map__284980 = value;
var map__284980__$1 = ((((!((map__284980 == null)))?((((map__284980.cljs$lang$protocol_mask$partition0$ & (64))) || (map__284980.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__284980):map__284980);
var media_queries = cljs.core.get.call(null,map__284980__$1,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678));
var rules = cljs.core.get.call(null,map__284980__$1,new cljs.core.Keyword(null,"rules","rules",1198912366));
var media_queries__$1 = garden.compiler.expand_media_query_expression.call(null,media_queries);
var xs = (function (){var _STAR_media_query_context_STAR_284986 = garden.compiler._STAR_media_query_context_STAR_;
garden.compiler._STAR_media_query_context_STAR_ = media_queries__$1;

try{return cljs.core.doall.call(null,cljs.core.mapcat.call(null,garden.compiler.expand,garden.compiler.expand.call(null,rules)));
}finally {garden.compiler._STAR_media_query_context_STAR_ = _STAR_media_query_context_STAR_284986;
}})();
var vec__284981 = garden.compiler.divide_vec.call(null,garden.util.at_media_QMARK_,xs);
var subqueries = cljs.core.nth.call(null,vec__284981,(0),null);
var rules__$1 = cljs.core.nth.call(null,vec__284981,(1),null);
return cljs.core.cons.call(null,(new garden.types.CSSAtRule(new cljs.core.Keyword(null,"media","media",-1066138403),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),media_queries__$1,new cljs.core.Keyword(null,"rules","rules",1198912366),rules__$1], null),null,null,null)),subqueries);
}));
garden.compiler.expand_stylesheet = (function garden$compiler$expand_stylesheet(xs){
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,garden.compiler.expand,garden.compiler.expand.call(null,xs)));
});
(garden.compiler.IExpandable["null"] = true);

(garden.compiler.expand["null"] = (function (this$){
return null;
}));

cljs.core.IndexedSeq.prototype.garden$compiler$IExpandable$ = true;

cljs.core.IndexedSeq.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.expand_seqs.call(null,this$__$1);
});

cljs.core.LazySeq.prototype.garden$compiler$IExpandable$ = true;

cljs.core.LazySeq.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.expand_seqs.call(null,this$__$1);
});

cljs.core.NodeSeq.prototype.garden$compiler$IExpandable$ = true;

cljs.core.NodeSeq.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.expand_seqs.call(null,this$__$1);
});

cljs.core.BlackNode.prototype.garden$compiler$IExpandable$ = true;

cljs.core.BlackNode.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.expand_rule.call(null,this$__$1);
});

cljs.core.PersistentArrayMapSeq.prototype.garden$compiler$IExpandable$ = true;

cljs.core.PersistentArrayMapSeq.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.expand_seqs.call(null,this$__$1);
});

cljs.core.ChunkedSeq.prototype.garden$compiler$IExpandable$ = true;

cljs.core.ChunkedSeq.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.expand_seqs.call(null,this$__$1);
});

cljs.core.Cons.prototype.garden$compiler$IExpandable$ = true;

cljs.core.Cons.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.expand_seqs.call(null,this$__$1);
});

cljs.core.RSeq.prototype.garden$compiler$IExpandable$ = true;

cljs.core.RSeq.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.expand_seqs.call(null,this$__$1);
});

garden.types.CSSFunction.prototype.garden$compiler$IExpandable$ = true;

garden.types.CSSFunction.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,this$__$1);
});

cljs.core.PersistentHashMap.prototype.garden$compiler$IExpandable$ = true;

cljs.core.PersistentHashMap.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,garden.compiler.expand_declaration.call(null,this$__$1));
});

cljs.core.ArrayNodeSeq.prototype.garden$compiler$IExpandable$ = true;

cljs.core.ArrayNodeSeq.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.expand_seqs.call(null,this$__$1);
});

cljs.core.Subvec.prototype.garden$compiler$IExpandable$ = true;

cljs.core.Subvec.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.expand_rule.call(null,this$__$1);
});

(garden.compiler.IExpandable["_"] = true);

(garden.compiler.expand["_"] = (function (this$){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,this$);
}));

cljs.core.PersistentTreeMap.prototype.garden$compiler$IExpandable$ = true;

cljs.core.PersistentTreeMap.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,garden.compiler.expand_declaration.call(null,this$__$1));
});

cljs.core.ChunkedCons.prototype.garden$compiler$IExpandable$ = true;

cljs.core.ChunkedCons.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.expand_seqs.call(null,this$__$1);
});

garden.types.CSSAtRule.prototype.garden$compiler$IExpandable$ = true;

garden.types.CSSAtRule.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.expand_at_rule.call(null,this$__$1);
});

cljs.core.RedNode.prototype.garden$compiler$IExpandable$ = true;

cljs.core.RedNode.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.expand_rule.call(null,this$__$1);
});

cljs.core.PersistentVector.prototype.garden$compiler$IExpandable$ = true;

cljs.core.PersistentVector.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.expand_rule.call(null,this$__$1);
});

cljs.core.PersistentArrayMap.prototype.garden$compiler$IExpandable$ = true;

cljs.core.PersistentArrayMap.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,garden.compiler.expand_declaration.call(null,this$__$1));
});

garden.color.CSSColor.prototype.garden$compiler$IExpandable$ = true;

garden.color.CSSColor.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,this$__$1);
});

cljs.core.List.prototype.garden$compiler$IExpandable$ = true;

cljs.core.List.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.expand_seqs.call(null,this$__$1);
});

/**
 * @interface
 */
garden.compiler.CSSRenderer = function(){};

/**
 * Convert a Clojure data type in to a string of CSS.
 */
garden.compiler.render_css = (function garden$compiler$render_css(this$){
if((!((this$ == null))) && (!((this$.garden$compiler$CSSRenderer$render_css$arity$1 == null)))){
return this$.garden$compiler$CSSRenderer$render_css$arity$1(this$);
} else {
var x__36055__auto__ = (((this$ == null))?null:this$);
var m__36056__auto__ = (garden.compiler.render_css[goog.typeOf(x__36055__auto__)]);
if(!((m__36056__auto__ == null))){
return m__36056__auto__.call(null,this$);
} else {
var m__36056__auto____$1 = (garden.compiler.render_css["_"]);
if(!((m__36056__auto____$1 == null))){
return m__36056__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"CSSRenderer.render-css",this$);
}
}
}
});

garden.compiler.comma = ", ";
garden.compiler.colon = ": ";
garden.compiler.semicolon = ";";
garden.compiler.l_brace = " {\n";
garden.compiler.r_brace = "\n}";
garden.compiler.l_brace_1 = " {\n\n";
garden.compiler.r_brace_1 = "\n\n}";
garden.compiler.rule_sep = "\n\n";
garden.compiler.indent = "  ";
/**
 * Return a space separated list of values.
 */
garden.compiler.space_separated_list = (function garden$compiler$space_separated_list(var_args){
var args285069 = [];
var len__36461__auto___285073 = arguments.length;
var i__36462__auto___285074 = (0);
while(true){
if((i__36462__auto___285074 < len__36461__auto___285073)){
args285069.push((arguments[i__36462__auto___285074]));

var G__285075 = (i__36462__auto___285074 + (1));
i__36462__auto___285074 = G__285075;
continue;
} else {
}
break;
}

var G__285072 = args285069.length;
switch (G__285072) {
case 1:
return garden.compiler.space_separated_list.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return garden.compiler.space_separated_list.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args285069.length)].join('')));

}
});

garden.compiler.space_separated_list.cljs$core$IFn$_invoke$arity$1 = (function (xs){
return garden.compiler.space_separated_list.call(null,garden.compiler.render_css,xs);
});

garden.compiler.space_separated_list.cljs$core$IFn$_invoke$arity$2 = (function (f,xs){
return clojure.string.join.call(null," ",cljs.core.map.call(null,f,xs));
});

garden.compiler.space_separated_list.cljs$lang$maxFixedArity = 2;
/**
 * Return a comma separated list of values. Subsequences are joined with
 * spaces.
 */
garden.compiler.comma_separated_list = (function garden$compiler$comma_separated_list(var_args){
var args285085 = [];
var len__36461__auto___285102 = arguments.length;
var i__36462__auto___285103 = (0);
while(true){
if((i__36462__auto___285103 < len__36461__auto___285102)){
args285085.push((arguments[i__36462__auto___285103]));

var G__285104 = (i__36462__auto___285103 + (1));
i__36462__auto___285103 = G__285104;
continue;
} else {
}
break;
}

var G__285091 = args285085.length;
switch (G__285091) {
case 1:
return garden.compiler.comma_separated_list.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return garden.compiler.comma_separated_list.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args285085.length)].join('')));

}
});

garden.compiler.comma_separated_list.cljs$core$IFn$_invoke$arity$1 = (function (xs){
return garden.compiler.comma_separated_list.call(null,garden.compiler.render_css,xs);
});

garden.compiler.comma_separated_list.cljs$core$IFn$_invoke$arity$2 = (function (f,xs){
var ys = (function (){var iter__36172__auto__ = (function garden$compiler$iter__285092(s__285093){
return (new cljs.core.LazySeq(null,(function (){
var s__285093__$1 = s__285093;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__285093__$1);
if(temp__4657__auto__){
var s__285093__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__285093__$2)){
var c__36170__auto__ = cljs.core.chunk_first.call(null,s__285093__$2);
var size__36171__auto__ = cljs.core.count.call(null,c__36170__auto__);
var b__285095 = cljs.core.chunk_buffer.call(null,size__36171__auto__);
if((function (){var i__285094 = (0);
while(true){
if((i__285094 < size__36171__auto__)){
var x = cljs.core._nth.call(null,c__36170__auto__,i__285094);
cljs.core.chunk_append.call(null,b__285095,((cljs.core.sequential_QMARK_.call(null,x))?garden.compiler.space_separated_list.call(null,f,x):f.call(null,x)));

var G__285117 = (i__285094 + (1));
i__285094 = G__285117;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__285095),garden$compiler$iter__285092.call(null,cljs.core.chunk_rest.call(null,s__285093__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__285095),null);
}
} else {
var x = cljs.core.first.call(null,s__285093__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?garden.compiler.space_separated_list.call(null,f,x):f.call(null,x)),garden$compiler$iter__285092.call(null,cljs.core.rest.call(null,s__285093__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__36172__auto__.call(null,xs);
})();
return clojure.string.join.call(null,garden.compiler.comma,ys);
});

garden.compiler.comma_separated_list.cljs$lang$maxFixedArity = 2;
garden.compiler.rule_join = (function garden$compiler$rule_join(xs){
return clojure.string.join.call(null,garden.compiler.rule_sep,xs);
});
/**
 * Match the start of a line if the characters immediately
 *   after it are spaces or used in a CSS id (#), class (.), or tag name.
 */
garden.compiler.indent_loc_re = (new RegExp("(?=[ A-Za-z#.}-]+)^","gm"));
garden.compiler.indent_str = (function garden$compiler$indent_str(s){
return s.replace(garden.compiler.indent_loc_re,garden.compiler.indent);
});
/**
 * Render the value portion of a declaration.
 */
garden.compiler.render_value = (function garden$compiler$render_value(x){
if(cljs.core.truth_(garden.util.at_keyframes_QMARK_.call(null,x))){
return garden.util.to_str.call(null,cljs.core.get_in.call(null,x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"identifier","identifier",-805503498)], null)));
} else {
return garden.compiler.render_css.call(null,x);
}
});
garden.compiler.render_property_and_value = (function garden$compiler$render_property_and_value(p__285129){
var vec__285131 = p__285129;
var prop = cljs.core.nth.call(null,vec__285131,(0),null);
var val = cljs.core.nth.call(null,vec__285131,(1),null);
if(cljs.core.set_QMARK_.call(null,val)){
return clojure.string.join.call(null,"\n",cljs.core.map.call(null,garden$compiler$render_property_and_value,cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,cljs.core.repeat.call(null,prop),val))));
} else {
var val__$1 = ((cljs.core.sequential_QMARK_.call(null,val))?garden.compiler.comma_separated_list.call(null,garden.compiler.render_value,val):garden.compiler.render_value.call(null,val));
return garden.util.as_str.call(null,prop,garden.compiler.colon,val__$1,garden.compiler.semicolon);
}
});
/**
 * For each block in `declaration`, add sequence of blocks
 * returned from calling `f` on the block.
 */
garden.compiler.add_blocks = (function garden$compiler$add_blocks(f,declaration){
return cljs.core.mapcat.call(null,(function (p1__285133_SHARP_){
return cljs.core.cons.call(null,p1__285133_SHARP_,f.call(null,p1__285133_SHARP_));
}),declaration);
});
/**
 * Sequence of blocks with their properties prefixed by
 * each vendor in `vendors`.
 */
garden.compiler.prefixed_blocks = (function garden$compiler$prefixed_blocks(vendors,p__285134){
var vec__285141 = p__285134;
var p = cljs.core.nth.call(null,vec__285141,(0),null);
var v = cljs.core.nth.call(null,vec__285141,(1),null);
var iter__36172__auto__ = ((function (vec__285141,p,v){
return (function garden$compiler$prefixed_blocks_$_iter__285142(s__285143){
return (new cljs.core.LazySeq(null,((function (vec__285141,p,v){
return (function (){
var s__285143__$1 = s__285143;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__285143__$1);
if(temp__4657__auto__){
var s__285143__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__285143__$2)){
var c__36170__auto__ = cljs.core.chunk_first.call(null,s__285143__$2);
var size__36171__auto__ = cljs.core.count.call(null,c__36170__auto__);
var b__285145 = cljs.core.chunk_buffer.call(null,size__36171__auto__);
if((function (){var i__285144 = (0);
while(true){
if((i__285144 < size__36171__auto__)){
var vendor = cljs.core._nth.call(null,c__36170__auto__,i__285144);
cljs.core.chunk_append.call(null,b__285145,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [garden.util.vendor_prefix.call(null,vendor,cljs.core.name.call(null,p)),v], null));

var G__285147 = (i__285144 + (1));
i__285144 = G__285147;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__285145),garden$compiler$prefixed_blocks_$_iter__285142.call(null,cljs.core.chunk_rest.call(null,s__285143__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__285145),null);
}
} else {
var vendor = cljs.core.first.call(null,s__285143__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [garden.util.vendor_prefix.call(null,vendor,cljs.core.name.call(null,p)),v], null),garden$compiler$prefixed_blocks_$_iter__285142.call(null,cljs.core.rest.call(null,s__285143__$2)));
}
} else {
return null;
}
break;
}
});})(vec__285141,p,v))
,null,null));
});})(vec__285141,p,v))
;
return iter__36172__auto__.call(null,vendors);
});
/**
 * Add prefixes to all blocks in `declaration` using
 * vendor prefixes in `vendors`.
 */
garden.compiler.prefix_all_properties = (function garden$compiler$prefix_all_properties(vendors,declaration){
return garden.compiler.add_blocks.call(null,cljs.core.partial.call(null,garden.compiler.prefixed_blocks,vendors),declaration);
});
/**
 * Add prefixes to all blocks in `declaration` when property
 * is in the `:auto-prefix` set.
 */
garden.compiler.prefix_auto_properties = (function garden$compiler$prefix_auto_properties(vendors,declaration){
return garden.compiler.add_blocks.call(null,(function (block){
var vec__285154 = block;
var p = cljs.core.nth.call(null,vec__285154,(0),null);
var _ = cljs.core.nth.call(null,vec__285154,(1),null);
if(cljs.core.truth_(garden.compiler.auto_prefix_QMARK_.call(null,cljs.core.name.call(null,p)))){
return garden.compiler.prefixed_blocks.call(null,vendors,block);
} else {
return null;
}
}),declaration);
});
/**
 * Prefix properties within a `declaration` if `{:prefix true}` is
 * set in its meta, or if a property is in the `:auto-prefix` set.
 */
garden.compiler.prefix_declaration = (function garden$compiler$prefix_declaration(declaration){
var vendors = (function (){var or__35392__auto__ = new cljs.core.Keyword(null,"vendors","vendors",-153040496).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,declaration));
if(cljs.core.truth_(or__35392__auto__)){
return or__35392__auto__;
} else {
return garden.compiler.vendors.call(null);
}
})();
var prefix_fn = (cljs.core.truth_(new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,declaration)))?garden.compiler.prefix_all_properties:garden.compiler.prefix_auto_properties);
return prefix_fn.call(null,vendors,declaration);
});
garden.compiler.render_declaration = (function garden$compiler$render_declaration(declaration){
return clojure.string.join.call(null,"\n",cljs.core.map.call(null,garden.compiler.render_property_and_value,garden.compiler.prefix_declaration.call(null,declaration)));
});
garden.compiler.render_selector = (function garden$compiler$render_selector(selector){
return garden.compiler.comma_separated_list.call(null,selector);
});
/**
 * Convert a vector to a CSS rule string. The vector is expected to be
 *   fully expanded.
 */
garden.compiler.render_rule = (function garden$compiler$render_rule(p__285167){
var vec__285169 = p__285167;
var selector = cljs.core.nth.call(null,vec__285169,(0),null);
var declarations = cljs.core.nth.call(null,vec__285169,(1),null);
var rule = vec__285169;
if((cljs.core.seq.call(null,rule)) && (cljs.core.every_QMARK_.call(null,cljs.core.seq,rule))){
return [cljs.core.str(garden.compiler.render_selector.call(null,selector)),cljs.core.str(garden.compiler.l_brace),cljs.core.str(garden.compiler.indent_str.call(null,clojure.string.join.call(null,"\n",cljs.core.map.call(null,garden.compiler.render_css,declarations)))),cljs.core.str(garden.compiler.r_brace)].join('');
} else {
return null;
}
});
/**
 * Render the individual components of a media expression.
 */
garden.compiler.render_media_expr_part = (function garden$compiler$render_media_expr_part(p__285177){
var vec__285181 = p__285177;
var k = cljs.core.nth.call(null,vec__285181,(0),null);
var v = cljs.core.nth.call(null,vec__285181,(1),null);
var vec__285182 = cljs.core.map.call(null,garden.compiler.render_value,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
var sk = cljs.core.nth.call(null,vec__285182,(0),null);
var sv = cljs.core.nth.call(null,vec__285182,(1),null);
if(v === true){
return sk;
} else {
if(v === false){
return [cljs.core.str("not "),cljs.core.str(sk)].join('');
} else {
if(cljs.core._EQ_.call(null,"only",sv)){
return [cljs.core.str("only "),cljs.core.str(sk)].join('');
} else {
if(cljs.core.truth_((function (){var and__35380__auto__ = v;
if(cljs.core.truth_(and__35380__auto__)){
return cljs.core.seq.call(null,sv);
} else {
return and__35380__auto__;
}
})())){
return [cljs.core.str("("),cljs.core.str(sk),cljs.core.str(garden.compiler.colon),cljs.core.str(sv),cljs.core.str(")")].join('');
} else {
return [cljs.core.str("("),cljs.core.str(sk),cljs.core.str(")")].join('');
}

}
}
}
});
/**
 * Make a media query expession from one or more maps. Keys are not
 *   validated but values have the following semantics:
 *   
 *  `true`  as in `{:screen true}`  == "screen"
 *  `false` as in `{:screen false}` == "not screen"
 *  `:only` as in `{:screen :only}  == "only screen"
 */
garden.compiler.render_media_expr = (function garden$compiler$render_media_expr(expr){
if(cljs.core.sequential_QMARK_.call(null,expr)){
return garden.compiler.comma_separated_list.call(null,cljs.core.map.call(null,garden$compiler$render_media_expr,expr));
} else {
return clojure.string.join.call(null," and ",cljs.core.map.call(null,garden.compiler.render_media_expr_part,expr));
}
});
/**
 * Render a CSSUnit.
 */
garden.compiler.render_unit = (function garden$compiler$render_unit(css_unit){
var map__285188 = css_unit;
var map__285188__$1 = ((((!((map__285188 == null)))?((((map__285188.cljs$lang$protocol_mask$partition0$ & (64))) || (map__285188.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__285188):map__285188);
var magnitude = cljs.core.get.call(null,map__285188__$1,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222));
var unit = cljs.core.get.call(null,map__285188__$1,new cljs.core.Keyword(null,"unit","unit",375175175));
var magnitude__$1 = magnitude;
return [cljs.core.str(magnitude__$1),cljs.core.str(cljs.core.name.call(null,unit))].join('');
});
/**
 * Render a CSS function.
 */
garden.compiler.render_function = (function garden$compiler$render_function(css_function){
var map__285193 = css_function;
var map__285193__$1 = ((((!((map__285193 == null)))?((((map__285193.cljs$lang$protocol_mask$partition0$ & (64))) || (map__285193.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__285193):map__285193);
var function$ = cljs.core.get.call(null,map__285193__$1,new cljs.core.Keyword(null,"function","function",-2127255473));
var args = cljs.core.get.call(null,map__285193__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var args__$1 = ((cljs.core.sequential_QMARK_.call(null,args))?garden.compiler.comma_separated_list.call(null,args):garden.util.to_str.call(null,args));
return garden.util.format.call(null,"%s(%s)",garden.util.to_str.call(null,function$),args__$1);
});
garden.compiler.render_color = (function garden$compiler$render_color(c){
var temp__4655__auto__ = new cljs.core.Keyword(null,"alpha","alpha",-1574982441).cljs$core$IFn$_invoke$arity$1(c);
if(cljs.core.truth_(temp__4655__auto__)){
var a = temp__4655__auto__;
var map__285199 = garden.color.as_hsl.call(null,c);
var map__285199__$1 = ((((!((map__285199 == null)))?((((map__285199.cljs$lang$protocol_mask$partition0$ & (64))) || (map__285199.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__285199):map__285199);
var hue = cljs.core.get.call(null,map__285199__$1,new cljs.core.Keyword(null,"hue","hue",-508078848));
var saturation = cljs.core.get.call(null,map__285199__$1,new cljs.core.Keyword(null,"saturation","saturation",-14247929));
var lightness = cljs.core.get.call(null,map__285199__$1,new cljs.core.Keyword(null,"lightness","lightness",-2040901930));
var vec__285200 = cljs.core.map.call(null,garden.units.percent,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [saturation,lightness], null));
var s = cljs.core.nth.call(null,vec__285200,(0),null);
var l = cljs.core.nth.call(null,vec__285200,(1),null);
return garden.util.format.call(null,"hsla(%s)",garden.compiler.comma_separated_list.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [hue,s,l,a], null)));
} else {
return garden.color.as_hex.call(null,c);
}
});
if(typeof garden.compiler.render_at_rule !== 'undefined'){
} else {
/**
 * Render a CSS at-rule
 */
garden.compiler.render_at_rule = (function (){var method_table__36316__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__36317__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__36318__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__36319__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__36320__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"garden.compiler","render-at-rule"),new cljs.core.Keyword(null,"identifier","identifier",-805503498),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__36320__auto__,method_table__36316__auto__,prefer_table__36317__auto__,method_cache__36318__auto__,cached_hierarchy__36319__auto__));
})();
}
cljs.core._add_method.call(null,garden.compiler.render_at_rule,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return null;
}));
cljs.core._add_method.call(null,garden.compiler.render_at_rule,new cljs.core.Keyword(null,"import","import",-1399500709),(function (p__285204){
var map__285205 = p__285204;
var map__285205__$1 = ((((!((map__285205 == null)))?((((map__285205.cljs$lang$protocol_mask$partition0$ & (64))) || (map__285205.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__285205):map__285205);
var value = cljs.core.get.call(null,map__285205__$1,new cljs.core.Keyword(null,"value","value",305978217));
var map__285208 = value;
var map__285208__$1 = ((((!((map__285208 == null)))?((((map__285208.cljs$lang$protocol_mask$partition0$ & (64))) || (map__285208.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__285208):map__285208);
var url = cljs.core.get.call(null,map__285208__$1,new cljs.core.Keyword(null,"url","url",276297046));
var media_queries = cljs.core.get.call(null,map__285208__$1,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678));
var url__$1 = ((typeof url === 'string')?garden.util.wrap_quotes.call(null,url):garden.compiler.render_css.call(null,url));
var queries = (cljs.core.truth_(media_queries)?garden.compiler.render_media_expr.call(null,media_queries):null);
return [cljs.core.str("@import "),cljs.core.str((cljs.core.truth_(queries)?[cljs.core.str(url__$1),cljs.core.str(" "),cljs.core.str(queries)].join(''):url__$1)),cljs.core.str(garden.compiler.semicolon)].join('');
}));
cljs.core._add_method.call(null,garden.compiler.render_at_rule,new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012),(function (p__285218){
var map__285219 = p__285218;
var map__285219__$1 = ((((!((map__285219 == null)))?((((map__285219.cljs$lang$protocol_mask$partition0$ & (64))) || (map__285219.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__285219):map__285219);
var value = cljs.core.get.call(null,map__285219__$1,new cljs.core.Keyword(null,"value","value",305978217));
var map__285221 = value;
var map__285221__$1 = ((((!((map__285221 == null)))?((((map__285221.cljs$lang$protocol_mask$partition0$ & (64))) || (map__285221.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__285221):map__285221);
var identifier = cljs.core.get.call(null,map__285221__$1,new cljs.core.Keyword(null,"identifier","identifier",-805503498));
var frames = cljs.core.get.call(null,map__285221__$1,new cljs.core.Keyword(null,"frames","frames",1765687497));
if(cljs.core.seq.call(null,frames)){
var body = [cljs.core.str(garden.util.to_str.call(null,identifier)),cljs.core.str(garden.compiler.l_brace_1),cljs.core.str(garden.compiler.indent_str.call(null,garden.compiler.rule_join.call(null,cljs.core.map.call(null,garden.compiler.render_css,frames)))),cljs.core.str(garden.compiler.r_brace_1)].join('');
var prefix = ((function (body,map__285221,map__285221__$1,identifier,frames,map__285219,map__285219__$1,value){
return (function (vendor){
return [cljs.core.str("@"),cljs.core.str(garden.util.vendor_prefix.call(null,vendor,"keyframes "))].join('');
});})(body,map__285221,map__285221__$1,identifier,frames,map__285219,map__285219__$1,value))
;
return garden.compiler.rule_join.call(null,cljs.core.map.call(null,((function (body,prefix,map__285221,map__285221__$1,identifier,frames,map__285219,map__285219__$1,value){
return (function (p1__285217_SHARP_){
return [cljs.core.str(p1__285217_SHARP_),cljs.core.str(body)].join('');
});})(body,prefix,map__285221,map__285221__$1,identifier,frames,map__285219,map__285219__$1,value))
,cljs.core.cons.call(null,"@keyframes ",cljs.core.map.call(null,prefix,garden.compiler.vendors.call(null)))));
} else {
return null;
}
}));
cljs.core._add_method.call(null,garden.compiler.render_at_rule,new cljs.core.Keyword(null,"media","media",-1066138403),(function (p__285230){
var map__285231 = p__285230;
var map__285231__$1 = ((((!((map__285231 == null)))?((((map__285231.cljs$lang$protocol_mask$partition0$ & (64))) || (map__285231.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__285231):map__285231);
var value = cljs.core.get.call(null,map__285231__$1,new cljs.core.Keyword(null,"value","value",305978217));
var map__285233 = value;
var map__285233__$1 = ((((!((map__285233 == null)))?((((map__285233.cljs$lang$protocol_mask$partition0$ & (64))) || (map__285233.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__285233):map__285233);
var media_queries = cljs.core.get.call(null,map__285233__$1,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678));
var rules = cljs.core.get.call(null,map__285233__$1,new cljs.core.Keyword(null,"rules","rules",1198912366));
if(cljs.core.seq.call(null,rules)){
return [cljs.core.str("@media "),cljs.core.str(garden.compiler.render_media_expr.call(null,media_queries)),cljs.core.str(garden.compiler.l_brace_1),cljs.core.str(garden.compiler.indent_str.call(null,garden.compiler.rule_join.call(null,cljs.core.map.call(null,garden.compiler.render_css,rules)))),cljs.core.str(garden.compiler.r_brace_1)].join('');
} else {
return null;
}
}));
(garden.compiler.CSSRenderer["null"] = true);

(garden.compiler.render_css["null"] = (function (this$){
return "";
}));

garden.color.CSSColor.prototype.garden$compiler$CSSRenderer$ = true;

garden.color.CSSColor.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.render_color.call(null,this$__$1);
});

cljs.core.IndexedSeq.prototype.garden$compiler$CSSRenderer$ = true;

cljs.core.IndexedSeq.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.call(null,garden.compiler.render_css,this$__$1);
});

cljs.core.LazySeq.prototype.garden$compiler$CSSRenderer$ = true;

cljs.core.LazySeq.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.call(null,garden.compiler.render_css,this$__$1);
});

cljs.core.NodeSeq.prototype.garden$compiler$CSSRenderer$ = true;

cljs.core.NodeSeq.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.call(null,garden.compiler.render_css,this$__$1);
});

cljs.core.BlackNode.prototype.garden$compiler$CSSRenderer$ = true;

cljs.core.BlackNode.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.render_rule.call(null,this$__$1);
});

cljs.core.PersistentArrayMapSeq.prototype.garden$compiler$CSSRenderer$ = true;

cljs.core.PersistentArrayMapSeq.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.call(null,garden.compiler.render_css,this$__$1);
});

garden.types.CSSUnit.prototype.garden$compiler$CSSRenderer$ = true;

garden.types.CSSUnit.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.render_unit.call(null,this$__$1);
});

cljs.core.ChunkedSeq.prototype.garden$compiler$CSSRenderer$ = true;

cljs.core.ChunkedSeq.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.call(null,garden.compiler.render_css,this$__$1);
});

cljs.core.Cons.prototype.garden$compiler$CSSRenderer$ = true;

cljs.core.Cons.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.call(null,garden.compiler.render_css,this$__$1);
});

cljs.core.RSeq.prototype.garden$compiler$CSSRenderer$ = true;

cljs.core.RSeq.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.call(null,garden.compiler.render_css,this$__$1);
});

(garden.compiler.CSSRenderer["number"] = true);

(garden.compiler.render_css["number"] = (function (this$){
return [cljs.core.str(this$)].join('');
}));

garden.types.CSSFunction.prototype.garden$compiler$CSSRenderer$ = true;

garden.types.CSSFunction.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.render_function.call(null,this$__$1);
});

cljs.core.PersistentHashMap.prototype.garden$compiler$CSSRenderer$ = true;

cljs.core.PersistentHashMap.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.render_declaration.call(null,this$__$1);
});

cljs.core.ArrayNodeSeq.prototype.garden$compiler$CSSRenderer$ = true;

cljs.core.ArrayNodeSeq.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.call(null,garden.compiler.render_css,this$__$1);
});

cljs.core.Subvec.prototype.garden$compiler$CSSRenderer$ = true;

cljs.core.Subvec.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.render_rule.call(null,this$__$1);
});

(garden.compiler.CSSRenderer["_"] = true);

(garden.compiler.render_css["_"] = (function (this$){
return [cljs.core.str(this$)].join('');
}));

cljs.core.PersistentTreeMap.prototype.garden$compiler$CSSRenderer$ = true;

cljs.core.PersistentTreeMap.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.render_declaration.call(null,this$__$1);
});

cljs.core.ChunkedCons.prototype.garden$compiler$CSSRenderer$ = true;

cljs.core.ChunkedCons.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.call(null,garden.compiler.render_css,this$__$1);
});

garden.types.CSSAtRule.prototype.garden$compiler$CSSRenderer$ = true;

garden.types.CSSAtRule.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.render_at_rule.call(null,this$__$1);
});

cljs.core.RedNode.prototype.garden$compiler$CSSRenderer$ = true;

cljs.core.RedNode.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.render_rule.call(null,this$__$1);
});

cljs.core.PersistentVector.prototype.garden$compiler$CSSRenderer$ = true;

cljs.core.PersistentVector.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.render_rule.call(null,this$__$1);
});

cljs.core.Keyword.prototype.garden$compiler$CSSRenderer$ = true;

cljs.core.Keyword.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.name.call(null,this$__$1);
});

cljs.core.PersistentArrayMap.prototype.garden$compiler$CSSRenderer$ = true;

cljs.core.PersistentArrayMap.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.render_declaration.call(null,this$__$1);
});

cljs.core.List.prototype.garden$compiler$CSSRenderer$ = true;

cljs.core.List.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.call(null,garden.compiler.render_css,this$__$1);
});
/**
 * Convert a sequence of maps into CSS for use with the HTML style
 * attribute.
 */
garden.compiler.compile_style = (function garden$compiler$compile_style(ms){
return cljs.core.first.call(null,garden.compiler.render_css.call(null,garden.compiler.expand.call(null,cljs.core.reduce.call(null,cljs.core.merge,cljs.core.filter.call(null,garden.util.declaration_QMARK_,ms)))));
});
/**
 * Return a string of CSS.
 */
garden.compiler.do_compile = (function garden$compiler$do_compile(flags,rules){
var _STAR_flags_STAR_285270 = garden.compiler._STAR_flags_STAR_;
garden.compiler._STAR_flags_STAR_ = flags;

try{return garden.compiler.rule_join.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,garden.compiler.render_css,cljs.core.filter.call(null,garden.compiler.top_level_expression_QMARK_,garden.compiler.expand_stylesheet.call(null,rules)))));
}finally {garden.compiler._STAR_flags_STAR_ = _STAR_flags_STAR_285270;
}});
/**
 * Prefix stylesheet with files in preamble. Not available in
 *   ClojureScript.
 */
garden.compiler.do_preamble = (function garden$compiler$do_preamble(p__285275,stylesheet){
var map__285278 = p__285275;
var map__285278__$1 = ((((!((map__285278 == null)))?((((map__285278.cljs$lang$protocol_mask$partition0$ & (64))) || (map__285278.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__285278):map__285278);
var preamble = cljs.core.get.call(null,map__285278__$1,new cljs.core.Keyword(null,"preamble","preamble",1641040241));
return stylesheet;
});
/**
 * Compress CSS if the pretty-print(?) flag is true.
 */
garden.compiler.do_compression = (function garden$compiler$do_compression(p__285282,stylesheet){
var map__285286 = p__285282;
var map__285286__$1 = ((((!((map__285286 == null)))?((((map__285286.cljs$lang$protocol_mask$partition0$ & (64))) || (map__285286.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__285286):map__285286);
var pretty_print_QMARK_ = cljs.core.get.call(null,map__285286__$1,new cljs.core.Keyword(null,"pretty-print?","pretty-print?",1932217158));
var pretty_print = cljs.core.get.call(null,map__285286__$1,new cljs.core.Keyword(null,"pretty-print","pretty-print",-1314067013));
if(cljs.core.truth_((function (){var or__35392__auto__ = pretty_print_QMARK_;
if(cljs.core.truth_(or__35392__auto__)){
return or__35392__auto__;
} else {
return pretty_print;
}
})())){
return stylesheet;
} else {
return garden.compression.compress_stylesheet.call(null,stylesheet);
}
});
/**
 * Write contents of stylesheet to disk.
 */
garden.compiler.do_output_to = (function garden$compiler$do_output_to(p__285290,stylesheet){
var map__285293 = p__285290;
var map__285293__$1 = ((((!((map__285293 == null)))?((((map__285293.cljs$lang$protocol_mask$partition0$ & (64))) || (map__285293.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__285293):map__285293);
var output_to = cljs.core.get.call(null,map__285293__$1,new cljs.core.Keyword(null,"output-to","output-to",-965533968));
return stylesheet;
});
/**
 * Convert any number of Clojure data structures to CSS.
 */
garden.compiler.compile_css = (function garden$compiler$compile_css(var_args){
var args__36468__auto__ = [];
var len__36461__auto___285303 = arguments.length;
var i__36462__auto___285304 = (0);
while(true){
if((i__36462__auto___285304 < len__36461__auto___285303)){
args__36468__auto__.push((arguments[i__36462__auto___285304]));

var G__285305 = (i__36462__auto___285304 + (1));
i__36462__auto___285304 = G__285305;
continue;
} else {
}
break;
}

var argseq__36469__auto__ = ((((1) < args__36468__auto__.length))?(new cljs.core.IndexedSeq(args__36468__auto__.slice((1)),(0),null)):null);
return garden.compiler.compile_css.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36469__auto__);
});

garden.compiler.compile_css.cljs$core$IFn$_invoke$arity$variadic = (function (flags,rules){
var vec__285299 = (cljs.core.truth_((function (){var and__35380__auto__ = garden.util.hash_map_QMARK_.call(null,flags);
if(cljs.core.truth_(and__35380__auto__)){
return cljs.core.some.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,flags)),cljs.core.keys.call(null,garden.compiler._STAR_flags_STAR_));
} else {
return and__35380__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,garden.compiler._STAR_flags_STAR_,flags),rules], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [garden.compiler._STAR_flags_STAR_,cljs.core.cons.call(null,flags,rules)], null));
var flags__$1 = cljs.core.nth.call(null,vec__285299,(0),null);
var rules__$1 = cljs.core.nth.call(null,vec__285299,(1),null);
return garden.compiler.do_output_to.call(null,flags__$1,garden.compiler.do_compression.call(null,flags__$1,garden.compiler.do_preamble.call(null,flags__$1,garden.compiler.do_compile.call(null,flags__$1,rules__$1))));
});

garden.compiler.compile_css.cljs$lang$maxFixedArity = (1);

garden.compiler.compile_css.cljs$lang$applyTo = (function (seq285297){
var G__285298 = cljs.core.first.call(null,seq285297);
var seq285297__$1 = cljs.core.next.call(null,seq285297);
return garden.compiler.compile_css.cljs$core$IFn$_invoke$arity$variadic(G__285298,seq285297__$1);
});
