import {
	S as P,
	B as K,
	C as L,
	D as c,
	F as M,
	A as y,
	G as R,
	U as u,
	z as w,
	I as j,
	J as k,
	i as B,
	K as C,
	b as U,
	M as A,
	l as O,
	N as D,
	h as T,
	O as Y,
	E as q,
	P as z,
	Q as G,
	d as H,
	s as S,
	e as J
} from './runtime.Cl3lITj1.js';
function g(a, b = null, x) {
	if (typeof a != 'object' || a === null || P in a) return a;
	const o = B(a);
	if (o !== K && o !== L) return a;
	var i = new Map(),
		d = C(a),
		v = c(0);
	d && i.set('length', c(a.length));
	var l;
	return new Proxy(a, {
		defineProperty(n, e, t) {
			(!('value' in t) || t.configurable === !1 || t.enumerable === !1 || t.writable === !1) && M();
			var r = i.get(e);
			return r === void 0 ? ((r = c(t.value)), i.set(e, r)) : y(r, g(t.value, l)), !0;
		},
		deleteProperty(n, e) {
			var t = i.get(e);
			if (t === void 0) e in n && i.set(e, c(u));
			else {
				if (d && typeof e == 'string') {
					var r = i.get('length'),
						f = Number(e);
					Number.isInteger(f) && f < r.v && y(r, f);
				}
				y(t, u), F(v);
			}
			return !0;
		},
		get(n, e, t) {
			var _;
			if (e === P) return a;
			var r = i.get(e),
				f = e in n;
			if (
				(r === void 0 &&
					(!f || ((_ = R(n, e)) != null && _.writable)) &&
					((r = c(g(f ? n[e] : u, l))), i.set(e, r)),
				r !== void 0)
			) {
				var s = w(r);
				return s === u ? void 0 : s;
			}
			return Reflect.get(n, e, t);
		},
		getOwnPropertyDescriptor(n, e) {
			var t = Reflect.getOwnPropertyDescriptor(n, e);
			if (t && 'value' in t) {
				var r = i.get(e);
				r && (t.value = w(r));
			} else if (t === void 0) {
				var f = i.get(e),
					s = f == null ? void 0 : f.v;
				if (f !== void 0 && s !== u)
					return { enumerable: !0, configurable: !0, value: s, writable: !0 };
			}
			return t;
		},
		has(n, e) {
			var s;
			if (e === P) return !0;
			var t = i.get(e),
				r = (t !== void 0 && t.v !== u) || Reflect.has(n, e);
			if (t !== void 0 || (j !== null && (!r || ((s = R(n, e)) != null && s.writable)))) {
				t === void 0 && ((t = c(r ? g(n[e], l) : u)), i.set(e, t));
				var f = w(t);
				if (f === u) return !1;
			}
			return r;
		},
		set(n, e, t, r) {
			var I;
			var f = i.get(e),
				s = e in n;
			if (d && e === 'length')
				for (var _ = t; _ < f.v; _ += 1) {
					var h = i.get(_ + '');
					h !== void 0 ? y(h, u) : _ in n && ((h = c(u)), i.set(_ + '', h));
				}
			f === void 0
				? (!s || ((I = R(n, e)) != null && I.writable)) &&
					((f = c(void 0)), y(f, g(t, l)), i.set(e, f))
				: ((s = f.v !== u), y(f, g(t, l)));
			var m = Reflect.getOwnPropertyDescriptor(n, e);
			if ((m != null && m.set && m.set.call(r, t), !s)) {
				if (d && typeof e == 'string') {
					var E = i.get('length'),
						N = Number(e);
					Number.isInteger(N) && N >= E.v && y(E, N + 1);
				}
				F(v);
			}
			return !0;
		},
		ownKeys(n) {
			w(v);
			var e = Reflect.ownKeys(n).filter((f) => {
				var s = i.get(f);
				return s === void 0 || s.v !== u;
			});
			for (var [t, r] of i) r.v !== u && !(t in n) && e.push(t);
			return e;
		},
		setPrototypeOf() {
			k();
		}
	});
}
function F(a, b = 1) {
	y(a, a.v + b);
}
function Z(a, b, x, o = null, i = !1) {
	T && Y();
	var d = a,
		v = null,
		l = null,
		n = null,
		e = i ? q : 0;
	U(() => {
		if (n === (n = !!b())) return;
		let t = !1;
		if (T) {
			const r = d.data === z;
			n === r && ((d = G()), H(d), S(!1), (t = !0));
		}
		n
			? (v ? A(v) : (v = O(() => x(d))),
				l &&
					D(l, () => {
						l = null;
					}))
			: (l ? A(l) : o && (l = O(() => o(d))),
				v &&
					D(v, () => {
						v = null;
					})),
			t && S(!0);
	}, e),
		T && (d = J);
}
export { Z as i, g as p };
