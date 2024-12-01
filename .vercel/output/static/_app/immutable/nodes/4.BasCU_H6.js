import '../chunks/disclose-version.Bg9kRutz.js';
import {
	h as V,
	O as ie,
	b as _0,
	K as jn,
	ac as g0,
	P as Hn,
	Q as Ie,
	d as te,
	s as Gu,
	e as eu,
	aw as Lu,
	M as k0,
	l as pe,
	N as Un,
	I as Le,
	ax as $n,
	ay as Yn,
	ab as Zn,
	az as Gn,
	m as A0,
	a8 as Vn,
	a5 as Wn,
	y as Kn,
	D as Oe,
	aA as Qn,
	aB as Jn,
	aC as Xn,
	g as C0,
	a9 as ur,
	a7 as er,
	f as nr,
	p as rr,
	av as ir,
	r as tr,
	A as cr,
	z as iu,
	q as or,
	u as bu,
	v as xu,
	o as Me,
	a1 as lr
} from '../chunks/runtime.Cl3lITj1.js';
import { s as ar } from '../chunks/render.CqgfSQ4l.js';
import { p as Be, i as fr } from '../chunks/if.bRO9PcOw.js';
import { c as Re, f as sr, a as Su, t as be, d as dr } from '../chunks/template.0enpisfs.js';
import { o as hr } from '../chunks/index-client.CiwFr_-d.js';
function pr(u, e) {
	return e;
}
function br(u, e, n, i) {
	for (var r = [], t = e.length, c = 0; c < t; c++) Yn(e[c].e, r, !0);
	var o = t > 0 && r.length === 0 && n !== null;
	if (o) {
		var l = n.parentNode;
		Zn(l), l.append(n), i.clear(), Z(u, e[0].prev, e[t - 1].next);
	}
	Gn(r, () => {
		for (var a = 0; a < t; a++) {
			var f = e[a];
			o || (i.delete(f.k), Z(u, f.prev, f.next)), A0(f.e, !o);
		}
	});
}
function xr(u, e, n, i, r, t = null) {
	var c = u,
		o = { flags: e, items: new Map(), first: null };
	V && ie();
	var l = null,
		a = !1;
	_0(() => {
		var f = n(),
			s = jn(f) ? f : f == null ? [] : g0(f),
			p = s.length;
		if (a && p === 0) return;
		a = p === 0;
		let h = !1;
		if (V) {
			var d = c.data === Hn;
			d !== (p === 0) && ((c = Ie()), te(c), Gu(!1), (h = !0));
		}
		if (V) {
			for (var x = null, m, _ = 0; _ < p; _++) {
				if (eu.nodeType === 8 && eu.data === Vn) {
					(c = eu), (h = !0), Gu(!1);
					break;
				}
				var b = s[_],
					A = i(b, _);
				(m = E0(eu, o, x, null, b, A, _, r, e)), o.items.set(A, m), (x = m);
			}
			p > 0 && te(Ie());
		}
		if (!V) {
			var k = Wn;
			mr(s, o, c, r, e, (k.f & Lu) !== 0, i);
		}
		t !== null &&
			(p === 0
				? l
					? k0(l)
					: (l = pe(() => t(c)))
				: l !== null &&
					Un(l, () => {
						l = null;
					})),
			h && Gu(!0),
			n();
	}),
		V && (c = eu);
}
function mr(u, e, n, i, r, t, c) {
	var o = u.length,
		l = e.items,
		a = e.first,
		f = a,
		s,
		p = null,
		h = [],
		d = [],
		x,
		m,
		_,
		b;
	for (b = 0; b < o; b += 1) {
		if (((x = u[b]), (m = c(x, b)), (_ = l.get(m)), _ === void 0)) {
			var A = f ? f.e.nodes_start : n;
			(p = E0(A, e, p, p === null ? e.first : p.next, x, m, b, i, r)),
				l.set(m, p),
				(h = []),
				(d = []),
				(f = p.next);
			continue;
		}
		if ((_r(_, x, b), _.e.f & Lu && k0(_.e), _ !== f)) {
			if (s !== void 0 && s.has(_)) {
				if (h.length < d.length) {
					var k = d[0],
						C;
					p = k.prev;
					var E = h[0],
						D = h[h.length - 1];
					for (C = 0; C < h.length; C += 1) Ne(h[C], k, n);
					for (C = 0; C < d.length; C += 1) s.delete(d[C]);
					Z(e, E.prev, D.next),
						Z(e, p, E),
						Z(e, D, k),
						(f = k),
						(p = D),
						(b -= 1),
						(h = []),
						(d = []);
				} else
					s.delete(_),
						Ne(_, f, n),
						Z(e, _.prev, _.next),
						Z(e, _, p === null ? e.first : p.next),
						Z(e, p, _),
						(p = _);
				continue;
			}
			for (h = [], d = []; f !== null && f.k !== m; )
				(t || !(f.e.f & Lu)) && (s ?? (s = new Set())).add(f), d.push(f), (f = f.next);
			if (f === null) continue;
			_ = f;
		}
		h.push(_), (p = _), (f = _.next);
	}
	if (f !== null || s !== void 0) {
		for (var L = s === void 0 ? [] : g0(s); f !== null; )
			(t || !(f.e.f & Lu)) && L.push(f), (f = f.next);
		var z = L.length;
		if (z > 0) {
			var uu = null;
			br(e, L, uu, l);
		}
	}
	(Le.first = e.first && e.first.e), (Le.last = p && p.e);
}
function _r(u, e, n, i) {
	$n(u.v, e), (u.i = n);
}
function E0(u, e, n, i, r, t, c, o, l) {
	var a = (l & Jn) !== 0,
		f = (l & Xn) === 0,
		s = a ? (f ? Kn(r) : Oe(r)) : r,
		p = l & Qn ? Oe(c) : c,
		h = { i: p, v: s, k: t, a: null, e: null, prev: n, next: i };
	try {
		return (
			(h.e = pe(() => o(u, s, p), V)),
			(h.e.prev = n && n.e),
			(h.e.next = i && i.e),
			n === null ? (e.first = h) : ((n.next = h), (n.e.next = h.e)),
			i !== null && ((i.prev = h), (i.e.prev = h.e)),
			h
		);
	} finally {
	}
}
function Ne(u, e, n) {
	for (
		var i = u.next ? u.next.e.nodes_start : n, r = e ? e.e.nodes_start : n, t = u.e.nodes_start;
		t !== i;

	) {
		var c = C0(t);
		r.before(t), (t = c);
	}
}
function Z(u, e, n) {
	e === null ? (u.first = n) : ((e.next = n), (e.e.next = n && n.e)),
		n !== null && ((n.prev = e), (n.e.prev = e && e.e));
}
function Pe(u, e, n, i, r) {
	var t = u,
		c = '',
		o;
	_0(() => {
		if (c === (c = e() ?? '')) {
			V && ie();
			return;
		}
		o !== void 0 && (A0(o), (o = void 0)),
			c !== '' &&
				(o = pe(() => {
					if (V) {
						eu.data;
						for (var l = ie(), a = l; l !== null && (l.nodeType !== 8 || l.data !== ''); )
							(a = l), (l = C0(l));
						if (l === null) throw (ur(), er);
						Re(eu, a), (t = te(l));
						return;
					}
					var f = c + '',
						s = sr(f);
					Re(nr(s), s.lastChild), t.before(s);
				}));
	});
}
const ze = {};
function gr(u) {
	let e = ze[u];
	if (e) return e;
	e = ze[u] = [];
	for (let n = 0; n < 128; n++) {
		const i = String.fromCharCode(n);
		e.push(i);
	}
	for (let n = 0; n < u.length; n++) {
		const i = u.charCodeAt(n);
		e[i] = '%' + ('0' + i.toString(16).toUpperCase()).slice(-2);
	}
	return e;
}
function su(u, e) {
	typeof e != 'string' && (e = su.defaultChars);
	const n = gr(e);
	return u.replace(/(%[a-f0-9]{2})+/gi, function (i) {
		let r = '';
		for (let t = 0, c = i.length; t < c; t += 3) {
			const o = parseInt(i.slice(t + 1, t + 3), 16);
			if (o < 128) {
				r += n[o];
				continue;
			}
			if ((o & 224) === 192 && t + 3 < c) {
				const l = parseInt(i.slice(t + 4, t + 6), 16);
				if ((l & 192) === 128) {
					const a = ((o << 6) & 1984) | (l & 63);
					a < 128 ? (r += '��') : (r += String.fromCharCode(a)), (t += 3);
					continue;
				}
			}
			if ((o & 240) === 224 && t + 6 < c) {
				const l = parseInt(i.slice(t + 4, t + 6), 16),
					a = parseInt(i.slice(t + 7, t + 9), 16);
				if ((l & 192) === 128 && (a & 192) === 128) {
					const f = ((o << 12) & 61440) | ((l << 6) & 4032) | (a & 63);
					f < 2048 || (f >= 55296 && f <= 57343) ? (r += '���') : (r += String.fromCharCode(f)),
						(t += 6);
					continue;
				}
			}
			if ((o & 248) === 240 && t + 9 < c) {
				const l = parseInt(i.slice(t + 4, t + 6), 16),
					a = parseInt(i.slice(t + 7, t + 9), 16),
					f = parseInt(i.slice(t + 10, t + 12), 16);
				if ((l & 192) === 128 && (a & 192) === 128 && (f & 192) === 128) {
					let s = ((o << 18) & 1835008) | ((l << 12) & 258048) | ((a << 6) & 4032) | (f & 63);
					s < 65536 || s > 1114111
						? (r += '����')
						: ((s -= 65536), (r += String.fromCharCode(55296 + (s >> 10), 56320 + (s & 1023)))),
						(t += 9);
					continue;
				}
			}
			r += '�';
		}
		return r;
	});
}
su.defaultChars = ';/?:@&=+$,#';
su.componentChars = '';
const qe = {};
function kr(u) {
	let e = qe[u];
	if (e) return e;
	e = qe[u] = [];
	for (let n = 0; n < 128; n++) {
		const i = String.fromCharCode(n);
		/^[0-9a-z]$/i.test(i)
			? e.push(i)
			: e.push('%' + ('0' + n.toString(16).toUpperCase()).slice(-2));
	}
	for (let n = 0; n < u.length; n++) e[u.charCodeAt(n)] = u[n];
	return e;
}
function Fu(u, e, n) {
	typeof e != 'string' && ((n = e), (e = Fu.defaultChars)), typeof n > 'u' && (n = !0);
	const i = kr(e);
	let r = '';
	for (let t = 0, c = u.length; t < c; t++) {
		const o = u.charCodeAt(t);
		if (n && o === 37 && t + 2 < c && /^[0-9a-f]{2}$/i.test(u.slice(t + 1, t + 3))) {
			(r += u.slice(t, t + 3)), (t += 2);
			continue;
		}
		if (o < 128) {
			r += i[o];
			continue;
		}
		if (o >= 55296 && o <= 57343) {
			if (o >= 55296 && o <= 56319 && t + 1 < c) {
				const l = u.charCodeAt(t + 1);
				if (l >= 56320 && l <= 57343) {
					(r += encodeURIComponent(u[t] + u[t + 1])), t++;
					continue;
				}
			}
			r += '%EF%BF%BD';
			continue;
		}
		r += encodeURIComponent(u[t]);
	}
	return r;
}
Fu.defaultChars = ";/?:@&=+$,-_.!~*'()#";
Fu.componentChars = "-_.!~*'()";
function xe(u) {
	let e = '';
	return (
		(e += u.protocol || ''),
		(e += u.slashes ? '//' : ''),
		(e += u.auth ? u.auth + '@' : ''),
		u.hostname && u.hostname.indexOf(':') !== -1
			? (e += '[' + u.hostname + ']')
			: (e += u.hostname || ''),
		(e += u.port ? ':' + u.port : ''),
		(e += u.pathname || ''),
		(e += u.search || ''),
		(e += u.hash || ''),
		e
	);
}
function Ou() {
	(this.protocol = null),
		(this.slashes = null),
		(this.auth = null),
		(this.port = null),
		(this.hostname = null),
		(this.hash = null),
		(this.search = null),
		(this.pathname = null);
}
const Ar = /^([a-z0-9.+-]+:)/i,
	Cr = /:[0-9]*$/,
	Er = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
	yr = [
		'<',
		'>',
		'"',
		'`',
		' ',
		'\r',
		`
`,
		'	'
	],
	Dr = ['{', '}', '|', '\\', '^', '`'].concat(yr),
	Fr = ["'"].concat(Dr),
	je = ['%', '/', '?', ';', '#'].concat(Fr),
	He = ['/', '?', '#'],
	vr = 255,
	Ue = /^[+a-z0-9A-Z_-]{0,63}$/,
	wr = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
	$e = { javascript: !0, 'javascript:': !0 },
	Ye = {
		http: !0,
		https: !0,
		ftp: !0,
		gopher: !0,
		file: !0,
		'http:': !0,
		'https:': !0,
		'ftp:': !0,
		'gopher:': !0,
		'file:': !0
	};
function me(u, e) {
	if (u && u instanceof Ou) return u;
	const n = new Ou();
	return n.parse(u, e), n;
}
Ou.prototype.parse = function (u, e) {
	let n,
		i,
		r,
		t = u;
	if (((t = t.trim()), !e && u.split('#').length === 1)) {
		const a = Er.exec(t);
		if (a) return (this.pathname = a[1]), a[2] && (this.search = a[2]), this;
	}
	let c = Ar.exec(t);
	if (
		(c && ((c = c[0]), (n = c.toLowerCase()), (this.protocol = c), (t = t.substr(c.length))),
		(e || c || t.match(/^\/\/[^@\/]+@[^@\/]+/)) &&
			((r = t.substr(0, 2) === '//'),
			r && !(c && $e[c]) && ((t = t.substr(2)), (this.slashes = !0))),
		!$e[c] && (r || (c && !Ye[c])))
	) {
		let a = -1;
		for (let d = 0; d < He.length; d++)
			(i = t.indexOf(He[d])), i !== -1 && (a === -1 || i < a) && (a = i);
		let f, s;
		a === -1 ? (s = t.lastIndexOf('@')) : (s = t.lastIndexOf('@', a)),
			s !== -1 && ((f = t.slice(0, s)), (t = t.slice(s + 1)), (this.auth = f)),
			(a = -1);
		for (let d = 0; d < je.length; d++)
			(i = t.indexOf(je[d])), i !== -1 && (a === -1 || i < a) && (a = i);
		a === -1 && (a = t.length), t[a - 1] === ':' && a--;
		const p = t.slice(0, a);
		(t = t.slice(a)), this.parseHost(p), (this.hostname = this.hostname || '');
		const h = this.hostname[0] === '[' && this.hostname[this.hostname.length - 1] === ']';
		if (!h) {
			const d = this.hostname.split(/\./);
			for (let x = 0, m = d.length; x < m; x++) {
				const _ = d[x];
				if (_ && !_.match(Ue)) {
					let b = '';
					for (let A = 0, k = _.length; A < k; A++)
						_.charCodeAt(A) > 127 ? (b += 'x') : (b += _[A]);
					if (!b.match(Ue)) {
						const A = d.slice(0, x),
							k = d.slice(x + 1),
							C = _.match(wr);
						C && (A.push(C[1]), k.unshift(C[2])),
							k.length && (t = k.join('.') + t),
							(this.hostname = A.join('.'));
						break;
					}
				}
			}
		}
		this.hostname.length > vr && (this.hostname = ''),
			h && (this.hostname = this.hostname.substr(1, this.hostname.length - 2));
	}
	const o = t.indexOf('#');
	o !== -1 && ((this.hash = t.substr(o)), (t = t.slice(0, o)));
	const l = t.indexOf('?');
	return (
		l !== -1 && ((this.search = t.substr(l)), (t = t.slice(0, l))),
		t && (this.pathname = t),
		Ye[n] && this.hostname && !this.pathname && (this.pathname = ''),
		this
	);
};
Ou.prototype.parseHost = function (u) {
	let e = Cr.exec(u);
	e && ((e = e[0]), e !== ':' && (this.port = e.substr(1)), (u = u.substr(0, u.length - e.length))),
		u && (this.hostname = u);
};
const Sr = Object.freeze(
		Object.defineProperty(
			{ __proto__: null, decode: su, encode: Fu, format: xe, parse: me },
			Symbol.toStringTag,
			{ value: 'Module' }
		)
	),
	y0 =
		/[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,
	D0 = /[\0-\x1F\x7F-\x9F]/,
	Tr =
		/[\xAD\u0600-\u0605\u061C\u06DD\u070F\u0890\u0891\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC3F]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/,
	_e =
		/[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2\uDF00-\uDF09]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDF43-\uDF4F\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/,
	F0 =
		/[\$\+<->\^`\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u0888\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20C0\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFF\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u31EF\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBC2\uFD40-\uFD4F\uFDCF\uFDFC-\uFDFF\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD833[\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEDC-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF76\uDF7B-\uDFD9\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC5\uDECE-\uDEDB\uDEE0-\uDEE8\uDEF0-\uDEF8\uDF00-\uDF92\uDF94-\uDFCA]/,
	v0 = /[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/,
	Ir = Object.freeze(
		Object.defineProperty(
			{ __proto__: null, Any: y0, Cc: D0, Cf: Tr, P: _e, S: F0, Z: v0 },
			Symbol.toStringTag,
			{ value: 'Module' }
		)
	),
	Lr = new Uint16Array(
		'ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'
			.split('')
			.map((u) => u.charCodeAt(0))
	),
	Or = new Uint16Array(
		'Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢'.split('').map((u) => u.charCodeAt(0))
	);
var Vu;
const Mr = new Map([
		[0, 65533],
		[128, 8364],
		[130, 8218],
		[131, 402],
		[132, 8222],
		[133, 8230],
		[134, 8224],
		[135, 8225],
		[136, 710],
		[137, 8240],
		[138, 352],
		[139, 8249],
		[140, 338],
		[142, 381],
		[145, 8216],
		[146, 8217],
		[147, 8220],
		[148, 8221],
		[149, 8226],
		[150, 8211],
		[151, 8212],
		[152, 732],
		[153, 8482],
		[154, 353],
		[155, 8250],
		[156, 339],
		[158, 382],
		[159, 376]
	]),
	Br =
		(Vu = String.fromCodePoint) !== null && Vu !== void 0
			? Vu
			: function (u) {
					let e = '';
					return (
						u > 65535 &&
							((u -= 65536),
							(e += String.fromCharCode(((u >>> 10) & 1023) | 55296)),
							(u = 56320 | (u & 1023))),
						(e += String.fromCharCode(u)),
						e
					);
				};
function Rr(u) {
	var e;
	return (u >= 55296 && u <= 57343) || u > 1114111
		? 65533
		: (e = Mr.get(u)) !== null && e !== void 0
			? e
			: u;
}
var S;
(function (u) {
	(u[(u.NUM = 35)] = 'NUM'),
		(u[(u.SEMI = 59)] = 'SEMI'),
		(u[(u.EQUALS = 61)] = 'EQUALS'),
		(u[(u.ZERO = 48)] = 'ZERO'),
		(u[(u.NINE = 57)] = 'NINE'),
		(u[(u.LOWER_A = 97)] = 'LOWER_A'),
		(u[(u.LOWER_F = 102)] = 'LOWER_F'),
		(u[(u.LOWER_X = 120)] = 'LOWER_X'),
		(u[(u.LOWER_Z = 122)] = 'LOWER_Z'),
		(u[(u.UPPER_A = 65)] = 'UPPER_A'),
		(u[(u.UPPER_F = 70)] = 'UPPER_F'),
		(u[(u.UPPER_Z = 90)] = 'UPPER_Z');
})(S || (S = {}));
const Nr = 32;
var K;
(function (u) {
	(u[(u.VALUE_LENGTH = 49152)] = 'VALUE_LENGTH'),
		(u[(u.BRANCH_LENGTH = 16256)] = 'BRANCH_LENGTH'),
		(u[(u.JUMP_TABLE = 127)] = 'JUMP_TABLE');
})(K || (K = {}));
function ce(u) {
	return u >= S.ZERO && u <= S.NINE;
}
function Pr(u) {
	return (u >= S.UPPER_A && u <= S.UPPER_F) || (u >= S.LOWER_A && u <= S.LOWER_F);
}
function zr(u) {
	return (u >= S.UPPER_A && u <= S.UPPER_Z) || (u >= S.LOWER_A && u <= S.LOWER_Z) || ce(u);
}
function qr(u) {
	return u === S.EQUALS || zr(u);
}
var w;
(function (u) {
	(u[(u.EntityStart = 0)] = 'EntityStart'),
		(u[(u.NumericStart = 1)] = 'NumericStart'),
		(u[(u.NumericDecimal = 2)] = 'NumericDecimal'),
		(u[(u.NumericHex = 3)] = 'NumericHex'),
		(u[(u.NamedEntity = 4)] = 'NamedEntity');
})(w || (w = {}));
var W;
(function (u) {
	(u[(u.Legacy = 0)] = 'Legacy'),
		(u[(u.Strict = 1)] = 'Strict'),
		(u[(u.Attribute = 2)] = 'Attribute');
})(W || (W = {}));
class jr {
	constructor(e, n, i) {
		(this.decodeTree = e),
			(this.emitCodePoint = n),
			(this.errors = i),
			(this.state = w.EntityStart),
			(this.consumed = 1),
			(this.result = 0),
			(this.treeIndex = 0),
			(this.excess = 1),
			(this.decodeMode = W.Strict);
	}
	startEntity(e) {
		(this.decodeMode = e),
			(this.state = w.EntityStart),
			(this.result = 0),
			(this.treeIndex = 0),
			(this.excess = 1),
			(this.consumed = 1);
	}
	write(e, n) {
		switch (this.state) {
			case w.EntityStart:
				return e.charCodeAt(n) === S.NUM
					? ((this.state = w.NumericStart), (this.consumed += 1), this.stateNumericStart(e, n + 1))
					: ((this.state = w.NamedEntity), this.stateNamedEntity(e, n));
			case w.NumericStart:
				return this.stateNumericStart(e, n);
			case w.NumericDecimal:
				return this.stateNumericDecimal(e, n);
			case w.NumericHex:
				return this.stateNumericHex(e, n);
			case w.NamedEntity:
				return this.stateNamedEntity(e, n);
		}
	}
	stateNumericStart(e, n) {
		return n >= e.length
			? -1
			: (e.charCodeAt(n) | Nr) === S.LOWER_X
				? ((this.state = w.NumericHex), (this.consumed += 1), this.stateNumericHex(e, n + 1))
				: ((this.state = w.NumericDecimal), this.stateNumericDecimal(e, n));
	}
	addToNumericResult(e, n, i, r) {
		if (n !== i) {
			const t = i - n;
			(this.result = this.result * Math.pow(r, t) + parseInt(e.substr(n, t), r)),
				(this.consumed += t);
		}
	}
	stateNumericHex(e, n) {
		const i = n;
		for (; n < e.length; ) {
			const r = e.charCodeAt(n);
			if (ce(r) || Pr(r)) n += 1;
			else return this.addToNumericResult(e, i, n, 16), this.emitNumericEntity(r, 3);
		}
		return this.addToNumericResult(e, i, n, 16), -1;
	}
	stateNumericDecimal(e, n) {
		const i = n;
		for (; n < e.length; ) {
			const r = e.charCodeAt(n);
			if (ce(r)) n += 1;
			else return this.addToNumericResult(e, i, n, 10), this.emitNumericEntity(r, 2);
		}
		return this.addToNumericResult(e, i, n, 10), -1;
	}
	emitNumericEntity(e, n) {
		var i;
		if (this.consumed <= n)
			return (
				(i = this.errors) === null ||
					i === void 0 ||
					i.absenceOfDigitsInNumericCharacterReference(this.consumed),
				0
			);
		if (e === S.SEMI) this.consumed += 1;
		else if (this.decodeMode === W.Strict) return 0;
		return (
			this.emitCodePoint(Rr(this.result), this.consumed),
			this.errors &&
				(e !== S.SEMI && this.errors.missingSemicolonAfterCharacterReference(),
				this.errors.validateNumericCharacterReference(this.result)),
			this.consumed
		);
	}
	stateNamedEntity(e, n) {
		const { decodeTree: i } = this;
		let r = i[this.treeIndex],
			t = (r & K.VALUE_LENGTH) >> 14;
		for (; n < e.length; n++, this.excess++) {
			const c = e.charCodeAt(n);
			if (((this.treeIndex = Hr(i, r, this.treeIndex + Math.max(1, t), c)), this.treeIndex < 0))
				return this.result === 0 || (this.decodeMode === W.Attribute && (t === 0 || qr(c)))
					? 0
					: this.emitNotTerminatedNamedEntity();
			if (((r = i[this.treeIndex]), (t = (r & K.VALUE_LENGTH) >> 14), t !== 0)) {
				if (c === S.SEMI)
					return this.emitNamedEntityData(this.treeIndex, t, this.consumed + this.excess);
				this.decodeMode !== W.Strict &&
					((this.result = this.treeIndex), (this.consumed += this.excess), (this.excess = 0));
			}
		}
		return -1;
	}
	emitNotTerminatedNamedEntity() {
		var e;
		const { result: n, decodeTree: i } = this,
			r = (i[n] & K.VALUE_LENGTH) >> 14;
		return (
			this.emitNamedEntityData(n, r, this.consumed),
			(e = this.errors) === null || e === void 0 || e.missingSemicolonAfterCharacterReference(),
			this.consumed
		);
	}
	emitNamedEntityData(e, n, i) {
		const { decodeTree: r } = this;
		return (
			this.emitCodePoint(n === 1 ? r[e] & ~K.VALUE_LENGTH : r[e + 1], i),
			n === 3 && this.emitCodePoint(r[e + 2], i),
			i
		);
	}
	end() {
		var e;
		switch (this.state) {
			case w.NamedEntity:
				return this.result !== 0 &&
					(this.decodeMode !== W.Attribute || this.result === this.treeIndex)
					? this.emitNotTerminatedNamedEntity()
					: 0;
			case w.NumericDecimal:
				return this.emitNumericEntity(0, 2);
			case w.NumericHex:
				return this.emitNumericEntity(0, 3);
			case w.NumericStart:
				return (
					(e = this.errors) === null ||
						e === void 0 ||
						e.absenceOfDigitsInNumericCharacterReference(this.consumed),
					0
				);
			case w.EntityStart:
				return 0;
		}
	}
}
function w0(u) {
	let e = '';
	const n = new jr(u, (i) => (e += Br(i)));
	return function (r, t) {
		let c = 0,
			o = 0;
		for (; (o = r.indexOf('&', o)) >= 0; ) {
			(e += r.slice(c, o)), n.startEntity(t);
			const a = n.write(r, o + 1);
			if (a < 0) {
				c = o + n.end();
				break;
			}
			(c = o + a), (o = a === 0 ? c + 1 : c);
		}
		const l = e + r.slice(c);
		return (e = ''), l;
	};
}
function Hr(u, e, n, i) {
	const r = (e & K.BRANCH_LENGTH) >> 7,
		t = e & K.JUMP_TABLE;
	if (r === 0) return t !== 0 && i === t ? n : -1;
	if (t) {
		const l = i - t;
		return l < 0 || l >= r ? -1 : u[n + l] - 1;
	}
	let c = n,
		o = c + r - 1;
	for (; c <= o; ) {
		const l = (c + o) >>> 1,
			a = u[l];
		if (a < i) c = l + 1;
		else if (a > i) o = l - 1;
		else return u[l + r];
	}
	return -1;
}
const Ur = w0(Lr);
w0(Or);
function S0(u, e = W.Legacy) {
	return Ur(u, e);
}
function $r(u) {
	return Object.prototype.toString.call(u);
}
function ge(u) {
	return $r(u) === '[object String]';
}
const Yr = Object.prototype.hasOwnProperty;
function Zr(u, e) {
	return Yr.call(u, e);
}
function ju(u) {
	return (
		Array.prototype.slice.call(arguments, 1).forEach(function (n) {
			if (n) {
				if (typeof n != 'object') throw new TypeError(n + 'must be object');
				Object.keys(n).forEach(function (i) {
					u[i] = n[i];
				});
			}
		}),
		u
	);
}
function T0(u, e, n) {
	return [].concat(u.slice(0, e), n, u.slice(e + 1));
}
function ke(u) {
	return !(
		(u >= 55296 && u <= 57343) ||
		(u >= 64976 && u <= 65007) ||
		(u & 65535) === 65535 ||
		(u & 65535) === 65534 ||
		(u >= 0 && u <= 8) ||
		u === 11 ||
		(u >= 14 && u <= 31) ||
		(u >= 127 && u <= 159) ||
		u > 1114111
	);
}
function Mu(u) {
	if (u > 65535) {
		u -= 65536;
		const e = 55296 + (u >> 10),
			n = 56320 + (u & 1023);
		return String.fromCharCode(e, n);
	}
	return String.fromCharCode(u);
}
const I0 = /\\([!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])/g,
	Gr = /&([a-z#][a-z0-9]{1,31});/gi,
	Vr = new RegExp(I0.source + '|' + Gr.source, 'gi'),
	Wr = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))$/i;
function Kr(u, e) {
	if (e.charCodeAt(0) === 35 && Wr.test(e)) {
		const i = e[1].toLowerCase() === 'x' ? parseInt(e.slice(2), 16) : parseInt(e.slice(1), 10);
		return ke(i) ? Mu(i) : u;
	}
	const n = S0(u);
	return n !== u ? n : u;
}
function Qr(u) {
	return u.indexOf('\\') < 0 ? u : u.replace(I0, '$1');
}
function du(u) {
	return u.indexOf('\\') < 0 && u.indexOf('&') < 0
		? u
		: u.replace(Vr, function (e, n, i) {
				return n || Kr(e, i);
			});
}
const Jr = /[&<>"]/,
	Xr = /[&<>"]/g,
	ui = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' };
function ei(u) {
	return ui[u];
}
function J(u) {
	return Jr.test(u) ? u.replace(Xr, ei) : u;
}
const ni = /[.?*+^$[\]\\(){}|-]/g;
function ri(u) {
	return u.replace(ni, '\\$&');
}
function y(u) {
	switch (u) {
		case 9:
		case 32:
			return !0;
	}
	return !1;
}
function _u(u) {
	if (u >= 8192 && u <= 8202) return !0;
	switch (u) {
		case 9:
		case 10:
		case 11:
		case 12:
		case 13:
		case 32:
		case 160:
		case 5760:
		case 8239:
		case 8287:
		case 12288:
			return !0;
	}
	return !1;
}
function gu(u) {
	return _e.test(u) || F0.test(u);
}
function ku(u) {
	switch (u) {
		case 33:
		case 34:
		case 35:
		case 36:
		case 37:
		case 38:
		case 39:
		case 40:
		case 41:
		case 42:
		case 43:
		case 44:
		case 45:
		case 46:
		case 47:
		case 58:
		case 59:
		case 60:
		case 61:
		case 62:
		case 63:
		case 64:
		case 91:
		case 92:
		case 93:
		case 94:
		case 95:
		case 96:
		case 123:
		case 124:
		case 125:
		case 126:
			return !0;
		default:
			return !1;
	}
}
function Hu(u) {
	return (
		(u = u.trim().replace(/\s+/g, ' ')),
		'ẞ'.toLowerCase() === 'Ṿ' && (u = u.replace(/ẞ/g, 'ß')),
		u.toLowerCase().toUpperCase()
	);
}
const ii = { mdurl: Sr, ucmicro: Ir },
	ti = Object.freeze(
		Object.defineProperty(
			{
				__proto__: null,
				arrayReplaceAt: T0,
				assign: ju,
				escapeHtml: J,
				escapeRE: ri,
				fromCodePoint: Mu,
				has: Zr,
				isMdAsciiPunct: ku,
				isPunctChar: gu,
				isSpace: y,
				isString: ge,
				isValidEntityCode: ke,
				isWhiteSpace: _u,
				lib: ii,
				normalizeReference: Hu,
				unescapeAll: du,
				unescapeMd: Qr
			},
			Symbol.toStringTag,
			{ value: 'Module' }
		)
	);
function ci(u, e, n) {
	let i, r, t, c;
	const o = u.posMax,
		l = u.pos;
	for (u.pos = e + 1, i = 1; u.pos < o; ) {
		if (((t = u.src.charCodeAt(u.pos)), t === 93 && (i--, i === 0))) {
			r = !0;
			break;
		}
		if (((c = u.pos), u.md.inline.skipToken(u), t === 91)) {
			if (c === u.pos - 1) i++;
			else if (n) return (u.pos = l), -1;
		}
	}
	let a = -1;
	return r && (a = u.pos), (u.pos = l), a;
}
function oi(u, e, n) {
	let i,
		r = e;
	const t = { ok: !1, pos: 0, str: '' };
	if (u.charCodeAt(r) === 60) {
		for (r++; r < n; ) {
			if (((i = u.charCodeAt(r)), i === 10 || i === 60)) return t;
			if (i === 62) return (t.pos = r + 1), (t.str = du(u.slice(e + 1, r))), (t.ok = !0), t;
			if (i === 92 && r + 1 < n) {
				r += 2;
				continue;
			}
			r++;
		}
		return t;
	}
	let c = 0;
	for (; r < n && ((i = u.charCodeAt(r)), !(i === 32 || i < 32 || i === 127)); ) {
		if (i === 92 && r + 1 < n) {
			if (u.charCodeAt(r + 1) === 32) break;
			r += 2;
			continue;
		}
		if (i === 40 && (c++, c > 32)) return t;
		if (i === 41) {
			if (c === 0) break;
			c--;
		}
		r++;
	}
	return e === r || c !== 0 || ((t.str = du(u.slice(e, r))), (t.pos = r), (t.ok = !0)), t;
}
function li(u, e, n, i) {
	let r,
		t = e;
	const c = { ok: !1, can_continue: !1, pos: 0, str: '', marker: 0 };
	if (i) (c.str = i.str), (c.marker = i.marker);
	else {
		if (t >= n) return c;
		let o = u.charCodeAt(t);
		if (o !== 34 && o !== 39 && o !== 40) return c;
		e++, t++, o === 40 && (o = 41), (c.marker = o);
	}
	for (; t < n; ) {
		if (((r = u.charCodeAt(t)), r === c.marker))
			return (c.pos = t + 1), (c.str += du(u.slice(e, t))), (c.ok = !0), c;
		if (r === 40 && c.marker === 41) return c;
		r === 92 && t + 1 < n && t++, t++;
	}
	return (c.can_continue = !0), (c.str += du(u.slice(e, t))), c;
}
const ai = Object.freeze(
		Object.defineProperty(
			{ __proto__: null, parseLinkDestination: oi, parseLinkLabel: ci, parseLinkTitle: li },
			Symbol.toStringTag,
			{ value: 'Module' }
		)
	),
	U = {};
U.code_inline = function (u, e, n, i, r) {
	const t = u[e];
	return '<code' + r.renderAttrs(t) + '>' + J(t.content) + '</code>';
};
U.code_block = function (u, e, n, i, r) {
	const t = u[e];
	return (
		'<pre' +
		r.renderAttrs(t) +
		'><code>' +
		J(u[e].content) +
		`</code></pre>
`
	);
};
U.fence = function (u, e, n, i, r) {
	const t = u[e],
		c = t.info ? du(t.info).trim() : '';
	let o = '',
		l = '';
	if (c) {
		const f = c.split(/(\s+)/g);
		(o = f[0]), (l = f.slice(2).join(''));
	}
	let a;
	if (
		(n.highlight ? (a = n.highlight(t.content, o, l) || J(t.content)) : (a = J(t.content)),
		a.indexOf('<pre') === 0)
	)
		return (
			a +
			`
`
		);
	if (c) {
		const f = t.attrIndex('class'),
			s = t.attrs ? t.attrs.slice() : [];
		f < 0
			? s.push(['class', n.langPrefix + o])
			: ((s[f] = s[f].slice()), (s[f][1] += ' ' + n.langPrefix + o));
		const p = { attrs: s };
		return `<pre><code${r.renderAttrs(p)}>${a}</code></pre>
`;
	}
	return `<pre><code${r.renderAttrs(t)}>${a}</code></pre>
`;
};
U.image = function (u, e, n, i, r) {
	const t = u[e];
	return (
		(t.attrs[t.attrIndex('alt')][1] = r.renderInlineAsText(t.children, n, i)),
		r.renderToken(u, e, n)
	);
};
U.hardbreak = function (u, e, n) {
	return n.xhtmlOut
		? `<br />
`
		: `<br>
`;
};
U.softbreak = function (u, e, n) {
	return n.breaks
		? n.xhtmlOut
			? `<br />
`
			: `<br>
`
		: `
`;
};
U.text = function (u, e) {
	return J(u[e].content);
};
U.html_block = function (u, e) {
	return u[e].content;
};
U.html_inline = function (u, e) {
	return u[e].content;
};
function pu() {
	this.rules = ju({}, U);
}
pu.prototype.renderAttrs = function (e) {
	let n, i, r;
	if (!e.attrs) return '';
	for (r = '', n = 0, i = e.attrs.length; n < i; n++)
		r += ' ' + J(e.attrs[n][0]) + '="' + J(e.attrs[n][1]) + '"';
	return r;
};
pu.prototype.renderToken = function (e, n, i) {
	const r = e[n];
	let t = '';
	if (r.hidden) return '';
	r.block &&
		r.nesting !== -1 &&
		n &&
		e[n - 1].hidden &&
		(t += `
`),
		(t += (r.nesting === -1 ? '</' : '<') + r.tag),
		(t += this.renderAttrs(r)),
		r.nesting === 0 && i.xhtmlOut && (t += ' /');
	let c = !1;
	if (r.block && ((c = !0), r.nesting === 1 && n + 1 < e.length)) {
		const o = e[n + 1];
		(o.type === 'inline' || o.hidden || (o.nesting === -1 && o.tag === r.tag)) && (c = !1);
	}
	return (
		(t += c
			? `>
`
			: '>'),
		t
	);
};
pu.prototype.renderInline = function (u, e, n) {
	let i = '';
	const r = this.rules;
	for (let t = 0, c = u.length; t < c; t++) {
		const o = u[t].type;
		typeof r[o] < 'u' ? (i += r[o](u, t, e, n, this)) : (i += this.renderToken(u, t, e));
	}
	return i;
};
pu.prototype.renderInlineAsText = function (u, e, n) {
	let i = '';
	for (let r = 0, t = u.length; r < t; r++)
		switch (u[r].type) {
			case 'text':
				i += u[r].content;
				break;
			case 'image':
				i += this.renderInlineAsText(u[r].children, e, n);
				break;
			case 'html_inline':
			case 'html_block':
				i += u[r].content;
				break;
			case 'softbreak':
			case 'hardbreak':
				i += `
`;
				break;
		}
	return i;
};
pu.prototype.render = function (u, e, n) {
	let i = '';
	const r = this.rules;
	for (let t = 0, c = u.length; t < c; t++) {
		const o = u[t].type;
		o === 'inline'
			? (i += this.renderInline(u[t].children, e, n))
			: typeof r[o] < 'u'
				? (i += r[o](u, t, e, n, this))
				: (i += this.renderToken(u, t, e, n));
	}
	return i;
};
function B() {
	(this.__rules__ = []), (this.__cache__ = null);
}
B.prototype.__find__ = function (u) {
	for (let e = 0; e < this.__rules__.length; e++) if (this.__rules__[e].name === u) return e;
	return -1;
};
B.prototype.__compile__ = function () {
	const u = this,
		e = [''];
	u.__rules__.forEach(function (n) {
		n.enabled &&
			n.alt.forEach(function (i) {
				e.indexOf(i) < 0 && e.push(i);
			});
	}),
		(u.__cache__ = {}),
		e.forEach(function (n) {
			(u.__cache__[n] = []),
				u.__rules__.forEach(function (i) {
					i.enabled && ((n && i.alt.indexOf(n) < 0) || u.__cache__[n].push(i.fn));
				});
		});
};
B.prototype.at = function (u, e, n) {
	const i = this.__find__(u),
		r = n || {};
	if (i === -1) throw new Error('Parser rule not found: ' + u);
	(this.__rules__[i].fn = e), (this.__rules__[i].alt = r.alt || []), (this.__cache__ = null);
};
B.prototype.before = function (u, e, n, i) {
	const r = this.__find__(u),
		t = i || {};
	if (r === -1) throw new Error('Parser rule not found: ' + u);
	this.__rules__.splice(r, 0, { name: e, enabled: !0, fn: n, alt: t.alt || [] }),
		(this.__cache__ = null);
};
B.prototype.after = function (u, e, n, i) {
	const r = this.__find__(u),
		t = i || {};
	if (r === -1) throw new Error('Parser rule not found: ' + u);
	this.__rules__.splice(r + 1, 0, { name: e, enabled: !0, fn: n, alt: t.alt || [] }),
		(this.__cache__ = null);
};
B.prototype.push = function (u, e, n) {
	const i = n || {};
	this.__rules__.push({ name: u, enabled: !0, fn: e, alt: i.alt || [] }), (this.__cache__ = null);
};
B.prototype.enable = function (u, e) {
	Array.isArray(u) || (u = [u]);
	const n = [];
	return (
		u.forEach(function (i) {
			const r = this.__find__(i);
			if (r < 0) {
				if (e) return;
				throw new Error('Rules manager: invalid rule name ' + i);
			}
			(this.__rules__[r].enabled = !0), n.push(i);
		}, this),
		(this.__cache__ = null),
		n
	);
};
B.prototype.enableOnly = function (u, e) {
	Array.isArray(u) || (u = [u]),
		this.__rules__.forEach(function (n) {
			n.enabled = !1;
		}),
		this.enable(u, e);
};
B.prototype.disable = function (u, e) {
	Array.isArray(u) || (u = [u]);
	const n = [];
	return (
		u.forEach(function (i) {
			const r = this.__find__(i);
			if (r < 0) {
				if (e) return;
				throw new Error('Rules manager: invalid rule name ' + i);
			}
			(this.__rules__[r].enabled = !1), n.push(i);
		}, this),
		(this.__cache__ = null),
		n
	);
};
B.prototype.getRules = function (u) {
	return this.__cache__ === null && this.__compile__(), this.__cache__[u] || [];
};
function P(u, e, n) {
	(this.type = u),
		(this.tag = e),
		(this.attrs = null),
		(this.map = null),
		(this.nesting = n),
		(this.level = 0),
		(this.children = null),
		(this.content = ''),
		(this.markup = ''),
		(this.info = ''),
		(this.meta = null),
		(this.block = !1),
		(this.hidden = !1);
}
P.prototype.attrIndex = function (e) {
	if (!this.attrs) return -1;
	const n = this.attrs;
	for (let i = 0, r = n.length; i < r; i++) if (n[i][0] === e) return i;
	return -1;
};
P.prototype.attrPush = function (e) {
	this.attrs ? this.attrs.push(e) : (this.attrs = [e]);
};
P.prototype.attrSet = function (e, n) {
	const i = this.attrIndex(e),
		r = [e, n];
	i < 0 ? this.attrPush(r) : (this.attrs[i] = r);
};
P.prototype.attrGet = function (e) {
	const n = this.attrIndex(e);
	let i = null;
	return n >= 0 && (i = this.attrs[n][1]), i;
};
P.prototype.attrJoin = function (e, n) {
	const i = this.attrIndex(e);
	i < 0 ? this.attrPush([e, n]) : (this.attrs[i][1] = this.attrs[i][1] + ' ' + n);
};
function L0(u, e, n) {
	(this.src = u), (this.env = n), (this.tokens = []), (this.inlineMode = !1), (this.md = e);
}
L0.prototype.Token = P;
const fi = /\r\n?|\n/g,
	si = /\0/g;
function di(u) {
	let e;
	(e = u.src.replace(
		fi,
		`
`
	)),
		(e = e.replace(si, '�')),
		(u.src = e);
}
function hi(u) {
	let e;
	u.inlineMode
		? ((e = new u.Token('inline', '', 0)),
			(e.content = u.src),
			(e.map = [0, 1]),
			(e.children = []),
			u.tokens.push(e))
		: u.md.block.parse(u.src, u.md, u.env, u.tokens);
}
function pi(u) {
	const e = u.tokens;
	for (let n = 0, i = e.length; n < i; n++) {
		const r = e[n];
		r.type === 'inline' && u.md.inline.parse(r.content, u.md, u.env, r.children);
	}
}
function bi(u) {
	return /^<a[>\s]/i.test(u);
}
function xi(u) {
	return /^<\/a\s*>/i.test(u);
}
function mi(u) {
	const e = u.tokens;
	if (u.md.options.linkify)
		for (let n = 0, i = e.length; n < i; n++) {
			if (e[n].type !== 'inline' || !u.md.linkify.pretest(e[n].content)) continue;
			let r = e[n].children,
				t = 0;
			for (let c = r.length - 1; c >= 0; c--) {
				const o = r[c];
				if (o.type === 'link_close') {
					for (c--; r[c].level !== o.level && r[c].type !== 'link_open'; ) c--;
					continue;
				}
				if (
					(o.type === 'html_inline' && (bi(o.content) && t > 0 && t--, xi(o.content) && t++),
					!(t > 0) && o.type === 'text' && u.md.linkify.test(o.content))
				) {
					const l = o.content;
					let a = u.md.linkify.match(l);
					const f = [];
					let s = o.level,
						p = 0;
					a.length > 0 &&
						a[0].index === 0 &&
						c > 0 &&
						r[c - 1].type === 'text_special' &&
						(a = a.slice(1));
					for (let h = 0; h < a.length; h++) {
						const d = a[h].url,
							x = u.md.normalizeLink(d);
						if (!u.md.validateLink(x)) continue;
						let m = a[h].text;
						a[h].schema
							? a[h].schema === 'mailto:' && !/^mailto:/i.test(m)
								? (m = u.md.normalizeLinkText('mailto:' + m).replace(/^mailto:/, ''))
								: (m = u.md.normalizeLinkText(m))
							: (m = u.md.normalizeLinkText('http://' + m).replace(/^http:\/\//, ''));
						const _ = a[h].index;
						if (_ > p) {
							const C = new u.Token('text', '', 0);
							(C.content = l.slice(p, _)), (C.level = s), f.push(C);
						}
						const b = new u.Token('link_open', 'a', 1);
						(b.attrs = [['href', x]]),
							(b.level = s++),
							(b.markup = 'linkify'),
							(b.info = 'auto'),
							f.push(b);
						const A = new u.Token('text', '', 0);
						(A.content = m), (A.level = s), f.push(A);
						const k = new u.Token('link_close', 'a', -1);
						(k.level = --s),
							(k.markup = 'linkify'),
							(k.info = 'auto'),
							f.push(k),
							(p = a[h].lastIndex);
					}
					if (p < l.length) {
						const h = new u.Token('text', '', 0);
						(h.content = l.slice(p)), (h.level = s), f.push(h);
					}
					e[n].children = r = T0(r, c, f);
				}
			}
		}
}
const O0 = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/,
	_i = /\((c|tm|r)\)/i,
	gi = /\((c|tm|r)\)/gi,
	ki = { c: '©', r: '®', tm: '™' };
function Ai(u, e) {
	return ki[e.toLowerCase()];
}
function Ci(u) {
	let e = 0;
	for (let n = u.length - 1; n >= 0; n--) {
		const i = u[n];
		i.type === 'text' && !e && (i.content = i.content.replace(gi, Ai)),
			i.type === 'link_open' && i.info === 'auto' && e--,
			i.type === 'link_close' && i.info === 'auto' && e++;
	}
}
function Ei(u) {
	let e = 0;
	for (let n = u.length - 1; n >= 0; n--) {
		const i = u[n];
		i.type === 'text' &&
			!e &&
			O0.test(i.content) &&
			(i.content = i.content
				.replace(/\+-/g, '±')
				.replace(/\.{2,}/g, '…')
				.replace(/([?!])…/g, '$1..')
				.replace(/([?!]){4,}/g, '$1$1$1')
				.replace(/,{2,}/g, ',')
				.replace(/(^|[^-])---(?=[^-]|$)/gm, '$1—')
				.replace(/(^|\s)--(?=\s|$)/gm, '$1–')
				.replace(/(^|[^-\s])--(?=[^-\s]|$)/gm, '$1–')),
			i.type === 'link_open' && i.info === 'auto' && e--,
			i.type === 'link_close' && i.info === 'auto' && e++;
	}
}
function yi(u) {
	let e;
	if (u.md.options.typographer)
		for (e = u.tokens.length - 1; e >= 0; e--)
			u.tokens[e].type === 'inline' &&
				(_i.test(u.tokens[e].content) && Ci(u.tokens[e].children),
				O0.test(u.tokens[e].content) && Ei(u.tokens[e].children));
}
const Di = /['"]/,
	Ze = /['"]/g,
	Ge = '’';
function Tu(u, e, n) {
	return u.slice(0, e) + n + u.slice(e + 1);
}
function Fi(u, e) {
	let n;
	const i = [];
	for (let r = 0; r < u.length; r++) {
		const t = u[r],
			c = u[r].level;
		for (n = i.length - 1; n >= 0 && !(i[n].level <= c); n--);
		if (((i.length = n + 1), t.type !== 'text')) continue;
		let o = t.content,
			l = 0,
			a = o.length;
		u: for (; l < a; ) {
			Ze.lastIndex = l;
			const f = Ze.exec(o);
			if (!f) break;
			let s = !0,
				p = !0;
			l = f.index + 1;
			const h = f[0] === "'";
			let d = 32;
			if (f.index - 1 >= 0) d = o.charCodeAt(f.index - 1);
			else
				for (n = r - 1; n >= 0 && !(u[n].type === 'softbreak' || u[n].type === 'hardbreak'); n--)
					if (u[n].content) {
						d = u[n].content.charCodeAt(u[n].content.length - 1);
						break;
					}
			let x = 32;
			if (l < a) x = o.charCodeAt(l);
			else
				for (
					n = r + 1;
					n < u.length && !(u[n].type === 'softbreak' || u[n].type === 'hardbreak');
					n++
				)
					if (u[n].content) {
						x = u[n].content.charCodeAt(0);
						break;
					}
			const m = ku(d) || gu(String.fromCharCode(d)),
				_ = ku(x) || gu(String.fromCharCode(x)),
				b = _u(d),
				A = _u(x);
			if (
				(A ? (s = !1) : _ && (b || m || (s = !1)),
				b ? (p = !1) : m && (A || _ || (p = !1)),
				x === 34 && f[0] === '"' && d >= 48 && d <= 57 && (p = s = !1),
				s && p && ((s = m), (p = _)),
				!s && !p)
			) {
				h && (t.content = Tu(t.content, f.index, Ge));
				continue;
			}
			if (p)
				for (n = i.length - 1; n >= 0; n--) {
					let k = i[n];
					if (i[n].level < c) break;
					if (k.single === h && i[n].level === c) {
						k = i[n];
						let C, E;
						h
							? ((C = e.md.options.quotes[2]), (E = e.md.options.quotes[3]))
							: ((C = e.md.options.quotes[0]), (E = e.md.options.quotes[1])),
							(t.content = Tu(t.content, f.index, E)),
							(u[k.token].content = Tu(u[k.token].content, k.pos, C)),
							(l += E.length - 1),
							k.token === r && (l += C.length - 1),
							(o = t.content),
							(a = o.length),
							(i.length = n);
						continue u;
					}
				}
			s
				? i.push({ token: r, pos: f.index, single: h, level: c })
				: p && h && (t.content = Tu(t.content, f.index, Ge));
		}
	}
}
function vi(u) {
	if (u.md.options.typographer)
		for (let e = u.tokens.length - 1; e >= 0; e--)
			u.tokens[e].type !== 'inline' || !Di.test(u.tokens[e].content) || Fi(u.tokens[e].children, u);
}
function wi(u) {
	let e, n;
	const i = u.tokens,
		r = i.length;
	for (let t = 0; t < r; t++) {
		if (i[t].type !== 'inline') continue;
		const c = i[t].children,
			o = c.length;
		for (e = 0; e < o; e++) c[e].type === 'text_special' && (c[e].type = 'text');
		for (e = n = 0; e < o; e++)
			c[e].type === 'text' && e + 1 < o && c[e + 1].type === 'text'
				? (c[e + 1].content = c[e].content + c[e + 1].content)
				: (e !== n && (c[n] = c[e]), n++);
		e !== n && (c.length = n);
	}
}
const Wu = [
	['normalize', di],
	['block', hi],
	['inline', pi],
	['linkify', mi],
	['replacements', yi],
	['smartquotes', vi],
	['text_join', wi]
];
function Ae() {
	this.ruler = new B();
	for (let u = 0; u < Wu.length; u++) this.ruler.push(Wu[u][0], Wu[u][1]);
}
Ae.prototype.process = function (u) {
	const e = this.ruler.getRules('');
	for (let n = 0, i = e.length; n < i; n++) e[n](u);
};
Ae.prototype.State = L0;
function $(u, e, n, i) {
	(this.src = u),
		(this.md = e),
		(this.env = n),
		(this.tokens = i),
		(this.bMarks = []),
		(this.eMarks = []),
		(this.tShift = []),
		(this.sCount = []),
		(this.bsCount = []),
		(this.blkIndent = 0),
		(this.line = 0),
		(this.lineMax = 0),
		(this.tight = !1),
		(this.ddIndent = -1),
		(this.listIndent = -1),
		(this.parentType = 'root'),
		(this.level = 0);
	const r = this.src;
	for (let t = 0, c = 0, o = 0, l = 0, a = r.length, f = !1; c < a; c++) {
		const s = r.charCodeAt(c);
		if (!f)
			if (y(s)) {
				o++, s === 9 ? (l += 4 - (l % 4)) : l++;
				continue;
			} else f = !0;
		(s === 10 || c === a - 1) &&
			(s !== 10 && c++,
			this.bMarks.push(t),
			this.eMarks.push(c),
			this.tShift.push(o),
			this.sCount.push(l),
			this.bsCount.push(0),
			(f = !1),
			(o = 0),
			(l = 0),
			(t = c + 1));
	}
	this.bMarks.push(r.length),
		this.eMarks.push(r.length),
		this.tShift.push(0),
		this.sCount.push(0),
		this.bsCount.push(0),
		(this.lineMax = this.bMarks.length - 1);
}
$.prototype.push = function (u, e, n) {
	const i = new P(u, e, n);
	return (
		(i.block = !0),
		n < 0 && this.level--,
		(i.level = this.level),
		n > 0 && this.level++,
		this.tokens.push(i),
		i
	);
};
$.prototype.isEmpty = function (e) {
	return this.bMarks[e] + this.tShift[e] >= this.eMarks[e];
};
$.prototype.skipEmptyLines = function (e) {
	for (let n = this.lineMax; e < n && !(this.bMarks[e] + this.tShift[e] < this.eMarks[e]); e++);
	return e;
};
$.prototype.skipSpaces = function (e) {
	for (let n = this.src.length; e < n; e++) {
		const i = this.src.charCodeAt(e);
		if (!y(i)) break;
	}
	return e;
};
$.prototype.skipSpacesBack = function (e, n) {
	if (e <= n) return e;
	for (; e > n; ) if (!y(this.src.charCodeAt(--e))) return e + 1;
	return e;
};
$.prototype.skipChars = function (e, n) {
	for (let i = this.src.length; e < i && this.src.charCodeAt(e) === n; e++);
	return e;
};
$.prototype.skipCharsBack = function (e, n, i) {
	if (e <= i) return e;
	for (; e > i; ) if (n !== this.src.charCodeAt(--e)) return e + 1;
	return e;
};
$.prototype.getLines = function (e, n, i, r) {
	if (e >= n) return '';
	const t = new Array(n - e);
	for (let c = 0, o = e; o < n; o++, c++) {
		let l = 0;
		const a = this.bMarks[o];
		let f = a,
			s;
		for (o + 1 < n || r ? (s = this.eMarks[o] + 1) : (s = this.eMarks[o]); f < s && l < i; ) {
			const p = this.src.charCodeAt(f);
			if (y(p)) p === 9 ? (l += 4 - ((l + this.bsCount[o]) % 4)) : l++;
			else if (f - a < this.tShift[o]) l++;
			else break;
			f++;
		}
		l > i
			? (t[c] = new Array(l - i + 1).join(' ') + this.src.slice(f, s))
			: (t[c] = this.src.slice(f, s));
	}
	return t.join('');
};
$.prototype.Token = P;
const Si = 65536;
function Ku(u, e) {
	const n = u.bMarks[e] + u.tShift[e],
		i = u.eMarks[e];
	return u.src.slice(n, i);
}
function Ve(u) {
	const e = [],
		n = u.length;
	let i = 0,
		r = u.charCodeAt(i),
		t = !1,
		c = 0,
		o = '';
	for (; i < n; )
		r === 124 &&
			(t
				? ((o += u.substring(c, i - 1)), (c = i))
				: (e.push(o + u.substring(c, i)), (o = ''), (c = i + 1))),
			(t = r === 92),
			i++,
			(r = u.charCodeAt(i));
	return e.push(o + u.substring(c)), e;
}
function Ti(u, e, n, i) {
	if (e + 2 > n) return !1;
	let r = e + 1;
	if (u.sCount[r] < u.blkIndent || u.sCount[r] - u.blkIndent >= 4) return !1;
	let t = u.bMarks[r] + u.tShift[r];
	if (t >= u.eMarks[r]) return !1;
	const c = u.src.charCodeAt(t++);
	if ((c !== 124 && c !== 45 && c !== 58) || t >= u.eMarks[r]) return !1;
	const o = u.src.charCodeAt(t++);
	if ((o !== 124 && o !== 45 && o !== 58 && !y(o)) || (c === 45 && y(o))) return !1;
	for (; t < u.eMarks[r]; ) {
		const k = u.src.charCodeAt(t);
		if (k !== 124 && k !== 45 && k !== 58 && !y(k)) return !1;
		t++;
	}
	let l = Ku(u, e + 1),
		a = l.split('|');
	const f = [];
	for (let k = 0; k < a.length; k++) {
		const C = a[k].trim();
		if (!C) {
			if (k === 0 || k === a.length - 1) continue;
			return !1;
		}
		if (!/^:?-+:?$/.test(C)) return !1;
		C.charCodeAt(C.length - 1) === 58
			? f.push(C.charCodeAt(0) === 58 ? 'center' : 'right')
			: C.charCodeAt(0) === 58
				? f.push('left')
				: f.push('');
	}
	if (((l = Ku(u, e).trim()), l.indexOf('|') === -1 || u.sCount[e] - u.blkIndent >= 4)) return !1;
	(a = Ve(l)), a.length && a[0] === '' && a.shift(), a.length && a[a.length - 1] === '' && a.pop();
	const s = a.length;
	if (s === 0 || s !== f.length) return !1;
	if (i) return !0;
	const p = u.parentType;
	u.parentType = 'table';
	const h = u.md.block.ruler.getRules('blockquote'),
		d = u.push('table_open', 'table', 1),
		x = [e, 0];
	d.map = x;
	const m = u.push('thead_open', 'thead', 1);
	m.map = [e, e + 1];
	const _ = u.push('tr_open', 'tr', 1);
	_.map = [e, e + 1];
	for (let k = 0; k < a.length; k++) {
		const C = u.push('th_open', 'th', 1);
		f[k] && (C.attrs = [['style', 'text-align:' + f[k]]]);
		const E = u.push('inline', '', 0);
		(E.content = a[k].trim()), (E.children = []), u.push('th_close', 'th', -1);
	}
	u.push('tr_close', 'tr', -1), u.push('thead_close', 'thead', -1);
	let b,
		A = 0;
	for (r = e + 2; r < n && !(u.sCount[r] < u.blkIndent); r++) {
		let k = !1;
		for (let E = 0, D = h.length; E < D; E++)
			if (h[E](u, r, n, !0)) {
				k = !0;
				break;
			}
		if (
			k ||
			((l = Ku(u, r).trim()), !l) ||
			u.sCount[r] - u.blkIndent >= 4 ||
			((a = Ve(l)),
			a.length && a[0] === '' && a.shift(),
			a.length && a[a.length - 1] === '' && a.pop(),
			(A += s - a.length),
			A > Si)
		)
			break;
		if (r === e + 2) {
			const E = u.push('tbody_open', 'tbody', 1);
			E.map = b = [e + 2, 0];
		}
		const C = u.push('tr_open', 'tr', 1);
		C.map = [r, r + 1];
		for (let E = 0; E < s; E++) {
			const D = u.push('td_open', 'td', 1);
			f[E] && (D.attrs = [['style', 'text-align:' + f[E]]]);
			const L = u.push('inline', '', 0);
			(L.content = a[E] ? a[E].trim() : ''), (L.children = []), u.push('td_close', 'td', -1);
		}
		u.push('tr_close', 'tr', -1);
	}
	return (
		b && (u.push('tbody_close', 'tbody', -1), (b[1] = r)),
		u.push('table_close', 'table', -1),
		(x[1] = r),
		(u.parentType = p),
		(u.line = r),
		!0
	);
}
function Ii(u, e, n) {
	if (u.sCount[e] - u.blkIndent < 4) return !1;
	let i = e + 1,
		r = i;
	for (; i < n; ) {
		if (u.isEmpty(i)) {
			i++;
			continue;
		}
		if (u.sCount[i] - u.blkIndent >= 4) {
			i++, (r = i);
			continue;
		}
		break;
	}
	u.line = r;
	const t = u.push('code_block', 'code', 0);
	return (
		(t.content =
			u.getLines(e, r, 4 + u.blkIndent, !1) +
			`
`),
		(t.map = [e, u.line]),
		!0
	);
}
function Li(u, e, n, i) {
	let r = u.bMarks[e] + u.tShift[e],
		t = u.eMarks[e];
	if (u.sCount[e] - u.blkIndent >= 4 || r + 3 > t) return !1;
	const c = u.src.charCodeAt(r);
	if (c !== 126 && c !== 96) return !1;
	let o = r;
	r = u.skipChars(r, c);
	let l = r - o;
	if (l < 3) return !1;
	const a = u.src.slice(o, r),
		f = u.src.slice(r, t);
	if (c === 96 && f.indexOf(String.fromCharCode(c)) >= 0) return !1;
	if (i) return !0;
	let s = e,
		p = !1;
	for (
		;
		s++,
			!(
				s >= n ||
				((r = o = u.bMarks[s] + u.tShift[s]), (t = u.eMarks[s]), r < t && u.sCount[s] < u.blkIndent)
			);

	)
		if (
			u.src.charCodeAt(r) === c &&
			!(u.sCount[s] - u.blkIndent >= 4) &&
			((r = u.skipChars(r, c)), !(r - o < l) && ((r = u.skipSpaces(r)), !(r < t)))
		) {
			p = !0;
			break;
		}
	(l = u.sCount[e]), (u.line = s + (p ? 1 : 0));
	const h = u.push('fence', 'code', 0);
	return (
		(h.info = f),
		(h.content = u.getLines(e + 1, s, l, !0)),
		(h.markup = a),
		(h.map = [e, u.line]),
		!0
	);
}
function Oi(u, e, n, i) {
	let r = u.bMarks[e] + u.tShift[e],
		t = u.eMarks[e];
	const c = u.lineMax;
	if (u.sCount[e] - u.blkIndent >= 4 || u.src.charCodeAt(r) !== 62) return !1;
	if (i) return !0;
	const o = [],
		l = [],
		a = [],
		f = [],
		s = u.md.block.ruler.getRules('blockquote'),
		p = u.parentType;
	u.parentType = 'blockquote';
	let h = !1,
		d;
	for (d = e; d < n; d++) {
		const A = u.sCount[d] < u.blkIndent;
		if (((r = u.bMarks[d] + u.tShift[d]), (t = u.eMarks[d]), r >= t)) break;
		if (u.src.charCodeAt(r++) === 62 && !A) {
			let C = u.sCount[d] + 1,
				E,
				D;
			u.src.charCodeAt(r) === 32
				? (r++, C++, (D = !1), (E = !0))
				: u.src.charCodeAt(r) === 9
					? ((E = !0), (u.bsCount[d] + C) % 4 === 3 ? (r++, C++, (D = !1)) : (D = !0))
					: (E = !1);
			let L = C;
			for (o.push(u.bMarks[d]), u.bMarks[d] = r; r < t; ) {
				const z = u.src.charCodeAt(r);
				if (y(z)) z === 9 ? (L += 4 - ((L + u.bsCount[d] + (D ? 1 : 0)) % 4)) : L++;
				else break;
				r++;
			}
			(h = r >= t),
				l.push(u.bsCount[d]),
				(u.bsCount[d] = u.sCount[d] + 1 + (E ? 1 : 0)),
				a.push(u.sCount[d]),
				(u.sCount[d] = L - C),
				f.push(u.tShift[d]),
				(u.tShift[d] = r - u.bMarks[d]);
			continue;
		}
		if (h) break;
		let k = !1;
		for (let C = 0, E = s.length; C < E; C++)
			if (s[C](u, d, n, !0)) {
				k = !0;
				break;
			}
		if (k) {
			(u.lineMax = d),
				u.blkIndent !== 0 &&
					(o.push(u.bMarks[d]),
					l.push(u.bsCount[d]),
					f.push(u.tShift[d]),
					a.push(u.sCount[d]),
					(u.sCount[d] -= u.blkIndent));
			break;
		}
		o.push(u.bMarks[d]),
			l.push(u.bsCount[d]),
			f.push(u.tShift[d]),
			a.push(u.sCount[d]),
			(u.sCount[d] = -1);
	}
	const x = u.blkIndent;
	u.blkIndent = 0;
	const m = u.push('blockquote_open', 'blockquote', 1);
	m.markup = '>';
	const _ = [e, 0];
	(m.map = _), u.md.block.tokenize(u, e, d);
	const b = u.push('blockquote_close', 'blockquote', -1);
	(b.markup = '>'), (u.lineMax = c), (u.parentType = p), (_[1] = u.line);
	for (let A = 0; A < f.length; A++)
		(u.bMarks[A + e] = o[A]),
			(u.tShift[A + e] = f[A]),
			(u.sCount[A + e] = a[A]),
			(u.bsCount[A + e] = l[A]);
	return (u.blkIndent = x), !0;
}
function Mi(u, e, n, i) {
	const r = u.eMarks[e];
	if (u.sCount[e] - u.blkIndent >= 4) return !1;
	let t = u.bMarks[e] + u.tShift[e];
	const c = u.src.charCodeAt(t++);
	if (c !== 42 && c !== 45 && c !== 95) return !1;
	let o = 1;
	for (; t < r; ) {
		const a = u.src.charCodeAt(t++);
		if (a !== c && !y(a)) return !1;
		a === c && o++;
	}
	if (o < 3) return !1;
	if (i) return !0;
	u.line = e + 1;
	const l = u.push('hr', 'hr', 0);
	return (l.map = [e, u.line]), (l.markup = Array(o + 1).join(String.fromCharCode(c))), !0;
}
function We(u, e) {
	const n = u.eMarks[e];
	let i = u.bMarks[e] + u.tShift[e];
	const r = u.src.charCodeAt(i++);
	if (r !== 42 && r !== 45 && r !== 43) return -1;
	if (i < n) {
		const t = u.src.charCodeAt(i);
		if (!y(t)) return -1;
	}
	return i;
}
function Ke(u, e) {
	const n = u.bMarks[e] + u.tShift[e],
		i = u.eMarks[e];
	let r = n;
	if (r + 1 >= i) return -1;
	let t = u.src.charCodeAt(r++);
	if (t < 48 || t > 57) return -1;
	for (;;) {
		if (r >= i) return -1;
		if (((t = u.src.charCodeAt(r++)), t >= 48 && t <= 57)) {
			if (r - n >= 10) return -1;
			continue;
		}
		if (t === 41 || t === 46) break;
		return -1;
	}
	return r < i && ((t = u.src.charCodeAt(r)), !y(t)) ? -1 : r;
}
function Bi(u, e) {
	const n = u.level + 2;
	for (let i = e + 2, r = u.tokens.length - 2; i < r; i++)
		u.tokens[i].level === n &&
			u.tokens[i].type === 'paragraph_open' &&
			((u.tokens[i + 2].hidden = !0), (u.tokens[i].hidden = !0), (i += 2));
}
function Ri(u, e, n, i) {
	let r,
		t,
		c,
		o,
		l = e,
		a = !0;
	if (
		u.sCount[l] - u.blkIndent >= 4 ||
		(u.listIndent >= 0 && u.sCount[l] - u.listIndent >= 4 && u.sCount[l] < u.blkIndent)
	)
		return !1;
	let f = !1;
	i && u.parentType === 'paragraph' && u.sCount[l] >= u.blkIndent && (f = !0);
	let s, p, h;
	if ((h = Ke(u, l)) >= 0) {
		if (
			((s = !0), (c = u.bMarks[l] + u.tShift[l]), (p = Number(u.src.slice(c, h - 1))), f && p !== 1)
		)
			return !1;
	} else if ((h = We(u, l)) >= 0) s = !1;
	else return !1;
	if (f && u.skipSpaces(h) >= u.eMarks[l]) return !1;
	if (i) return !0;
	const d = u.src.charCodeAt(h - 1),
		x = u.tokens.length;
	s
		? ((o = u.push('ordered_list_open', 'ol', 1)), p !== 1 && (o.attrs = [['start', p]]))
		: (o = u.push('bullet_list_open', 'ul', 1));
	const m = [l, 0];
	(o.map = m), (o.markup = String.fromCharCode(d));
	let _ = !1;
	const b = u.md.block.ruler.getRules('list'),
		A = u.parentType;
	for (u.parentType = 'list'; l < n; ) {
		(t = h), (r = u.eMarks[l]);
		const k = u.sCount[l] + h - (u.bMarks[l] + u.tShift[l]);
		let C = k;
		for (; t < r; ) {
			const ru = u.src.charCodeAt(t);
			if (ru === 9) C += 4 - ((C + u.bsCount[l]) % 4);
			else if (ru === 32) C++;
			else break;
			t++;
		}
		const E = t;
		let D;
		E >= r ? (D = 1) : (D = C - k), D > 4 && (D = 1);
		const L = k + D;
		(o = u.push('list_item_open', 'li', 1)), (o.markup = String.fromCharCode(d));
		const z = [l, 0];
		(o.map = z), s && (o.info = u.src.slice(c, h - 1));
		const uu = u.tight,
			Zu = u.tShift[l],
			Pn = u.sCount[l],
			zn = u.listIndent;
		if (
			((u.listIndent = u.blkIndent),
			(u.blkIndent = L),
			(u.tight = !0),
			(u.tShift[l] = E - u.bMarks[l]),
			(u.sCount[l] = C),
			E >= r && u.isEmpty(l + 1)
				? (u.line = Math.min(u.line + 2, n))
				: u.md.block.tokenize(u, l, n, !0),
			(!u.tight || _) && (a = !1),
			(_ = u.line - l > 1 && u.isEmpty(u.line - 1)),
			(u.blkIndent = u.listIndent),
			(u.listIndent = zn),
			(u.tShift[l] = Zu),
			(u.sCount[l] = Pn),
			(u.tight = uu),
			(o = u.push('list_item_close', 'li', -1)),
			(o.markup = String.fromCharCode(d)),
			(l = u.line),
			(z[1] = l),
			l >= n || u.sCount[l] < u.blkIndent || u.sCount[l] - u.blkIndent >= 4)
		)
			break;
		let Te = !1;
		for (let ru = 0, qn = b.length; ru < qn; ru++)
			if (b[ru](u, l, n, !0)) {
				Te = !0;
				break;
			}
		if (Te) break;
		if (s) {
			if (((h = Ke(u, l)), h < 0)) break;
			c = u.bMarks[l] + u.tShift[l];
		} else if (((h = We(u, l)), h < 0)) break;
		if (d !== u.src.charCodeAt(h - 1)) break;
	}
	return (
		s ? (o = u.push('ordered_list_close', 'ol', -1)) : (o = u.push('bullet_list_close', 'ul', -1)),
		(o.markup = String.fromCharCode(d)),
		(m[1] = l),
		(u.line = l),
		(u.parentType = A),
		a && Bi(u, x),
		!0
	);
}
function Ni(u, e, n, i) {
	let r = u.bMarks[e] + u.tShift[e],
		t = u.eMarks[e],
		c = e + 1;
	if (u.sCount[e] - u.blkIndent >= 4 || u.src.charCodeAt(r) !== 91) return !1;
	function o(b) {
		const A = u.lineMax;
		if (b >= A || u.isEmpty(b)) return null;
		let k = !1;
		if ((u.sCount[b] - u.blkIndent > 3 && (k = !0), u.sCount[b] < 0 && (k = !0), !k)) {
			const D = u.md.block.ruler.getRules('reference'),
				L = u.parentType;
			u.parentType = 'reference';
			let z = !1;
			for (let uu = 0, Zu = D.length; uu < Zu; uu++)
				if (D[uu](u, b, A, !0)) {
					z = !0;
					break;
				}
			if (((u.parentType = L), z)) return null;
		}
		const C = u.bMarks[b] + u.tShift[b],
			E = u.eMarks[b];
		return u.src.slice(C, E + 1);
	}
	let l = u.src.slice(r, t + 1);
	t = l.length;
	let a = -1;
	for (r = 1; r < t; r++) {
		const b = l.charCodeAt(r);
		if (b === 91) return !1;
		if (b === 93) {
			a = r;
			break;
		} else if (b === 10) {
			const A = o(c);
			A !== null && ((l += A), (t = l.length), c++);
		} else if (b === 92 && (r++, r < t && l.charCodeAt(r) === 10)) {
			const A = o(c);
			A !== null && ((l += A), (t = l.length), c++);
		}
	}
	if (a < 0 || l.charCodeAt(a + 1) !== 58) return !1;
	for (r = a + 2; r < t; r++) {
		const b = l.charCodeAt(r);
		if (b === 10) {
			const A = o(c);
			A !== null && ((l += A), (t = l.length), c++);
		} else if (!y(b)) break;
	}
	const f = u.md.helpers.parseLinkDestination(l, r, t);
	if (!f.ok) return !1;
	const s = u.md.normalizeLink(f.str);
	if (!u.md.validateLink(s)) return !1;
	r = f.pos;
	const p = r,
		h = c,
		d = r;
	for (; r < t; r++) {
		const b = l.charCodeAt(r);
		if (b === 10) {
			const A = o(c);
			A !== null && ((l += A), (t = l.length), c++);
		} else if (!y(b)) break;
	}
	let x = u.md.helpers.parseLinkTitle(l, r, t);
	for (; x.can_continue; ) {
		const b = o(c);
		if (b === null) break;
		(l += b), (r = t), (t = l.length), c++, (x = u.md.helpers.parseLinkTitle(l, r, t, x));
	}
	let m;
	for (
		r < t && d !== r && x.ok ? ((m = x.str), (r = x.pos)) : ((m = ''), (r = p), (c = h));
		r < t;

	) {
		const b = l.charCodeAt(r);
		if (!y(b)) break;
		r++;
	}
	if (r < t && l.charCodeAt(r) !== 10 && m)
		for (m = '', r = p, c = h; r < t; ) {
			const b = l.charCodeAt(r);
			if (!y(b)) break;
			r++;
		}
	if (r < t && l.charCodeAt(r) !== 10) return !1;
	const _ = Hu(l.slice(1, a));
	return _
		? (i ||
				(typeof u.env.references > 'u' && (u.env.references = {}),
				typeof u.env.references[_] > 'u' && (u.env.references[_] = { title: m, href: s }),
				(u.line = c)),
			!0)
		: !1;
}
const Pi = [
		'address',
		'article',
		'aside',
		'base',
		'basefont',
		'blockquote',
		'body',
		'caption',
		'center',
		'col',
		'colgroup',
		'dd',
		'details',
		'dialog',
		'dir',
		'div',
		'dl',
		'dt',
		'fieldset',
		'figcaption',
		'figure',
		'footer',
		'form',
		'frame',
		'frameset',
		'h1',
		'h2',
		'h3',
		'h4',
		'h5',
		'h6',
		'head',
		'header',
		'hr',
		'html',
		'iframe',
		'legend',
		'li',
		'link',
		'main',
		'menu',
		'menuitem',
		'nav',
		'noframes',
		'ol',
		'optgroup',
		'option',
		'p',
		'param',
		'search',
		'section',
		'summary',
		'table',
		'tbody',
		'td',
		'tfoot',
		'th',
		'thead',
		'title',
		'tr',
		'track',
		'ul'
	],
	zi = '[a-zA-Z_:][a-zA-Z0-9:._-]*',
	qi = '[^"\'=<>`\\x00-\\x20]+',
	ji = "'[^']*'",
	Hi = '"[^"]*"',
	Ui = '(?:' + qi + '|' + ji + '|' + Hi + ')',
	$i = '(?:\\s+' + zi + '(?:\\s*=\\s*' + Ui + ')?)',
	M0 = '<[A-Za-z][A-Za-z0-9\\-]*' + $i + '*\\s*\\/?>',
	B0 = '<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>',
	Yi = '<!---?>|<!--(?:[^-]|-[^-]|--[^>])*-->',
	Zi = '<[?][\\s\\S]*?[?]>',
	Gi = '<![A-Za-z][^>]*>',
	Vi = '<!\\[CDATA\\[[\\s\\S]*?\\]\\]>',
	Wi = new RegExp('^(?:' + M0 + '|' + B0 + '|' + Yi + '|' + Zi + '|' + Gi + '|' + Vi + ')'),
	Ki = new RegExp('^(?:' + M0 + '|' + B0 + ')'),
	tu = [
		[/^<(script|pre|style|textarea)(?=(\s|>|$))/i, /<\/(script|pre|style|textarea)>/i, !0],
		[/^<!--/, /-->/, !0],
		[/^<\?/, /\?>/, !0],
		[/^<![A-Z]/, />/, !0],
		[/^<!\[CDATA\[/, /\]\]>/, !0],
		[new RegExp('^</?(' + Pi.join('|') + ')(?=(\\s|/?>|$))', 'i'), /^$/, !0],
		[new RegExp(Ki.source + '\\s*$'), /^$/, !1]
	];
function Qi(u, e, n, i) {
	let r = u.bMarks[e] + u.tShift[e],
		t = u.eMarks[e];
	if (u.sCount[e] - u.blkIndent >= 4 || !u.md.options.html || u.src.charCodeAt(r) !== 60) return !1;
	let c = u.src.slice(r, t),
		o = 0;
	for (; o < tu.length && !tu[o][0].test(c); o++);
	if (o === tu.length) return !1;
	if (i) return tu[o][2];
	let l = e + 1;
	if (!tu[o][1].test(c)) {
		for (; l < n && !(u.sCount[l] < u.blkIndent); l++)
			if (
				((r = u.bMarks[l] + u.tShift[l]),
				(t = u.eMarks[l]),
				(c = u.src.slice(r, t)),
				tu[o][1].test(c))
			) {
				c.length !== 0 && l++;
				break;
			}
	}
	u.line = l;
	const a = u.push('html_block', '', 0);
	return (a.map = [e, l]), (a.content = u.getLines(e, l, u.blkIndent, !0)), !0;
}
function Ji(u, e, n, i) {
	let r = u.bMarks[e] + u.tShift[e],
		t = u.eMarks[e];
	if (u.sCount[e] - u.blkIndent >= 4) return !1;
	let c = u.src.charCodeAt(r);
	if (c !== 35 || r >= t) return !1;
	let o = 1;
	for (c = u.src.charCodeAt(++r); c === 35 && r < t && o <= 6; ) o++, (c = u.src.charCodeAt(++r));
	if (o > 6 || (r < t && !y(c))) return !1;
	if (i) return !0;
	t = u.skipSpacesBack(t, r);
	const l = u.skipCharsBack(t, 35, r);
	l > r && y(u.src.charCodeAt(l - 1)) && (t = l), (u.line = e + 1);
	const a = u.push('heading_open', 'h' + String(o), 1);
	(a.markup = '########'.slice(0, o)), (a.map = [e, u.line]);
	const f = u.push('inline', '', 0);
	(f.content = u.src.slice(r, t).trim()), (f.map = [e, u.line]), (f.children = []);
	const s = u.push('heading_close', 'h' + String(o), -1);
	return (s.markup = '########'.slice(0, o)), !0;
}
function Xi(u, e, n) {
	const i = u.md.block.ruler.getRules('paragraph');
	if (u.sCount[e] - u.blkIndent >= 4) return !1;
	const r = u.parentType;
	u.parentType = 'paragraph';
	let t = 0,
		c,
		o = e + 1;
	for (; o < n && !u.isEmpty(o); o++) {
		if (u.sCount[o] - u.blkIndent > 3) continue;
		if (u.sCount[o] >= u.blkIndent) {
			let h = u.bMarks[o] + u.tShift[o];
			const d = u.eMarks[o];
			if (
				h < d &&
				((c = u.src.charCodeAt(h)),
				(c === 45 || c === 61) && ((h = u.skipChars(h, c)), (h = u.skipSpaces(h)), h >= d))
			) {
				t = c === 61 ? 1 : 2;
				break;
			}
		}
		if (u.sCount[o] < 0) continue;
		let p = !1;
		for (let h = 0, d = i.length; h < d; h++)
			if (i[h](u, o, n, !0)) {
				p = !0;
				break;
			}
		if (p) break;
	}
	if (!t) return !1;
	const l = u.getLines(e, o, u.blkIndent, !1).trim();
	u.line = o + 1;
	const a = u.push('heading_open', 'h' + String(t), 1);
	(a.markup = String.fromCharCode(c)), (a.map = [e, u.line]);
	const f = u.push('inline', '', 0);
	(f.content = l), (f.map = [e, u.line - 1]), (f.children = []);
	const s = u.push('heading_close', 'h' + String(t), -1);
	return (s.markup = String.fromCharCode(c)), (u.parentType = r), !0;
}
function ut(u, e, n) {
	const i = u.md.block.ruler.getRules('paragraph'),
		r = u.parentType;
	let t = e + 1;
	for (u.parentType = 'paragraph'; t < n && !u.isEmpty(t); t++) {
		if (u.sCount[t] - u.blkIndent > 3 || u.sCount[t] < 0) continue;
		let a = !1;
		for (let f = 0, s = i.length; f < s; f++)
			if (i[f](u, t, n, !0)) {
				a = !0;
				break;
			}
		if (a) break;
	}
	const c = u.getLines(e, t, u.blkIndent, !1).trim();
	u.line = t;
	const o = u.push('paragraph_open', 'p', 1);
	o.map = [e, u.line];
	const l = u.push('inline', '', 0);
	return (
		(l.content = c),
		(l.map = [e, u.line]),
		(l.children = []),
		u.push('paragraph_close', 'p', -1),
		(u.parentType = r),
		!0
	);
}
const Iu = [
	['table', Ti, ['paragraph', 'reference']],
	['code', Ii],
	['fence', Li, ['paragraph', 'reference', 'blockquote', 'list']],
	['blockquote', Oi, ['paragraph', 'reference', 'blockquote', 'list']],
	['hr', Mi, ['paragraph', 'reference', 'blockquote', 'list']],
	['list', Ri, ['paragraph', 'reference', 'blockquote']],
	['reference', Ni],
	['html_block', Qi, ['paragraph', 'reference', 'blockquote']],
	['heading', Ji, ['paragraph', 'reference', 'blockquote']],
	['lheading', Xi],
	['paragraph', ut]
];
function Uu() {
	this.ruler = new B();
	for (let u = 0; u < Iu.length; u++)
		this.ruler.push(Iu[u][0], Iu[u][1], { alt: (Iu[u][2] || []).slice() });
}
Uu.prototype.tokenize = function (u, e, n) {
	const i = this.ruler.getRules(''),
		r = i.length,
		t = u.md.options.maxNesting;
	let c = e,
		o = !1;
	for (; c < n && ((u.line = c = u.skipEmptyLines(c)), !(c >= n || u.sCount[c] < u.blkIndent)); ) {
		if (u.level >= t) {
			u.line = n;
			break;
		}
		const l = u.line;
		let a = !1;
		for (let f = 0; f < r; f++)
			if (((a = i[f](u, c, n, !1)), a)) {
				if (l >= u.line) throw new Error("block rule didn't increment state.line");
				break;
			}
		if (!a) throw new Error('none of the block rules matched');
		(u.tight = !o),
			u.isEmpty(u.line - 1) && (o = !0),
			(c = u.line),
			c < n && u.isEmpty(c) && ((o = !0), c++, (u.line = c));
	}
};
Uu.prototype.parse = function (u, e, n, i) {
	if (!u) return;
	const r = new this.State(u, e, n, i);
	this.tokenize(r, r.line, r.lineMax);
};
Uu.prototype.State = $;
function vu(u, e, n, i) {
	(this.src = u),
		(this.env = n),
		(this.md = e),
		(this.tokens = i),
		(this.tokens_meta = Array(i.length)),
		(this.pos = 0),
		(this.posMax = this.src.length),
		(this.level = 0),
		(this.pending = ''),
		(this.pendingLevel = 0),
		(this.cache = {}),
		(this.delimiters = []),
		(this._prev_delimiters = []),
		(this.backticks = {}),
		(this.backticksScanned = !1),
		(this.linkLevel = 0);
}
vu.prototype.pushPending = function () {
	const u = new P('text', '', 0);
	return (
		(u.content = this.pending),
		(u.level = this.pendingLevel),
		this.tokens.push(u),
		(this.pending = ''),
		u
	);
};
vu.prototype.push = function (u, e, n) {
	this.pending && this.pushPending();
	const i = new P(u, e, n);
	let r = null;
	return (
		n < 0 && (this.level--, (this.delimiters = this._prev_delimiters.pop())),
		(i.level = this.level),
		n > 0 &&
			(this.level++,
			this._prev_delimiters.push(this.delimiters),
			(this.delimiters = []),
			(r = { delimiters: this.delimiters })),
		(this.pendingLevel = this.level),
		this.tokens.push(i),
		this.tokens_meta.push(r),
		i
	);
};
vu.prototype.scanDelims = function (u, e) {
	const n = this.posMax,
		i = this.src.charCodeAt(u),
		r = u > 0 ? this.src.charCodeAt(u - 1) : 32;
	let t = u;
	for (; t < n && this.src.charCodeAt(t) === i; ) t++;
	const c = t - u,
		o = t < n ? this.src.charCodeAt(t) : 32,
		l = ku(r) || gu(String.fromCharCode(r)),
		a = ku(o) || gu(String.fromCharCode(o)),
		f = _u(r),
		s = _u(o),
		p = !s && (!a || f || l),
		h = !f && (!l || s || a);
	return { can_open: p && (e || !h || l), can_close: h && (e || !p || a), length: c };
};
vu.prototype.Token = P;
function et(u) {
	switch (u) {
		case 10:
		case 33:
		case 35:
		case 36:
		case 37:
		case 38:
		case 42:
		case 43:
		case 45:
		case 58:
		case 60:
		case 61:
		case 62:
		case 64:
		case 91:
		case 92:
		case 93:
		case 94:
		case 95:
		case 96:
		case 123:
		case 125:
		case 126:
			return !0;
		default:
			return !1;
	}
}
function nt(u, e) {
	let n = u.pos;
	for (; n < u.posMax && !et(u.src.charCodeAt(n)); ) n++;
	return n === u.pos ? !1 : (e || (u.pending += u.src.slice(u.pos, n)), (u.pos = n), !0);
}
const rt = /(?:^|[^a-z0-9.+-])([a-z][a-z0-9.+-]*)$/i;
function it(u, e) {
	if (!u.md.options.linkify || u.linkLevel > 0) return !1;
	const n = u.pos,
		i = u.posMax;
	if (
		n + 3 > i ||
		u.src.charCodeAt(n) !== 58 ||
		u.src.charCodeAt(n + 1) !== 47 ||
		u.src.charCodeAt(n + 2) !== 47
	)
		return !1;
	const r = u.pending.match(rt);
	if (!r) return !1;
	const t = r[1],
		c = u.md.linkify.matchAtStart(u.src.slice(n - t.length));
	if (!c) return !1;
	let o = c.url;
	if (o.length <= t.length) return !1;
	o = o.replace(/\*+$/, '');
	const l = u.md.normalizeLink(o);
	if (!u.md.validateLink(l)) return !1;
	if (!e) {
		u.pending = u.pending.slice(0, -t.length);
		const a = u.push('link_open', 'a', 1);
		(a.attrs = [['href', l]]), (a.markup = 'linkify'), (a.info = 'auto');
		const f = u.push('text', '', 0);
		f.content = u.md.normalizeLinkText(o);
		const s = u.push('link_close', 'a', -1);
		(s.markup = 'linkify'), (s.info = 'auto');
	}
	return (u.pos += o.length - t.length), !0;
}
function tt(u, e) {
	let n = u.pos;
	if (u.src.charCodeAt(n) !== 10) return !1;
	const i = u.pending.length - 1,
		r = u.posMax;
	if (!e)
		if (i >= 0 && u.pending.charCodeAt(i) === 32)
			if (i >= 1 && u.pending.charCodeAt(i - 1) === 32) {
				let t = i - 1;
				for (; t >= 1 && u.pending.charCodeAt(t - 1) === 32; ) t--;
				(u.pending = u.pending.slice(0, t)), u.push('hardbreak', 'br', 0);
			} else (u.pending = u.pending.slice(0, -1)), u.push('softbreak', 'br', 0);
		else u.push('softbreak', 'br', 0);
	for (n++; n < r && y(u.src.charCodeAt(n)); ) n++;
	return (u.pos = n), !0;
}
const Ce = [];
for (let u = 0; u < 256; u++) Ce.push(0);
'\\!"#$%&\'()*+,./:;<=>?@[]^_`{|}~-'.split('').forEach(function (u) {
	Ce[u.charCodeAt(0)] = 1;
});
function ct(u, e) {
	let n = u.pos;
	const i = u.posMax;
	if (u.src.charCodeAt(n) !== 92 || (n++, n >= i)) return !1;
	let r = u.src.charCodeAt(n);
	if (r === 10) {
		for (e || u.push('hardbreak', 'br', 0), n++; n < i && ((r = u.src.charCodeAt(n)), !!y(r)); )
			n++;
		return (u.pos = n), !0;
	}
	let t = u.src[n];
	if (r >= 55296 && r <= 56319 && n + 1 < i) {
		const o = u.src.charCodeAt(n + 1);
		o >= 56320 && o <= 57343 && ((t += u.src[n + 1]), n++);
	}
	const c = '\\' + t;
	if (!e) {
		const o = u.push('text_special', '', 0);
		r < 256 && Ce[r] !== 0 ? (o.content = t) : (o.content = c), (o.markup = c), (o.info = 'escape');
	}
	return (u.pos = n + 1), !0;
}
function ot(u, e) {
	let n = u.pos;
	if (u.src.charCodeAt(n) !== 96) return !1;
	const r = n;
	n++;
	const t = u.posMax;
	for (; n < t && u.src.charCodeAt(n) === 96; ) n++;
	const c = u.src.slice(r, n),
		o = c.length;
	if (u.backticksScanned && (u.backticks[o] || 0) <= r)
		return e || (u.pending += c), (u.pos += o), !0;
	let l = n,
		a;
	for (; (a = u.src.indexOf('`', l)) !== -1; ) {
		for (l = a + 1; l < t && u.src.charCodeAt(l) === 96; ) l++;
		const f = l - a;
		if (f === o) {
			if (!e) {
				const s = u.push('code_inline', 'code', 0);
				(s.markup = c),
					(s.content = u.src
						.slice(n, a)
						.replace(/\n/g, ' ')
						.replace(/^ (.+) $/, '$1'));
			}
			return (u.pos = l), !0;
		}
		u.backticks[f] = a;
	}
	return (u.backticksScanned = !0), e || (u.pending += c), (u.pos += o), !0;
}
function lt(u, e) {
	const n = u.pos,
		i = u.src.charCodeAt(n);
	if (e || i !== 126) return !1;
	const r = u.scanDelims(u.pos, !0);
	let t = r.length;
	const c = String.fromCharCode(i);
	if (t < 2) return !1;
	let o;
	t % 2 && ((o = u.push('text', '', 0)), (o.content = c), t--);
	for (let l = 0; l < t; l += 2)
		(o = u.push('text', '', 0)),
			(o.content = c + c),
			u.delimiters.push({
				marker: i,
				length: 0,
				token: u.tokens.length - 1,
				end: -1,
				open: r.can_open,
				close: r.can_close
			});
	return (u.pos += r.length), !0;
}
function Qe(u, e) {
	let n;
	const i = [],
		r = e.length;
	for (let t = 0; t < r; t++) {
		const c = e[t];
		if (c.marker !== 126 || c.end === -1) continue;
		const o = e[c.end];
		(n = u.tokens[c.token]),
			(n.type = 's_open'),
			(n.tag = 's'),
			(n.nesting = 1),
			(n.markup = '~~'),
			(n.content = ''),
			(n = u.tokens[o.token]),
			(n.type = 's_close'),
			(n.tag = 's'),
			(n.nesting = -1),
			(n.markup = '~~'),
			(n.content = ''),
			u.tokens[o.token - 1].type === 'text' &&
				u.tokens[o.token - 1].content === '~' &&
				i.push(o.token - 1);
	}
	for (; i.length; ) {
		const t = i.pop();
		let c = t + 1;
		for (; c < u.tokens.length && u.tokens[c].type === 's_close'; ) c++;
		c--, t !== c && ((n = u.tokens[c]), (u.tokens[c] = u.tokens[t]), (u.tokens[t] = n));
	}
}
function at(u) {
	const e = u.tokens_meta,
		n = u.tokens_meta.length;
	Qe(u, u.delimiters);
	for (let i = 0; i < n; i++) e[i] && e[i].delimiters && Qe(u, e[i].delimiters);
}
const R0 = { tokenize: lt, postProcess: at };
function ft(u, e) {
	const n = u.pos,
		i = u.src.charCodeAt(n);
	if (e || (i !== 95 && i !== 42)) return !1;
	const r = u.scanDelims(u.pos, i === 42);
	for (let t = 0; t < r.length; t++) {
		const c = u.push('text', '', 0);
		(c.content = String.fromCharCode(i)),
			u.delimiters.push({
				marker: i,
				length: r.length,
				token: u.tokens.length - 1,
				end: -1,
				open: r.can_open,
				close: r.can_close
			});
	}
	return (u.pos += r.length), !0;
}
function Je(u, e) {
	const n = e.length;
	for (let i = n - 1; i >= 0; i--) {
		const r = e[i];
		if ((r.marker !== 95 && r.marker !== 42) || r.end === -1) continue;
		const t = e[r.end],
			c =
				i > 0 &&
				e[i - 1].end === r.end + 1 &&
				e[i - 1].marker === r.marker &&
				e[i - 1].token === r.token - 1 &&
				e[r.end + 1].token === t.token + 1,
			o = String.fromCharCode(r.marker),
			l = u.tokens[r.token];
		(l.type = c ? 'strong_open' : 'em_open'),
			(l.tag = c ? 'strong' : 'em'),
			(l.nesting = 1),
			(l.markup = c ? o + o : o),
			(l.content = '');
		const a = u.tokens[t.token];
		(a.type = c ? 'strong_close' : 'em_close'),
			(a.tag = c ? 'strong' : 'em'),
			(a.nesting = -1),
			(a.markup = c ? o + o : o),
			(a.content = ''),
			c &&
				((u.tokens[e[i - 1].token].content = ''), (u.tokens[e[r.end + 1].token].content = ''), i--);
	}
}
function st(u) {
	const e = u.tokens_meta,
		n = u.tokens_meta.length;
	Je(u, u.delimiters);
	for (let i = 0; i < n; i++) e[i] && e[i].delimiters && Je(u, e[i].delimiters);
}
const N0 = { tokenize: ft, postProcess: st };
function dt(u, e) {
	let n,
		i,
		r,
		t,
		c = '',
		o = '',
		l = u.pos,
		a = !0;
	if (u.src.charCodeAt(u.pos) !== 91) return !1;
	const f = u.pos,
		s = u.posMax,
		p = u.pos + 1,
		h = u.md.helpers.parseLinkLabel(u, u.pos, !0);
	if (h < 0) return !1;
	let d = h + 1;
	if (d < s && u.src.charCodeAt(d) === 40) {
		for (a = !1, d++; d < s && ((n = u.src.charCodeAt(d)), !(!y(n) && n !== 10)); d++);
		if (d >= s) return !1;
		if (((l = d), (r = u.md.helpers.parseLinkDestination(u.src, d, u.posMax)), r.ok)) {
			for (
				c = u.md.normalizeLink(r.str), u.md.validateLink(c) ? (d = r.pos) : (c = ''), l = d;
				d < s && ((n = u.src.charCodeAt(d)), !(!y(n) && n !== 10));
				d++
			);
			if (((r = u.md.helpers.parseLinkTitle(u.src, d, u.posMax)), d < s && l !== d && r.ok))
				for (o = r.str, d = r.pos; d < s && ((n = u.src.charCodeAt(d)), !(!y(n) && n !== 10)); d++);
		}
		(d >= s || u.src.charCodeAt(d) !== 41) && (a = !0), d++;
	}
	if (a) {
		if (typeof u.env.references > 'u') return !1;
		if (
			(d < s && u.src.charCodeAt(d) === 91
				? ((l = d + 1),
					(d = u.md.helpers.parseLinkLabel(u, d)),
					d >= 0 ? (i = u.src.slice(l, d++)) : (d = h + 1))
				: (d = h + 1),
			i || (i = u.src.slice(p, h)),
			(t = u.env.references[Hu(i)]),
			!t)
		)
			return (u.pos = f), !1;
		(c = t.href), (o = t.title);
	}
	if (!e) {
		(u.pos = p), (u.posMax = h);
		const x = u.push('link_open', 'a', 1),
			m = [['href', c]];
		(x.attrs = m),
			o && m.push(['title', o]),
			u.linkLevel++,
			u.md.inline.tokenize(u),
			u.linkLevel--,
			u.push('link_close', 'a', -1);
	}
	return (u.pos = d), (u.posMax = s), !0;
}
function ht(u, e) {
	let n,
		i,
		r,
		t,
		c,
		o,
		l,
		a,
		f = '';
	const s = u.pos,
		p = u.posMax;
	if (u.src.charCodeAt(u.pos) !== 33 || u.src.charCodeAt(u.pos + 1) !== 91) return !1;
	const h = u.pos + 2,
		d = u.md.helpers.parseLinkLabel(u, u.pos + 1, !1);
	if (d < 0) return !1;
	if (((t = d + 1), t < p && u.src.charCodeAt(t) === 40)) {
		for (t++; t < p && ((n = u.src.charCodeAt(t)), !(!y(n) && n !== 10)); t++);
		if (t >= p) return !1;
		for (
			a = t,
				o = u.md.helpers.parseLinkDestination(u.src, t, u.posMax),
				o.ok && ((f = u.md.normalizeLink(o.str)), u.md.validateLink(f) ? (t = o.pos) : (f = '')),
				a = t;
			t < p && ((n = u.src.charCodeAt(t)), !(!y(n) && n !== 10));
			t++
		);
		if (((o = u.md.helpers.parseLinkTitle(u.src, t, u.posMax)), t < p && a !== t && o.ok))
			for (l = o.str, t = o.pos; t < p && ((n = u.src.charCodeAt(t)), !(!y(n) && n !== 10)); t++);
		else l = '';
		if (t >= p || u.src.charCodeAt(t) !== 41) return (u.pos = s), !1;
		t++;
	} else {
		if (typeof u.env.references > 'u') return !1;
		if (
			(t < p && u.src.charCodeAt(t) === 91
				? ((a = t + 1),
					(t = u.md.helpers.parseLinkLabel(u, t)),
					t >= 0 ? (r = u.src.slice(a, t++)) : (t = d + 1))
				: (t = d + 1),
			r || (r = u.src.slice(h, d)),
			(c = u.env.references[Hu(r)]),
			!c)
		)
			return (u.pos = s), !1;
		(f = c.href), (l = c.title);
	}
	if (!e) {
		i = u.src.slice(h, d);
		const x = [];
		u.md.inline.parse(i, u.md, u.env, x);
		const m = u.push('image', 'img', 0),
			_ = [
				['src', f],
				['alt', '']
			];
		(m.attrs = _), (m.children = x), (m.content = i), l && _.push(['title', l]);
	}
	return (u.pos = t), (u.posMax = p), !0;
}
const pt =
		/^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/,
	bt = /^([a-zA-Z][a-zA-Z0-9+.-]{1,31}):([^<>\x00-\x20]*)$/;
function xt(u, e) {
	let n = u.pos;
	if (u.src.charCodeAt(n) !== 60) return !1;
	const i = u.pos,
		r = u.posMax;
	for (;;) {
		if (++n >= r) return !1;
		const c = u.src.charCodeAt(n);
		if (c === 60) return !1;
		if (c === 62) break;
	}
	const t = u.src.slice(i + 1, n);
	if (bt.test(t)) {
		const c = u.md.normalizeLink(t);
		if (!u.md.validateLink(c)) return !1;
		if (!e) {
			const o = u.push('link_open', 'a', 1);
			(o.attrs = [['href', c]]), (o.markup = 'autolink'), (o.info = 'auto');
			const l = u.push('text', '', 0);
			l.content = u.md.normalizeLinkText(t);
			const a = u.push('link_close', 'a', -1);
			(a.markup = 'autolink'), (a.info = 'auto');
		}
		return (u.pos += t.length + 2), !0;
	}
	if (pt.test(t)) {
		const c = u.md.normalizeLink('mailto:' + t);
		if (!u.md.validateLink(c)) return !1;
		if (!e) {
			const o = u.push('link_open', 'a', 1);
			(o.attrs = [['href', c]]), (o.markup = 'autolink'), (o.info = 'auto');
			const l = u.push('text', '', 0);
			l.content = u.md.normalizeLinkText(t);
			const a = u.push('link_close', 'a', -1);
			(a.markup = 'autolink'), (a.info = 'auto');
		}
		return (u.pos += t.length + 2), !0;
	}
	return !1;
}
function mt(u) {
	return /^<a[>\s]/i.test(u);
}
function _t(u) {
	return /^<\/a\s*>/i.test(u);
}
function gt(u) {
	const e = u | 32;
	return e >= 97 && e <= 122;
}
function kt(u, e) {
	if (!u.md.options.html) return !1;
	const n = u.posMax,
		i = u.pos;
	if (u.src.charCodeAt(i) !== 60 || i + 2 >= n) return !1;
	const r = u.src.charCodeAt(i + 1);
	if (r !== 33 && r !== 63 && r !== 47 && !gt(r)) return !1;
	const t = u.src.slice(i).match(Wi);
	if (!t) return !1;
	if (!e) {
		const c = u.push('html_inline', '', 0);
		(c.content = t[0]), mt(c.content) && u.linkLevel++, _t(c.content) && u.linkLevel--;
	}
	return (u.pos += t[0].length), !0;
}
const At = /^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i,
	Ct = /^&([a-z][a-z0-9]{1,31});/i;
function Et(u, e) {
	const n = u.pos,
		i = u.posMax;
	if (u.src.charCodeAt(n) !== 38 || n + 1 >= i) return !1;
	if (u.src.charCodeAt(n + 1) === 35) {
		const t = u.src.slice(n).match(At);
		if (t) {
			if (!e) {
				const c = t[1][0].toLowerCase() === 'x' ? parseInt(t[1].slice(1), 16) : parseInt(t[1], 10),
					o = u.push('text_special', '', 0);
				(o.content = ke(c) ? Mu(c) : Mu(65533)), (o.markup = t[0]), (o.info = 'entity');
			}
			return (u.pos += t[0].length), !0;
		}
	} else {
		const t = u.src.slice(n).match(Ct);
		if (t) {
			const c = S0(t[0]);
			if (c !== t[0]) {
				if (!e) {
					const o = u.push('text_special', '', 0);
					(o.content = c), (o.markup = t[0]), (o.info = 'entity');
				}
				return (u.pos += t[0].length), !0;
			}
		}
	}
	return !1;
}
function Xe(u) {
	const e = {},
		n = u.length;
	if (!n) return;
	let i = 0,
		r = -2;
	const t = [];
	for (let c = 0; c < n; c++) {
		const o = u[c];
		if (
			(t.push(0),
			(u[i].marker !== o.marker || r !== o.token - 1) && (i = c),
			(r = o.token),
			(o.length = o.length || 0),
			!o.close)
		)
			continue;
		e.hasOwnProperty(o.marker) || (e[o.marker] = [-1, -1, -1, -1, -1, -1]);
		const l = e[o.marker][(o.open ? 3 : 0) + (o.length % 3)];
		let a = i - t[i] - 1,
			f = a;
		for (; a > l; a -= t[a] + 1) {
			const s = u[a];
			if (s.marker === o.marker && s.open && s.end < 0) {
				let p = !1;
				if (
					((s.close || o.open) &&
						(s.length + o.length) % 3 === 0 &&
						(s.length % 3 !== 0 || o.length % 3 !== 0) &&
						(p = !0),
					!p)
				) {
					const h = a > 0 && !u[a - 1].open ? t[a - 1] + 1 : 0;
					(t[c] = c - a + h),
						(t[a] = h),
						(o.open = !1),
						(s.end = c),
						(s.close = !1),
						(f = -1),
						(r = -2);
					break;
				}
			}
		}
		f !== -1 && (e[o.marker][(o.open ? 3 : 0) + ((o.length || 0) % 3)] = f);
	}
}
function yt(u) {
	const e = u.tokens_meta,
		n = u.tokens_meta.length;
	Xe(u.delimiters);
	for (let i = 0; i < n; i++) e[i] && e[i].delimiters && Xe(e[i].delimiters);
}
function Dt(u) {
	let e,
		n,
		i = 0;
	const r = u.tokens,
		t = u.tokens.length;
	for (e = n = 0; e < t; e++)
		r[e].nesting < 0 && i--,
			(r[e].level = i),
			r[e].nesting > 0 && i++,
			r[e].type === 'text' && e + 1 < t && r[e + 1].type === 'text'
				? (r[e + 1].content = r[e].content + r[e + 1].content)
				: (e !== n && (r[n] = r[e]), n++);
	e !== n && (r.length = n);
}
const Qu = [
		['text', nt],
		['linkify', it],
		['newline', tt],
		['escape', ct],
		['backticks', ot],
		['strikethrough', R0.tokenize],
		['emphasis', N0.tokenize],
		['link', dt],
		['image', ht],
		['autolink', xt],
		['html_inline', kt],
		['entity', Et]
	],
	Ju = [
		['balance_pairs', yt],
		['strikethrough', R0.postProcess],
		['emphasis', N0.postProcess],
		['fragments_join', Dt]
	];
function wu() {
	this.ruler = new B();
	for (let u = 0; u < Qu.length; u++) this.ruler.push(Qu[u][0], Qu[u][1]);
	this.ruler2 = new B();
	for (let u = 0; u < Ju.length; u++) this.ruler2.push(Ju[u][0], Ju[u][1]);
}
wu.prototype.skipToken = function (u) {
	const e = u.pos,
		n = this.ruler.getRules(''),
		i = n.length,
		r = u.md.options.maxNesting,
		t = u.cache;
	if (typeof t[e] < 'u') {
		u.pos = t[e];
		return;
	}
	let c = !1;
	if (u.level < r) {
		for (let o = 0; o < i; o++)
			if ((u.level++, (c = n[o](u, !0)), u.level--, c)) {
				if (e >= u.pos) throw new Error("inline rule didn't increment state.pos");
				break;
			}
	} else u.pos = u.posMax;
	c || u.pos++, (t[e] = u.pos);
};
wu.prototype.tokenize = function (u) {
	const e = this.ruler.getRules(''),
		n = e.length,
		i = u.posMax,
		r = u.md.options.maxNesting;
	for (; u.pos < i; ) {
		const t = u.pos;
		let c = !1;
		if (u.level < r) {
			for (let o = 0; o < n; o++)
				if (((c = e[o](u, !1)), c)) {
					if (t >= u.pos) throw new Error("inline rule didn't increment state.pos");
					break;
				}
		}
		if (c) {
			if (u.pos >= i) break;
			continue;
		}
		u.pending += u.src[u.pos++];
	}
	u.pending && u.pushPending();
};
wu.prototype.parse = function (u, e, n, i) {
	const r = new this.State(u, e, n, i);
	this.tokenize(r);
	const t = this.ruler2.getRules(''),
		c = t.length;
	for (let o = 0; o < c; o++) t[o](r);
};
wu.prototype.State = vu;
function Ft(u) {
	const e = {};
	(u = u || {}),
		(e.src_Any = y0.source),
		(e.src_Cc = D0.source),
		(e.src_Z = v0.source),
		(e.src_P = _e.source),
		(e.src_ZPCc = [e.src_Z, e.src_P, e.src_Cc].join('|')),
		(e.src_ZCc = [e.src_Z, e.src_Cc].join('|'));
	const n = '[><｜]';
	return (
		(e.src_pseudo_letter = '(?:(?!' + n + '|' + e.src_ZPCc + ')' + e.src_Any + ')'),
		(e.src_ip4 =
			'(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)'),
		(e.src_auth = '(?:(?:(?!' + e.src_ZCc + '|[@/\\[\\]()]).)+@)?'),
		(e.src_port =
			'(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?'),
		(e.src_host_terminator =
			'(?=$|' +
			n +
			'|' +
			e.src_ZPCc +
			')(?!' +
			(u['---'] ? '-(?!--)|' : '-|') +
			'_|:\\d|\\.-|\\.(?!$|' +
			e.src_ZPCc +
			'))'),
		(e.src_path =
			'(?:[/?#](?:(?!' +
			e.src_ZCc +
			'|' +
			n +
			`|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!` +
			e.src_ZCc +
			'|\\]).)*\\]|\\((?:(?!' +
			e.src_ZCc +
			'|[)]).)*\\)|\\{(?:(?!' +
			e.src_ZCc +
			'|[}]).)*\\}|\\"(?:(?!' +
			e.src_ZCc +
			`|["]).)+\\"|\\'(?:(?!` +
			e.src_ZCc +
			"|[']).)+\\'|\\'(?=" +
			e.src_pseudo_letter +
			'|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!' +
			e.src_ZCc +
			'|[.]|$)|' +
			(u['---'] ? '\\-(?!--(?:[^-]|$))(?:-*)|' : '\\-+|') +
			',(?!' +
			e.src_ZCc +
			'|$)|;(?!' +
			e.src_ZCc +
			'|$)|\\!+(?!' +
			e.src_ZCc +
			'|[!]|$)|\\?(?!' +
			e.src_ZCc +
			'|[?]|$))+|\\/)?'),
		(e.src_email_name = '[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*'),
		(e.src_xn = 'xn--[a-z0-9\\-]{1,59}'),
		(e.src_domain_root = '(?:' + e.src_xn + '|' + e.src_pseudo_letter + '{1,63})'),
		(e.src_domain =
			'(?:' +
			e.src_xn +
			'|(?:' +
			e.src_pseudo_letter +
			')|(?:' +
			e.src_pseudo_letter +
			'(?:-|' +
			e.src_pseudo_letter +
			'){0,61}' +
			e.src_pseudo_letter +
			'))'),
		(e.src_host = '(?:(?:(?:(?:' + e.src_domain + ')\\.)*' + e.src_domain + '))'),
		(e.tpl_host_fuzzy = '(?:' + e.src_ip4 + '|(?:(?:(?:' + e.src_domain + ')\\.)+(?:%TLDS%)))'),
		(e.tpl_host_no_ip_fuzzy = '(?:(?:(?:' + e.src_domain + ')\\.)+(?:%TLDS%))'),
		(e.src_host_strict = e.src_host + e.src_host_terminator),
		(e.tpl_host_fuzzy_strict = e.tpl_host_fuzzy + e.src_host_terminator),
		(e.src_host_port_strict = e.src_host + e.src_port + e.src_host_terminator),
		(e.tpl_host_port_fuzzy_strict = e.tpl_host_fuzzy + e.src_port + e.src_host_terminator),
		(e.tpl_host_port_no_ip_fuzzy_strict =
			e.tpl_host_no_ip_fuzzy + e.src_port + e.src_host_terminator),
		(e.tpl_host_fuzzy_test =
			'localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:' + e.src_ZPCc + '|>|$))'),
		(e.tpl_email_fuzzy =
			'(^|' +
			n +
			'|"|\\(|' +
			e.src_ZCc +
			')(' +
			e.src_email_name +
			'@' +
			e.tpl_host_fuzzy_strict +
			')'),
		(e.tpl_link_fuzzy =
			'(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|' +
			e.src_ZPCc +
			'))((?![$+<=>^`|｜])' +
			e.tpl_host_port_fuzzy_strict +
			e.src_path +
			')'),
		(e.tpl_link_no_ip_fuzzy =
			'(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|' +
			e.src_ZPCc +
			'))((?![$+<=>^`|｜])' +
			e.tpl_host_port_no_ip_fuzzy_strict +
			e.src_path +
			')'),
		e
	);
}
function oe(u) {
	return (
		Array.prototype.slice.call(arguments, 1).forEach(function (n) {
			n &&
				Object.keys(n).forEach(function (i) {
					u[i] = n[i];
				});
		}),
		u
	);
}
function $u(u) {
	return Object.prototype.toString.call(u);
}
function vt(u) {
	return $u(u) === '[object String]';
}
function wt(u) {
	return $u(u) === '[object Object]';
}
function St(u) {
	return $u(u) === '[object RegExp]';
}
function u0(u) {
	return $u(u) === '[object Function]';
}
function Tt(u) {
	return u.replace(/[.?*+^$[\]\\(){}|-]/g, '\\$&');
}
const P0 = { fuzzyLink: !0, fuzzyEmail: !0, fuzzyIP: !1 };
function It(u) {
	return Object.keys(u || {}).reduce(function (e, n) {
		return e || P0.hasOwnProperty(n);
	}, !1);
}
const Lt = {
		'http:': {
			validate: function (u, e, n) {
				const i = u.slice(e);
				return (
					n.re.http ||
						(n.re.http = new RegExp(
							'^\\/\\/' + n.re.src_auth + n.re.src_host_port_strict + n.re.src_path,
							'i'
						)),
					n.re.http.test(i) ? i.match(n.re.http)[0].length : 0
				);
			}
		},
		'https:': 'http:',
		'ftp:': 'http:',
		'//': {
			validate: function (u, e, n) {
				const i = u.slice(e);
				return (
					n.re.no_http ||
						(n.re.no_http = new RegExp(
							'^' +
								n.re.src_auth +
								'(?:localhost|(?:(?:' +
								n.re.src_domain +
								')\\.)+' +
								n.re.src_domain_root +
								')' +
								n.re.src_port +
								n.re.src_host_terminator +
								n.re.src_path,
							'i'
						)),
					n.re.no_http.test(i)
						? (e >= 3 && u[e - 3] === ':') || (e >= 3 && u[e - 3] === '/')
							? 0
							: i.match(n.re.no_http)[0].length
						: 0
				);
			}
		},
		'mailto:': {
			validate: function (u, e, n) {
				const i = u.slice(e);
				return (
					n.re.mailto ||
						(n.re.mailto = new RegExp('^' + n.re.src_email_name + '@' + n.re.src_host_strict, 'i')),
					n.re.mailto.test(i) ? i.match(n.re.mailto)[0].length : 0
				);
			}
		}
	},
	Ot =
		'a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]',
	Mt = 'biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф'.split('|');
function Bt(u) {
	(u.__index__ = -1), (u.__text_cache__ = '');
}
function Rt(u) {
	return function (e, n) {
		const i = e.slice(n);
		return u.test(i) ? i.match(u)[0].length : 0;
	};
}
function e0() {
	return function (u, e) {
		e.normalize(u);
	};
}
function Bu(u) {
	const e = (u.re = Ft(u.__opts__)),
		n = u.__tlds__.slice();
	u.onCompile(), u.__tlds_replaced__ || n.push(Ot), n.push(e.src_xn), (e.src_tlds = n.join('|'));
	function i(o) {
		return o.replace('%TLDS%', e.src_tlds);
	}
	(e.email_fuzzy = RegExp(i(e.tpl_email_fuzzy), 'i')),
		(e.link_fuzzy = RegExp(i(e.tpl_link_fuzzy), 'i')),
		(e.link_no_ip_fuzzy = RegExp(i(e.tpl_link_no_ip_fuzzy), 'i')),
		(e.host_fuzzy_test = RegExp(i(e.tpl_host_fuzzy_test), 'i'));
	const r = [];
	u.__compiled__ = {};
	function t(o, l) {
		throw new Error('(LinkifyIt) Invalid schema "' + o + '": ' + l);
	}
	Object.keys(u.__schemas__).forEach(function (o) {
		const l = u.__schemas__[o];
		if (l === null) return;
		const a = { validate: null, link: null };
		if (((u.__compiled__[o] = a), wt(l))) {
			St(l.validate)
				? (a.validate = Rt(l.validate))
				: u0(l.validate)
					? (a.validate = l.validate)
					: t(o, l),
				u0(l.normalize)
					? (a.normalize = l.normalize)
					: l.normalize
						? t(o, l)
						: (a.normalize = e0());
			return;
		}
		if (vt(l)) {
			r.push(o);
			return;
		}
		t(o, l);
	}),
		r.forEach(function (o) {
			u.__compiled__[u.__schemas__[o]] &&
				((u.__compiled__[o].validate = u.__compiled__[u.__schemas__[o]].validate),
				(u.__compiled__[o].normalize = u.__compiled__[u.__schemas__[o]].normalize));
		}),
		(u.__compiled__[''] = { validate: null, normalize: e0() });
	const c = Object.keys(u.__compiled__)
		.filter(function (o) {
			return o.length > 0 && u.__compiled__[o];
		})
		.map(Tt)
		.join('|');
	(u.re.schema_test = RegExp('(^|(?!_)(?:[><｜]|' + e.src_ZPCc + '))(' + c + ')', 'i')),
		(u.re.schema_search = RegExp('(^|(?!_)(?:[><｜]|' + e.src_ZPCc + '))(' + c + ')', 'ig')),
		(u.re.schema_at_start = RegExp('^' + u.re.schema_search.source, 'i')),
		(u.re.pretest = RegExp(
			'(' + u.re.schema_test.source + ')|(' + u.re.host_fuzzy_test.source + ')|@',
			'i'
		)),
		Bt(u);
}
function Nt(u, e) {
	const n = u.__index__,
		i = u.__last_index__,
		r = u.__text_cache__.slice(n, i);
	(this.schema = u.__schema__.toLowerCase()),
		(this.index = n + e),
		(this.lastIndex = i + e),
		(this.raw = r),
		(this.text = r),
		(this.url = r);
}
function le(u, e) {
	const n = new Nt(u, e);
	return u.__compiled__[n.schema].normalize(n, u), n;
}
function R(u, e) {
	if (!(this instanceof R)) return new R(u, e);
	e || (It(u) && ((e = u), (u = {}))),
		(this.__opts__ = oe({}, P0, e)),
		(this.__index__ = -1),
		(this.__last_index__ = -1),
		(this.__schema__ = ''),
		(this.__text_cache__ = ''),
		(this.__schemas__ = oe({}, Lt, u)),
		(this.__compiled__ = {}),
		(this.__tlds__ = Mt),
		(this.__tlds_replaced__ = !1),
		(this.re = {}),
		Bu(this);
}
R.prototype.add = function (e, n) {
	return (this.__schemas__[e] = n), Bu(this), this;
};
R.prototype.set = function (e) {
	return (this.__opts__ = oe(this.__opts__, e)), this;
};
R.prototype.test = function (e) {
	if (((this.__text_cache__ = e), (this.__index__ = -1), !e.length)) return !1;
	let n, i, r, t, c, o, l, a, f;
	if (this.re.schema_test.test(e)) {
		for (l = this.re.schema_search, l.lastIndex = 0; (n = l.exec(e)) !== null; )
			if (((t = this.testSchemaAt(e, n[2], l.lastIndex)), t)) {
				(this.__schema__ = n[2]),
					(this.__index__ = n.index + n[1].length),
					(this.__last_index__ = n.index + n[0].length + t);
				break;
			}
	}
	return (
		this.__opts__.fuzzyLink &&
			this.__compiled__['http:'] &&
			((a = e.search(this.re.host_fuzzy_test)),
			a >= 0 &&
				(this.__index__ < 0 || a < this.__index__) &&
				(i = e.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) !==
					null &&
				((c = i.index + i[1].length),
				(this.__index__ < 0 || c < this.__index__) &&
					((this.__schema__ = ''),
					(this.__index__ = c),
					(this.__last_index__ = i.index + i[0].length)))),
		this.__opts__.fuzzyEmail &&
			this.__compiled__['mailto:'] &&
			((f = e.indexOf('@')),
			f >= 0 &&
				(r = e.match(this.re.email_fuzzy)) !== null &&
				((c = r.index + r[1].length),
				(o = r.index + r[0].length),
				(this.__index__ < 0 ||
					c < this.__index__ ||
					(c === this.__index__ && o > this.__last_index__)) &&
					((this.__schema__ = 'mailto:'), (this.__index__ = c), (this.__last_index__ = o)))),
		this.__index__ >= 0
	);
};
R.prototype.pretest = function (e) {
	return this.re.pretest.test(e);
};
R.prototype.testSchemaAt = function (e, n, i) {
	return this.__compiled__[n.toLowerCase()]
		? this.__compiled__[n.toLowerCase()].validate(e, i, this)
		: 0;
};
R.prototype.match = function (e) {
	const n = [];
	let i = 0;
	this.__index__ >= 0 &&
		this.__text_cache__ === e &&
		(n.push(le(this, i)), (i = this.__last_index__));
	let r = i ? e.slice(i) : e;
	for (; this.test(r); )
		n.push(le(this, i)), (r = r.slice(this.__last_index__)), (i += this.__last_index__);
	return n.length ? n : null;
};
R.prototype.matchAtStart = function (e) {
	if (((this.__text_cache__ = e), (this.__index__ = -1), !e.length)) return null;
	const n = this.re.schema_at_start.exec(e);
	if (!n) return null;
	const i = this.testSchemaAt(e, n[2], n[0].length);
	return i
		? ((this.__schema__ = n[2]),
			(this.__index__ = n.index + n[1].length),
			(this.__last_index__ = n.index + n[0].length + i),
			le(this, 0))
		: null;
};
R.prototype.tlds = function (e, n) {
	return (
		(e = Array.isArray(e) ? e : [e]),
		n
			? ((this.__tlds__ = this.__tlds__
					.concat(e)
					.sort()
					.filter(function (i, r, t) {
						return i !== t[r - 1];
					})
					.reverse()),
				Bu(this),
				this)
			: ((this.__tlds__ = e.slice()), (this.__tlds_replaced__ = !0), Bu(this), this)
	);
};
R.prototype.normalize = function (e) {
	e.schema || (e.url = 'http://' + e.url),
		e.schema === 'mailto:' && !/^mailto:/i.test(e.url) && (e.url = 'mailto:' + e.url);
};
R.prototype.onCompile = function () {};
const fu = 2147483647,
	q = 36,
	Ee = 1,
	Au = 26,
	Pt = 38,
	zt = 700,
	z0 = 72,
	q0 = 128,
	j0 = '-',
	qt = /^xn--/,
	jt = /[^\0-\x7F]/,
	Ht = /[\x2E\u3002\uFF0E\uFF61]/g,
	Ut = {
		overflow: 'Overflow: input needs wider integers to process',
		'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
		'invalid-input': 'Invalid input'
	},
	Xu = q - Ee,
	j = Math.floor,
	ue = String.fromCharCode;
function G(u) {
	throw new RangeError(Ut[u]);
}
function $t(u, e) {
	const n = [];
	let i = u.length;
	for (; i--; ) n[i] = e(u[i]);
	return n;
}
function H0(u, e) {
	const n = u.split('@');
	let i = '';
	n.length > 1 && ((i = n[0] + '@'), (u = n[1])), (u = u.replace(Ht, '.'));
	const r = u.split('.'),
		t = $t(r, e).join('.');
	return i + t;
}
function U0(u) {
	const e = [];
	let n = 0;
	const i = u.length;
	for (; n < i; ) {
		const r = u.charCodeAt(n++);
		if (r >= 55296 && r <= 56319 && n < i) {
			const t = u.charCodeAt(n++);
			(t & 64512) == 56320 ? e.push(((r & 1023) << 10) + (t & 1023) + 65536) : (e.push(r), n--);
		} else e.push(r);
	}
	return e;
}
const Yt = (u) => String.fromCodePoint(...u),
	Zt = function (u) {
		return u >= 48 && u < 58
			? 26 + (u - 48)
			: u >= 65 && u < 91
				? u - 65
				: u >= 97 && u < 123
					? u - 97
					: q;
	},
	n0 = function (u, e) {
		return u + 22 + 75 * (u < 26) - ((e != 0) << 5);
	},
	$0 = function (u, e, n) {
		let i = 0;
		for (u = n ? j(u / zt) : u >> 1, u += j(u / e); u > (Xu * Au) >> 1; i += q) u = j(u / Xu);
		return j(i + ((Xu + 1) * u) / (u + Pt));
	},
	Y0 = function (u) {
		const e = [],
			n = u.length;
		let i = 0,
			r = q0,
			t = z0,
			c = u.lastIndexOf(j0);
		c < 0 && (c = 0);
		for (let o = 0; o < c; ++o) u.charCodeAt(o) >= 128 && G('not-basic'), e.push(u.charCodeAt(o));
		for (let o = c > 0 ? c + 1 : 0; o < n; ) {
			const l = i;
			for (let f = 1, s = q; ; s += q) {
				o >= n && G('invalid-input');
				const p = Zt(u.charCodeAt(o++));
				p >= q && G('invalid-input'), p > j((fu - i) / f) && G('overflow'), (i += p * f);
				const h = s <= t ? Ee : s >= t + Au ? Au : s - t;
				if (p < h) break;
				const d = q - h;
				f > j(fu / d) && G('overflow'), (f *= d);
			}
			const a = e.length + 1;
			(t = $0(i - l, a, l == 0)),
				j(i / a) > fu - r && G('overflow'),
				(r += j(i / a)),
				(i %= a),
				e.splice(i++, 0, r);
		}
		return String.fromCodePoint(...e);
	},
	Z0 = function (u) {
		const e = [];
		u = U0(u);
		const n = u.length;
		let i = q0,
			r = 0,
			t = z0;
		for (const l of u) l < 128 && e.push(ue(l));
		const c = e.length;
		let o = c;
		for (c && e.push(j0); o < n; ) {
			let l = fu;
			for (const f of u) f >= i && f < l && (l = f);
			const a = o + 1;
			l - i > j((fu - r) / a) && G('overflow'), (r += (l - i) * a), (i = l);
			for (const f of u)
				if ((f < i && ++r > fu && G('overflow'), f === i)) {
					let s = r;
					for (let p = q; ; p += q) {
						const h = p <= t ? Ee : p >= t + Au ? Au : p - t;
						if (s < h) break;
						const d = s - h,
							x = q - h;
						e.push(ue(n0(h + (d % x), 0))), (s = j(d / x));
					}
					e.push(ue(n0(s, 0))), (t = $0(r, a, o === c)), (r = 0), ++o;
				}
			++r, ++i;
		}
		return e.join('');
	},
	Gt = function (u) {
		return H0(u, function (e) {
			return qt.test(e) ? Y0(e.slice(4).toLowerCase()) : e;
		});
	},
	Vt = function (u) {
		return H0(u, function (e) {
			return jt.test(e) ? 'xn--' + Z0(e) : e;
		});
	},
	G0 = {
		version: '2.3.1',
		ucs2: { decode: U0, encode: Yt },
		decode: Y0,
		encode: Z0,
		toASCII: Vt,
		toUnicode: Gt
	},
	Wt = {
		options: {
			html: !1,
			xhtmlOut: !1,
			breaks: !1,
			langPrefix: 'language-',
			linkify: !1,
			typographer: !1,
			quotes: '“”‘’',
			highlight: null,
			maxNesting: 100
		},
		components: { core: {}, block: {}, inline: {} }
	},
	Kt = {
		options: {
			html: !1,
			xhtmlOut: !1,
			breaks: !1,
			langPrefix: 'language-',
			linkify: !1,
			typographer: !1,
			quotes: '“”‘’',
			highlight: null,
			maxNesting: 20
		},
		components: {
			core: { rules: ['normalize', 'block', 'inline', 'text_join'] },
			block: { rules: ['paragraph'] },
			inline: { rules: ['text'], rules2: ['balance_pairs', 'fragments_join'] }
		}
	},
	Qt = {
		options: {
			html: !0,
			xhtmlOut: !0,
			breaks: !1,
			langPrefix: 'language-',
			linkify: !1,
			typographer: !1,
			quotes: '“”‘’',
			highlight: null,
			maxNesting: 20
		},
		components: {
			core: { rules: ['normalize', 'block', 'inline', 'text_join'] },
			block: {
				rules: [
					'blockquote',
					'code',
					'fence',
					'heading',
					'hr',
					'html_block',
					'lheading',
					'list',
					'reference',
					'paragraph'
				]
			},
			inline: {
				rules: [
					'autolink',
					'backticks',
					'emphasis',
					'entity',
					'escape',
					'html_inline',
					'image',
					'link',
					'newline',
					'text'
				],
				rules2: ['balance_pairs', 'emphasis', 'fragments_join']
			}
		}
	},
	Jt = { default: Wt, zero: Kt, commonmark: Qt },
	Xt = /^(vbscript|javascript|file|data):/,
	uc = /^data:image\/(gif|png|jpeg|webp);/;
function ec(u) {
	const e = u.trim().toLowerCase();
	return Xt.test(e) ? uc.test(e) : !0;
}
const V0 = ['http:', 'https:', 'mailto:'];
function nc(u) {
	const e = me(u, !0);
	if (e.hostname && (!e.protocol || V0.indexOf(e.protocol) >= 0))
		try {
			e.hostname = G0.toASCII(e.hostname);
		} catch {}
	return Fu(xe(e));
}
function rc(u) {
	const e = me(u, !0);
	if (e.hostname && (!e.protocol || V0.indexOf(e.protocol) >= 0))
		try {
			e.hostname = G0.toUnicode(e.hostname);
		} catch {}
	return su(xe(e), su.defaultChars + '%');
}
function N(u, e) {
	if (!(this instanceof N)) return new N(u, e);
	e || ge(u) || ((e = u || {}), (u = 'default')),
		(this.inline = new wu()),
		(this.block = new Uu()),
		(this.core = new Ae()),
		(this.renderer = new pu()),
		(this.linkify = new R()),
		(this.validateLink = ec),
		(this.normalizeLink = nc),
		(this.normalizeLinkText = rc),
		(this.utils = ti),
		(this.helpers = ju({}, ai)),
		(this.options = {}),
		this.configure(u),
		e && this.set(e);
}
N.prototype.set = function (u) {
	return ju(this.options, u), this;
};
N.prototype.configure = function (u) {
	const e = this;
	if (ge(u)) {
		const n = u;
		if (((u = Jt[n]), !u)) throw new Error('Wrong `markdown-it` preset "' + n + '", check name');
	}
	if (!u) throw new Error("Wrong `markdown-it` preset, can't be empty");
	return (
		u.options && e.set(u.options),
		u.components &&
			Object.keys(u.components).forEach(function (n) {
				u.components[n].rules && e[n].ruler.enableOnly(u.components[n].rules),
					u.components[n].rules2 && e[n].ruler2.enableOnly(u.components[n].rules2);
			}),
		this
	);
};
N.prototype.enable = function (u, e) {
	let n = [];
	Array.isArray(u) || (u = [u]),
		['core', 'block', 'inline'].forEach(function (r) {
			n = n.concat(this[r].ruler.enable(u, !0));
		}, this),
		(n = n.concat(this.inline.ruler2.enable(u, !0)));
	const i = u.filter(function (r) {
		return n.indexOf(r) < 0;
	});
	if (i.length && !e) throw new Error('MarkdownIt. Failed to enable unknown rule(s): ' + i);
	return this;
};
N.prototype.disable = function (u, e) {
	let n = [];
	Array.isArray(u) || (u = [u]),
		['core', 'block', 'inline'].forEach(function (r) {
			n = n.concat(this[r].ruler.disable(u, !0));
		}, this),
		(n = n.concat(this.inline.ruler2.disable(u, !0)));
	const i = u.filter(function (r) {
		return n.indexOf(r) < 0;
	});
	if (i.length && !e) throw new Error('MarkdownIt. Failed to disable unknown rule(s): ' + i);
	return this;
};
N.prototype.use = function (u) {
	const e = [this].concat(Array.prototype.slice.call(arguments, 1));
	return u.apply(u, e), this;
};
N.prototype.parse = function (u, e) {
	if (typeof u != 'string') throw new Error('Input data should be a String');
	const n = new this.core.State(u, this, e);
	return this.core.process(n), n.tokens;
};
N.prototype.render = function (u, e) {
	return (e = e || {}), this.renderer.render(this.parse(u, e), this.options, e);
};
N.prototype.parseInline = function (u, e) {
	const n = new this.core.State(u, this, e);
	return (n.inlineMode = !0), this.core.process(n), n.tokens;
};
N.prototype.renderInline = function (u, e) {
	return (e = e || {}), this.renderer.render(this.parseInline(u, e), this.options, e);
};
function ic(u) {
	return u && u.__esModule && Object.prototype.hasOwnProperty.call(u, 'default') ? u.default : u;
}
var W0 = null,
	tc = function (u, e) {
		(W0 = e || {}), u.core.ruler.push('markdown-it-style', lc);
	};
function cc(u) {
	return W0[u.tag] || '';
}
function oc(u) {
	var e = cc(u);
	e && (u.attrGet('style') ? ((e = ';' + e), u.attrJoin('style', e)) : u.attrPush(['style', e]));
}
function lc(u) {
	u.tokens.forEach(function (e) {
		/_open$/.test(e.type) && oc(e);
	});
}
var ac = tc;
const fc = ic(ac);
/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */ function K0(u) {
	return typeof u > 'u' || u === null;
}
function sc(u) {
	return typeof u == 'object' && u !== null;
}
function dc(u) {
	return Array.isArray(u) ? u : K0(u) ? [] : [u];
}
function hc(u, e) {
	var n, i, r, t;
	if (e) for (t = Object.keys(e), n = 0, i = t.length; n < i; n += 1) (r = t[n]), (u[r] = e[r]);
	return u;
}
function pc(u, e) {
	var n = '',
		i;
	for (i = 0; i < e; i += 1) n += u;
	return n;
}
function bc(u) {
	return u === 0 && Number.NEGATIVE_INFINITY === 1 / u;
}
var xc = K0,
	mc = sc,
	_c = dc,
	gc = pc,
	kc = bc,
	Ac = hc,
	v = { isNothing: xc, isObject: mc, toArray: _c, repeat: gc, isNegativeZero: kc, extend: Ac };
function Q0(u, e) {
	var n = '',
		i = u.reason || '(unknown reason)';
	return u.mark
		? (u.mark.name && (n += 'in "' + u.mark.name + '" '),
			(n += '(' + (u.mark.line + 1) + ':' + (u.mark.column + 1) + ')'),
			!e &&
				u.mark.snippet &&
				(n +=
					`

` + u.mark.snippet),
			i + ' ' + n)
		: i;
}
function Cu(u, e) {
	Error.call(this),
		(this.name = 'YAMLException'),
		(this.reason = u),
		(this.mark = e),
		(this.message = Q0(this, !1)),
		Error.captureStackTrace
			? Error.captureStackTrace(this, this.constructor)
			: (this.stack = new Error().stack || '');
}
Cu.prototype = Object.create(Error.prototype);
Cu.prototype.constructor = Cu;
Cu.prototype.toString = function (e) {
	return this.name + ': ' + Q0(this, e);
};
var O = Cu;
function ee(u, e, n, i, r) {
	var t = '',
		c = '',
		o = Math.floor(r / 2) - 1;
	return (
		i - e > o && ((t = ' ... '), (e = i - o + t.length)),
		n - i > o && ((c = ' ...'), (n = i + o - c.length)),
		{ str: t + u.slice(e, n).replace(/\t/g, '→') + c, pos: i - e + t.length }
	);
}
function ne(u, e) {
	return v.repeat(' ', e - u.length) + u;
}
function Cc(u, e) {
	if (((e = Object.create(e || null)), !u.buffer)) return null;
	e.maxLength || (e.maxLength = 79),
		typeof e.indent != 'number' && (e.indent = 1),
		typeof e.linesBefore != 'number' && (e.linesBefore = 3),
		typeof e.linesAfter != 'number' && (e.linesAfter = 2);
	for (var n = /\r?\n|\r|\0/g, i = [0], r = [], t, c = -1; (t = n.exec(u.buffer)); )
		r.push(t.index),
			i.push(t.index + t[0].length),
			u.position <= t.index && c < 0 && (c = i.length - 2);
	c < 0 && (c = i.length - 1);
	var o = '',
		l,
		a,
		f = Math.min(u.line + e.linesAfter, r.length).toString().length,
		s = e.maxLength - (e.indent + f + 3);
	for (l = 1; l <= e.linesBefore && !(c - l < 0); l++)
		(a = ee(u.buffer, i[c - l], r[c - l], u.position - (i[c] - i[c - l]), s)),
			(o =
				v.repeat(' ', e.indent) +
				ne((u.line - l + 1).toString(), f) +
				' | ' +
				a.str +
				`
` +
				o);
	for (
		a = ee(u.buffer, i[c], r[c], u.position, s),
			o +=
				v.repeat(' ', e.indent) +
				ne((u.line + 1).toString(), f) +
				' | ' +
				a.str +
				`
`,
			o +=
				v.repeat('-', e.indent + f + 3 + a.pos) +
				`^
`,
			l = 1;
		l <= e.linesAfter && !(c + l >= r.length);
		l++
	)
		(a = ee(u.buffer, i[c + l], r[c + l], u.position - (i[c] - i[c + l]), s)),
			(o +=
				v.repeat(' ', e.indent) +
				ne((u.line + l + 1).toString(), f) +
				' | ' +
				a.str +
				`
`);
	return o.replace(/\n$/, '');
}
var Ec = Cc,
	yc = [
		'kind',
		'multi',
		'resolve',
		'construct',
		'instanceOf',
		'predicate',
		'represent',
		'representName',
		'defaultStyle',
		'styleAliases'
	],
	Dc = ['scalar', 'sequence', 'mapping'];
function Fc(u) {
	var e = {};
	return (
		u !== null &&
			Object.keys(u).forEach(function (n) {
				u[n].forEach(function (i) {
					e[String(i)] = n;
				});
			}),
		e
	);
}
function vc(u, e) {
	if (
		((e = e || {}),
		Object.keys(e).forEach(function (n) {
			if (yc.indexOf(n) === -1)
				throw new O('Unknown option "' + n + '" is met in definition of "' + u + '" YAML type.');
		}),
		(this.options = e),
		(this.tag = u),
		(this.kind = e.kind || null),
		(this.resolve =
			e.resolve ||
			function () {
				return !0;
			}),
		(this.construct =
			e.construct ||
			function (n) {
				return n;
			}),
		(this.instanceOf = e.instanceOf || null),
		(this.predicate = e.predicate || null),
		(this.represent = e.represent || null),
		(this.representName = e.representName || null),
		(this.defaultStyle = e.defaultStyle || null),
		(this.multi = e.multi || !1),
		(this.styleAliases = Fc(e.styleAliases || null)),
		Dc.indexOf(this.kind) === -1)
	)
		throw new O('Unknown kind "' + this.kind + '" is specified for "' + u + '" YAML type.');
}
var T = vc;
function r0(u, e) {
	var n = [];
	return (
		u[e].forEach(function (i) {
			var r = n.length;
			n.forEach(function (t, c) {
				t.tag === i.tag && t.kind === i.kind && t.multi === i.multi && (r = c);
			}),
				(n[r] = i);
		}),
		n
	);
}
function wc() {
	var u = {
			scalar: {},
			sequence: {},
			mapping: {},
			fallback: {},
			multi: { scalar: [], sequence: [], mapping: [], fallback: [] }
		},
		e,
		n;
	function i(r) {
		r.multi
			? (u.multi[r.kind].push(r), u.multi.fallback.push(r))
			: (u[r.kind][r.tag] = u.fallback[r.tag] = r);
	}
	for (e = 0, n = arguments.length; e < n; e += 1) arguments[e].forEach(i);
	return u;
}
function ae(u) {
	return this.extend(u);
}
ae.prototype.extend = function (e) {
	var n = [],
		i = [];
	if (e instanceof T) i.push(e);
	else if (Array.isArray(e)) i = i.concat(e);
	else if (e && (Array.isArray(e.implicit) || Array.isArray(e.explicit)))
		e.implicit && (n = n.concat(e.implicit)), e.explicit && (i = i.concat(e.explicit));
	else
		throw new O(
			'Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })'
		);
	n.forEach(function (t) {
		if (!(t instanceof T))
			throw new O(
				'Specified list of YAML types (or a single Type object) contains a non-Type object.'
			);
		if (t.loadKind && t.loadKind !== 'scalar')
			throw new O(
				'There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.'
			);
		if (t.multi)
			throw new O(
				'There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.'
			);
	}),
		i.forEach(function (t) {
			if (!(t instanceof T))
				throw new O(
					'Specified list of YAML types (or a single Type object) contains a non-Type object.'
				);
		});
	var r = Object.create(ae.prototype);
	return (
		(r.implicit = (this.implicit || []).concat(n)),
		(r.explicit = (this.explicit || []).concat(i)),
		(r.compiledImplicit = r0(r, 'implicit')),
		(r.compiledExplicit = r0(r, 'explicit')),
		(r.compiledTypeMap = wc(r.compiledImplicit, r.compiledExplicit)),
		r
	);
};
var J0 = ae,
	X0 = new T('tag:yaml.org,2002:str', {
		kind: 'scalar',
		construct: function (u) {
			return u !== null ? u : '';
		}
	}),
	un = new T('tag:yaml.org,2002:seq', {
		kind: 'sequence',
		construct: function (u) {
			return u !== null ? u : [];
		}
	}),
	en = new T('tag:yaml.org,2002:map', {
		kind: 'mapping',
		construct: function (u) {
			return u !== null ? u : {};
		}
	}),
	nn = new J0({ explicit: [X0, un, en] });
function Sc(u) {
	if (u === null) return !0;
	var e = u.length;
	return (e === 1 && u === '~') || (e === 4 && (u === 'null' || u === 'Null' || u === 'NULL'));
}
function Tc() {
	return null;
}
function Ic(u) {
	return u === null;
}
var rn = new T('tag:yaml.org,2002:null', {
	kind: 'scalar',
	resolve: Sc,
	construct: Tc,
	predicate: Ic,
	represent: {
		canonical: function () {
			return '~';
		},
		lowercase: function () {
			return 'null';
		},
		uppercase: function () {
			return 'NULL';
		},
		camelcase: function () {
			return 'Null';
		},
		empty: function () {
			return '';
		}
	},
	defaultStyle: 'lowercase'
});
function Lc(u) {
	if (u === null) return !1;
	var e = u.length;
	return (
		(e === 4 && (u === 'true' || u === 'True' || u === 'TRUE')) ||
		(e === 5 && (u === 'false' || u === 'False' || u === 'FALSE'))
	);
}
function Oc(u) {
	return u === 'true' || u === 'True' || u === 'TRUE';
}
function Mc(u) {
	return Object.prototype.toString.call(u) === '[object Boolean]';
}
var tn = new T('tag:yaml.org,2002:bool', {
	kind: 'scalar',
	resolve: Lc,
	construct: Oc,
	predicate: Mc,
	represent: {
		lowercase: function (u) {
			return u ? 'true' : 'false';
		},
		uppercase: function (u) {
			return u ? 'TRUE' : 'FALSE';
		},
		camelcase: function (u) {
			return u ? 'True' : 'False';
		}
	},
	defaultStyle: 'lowercase'
});
function Bc(u) {
	return (48 <= u && u <= 57) || (65 <= u && u <= 70) || (97 <= u && u <= 102);
}
function Rc(u) {
	return 48 <= u && u <= 55;
}
function Nc(u) {
	return 48 <= u && u <= 57;
}
function Pc(u) {
	if (u === null) return !1;
	var e = u.length,
		n = 0,
		i = !1,
		r;
	if (!e) return !1;
	if (((r = u[n]), (r === '-' || r === '+') && (r = u[++n]), r === '0')) {
		if (n + 1 === e) return !0;
		if (((r = u[++n]), r === 'b')) {
			for (n++; n < e; n++)
				if (((r = u[n]), r !== '_')) {
					if (r !== '0' && r !== '1') return !1;
					i = !0;
				}
			return i && r !== '_';
		}
		if (r === 'x') {
			for (n++; n < e; n++)
				if (((r = u[n]), r !== '_')) {
					if (!Bc(u.charCodeAt(n))) return !1;
					i = !0;
				}
			return i && r !== '_';
		}
		if (r === 'o') {
			for (n++; n < e; n++)
				if (((r = u[n]), r !== '_')) {
					if (!Rc(u.charCodeAt(n))) return !1;
					i = !0;
				}
			return i && r !== '_';
		}
	}
	if (r === '_') return !1;
	for (; n < e; n++)
		if (((r = u[n]), r !== '_')) {
			if (!Nc(u.charCodeAt(n))) return !1;
			i = !0;
		}
	return !(!i || r === '_');
}
function zc(u) {
	var e = u,
		n = 1,
		i;
	if (
		(e.indexOf('_') !== -1 && (e = e.replace(/_/g, '')),
		(i = e[0]),
		(i === '-' || i === '+') && (i === '-' && (n = -1), (e = e.slice(1)), (i = e[0])),
		e === '0')
	)
		return 0;
	if (i === '0') {
		if (e[1] === 'b') return n * parseInt(e.slice(2), 2);
		if (e[1] === 'x') return n * parseInt(e.slice(2), 16);
		if (e[1] === 'o') return n * parseInt(e.slice(2), 8);
	}
	return n * parseInt(e, 10);
}
function qc(u) {
	return (
		Object.prototype.toString.call(u) === '[object Number]' && u % 1 === 0 && !v.isNegativeZero(u)
	);
}
var cn = new T('tag:yaml.org,2002:int', {
		kind: 'scalar',
		resolve: Pc,
		construct: zc,
		predicate: qc,
		represent: {
			binary: function (u) {
				return u >= 0 ? '0b' + u.toString(2) : '-0b' + u.toString(2).slice(1);
			},
			octal: function (u) {
				return u >= 0 ? '0o' + u.toString(8) : '-0o' + u.toString(8).slice(1);
			},
			decimal: function (u) {
				return u.toString(10);
			},
			hexadecimal: function (u) {
				return u >= 0
					? '0x' + u.toString(16).toUpperCase()
					: '-0x' + u.toString(16).toUpperCase().slice(1);
			}
		},
		defaultStyle: 'decimal',
		styleAliases: {
			binary: [2, 'bin'],
			octal: [8, 'oct'],
			decimal: [10, 'dec'],
			hexadecimal: [16, 'hex']
		}
	}),
	jc = new RegExp(
		'^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$'
	);
function Hc(u) {
	return !(u === null || !jc.test(u) || u[u.length - 1] === '_');
}
function Uc(u) {
	var e, n;
	return (
		(e = u.replace(/_/g, '').toLowerCase()),
		(n = e[0] === '-' ? -1 : 1),
		'+-'.indexOf(e[0]) >= 0 && (e = e.slice(1)),
		e === '.inf'
			? n === 1
				? Number.POSITIVE_INFINITY
				: Number.NEGATIVE_INFINITY
			: e === '.nan'
				? NaN
				: n * parseFloat(e, 10)
	);
}
var $c = /^[-+]?[0-9]+e/;
function Yc(u, e) {
	var n;
	if (isNaN(u))
		switch (e) {
			case 'lowercase':
				return '.nan';
			case 'uppercase':
				return '.NAN';
			case 'camelcase':
				return '.NaN';
		}
	else if (Number.POSITIVE_INFINITY === u)
		switch (e) {
			case 'lowercase':
				return '.inf';
			case 'uppercase':
				return '.INF';
			case 'camelcase':
				return '.Inf';
		}
	else if (Number.NEGATIVE_INFINITY === u)
		switch (e) {
			case 'lowercase':
				return '-.inf';
			case 'uppercase':
				return '-.INF';
			case 'camelcase':
				return '-.Inf';
		}
	else if (v.isNegativeZero(u)) return '-0.0';
	return (n = u.toString(10)), $c.test(n) ? n.replace('e', '.e') : n;
}
function Zc(u) {
	return (
		Object.prototype.toString.call(u) === '[object Number]' && (u % 1 !== 0 || v.isNegativeZero(u))
	);
}
var on = new T('tag:yaml.org,2002:float', {
		kind: 'scalar',
		resolve: Hc,
		construct: Uc,
		predicate: Zc,
		represent: Yc,
		defaultStyle: 'lowercase'
	}),
	ln = nn.extend({ implicit: [rn, tn, cn, on] }),
	an = ln,
	fn = new RegExp('^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$'),
	sn = new RegExp(
		'^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$'
	);
function Gc(u) {
	return u === null ? !1 : fn.exec(u) !== null || sn.exec(u) !== null;
}
function Vc(u) {
	var e,
		n,
		i,
		r,
		t,
		c,
		o,
		l = 0,
		a = null,
		f,
		s,
		p;
	if (((e = fn.exec(u)), e === null && (e = sn.exec(u)), e === null))
		throw new Error('Date resolve error');
	if (((n = +e[1]), (i = +e[2] - 1), (r = +e[3]), !e[4])) return new Date(Date.UTC(n, i, r));
	if (((t = +e[4]), (c = +e[5]), (o = +e[6]), e[7])) {
		for (l = e[7].slice(0, 3); l.length < 3; ) l += '0';
		l = +l;
	}
	return (
		e[9] && ((f = +e[10]), (s = +(e[11] || 0)), (a = (f * 60 + s) * 6e4), e[9] === '-' && (a = -a)),
		(p = new Date(Date.UTC(n, i, r, t, c, o, l))),
		a && p.setTime(p.getTime() - a),
		p
	);
}
function Wc(u) {
	return u.toISOString();
}
var dn = new T('tag:yaml.org,2002:timestamp', {
	kind: 'scalar',
	resolve: Gc,
	construct: Vc,
	instanceOf: Date,
	represent: Wc
});
function Kc(u) {
	return u === '<<' || u === null;
}
var hn = new T('tag:yaml.org,2002:merge', { kind: 'scalar', resolve: Kc }),
	ye = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;
function Qc(u) {
	if (u === null) return !1;
	var e,
		n,
		i = 0,
		r = u.length,
		t = ye;
	for (n = 0; n < r; n++)
		if (((e = t.indexOf(u.charAt(n))), !(e > 64))) {
			if (e < 0) return !1;
			i += 6;
		}
	return i % 8 === 0;
}
function Jc(u) {
	var e,
		n,
		i = u.replace(/[\r\n=]/g, ''),
		r = i.length,
		t = ye,
		c = 0,
		o = [];
	for (e = 0; e < r; e++)
		e % 4 === 0 && e && (o.push((c >> 16) & 255), o.push((c >> 8) & 255), o.push(c & 255)),
			(c = (c << 6) | t.indexOf(i.charAt(e)));
	return (
		(n = (r % 4) * 6),
		n === 0
			? (o.push((c >> 16) & 255), o.push((c >> 8) & 255), o.push(c & 255))
			: n === 18
				? (o.push((c >> 10) & 255), o.push((c >> 2) & 255))
				: n === 12 && o.push((c >> 4) & 255),
		new Uint8Array(o)
	);
}
function Xc(u) {
	var e = '',
		n = 0,
		i,
		r,
		t = u.length,
		c = ye;
	for (i = 0; i < t; i++)
		i % 3 === 0 &&
			i &&
			((e += c[(n >> 18) & 63]),
			(e += c[(n >> 12) & 63]),
			(e += c[(n >> 6) & 63]),
			(e += c[n & 63])),
			(n = (n << 8) + u[i]);
	return (
		(r = t % 3),
		r === 0
			? ((e += c[(n >> 18) & 63]),
				(e += c[(n >> 12) & 63]),
				(e += c[(n >> 6) & 63]),
				(e += c[n & 63]))
			: r === 2
				? ((e += c[(n >> 10) & 63]), (e += c[(n >> 4) & 63]), (e += c[(n << 2) & 63]), (e += c[64]))
				: r === 1 && ((e += c[(n >> 2) & 63]), (e += c[(n << 4) & 63]), (e += c[64]), (e += c[64])),
		e
	);
}
function uo(u) {
	return Object.prototype.toString.call(u) === '[object Uint8Array]';
}
var pn = new T('tag:yaml.org,2002:binary', {
		kind: 'scalar',
		resolve: Qc,
		construct: Jc,
		predicate: uo,
		represent: Xc
	}),
	eo = Object.prototype.hasOwnProperty,
	no = Object.prototype.toString;
function ro(u) {
	if (u === null) return !0;
	var e = [],
		n,
		i,
		r,
		t,
		c,
		o = u;
	for (n = 0, i = o.length; n < i; n += 1) {
		if (((r = o[n]), (c = !1), no.call(r) !== '[object Object]')) return !1;
		for (t in r)
			if (eo.call(r, t))
				if (!c) c = !0;
				else return !1;
		if (!c) return !1;
		if (e.indexOf(t) === -1) e.push(t);
		else return !1;
	}
	return !0;
}
function io(u) {
	return u !== null ? u : [];
}
var bn = new T('tag:yaml.org,2002:omap', { kind: 'sequence', resolve: ro, construct: io }),
	to = Object.prototype.toString;
function co(u) {
	if (u === null) return !0;
	var e,
		n,
		i,
		r,
		t,
		c = u;
	for (t = new Array(c.length), e = 0, n = c.length; e < n; e += 1) {
		if (((i = c[e]), to.call(i) !== '[object Object]' || ((r = Object.keys(i)), r.length !== 1)))
			return !1;
		t[e] = [r[0], i[r[0]]];
	}
	return !0;
}
function oo(u) {
	if (u === null) return [];
	var e,
		n,
		i,
		r,
		t,
		c = u;
	for (t = new Array(c.length), e = 0, n = c.length; e < n; e += 1)
		(i = c[e]), (r = Object.keys(i)), (t[e] = [r[0], i[r[0]]]);
	return t;
}
var xn = new T('tag:yaml.org,2002:pairs', { kind: 'sequence', resolve: co, construct: oo }),
	lo = Object.prototype.hasOwnProperty;
function ao(u) {
	if (u === null) return !0;
	var e,
		n = u;
	for (e in n) if (lo.call(n, e) && n[e] !== null) return !1;
	return !0;
}
function fo(u) {
	return u !== null ? u : {};
}
var mn = new T('tag:yaml.org,2002:set', { kind: 'mapping', resolve: ao, construct: fo }),
	De = an.extend({ implicit: [dn, hn], explicit: [pn, bn, xn, mn] }),
	X = Object.prototype.hasOwnProperty,
	Ru = 1,
	_n = 2,
	gn = 3,
	Nu = 4,
	re = 1,
	so = 2,
	i0 = 3,
	ho =
		/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,
	po = /[\x85\u2028\u2029]/,
	bo = /[,\[\]\{\}]/,
	kn = /^(?:!|!!|![a-z\-]+!)$/i,
	An = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
function t0(u) {
	return Object.prototype.toString.call(u);
}
function H(u) {
	return u === 10 || u === 13;
}
function nu(u) {
	return u === 9 || u === 32;
}
function M(u) {
	return u === 9 || u === 32 || u === 10 || u === 13;
}
function lu(u) {
	return u === 44 || u === 91 || u === 93 || u === 123 || u === 125;
}
function xo(u) {
	var e;
	return 48 <= u && u <= 57 ? u - 48 : ((e = u | 32), 97 <= e && e <= 102 ? e - 97 + 10 : -1);
}
function mo(u) {
	return u === 120 ? 2 : u === 117 ? 4 : u === 85 ? 8 : 0;
}
function _o(u) {
	return 48 <= u && u <= 57 ? u - 48 : -1;
}
function c0(u) {
	return u === 48
		? '\0'
		: u === 97
			? '\x07'
			: u === 98
				? '\b'
				: u === 116 || u === 9
					? '	'
					: u === 110
						? `
`
						: u === 118
							? '\v'
							: u === 102
								? '\f'
								: u === 114
									? '\r'
									: u === 101
										? '\x1B'
										: u === 32
											? ' '
											: u === 34
												? '"'
												: u === 47
													? '/'
													: u === 92
														? '\\'
														: u === 78
															? ''
															: u === 95
																? ' '
																: u === 76
																	? '\u2028'
																	: u === 80
																		? '\u2029'
																		: '';
}
function go(u) {
	return u <= 65535
		? String.fromCharCode(u)
		: String.fromCharCode(((u - 65536) >> 10) + 55296, ((u - 65536) & 1023) + 56320);
}
var Cn = new Array(256),
	En = new Array(256);
for (var cu = 0; cu < 256; cu++) (Cn[cu] = c0(cu) ? 1 : 0), (En[cu] = c0(cu));
function ko(u, e) {
	(this.input = u),
		(this.filename = e.filename || null),
		(this.schema = e.schema || De),
		(this.onWarning = e.onWarning || null),
		(this.legacy = e.legacy || !1),
		(this.json = e.json || !1),
		(this.listener = e.listener || null),
		(this.implicitTypes = this.schema.compiledImplicit),
		(this.typeMap = this.schema.compiledTypeMap),
		(this.length = u.length),
		(this.position = 0),
		(this.line = 0),
		(this.lineStart = 0),
		(this.lineIndent = 0),
		(this.firstTabInLine = -1),
		(this.documents = []);
}
function yn(u, e) {
	var n = {
		name: u.filename,
		buffer: u.input.slice(0, -1),
		position: u.position,
		line: u.line,
		column: u.position - u.lineStart
	};
	return (n.snippet = Ec(n)), new O(e, n);
}
function g(u, e) {
	throw yn(u, e);
}
function Pu(u, e) {
	u.onWarning && u.onWarning.call(null, yn(u, e));
}
var o0 = {
	YAML: function (e, n, i) {
		var r, t, c;
		e.version !== null && g(e, 'duplication of %YAML directive'),
			i.length !== 1 && g(e, 'YAML directive accepts exactly one argument'),
			(r = /^([0-9]+)\.([0-9]+)$/.exec(i[0])),
			r === null && g(e, 'ill-formed argument of the YAML directive'),
			(t = parseInt(r[1], 10)),
			(c = parseInt(r[2], 10)),
			t !== 1 && g(e, 'unacceptable YAML version of the document'),
			(e.version = i[0]),
			(e.checkLineBreaks = c < 2),
			c !== 1 && c !== 2 && Pu(e, 'unsupported YAML version of the document');
	},
	TAG: function (e, n, i) {
		var r, t;
		i.length !== 2 && g(e, 'TAG directive accepts exactly two arguments'),
			(r = i[0]),
			(t = i[1]),
			kn.test(r) || g(e, 'ill-formed tag handle (first argument) of the TAG directive'),
			X.call(e.tagMap, r) &&
				g(e, 'there is a previously declared suffix for "' + r + '" tag handle'),
			An.test(t) || g(e, 'ill-formed tag prefix (second argument) of the TAG directive');
		try {
			t = decodeURIComponent(t);
		} catch {
			g(e, 'tag prefix is malformed: ' + t);
		}
		e.tagMap[r] = t;
	}
};
function Q(u, e, n, i) {
	var r, t, c, o;
	if (e < n) {
		if (((o = u.input.slice(e, n)), i))
			for (r = 0, t = o.length; r < t; r += 1)
				(c = o.charCodeAt(r)),
					c === 9 || (32 <= c && c <= 1114111) || g(u, 'expected valid JSON character');
		else ho.test(o) && g(u, 'the stream contains non-printable characters');
		u.result += o;
	}
}
function l0(u, e, n, i) {
	var r, t, c, o;
	for (
		v.isObject(n) || g(u, 'cannot merge mappings; the provided source object is unacceptable'),
			r = Object.keys(n),
			c = 0,
			o = r.length;
		c < o;
		c += 1
	)
		(t = r[c]), X.call(e, t) || ((e[t] = n[t]), (i[t] = !0));
}
function au(u, e, n, i, r, t, c, o, l) {
	var a, f;
	if (Array.isArray(r))
		for (r = Array.prototype.slice.call(r), a = 0, f = r.length; a < f; a += 1)
			Array.isArray(r[a]) && g(u, 'nested arrays are not supported inside keys'),
				typeof r == 'object' && t0(r[a]) === '[object Object]' && (r[a] = '[object Object]');
	if (
		(typeof r == 'object' && t0(r) === '[object Object]' && (r = '[object Object]'),
		(r = String(r)),
		e === null && (e = {}),
		i === 'tag:yaml.org,2002:merge')
	)
		if (Array.isArray(t)) for (a = 0, f = t.length; a < f; a += 1) l0(u, e, t[a], n);
		else l0(u, e, t, n);
	else
		!u.json &&
			!X.call(n, r) &&
			X.call(e, r) &&
			((u.line = c || u.line),
			(u.lineStart = o || u.lineStart),
			(u.position = l || u.position),
			g(u, 'duplicated mapping key')),
			r === '__proto__'
				? Object.defineProperty(e, r, { configurable: !0, enumerable: !0, writable: !0, value: t })
				: (e[r] = t),
			delete n[r];
	return e;
}
function Fe(u) {
	var e;
	(e = u.input.charCodeAt(u.position)),
		e === 10
			? u.position++
			: e === 13
				? (u.position++, u.input.charCodeAt(u.position) === 10 && u.position++)
				: g(u, 'a line break is expected'),
		(u.line += 1),
		(u.lineStart = u.position),
		(u.firstTabInLine = -1);
}
function F(u, e, n) {
	for (var i = 0, r = u.input.charCodeAt(u.position); r !== 0; ) {
		for (; nu(r); )
			r === 9 && u.firstTabInLine === -1 && (u.firstTabInLine = u.position),
				(r = u.input.charCodeAt(++u.position));
		if (e && r === 35)
			do r = u.input.charCodeAt(++u.position);
			while (r !== 10 && r !== 13 && r !== 0);
		if (H(r))
			for (Fe(u), r = u.input.charCodeAt(u.position), i++, u.lineIndent = 0; r === 32; )
				u.lineIndent++, (r = u.input.charCodeAt(++u.position));
		else break;
	}
	return n !== -1 && i !== 0 && u.lineIndent < n && Pu(u, 'deficient indentation'), i;
}
function Yu(u) {
	var e = u.position,
		n;
	return (
		(n = u.input.charCodeAt(e)),
		!!(
			(n === 45 || n === 46) &&
			n === u.input.charCodeAt(e + 1) &&
			n === u.input.charCodeAt(e + 2) &&
			((e += 3), (n = u.input.charCodeAt(e)), n === 0 || M(n))
		)
	);
}
function ve(u, e) {
	e === 1
		? (u.result += ' ')
		: e > 1 &&
			(u.result += v.repeat(
				`
`,
				e - 1
			));
}
function Ao(u, e, n) {
	var i,
		r,
		t,
		c,
		o,
		l,
		a,
		f,
		s = u.kind,
		p = u.result,
		h;
	if (
		((h = u.input.charCodeAt(u.position)),
		M(h) ||
			lu(h) ||
			h === 35 ||
			h === 38 ||
			h === 42 ||
			h === 33 ||
			h === 124 ||
			h === 62 ||
			h === 39 ||
			h === 34 ||
			h === 37 ||
			h === 64 ||
			h === 96 ||
			((h === 63 || h === 45) && ((r = u.input.charCodeAt(u.position + 1)), M(r) || (n && lu(r)))))
	)
		return !1;
	for (u.kind = 'scalar', u.result = '', t = c = u.position, o = !1; h !== 0; ) {
		if (h === 58) {
			if (((r = u.input.charCodeAt(u.position + 1)), M(r) || (n && lu(r)))) break;
		} else if (h === 35) {
			if (((i = u.input.charCodeAt(u.position - 1)), M(i))) break;
		} else {
			if ((u.position === u.lineStart && Yu(u)) || (n && lu(h))) break;
			if (H(h))
				if (
					((l = u.line), (a = u.lineStart), (f = u.lineIndent), F(u, !1, -1), u.lineIndent >= e)
				) {
					(o = !0), (h = u.input.charCodeAt(u.position));
					continue;
				} else {
					(u.position = c), (u.line = l), (u.lineStart = a), (u.lineIndent = f);
					break;
				}
		}
		o && (Q(u, t, c, !1), ve(u, u.line - l), (t = c = u.position), (o = !1)),
			nu(h) || (c = u.position + 1),
			(h = u.input.charCodeAt(++u.position));
	}
	return Q(u, t, c, !1), u.result ? !0 : ((u.kind = s), (u.result = p), !1);
}
function Co(u, e) {
	var n, i, r;
	if (((n = u.input.charCodeAt(u.position)), n !== 39)) return !1;
	for (
		u.kind = 'scalar', u.result = '', u.position++, i = r = u.position;
		(n = u.input.charCodeAt(u.position)) !== 0;

	)
		if (n === 39)
			if ((Q(u, i, u.position, !0), (n = u.input.charCodeAt(++u.position)), n === 39))
				(i = u.position), u.position++, (r = u.position);
			else return !0;
		else
			H(n)
				? (Q(u, i, r, !0), ve(u, F(u, !1, e)), (i = r = u.position))
				: u.position === u.lineStart && Yu(u)
					? g(u, 'unexpected end of the document within a single quoted scalar')
					: (u.position++, (r = u.position));
	g(u, 'unexpected end of the stream within a single quoted scalar');
}
function Eo(u, e) {
	var n, i, r, t, c, o;
	if (((o = u.input.charCodeAt(u.position)), o !== 34)) return !1;
	for (
		u.kind = 'scalar', u.result = '', u.position++, n = i = u.position;
		(o = u.input.charCodeAt(u.position)) !== 0;

	) {
		if (o === 34) return Q(u, n, u.position, !0), u.position++, !0;
		if (o === 92) {
			if ((Q(u, n, u.position, !0), (o = u.input.charCodeAt(++u.position)), H(o))) F(u, !1, e);
			else if (o < 256 && Cn[o]) (u.result += En[o]), u.position++;
			else if ((c = mo(o)) > 0) {
				for (r = c, t = 0; r > 0; r--)
					(o = u.input.charCodeAt(++u.position)),
						(c = xo(o)) >= 0 ? (t = (t << 4) + c) : g(u, 'expected hexadecimal character');
				(u.result += go(t)), u.position++;
			} else g(u, 'unknown escape sequence');
			n = i = u.position;
		} else
			H(o)
				? (Q(u, n, i, !0), ve(u, F(u, !1, e)), (n = i = u.position))
				: u.position === u.lineStart && Yu(u)
					? g(u, 'unexpected end of the document within a double quoted scalar')
					: (u.position++, (i = u.position));
	}
	g(u, 'unexpected end of the stream within a double quoted scalar');
}
function yo(u, e) {
	var n = !0,
		i,
		r,
		t,
		c = u.tag,
		o,
		l = u.anchor,
		a,
		f,
		s,
		p,
		h,
		d = Object.create(null),
		x,
		m,
		_,
		b;
	if (((b = u.input.charCodeAt(u.position)), b === 91)) (f = 93), (h = !1), (o = []);
	else if (b === 123) (f = 125), (h = !0), (o = {});
	else return !1;
	for (
		u.anchor !== null && (u.anchorMap[u.anchor] = o), b = u.input.charCodeAt(++u.position);
		b !== 0;

	) {
		if ((F(u, !0, e), (b = u.input.charCodeAt(u.position)), b === f))
			return (
				u.position++,
				(u.tag = c),
				(u.anchor = l),
				(u.kind = h ? 'mapping' : 'sequence'),
				(u.result = o),
				!0
			);
		n
			? b === 44 && g(u, "expected the node content, but found ','")
			: g(u, 'missed comma between flow collection entries'),
			(m = x = _ = null),
			(s = p = !1),
			b === 63 &&
				((a = u.input.charCodeAt(u.position + 1)),
				M(a) && ((s = p = !0), u.position++, F(u, !0, e))),
			(i = u.line),
			(r = u.lineStart),
			(t = u.position),
			hu(u, e, Ru, !1, !0),
			(m = u.tag),
			(x = u.result),
			F(u, !0, e),
			(b = u.input.charCodeAt(u.position)),
			(p || u.line === i) &&
				b === 58 &&
				((s = !0),
				(b = u.input.charCodeAt(++u.position)),
				F(u, !0, e),
				hu(u, e, Ru, !1, !0),
				(_ = u.result)),
			h ? au(u, o, d, m, x, _, i, r, t) : s ? o.push(au(u, null, d, m, x, _, i, r, t)) : o.push(x),
			F(u, !0, e),
			(b = u.input.charCodeAt(u.position)),
			b === 44 ? ((n = !0), (b = u.input.charCodeAt(++u.position))) : (n = !1);
	}
	g(u, 'unexpected end of the stream within a flow collection');
}
function Do(u, e) {
	var n,
		i,
		r = re,
		t = !1,
		c = !1,
		o = e,
		l = 0,
		a = !1,
		f,
		s;
	if (((s = u.input.charCodeAt(u.position)), s === 124)) i = !1;
	else if (s === 62) i = !0;
	else return !1;
	for (u.kind = 'scalar', u.result = ''; s !== 0; )
		if (((s = u.input.charCodeAt(++u.position)), s === 43 || s === 45))
			re === r ? (r = s === 43 ? i0 : so) : g(u, 'repeat of a chomping mode identifier');
		else if ((f = _o(s)) >= 0)
			f === 0
				? g(u, 'bad explicit indentation width of a block scalar; it cannot be less than one')
				: c
					? g(u, 'repeat of an indentation width identifier')
					: ((o = e + f - 1), (c = !0));
		else break;
	if (nu(s)) {
		do s = u.input.charCodeAt(++u.position);
		while (nu(s));
		if (s === 35)
			do s = u.input.charCodeAt(++u.position);
			while (!H(s) && s !== 0);
	}
	for (; s !== 0; ) {
		for (
			Fe(u), u.lineIndent = 0, s = u.input.charCodeAt(u.position);
			(!c || u.lineIndent < o) && s === 32;

		)
			u.lineIndent++, (s = u.input.charCodeAt(++u.position));
		if ((!c && u.lineIndent > o && (o = u.lineIndent), H(s))) {
			l++;
			continue;
		}
		if (u.lineIndent < o) {
			r === i0
				? (u.result += v.repeat(
						`
`,
						t ? 1 + l : l
					))
				: r === re &&
					t &&
					(u.result += `
`);
			break;
		}
		for (
			i
				? nu(s)
					? ((a = !0),
						(u.result += v.repeat(
							`
`,
							t ? 1 + l : l
						)))
					: a
						? ((a = !1),
							(u.result += v.repeat(
								`
`,
								l + 1
							)))
						: l === 0
							? t && (u.result += ' ')
							: (u.result += v.repeat(
									`
`,
									l
								))
				: (u.result += v.repeat(
						`
`,
						t ? 1 + l : l
					)),
				t = !0,
				c = !0,
				l = 0,
				n = u.position;
			!H(s) && s !== 0;

		)
			s = u.input.charCodeAt(++u.position);
		Q(u, n, u.position, !1);
	}
	return !0;
}
function a0(u, e) {
	var n,
		i = u.tag,
		r = u.anchor,
		t = [],
		c,
		o = !1,
		l;
	if (u.firstTabInLine !== -1) return !1;
	for (
		u.anchor !== null && (u.anchorMap[u.anchor] = t), l = u.input.charCodeAt(u.position);
		l !== 0 &&
		(u.firstTabInLine !== -1 &&
			((u.position = u.firstTabInLine), g(u, 'tab characters must not be used in indentation')),
		!(l !== 45 || ((c = u.input.charCodeAt(u.position + 1)), !M(c))));

	) {
		if (((o = !0), u.position++, F(u, !0, -1) && u.lineIndent <= e)) {
			t.push(null), (l = u.input.charCodeAt(u.position));
			continue;
		}
		if (
			((n = u.line),
			hu(u, e, gn, !1, !0),
			t.push(u.result),
			F(u, !0, -1),
			(l = u.input.charCodeAt(u.position)),
			(u.line === n || u.lineIndent > e) && l !== 0)
		)
			g(u, 'bad indentation of a sequence entry');
		else if (u.lineIndent < e) break;
	}
	return o ? ((u.tag = i), (u.anchor = r), (u.kind = 'sequence'), (u.result = t), !0) : !1;
}
function Fo(u, e, n) {
	var i,
		r,
		t,
		c,
		o,
		l,
		a = u.tag,
		f = u.anchor,
		s = {},
		p = Object.create(null),
		h = null,
		d = null,
		x = null,
		m = !1,
		_ = !1,
		b;
	if (u.firstTabInLine !== -1) return !1;
	for (
		u.anchor !== null && (u.anchorMap[u.anchor] = s), b = u.input.charCodeAt(u.position);
		b !== 0;

	) {
		if (
			(!m &&
				u.firstTabInLine !== -1 &&
				((u.position = u.firstTabInLine), g(u, 'tab characters must not be used in indentation')),
			(i = u.input.charCodeAt(u.position + 1)),
			(t = u.line),
			(b === 63 || b === 58) && M(i))
		)
			b === 63
				? (m && (au(u, s, p, h, d, null, c, o, l), (h = d = x = null)),
					(_ = !0),
					(m = !0),
					(r = !0))
				: m
					? ((m = !1), (r = !0))
					: g(
							u,
							'incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line'
						),
				(u.position += 1),
				(b = i);
		else {
			if (((c = u.line), (o = u.lineStart), (l = u.position), !hu(u, n, _n, !1, !0))) break;
			if (u.line === t) {
				for (b = u.input.charCodeAt(u.position); nu(b); ) b = u.input.charCodeAt(++u.position);
				if (b === 58)
					(b = u.input.charCodeAt(++u.position)),
						M(b) ||
							g(
								u,
								'a whitespace character is expected after the key-value separator within a block mapping'
							),
						m && (au(u, s, p, h, d, null, c, o, l), (h = d = x = null)),
						(_ = !0),
						(m = !1),
						(r = !1),
						(h = u.tag),
						(d = u.result);
				else if (_) g(u, 'can not read an implicit mapping pair; a colon is missed');
				else return (u.tag = a), (u.anchor = f), !0;
			} else if (_)
				g(u, 'can not read a block mapping entry; a multiline key may not be an implicit key');
			else return (u.tag = a), (u.anchor = f), !0;
		}
		if (
			((u.line === t || u.lineIndent > e) &&
				(m && ((c = u.line), (o = u.lineStart), (l = u.position)),
				hu(u, e, Nu, !0, r) && (m ? (d = u.result) : (x = u.result)),
				m || (au(u, s, p, h, d, x, c, o, l), (h = d = x = null)),
				F(u, !0, -1),
				(b = u.input.charCodeAt(u.position))),
			(u.line === t || u.lineIndent > e) && b !== 0)
		)
			g(u, 'bad indentation of a mapping entry');
		else if (u.lineIndent < e) break;
	}
	return (
		m && au(u, s, p, h, d, null, c, o, l),
		_ && ((u.tag = a), (u.anchor = f), (u.kind = 'mapping'), (u.result = s)),
		_
	);
}
function vo(u) {
	var e,
		n = !1,
		i = !1,
		r,
		t,
		c;
	if (((c = u.input.charCodeAt(u.position)), c !== 33)) return !1;
	if (
		(u.tag !== null && g(u, 'duplication of a tag property'),
		(c = u.input.charCodeAt(++u.position)),
		c === 60
			? ((n = !0), (c = u.input.charCodeAt(++u.position)))
			: c === 33
				? ((i = !0), (r = '!!'), (c = u.input.charCodeAt(++u.position)))
				: (r = '!'),
		(e = u.position),
		n)
	) {
		do c = u.input.charCodeAt(++u.position);
		while (c !== 0 && c !== 62);
		u.position < u.length
			? ((t = u.input.slice(e, u.position)), (c = u.input.charCodeAt(++u.position)))
			: g(u, 'unexpected end of the stream within a verbatim tag');
	} else {
		for (; c !== 0 && !M(c); )
			c === 33 &&
				(i
					? g(u, 'tag suffix cannot contain exclamation marks')
					: ((r = u.input.slice(e - 1, u.position + 1)),
						kn.test(r) || g(u, 'named tag handle cannot contain such characters'),
						(i = !0),
						(e = u.position + 1))),
				(c = u.input.charCodeAt(++u.position));
		(t = u.input.slice(e, u.position)),
			bo.test(t) && g(u, 'tag suffix cannot contain flow indicator characters');
	}
	t && !An.test(t) && g(u, 'tag name cannot contain such characters: ' + t);
	try {
		t = decodeURIComponent(t);
	} catch {
		g(u, 'tag name is malformed: ' + t);
	}
	return (
		n
			? (u.tag = t)
			: X.call(u.tagMap, r)
				? (u.tag = u.tagMap[r] + t)
				: r === '!'
					? (u.tag = '!' + t)
					: r === '!!'
						? (u.tag = 'tag:yaml.org,2002:' + t)
						: g(u, 'undeclared tag handle "' + r + '"'),
		!0
	);
}
function wo(u) {
	var e, n;
	if (((n = u.input.charCodeAt(u.position)), n !== 38)) return !1;
	for (
		u.anchor !== null && g(u, 'duplication of an anchor property'),
			n = u.input.charCodeAt(++u.position),
			e = u.position;
		n !== 0 && !M(n) && !lu(n);

	)
		n = u.input.charCodeAt(++u.position);
	return (
		u.position === e && g(u, 'name of an anchor node must contain at least one character'),
		(u.anchor = u.input.slice(e, u.position)),
		!0
	);
}
function So(u) {
	var e, n, i;
	if (((i = u.input.charCodeAt(u.position)), i !== 42)) return !1;
	for (i = u.input.charCodeAt(++u.position), e = u.position; i !== 0 && !M(i) && !lu(i); )
		i = u.input.charCodeAt(++u.position);
	return (
		u.position === e && g(u, 'name of an alias node must contain at least one character'),
		(n = u.input.slice(e, u.position)),
		X.call(u.anchorMap, n) || g(u, 'unidentified alias "' + n + '"'),
		(u.result = u.anchorMap[n]),
		F(u, !0, -1),
		!0
	);
}
function hu(u, e, n, i, r) {
	var t,
		c,
		o,
		l = 1,
		a = !1,
		f = !1,
		s,
		p,
		h,
		d,
		x,
		m;
	if (
		(u.listener !== null && u.listener('open', u),
		(u.tag = null),
		(u.anchor = null),
		(u.kind = null),
		(u.result = null),
		(t = c = o = Nu === n || gn === n),
		i &&
			F(u, !0, -1) &&
			((a = !0),
			u.lineIndent > e ? (l = 1) : u.lineIndent === e ? (l = 0) : u.lineIndent < e && (l = -1)),
		l === 1)
	)
		for (; vo(u) || wo(u); )
			F(u, !0, -1)
				? ((a = !0),
					(o = t),
					u.lineIndent > e ? (l = 1) : u.lineIndent === e ? (l = 0) : u.lineIndent < e && (l = -1))
				: (o = !1);
	if (
		(o && (o = a || r),
		(l === 1 || Nu === n) &&
			(Ru === n || _n === n ? (x = e) : (x = e + 1),
			(m = u.position - u.lineStart),
			l === 1
				? (o && (a0(u, m) || Fo(u, m, x))) || yo(u, x)
					? (f = !0)
					: ((c && Do(u, x)) || Co(u, x) || Eo(u, x)
							? (f = !0)
							: So(u)
								? ((f = !0),
									(u.tag !== null || u.anchor !== null) &&
										g(u, 'alias node should not have any properties'))
								: Ao(u, x, Ru === n) && ((f = !0), u.tag === null && (u.tag = '?')),
						u.anchor !== null && (u.anchorMap[u.anchor] = u.result))
				: l === 0 && (f = o && a0(u, m))),
		u.tag === null)
	)
		u.anchor !== null && (u.anchorMap[u.anchor] = u.result);
	else if (u.tag === '?') {
		for (
			u.result !== null &&
				u.kind !== 'scalar' &&
				g(u, 'unacceptable node kind for !<?> tag; it should be "scalar", not "' + u.kind + '"'),
				s = 0,
				p = u.implicitTypes.length;
			s < p;
			s += 1
		)
			if (((d = u.implicitTypes[s]), d.resolve(u.result))) {
				(u.result = d.construct(u.result)),
					(u.tag = d.tag),
					u.anchor !== null && (u.anchorMap[u.anchor] = u.result);
				break;
			}
	} else if (u.tag !== '!') {
		if (X.call(u.typeMap[u.kind || 'fallback'], u.tag)) d = u.typeMap[u.kind || 'fallback'][u.tag];
		else
			for (d = null, h = u.typeMap.multi[u.kind || 'fallback'], s = 0, p = h.length; s < p; s += 1)
				if (u.tag.slice(0, h[s].tag.length) === h[s].tag) {
					d = h[s];
					break;
				}
		d || g(u, 'unknown tag !<' + u.tag + '>'),
			u.result !== null &&
				d.kind !== u.kind &&
				g(
					u,
					'unacceptable node kind for !<' +
						u.tag +
						'> tag; it should be "' +
						d.kind +
						'", not "' +
						u.kind +
						'"'
				),
			d.resolve(u.result, u.tag)
				? ((u.result = d.construct(u.result, u.tag)),
					u.anchor !== null && (u.anchorMap[u.anchor] = u.result))
				: g(u, 'cannot resolve a node with !<' + u.tag + '> explicit tag');
	}
	return u.listener !== null && u.listener('close', u), u.tag !== null || u.anchor !== null || f;
}
function To(u) {
	var e = u.position,
		n,
		i,
		r,
		t = !1,
		c;
	for (
		u.version = null,
			u.checkLineBreaks = u.legacy,
			u.tagMap = Object.create(null),
			u.anchorMap = Object.create(null);
		(c = u.input.charCodeAt(u.position)) !== 0 &&
		(F(u, !0, -1), (c = u.input.charCodeAt(u.position)), !(u.lineIndent > 0 || c !== 37));

	) {
		for (t = !0, c = u.input.charCodeAt(++u.position), n = u.position; c !== 0 && !M(c); )
			c = u.input.charCodeAt(++u.position);
		for (
			i = u.input.slice(n, u.position),
				r = [],
				i.length < 1 && g(u, 'directive name must not be less than one character in length');
			c !== 0;

		) {
			for (; nu(c); ) c = u.input.charCodeAt(++u.position);
			if (c === 35) {
				do c = u.input.charCodeAt(++u.position);
				while (c !== 0 && !H(c));
				break;
			}
			if (H(c)) break;
			for (n = u.position; c !== 0 && !M(c); ) c = u.input.charCodeAt(++u.position);
			r.push(u.input.slice(n, u.position));
		}
		c !== 0 && Fe(u),
			X.call(o0, i) ? o0[i](u, i, r) : Pu(u, 'unknown document directive "' + i + '"');
	}
	if (
		(F(u, !0, -1),
		u.lineIndent === 0 &&
		u.input.charCodeAt(u.position) === 45 &&
		u.input.charCodeAt(u.position + 1) === 45 &&
		u.input.charCodeAt(u.position + 2) === 45
			? ((u.position += 3), F(u, !0, -1))
			: t && g(u, 'directives end mark is expected'),
		hu(u, u.lineIndent - 1, Nu, !1, !0),
		F(u, !0, -1),
		u.checkLineBreaks &&
			po.test(u.input.slice(e, u.position)) &&
			Pu(u, 'non-ASCII line breaks are interpreted as content'),
		u.documents.push(u.result),
		u.position === u.lineStart && Yu(u))
	) {
		u.input.charCodeAt(u.position) === 46 && ((u.position += 3), F(u, !0, -1));
		return;
	}
	if (u.position < u.length - 1) g(u, 'end of the stream or a document separator is expected');
	else return;
}
function Dn(u, e) {
	(u = String(u)),
		(e = e || {}),
		u.length !== 0 &&
			(u.charCodeAt(u.length - 1) !== 10 &&
				u.charCodeAt(u.length - 1) !== 13 &&
				(u += `
`),
			u.charCodeAt(0) === 65279 && (u = u.slice(1)));
	var n = new ko(u, e),
		i = u.indexOf('\0');
	for (
		i !== -1 && ((n.position = i), g(n, 'null byte is not allowed in input')), n.input += '\0';
		n.input.charCodeAt(n.position) === 32;

	)
		(n.lineIndent += 1), (n.position += 1);
	for (; n.position < n.length - 1; ) To(n);
	return n.documents;
}
function Io(u, e, n) {
	e !== null && typeof e == 'object' && typeof n > 'u' && ((n = e), (e = null));
	var i = Dn(u, n);
	if (typeof e != 'function') return i;
	for (var r = 0, t = i.length; r < t; r += 1) e(i[r]);
}
function Lo(u, e) {
	var n = Dn(u, e);
	if (n.length !== 0) {
		if (n.length === 1) return n[0];
		throw new O('expected a single document in the stream, but found more');
	}
}
var Oo = Io,
	Mo = Lo,
	Fn = { loadAll: Oo, load: Mo },
	vn = Object.prototype.toString,
	wn = Object.prototype.hasOwnProperty,
	we = 65279,
	Bo = 9,
	Eu = 10,
	Ro = 13,
	No = 32,
	Po = 33,
	zo = 34,
	fe = 35,
	qo = 37,
	jo = 38,
	Ho = 39,
	Uo = 42,
	Sn = 44,
	$o = 45,
	zu = 58,
	Yo = 61,
	Zo = 62,
	Go = 63,
	Vo = 64,
	Tn = 91,
	In = 93,
	Wo = 96,
	Ln = 123,
	Ko = 124,
	On = 125,
	I = {};
I[0] = '\\0';
I[7] = '\\a';
I[8] = '\\b';
I[9] = '\\t';
I[10] = '\\n';
I[11] = '\\v';
I[12] = '\\f';
I[13] = '\\r';
I[27] = '\\e';
I[34] = '\\"';
I[92] = '\\\\';
I[133] = '\\N';
I[160] = '\\_';
I[8232] = '\\L';
I[8233] = '\\P';
var Qo = [
		'y',
		'Y',
		'yes',
		'Yes',
		'YES',
		'on',
		'On',
		'ON',
		'n',
		'N',
		'no',
		'No',
		'NO',
		'off',
		'Off',
		'OFF'
	],
	Jo = /^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;
function Xo(u, e) {
	var n, i, r, t, c, o, l;
	if (e === null) return {};
	for (n = {}, i = Object.keys(e), r = 0, t = i.length; r < t; r += 1)
		(c = i[r]),
			(o = String(e[c])),
			c.slice(0, 2) === '!!' && (c = 'tag:yaml.org,2002:' + c.slice(2)),
			(l = u.compiledTypeMap.fallback[c]),
			l && wn.call(l.styleAliases, o) && (o = l.styleAliases[o]),
			(n[c] = o);
	return n;
}
function ul(u) {
	var e, n, i;
	if (((e = u.toString(16).toUpperCase()), u <= 255)) (n = 'x'), (i = 2);
	else if (u <= 65535) (n = 'u'), (i = 4);
	else if (u <= 4294967295) (n = 'U'), (i = 8);
	else throw new O('code point within a string may not be greater than 0xFFFFFFFF');
	return '\\' + n + v.repeat('0', i - e.length) + e;
}
var el = 1,
	yu = 2;
function nl(u) {
	(this.schema = u.schema || De),
		(this.indent = Math.max(1, u.indent || 2)),
		(this.noArrayIndent = u.noArrayIndent || !1),
		(this.skipInvalid = u.skipInvalid || !1),
		(this.flowLevel = v.isNothing(u.flowLevel) ? -1 : u.flowLevel),
		(this.styleMap = Xo(this.schema, u.styles || null)),
		(this.sortKeys = u.sortKeys || !1),
		(this.lineWidth = u.lineWidth || 80),
		(this.noRefs = u.noRefs || !1),
		(this.noCompatMode = u.noCompatMode || !1),
		(this.condenseFlow = u.condenseFlow || !1),
		(this.quotingType = u.quotingType === '"' ? yu : el),
		(this.forceQuotes = u.forceQuotes || !1),
		(this.replacer = typeof u.replacer == 'function' ? u.replacer : null),
		(this.implicitTypes = this.schema.compiledImplicit),
		(this.explicitTypes = this.schema.compiledExplicit),
		(this.tag = null),
		(this.result = ''),
		(this.duplicates = []),
		(this.usedDuplicates = null);
}
function f0(u, e) {
	for (var n = v.repeat(' ', e), i = 0, r = -1, t = '', c, o = u.length; i < o; )
		(r = u.indexOf(
			`
`,
			i
		)),
			r === -1 ? ((c = u.slice(i)), (i = o)) : ((c = u.slice(i, r + 1)), (i = r + 1)),
			c.length &&
				c !==
					`
` &&
				(t += n),
			(t += c);
	return t;
}
function se(u, e) {
	return (
		`
` + v.repeat(' ', u.indent * e)
	);
}
function rl(u, e) {
	var n, i, r;
	for (n = 0, i = u.implicitTypes.length; n < i; n += 1)
		if (((r = u.implicitTypes[n]), r.resolve(e))) return !0;
	return !1;
}
function qu(u) {
	return u === No || u === Bo;
}
function Du(u) {
	return (
		(32 <= u && u <= 126) ||
		(161 <= u && u <= 55295 && u !== 8232 && u !== 8233) ||
		(57344 <= u && u <= 65533 && u !== we) ||
		(65536 <= u && u <= 1114111)
	);
}
function s0(u) {
	return Du(u) && u !== we && u !== Ro && u !== Eu;
}
function d0(u, e, n) {
	var i = s0(u),
		r = i && !qu(u);
	return (
		((n ? i : i && u !== Sn && u !== Tn && u !== In && u !== Ln && u !== On) &&
			u !== fe &&
			!(e === zu && !r)) ||
		(s0(e) && !qu(e) && u === fe) ||
		(e === zu && r)
	);
}
function il(u) {
	return (
		Du(u) &&
		u !== we &&
		!qu(u) &&
		u !== $o &&
		u !== Go &&
		u !== zu &&
		u !== Sn &&
		u !== Tn &&
		u !== In &&
		u !== Ln &&
		u !== On &&
		u !== fe &&
		u !== jo &&
		u !== Uo &&
		u !== Po &&
		u !== Ko &&
		u !== Yo &&
		u !== Zo &&
		u !== Ho &&
		u !== zo &&
		u !== qo &&
		u !== Vo &&
		u !== Wo
	);
}
function tl(u) {
	return !qu(u) && u !== zu;
}
function mu(u, e) {
	var n = u.charCodeAt(e),
		i;
	return n >= 55296 &&
		n <= 56319 &&
		e + 1 < u.length &&
		((i = u.charCodeAt(e + 1)), i >= 56320 && i <= 57343)
		? (n - 55296) * 1024 + i - 56320 + 65536
		: n;
}
function Mn(u) {
	var e = /^\n* /;
	return e.test(u);
}
var Bn = 1,
	de = 2,
	Rn = 3,
	Nn = 4,
	ou = 5;
function cl(u, e, n, i, r, t, c, o) {
	var l,
		a = 0,
		f = null,
		s = !1,
		p = !1,
		h = i !== -1,
		d = -1,
		x = il(mu(u, 0)) && tl(mu(u, u.length - 1));
	if (e || c)
		for (l = 0; l < u.length; a >= 65536 ? (l += 2) : l++) {
			if (((a = mu(u, l)), !Du(a))) return ou;
			(x = x && d0(a, f, o)), (f = a);
		}
	else {
		for (l = 0; l < u.length; a >= 65536 ? (l += 2) : l++) {
			if (((a = mu(u, l)), a === Eu))
				(s = !0), h && ((p = p || (l - d - 1 > i && u[d + 1] !== ' ')), (d = l));
			else if (!Du(a)) return ou;
			(x = x && d0(a, f, o)), (f = a);
		}
		p = p || (h && l - d - 1 > i && u[d + 1] !== ' ');
	}
	return !s && !p
		? x && !c && !r(u)
			? Bn
			: t === yu
				? ou
				: de
		: n > 9 && Mn(u)
			? ou
			: c
				? t === yu
					? ou
					: de
				: p
					? Nn
					: Rn;
}
function ol(u, e, n, i, r) {
	u.dump = (function () {
		if (e.length === 0) return u.quotingType === yu ? '""' : "''";
		if (!u.noCompatMode && (Qo.indexOf(e) !== -1 || Jo.test(e)))
			return u.quotingType === yu ? '"' + e + '"' : "'" + e + "'";
		var t = u.indent * Math.max(1, n),
			c = u.lineWidth === -1 ? -1 : Math.max(Math.min(u.lineWidth, 40), u.lineWidth - t),
			o = i || (u.flowLevel > -1 && n >= u.flowLevel);
		function l(a) {
			return rl(u, a);
		}
		switch (cl(e, o, u.indent, c, l, u.quotingType, u.forceQuotes && !i, r)) {
			case Bn:
				return e;
			case de:
				return "'" + e.replace(/'/g, "''") + "'";
			case Rn:
				return '|' + h0(e, u.indent) + p0(f0(e, t));
			case Nn:
				return '>' + h0(e, u.indent) + p0(f0(ll(e, c), t));
			case ou:
				return '"' + al(e) + '"';
			default:
				throw new O('impossible error: invalid scalar style');
		}
	})();
}
function h0(u, e) {
	var n = Mn(u) ? String(e) : '',
		i =
			u[u.length - 1] ===
			`
`,
		r =
			i &&
			(u[u.length - 2] ===
				`
` ||
				u ===
					`
`),
		t = r ? '+' : i ? '' : '-';
	return (
		n +
		t +
		`
`
	);
}
function p0(u) {
	return u[u.length - 1] ===
		`
`
		? u.slice(0, -1)
		: u;
}
function ll(u, e) {
	for (
		var n = /(\n+)([^\n]*)/g,
			i = (function () {
				var a = u.indexOf(`
`);
				return (a = a !== -1 ? a : u.length), (n.lastIndex = a), b0(u.slice(0, a), e);
			})(),
			r =
				u[0] ===
					`
` || u[0] === ' ',
			t,
			c;
		(c = n.exec(u));

	) {
		var o = c[1],
			l = c[2];
		(t = l[0] === ' '),
			(i +=
				o +
				(!r && !t && l !== ''
					? `
`
					: '') +
				b0(l, e)),
			(r = t);
	}
	return i;
}
function b0(u, e) {
	if (u === '' || u[0] === ' ') return u;
	for (var n = / [^ ]/g, i, r = 0, t, c = 0, o = 0, l = ''; (i = n.exec(u)); )
		(o = i.index),
			o - r > e &&
				((t = c > r ? c : o),
				(l +=
					`
` + u.slice(r, t)),
				(r = t + 1)),
			(c = o);
	return (
		(l += `
`),
		u.length - r > e && c > r
			? (l +=
					u.slice(r, c) +
					`
` +
					u.slice(c + 1))
			: (l += u.slice(r)),
		l.slice(1)
	);
}
function al(u) {
	for (var e = '', n = 0, i, r = 0; r < u.length; n >= 65536 ? (r += 2) : r++)
		(n = mu(u, r)),
			(i = I[n]),
			!i && Du(n) ? ((e += u[r]), n >= 65536 && (e += u[r + 1])) : (e += i || ul(n));
	return e;
}
function fl(u, e, n) {
	var i = '',
		r = u.tag,
		t,
		c,
		o;
	for (t = 0, c = n.length; t < c; t += 1)
		(o = n[t]),
			u.replacer && (o = u.replacer.call(n, String(t), o)),
			(Y(u, e, o, !1, !1) || (typeof o > 'u' && Y(u, e, null, !1, !1))) &&
				(i !== '' && (i += ',' + (u.condenseFlow ? '' : ' ')), (i += u.dump));
	(u.tag = r), (u.dump = '[' + i + ']');
}
function x0(u, e, n, i) {
	var r = '',
		t = u.tag,
		c,
		o,
		l;
	for (c = 0, o = n.length; c < o; c += 1)
		(l = n[c]),
			u.replacer && (l = u.replacer.call(n, String(c), l)),
			(Y(u, e + 1, l, !0, !0, !1, !0) || (typeof l > 'u' && Y(u, e + 1, null, !0, !0, !1, !0))) &&
				((!i || r !== '') && (r += se(u, e)),
				u.dump && Eu === u.dump.charCodeAt(0) ? (r += '-') : (r += '- '),
				(r += u.dump));
	(u.tag = t), (u.dump = r || '[]');
}
function sl(u, e, n) {
	var i = '',
		r = u.tag,
		t = Object.keys(n),
		c,
		o,
		l,
		a,
		f;
	for (c = 0, o = t.length; c < o; c += 1)
		(f = ''),
			i !== '' && (f += ', '),
			u.condenseFlow && (f += '"'),
			(l = t[c]),
			(a = n[l]),
			u.replacer && (a = u.replacer.call(n, l, a)),
			Y(u, e, l, !1, !1) &&
				(u.dump.length > 1024 && (f += '? '),
				(f += u.dump + (u.condenseFlow ? '"' : '') + ':' + (u.condenseFlow ? '' : ' ')),
				Y(u, e, a, !1, !1) && ((f += u.dump), (i += f)));
	(u.tag = r), (u.dump = '{' + i + '}');
}
function dl(u, e, n, i) {
	var r = '',
		t = u.tag,
		c = Object.keys(n),
		o,
		l,
		a,
		f,
		s,
		p;
	if (u.sortKeys === !0) c.sort();
	else if (typeof u.sortKeys == 'function') c.sort(u.sortKeys);
	else if (u.sortKeys) throw new O('sortKeys must be a boolean or a function');
	for (o = 0, l = c.length; o < l; o += 1)
		(p = ''),
			(!i || r !== '') && (p += se(u, e)),
			(a = c[o]),
			(f = n[a]),
			u.replacer && (f = u.replacer.call(n, a, f)),
			Y(u, e + 1, a, !0, !0, !0) &&
				((s = (u.tag !== null && u.tag !== '?') || (u.dump && u.dump.length > 1024)),
				s && (u.dump && Eu === u.dump.charCodeAt(0) ? (p += '?') : (p += '? ')),
				(p += u.dump),
				s && (p += se(u, e)),
				Y(u, e + 1, f, !0, s) &&
					(u.dump && Eu === u.dump.charCodeAt(0) ? (p += ':') : (p += ': '),
					(p += u.dump),
					(r += p)));
	(u.tag = t), (u.dump = r || '{}');
}
function m0(u, e, n) {
	var i, r, t, c, o, l;
	for (r = n ? u.explicitTypes : u.implicitTypes, t = 0, c = r.length; t < c; t += 1)
		if (
			((o = r[t]),
			(o.instanceOf || o.predicate) &&
				(!o.instanceOf || (typeof e == 'object' && e instanceof o.instanceOf)) &&
				(!o.predicate || o.predicate(e)))
		) {
			if (
				(n
					? o.multi && o.representName
						? (u.tag = o.representName(e))
						: (u.tag = o.tag)
					: (u.tag = '?'),
				o.represent)
			) {
				if (
					((l = u.styleMap[o.tag] || o.defaultStyle), vn.call(o.represent) === '[object Function]')
				)
					i = o.represent(e, l);
				else if (wn.call(o.represent, l)) i = o.represent[l](e, l);
				else throw new O('!<' + o.tag + '> tag resolver accepts not "' + l + '" style');
				u.dump = i;
			}
			return !0;
		}
	return !1;
}
function Y(u, e, n, i, r, t, c) {
	(u.tag = null), (u.dump = n), m0(u, n, !1) || m0(u, n, !0);
	var o = vn.call(u.dump),
		l = i,
		a;
	i && (i = u.flowLevel < 0 || u.flowLevel > e);
	var f = o === '[object Object]' || o === '[object Array]',
		s,
		p;
	if (
		(f && ((s = u.duplicates.indexOf(n)), (p = s !== -1)),
		((u.tag !== null && u.tag !== '?') || p || (u.indent !== 2 && e > 0)) && (r = !1),
		p && u.usedDuplicates[s])
	)
		u.dump = '*ref_' + s;
	else {
		if ((f && p && !u.usedDuplicates[s] && (u.usedDuplicates[s] = !0), o === '[object Object]'))
			i && Object.keys(u.dump).length !== 0
				? (dl(u, e, u.dump, r), p && (u.dump = '&ref_' + s + u.dump))
				: (sl(u, e, u.dump), p && (u.dump = '&ref_' + s + ' ' + u.dump));
		else if (o === '[object Array]')
			i && u.dump.length !== 0
				? (u.noArrayIndent && !c && e > 0 ? x0(u, e - 1, u.dump, r) : x0(u, e, u.dump, r),
					p && (u.dump = '&ref_' + s + u.dump))
				: (fl(u, e, u.dump), p && (u.dump = '&ref_' + s + ' ' + u.dump));
		else if (o === '[object String]') u.tag !== '?' && ol(u, u.dump, e, t, l);
		else {
			if (o === '[object Undefined]') return !1;
			if (u.skipInvalid) return !1;
			throw new O('unacceptable kind of an object to dump ' + o);
		}
		u.tag !== null &&
			u.tag !== '?' &&
			((a = encodeURI(u.tag[0] === '!' ? u.tag.slice(1) : u.tag).replace(/!/g, '%21')),
			u.tag[0] === '!'
				? (a = '!' + a)
				: a.slice(0, 18) === 'tag:yaml.org,2002:'
					? (a = '!!' + a.slice(18))
					: (a = '!<' + a + '>'),
			(u.dump = a + ' ' + u.dump));
	}
	return !0;
}
function hl(u, e) {
	var n = [],
		i = [],
		r,
		t;
	for (he(u, n, i), r = 0, t = i.length; r < t; r += 1) e.duplicates.push(n[i[r]]);
	e.usedDuplicates = new Array(t);
}
function he(u, e, n) {
	var i, r, t;
	if (u !== null && typeof u == 'object')
		if (((r = e.indexOf(u)), r !== -1)) n.indexOf(r) === -1 && n.push(r);
		else if ((e.push(u), Array.isArray(u))) for (r = 0, t = u.length; r < t; r += 1) he(u[r], e, n);
		else for (i = Object.keys(u), r = 0, t = i.length; r < t; r += 1) he(u[i[r]], e, n);
}
function pl(u, e) {
	e = e || {};
	var n = new nl(e);
	n.noRefs || hl(u, n);
	var i = u;
	return (
		n.replacer && (i = n.replacer.call({ '': i }, '', i)),
		Y(n, 0, i, !0, !0)
			? n.dump +
				`
`
			: ''
	);
}
var bl = pl,
	xl = { dump: bl };
function Se(u, e) {
	return function () {
		throw new Error(
			'Function yaml.' +
				u +
				' is removed in js-yaml 4. Use yaml.' +
				e +
				' instead, which is now safe by default.'
		);
	};
}
var ml = T,
	_l = J0,
	gl = nn,
	kl = ln,
	Al = an,
	Cl = De,
	El = Fn.load,
	yl = Fn.loadAll,
	Dl = xl.dump,
	Fl = O,
	vl = {
		binary: pn,
		float: on,
		map: en,
		null: rn,
		pairs: xn,
		set: mn,
		timestamp: dn,
		bool: tn,
		int: cn,
		merge: hn,
		omap: bn,
		seq: un,
		str: X0
	},
	wl = Se('safeLoad', 'load'),
	Sl = Se('safeLoadAll', 'loadAll'),
	Tl = Se('safeDump', 'dump'),
	Il = {
		Type: ml,
		Schema: _l,
		FAILSAFE_SCHEMA: gl,
		JSON_SCHEMA: kl,
		CORE_SCHEMA: Al,
		DEFAULT_SCHEMA: Cl,
		load: El,
		loadAll: yl,
		dump: Dl,
		YAMLException: Fl,
		types: vl,
		safeLoad: wl,
		safeLoadAll: Sl,
		safeDump: Tl
	},
	Ll = be('<div class="blog_post"><h6> </h6> <h1><!></h1> <!></div>'),
	Ol = be('<p>Loading posts...</p>'),
	Ml = be('<body><div id="right_container"><!></div></body>');
function jl(u, e) {
	rr(e, !0);
	const n = N({ html: !0, linkify: !0, breaks: !1, typographer: !0 });
	n.use(fc, { p: "font-size:22px;font-family:'SinaNova',sans-serif" });
	let i = ir(Be([]));
	hr(async () => {
		try {
			const o = Object.assign({});
			cr(
				i,
				Be(
					await Promise.all(
						Object.entries(o).map(async ([l, a]) => {
							const p = (await a()).default.match(/^---\n([\s\S]+?)\n---\n([\s\S]*)$/);
							if (!p)
								return (
									console.error(`YAML front matter not found in file: ${l}`),
									{
										title: 'Untitled',
										date: 'Unknown Date',
										content: 'No content available',
										timestamp: new Date(0)
									}
								);
							const [, h, d] = p,
								x = h ? Il.load(h) : {},
								{ title: m = 'Untitled', date: _ = 'Unknown Date' } = x,
								b = n.renderInline(m),
								A = new Date(_);
							return { title: b, date: _, content: d || '', timestamp: A };
						})
					)
				)
			),
				iu(i).sort((l, a) => a.timestamp.getTime() - l.timestamp.getTime());
		} catch (o) {
			console.error('Error loading posts:', o);
		}
	});
	var r = Ml(),
		t = bu(r),
		c = bu(t);
	fr(
		c,
		() => iu(i).length > 0,
		(o) => {
			var l = dr(),
				a = or(l);
			xr(
				a,
				17,
				() => iu(i),
				pr,
				(f, s) => {
					var p = Ll(),
						h = bu(p),
						d = bu(h, !0);
					xu(h);
					var x = Me(h, 2),
						m = bu(x);
					Pe(m, () => iu(s).title), xu(x);
					var _ = Me(x, 2);
					Pe(_, () => n.render(iu(s).content)), xu(p), lr(() => ar(d, iu(s).date)), Su(f, p);
				}
			),
				Su(o, l);
		},
		(o) => {
			var l = Ol();
			Su(o, l);
		}
	),
		xu(t),
		xu(r),
		Su(u, r),
		tr();
}
export { jl as component };
