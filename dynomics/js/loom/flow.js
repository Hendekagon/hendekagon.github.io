// Compiled by ClojureScript 1.8.40 {}
goog.provide('loom.flow');
goog.require('cljs.core');
goog.require('loom.alg_generic');
/**
 * Computes the residual capacity between nodes v1 and v2. Capacity
 * is a function that takes two nodes, and returns the capacity on the
 * edge between them, if any. Flow is the adjacency map which
 * represents the current flow in the network.
 */
loom.flow.residual_capacity = (function loom$flow$residual_capacity(capacity,flow,v1,v2){
return ((function (){var or__25827__auto__ = cljs.core.get_in.call(null,flow,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v2,v1], null));
if(cljs.core.truth_(or__25827__auto__)){
return or__25827__auto__;
} else {
return (0);
}
})() + ((function (){var or__25827__auto__ = capacity.call(null,v1,v2);
if(cljs.core.truth_(or__25827__auto__)){
return or__25827__auto__;
} else {
return (0);
}
})() - (function (){var or__25827__auto__ = cljs.core.get_in.call(null,flow,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v1,v2], null));
if(cljs.core.truth_(or__25827__auto__)){
return or__25827__auto__;
} else {
return (0);
}
})()));
});
/**
 * Given a flow, returns a map of {node (sum(in weight) - sum(out weight))}
 */
loom.flow.flow_balance = (function loom$flow$flow_balance(flow){
var out = cljs.core.PersistentArrayMap.EMPTY;
var in$ = cljs.core.PersistentArrayMap.EMPTY;
var adj_list = cljs.core.seq.call(null,flow);
while(true){
var temp__4655__auto__ = cljs.core.first.call(null,adj_list);
if(cljs.core.truth_(temp__4655__auto__)){
var vec__86807 = temp__4655__auto__;
var node = cljs.core.nth.call(null,vec__86807,(0),null);
var neighbours = cljs.core.nth.call(null,vec__86807,(1),null);
var G__86812 = cljs.core.assoc.call(null,out,node,(- cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.vals.call(null,neighbours))));
var G__86813 = cljs.core.merge_with.call(null,cljs.core._PLUS_,in$,neighbours);
var G__86814 = cljs.core.next.call(null,adj_list);
out = G__86812;
in$ = G__86813;
adj_list = G__86814;
continue;
} else {
return cljs.core.merge_with.call(null,cljs.core._PLUS_,out,in$);
}
break;
}
});
/**
 * Given a flow, verifies whether at each node the sum of in edge
 * weights is equal to the sum of out edge weights, except at the
 * source and sink. The source should have positive net outflow, the
 * sink negative, and together they should balance.
 */
loom.flow.satisfies_mass_balance_QMARK_ = (function loom$flow$satisfies_mass_balance_QMARK_(flow,source,sink){
var balance = loom.flow.flow_balance.call(null,flow);
return (((function (){var or__25827__auto__ = cljs.core.get.call(null,balance,source);
if(cljs.core.truth_(or__25827__auto__)){
return or__25827__auto__;
} else {
return (0);
}
})() <= (0))) && ((((function (){var or__25827__auto__ = cljs.core.get.call(null,balance,source);
if(cljs.core.truth_(or__25827__auto__)){
return or__25827__auto__;
} else {
return (0);
}
})() + (function (){var or__25827__auto__ = cljs.core.get.call(null,balance,sink);
if(cljs.core.truth_(or__25827__auto__)){
return or__25827__auto__;
} else {
return (0);
}
})()) === (0))) && (cljs.core.every_QMARK_.call(null,cljs.core.zero_QMARK_,cljs.core.vals.call(null,cljs.core.dissoc.call(null,balance,source,sink))));
});
/**
 * Given a flow map, and a capacity function, verifies that the flow
 * on each edge is <= capacity of that edge.
 */
loom.flow.satisfies_capacity_constraints_QMARK_ = (function loom$flow$satisfies_capacity_constraints_QMARK_(flow,capacity){
return cljs.core.every_QMARK_.call(null,(function (p__86836){
var vec__86837 = p__86836;
var node = cljs.core.nth.call(null,vec__86837,(0),null);
var flow_to_successors = cljs.core.nth.call(null,vec__86837,(1),null);
return cljs.core.every_QMARK_.call(null,((function (vec__86837,node,flow_to_successors){
return (function (p__86838){
var vec__86839 = p__86838;
var neighbor = cljs.core.nth.call(null,vec__86839,(0),null);
var flow_value = cljs.core.nth.call(null,vec__86839,(1),null);
return (flow_value <= capacity.call(null,node,neighbor));
});})(vec__86837,node,flow_to_successors))
,cljs.core.seq.call(null,flow_to_successors));
}),cljs.core.seq.call(null,flow));
});
/**
 * Verifies that a flow satisfies capacity and mass balance
 * constraints. Does verify that a flow is maximum.
 */
loom.flow.is_admissible_flow_QMARK_ = (function loom$flow$is_admissible_flow_QMARK_(flow,capacity,source,sink){
var and__25815__auto__ = loom.flow.satisfies_mass_balance_QMARK_.call(null,flow,source,sink);
if(cljs.core.truth_(and__25815__auto__)){
return loom.flow.satisfies_capacity_constraints_QMARK_.call(null,flow,capacity);
} else {
return and__25815__auto__;
}
});
/**
 * Given a path, represented by a sequence of nodes, and
 * weight-function, computes the minimum of the edge weights along the
 * path. If an edge on the path is missing, returns 0.
 */
loom.flow.min_weight_along_path = (function loom$flow$min_weight_along_path(path,weight_fn){
return cljs.core.reduce.call(null,cljs.core.min,cljs.core.map.call(null,(function (p1__86844_SHARP_){
var or__25827__auto__ = cljs.core.apply.call(null,weight_fn,p1__86844_SHARP_);
if(cljs.core.truth_(or__25827__auto__)){
return or__25827__auto__;
} else {
return (0);
}
}),cljs.core.partition.call(null,(2),(1),path)));
});
/**
 * Finds a shortest path in the flow network along which there remains
 * residual capacity. Successors is a function which, given a vertex,
 * returns the vertices connected by outgoing edges. Predecessors,
 * similarly is a function to get vertices connected by incoming
 * edges. Capacity is a function which takes two vertices and returns
 * the capacity between them. Flow is an adjacency map which contains
 * the current value of network flow. s is the source node, t the
 * sink.
 */
loom.flow.bf_find_augmenting_path = (function loom$flow$bf_find_augmenting_path(successors,predecessors,capacity,flow,s,t){
return loom.alg_generic.bf_path.call(null,(function (vertex){
return cljs.core.distinct.call(null,cljs.core.filter.call(null,(function (p1__86850_SHARP_){
return (loom.flow.residual_capacity.call(null,capacity,flow,vertex,p1__86850_SHARP_) > (0));
}),cljs.core.concat.call(null,successors.call(null,vertex),predecessors.call(null,vertex))));
}),s,t);
});
/**
 * Given a flow represented as an adjacency map, returns an updated flow.
 * Capacity is a function of two vertices, path is a sequence of
 * nodes, and increase is the amount by which the flow should be
 * augmented on this path. If at any point the increase exceeds forward
 * capacity, the excess is pushed in the reverse direction. An exception
 * is thrown if the augmentation is impossible given capacity constraints.
 */
loom.flow.augment_along_path = (function loom$flow$augment_along_path(flow,capacity,path,increase){
while(true){
var vn0 = cljs.core.first.call(null,path);
var vn1 = cljs.core.second.call(null,path);
var forward_flow = (function (){var or__25827__auto__ = cljs.core.get_in.call(null,flow,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vn0,vn1], null));
if(cljs.core.truth_(or__25827__auto__)){
return or__25827__auto__;
} else {
return (0);
}
})();
var forward_capacity = ((function (){var or__25827__auto__ = capacity.call(null,vn0,vn1);
if(cljs.core.truth_(or__25827__auto__)){
return or__25827__auto__;
} else {
return (0);
}
})() - forward_flow);
var reverse_flow = (function (){var or__25827__auto__ = cljs.core.get_in.call(null,flow,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vn1,vn0], null));
if(cljs.core.truth_(or__25827__auto__)){
return or__25827__auto__;
} else {
return (0);
}
})();
var forward_increase = (function (){var x__26165__auto__ = forward_capacity;
var y__26166__auto__ = increase;
return ((x__26165__auto__ < y__26166__auto__) ? x__26165__auto__ : y__26166__auto__);
})();
var pushback = (increase - forward_increase);
var flow_1 = (((forward_increase > (0)))?cljs.core.assoc_in.call(null,flow,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vn0,vn1], null),(forward_flow + forward_increase)):flow);
var flow_2 = (((pushback > (0)))?cljs.core.assoc_in.call(null,flow_1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vn1,vn0], null),(reverse_flow - pushback)):flow_1);
if((pushback > reverse_flow)){
throw Object([cljs.core.str("Path augmentation failure: "),cljs.core.str(vn0),cljs.core.str(" "),cljs.core.str(vn1)].join(''));
} else {
if((cljs.core.count.call(null,path) > (2))){
var G__86881 = flow_2;
var G__86882 = capacity;
var G__86883 = cljs.core.next.call(null,path);
var G__86884 = increase;
flow = G__86881;
capacity = G__86882;
path = G__86883;
increase = G__86884;
continue;
} else {
return flow_2;

}
}
break;
}
});
/**
 * Computes the maximum flow on a network, using the edmonds-karp algorithm.
 * Successors is a function that returns the outgoing neighbor
 * vertices of a vertex. Predecessors is a function that returns the
 * incoming neighbor vertices for a vertex. Capacity is a function of
 * two vertices that returns the capacity on the edge between them.
 * Source and sink are the unique vertices which supply and consume
 * flow respectively.
 * 
 * Returns a vector [flow value], where flow is an adjacency map that
 * represents flows between vertices, and value is the quantity of
 * flow passing from source to sink.
 */
loom.flow.edmonds_karp = (function loom$flow$edmonds_karp(var_args){
var args86891 = [];
var len__26896__auto___86914 = arguments.length;
var i__26897__auto___86916 = (0);
while(true){
if((i__26897__auto___86916 < len__26896__auto___86914)){
args86891.push((arguments[i__26897__auto___86916]));

var G__86917 = (i__26897__auto___86916 + (1));
i__26897__auto___86916 = G__86917;
continue;
} else {
}
break;
}

var G__86902 = args86891.length;
switch (G__86902) {
case 5:
return loom.flow.edmonds_karp.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return loom.flow.edmonds_karp.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args86891.length)].join('')));

}
});

loom.flow.edmonds_karp.cljs$core$IFn$_invoke$arity$5 = (function (successors,predecessors,capacity,source,sink){
return loom.flow.edmonds_karp.call(null,successors,predecessors,capacity,source,sink,cljs.core.PersistentArrayMap.EMPTY);
});

loom.flow.edmonds_karp.cljs$core$IFn$_invoke$arity$6 = (function (successors,predecessors,capacity,source,sink,flow){
while(true){
var temp__4655__auto__ = loom.flow.bf_find_augmenting_path.call(null,successors,predecessors,capacity,flow,source,sink);
if(cljs.core.truth_(temp__4655__auto__)){
var path = temp__4655__auto__;
var G__86927 = successors;
var G__86928 = predecessors;
var G__86929 = capacity;
var G__86930 = source;
var G__86931 = sink;
var G__86932 = loom.flow.augment_along_path.call(null,flow,capacity,path,loom.flow.min_weight_along_path.call(null,path,cljs.core.partial.call(null,loom.flow.residual_capacity,capacity,flow)));
successors = G__86927;
predecessors = G__86928;
capacity = G__86929;
source = G__86930;
sink = G__86931;
flow = G__86932;
continue;
} else {
var value = cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.vals.call(null,cljs.core.get.call(null,flow,source)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [flow,value], null);
}
break;
}
});

loom.flow.edmonds_karp.cljs$lang$maxFixedArity = 6;
