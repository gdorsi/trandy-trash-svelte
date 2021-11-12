import {
	S as J,
	i as K,
	s as L,
	e as S,
	t as C,
	k as j,
	c as R,
	a as T,
	g as E,
	n as I,
	d as v,
	b as V,
	J as B,
	f as b,
	E as g,
	K as N,
	h as D,
	L as O,
	M as P,
	N as Q,
	O as U,
	P as W,
	Q as X,
	R as Y,
	T as z,
	w as F,
	x,
	u as $,
	U as ee,
	V as te,
	I as le,
	W as oe,
	X as se,
	Y as q,
	r as ne,
	Z as ae
} from '../chunks/vendor-65de78c9.js';
const G = ['\u{1F6AC}', '\u{1F961}', '\u{1F36C}', '\u{1F9F1}', '\u{1F50B}', '\u{1F4C0}'];
function A() {
	return { value: G[Math.round(Math.random() * (G.length - 1))] };
}
function re(s) {
	const n = Array.from(Array(s * s), A);
	let l = w(n, s);
	for (; l.length; ) {
		for (let f of l) for (let a of f) n[a] = A();
		l = w(n, s);
	}
	return n;
}
function y(s, n) {
	return !s || !n ? !1 : s.value === n.value;
}
function w(s, n) {
	const l = new Set(),
		f = [];
	let a = new Set();
	const c = (t) => Math.floor(t / n),
		u = (t) => {
			a.add(t), l.add(t);
		};
	for (let t = 0; t < s.length; t++)
		if (!l.has(t)) {
			if (y(s[t], s[t + 1]) && y(s[t], s[t + 2]) && c(t) === c(t + 2)) {
				u(t), u(t + 1), u(t + 2);
				let o = t + 3;
				for (; y(s[t], s[o]) && c(t) === c(o); ) u(o), o++;
			}
			if (y(s[t], s[t + 8]) && y(s[t], s[t + 16])) {
				u(t), u(t + 8), u(t + 16);
				let o = t + 24;
				for (; y(s[t], s[o]); ) u(o), (o += 8);
			}
			a.size && (f.push(a), (a = new Set()));
		}
	return f;
}
function Z(s, n, l) {
	const f = s.slice();
	return (f[10] = n[l]), (f[12] = l), f;
}
function H(s, n) {
	let l,
		f = n[10].value + '',
		a,
		c,
		u,
		t,
		o,
		p,
		m = le,
		_,
		k,
		e;
	function i() {
		return n[7](n[12]);
	}
	return {
		key: s,
		first: null,
		c() {
			(l = S('div')), (a = C(f)), (c = j()), this.h();
		},
		l(r) {
			l = R(r, 'DIV', { class: !0 });
			var h = T(l);
			(a = E(h, f)), (c = I(h)), h.forEach(v), this.h();
		},
		h() {
			V(
				l,
				'class',
				(u =
					'' +
					(B(
						n[0] === n[12]
							? 'selected'
							: Boolean(n[1].length) && !n[1].includes(n[12])
							? 'not-valid-move'
							: ''
					) +
						' svelte-jh95mo'))
			),
				(this.first = l);
		},
		m(r, h) {
			b(r, l, h), g(l, a), g(l, c), (_ = !0), k || ((e = N(l, 'click', i)), (k = !0));
		},
		p(r, h) {
			(n = r),
				(!_ || h & 4) && f !== (f = n[10].value + '') && D(a, f),
				(!_ ||
					(h & 7 &&
						u !==
							(u =
								'' +
								(B(
									n[0] === n[12]
										? 'selected'
										: Boolean(n[1].length) && !n[1].includes(n[12])
										? 'not-valid-move'
										: ''
								) +
									' svelte-jh95mo')))) &&
					V(l, 'class', u);
		},
		r() {
			p = l.getBoundingClientRect();
		},
		f() {
			O(l), m(), P(l, p);
		},
		a() {
			m(), (m = Q(l, p, oe, {}));
		},
		i(r) {
			_ ||
				(U(() => {
					o && o.end(1), (t = se(l, q, {})), t.start();
				}),
				(_ = !0));
		},
		o(r) {
			t && t.invalidate(), (o = W(l, q, {})), (_ = !1);
		},
		d(r) {
			r && v(l), r && o && o.end(), (k = !1), e();
		}
	};
}
function ie(s) {
	let n,
		l,
		f,
		a = Math.floor(s[3]) + '',
		c,
		u,
		t,
		o = [],
		p = new Map(),
		m,
		_ = s[2];
	const k = (e) => e[10];
	for (let e = 0; e < _.length; e += 1) {
		let i = Z(s, _, e),
			r = k(i);
		p.set(r, (o[e] = H(r, i)));
	}
	return {
		c() {
			(n = j()), (l = S('h2')), (f = C('Score: ')), (c = C(a)), (u = j()), (t = S('div'));
			for (let e = 0; e < o.length; e += 1) o[e].c();
			this.h();
		},
		l(e) {
			X('[data-svelte="svelte-cl4ks4"]', document.head).forEach(v),
				(n = I(e)),
				(l = R(e, 'H2', {}));
			var r = T(l);
			(f = E(r, 'Score: ')),
				(c = E(r, a)),
				r.forEach(v),
				(u = I(e)),
				(t = R(e, 'DIV', { class: !0, style: !0 }));
			var h = T(t);
			for (let M = 0; M < o.length; M += 1) o[M].l(h);
			h.forEach(v), this.h();
		},
		h() {
			(document.title = 'Trandy Trash'), V(t, 'class', 'grid svelte-jh95mo'), Y(t, '--size', d);
		},
		m(e, i) {
			b(e, n, i), b(e, l, i), g(l, f), g(l, c), b(e, u, i), b(e, t, i);
			for (let r = 0; r < o.length; r += 1) o[r].m(t, null);
			m = !0;
		},
		p(e, [i]) {
			if (((!m || i & 8) && a !== (a = Math.floor(e[3]) + '') && D(c, a), i & 39)) {
				(_ = e[2]), ne();
				for (let r = 0; r < o.length; r += 1) o[r].r();
				o = z(o, i, k, 1, e, _, p, t, ae, H, null, Z);
				for (let r = 0; r < o.length; r += 1) o[r].a();
				F();
			}
		},
		i(e) {
			if (!m) {
				for (let i = 0; i < _.length; i += 1) x(o[i]);
				m = !0;
			}
		},
		o(e) {
			for (let i = 0; i < o.length; i += 1) $(o[i]);
			m = !1;
		},
		d(e) {
			e && v(n), e && v(l), e && v(u), e && v(t);
			for (let i = 0; i < o.length; i += 1) o[i].d();
		}
	};
}
const fe = !0,
	d = 8;
function ce(s, n, l) {
	let f;
	const a = re(d);
	let c = null,
		u = [],
		t = 0;
	const o = ee();
	te(s, o, (e) => l(3, (f = e)));
	let p = 1;
	function m() {
		const e = w(a, d);
		for (let i of e) {
			l(6, (t += i.size * p * e.length));
			for (let r of i) {
				let h = r;
				for (; h > 7; ) l(2, ([a[h], a[h - d]] = [a[h - d], a[h]]), a), (h -= d);
				l(2, (a[r % d] = A()), a);
			}
		}
		w(a, d).length ? (p++, setTimeout(m, 500)) : (p = 1);
	}
	function _(e) {
		c !== null
			? (u.includes(e) && l(2, ([a[e], a[c]] = [a[c], a[e]]), a),
			  setTimeout(m, 500),
			  l(0, (c = null)))
			: l(0, (c = e));
	}
	const k = (e) => _(e);
	return (
		(s.$$.update = () => {
			if ((s.$$.dirty & 64 && o.set(t), s.$$.dirty & 3))
				if (c !== null) {
					l(1, (u = [c - d, c + d]));
					const e = Math.floor(c / d);
					e === Math.floor((c - 1) / d) && u.push(c - 1),
						e === Math.floor((c + 1) / d) && u.push(c + 1);
				} else l(1, (u = []));
		}),
		[c, u, a, f, o, _, t, k]
	);
}
class he extends J {
	constructor(n) {
		super();
		K(this, n, ce, ie, L, {});
	}
}
export { he as default, fe as prerender };
