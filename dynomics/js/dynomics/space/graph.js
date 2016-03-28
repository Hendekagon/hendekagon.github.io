// Compiled by ClojureScript 1.8.40 {}
goog.provide('dynomics.space.graph');
goog.require('cljs.core');
goog.require('loom.alg');
goog.require('loom.graph');
dynomics.space.graph.__ = (function dynomics$space$graph$__(p__91070){
var vec__91072 = p__91070;
var a = cljs.core.nth.call(null,vec__91072,(0),null);
var b = cljs.core.nth.call(null,vec__91072,(1),null);
if((a < b)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,a], null);
}
});
dynomics.space.graph.simplify_edges = (function dynomics$space$graph$simplify_edges(edges){
return cljs.core.map.call(null,(function (p__91084){
var vec__91085 = p__91084;
var vec__91086 = cljs.core.nth.call(null,vec__91085,(0),null);
var _ = cljs.core.nth.call(null,vec__91086,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__91086,(1),null);
var nid1 = cljs.core.nth.call(null,vec__91086,(2),null);
var ___$2 = cljs.core.nth.call(null,vec__91086,(3),null);
var cid1 = cljs.core.nth.call(null,vec__91086,(4),null);
var vec__91087 = cljs.core.nth.call(null,vec__91085,(1),null);
var ___$3 = cljs.core.nth.call(null,vec__91087,(0),null);
var ___$4 = cljs.core.nth.call(null,vec__91087,(1),null);
var nid2 = cljs.core.nth.call(null,vec__91087,(2),null);
var ___$5 = cljs.core.nth.call(null,vec__91087,(3),null);
var cid2 = cljs.core.nth.call(null,vec__91087,(4),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid1,nid2], null);
}),edges);
});
/**
 * Returns a nested list of connections (paths to node connections)
 *   from the given edges [[node1 node2] [node3 node4]
 *   and edgez, a set of connection edges}
 */
dynomics.space.graph.as_connections = (function dynomics$space$graph$as_connections(edgez,edges){
var ebn = cljs.core.group_by.call(null,(function (p__91099){
var vec__91100 = p__91099;
var vec__91101 = cljs.core.nth.call(null,vec__91100,(0),null);
var _ = cljs.core.nth.call(null,vec__91101,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__91101,(1),null);
var nid1 = cljs.core.nth.call(null,vec__91101,(2),null);
var ___$2 = cljs.core.nth.call(null,vec__91101,(3),null);
var ___$3 = cljs.core.nth.call(null,vec__91101,(4),null);
var vec__91102 = cljs.core.nth.call(null,vec__91100,(1),null);
var ___$4 = cljs.core.nth.call(null,vec__91102,(0),null);
var ___$5 = cljs.core.nth.call(null,vec__91102,(1),null);
var nid2 = cljs.core.nth.call(null,vec__91102,(2),null);
var ___$6 = cljs.core.nth.call(null,vec__91102,(3),null);
var ___$7 = cljs.core.nth.call(null,vec__91102,(4),null);
return cljs.core.vec.call(null,cljs.core.sort.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid1,nid2], null)));
}),edgez);
return cljs.core.distinct.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.first,ebn,cljs.core.vec,cljs.core.sort),edges)));
});
dynomics.space.graph.as_edges = (function dynomics$space$graph$as_edges(m){
return cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.vec,cljs.core.partial.call(null,cljs.core.map,(function (x){
return (Math.abs(x) - (1));
})),cljs.core.sort,cljs.core.partial.call(null,cljs.core.remove,cljs.core.zero_QMARK_),(function (v){
return cljs.core.map.call(null,cljs.core._STAR_,v,cljs.core.range.call(null,(1),(cljs.core.count.call(null,v) + (1))));
})),m);
});
/**
 * 
 *   Returns an adjacency matrix representation of the given graph
 *   in undirected form.
 *   Assumes nodes are numbered from 0-n
 *   
 */
dynomics.space.graph.as_matrix = (function dynomics$space$graph$as_matrix(var_args){
var args91112 = [];
var len__26896__auto___91124 = arguments.length;
var i__26897__auto___91125 = (0);
while(true){
if((i__26897__auto___91125 < len__26896__auto___91124)){
args91112.push((arguments[i__26897__auto___91125]));

var G__91126 = (i__26897__auto___91125 + (1));
i__26897__auto___91125 = G__91126;
continue;
} else {
}
break;
}

var G__91116 = args91112.length;
switch (G__91116) {
case 1:
return dynomics.space.graph.as_matrix.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dynomics.space.graph.as_matrix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args91112.length)].join('')));

}
});

dynomics.space.graph.as_matrix.cljs$core$IFn$_invoke$arity$1 = (function (p__91117){
var map__91118 = p__91117;
var map__91118__$1 = ((((!((map__91118 == null)))?((((map__91118.cljs$lang$protocol_mask$partition0$ & (64))) || (map__91118.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__91118):map__91118);
var nodes = cljs.core.get.call(null,map__91118__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var edges = cljs.core.get.call(null,map__91118__$1,new cljs.core.Keyword(null,"edges","edges",-694791395));
return dynomics.space.graph.as_matrix.call(null,nodes,edges);
});

dynomics.space.graph.as_matrix.cljs$core$IFn$_invoke$arity$2 = (function (nodes,edges){
return cljs.core.reduce.call(null,(function (m,p__91120){
var vec__91121 = p__91120;
var vec__91122 = cljs.core.nth.call(null,vec__91121,(0),null);
var nid1 = cljs.core.nth.call(null,vec__91122,(0),null);
var nid2 = cljs.core.nth.call(null,vec__91122,(1),null);
var j = cljs.core.nth.call(null,vec__91121,(1),null);
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,nid1], null),(1)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,nid2], null),(1));
}),cljs.core.vec.call(null,cljs.core.repeatedly.call(null,cljs.core.count.call(null,edges),(function (){
return cljs.core.vec.call(null,cljs.core.repeat.call(null,cljs.core.count.call(null,nodes),(0)));
}))),cljs.core.map.call(null,cljs.core.vector,edges,cljs.core.range.call(null)));
});

dynomics.space.graph.as_matrix.cljs$lang$maxFixedArity = 2;
dynomics.space.graph.sum_graph = (function dynomics$space$graph$sum_graph(m){
if(cljs.core.empty_QMARK_.call(null,m)){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.reduce.call(null,cljs.core.partial.call(null,cljs.core.map,(function() { 
var G__91134__delegate = function (x){
return cljs.core.mod.call(null,cljs.core.reduce.call(null,cljs.core._PLUS_,x),(2));
};
var G__91134 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__91135__i = 0, G__91135__a = new Array(arguments.length -  0);
while (G__91135__i < G__91135__a.length) {G__91135__a[G__91135__i] = arguments[G__91135__i + 0]; ++G__91135__i;}
  x = new cljs.core.IndexedSeq(G__91135__a,0);
} 
return G__91134__delegate.call(this,x);};
G__91134.cljs$lang$maxFixedArity = 0;
G__91134.cljs$lang$applyTo = (function (arglist__91137){
var x = cljs.core.seq(arglist__91137);
return G__91134__delegate(x);
});
G__91134.cljs$core$IFn$_invoke$arity$variadic = G__91134__delegate;
return G__91134;
})()
),m);
}
});
dynomics.space.graph.nodes_from_sum = (function dynomics$space$graph$nodes_from_sum(s){
return cljs.core.reduce.call(null,(function (r,p__91140){
var vec__91141 = p__91140;
var n = cljs.core.nth.call(null,vec__91141,(0),null);
var i = cljs.core.nth.call(null,vec__91141,(1),null);
return cljs.core.reduce.call(null,((function (vec__91141,n,i){
return (function (r__$1,j){
return cljs.core.conj.call(null,r__$1,i);
});})(vec__91141,n,i))
,r,cljs.core.range.call(null,n));
}),cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.vector,s,cljs.core.range.call(null)));
});
dynomics.space.graph.pairs = (function dynomics$space$graph$pairs(l){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,cljs.core.sort,(function (){var iter__26607__auto__ = (function dynomics$space$graph$pairs_$_iter__91185(s__91186){
return (new cljs.core.LazySeq(null,(function (){
var s__91186__$1 = s__91186;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__91186__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var x = cljs.core.first.call(null,xs__5205__auto__);
var iterys__26603__auto__ = ((function (s__91186__$1,x,xs__5205__auto__,temp__4657__auto__){
return (function dynomics$space$graph$pairs_$_iter__91185_$_iter__91187(s__91188){
return (new cljs.core.LazySeq(null,((function (s__91186__$1,x,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__91188__$1 = s__91188;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__91188__$1);
if(temp__4657__auto____$1){
var s__91188__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__91188__$2)){
var c__26605__auto__ = cljs.core.chunk_first.call(null,s__91188__$2);
var size__26606__auto__ = cljs.core.count.call(null,c__26605__auto__);
var b__91190 = cljs.core.chunk_buffer.call(null,size__26606__auto__);
if((function (){var i__91189 = (0);
while(true){
if((i__91189 < size__26606__auto__)){
var y = cljs.core._nth.call(null,c__26605__auto__,i__91189);
cljs.core.chunk_append.call(null,b__91190,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));

var G__91202 = (i__91189 + (1));
i__91189 = G__91202;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__91190),dynomics$space$graph$pairs_$_iter__91185_$_iter__91187.call(null,cljs.core.chunk_rest.call(null,s__91188__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__91190),null);
}
} else {
var y = cljs.core.first.call(null,s__91188__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),dynomics$space$graph$pairs_$_iter__91185_$_iter__91187.call(null,cljs.core.rest.call(null,s__91188__$2)));
}
} else {
return null;
}
break;
}
});})(s__91186__$1,x,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__91186__$1,x,xs__5205__auto__,temp__4657__auto__))
;
var fs__26604__auto__ = cljs.core.seq.call(null,iterys__26603__auto__.call(null,cljs.core.remove.call(null,cljs.core.partial.call(null,cljs.core._EQ__EQ_,x),l)));
if(fs__26604__auto__){
return cljs.core.concat.call(null,fs__26604__auto__,dynomics$space$graph$pairs_$_iter__91185.call(null,cljs.core.rest.call(null,s__91186__$1)));
} else {
var G__91205 = cljs.core.rest.call(null,s__91186__$1);
s__91186__$1 = G__91205;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__26607__auto__.call(null,l);
})()));
});
dynomics.space.graph.cycles = (function dynomics$space$graph$cycles(var_args){
var args91206 = [];
var len__26896__auto___91214 = arguments.length;
var i__26897__auto___91215 = (0);
while(true){
if((i__26897__auto___91215 < len__26896__auto___91214)){
args91206.push((arguments[i__26897__auto___91215]));

var G__91217 = (i__26897__auto___91215 + (1));
i__26897__auto___91215 = G__91217;
continue;
} else {
}
break;
}

var G__91208 = args91206.length;
switch (G__91208) {
case 1:
return dynomics.space.graph.cycles.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dynomics.space.graph.cycles.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args91206.length)].join('')));

}
});

dynomics.space.graph.cycles.cljs$core$IFn$_invoke$arity$1 = (function (g){
return dynomics.space.graph.cycles.call(null,g,dynomics.space.graph.nodes_from_sum.call(null,dynomics.space.graph.sum_graph.call(null,dynomics.space.graph.as_matrix.call(null,g))));
});

dynomics.space.graph.cycles.cljs$core$IFn$_invoke$arity$2 = (function (g,ntr){
var ntr__$1 = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,ntr);
var ptr = dynomics.space.graph.pairs.call(null,ntr__$1);
var paths = cljs.core.sort_by.call(null,cljs.core.count,cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.apply,loom.alg.bf_path,new cljs.core.Keyword(null,"graph","graph",1558099509).cljs$core$IFn$_invoke$arity$1(g)),ptr));
return cljs.core.reduce.call(null,((function (ntr__$1,ptr,paths){
return (function (p__91209,path){
var map__91210 = p__91209;
var map__91210__$1 = ((((!((map__91210 == null)))?((((map__91210.cljs$lang$protocol_mask$partition0$ & (64))) || (map__91210.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__91210):map__91210);
var e = cljs.core.get.call(null,map__91210__$1,new cljs.core.Keyword(null,"e","e",1381269198));
var n = cljs.core.get.call(null,map__91210__$1,new cljs.core.Keyword(null,"n","n",562130025));
cljs.core.println.call(null,path,e,n,cljs.core.map.call(null,n,cljs.core.juxt.call(null,cljs.core.first,cljs.core.last).call(null,path)));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"n","n",562130025),cljs.core.apply.call(null,cljs.core.disj,n,cljs.core.juxt.call(null,cljs.core.first,cljs.core.last).call(null,path)),new cljs.core.Keyword(null,"e","e",1381269198),((!(cljs.core.every_QMARK_.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,n,cljs.core.juxt.call(null,cljs.core.first,cljs.core.last).call(null,path)))))?cljs.core.apply.call(null,cljs.core.disj,e,cljs.core.mapcat.call(null,cljs.core.juxt.call(null,cljs.core.identity,cljs.core.reverse),cljs.core.partition.call(null,(2),(1),path))):e)], null);
});})(ntr__$1,ptr,paths))
,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"edges","edges",-694791395).cljs$core$IFn$_invoke$arity$1(g),new cljs.core.Keyword(null,"n","n",562130025),ntr__$1], null),paths);
});

dynomics.space.graph.cycles.cljs$lang$maxFixedArity = 2;
dynomics.space.graph.make_regions = (function dynomics$space$graph$make_regions(p__91255){
var map__91262 = p__91255;
var map__91262__$1 = ((((!((map__91262 == null)))?((((map__91262.cljs$lang$protocol_mask$partition0$ & (64))) || (map__91262.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__91262):map__91262);
var state = map__91262__$1;
var map__91263 = cljs.core.get.call(null,map__91262__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__91263__$1 = ((((!((map__91263 == null)))?((((map__91263.cljs$lang$protocol_mask$partition0$ & (64))) || (map__91263.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__91263):map__91263);
var space = map__91263__$1;
var edges = cljs.core.get.call(null,map__91263__$1,new cljs.core.Keyword(null,"edges","edges",-694791395));
cljs.core.println.call(null,"cycles ",dynomics.space.graph.cycles.call(null,dynomics.space.graph.as_matrix.call(null,space)));

return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"regions","regions",-1023815958)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,cljs.core.first,dynomics.space.graph.as_connections.call(null,dynomics.space.graph.as_edges.call(null,dynomics.space.graph.cycles.call(null,dynomics.space.graph.as_matrix.call(null,space))),edges))], null));
});
