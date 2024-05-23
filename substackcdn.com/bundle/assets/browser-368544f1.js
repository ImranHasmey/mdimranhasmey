import "./_sentry-release-injection-file-6cfd5b47.js";
(function() {
    try {
        var e = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
            t = new Error().stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "0cd39a29-f8ce-4899-a628-e9e69148f8ca", e._sentryDebugIdIdentifier = "sentry-dbid-0cd39a29-f8ce-4899-a628-e9e69148f8ca")
    } catch (i) {}
})();
var O = {},
    St = function() {
        return typeof Promise == "function" && Promise.prototype && Promise.prototype.then
    },
    gt = {},
    T = {};
let it;
const Rt = [0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581, 655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706];
T.getSymbolSize = function(t) {
    if (!t) throw new Error('"version" cannot be null or undefined');
    if (t < 1 || t > 40) throw new Error('"version" should be in range from 1 to 40');
    return t * 4 + 17
};
T.getSymbolTotalCodewords = function(t) {
    return Rt[t]
};
T.getBCHDigit = function(e) {
    let t = 0;
    for (; e !== 0;) t++, e >>>= 1;
    return t
};
T.setToSJISFunction = function(t) {
    if (typeof t != "function") throw new Error('"toSJISFunc" is not a valid function.');
    it = t
};
T.isKanjiModeEnabled = function() {
    return typeof it != "undefined"
};
T.toSJIS = function(t) {
    return it(t)
};
var $ = {};
(function(e) {
    e.L = {
        bit: 1
    }, e.M = {
        bit: 0
    }, e.Q = {
        bit: 3
    }, e.H = {
        bit: 2
    };

    function t(i) {
        if (typeof i != "string") throw new Error("Param is not a string");
        switch (i.toLowerCase()) {
            case "l":
            case "low":
                return e.L;
            case "m":
            case "medium":
                return e.M;
            case "q":
            case "quartile":
                return e.Q;
            case "h":
            case "high":
                return e.H;
            default:
                throw new Error("Unknown EC Level: " + i)
        }
    }
    e.isValid = function(o) {
        return o && typeof o.bit != "undefined" && o.bit >= 0 && o.bit < 4
    }, e.from = function(o, r) {
        if (e.isValid(o)) return o;
        try {
            return t(o)
        } catch (n) {
            return r
        }
    }
})($);

function ht() {
    this.buffer = [], this.length = 0
}
ht.prototype = {
    get: function(e) {
        const t = Math.floor(e / 8);
        return (this.buffer[t] >>> 7 - e % 8 & 1) === 1
    },
    put: function(e, t) {
        for (let i = 0; i < t; i++) this.putBit((e >>> t - i - 1 & 1) === 1)
    },
    getLengthInBits: function() {
        return this.length
    },
    putBit: function(e) {
        const t = Math.floor(this.length / 8);
        this.buffer.length <= t && this.buffer.push(0), e && (this.buffer[t] |= 128 >>> this.length % 8), this.length++
    }
};
var Lt = ht;

function V(e) {
    if (!e || e < 1) throw new Error("BitMatrix size must be defined and greater than 0");
    this.size = e, this.data = new Uint8Array(e * e), this.reservedBit = new Uint8Array(e * e)
}
V.prototype.set = function(e, t, i, o) {
    const r = e * this.size + t;
    this.data[r] = i, o && (this.reservedBit[r] = !0)
};
V.prototype.get = function(e, t) {
    return this.data[e * this.size + t]
};
V.prototype.xor = function(e, t, i) {
    this.data[e * this.size + t] ^= i
};
V.prototype.isReserved = function(e, t) {
    return this.reservedBit[e * this.size + t]
};
var Dt = V,
    wt = {};
(function(e) {
    const t = T.getSymbolSize;
    e.getRowColCoords = function(o) {
        if (o === 1) return [];
        const r = Math.floor(o / 7) + 2,
            n = t(o),
            s = n === 145 ? 26 : Math.ceil((n - 13) / (2 * r - 2)) * 2,
            c = [n - 7];
        for (let u = 1; u < r - 1; u++) c[u] = c[u - 1] - s;
        return c.push(6), c.reverse()
    }, e.getPositions = function(o) {
        const r = [],
            n = e.getRowColCoords(o),
            s = n.length;
        for (let c = 0; c < s; c++)
            for (let u = 0; u < s; u++) c === 0 && u === 0 || c === 0 && u === s - 1 || c === s - 1 && u === 0 || r.push([n[c], n[u]]);
        return r
    }
})(wt);
var mt = {};
const _t = T.getSymbolSize,
    lt = 7;
mt.getPositions = function(t) {
    const i = _t(t);
    return [
        [0, 0],
        [i - lt, 0],
        [0, i - lt]
    ]
};
var yt = {};
(function(e) {
    e.Patterns = {
        PATTERN000: 0,
        PATTERN001: 1,
        PATTERN010: 2,
        PATTERN011: 3,
        PATTERN100: 4,
        PATTERN101: 5,
        PATTERN110: 6,
        PATTERN111: 7
    };
    const t = {
        N1: 3,
        N2: 3,
        N3: 40,
        N4: 10
    };
    e.isValid = function(r) {
        return r != null && r !== "" && !isNaN(r) && r >= 0 && r <= 7
    }, e.from = function(r) {
        return e.isValid(r) ? parseInt(r, 10) : void 0
    }, e.getPenaltyN1 = function(r) {
        const n = r.size;
        let s = 0,
            c = 0,
            u = 0,
            a = null,
            l = null;
        for (let B = 0; B < n; B++) {
            c = u = 0, a = l = null;
            for (let w = 0; w < n; w++) {
                let f = r.get(B, w);
                f === a ? c++ : (c >= 5 && (s += t.N1 + (c - 5)), a = f, c = 1), f = r.get(w, B), f === l ? u++ : (u >= 5 && (s += t.N1 + (u - 5)), l = f, u = 1)
            }
            c >= 5 && (s += t.N1 + (c - 5)), u >= 5 && (s += t.N1 + (u - 5))
        }
        return s
    }, e.getPenaltyN2 = function(r) {
        const n = r.size;
        let s = 0;
        for (let c = 0; c < n - 1; c++)
            for (let u = 0; u < n - 1; u++) {
                const a = r.get(c, u) + r.get(c, u + 1) + r.get(c + 1, u) + r.get(c + 1, u + 1);
                (a === 4 || a === 0) && s++
            }
        return s * t.N2
    }, e.getPenaltyN3 = function(r) {
        const n = r.size;
        let s = 0,
            c = 0,
            u = 0;
        for (let a = 0; a < n; a++) {
            c = u = 0;
            for (let l = 0; l < n; l++) c = c << 1 & 2047 | r.get(a, l), l >= 10 && (c === 1488 || c === 93) && s++, u = u << 1 & 2047 | r.get(l, a), l >= 10 && (u === 1488 || u === 93) && s++
        }
        return s * t.N3
    }, e.getPenaltyN4 = function(r) {
        let n = 0;
        const s = r.data.length;
        for (let u = 0; u < s; u++) n += r.data[u];
        return Math.abs(Math.ceil(n * 100 / s / 5) - 10) * t.N4
    };

    function i(o, r, n) {
        switch (o) {
            case e.Patterns.PATTERN000:
                return (r + n) % 2 === 0;
            case e.Patterns.PATTERN001:
                return r % 2 === 0;
            case e.Patterns.PATTERN010:
                return n % 3 === 0;
            case e.Patterns.PATTERN011:
                return (r + n) % 3 === 0;
            case e.Patterns.PATTERN100:
                return (Math.floor(r / 2) + Math.floor(n / 3)) % 2 === 0;
            case e.Patterns.PATTERN101:
                return r * n % 2 + r * n % 3 === 0;
            case e.Patterns.PATTERN110:
                return (r * n % 2 + r * n % 3) % 2 === 0;
            case e.Patterns.PATTERN111:
                return (r * n % 3 + (r + n) % 2) % 2 === 0;
            default:
                throw new Error("bad maskPattern:" + o)
        }
    }
    e.applyMask = function(r, n) {
        const s = n.size;
        for (let c = 0; c < s; c++)
            for (let u = 0; u < s; u++) n.isReserved(u, c) || n.xor(u, c, i(r, u, c))
    }, e.getBestMask = function(r, n) {
        const s = Object.keys(e.Patterns).length;
        let c = 0,
            u = 1 / 0;
        for (let a = 0; a < s; a++) {
            n(a), e.applyMask(a, r);
            const l = e.getPenaltyN1(r) + e.getPenaltyN2(r) + e.getPenaltyN3(r) + e.getPenaltyN4(r);
            e.applyMask(a, r), l < u && (u = l, c = a)
        }
        return c
    }
})(yt);
var j = {};
const R = $,
    H = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4, 4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8, 10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6, 11, 16, 19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23, 25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12, 23, 34, 37, 12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29, 40, 48, 16, 31, 43, 51, 17, 33, 45, 54, 18, 35, 48, 57, 19, 37, 51, 60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70, 22, 45, 62, 74, 24, 47, 65, 77, 25, 49, 68, 81],
    K = [7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48, 72, 88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110, 160, 192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308, 104, 198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280, 408, 480, 168, 308, 448, 532, 180, 338, 504, 588, 196, 364, 546, 650, 224, 416, 600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504, 750, 900, 300, 560, 810, 960, 312, 588, 870, 1050, 336, 644, 952, 1110, 360, 700, 1020, 1200, 390, 728, 1050, 1260, 420, 784, 1140, 1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510, 924, 1350, 1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064, 1590, 1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860, 2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430];
j.getBlocksCount = function(t, i) {
    switch (i) {
        case R.L:
            return H[(t - 1) * 4 + 0];
        case R.M:
            return H[(t - 1) * 4 + 1];
        case R.Q:
            return H[(t - 1) * 4 + 2];
        case R.H:
            return H[(t - 1) * 4 + 3];
        default:
            return
    }
};
j.getTotalCodewordsCount = function(t, i) {
    switch (i) {
        case R.L:
            return K[(t - 1) * 4 + 0];
        case R.M:
            return K[(t - 1) * 4 + 1];
        case R.Q:
            return K[(t - 1) * 4 + 2];
        case R.H:
            return K[(t - 1) * 4 + 3];
        default:
            return
    }
};
var Et = {},
    G = {};
const v = new Uint8Array(512),
    J = new Uint8Array(256);
(function() {
    let t = 1;
    for (let i = 0; i < 255; i++) v[i] = t, J[t] = i, t <<= 1, t & 256 && (t ^= 285);
    for (let i = 255; i < 512; i++) v[i] = v[i - 255]
})();
G.log = function(t) {
    if (t < 1) throw new Error("log(" + t + ")");
    return J[t]
};
G.exp = function(t) {
    return v[t]
};
G.mul = function(t, i) {
    return t === 0 || i === 0 ? 0 : v[J[t] + J[i]]
};
(function(e) {
    const t = G;
    e.mul = function(o, r) {
        const n = new Uint8Array(o.length + r.length - 1);
        for (let s = 0; s < o.length; s++)
            for (let c = 0; c < r.length; c++) n[s + c] ^= t.mul(o[s], r[c]);
        return n
    }, e.mod = function(o, r) {
        let n = new Uint8Array(o);
        for (; n.length - r.length >= 0;) {
            const s = n[0];
            for (let u = 0; u < r.length; u++) n[u] ^= t.mul(r[u], s);
            let c = 0;
            for (; c < n.length && n[c] === 0;) c++;
            n = n.slice(c)
        }
        return n
    }, e.generateECPolynomial = function(o) {
        let r = new Uint8Array([1]);
        for (let n = 0; n < o; n++) r = e.mul(r, new Uint8Array([1, t.exp(n)]));
        return r
    }
})(Et);
const Ct = Et;

function st(e) {
    this.genPoly = void 0, this.degree = e, this.degree && this.initialize(this.degree)
}
st.prototype.initialize = function(t) {
    this.degree = t, this.genPoly = Ct.generateECPolynomial(this.degree)
};
st.prototype.encode = function(t) {
    if (!this.genPoly) throw new Error("Encoder not initialized");
    const i = new Uint8Array(t.length + this.degree);
    i.set(t);
    const o = Ct.mod(i, this.genPoly),
        r = this.degree - o.length;
    if (r > 0) {
        const n = new Uint8Array(this.degree);
        return n.set(o, r), n
    }
    return o
};
var Ut = st,
    Bt = {},
    L = {},
    ut = {};
ut.isValid = function(t) {
    return !isNaN(t) && t >= 1 && t <= 40
};
var M = {};
const pt = "[0-9]+",
    Ft = "[A-Z $%*+\\-./:]+";
let z = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
z = z.replace(/u/g, "\\u");
const kt = "(?:(?![A-Z0-9 $%*+\\-./:]|" + z + `)(?:.|[\r
]))+`;
M.KANJI = new RegExp(z, "g");
M.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g");
M.BYTE = new RegExp(kt, "g");
M.NUMERIC = new RegExp(pt, "g");
M.ALPHANUMERIC = new RegExp(Ft, "g");
const vt = new RegExp("^" + z + "$"),
    zt = new RegExp("^" + pt + "$"),
    Vt = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
M.testKanji = function(t) {
    return vt.test(t)
};
M.testNumeric = function(t) {
    return zt.test(t)
};
M.testAlphanumeric = function(t) {
    return Vt.test(t)
};
(function(e) {
    const t = ut,
        i = M;
    e.NUMERIC = {
        id: "Numeric",
        bit: 1,
        ccBits: [10, 12, 14]
    }, e.ALPHANUMERIC = {
        id: "Alphanumeric",
        bit: 2,
        ccBits: [9, 11, 13]
    }, e.BYTE = {
        id: "Byte",
        bit: 4,
        ccBits: [8, 16, 16]
    }, e.KANJI = {
        id: "Kanji",
        bit: 8,
        ccBits: [8, 10, 12]
    }, e.MIXED = {
        bit: -1
    }, e.getCharCountIndicator = function(n, s) {
        if (!n.ccBits) throw new Error("Invalid mode: " + n);
        if (!t.isValid(s)) throw new Error("Invalid version: " + s);
        return s >= 1 && s < 10 ? n.ccBits[0] : s < 27 ? n.ccBits[1] : n.ccBits[2]
    }, e.getBestModeForData = function(n) {
        return i.testNumeric(n) ? e.NUMERIC : i.testAlphanumeric(n) ? e.ALPHANUMERIC : i.testKanji(n) ? e.KANJI : e.BYTE
    }, e.toString = function(n) {
        if (n && n.id) return n.id;
        throw new Error("Invalid mode")
    }, e.isValid = function(n) {
        return n && n.bit && n.ccBits
    };

    function o(r) {
        if (typeof r != "string") throw new Error("Param is not a string");
        switch (r.toLowerCase()) {
            case "numeric":
                return e.NUMERIC;
            case "alphanumeric":
                return e.ALPHANUMERIC;
            case "kanji":
                return e.KANJI;
            case "byte":
                return e.BYTE;
            default:
                throw new Error("Unknown mode: " + r)
        }
    }
    e.from = function(n, s) {
        if (e.isValid(n)) return n;
        try {
            return o(n)
        } catch (c) {
            return s
        }
    }
})(L);
(function(e) {
    const t = T,
        i = j,
        o = $,
        r = L,
        n = ut,
        s = 7973,
        c = t.getBCHDigit(s);

    function u(w, f, m) {
        for (let y = 1; y <= 40; y++)
            if (f <= e.getCapacity(y, m, w)) return y
    }

    function a(w, f) {
        return r.getCharCountIndicator(w, f) + 4
    }

    function l(w, f) {
        let m = 0;
        return w.forEach(function(y) {
            const I = a(y.mode, f);
            m += I + y.getBitsLength()
        }), m
    }

    function B(w, f) {
        for (let m = 1; m <= 40; m++)
            if (l(w, m) <= e.getCapacity(m, f, r.MIXED)) return m
    }
    e.from = function(f, m) {
        return n.isValid(f) ? parseInt(f, 10) : m
    }, e.getCapacity = function(f, m, y) {
        if (!n.isValid(f)) throw new Error("Invalid QR Code version");
        typeof y == "undefined" && (y = r.BYTE);
        const I = t.getSymbolTotalCodewords(f),
            h = i.getTotalCodewordsCount(f, m),
            E = (I - h) * 8;
        if (y === r.MIXED) return E;
        const g = E - a(y, f);
        switch (y) {
            case r.NUMERIC:
                return Math.floor(g / 10 * 3);
            case r.ALPHANUMERIC:
                return Math.floor(g / 11 * 2);
            case r.KANJI:
                return Math.floor(g / 13);
            case r.BYTE:
            default:
                return Math.floor(g / 8)
        }
    }, e.getBestVersionForData = function(f, m) {
        let y;
        const I = o.from(m, o.M);
        if (Array.isArray(f)) {
            if (f.length > 1) return B(f, I);
            if (f.length === 0) return 1;
            y = f[0]
        } else y = f;
        return u(y.mode, y.getLength(), I)
    }, e.getEncodedBits = function(f) {
        if (!n.isValid(f) || f < 7) throw new Error("Invalid QR Code version");
        let m = f << 12;
        for (; t.getBCHDigit(m) - c >= 0;) m ^= s << t.getBCHDigit(m) - c;
        return f << 12 | m
    }
})(Bt);
var At = {};
const et = T,
    It = 1335,
    Ht = 21522,
    ft = et.getBCHDigit(It);
At.getEncodedBits = function(t, i) {
    const o = t.bit << 3 | i;
    let r = o << 10;
    for (; et.getBCHDigit(r) - ft >= 0;) r ^= It << et.getBCHDigit(r) - ft;
    return (o << 10 | r) ^ Ht
};
var Tt = {};
const Kt = L;

function D(e) {
    this.mode = Kt.NUMERIC, this.data = e.toString()
}
D.getBitsLength = function(t) {
    return 10 * Math.floor(t / 3) + (t % 3 ? t % 3 * 3 + 1 : 0)
};
D.prototype.getLength = function() {
    return this.data.length
};
D.prototype.getBitsLength = function() {
    return D.getBitsLength(this.data.length)
};
D.prototype.write = function(t) {
    let i, o, r;
    for (i = 0; i + 3 <= this.data.length; i += 3) o = this.data.substr(i, 3), r = parseInt(o, 10), t.put(r, 10);
    const n = this.data.length - i;
    n > 0 && (o = this.data.substr(i), r = parseInt(o, 10), t.put(r, n * 3 + 1))
};
var Jt = D;
const Yt = L,
    W = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "$", "%", "*", "+", "-", ".", "/", ":"];

function _(e) {
    this.mode = Yt.ALPHANUMERIC, this.data = e
}
_.getBitsLength = function(t) {
    return 11 * Math.floor(t / 2) + 6 * (t % 2)
};
_.prototype.getLength = function() {
    return this.data.length
};
_.prototype.getBitsLength = function() {
    return _.getBitsLength(this.data.length)
};
_.prototype.write = function(t) {
    let i;
    for (i = 0; i + 2 <= this.data.length; i += 2) {
        let o = W.indexOf(this.data[i]) * 45;
        o += W.indexOf(this.data[i + 1]), t.put(o, 11)
    }
    this.data.length % 2 && t.put(W.indexOf(this.data[i]), 6)
};
var Ot = _,
    $t = function(t) {
        for (var i = [], o = t.length, r = 0; r < o; r++) {
            var n = t.charCodeAt(r);
            if (n >= 55296 && n <= 56319 && o > r + 1) {
                var s = t.charCodeAt(r + 1);
                s >= 56320 && s <= 57343 && (n = (n - 55296) * 1024 + s - 56320 + 65536, r += 1)
            }
            if (n < 128) {
                i.push(n);
                continue
            }
            if (n < 2048) {
                i.push(n >> 6 | 192), i.push(n & 63 | 128);
                continue
            }
            if (n < 55296 || n >= 57344 && n < 65536) {
                i.push(n >> 12 | 224), i.push(n >> 6 & 63 | 128), i.push(n & 63 | 128);
                continue
            }
            if (n >= 65536 && n <= 1114111) {
                i.push(n >> 18 | 240), i.push(n >> 12 & 63 | 128), i.push(n >> 6 & 63 | 128), i.push(n & 63 | 128);
                continue
            }
            i.push(239, 191, 189)
        }
        return new Uint8Array(i).buffer
    };
const jt = $t,
    Gt = L;

function U(e) {
    this.mode = Gt.BYTE, typeof e == "string" && (e = jt(e)), this.data = new Uint8Array(e)
}
U.getBitsLength = function(t) {
    return t * 8
};
U.prototype.getLength = function() {
    return this.data.length
};
U.prototype.getBitsLength = function() {
    return U.getBitsLength(this.data.length)
};
U.prototype.write = function(e) {
    for (let t = 0, i = this.data.length; t < i; t++) e.put(this.data[t], 8)
};
var Qt = U;
const qt = L,
    Wt = T;

function F(e) {
    this.mode = qt.KANJI, this.data = e
}
F.getBitsLength = function(t) {
    return t * 13
};
F.prototype.getLength = function() {
    return this.data.length
};
F.prototype.getBitsLength = function() {
    return F.getBitsLength(this.data.length)
};
F.prototype.write = function(e) {
    let t;
    for (t = 0; t < this.data.length; t++) {
        let i = Wt.toSJIS(this.data[t]);
        if (i >= 33088 && i <= 40956) i -= 33088;
        else if (i >= 57408 && i <= 60351) i -= 49472;
        else throw new Error("Invalid SJIS character: " + this.data[t] + `
Make sure your charset is UTF-8`);
        i = (i >>> 8 & 255) * 192 + (i & 255), e.put(i, 13)
    }
};
var Zt = F,
    Nt = {
        exports: {}
    };
(function(e) {
    var t = {
        single_source_shortest_paths: function(i, o, r) {
            var n = {},
                s = {};
            s[o] = 0;
            var c = t.PriorityQueue.make();
            c.push(o, 0);
            for (var u, a, l, B, w, f, m, y, I; !c.empty();) {
                u = c.pop(), a = u.value, B = u.cost, w = i[a] || {};
                for (l in w) w.hasOwnProperty(l) && (f = w[l], m = B + f, y = s[l], I = typeof s[l] == "undefined", (I || y > m) && (s[l] = m, c.push(l, m), n[l] = a))
            }
            if (typeof r != "undefined" && typeof s[r] == "undefined") {
                var h = ["Could not find a path from ", o, " to ", r, "."].join("");
                throw new Error(h)
            }
            return n
        },
        extract_shortest_path_from_predecessor_list: function(i, o) {
            for (var r = [], n = o; n;) r.push(n), i[n], n = i[n];
            return r.reverse(), r
        },
        find_path: function(i, o, r) {
            var n = t.single_source_shortest_paths(i, o, r);
            return t.extract_shortest_path_from_predecessor_list(n, r)
        },
        PriorityQueue: {
            make: function(i) {
                var o = t.PriorityQueue,
                    r = {},
                    n;
                i = i || {};
                for (n in o) o.hasOwnProperty(n) && (r[n] = o[n]);
                return r.queue = [], r.sorter = i.sorter || o.default_sorter, r
            },
            default_sorter: function(i, o) {
                return i.cost - o.cost
            },
            push: function(i, o) {
                var r = {
                    value: i,
                    cost: o
                };
                this.queue.push(r), this.queue.sort(this.sorter)
            },
            pop: function() {
                return this.queue.shift()
            },
            empty: function() {
                return this.queue.length === 0
            }
        }
    };
    e.exports = t
})(Nt);
var Xt = Nt.exports;
(function(e) {
    const t = L,
        i = Jt,
        o = Ot,
        r = Qt,
        n = Zt,
        s = M,
        c = T,
        u = Xt;

    function a(h) {
        return unescape(encodeURIComponent(h)).length
    }

    function l(h, E, g) {
        const d = [];
        let C;
        for (;
            (C = h.exec(g)) !== null;) d.push({
            data: C[0],
            index: C.index,
            mode: E,
            length: C[0].length
        });
        return d
    }

    function B(h) {
        const E = l(s.NUMERIC, t.NUMERIC, h),
            g = l(s.ALPHANUMERIC, t.ALPHANUMERIC, h);
        let d, C;
        return c.isKanjiModeEnabled() ? (d = l(s.BYTE, t.BYTE, h), C = l(s.KANJI, t.KANJI, h)) : (d = l(s.BYTE_KANJI, t.BYTE, h), C = []), E.concat(g, d, C).sort(function(A, N) {
            return A.index - N.index
        }).map(function(A) {
            return {
                data: A.data,
                mode: A.mode,
                length: A.length
            }
        })
    }

    function w(h, E) {
        switch (E) {
            case t.NUMERIC:
                return i.getBitsLength(h);
            case t.ALPHANUMERIC:
                return o.getBitsLength(h);
            case t.KANJI:
                return n.getBitsLength(h);
            case t.BYTE:
                return r.getBitsLength(h)
        }
    }

    function f(h) {
        return h.reduce(function(E, g) {
            const d = E.length - 1 >= 0 ? E[E.length - 1] : null;
            return d && d.mode === g.mode ? (E[E.length - 1].data += g.data, E) : (E.push(g), E)
        }, [])
    }

    function m(h) {
        const E = [];
        for (let g = 0; g < h.length; g++) {
            const d = h[g];
            switch (d.mode) {
                case t.NUMERIC:
                    E.push([d, {
                        data: d.data,
                        mode: t.ALPHANUMERIC,
                        length: d.length
                    }, {
                        data: d.data,
                        mode: t.BYTE,
                        length: d.length
                    }]);
                    break;
                case t.ALPHANUMERIC:
                    E.push([d, {
                        data: d.data,
                        mode: t.BYTE,
                        length: d.length
                    }]);
                    break;
                case t.KANJI:
                    E.push([d, {
                        data: d.data,
                        mode: t.BYTE,
                        length: a(d.data)
                    }]);
                    break;
                case t.BYTE:
                    E.push([{
                        data: d.data,
                        mode: t.BYTE,
                        length: a(d.data)
                    }])
            }
        }
        return E
    }

    function y(h, E) {
        const g = {},
            d = {
                start: {}
            };
        let C = ["start"];
        for (let p = 0; p < h.length; p++) {
            const A = h[p],
                N = [];
            for (let S = 0; S < A.length; S++) {
                const b = A[S],
                    k = "" + p + S;
                N.push(k), g[k] = {
                    node: b,
                    lastCount: 0
                }, d[k] = {};
                for (let q = 0; q < C.length; q++) {
                    const P = C[q];
                    g[P] && g[P].node.mode === b.mode ? (d[P][k] = w(g[P].lastCount + b.length, b.mode) - w(g[P].lastCount, b.mode), g[P].lastCount += b.length) : (g[P] && (g[P].lastCount = b.length), d[P][k] = w(b.length, b.mode) + 4 + t.getCharCountIndicator(b.mode, E))
                }
            }
            C = N
        }
        for (let p = 0; p < C.length; p++) d[C[p]].end = 0;
        return {
            map: d,
            table: g
        }
    }

    function I(h, E) {
        let g;
        const d = t.getBestModeForData(h);
        if (g = t.from(E, d), g !== t.BYTE && g.bit < d.bit) throw new Error('"' + h + '" cannot be encoded with mode ' + t.toString(g) + `.
 Suggested mode is: ` + t.toString(d));
        switch (g === t.KANJI && !c.isKanjiModeEnabled() && (g = t.BYTE), g) {
            case t.NUMERIC:
                return new i(h);
            case t.ALPHANUMERIC:
                return new o(h);
            case t.KANJI:
                return new n(h);
            case t.BYTE:
                return new r(h)
        }
    }
    e.fromArray = function(E) {
        return E.reduce(function(g, d) {
            return typeof d == "string" ? g.push(I(d, null)) : d.data && g.push(I(d.data, d.mode)), g
        }, [])
    }, e.fromString = function(E, g) {
        const d = B(E, c.isKanjiModeEnabled()),
            C = m(d),
            p = y(C, g),
            A = u.find_path(p.map, "start", "end"),
            N = [];
        for (let S = 1; S < A.length - 1; S++) N.push(p.table[A[S]].node);
        return e.fromArray(f(N))
    }, e.rawSplit = function(E) {
        return e.fromArray(B(E, c.isKanjiModeEnabled()))
    }
})(Tt);
const Q = T,
    Z = $,
    xt = Lt,
    te = Dt,
    ee = wt,
    ne = mt,
    nt = yt,
    rt = j,
    re = Ut,
    Y = Bt,
    oe = At,
    ie = L,
    X = Tt;

function se(e, t) {
    const i = e.size,
        o = ne.getPositions(t);
    for (let r = 0; r < o.length; r++) {
        const n = o[r][0],
            s = o[r][1];
        for (let c = -1; c <= 7; c++)
            if (!(n + c <= -1 || i <= n + c))
                for (let u = -1; u <= 7; u++) s + u <= -1 || i <= s + u || (c >= 0 && c <= 6 && (u === 0 || u === 6) || u >= 0 && u <= 6 && (c === 0 || c === 6) || c >= 2 && c <= 4 && u >= 2 && u <= 4 ? e.set(n + c, s + u, !0, !0) : e.set(n + c, s + u, !1, !0))
    }
}

function ue(e) {
    const t = e.size;
    for (let i = 8; i < t - 8; i++) {
        const o = i % 2 === 0;
        e.set(i, 6, o, !0), e.set(6, i, o, !0)
    }
}

function ce(e, t) {
    const i = ee.getPositions(t);
    for (let o = 0; o < i.length; o++) {
        const r = i[o][0],
            n = i[o][1];
        for (let s = -2; s <= 2; s++)
            for (let c = -2; c <= 2; c++) s === -2 || s === 2 || c === -2 || c === 2 || s === 0 && c === 0 ? e.set(r + s, n + c, !0, !0) : e.set(r + s, n + c, !1, !0)
    }
}

function ae(e, t) {
    const i = e.size,
        o = Y.getEncodedBits(t);
    let r, n, s;
    for (let c = 0; c < 18; c++) r = Math.floor(c / 3), n = c % 3 + i - 8 - 3, s = (o >> c & 1) === 1, e.set(r, n, s, !0), e.set(n, r, s, !0)
}

function x(e, t, i) {
    const o = e.size,
        r = oe.getEncodedBits(t, i);
    let n, s;
    for (n = 0; n < 15; n++) s = (r >> n & 1) === 1, n < 6 ? e.set(n, 8, s, !0) : n < 8 ? e.set(n + 1, 8, s, !0) : e.set(o - 15 + n, 8, s, !0), n < 8 ? e.set(8, o - n - 1, s, !0) : n < 9 ? e.set(8, 15 - n - 1 + 1, s, !0) : e.set(8, 15 - n - 1, s, !0);
    e.set(o - 8, 8, 1, !0)
}

function le(e, t) {
    const i = e.size;
    let o = -1,
        r = i - 1,
        n = 7,
        s = 0;
    for (let c = i - 1; c > 0; c -= 2)
        for (c === 6 && c--;;) {
            for (let u = 0; u < 2; u++)
                if (!e.isReserved(r, c - u)) {
                    let a = !1;
                    s < t.length && (a = (t[s] >>> n & 1) === 1), e.set(r, c - u, a), n--, n === -1 && (s++, n = 7)
                }
            if (r += o, r < 0 || i <= r) {
                r -= o, o = -o;
                break
            }
        }
}

function fe(e, t, i) {
    const o = new xt;
    i.forEach(function(u) {
        o.put(u.mode.bit, 4), o.put(u.getLength(), ie.getCharCountIndicator(u.mode, e)), u.write(o)
    });
    const r = Q.getSymbolTotalCodewords(e),
        n = rt.getTotalCodewordsCount(e, t),
        s = (r - n) * 8;
    for (o.getLengthInBits() + 4 <= s && o.put(0, 4); o.getLengthInBits() % 8 !== 0;) o.putBit(0);
    const c = (s - o.getLengthInBits()) / 8;
    for (let u = 0; u < c; u++) o.put(u % 2 ? 17 : 236, 8);
    return de(o, e, t)
}

function de(e, t, i) {
    const o = Q.getSymbolTotalCodewords(t),
        r = rt.getTotalCodewordsCount(t, i),
        n = o - r,
        s = rt.getBlocksCount(t, i),
        c = o % s,
        u = s - c,
        a = Math.floor(o / s),
        l = Math.floor(n / s),
        B = l + 1,
        w = a - l,
        f = new re(w);
    let m = 0;
    const y = new Array(s),
        I = new Array(s);
    let h = 0;
    const E = new Uint8Array(e.buffer);
    for (let A = 0; A < s; A++) {
        const N = A < u ? l : B;
        y[A] = E.slice(m, m + N), I[A] = f.encode(y[A]), m += N, h = Math.max(h, N)
    }
    const g = new Uint8Array(o);
    let d = 0,
        C, p;
    for (C = 0; C < h; C++)
        for (p = 0; p < s; p++) C < y[p].length && (g[d++] = y[p][C]);
    for (C = 0; C < w; C++)
        for (p = 0; p < s; p++) g[d++] = I[p][C];
    return g
}

function ge(e, t, i, o) {
    let r;
    if (Array.isArray(e)) r = X.fromArray(e);
    else if (typeof e == "string") {
        let a = t;
        if (!a) {
            const l = X.rawSplit(e);
            a = Y.getBestVersionForData(l, i)
        }
        r = X.fromString(e, a || 40)
    } else throw new Error("Invalid data");
    const n = Y.getBestVersionForData(r, i);
    if (!n) throw new Error("The amount of data is too big to be stored in a QR Code");
    if (!t) t = n;
    else if (t < n) throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: ` + n + `.
`);
    const s = fe(t, i, r),
        c = Q.getSymbolSize(t),
        u = new te(c);
    return se(u, t), ue(u), ce(u, t), x(u, i, 0), t >= 7 && ae(u, t), le(u, s), isNaN(o) && (o = nt.getBestMask(u, x.bind(null, u, i))), nt.applyMask(o, u), x(u, i, o), {
        modules: u,
        version: t,
        errorCorrectionLevel: i,
        maskPattern: o,
        segments: r
    }
}
gt.create = function(t, i) {
    if (typeof t == "undefined" || t === "") throw new Error("No input text");
    let o = Z.M,
        r, n;
    return typeof i != "undefined" && (o = Z.from(i.errorCorrectionLevel, Z.M), r = Y.from(i.version), n = nt.from(i.maskPattern), i.toSJISFunc && Q.setToSJISFunction(i.toSJISFunc)), ge(t, r, o, n)
};
var bt = {},
    ct = {};
(function(e) {
    function t(i) {
        if (typeof i == "number" && (i = i.toString()), typeof i != "string") throw new Error("Color should be defined as hex string");
        let o = i.slice().replace("#", "").split("");
        if (o.length < 3 || o.length === 5 || o.length > 8) throw new Error("Invalid hex color: " + i);
        (o.length === 3 || o.length === 4) && (o = Array.prototype.concat.apply([], o.map(function(n) {
            return [n, n]
        }))), o.length === 6 && o.push("F", "F");
        const r = parseInt(o.join(""), 16);
        return {
            r: r >> 24 & 255,
            g: r >> 16 & 255,
            b: r >> 8 & 255,
            a: r & 255,
            hex: "#" + o.slice(0, 6).join("")
        }
    }
    e.getOptions = function(o) {
        o || (o = {}), o.color || (o.color = {});
        const r = typeof o.margin == "undefined" || o.margin === null || o.margin < 0 ? 4 : o.margin,
            n = o.width && o.width >= 21 ? o.width : void 0,
            s = o.scale || 4;
        return {
            width: n,
            scale: n ? 4 : s,
            margin: r,
            color: {
                dark: t(o.color.dark || "#000000ff"),
                light: t(o.color.light || "#ffffffff")
            },
            type: o.type,
            rendererOpts: o.rendererOpts || {}
        }
    }, e.getScale = function(o, r) {
        return r.width && r.width >= o + r.margin * 2 ? r.width / (o + r.margin * 2) : r.scale
    }, e.getImageWidth = function(o, r) {
        const n = e.getScale(o, r);
        return Math.floor((o + r.margin * 2) * n)
    }, e.qrToImageData = function(o, r, n) {
        const s = r.modules.size,
            c = r.modules.data,
            u = e.getScale(s, n),
            a = Math.floor((s + n.margin * 2) * u),
            l = n.margin * u,
            B = [n.color.light, n.color.dark];
        for (let w = 0; w < a; w++)
            for (let f = 0; f < a; f++) {
                let m = (w * a + f) * 4,
                    y = n.color.light;
                if (w >= l && f >= l && w < a - l && f < a - l) {
                    const I = Math.floor((w - l) / u),
                        h = Math.floor((f - l) / u);
                    y = B[c[I * s + h] ? 1 : 0]
                }
                o[m++] = y.r, o[m++] = y.g, o[m++] = y.b, o[m] = y.a
            }
    }
})(ct);
(function(e) {
    const t = ct;

    function i(r, n, s) {
        r.clearRect(0, 0, n.width, n.height), n.style || (n.style = {}), n.height = s, n.width = s, n.style.height = s + "px", n.style.width = s + "px"
    }

    function o() {
        try {
            return document.createElement("canvas")
        } catch (r) {
            throw new Error("You need to specify a canvas element")
        }
    }
    e.render = function(n, s, c) {
        let u = c,
            a = s;
        typeof u == "undefined" && (!s || !s.getContext) && (u = s, s = void 0), s || (a = o()), u = t.getOptions(u);
        const l = t.getImageWidth(n.modules.size, u),
            B = a.getContext("2d"),
            w = B.createImageData(l, l);
        return t.qrToImageData(w.data, n, u), i(B, a, l), B.putImageData(w, 0, 0), a
    }, e.renderToDataURL = function(n, s, c) {
        let u = c;
        typeof u == "undefined" && (!s || !s.getContext) && (u = s, s = void 0), u || (u = {});
        const a = e.render(n, s, u),
            l = u.type || "image/png",
            B = u.rendererOpts || {};
        return a.toDataURL(l, B.quality)
    }
})(bt);
var Mt = {};
const he = ct;

function dt(e, t) {
    const i = e.a / 255,
        o = t + '="' + e.hex + '"';
    return i < 1 ? o + " " + t + '-opacity="' + i.toFixed(2).slice(1) + '"' : o
}

function tt(e, t, i) {
    let o = e + t;
    return typeof i != "undefined" && (o += " " + i), o
}

function we(e, t, i) {
    let o = "",
        r = 0,
        n = !1,
        s = 0;
    for (let c = 0; c < e.length; c++) {
        const u = Math.floor(c % t),
            a = Math.floor(c / t);
        !u && !n && (n = !0), e[c] ? (s++, c > 0 && u > 0 && e[c - 1] || (o += n ? tt("M", u + i, .5 + a + i) : tt("m", r, 0), r = 0, n = !1), u + 1 < t && e[c + 1] || (o += tt("h", s), s = 0)) : r++
    }
    return o
}
Mt.render = function(t, i, o) {
    const r = he.getOptions(i),
        n = t.modules.size,
        s = t.modules.data,
        c = n + r.margin * 2,
        u = r.color.light.a ? "<path " + dt(r.color.light, "fill") + ' d="M0 0h' + c + "v" + c + 'H0z"/>' : "",
        a = "<path " + dt(r.color.dark, "stroke") + ' d="' + we(s, n, r.margin) + '"/>',
        l = 'viewBox="0 0 ' + c + " " + c + '"',
        w = '<svg xmlns="http://www.w3.org/2000/svg" ' + (r.width ? 'width="' + r.width + '" height="' + r.width + '" ' : "") + l + ' shape-rendering="crispEdges">' + u + a + `</svg>
`;
    return typeof o == "function" && o(null, w), w
};
const me = St,
    ot = gt,
    Pt = bt,
    ye = Mt;

function at(e, t, i, o, r) {
    const n = [].slice.call(arguments, 1),
        s = n.length,
        c = typeof n[s - 1] == "function";
    if (!c && !me()) throw new Error("Callback required as last argument");
    if (c) {
        if (s < 2) throw new Error("Too few arguments provided");
        s === 2 ? (r = i, i = t, t = o = void 0) : s === 3 && (t.getContext && typeof r == "undefined" ? (r = o, o = void 0) : (r = o, o = i, i = t, t = void 0))
    } else {
        if (s < 1) throw new Error("Too few arguments provided");
        return s === 1 ? (i = t, t = o = void 0) : s === 2 && !t.getContext && (o = i, i = t, t = void 0), new Promise(function(u, a) {
            try {
                const l = ot.create(i, o);
                u(e(l, t, o))
            } catch (l) {
                a(l)
            }
        })
    }
    try {
        const u = ot.create(i, o);
        r(null, e(u, t, o))
    } catch (u) {
        r(u)
    }
}
O.create = ot.create;
O.toCanvas = at.bind(null, Pt.render);
O.toDataURL = at.bind(null, Pt.renderToDataURL);
O.toString = at.bind(null, function(e, t, i) {
    return ye.render(e, i)
});
export {
    O as b
};