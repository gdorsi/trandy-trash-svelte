import {
	S as m,
	i as v,
	s as y,
	D as $,
	e as d,
	t as g,
	k as T,
	c as h,
	a as p,
	g as k,
	d as c,
	n as E,
	b,
	f as H,
	E as u,
	F as S,
	G as j,
	H as q,
	x as A,
	u as C
} from '../chunks/vendor-65de78c9.js';
function D(r) {
	let t, n, i, o, a;
	const _ = r[1].default,
		s = $(_, r, r[0], null);
	return {
		c() {
			(t = d('main')), (n = d('h1')), (i = g('Trendy Trash')), (o = T()), s && s.c(), this.h();
		},
		l(e) {
			t = h(e, 'MAIN', { class: !0 });
			var l = p(t);
			n = h(l, 'H1', {});
			var f = p(n);
			(i = k(f, 'Trendy Trash')), f.forEach(c), (o = E(l)), s && s.l(l), l.forEach(c), this.h();
		},
		h() {
			b(t, 'class', 'svelte-18akhel');
		},
		m(e, l) {
			H(e, t, l), u(t, n), u(n, i), u(t, o), s && s.m(t, null), (a = !0);
		},
		p(e, [l]) {
			s && s.p && (!a || l & 1) && S(s, _, e, e[0], a ? q(_, e[0], l, null) : j(e[0]), null);
		},
		i(e) {
			a || (A(s, e), (a = !0));
		},
		o(e) {
			C(s, e), (a = !1);
		},
		d(e) {
			e && c(t), s && s.d(e);
		}
	};
}
function F(r, t, n) {
	let { $$slots: i = {}, $$scope: o } = t;
	return (
		(r.$$set = (a) => {
			'$$scope' in a && n(0, (o = a.$$scope));
		}),
		[o, i]
	);
}
class I extends m {
	constructor(t) {
		super();
		v(this, t, F, D, y, {});
	}
}
export { I as default };
