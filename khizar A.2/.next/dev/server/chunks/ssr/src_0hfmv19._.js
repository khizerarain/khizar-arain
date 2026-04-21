module.exports = [
"[project]/src/components/KhizarArain.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AnalogueAgency
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lenis$2f$dist$2f$lenis$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lenis/dist/lenis.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
function Modal({ open, title, onClose, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: open ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "aa-modalOverlay",
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            exit: {
                opacity: 0
            },
            transition: {
                duration: 0.2
            },
            onMouseDown: (e)=>{
                if (e.target === e.currentTarget) onClose();
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "aa-modal",
                initial: {
                    y: 24,
                    opacity: 0,
                    scale: 0.99
                },
                animate: {
                    y: 0,
                    opacity: 1,
                    scale: 1
                },
                exit: {
                    y: 16,
                    opacity: 0,
                    scale: 0.99
                },
                transition: {
                    duration: 0.28,
                    ease: "easeOut"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "aa-modalHeader",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "aa-modalTitle",
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/src/components/KhizarArain.tsx",
                                lineNumber: 40,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "aa-closeBtn",
                                onClick: onClose,
                                "aria-label": "Close modal",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/src/components/KhizarArain.tsx",
                                lineNumber: 41,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/KhizarArain.tsx",
                        lineNumber: 39,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "aa-modalBody",
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/src/components/KhizarArain.tsx",
                        lineNumber: 45,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/KhizarArain.tsx",
                lineNumber: 32,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/KhizarArain.tsx",
            lineNumber: 22,
            columnNumber: 9
        }, this) : null
    }, void 0, false, {
        fileName: "[project]/src/components/KhizarArain.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
function usePrefersReducedMotion() {
    const [reduced, setReduced] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const mq = window.matchMedia?.("(prefers-reduced-motion: reduce)");
        const update = ()=>setReduced(!!mq?.matches);
        update();
        if (!mq) return;
        mq.addEventListener?.("change", update);
        return ()=>mq.removeEventListener?.("change", update);
    }, []);
    return reduced;
}
function splitToLetters(text) {
    // Keep spaces as non-breaking spaces so letter stagger feels cinematic.
    return Array.from(text).map((ch)=>ch === " " ? "\u00A0" : ch);
}
function HeroTitle({ line, className, staggerDelaySecPerLetter }) {
    const letters = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>splitToLetters(line), [
        line
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: className ?? "",
        children: letters.map((ch, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
                className: "aa-heroLetter",
                initial: {
                    opacity: 0,
                    y: 26,
                    scale: 0.8
                },
                animate: {
                    opacity: 1,
                    y: 0,
                    scale: 1
                },
                transition: {
                    duration: 0.75,
                    ease: [
                        0.22,
                        1,
                        0.36,
                        1
                    ],
                    delay: idx * staggerDelaySecPerLetter
                },
                children: ch
            }, `${ch}-${idx}`, false, {
                fileName: "[project]/src/components/KhizarArain.tsx",
                lineNumber: 84,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/KhizarArain.tsx",
        lineNumber: 82,
        columnNumber: 5
    }, this);
}
function CursorButton({ label, onClick, variant }) {
    const v = variant ?? "primary";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
        className: `aa-btn ${v === "ghost" ? "aa-btnGhost" : "aa-btnPrimary"}`,
        onClick: onClick,
        whileHover: {
            scale: 1.05,
            letterSpacing: "0.04em",
            boxShadow: "0 0 0 1px rgba(255,255,255,0.4), 0 0 28px rgba(255,255,255,0.14)"
        },
        transition: {
            type: "spring",
            stiffness: 320,
            damping: 20
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "aa-btnText",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/KhizarArain.tsx",
                lineNumber: 119,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "aa-btnSheen",
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/src/components/KhizarArain.tsx",
                lineNumber: 120,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/KhizarArain.tsx",
        lineNumber: 109,
        columnNumber: 5
    }, this);
}
function UnderlineNavLink({ label, href, onClick }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        className: "aa-navLink",
        href: href ?? "#",
        onClick: (e)=>{
            if (!href) e.preventDefault();
            onClick?.();
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "aa-navLinkText",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/KhizarArain.tsx",
                lineNumber: 135,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "aa-navUnderline",
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/src/components/KhizarArain.tsx",
                lineNumber: 136,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/KhizarArain.tsx",
        lineNumber: 127,
        columnNumber: 5
    }, this);
}
function SectionReveal({ children, className, idx }) {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const el = ref.current;
        if (!el) return;
        const st = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].create({
            trigger: el,
            start: "top 80%",
            end: "top 60%",
            scrub: true,
            onUpdate: (self)=>{
                const p = self.progress;
                // Ease in a bit; stays subtle and premium.
                const eased = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].utils.interpolate(0, 1, Math.min(1, Math.max(0, (p - 0.05) / 0.95)));
                el.style.opacity = String(0 + eased);
                el.style.transform = `translate3d(0, ${50 * (1 - eased)}px, 0)`;
            }
        });
        return ()=>{
            st.kill();
        };
    }, [
        idx
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: className ?? "",
        style: {
            opacity: 0,
            transform: "translate3d(0,50px,0)"
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/KhizarArain.tsx",
        lineNumber: 163,
        columnNumber: 5
    }, this);
}
function ParallaxBox({ className, speed, strength = 56 }) {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const el = ref.current;
        if (!el) return;
        const parent = el.closest("[data-aa-section]");
        if (!parent) return;
        const st = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].create({
            trigger: parent,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
            onUpdate: (self)=>{
                const y = (self.progress - 0.5) * 2 * strength * speed;
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(el, {
                    y
                });
            }
        });
        return ()=>{
            st.kill();
        };
    }, [
        speed,
        strength
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: className
    }, void 0, false, {
        fileName: "[project]/src/components/KhizarArain.tsx",
        lineNumber: 198,
        columnNumber: 10
    }, this);
}
function AnalogueAgency() {
    const prefersReducedMotion = usePrefersReducedMotion();
    const rootRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [modalOpen, setModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [learnMoreOpen, setLearnMoreOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [aboutMeOpen, setAboutMeOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const heroLineTightened = "0.08em";
    const heroLineWide = "0.5em";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const root = rootRef.current;
        if (!root) return;
        if (prefersReducedMotion) return;
        const heroLines = root.querySelectorAll("[data-aa-heroline]");
        const bg1 = root.querySelector("[data-aa-bg1]");
        const bg2 = root.querySelector("[data-aa-bg2]");
        // Hero letter-spacing scrub.
        if (heroLines.length) {
            heroLines.forEach((hero)=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(hero, {
                    letterSpacing: heroLineWide
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(hero, {
                    letterSpacing: heroLineTightened,
                    ease: "none",
                    scrollTrigger: {
                        trigger: root.querySelector("[data-aa-hero]"),
                        start: "top top",
                        end: "bottom top",
                        scrub: true
                    }
                });
            });
        }
        // Very subtle geometric/noise parallax.
        const triggers = [
            bg1,
            bg2
        ].filter(Boolean);
        if (triggers.length) {
            triggers.forEach((el, i)=>{
                const factor = i === 0 ? 12 : 22;
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(el, {
                    y: -factor,
                    ease: "none",
                    scrollTrigger: {
                        trigger: root.querySelector("[data-aa-hero]"),
                        start: "top top",
                        end: "bottom top",
                        scrub: true
                    }
                });
            });
        }
    }, [
        prefersReducedMotion
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const root = rootRef.current;
        if (!root) return;
        if (prefersReducedMotion) return;
        const media = root.querySelector("[data-aa-casemedia]");
        if (!media) return;
        const st = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(media, {
            scale: 1
        }, {
            scale: 1.04,
            ease: "none",
            scrollTrigger: {
                trigger: media,
                start: "top 85%",
                end: "bottom 25%",
                scrub: true
            }
        });
        return ()=>{
            st.kill();
        };
    }, [
        prefersReducedMotion
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const root = rootRef.current;
        if (!root) return;
        // Clean up ScrollTrigger on unmount (helps when pasting into editor hot reload).
        return ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getAll().forEach((t)=>t.kill());
        };
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const root = rootRef.current;
        if (!root) return;
        if (prefersReducedMotion) return;
        // Horizontal gallery: map vertical scroll to horizontal translate.
        const gallery = root.querySelector("[data-aa-gallery]");
        const galleryTrack = root.querySelector("[data-aa-gallerytrack]");
        if (!gallery || !galleryTrack) return;
        const pinSpacer = gallery;
        const st = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].create({
            trigger: gallery,
            start: "top top",
            end: ()=>`+=${Math.max(0, galleryTrack.scrollWidth - gallery.clientWidth + 1)}px`,
            scrub: true,
            pin: pinSpacer,
            anticipatePin: 1,
            onUpdate: (self)=>{
                const maxX = galleryTrack.scrollWidth - gallery.clientWidth;
                const x = maxX * self.progress;
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(galleryTrack, {
                    x: -x
                });
            }
        });
        return ()=>{
            st.kill();
        };
    }, [
        prefersReducedMotion
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const root = rootRef.current;
        if (!root) return;
        if (prefersReducedMotion) {
            // Keep minimal smoothness on reduced motion.
            return;
        }
        // Lenis smooth scroll (but still allow ScrollTrigger to drive animations).
        const lenis = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lenis$2f$dist$2f$lenis$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]({
            duration: 1.1,
            smoothWheel: true,
            lerp: 0.08,
            wheelMultiplier: 1
        });
        let rafId = 0;
        const raf = (time)=>{
            lenis.raf(time);
            rafId = requestAnimationFrame(raf);
        };
        rafId = requestAnimationFrame(raf);
        lenis.on("scroll", ()=>{
            // Keep ScrollTrigger in sync with Lenis.
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].update();
        });
        return ()=>{
            cancelAnimationFrame(rafId);
            lenis.destroy();
        };
    }, [
        prefersReducedMotion
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const root = rootRef.current;
        if (!root) return;
        if (prefersReducedMotion) return;
        // Final CTA brief pin near the bottom.
        const cta = root.querySelector("[data-aa-ctapin]");
        if (!cta) return;
        const st = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].create({
            trigger: cta,
            start: "top 85%",
            end: "+=260",
            scrub: true,
            pin: true,
            anticipatePin: 1,
            onEnter: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(cta, {
                    opacity: 1
                })
        });
        return ()=>{
            st.kill();
        };
    }, [
        prefersReducedMotion
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const root = rootRef.current;
        if (!root) return;
        if (prefersReducedMotion) return;
        // "Scroll indicator fades after 3 seconds".
        const indicator = root.querySelector("[data-aa-scrollindicator]");
        if (!indicator) return;
        const to = window.setTimeout(()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(indicator, {
                opacity: 0,
                duration: 0.45,
                ease: "power2.out"
            });
        }, 3000);
        return ()=>window.clearTimeout(to);
    }, [
        prefersReducedMotion
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const root = rootRef.current;
        if (!root) return;
        if (prefersReducedMotion) return;
        // Header blur/transparency on scroll.
        const header = root.querySelector("[data-aa-header]");
        if (!header) return;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(header, {
            backgroundColor: "rgba(0,0,0,0.6)",
            backdropFilter: "blur(10px)",
            ease: "none",
            scrollTrigger: {
                trigger: root,
                start: "top top",
                end: "+=160",
                scrub: true
            }
        });
    }, [
        prefersReducedMotion
    ]);
    // Drag-to-scroll gallery feel (in addition to ScrollTrigger scrub).
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const root = rootRef.current;
        if (!root) return;
        const galleryViewport = root.querySelector("[data-aa-galleryviewport]");
        const galleryTrack = root.querySelector("[data-aa-gallerytrack]");
        if (!galleryViewport || !galleryTrack) return;
        let isDown = false;
        let startX = 0;
        let startLeft = 0;
        const onPointerDown = (e)=>{
            isDown = true;
            startX = e.clientX;
            startLeft = galleryTrack.offsetLeft;
            e.target?.setPointerCapture?.(e.pointerId);
            galleryViewport.style.cursor = "grabbing";
        };
        const onPointerUp = ()=>{
            isDown = false;
            galleryViewport.style.cursor = "grab";
        };
        const onPointerMove = (e)=>{
            if (!isDown) return;
            const dx = e.clientX - startX;
            // Because GSAP drives x translate, we only provide a little "feel" drag by adjusting container scroll-like offset.
            // This is intentionally subtle so ScrollTrigger remains authoritative.
            const maxX = Math.max(0, galleryTrack.scrollWidth - galleryViewport.clientWidth);
            const currentX = Number(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].getProperty(galleryTrack, "x"));
            const currentOffset = -currentX; // we store horizontal offset as positive
            const nextOffset = Math.min(maxX, Math.max(0, currentOffset - dx));
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(galleryTrack, {
                x: -nextOffset
            });
        };
        galleryViewport.style.cursor = "grab";
        galleryViewport.addEventListener("pointerdown", onPointerDown);
        window.addEventListener("pointerup", onPointerUp);
        window.addEventListener("pointermove", onPointerMove);
        return ()=>{
            galleryViewport.removeEventListener("pointerdown", onPointerDown);
            window.removeEventListener("pointerup", onPointerUp);
            window.removeEventListener("pointermove", onPointerMove);
        };
    }, []);
    const heroSubtitle = "Whether it’s a product or a service, people choose with their hearts, not just their heads. We create the world your product lives in.";
    const styles = `
    :root{
      --bg:#000000;
      --fg:#FFFFFF;
      --muted: rgba(255,255,255,0.72);
    }
    .aa-root{
      min-height: 100vh;
      background: var(--bg);
      color: var(--fg);
      font-family: ui-sans-serif, system-ui, -apple-system, "Neue Haas Grotesk", "Helvetica Neue", Arial, sans-serif;
      overflow-x: hidden;
    }
    .aa-header{
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 50;
      padding: 22px 28px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      transition: background-color 0.2s ease, backdrop-filter 0.2s ease;
      background: rgba(0,0,0,0.02);
      backdrop-filter: blur(0px);
    }
    .aa-brand{
      font-weight: 800;
      letter-spacing: 0.01em;
      font-size: 22px;
      line-height: 1;
      user-select: none;
    }
    .aa-nav{
      display: flex;
      gap: 28px;
      align-items: center;
    }
    .aa-navLink{
      position: relative;
      display: inline-flex;
      align-items: center;
      color: var(--fg);
      text-decoration: none;
      font-weight: 600;
      letter-spacing: 0.01em;
      padding: 8px 0;
      cursor: pointer;
    }
    .aa-navLinkText{
      transition: letter-spacing 220ms ease;
    }
    .aa-navLink:hover .aa-navLinkText{
      letter-spacing: 0.06em;
    }
    .aa-navUnderline{
      position: absolute;
      left: 0;
      right: 0;
      bottom: 4px;
      height: 1px;
      background: var(--fg);
      transform-origin: left;
      transform: scaleX(0);
      transition: transform 260ms ease;
    }
    .aa-navLink:hover .aa-navUnderline{
      transform: scaleX(1);
    }

    .aa-section{
      position: relative;
      padding: 90px 28px;
    }

    [data-aa-hero]{
      padding-top: 110px;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      position: relative;
      overflow: hidden;
    }
    .aa-heroBg{
      position:absolute;
      inset:0;
      pointer-events:none;
      opacity: 0.45;
      filter: contrast(105%) brightness(103%);
    }
    .aa-heroBgLayer{
      position:absolute;
      inset:-20%;
      background-image:
        radial-gradient(circle at 20% 30%, rgba(255,255,255,0.08), rgba(255,255,255,0) 55%),
        radial-gradient(circle at 80% 65%, rgba(255,255,255,0.06), rgba(255,255,255,0) 60%),
        linear-gradient(90deg, rgba(255,255,255,0.04), rgba(255,255,255,0));
      transform: translate3d(0,0,0);
      mix-blend-mode: screen;
    }
    .aa-heroBgLayer:nth-child(2){
      opacity:0.55;
      background-image:
        repeating-linear-gradient(120deg, rgba(255,255,255,0.05), rgba(255,255,255,0) 8px),
        repeating-linear-gradient(35deg, rgba(255,255,255,0.03), rgba(255,255,255,0) 10px);
      filter: blur(0.2px);
    }

    .aa-heroTitleWrap{
      position: relative;
      z-index: 2;
    }
    .aa-heroTitle{
      font-weight: 900;
      font-size: clamp(44px, 7.2vw, 96px);
      letter-spacing: 0.5em;
      line-height: 0.98;
      margin: 0;
      text-transform: none;
      user-select: none;
      white-space: nowrap;
    }
    .aa-heroLetter{
      display: inline-block;
      will-change: transform;
    }
    .aa-heroSubtitle{
      margin-top: 26px;
      font-size: clamp(14px, 1.7vw, 18px);
      max-width: 860px;
      color: var(--muted);
      line-height: 1.55;
      z-index: 2;
      letter-spacing: 0.01em;
    }
    .aa-scrollIndicator{
      position:absolute;
      bottom: 22px;
      left: 50%;
      transform: translateX(-50%);
      font-size: 12px;
      font-weight: 600;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      opacity: 1;
      z-index: 3;
    }

    .aa-btn{
      border: 1px solid rgba(255,255,255,0.75);
      background: rgba(0,0,0,0.2);
      color: var(--fg);
      padding: 14px 18px;
      border-radius: 999px;
      font-weight: 700;
      letter-spacing: 0.02em;
      cursor: pointer;
      position: relative;
      overflow: hidden;
    }
    .aa-btnText{
      display: inline-block;
      position: relative;
      z-index: 2;
    }
    .aa-btnSheen{
      content: "";
      position:absolute;
      inset: -60% -30%;
      background: linear-gradient(90deg, rgba(255,255,255,0), rgba(255,255,255,0.18), rgba(255,255,255,0));
      transform: translateX(-30%) rotate(12deg);
      opacity: 0;
      transition: opacity 240ms ease;
      z-index: 1;
      pointer-events:none;
    }
    .aa-btn:hover .aa-btnSheen{
      opacity: 1;
      animation: aa-sheen 900ms ease-out;
    }
    @keyframes aa-sheen{
      0%{ transform: translateX(-40%) rotate(12deg); }
      100%{ transform: translateX(40%) rotate(12deg); }
    }

    .aa-btnPrimary{
      box-shadow: 0 0 0 1px rgba(255,255,255,0.18) inset;
    }
    .aa-btnGhost{
      background: transparent;
      box-shadow: none;
    }

    .aa-grid2{
      display:grid;
      grid-template-columns: 1.1fr 1fr;
      gap: 24px;
      align-items: center;
    }
    .aa-kicker{
      color: rgba(255,255,255,0.74);
      font-size: 14px;
      letter-spacing: 0.02em;
      margin-bottom: 18px;
      font-weight: 600;
    }
    .aa-h2{
      font-size: clamp(28px, 4.2vw, 56px);
      font-weight: 900;
      margin: 0;
      letter-spacing: 0.01em;
      line-height: 1.03;
    }
    .aa-p{
      color: rgba(255,255,255,0.74);
      font-size: 16px;
      line-height: 1.6;
      max-width: 760px;
      margin-top: 16px;
    }
    .aa-row{
      display:flex;
      align-items: center;
      justify-content: space-between;
      gap: 22px;
      flex-wrap: wrap;
    }

    .aa-card{
      border: 1px solid rgba(255,255,255,0.12);
      border-radius: 18px;
      overflow:hidden;
      background: rgba(255,255,255,0.02);
    }

    .aa-media{
      height: 420px;
      border-radius: 18px;
      overflow: hidden;
      position: relative;
    }
    .aa-mediaLayer{
      position:absolute;
      inset:-18%;
      will-change: transform;
      background:
        radial-gradient(circle at 30% 30%, rgba(255,255,255,0.12), rgba(255,255,255,0) 58%),
        radial-gradient(circle at 80% 60%, rgba(255,255,255,0.08), rgba(255,255,255,0) 60%),
        linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01));
      opacity: 0.95;
      transform: translate3d(0,0,0);
    }
    .aa-layerA{ opacity: 0.92; }
    .aa-layerB{ opacity: 0.78; filter: blur(0.2px); }
    .aa-layerC{ opacity: 0.6; filter: blur(0.6px); }
    .aa-media::before{
      content:"";
      position:absolute;
      inset:-30%;
      background:
        radial-gradient(circle at 30% 30%, rgba(255,255,255,0.08), rgba(255,255,255,0) 60%),
        radial-gradient(circle at 70% 60%, rgba(255,255,255,0.06), rgba(255,255,255,0) 55%),
        linear-gradient(90deg, rgba(255,255,255,0.06), rgba(255,255,255,0));
      transform: translate3d(0,0,0);
      opacity: 0.9;
    }
    .aa-mediaOverlay{
      position:absolute;
      inset:0;
      background: radial-gradient(circle at 50% 20%, rgba(0,0,0,0), rgba(0,0,0,0.75) 68%, rgba(0,0,0,0.9) 100%);
    }
    .aa-sectionHeader{
      margin-bottom: 22px;
    }

    .aa-teamGrid{
      display:grid;
      grid-template-columns: repeat(5, minmax(0, 1fr));
      gap: 14px;
    }
    .aa-teamCard{
      border-radius: 16px;
      border: 1px solid rgba(255,255,255,0.12);
      overflow:hidden;
      background: rgba(255,255,255,0.02);
      position: relative;
      height: 320px;
      display:flex;
      flex-direction: column;
      justify-content:flex-end;
    }
    .aa-teamImg{
      position:absolute;
      inset:0;
      background: linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.01)),
        radial-gradient(circle at 30% 20%, rgba(255,255,255,0.08), rgba(255,255,255,0) 62%),
        radial-gradient(circle at 70% 70%, rgba(255,255,255,0.06), rgba(255,255,255,0) 58%),
        linear-gradient(90deg, rgba(255,255,255,0.03), rgba(255,255,255,0));
      transform: scale(1.02);
      transition: transform 340ms ease;
      will-change: transform;
    }
    .aa-teamImg img{
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      display: block;
    }
    .aa-teamCard:hover .aa-teamImg{
      transform: scale(1.1);
    }
    .aa-teamName{
      position: relative;
      z-index: 2;
      padding: 14px 14px 12px;
      background: linear-gradient(180deg, rgba(0,0,0,0), rgba(0,0,0,0.78) 30%, rgba(0,0,0,0.92) 100%);
      transform: translateY(14px);
      opacity: 0;
      transition: opacity 260ms ease, transform 260ms ease;
      font-weight: 800;
      letter-spacing: 0.02em;
    }
    .aa-teamCard:hover .aa-teamName{
      opacity: 1;
      transform: translateY(0);
    }

    .aa-contactGrid{
      display:grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 16px;
    }
    .aa-contactItem{
      border: 1px solid rgba(255,255,255,0.12);
      border-radius: 16px;
      padding: 20px;
      background: rgba(255,255,255,0.02);
      min-height: 130px;
    }
    .aa-icon{
      width: 26px;
      height: 26px;
      display:block;
      margin-bottom: 14px;
      opacity: 0.95;
    }
    .aa-contactLabel{
      font-weight: 900;
      letter-spacing: 0.02em;
      font-size: 15px;
      margin-bottom: 6px;
    }
    .aa-contactValue{
      color: rgba(255,255,255,0.74);
      line-height: 1.55;
      font-size: 14px;
    }

    .aa-servicesGrid{
      display:grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 16px;
    }
    .aa-serviceBlock{
      border: 1px solid rgba(255,255,255,0.12);
      border-radius: 18px;
      padding: 22px;
      background: rgba(255,255,255,0.02);
      transition: transform 220ms ease, box-shadow 220ms ease;
      min-height: 210px;
      display:flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .aa-serviceBlock:hover{
      transform: translateY(-20px);
      box-shadow: 0 0 0 1px rgba(255,255,255,0.18) inset, 0 0 32px rgba(255,255,255,0.08);
    }
    .aa-serviceTitle{
      font-size: 20px;
      font-weight: 900;
      letter-spacing: 0.01em;
    }
    .aa-serviceDesc{
      margin-top: 12px;
      color: rgba(255,255,255,0.74);
      line-height: 1.65;
      font-size: 14px;
    }

    .aa-workWrap{
      border-top: 1px solid rgba(255,255,255,0.08);
      border-bottom: 1px solid rgba(255,255,255,0.08);
    }
    .aa-gallery{
      position: relative;
      padding: 26px 0;
    }
    .aa-galleryViewport{
      width: 100%;
      overflow:hidden;
      cursor: grab;
    }
    .aa-galleryTrack{
      display:flex;
      gap: 16px;
      padding: 0 28px;
      will-change: transform;
    }
    .aa-workCard{
      width: min(420px, 72vw);
      height: 320px;
      border-radius: 18px;
      overflow:hidden;
      position: relative;
      border: 1px solid rgba(255,255,255,0.12);
      background: rgba(255,255,255,0.02);
      flex: 0 0 auto;
    }
    .aa-workImg{
      position:absolute;
      inset:0;
      background:
        radial-gradient(circle at 20% 30%, rgba(255,255,255,0.10), rgba(255,255,255,0) 58%),
        radial-gradient(circle at 80% 60%, rgba(255,255,255,0.08), rgba(255,255,255,0) 60%),
        linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01));
      transform: scale(1.02);
      transition: transform 280ms ease;
    }
    .aa-workCard:hover .aa-workImg{
      transform: scale(1.08);
    }
    .aa-workOverlay{
      position:absolute;
      inset:0;
      background: rgba(0,0,0,0.18);
      transition: background 280ms ease;
    }
    .aa-workCard:hover .aa-workOverlay{
      background: rgba(0,0,0,0.55);
    }
    .aa-workTitle{
      position:absolute;
      bottom: 16px;
      left: 16px;
      right: 16px;
      font-weight: 900;
      letter-spacing: 0.01em;
      font-size: 18px;
      display:flex;
      justify-content: space-between;
      align-items: baseline;
      gap: 14px;
      z-index: 2;
    }
    .aa-workTag{
      color: rgba(255,255,255,0.7);
      font-size: 12px;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      font-weight: 800;
    }

    .aa-aboutBig{
      font-size: clamp(18px, 2.4vw, 28px);
      line-height: 1.45;
      font-weight: 800;
      color: rgba(255,255,255,0.85);
      max-width: 980px;
      margin: 0 auto;
      letter-spacing: 0.01em;
    }

    .aa-cta{
      min-height: 60vh;
      padding-top: 120px;
      padding-bottom: 120px;
      display:flex;
      align-items: center;
      justify-content: center;
      text-align:center;
      border-top: 1px solid rgba(255,255,255,0.08);
    }
    .aa-ctaInner{
      display:flex;
      flex-direction: column;
      gap: 26px;
      align-items: center;
      justify-content:center;
    }
    .aa-ctaText{
      font-weight: 950;
      font-size: clamp(44px, 6vw, 96px);
      letter-spacing: 0.06em;
      line-height: 1;
      user-select: none;
    }

    .aa-modalOverlay{
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.75);
      display:flex;
      align-items:center;
      justify-content:center;
      z-index: 1000;
      padding: 20px;
    }
    .aa-modal{
      width: min(860px, 100%);
      border-radius: 18px;
      border: 1px solid rgba(255,255,255,0.14);
      background: rgba(0,0,0,0.72);
      backdrop-filter: blur(10px);
      box-shadow: 0 0 0 1px rgba(255,255,255,0.06) inset, 0 30px 80px rgba(0,0,0,0.7);
      overflow:hidden;
    }
    .aa-modalHeader{
      padding: 18px 18px 10px;
      display:flex;
      align-items:center;
      justify-content: space-between;
      gap: 12px;
      border-bottom: 1px solid rgba(255,255,255,0.10);
    }
    .aa-modalTitle{
      font-weight: 950;
      letter-spacing: 0.02em;
      font-size: 16px;
    }
    .aa-closeBtn{
      background: transparent;
      border: 1px solid rgba(255,255,255,0.18);
      color: rgba(255,255,255,0.92);
      padding: 10px 14px;
      border-radius: 999px;
      font-weight: 800;
      cursor: pointer;
    }
    .aa-modalBody{
      padding: 18px;
      color: rgba(255,255,255,0.74);
      line-height: 1.7;
      font-size: 14px;
    }

    footer{
      padding: 46px 28px 70px;
      border-top: 1px solid rgba(255,255,255,0.08);
      color: rgba(255,255,255,0.74);
    }
    .aa-footerRow{
      display:flex;
      justify-content: space-between;
      align-items:flex-start;
      gap: 20px;
      flex-wrap: wrap;
    }
    .aa-footerLinks{
      display:flex;
      gap: 22px;
      flex-wrap: wrap;
    }
    .aa-footerLink{
      color: rgba(255,255,255,0.78);
      text-decoration: none;
      font-weight: 700;
      letter-spacing: 0.01em;
      position: relative;
      padding-bottom: 6px;
    }
    .aa-footerLink::after{
      content:"";
      position:absolute;
      left:0;
      right:0;
      bottom:0;
      height:1px;
      background: rgba(255,255,255,0.9);
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 260ms ease;
    }
    .aa-footerLink:hover::after{
      transform: scaleX(1);
    }
    .aa-social{
      display:flex;
      gap: 14px;
      align-items:center;
    }
    .aa-social a{
      width: 36px;
      height: 36px;
      border-radius: 999px;
      border: 1px solid rgba(255,255,255,0.16);
      display:flex;
      align-items:center;
      justify-content:center;
      color: rgba(255,255,255,0.84);
      text-decoration:none;
      transition: transform 200ms ease, box-shadow 200ms ease;
    }
    .aa-social a:hover{
      transform: scale(1.05);
      box-shadow: 0 0 26px rgba(255,255,255,0.12);
    }

    /* Mobile: simplify motion and layout. */
    @media (max-width: 900px){
      .aa-header{ padding: 18px 18px; }
      .aa-teamGrid{ grid-template-columns: repeat(2, minmax(0, 1fr)); }
      .aa-grid2{ grid-template-columns: 1fr; }
      .aa-servicesGrid{ grid-template-columns: 1fr; }
      .aa-contactGrid{ grid-template-columns: 1fr; }
      .aa-workCard{ height: 280px; }
      [data-aa-hero]{ padding-top: 96px; }
      .aa-heroTitle{ white-space: normal; letter-spacing: 0.18em; }
      .aa-scrollIndicator{ display:none; }
    }
  `;
    const vitraAnnouncement = {
        heading: "Website of the Year",
        sub: "Our latest case for Vitra has won Framer Website of the Year"
    };
    const vitraNewCase = {
        heading: "New case",
        sub: "We’re proud to announce our latest case with Vitra: 100 years Panton"
    };
    const team = [
        {
            name: "khizar arain",
            tag: "Full-Stack Developer",
            image: "/khizar-self.png"
        }
    ];
    const work = [
        {
            name: "Vitra",
            tag: "Case"
        },
        {
            name: "Studio Atlas",
            tag: "Brand"
        },
        {
            name: "North & Co.",
            tag: "Digital"
        },
        {
            name: "Kinetic",
            tag: "E-comm"
        },
        {
            name: "Morrow",
            tag: "Touchpoints"
        },
        {
            name: "Cinder",
            tag: "Identity"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: rootRef,
        className: "aa-root",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: styles
            }, void 0, false, {
                fileName: "[project]/src/components/KhizarArain.tsx",
                lineNumber: 1110,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "aa-header",
                "data-aa-header": true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "aa-brand",
                        children: "khizar arain"
                    }, void 0, false, {
                        fileName: "[project]/src/components/KhizarArain.tsx",
                        lineNumber: 1113,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "aa-nav",
                        "aria-label": "Primary",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(UnderlineNavLink, {
                                label: "Work",
                                onClick: ()=>rootRef.current?.querySelector("[data-aa-work]")?.scrollIntoView({
                                        behavior: "smooth"
                                    })
                            }, void 0, false, {
                                fileName: "[project]/src/components/KhizarArain.tsx",
                                lineNumber: 1115,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(UnderlineNavLink, {
                                label: "About",
                                onClick: ()=>rootRef.current?.querySelector("[data-aa-about]")?.scrollIntoView({
                                        behavior: "smooth"
                                    })
                            }, void 0, false, {
                                fileName: "[project]/src/components/KhizarArain.tsx",
                                lineNumber: 1119,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/KhizarArain.tsx",
                        lineNumber: 1114,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/KhizarArain.tsx",
                lineNumber: 1112,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        "data-aa-hero": true,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "aa-heroBg",
                                "aria-hidden": "true",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-aa-bg1": true,
                                        className: "aa-heroBgLayer"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/KhizarArain.tsx",
                                        lineNumber: 1130,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-aa-bg2": true,
                                        className: "aa-heroBgLayer"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/KhizarArain.tsx",
                                        lineNumber: 1131,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/KhizarArain.tsx",
                                lineNumber: 1129,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "aa-heroTitleWrap",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-aa-heroline": true,
                                        className: "aa-heroTitle",
                                        // Framer Motion updates letterSpacing via GSAP; initial value set via CSS.
                                        style: {
                                            letterSpacing: heroLineWide
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(HeroTitle, {
                                            line: "khizar",
                                            staggerDelaySecPerLetter: 0.05
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/KhizarArain.tsx",
                                            lineNumber: 1141,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/KhizarArain.tsx",
                                        lineNumber: 1135,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-aa-heroline": true,
                                        className: "aa-heroTitle",
                                        style: {
                                            letterSpacing: heroLineWide,
                                            marginTop: "-0.06em"
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(HeroTitle, {
                                            line: "arain",
                                            staggerDelaySecPerLetter: 0.05
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/KhizarArain.tsx",
                                            lineNumber: 1148,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/KhizarArain.tsx",
                                        lineNumber: 1143,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/KhizarArain.tsx",
                                lineNumber: 1134,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "aa-heroSubtitle",
                                initial: {
                                    opacity: 0,
                                    y: 8
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: 0.65,
                                    ease: [
                                        0.22,
                                        1,
                                        0.36,
                                        1
                                    ],
                                    delay: 0.8
                                },
                                children: heroSubtitle
                            }, void 0, false, {
                                fileName: "[project]/src/components/KhizarArain.tsx",
                                lineNumber: 1152,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-aa-scrollindicator": true,
                                className: "aa-scrollIndicator",
                                children: "Scroll"
                            }, void 0, false, {
                                fileName: "[project]/src/components/KhizarArain.tsx",
                                lineNumber: 1161,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/KhizarArain.tsx",
                        lineNumber: 1128,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "aa-section",
                        "data-aa-section": true,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "aa-sectionHeader",
                                "data-aa-section": true,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionReveal, {
                                    idx: 1,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "aa-row",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "aa-h2",
                                                        children: vitraAnnouncement.heading
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/KhizarArain.tsx",
                                                        lineNumber: 1172,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "aa-p",
                                                        style: {
                                                            marginTop: 14
                                                        },
                                                        children: vitraAnnouncement.sub
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/KhizarArain.tsx",
                                                        lineNumber: 1173,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/KhizarArain.tsx",
                                                lineNumber: 1171,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CursorButton, {
                                                label: "See announcement",
                                                onClick: ()=>setModalOpen(true)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/KhizarArain.tsx",
                                                lineNumber: 1177,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/KhizarArain.tsx",
                                        lineNumber: 1170,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/KhizarArain.tsx",
                                    lineNumber: 1169,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/KhizarArain.tsx",
                                lineNumber: 1168,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "aa-media",
                                "data-aa-section": true,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ParallaxBox, {
                                        speed: 0.3,
                                        className: "aa-mediaLayer aa-layerA"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/KhizarArain.tsx",
                                        lineNumber: 1183,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ParallaxBox, {
                                        speed: 0.6,
                                        className: "aa-mediaLayer aa-layerB"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/KhizarArain.tsx",
                                        lineNumber: 1184,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ParallaxBox, {
                                        speed: 1,
                                        className: "aa-mediaLayer aa-layerC",
                                        strength: 64
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/KhizarArain.tsx",
                                        lineNumber: 1185,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "aa-mediaOverlay"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/KhizarArain.tsx",
                                        lineNumber: 1186,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/KhizarArain.tsx",
                                lineNumber: 1181,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/KhizarArain.tsx",
                        lineNumber: 1167,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "aa-section",
                        "data-aa-section": true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionReveal, {
                            idx: 2,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "aa-grid2",
                                "data-aa-section": true,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "aa-h2",
                                                children: vitraNewCase.heading
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/KhizarArain.tsx",
                                                lineNumber: 1195,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "aa-p",
                                                children: vitraNewCase.sub
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/KhizarArain.tsx",
                                                lineNumber: 1196,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    marginTop: 22
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CursorButton, {
                                                    label: "Learn more",
                                                    onClick: ()=>setLearnMoreOpen(true)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/KhizarArain.tsx",
                                                    lineNumber: 1200,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/KhizarArain.tsx",
                                                lineNumber: 1199,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/KhizarArain.tsx",
                                        lineNumber: 1194,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "aa-media",
                                        "data-aa-casemedia": true,
                                        "data-aa-section": true,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ParallaxBox, {
                                                speed: 0.3,
                                                className: "aa-mediaLayer aa-layerA",
                                                strength: 42
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/KhizarArain.tsx",
                                                lineNumber: 1204,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ParallaxBox, {
                                                speed: 0.6,
                                                className: "aa-mediaLayer aa-layerB",
                                                strength: 56
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/KhizarArain.tsx",
                                                lineNumber: 1205,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ParallaxBox, {
                                                speed: 1,
                                                className: "aa-mediaLayer aa-layerC",
                                                strength: 74
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/KhizarArain.tsx",
                                                lineNumber: 1206,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "aa-mediaOverlay"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/KhizarArain.tsx",
                                                lineNumber: 1207,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/KhizarArain.tsx",
                                        lineNumber: 1203,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/KhizarArain.tsx",
                                lineNumber: 1193,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/KhizarArain.tsx",
                            lineNumber: 1192,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/KhizarArain.tsx",
                        lineNumber: 1191,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "aa-section",
                        "data-aa-section": true,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionReveal, {
                                idx: 3,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "aa-row",
                                    "data-aa-section": true,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "aa-kicker",
                                                    children: "One Man, big results."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/KhizarArain.tsx",
                                                    lineNumber: 1218,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "aa-h2",
                                                    children: "My self"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/KhizarArain.tsx",
                                                    lineNumber: 1219,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/KhizarArain.tsx",
                                            lineNumber: 1217,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CursorButton, {
                                            label: "Learn more",
                                            onClick: ()=>setAboutMeOpen(true)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/KhizarArain.tsx",
                                            lineNumber: 1221,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/KhizarArain.tsx",
                                    lineNumber: 1216,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/KhizarArain.tsx",
                                lineNumber: 1215,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    height: 26
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/KhizarArain.tsx",
                                lineNumber: 1224,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "aa-teamGrid",
                                "data-aa-section": true,
                                children: team.map((t, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                        className: "aa-teamCard",
                                        initial: prefersReducedMotion ? undefined : {
                                            opacity: 0,
                                            y: 18
                                        },
                                        whileInView: prefersReducedMotion ? undefined : {
                                            opacity: 1,
                                            y: 0
                                        },
                                        viewport: {
                                            amount: 0.2,
                                            once: false
                                        },
                                        transition: {
                                            duration: 0.45,
                                            ease: "easeOut",
                                            delay: i * 0.06
                                        },
                                        "aria-label": `Team member ${t.name}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "aa-teamImg",
                                                children: t.image ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: t.image,
                                                    alt: t.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/KhizarArain.tsx",
                                                    lineNumber: 1237,
                                                    columnNumber: 30
                                                }, this) : null
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/KhizarArain.tsx",
                                                lineNumber: 1236,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "aa-teamName",
                                                children: [
                                                    t.name,
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            color: "rgba(255,255,255,0.72)",
                                                            fontWeight: 700
                                                        },
                                                        children: [
                                                            "— ",
                                                            t.tag
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/KhizarArain.tsx",
                                                        lineNumber: 1240,
                                                        columnNumber: 28
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/KhizarArain.tsx",
                                                lineNumber: 1239,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, t.name, true, {
                                        fileName: "[project]/src/components/KhizarArain.tsx",
                                        lineNumber: 1227,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/KhizarArain.tsx",
                                lineNumber: 1225,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/KhizarArain.tsx",
                        lineNumber: 1214,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "aa-section",
                        "data-aa-section": true,
                        id: "contact",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionReveal, {
                                idx: 4,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "aa-row",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "aa-kicker",
                                                    children: "By mail, phone or book a call."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/KhizarArain.tsx",
                                                    lineNumber: 1252,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "aa-h2",
                                                    children: "Contact"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/KhizarArain.tsx",
                                                    lineNumber: 1253,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/KhizarArain.tsx",
                                            lineNumber: 1251,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CursorButton, {
                                            label: "Learn more"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/KhizarArain.tsx",
                                            lineNumber: 1255,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/KhizarArain.tsx",
                                    lineNumber: 1250,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/KhizarArain.tsx",
                                lineNumber: 1249,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    height: 26
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/KhizarArain.tsx",
                                lineNumber: 1258,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "aa-contactGrid",
                                "data-aa-section": true,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "aa-contactItem",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "aa-icon",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "1.6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M4.5 7.5l7.5 5 7.5-5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/KhizarArain.tsx",
                                                        lineNumber: 1262,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                        x: "4.5",
                                                        y: "6",
                                                        width: "15",
                                                        height: "12.5",
                                                        rx: "2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/KhizarArain.tsx",
                                                        lineNumber: 1263,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/KhizarArain.tsx",
                                                lineNumber: 1261,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "aa-contactLabel",
                                                children: "Mail"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/KhizarArain.tsx",
                                                lineNumber: 1265,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "aa-contactValue",
                                                children: "realkhizararain7@gmail.com"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/KhizarArain.tsx",
                                                lineNumber: 1266,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/KhizarArain.tsx",
                                        lineNumber: 1260,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "aa-contactItem",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "aa-icon",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "1.6",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M7 3.8h2.2l1.2 4-1.2 1.2c1.5 3 3.6 5.2 6.6 6.6l1.2-1.2 4 1.2V19c0 .6-.4 1-1 1-8.6 0-15.6-7-15.6-15.6 0-.6.4-1 1-1z"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/KhizarArain.tsx",
                                                    lineNumber: 1270,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/KhizarArain.tsx",
                                                lineNumber: 1269,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "aa-contactLabel",
                                                children: "Phone"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/KhizarArain.tsx",
                                                lineNumber: 1272,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "aa-contactValue",
                                                children: "03103080347"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/KhizarArain.tsx",
                                                lineNumber: 1273,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/KhizarArain.tsx",
                                        lineNumber: 1268,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "aa-contactItem",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "aa-icon",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "1.6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                        x: "4.8",
                                                        y: "6.5",
                                                        width: "14.2",
                                                        height: "14.2",
                                                        rx: "2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/KhizarArain.tsx",
                                                        lineNumber: 1277,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M8 3.8v5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/KhizarArain.tsx",
                                                        lineNumber: 1278,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M16 3.8v5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/KhizarArain.tsx",
                                                        lineNumber: 1279,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M4.8 10h14.2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/KhizarArain.tsx",
                                                        lineNumber: 1280,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/KhizarArain.tsx",
                                                lineNumber: 1276,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "aa-contactLabel",
                                                children: "Calendar"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/KhizarArain.tsx",
                                                lineNumber: 1282,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "aa-contactValue",
                                                children: "Book a 20-minute intro call"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/KhizarArain.tsx",
                                                lineNumber: 1283,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/KhizarArain.tsx",
                                        lineNumber: 1275,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/KhizarArain.tsx",
                                lineNumber: 1259,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/KhizarArain.tsx",
                        lineNumber: 1248,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "aa-section",
                        "data-aa-section": true,
                        id: "services",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionReveal, {
                                idx: 5,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "aa-row",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "aa-h2",
                                            children: "Services"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/KhizarArain.tsx",
                                            lineNumber: 1293,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/KhizarArain.tsx",
                                        lineNumber: 1292,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/KhizarArain.tsx",
                                    lineNumber: 1291,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/KhizarArain.tsx",
                                lineNumber: 1290,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    height: 26
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/KhizarArain.tsx",
                                lineNumber: 1297,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "aa-servicesGrid",
                                "data-aa-section": true,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "aa-serviceBlock",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "aa-serviceTitle",
                                                        children: "Front end And Back end. Developer"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/KhizarArain.tsx",
                                                        lineNumber: 1301,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "aa-serviceDesc",
                                                        children: "We define your brand through strategy, branding design and touchpoints."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/KhizarArain.tsx",
                                                        lineNumber: 1302,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/KhizarArain.tsx",
                                                lineNumber: 1300,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    height: 8
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/KhizarArain.tsx",
                                                lineNumber: 1306,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/KhizarArain.tsx",
                                        lineNumber: 1299,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "aa-serviceBlock",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "aa-serviceTitle",
                                                        children: "(no-code) E-commerce"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/KhizarArain.tsx",
                                                        lineNumber: 1310,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "aa-serviceDesc",
                                                        children: "Over 2 years of experience in e-commerce. We partner with Shopify plus partners for development."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/KhizarArain.tsx",
                                                        lineNumber: 1311,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/KhizarArain.tsx",
                                                lineNumber: 1309,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    height: 8
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/KhizarArain.tsx",
                                                lineNumber: 1315,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/KhizarArain.tsx",
                                        lineNumber: 1308,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/KhizarArain.tsx",
                                lineNumber: 1298,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/KhizarArain.tsx",
                        lineNumber: 1289,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "aa-section aa-workWrap",
                        "data-aa-work": true,
                        id: "work",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionReveal, {
                                idx: 6,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "aa-row",
                                    style: {
                                        marginBottom: 12
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "aa-h2",
                                                children: "my work"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/KhizarArain.tsx",
                                                lineNumber: 1325,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/KhizarArain.tsx",
                                            lineNumber: 1324,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CursorButton, {
                                            label: "See all"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/KhizarArain.tsx",
                                            lineNumber: 1327,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/KhizarArain.tsx",
                                    lineNumber: 1323,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/KhizarArain.tsx",
                                lineNumber: 1322,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "aa-gallery",
                                "data-aa-section": true,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "aa-galleryViewport",
                                    "data-aa-galleryviewport": true,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "aa-galleryTrack",
                                        "data-aa-gallerytrack": true,
                                        "data-aa-gallery": true,
                                        children: work.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "aa-workCard",
                                                "aria-label": `Project ${p.name}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "aa-workImg"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/KhizarArain.tsx",
                                                        lineNumber: 1336,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "aa-workOverlay"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/KhizarArain.tsx",
                                                        lineNumber: 1337,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "aa-workTitle",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: p.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/KhizarArain.tsx",
                                                                lineNumber: 1339,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "aa-workTag",
                                                                children: p.tag
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/KhizarArain.tsx",
                                                                lineNumber: 1340,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/KhizarArain.tsx",
                                                        lineNumber: 1338,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, p.name + i, true, {
                                                fileName: "[project]/src/components/KhizarArain.tsx",
                                                lineNumber: 1335,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/KhizarArain.tsx",
                                        lineNumber: 1333,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/KhizarArain.tsx",
                                    lineNumber: 1332,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/KhizarArain.tsx",
                                lineNumber: 1331,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/KhizarArain.tsx",
                        lineNumber: 1321,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "aa-section",
                        "data-aa-about": true,
                        id: "about",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionReveal, {
                            idx: 7,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "aa-h2",
                                    style: {
                                        marginBottom: 18
                                    },
                                    children: "About Us"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/KhizarArain.tsx",
                                    lineNumber: 1352,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "aa-aboutBig",
                                    children: "Khizar Arain is an award-winning design professional. I help businesses at critical touchpoints define, and build new futures."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/KhizarArain.tsx",
                                    lineNumber: 1355,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/KhizarArain.tsx",
                            lineNumber: 1351,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/KhizarArain.tsx",
                        lineNumber: 1350,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "aa-cta",
                        "data-aa-ctapin": true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "aa-ctaInner",
                            "data-aa-section": true,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "aa-ctaText",
                                    children: "Ready when you are"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/KhizarArain.tsx",
                                    lineNumber: 1364,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CursorButton, {
                                    label: "Book call",
                                    variant: "primary"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/KhizarArain.tsx",
                                    lineNumber: 1365,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/KhizarArain.tsx",
                            lineNumber: 1363,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/KhizarArain.tsx",
                        lineNumber: 1362,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/KhizarArain.tsx",
                lineNumber: 1126,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "aa-footerRow",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "aa-footerLinks",
                            "aria-label": "Footer links",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    className: "aa-footerLink",
                                    href: "#work",
                                    children: "Work"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/KhizarArain.tsx",
                                    lineNumber: 1373,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    className: "aa-footerLink",
                                    href: "#about",
                                    children: "About"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/KhizarArain.tsx",
                                    lineNumber: 1376,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    className: "aa-footerLink",
                                    href: "#services",
                                    children: "Services"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/KhizarArain.tsx",
                                    lineNumber: 1379,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    className: "aa-footerLink",
                                    href: "#contact",
                                    children: "Contact"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/KhizarArain.tsx",
                                    lineNumber: 1382,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/KhizarArain.tsx",
                            lineNumber: 1372,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontWeight: 800,
                                        color: "rgba(255,255,255,0.78)",
                                        marginBottom: 10
                                    },
                                    children: [
                                        "© ",
                                        new Date().getFullYear(),
                                        " khizar arain"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/KhizarArain.tsx",
                                    lineNumber: 1387,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "aa-social",
                                    "aria-label": "Social links",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "https://x.com/KhizarArain103",
                                            "aria-label": "Twitter",
                                            children: "X"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/KhizarArain.tsx",
                                            lineNumber: 1391,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "https://www.instagram.com/realkhizerarain/",
                                            "aria-label": "Instagram",
                                            children: "IG"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/KhizarArain.tsx",
                                            lineNumber: 1394,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#",
                                            onClick: (e)=>e.preventDefault(),
                                            "aria-label": "Behance",
                                            children: "BE"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/KhizarArain.tsx",
                                            lineNumber: 1397,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/KhizarArain.tsx",
                                    lineNumber: 1390,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/KhizarArain.tsx",
                            lineNumber: 1386,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/KhizarArain.tsx",
                    lineNumber: 1371,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/KhizarArain.tsx",
                lineNumber: 1370,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Modal, {
                open: modalOpen,
                title: "Website of the Year",
                onClose: ()=>setModalOpen(false),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            marginTop: 0
                        },
                        children: "Our latest case for Vitra has won Framer Website of the Year. Replace this copy with your announcement details."
                    }, void 0, false, {
                        fileName: "[project]/src/components/KhizarArain.tsx",
                        lineNumber: 1406,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "For pixel-perfect reproduction you would also replace the placeholder media with licensed Vitra assets (images/videos) and match exact dimensions."
                    }, void 0, false, {
                        fileName: "[project]/src/components/KhizarArain.tsx",
                        lineNumber: 1409,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/KhizarArain.tsx",
                lineNumber: 1405,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Modal, {
                open: learnMoreOpen,
                title: "Learn more",
                onClose: ()=>setLearnMoreOpen(false),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    style: {
                        marginTop: 0
                    },
                    children: "We’re proud to announce our latest case with Vitra: 100 years Panton. Replace this section with the real case study preview content."
                }, void 0, false, {
                    fileName: "[project]/src/components/KhizarArain.tsx",
                    lineNumber: 1416,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/KhizarArain.tsx",
                lineNumber: 1415,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Modal, {
                open: aboutMeOpen,
                title: "About me",
                onClose: ()=>setAboutMeOpen(false),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            marginTop: 0
                        },
                        children: "I am Khizar Arain, a Full-Stack Developer focused on building clean, modern, and high-performing digital experiences."
                    }, void 0, false, {
                        fileName: "[project]/src/components/KhizarArain.tsx",
                        lineNumber: 1423,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "I work across front end and back end, with strong practical experience in e-commerce and production-ready web development. My goal is simple: turn ideas into websites and products that look premium, load fast, and deliver real business results."
                    }, void 0, false, {
                        fileName: "[project]/src/components/KhizarArain.tsx",
                        lineNumber: 1426,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/KhizarArain.tsx",
                lineNumber: 1422,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/KhizarArain.tsx",
        lineNumber: 1109,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$KhizarArain$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/KhizarArain.tsx [app-ssr] (ecmascript)");
"use client";
;
;
function Home() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$KhizarArain$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 6,
        columnNumber: 10
    }, this);
}
}),
];

//# sourceMappingURL=src_0hfmv19._.js.map