import { customElement as $, bindable as I } from "aurelia";
const q = `<main class="\${classes}">
    <au-slot></au-slot>
</main>
`;
var x = Object.create, w = Object.defineProperty, B = Object.getOwnPropertyDescriptor, H = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e), g = (e) => {
  throw TypeError(e);
}, J = (e, t, r) => t in e ? w(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, k = (e, t) => w(e, "name", { value: t, configurable: !0 }), K = (e) => [, , , x(null)], M = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"], u = (e) => e !== void 0 && typeof e != "function" ? g("Function expected") : e, L = (e, t, r, n, s) => ({ kind: M[e], name: t, metadata: n, addInitializer: (a) => r._ ? g("Already initialized") : s.push(u(a || null)) }), Q = (e, t) => J(t, H("metadata"), e[3]), f = (e, t, r, n) => {
  for (var s = 0, a = e[t >> 1], d = a && a.length; s < d; s++) t & 1 ? a[s].call(r) : n = a[s].call(r, n);
  return n;
}, y = (e, t, r, n, s, a) => {
  var d, c, A, h, P, i = t & 7, S = !!(t & 8), l = !!(t & 16), O = i > 3 ? e.length + 1 : i ? S ? 1 : 2 : 0, C = M[i + 5], E = i > 3 && (e[O - 1] = []), U = e[O] || (e[O] = []), _ = i && (!l && !S && (s = s.prototype), i < 5 && (i > 3 || !l) && B(i < 4 ? s : { get [r]() {
    return D(this, a);
  }, set [r](o) {
    return F(this, a, o);
  } }, r));
  i ? l && i < 4 && k(a, (i > 2 ? "set " : i > 1 ? "get " : "") + r) : k(s, r);
  for (var b = n.length - 1; b >= 0; b--)
    h = L(i, r, A = {}, e[3], U), i && (h.static = S, h.private = l, P = h.access = { has: l ? (o) => R(s, o) : (o) => r in o }, i ^ 3 && (P.get = l ? (o) => (i ^ 1 ? D : V)(o, s, i ^ 4 ? a : _.get) : (o) => o[r]), i > 2 && (P.set = l ? (o, m) => F(o, s, m, i ^ 4 ? a : _.set) : (o, m) => o[r] = m)), c = (0, n[b])(i ? i < 4 ? l ? a : _[C] : i > 4 ? void 0 : { get: _.get, set: _.set } : s, h), A._ = 1, i ^ 4 || c === void 0 ? u(c) && (i > 4 ? E.unshift(c) : i ? l ? a = c : _[C] = c : s = c) : typeof c != "object" || c === null ? g("Object expected") : (u(d = c.get) && (_.get = d), u(d = c.set) && (_.set = d), u(d = c.init) && E.unshift(d));
  return i || Q(e, s), _ && w(s, r, _), l ? i ^ 4 ? a : _ : s;
}, z = (e, t, r) => t.has(e) || g("Cannot " + r), R = (e, t) => Object(t) !== t ? g('Cannot use the "in" operator on this value') : e.has(t), D = (e, t, r) => (z(e, t, "read from private field"), r ? r.call(e) : t.get(e)), F = (e, t, r, n) => (z(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r), V = (e, t, r) => (z(e, t, "access private method"), r), G, N, T, v;
T = [$({ name: "aire-page", template: q })], N = [I], G = [I];
class p {
  constructor() {
    this.variants = f(v, 8, this), f(v, 11, this), this.classes = f(v, 12, this), f(v, 15, this), console.log("SUP");
  }
}
v = K();
y(v, 5, "variants", N, p);
y(v, 5, "classes", G, p);
p = y(v, 0, "AirePage", T, p);
f(v, 1, p);
function X(e) {
  e.register(p);
}
export {
  p as AirePage,
  X as register
};
