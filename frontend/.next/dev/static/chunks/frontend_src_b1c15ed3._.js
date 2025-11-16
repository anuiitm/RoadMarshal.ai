(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/frontend/src/app/api/backend.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// frontend/src/app/api/backend.ts
__turbopack_context__.s([
    "fetchCatalog",
    ()=>fetchCatalog,
    "parseQuery",
    ()=>parseQuery,
    "processQuery",
    ()=>processQuery,
    "sendQuery",
    ()=>sendQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
const API_BASE = "http://localhost:8000";
async function fetchCatalog() {
    const res = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`${API_BASE}/catalog`);
    if (res.data?.success && res.data.catalog) {
        if (typeof res.data.catalog === 'string') {
            return JSON.parse(res.data.catalog);
        } else {
            return res.data.catalog;
        }
    }
    return null;
}
async function sendQuery(text, top_k = 4) {
    const res = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`${API_BASE}/process`, {
        text,
        top_k
    });
    return res.data;
}
async function parseQuery(text) {
    const res = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`${API_BASE}/parse`, {
        text
    });
    return res.data;
}
async function processQuery(finalPrompt) {
    const res = await fetch("http://127.0.0.1:8000/process", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            text: finalPrompt
        })
    });
    return res.json();
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/app/utils/prompt.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generateHumanPrompt",
    ()=>generateHumanPrompt,
    "generateLLMPrompt",
    ()=>generateLLMPrompt
]);
function generateHumanPrompt(state, customParsedPrompt) {
    if (!state || Object.keys(state).length === 0) {
        if (customParsedPrompt) {
            try {
                const parsed = JSON.parse(customParsedPrompt);
                return `Custom Query:\n${JSON.stringify(parsed, null, 2)}`;
            } catch  {
                return `Custom Query:\n${customParsedPrompt}`;
            }
        }
        return "";
    }
    let parts = [];
    for (const category of Object.keys(state)){
        const types = state[category];
        if (!types || Object.keys(types).length === 0) continue;
        parts.push(`\n📋 ${category}`);
        parts.push("─".repeat(50));
        for (const issueName of Object.keys(types)){
            const typeState = types[issueName];
            if (!typeState.rows || typeState.rows.length === 0) continue;
            parts.push(`\n  Issue: ${issueName}`);
            for (const r of typeState.rows){
                if (r.problems && r.problems.length > 0) {
                    const subtypes = r.problems.join(", ");
                    parts.push(`    • Subtypes: ${subtypes}`);
                }
                if (r.speed) {
                    parts.push(`    • Speed: ${r.speed}`);
                }
                if (r.notes) {
                    parts.push(`    • Notes: ${r.notes}`);
                }
            }
        }
    }
    if (customParsedPrompt) {
        parts.push("\n\n📝 Custom Query:");
        parts.push("─".repeat(50));
        try {
            const parsed = JSON.parse(customParsedPrompt);
            parts.push(JSON.stringify(parsed, null, 2));
        } catch  {
            parts.push(customParsedPrompt);
        }
    }
    return parts.join("\n");
}
function generateLLMPrompt(state, customParsedPrompt) {
    const header = `Please recommend road safety interventions for the following issues. Use only retrieved context and cite clauses exactly as provided. Do not hallucinate clause numbers. Output in markdown.`;
    const bodyParts = [];
    for (const category of Object.keys(state)){
        const types = state[category];
        if (!types || Object.keys(types).length === 0) continue;
        for (const typeName of Object.keys(types)){
            const typeState = types[typeName];
            if (!typeState.rows || typeState.rows.length === 0) continue;
            const rowsText = typeState.rows.map((r)=>{
                const probs = r.problems && r.problems.length ? r.problems.join(" | ") : "";
                const speed = r.speed ? ` @${r.speed}` : "";
                const notes = r.notes ? ` (${r.notes})` : "";
                return `${probs}${speed}${notes}`.trim();
            }).filter(Boolean).join(" ; ");
            if (rowsText) {
                bodyParts.push(`${category} :: ${typeName} :: ${rowsText}`);
            }
        }
    }
    if (customParsedPrompt) {
        bodyParts.push(`CUSTOM :: ${customParsedPrompt}`);
    }
    const body = bodyParts.join("\n");
    return `${header}\n\n${body}\n\nInstructions: For each issue, provide (1) Issue Summary, (2) Recommended Interventions, (3) Standard & Clause References, (4) Brief Reasoning. Use only retrieved context.`;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/components/Chip.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Chip
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
"use client";
;
;
;
function Chip(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(7);
    if ($[0] !== "adee1a11ac14f759bc26a57521709e8000674fb8f30ee203b7e6866e67540132") {
        for(let $i = 0; $i < 7; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "adee1a11ac14f759bc26a57521709e8000674fb8f30ee203b7e6866e67540132";
    }
    const { label, selected: t1, onClick, className: t2 } = t0;
    const selected = t1 === undefined ? false : t1;
    t2 === undefined ? "" : t2;
    const t3 = selected ? "bg-emerald-600 text-white border-emerald-700 shadow" : "bg-zinc-200 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-200 border-zinc-300 dark:border-zinc-600 hover:bg-zinc-300 dark:hover:bg-zinc-600";
    let t4;
    if ($[1] !== t3) {
        t4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("px-5 py-3 text-base font-semibold rounded-xl border transition-all", t3);
        $[1] = t3;
        $[2] = t4;
    } else {
        t4 = $[2];
    }
    let t5;
    if ($[3] !== label || $[4] !== onClick || $[5] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: onClick,
            className: t4,
            children: label
        }, void 0, false, {
            fileName: "[project]/frontend/src/components/Chip.tsx",
            lineNumber: 32,
            columnNumber: 10
        }, this);
        $[3] = label;
        $[4] = onClick;
        $[5] = t4;
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    return t5;
}
_c = Chip;
var _c;
__turbopack_context__.k.register(_c, "Chip");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2 has-[>svg]:px-3",
            sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
            lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
            icon: "size-9",
            "icon-sm": "size-8",
            "icon-lg": "size-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Button(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(15);
    if ($[0] !== "b802ea7e3e3b6481fbda6eba08a406753f085e49e4c2b055134a221e940fb7ba") {
        for(let $i = 0; $i < 15; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "b802ea7e3e3b6481fbda6eba08a406753f085e49e4c2b055134a221e940fb7ba";
    }
    let className;
    let props;
    let size;
    let t1;
    let variant;
    if ($[1] !== t0) {
        ({ className, variant, size, asChild: t1, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
        $[4] = size;
        $[5] = t1;
        $[6] = variant;
    } else {
        className = $[2];
        props = $[3];
        size = $[4];
        t1 = $[5];
        variant = $[6];
    }
    const asChild = t1 === undefined ? false : t1;
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    let t2;
    if ($[7] !== className || $[8] !== size || $[9] !== variant) {
        t2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        }));
        $[7] = className;
        $[8] = size;
        $[9] = variant;
        $[10] = t2;
    } else {
        t2 = $[10];
    }
    let t3;
    if ($[11] !== Comp || $[12] !== props || $[13] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
            "data-slot": "button",
            className: t2,
            ...props
        }, void 0, false, {
            fileName: "[project]/frontend/src/components/ui/button.tsx",
            lineNumber: 82,
            columnNumber: 10
        }, this);
        $[11] = Comp;
        $[12] = props;
        $[13] = t2;
        $[14] = t3;
    } else {
        t3 = $[14];
    }
    return t3;
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/components/ui/input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
function Input(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11);
    if ($[0] !== "447c43d4b753cfece5e3fe0a7ab5d95756ce45e88a83f2b457989222bede9559") {
        for(let $i = 0; $i < 11; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "447c43d4b753cfece5e3fe0a7ab5d95756ce45e88a83f2b457989222bede9559";
    }
    let className;
    let props;
    let type;
    if ($[1] !== t0) {
        ({ className, type, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
        $[4] = type;
    } else {
        className = $[2];
        props = $[3];
        type = $[4];
    }
    let t1;
    if ($[5] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", className);
        $[5] = className;
        $[6] = t1;
    } else {
        t1 = $[6];
    }
    let t2;
    if ($[7] !== props || $[8] !== t1 || $[9] !== type) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: type,
            "data-slot": "input",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/frontend/src/components/ui/input.tsx",
            lineNumber: 40,
            columnNumber: 10
        }, this);
        $[7] = props;
        $[8] = t1;
        $[9] = type;
        $[10] = t2;
    } else {
        t2 = $[10];
    }
    return t2;
}
_c = Input;
;
var _c;
__turbopack_context__.k.register(_c, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/lib/computeIssues.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "computeIssuesForCategory",
    ()=>computeIssuesForCategory
]);
function computeIssuesForCategory(category, catalog) {
    if (!catalog || !catalog[category]) return [];
    const allIssues = new Set();
    // category → each subtype → problems[]
    Object.values(catalog[category]).forEach((sub)=>{
        if (sub.problems && Array.isArray(sub.problems)) {
            sub.problems.forEach((p)=>allIssues.add(p));
        }
    });
    return Array.from(allIssues);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/lib/computeSubtypes.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "computeSubtypesForIssue",
    ()=>computeSubtypesForIssue
]);
function computeSubtypesForIssue(category, issue, catalog) {
    const subtypes = catalog[category] || {};
    const valid = [];
    Object.entries(subtypes).forEach(([subtypeName, subtypeObj])=>{
        if (Array.isArray(subtypeObj.problems) && subtypeObj.problems.includes(issue)) {
            valid.push(subtypeName);
        }
    });
    return valid.sort();
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/app/components/CategoryCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CategoryCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Chip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/Chip.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$computeIssues$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/lib/computeIssues.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$computeSubtypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/lib/computeSubtypes.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/circle.js [app-client] (ecmascript) <export default as Circle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
function CategoryCard(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(40);
    if ($[0] !== "429a0e17638d3eb85e46b1529ad06cdec0bdcb6df3c3871cd94bfeb348783aa6") {
        for(let $i = 0; $i < 40; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "429a0e17638d3eb85e46b1529ad06cdec0bdcb6df3c3871cd94bfeb348783aa6";
    }
    const { id, catalog, value, onChange } = t0;
    const issuesAvailable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$computeIssues$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["computeIssuesForCategory"])(id, catalog);
    const categoryStateToRows = _CategoryCardCategoryStateToRows;
    const rowsToCategoryState = _CategoryCardRowsToCategoryState;
    let t1;
    if ($[1] !== value) {
        t1 = ({
            "CategoryCard[useState()]": ()=>categoryStateToRows(value || {})
        })["CategoryCard[useState()]"];
        $[1] = value;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const [rows_1, setRows] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    let t2;
    if ($[3] !== value) {
        t2 = ({
            "CategoryCard[useState()]": ()=>JSON.stringify(value || {})
        })["CategoryCard[useState()]"];
        $[3] = value;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    const [lastValue, setLastValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t2);
    let t3;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = {};
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    const [localInputs, setLocalInputs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t3);
    let t4;
    let t5;
    if ($[6] !== lastValue || $[7] !== value) {
        t4 = ({
            "CategoryCard[useEffect()]": ()=>{
                const newValueStr = JSON.stringify(value || {});
                if (newValueStr !== lastValue) {
                    const newRows = categoryStateToRows(value || {});
                    setRows(newRows);
                    setLastValue(newValueStr);
                    setLocalInputs({});
                }
            }
        })["CategoryCard[useEffect()]"];
        t5 = [
            value,
            lastValue
        ];
        $[6] = lastValue;
        $[7] = value;
        $[8] = t4;
        $[9] = t5;
    } else {
        t4 = $[8];
        t5 = $[9];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t4, t5);
    let t6;
    if ($[10] !== onChange) {
        t6 = ({
            "CategoryCard[updateRows]": (next)=>{
                setRows(next);
                onChange(rowsToCategoryState(next));
            }
        })["CategoryCard[updateRows]"];
        $[10] = onChange;
        $[11] = t6;
    } else {
        t6 = $[11];
    }
    const updateRows = t6;
    let t7;
    if ($[12] !== rows_1 || $[13] !== updateRows) {
        t7 = ({
            "CategoryCard[updateField]": (i, patch)=>{
                const next_0 = [
                    ...rows_1
                ];
                next_0[i] = {
                    ...next_0[i],
                    ...patch
                };
                if (patch.issue && patch.issue !== next_0[i].issue) {
                    next_0[i].subtypes = [];
                }
                updateRows(next_0);
            }
        })["CategoryCard[updateField]"];
        $[12] = rows_1;
        $[13] = updateRows;
        $[14] = t7;
    } else {
        t7 = $[14];
    }
    const updateField = t7;
    let t8;
    if ($[15] !== rows_1 || $[16] !== updateRows) {
        t8 = ({
            "CategoryCard[addRow]": ()=>{
                updateRows([
                    ...rows_1,
                    {
                        issue: "",
                        subtypes: [],
                        speed: "",
                        notes: "",
                        openStep: 1
                    }
                ]);
            }
        })["CategoryCard[addRow]"];
        $[15] = rows_1;
        $[16] = updateRows;
        $[17] = t8;
    } else {
        t8 = $[17];
    }
    const addRow = t8;
    let t9;
    if ($[18] !== rows_1 || $[19] !== updateRows) {
        t9 = ({
            "CategoryCard[removeRow]": (i_0)=>{
                updateRows(rows_1.filter({
                    "CategoryCard[removeRow > rows_1.filter()]": (_, idx)=>idx !== i_0
                }["CategoryCard[removeRow > rows_1.filter()]"]));
            }
        })["CategoryCard[removeRow]"];
        $[18] = rows_1;
        $[19] = updateRows;
        $[20] = t9;
    } else {
        t9 = $[20];
    }
    const removeRow = t9;
    let t10;
    if ($[21] !== rows_1 || $[22] !== updateRows) {
        t10 = ({
            "CategoryCard[toggleSubtype]": (i_1, subtype)=>{
                const next_1 = [
                    ...rows_1
                ];
                const row_1 = next_1[i_1];
                row_1.subtypes = row_1.subtypes.includes(subtype) ? row_1.subtypes.filter({
                    "CategoryCard[toggleSubtype > row_1.subtypes.filter()]": (x)=>x !== subtype
                }["CategoryCard[toggleSubtype > row_1.subtypes.filter()]"]) : [
                    ...row_1.subtypes,
                    subtype
                ];
                updateRows(next_1);
            }
        })["CategoryCard[toggleSubtype]"];
        $[21] = rows_1;
        $[22] = updateRows;
        $[23] = t10;
    } else {
        t10 = $[23];
    }
    const toggleSubtype = t10;
    const preview = _CategoryCardPreview;
    if (!catalog || !catalog[id]) {
        let t11;
        if ($[24] !== id) {
            t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-xl font-semibold text-zinc-900 dark:text-zinc-100",
                children: id
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                lineNumber: 185,
                columnNumber: 13
            }, this);
            $[24] = id;
            $[25] = t11;
        } else {
            t11 = $[25];
        }
        let t12;
        if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
            t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-zinc-500 dark:text-zinc-400 mt-2",
                children: "Loading catalog..."
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                lineNumber: 193,
                columnNumber: 13
            }, this);
            $[26] = t12;
        } else {
            t12 = $[26];
        }
        let t13;
        if ($[27] !== t11) {
            t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 shadow-sm",
                children: [
                    t11,
                    t12
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                lineNumber: 200,
                columnNumber: 13
            }, this);
            $[27] = t11;
            $[28] = t13;
        } else {
            t13 = $[28];
        }
        return t13;
    }
    const getStepStatus = _CategoryCardGetStepStatus;
    const getDisplayName = _CategoryCardGetDisplayName;
    const t11 = "w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-5 shadow-sm space-y-4";
    let t12;
    if ($[29] !== id) {
        t12 = getDisplayName(id);
        $[29] = id;
        $[30] = t12;
    } else {
        t12 = $[30];
    }
    let t13;
    if ($[31] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-xl font-bold text-zinc-900 dark:text-zinc-100",
                children: t12
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                lineNumber: 221,
                columnNumber: 62
            }, this)
        }, void 0, false, {
            fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
            lineNumber: 221,
            columnNumber: 11
        }, this);
        $[31] = t12;
        $[32] = t13;
    } else {
        t13 = $[32];
    }
    const t14 = rows_1.map({
        "CategoryCard[rows_1.map()]": (row_4, i_2)=>{
            const subtypesAvailable = row_4.issue && catalog ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$computeSubtypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["computeSubtypesForIssue"])(id, row_4.issue, catalog) : [];
            const step1Status = getStepStatus(row_4, 1);
            const step2Status = getStepStatus(row_4, 2);
            const step3Status = getStepStatus(row_4, 3);
            const step4Status = getStepStatus(row_4, 4);
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border border-zinc-200 dark:border-zinc-800 rounded-xl p-4 bg-gradient-to-br from-zinc-50 to-white dark:from-zinc-900 dark:to-zinc-800 space-y-4 shadow-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center pb-3 border-b border-zinc-200 dark:border-zinc-800",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 font-semibold text-sm",
                                        children: i_2 + 1
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                                        lineNumber: 234,
                                        columnNumber: 339
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold text-base text-zinc-900 dark:text-zinc-100",
                                        children: [
                                            "Issue #",
                                            i_2 + 1
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                                        lineNumber: 234,
                                        columnNumber: 524
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                                lineNumber: 234,
                                columnNumber: 298
                            }, this),
                            i_2 > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "ghost",
                                size: "sm",
                                onClick: {
                                    "CategoryCard[rows_1.map() > <Button>.onClick]": ()=>removeRow(i_2)
                                }["CategoryCard[rows_1.map() > <Button>.onClick]"],
                                className: "text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 hover:bg-red-50 dark:hover:bg-red-900/20",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "w-4 h-4 mr-1"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                                        lineNumber: 236,
                                        columnNumber: 190
                                    }, this),
                                    "Remove"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                                lineNumber: 234,
                                columnNumber: 640
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                        lineNumber: 234,
                        columnNumber: 196
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            step1Status === "complete" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                className: "w-4 h-4 text-emerald-600 dark:text-emerald-400"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                                                lineNumber: 236,
                                                columnNumber: 391
                                            }, this) : step1Status === "active" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__["Circle"], {
                                                className: "w-4 h-4 text-emerald-600 dark:text-emerald-400 fill-emerald-600 dark:fill-emerald-400"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                                                lineNumber: 236,
                                                columnNumber: 496
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__["Circle"], {
                                                className: "w-4 h-4 text-zinc-400 dark:text-zinc-600"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                                                lineNumber: 236,
                                                columnNumber: 607
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-semibold text-sm text-zinc-900 dark:text-zinc-100",
                                                children: "1. Select Issue"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                                                lineNumber: 236,
                                                columnNumber: 671
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                                        lineNumber: 236,
                                        columnNumber: 320
                                    }, this),
                                    row_4.openStep !== 1 && row_4.issue && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "ghost",
                                        size: "sm",
                                        onClick: {
                                            "CategoryCard[rows_1.map() > <Button>.onClick]": ()=>updateField(i_2, {
                                                    openStep: 1
                                                })
                                        }["CategoryCard[rows_1.map() > <Button>.onClick]"],
                                        className: "text-xs h-7",
                                        children: "Edit"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                                        lineNumber: 236,
                                        columnNumber: 812
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                                lineNumber: 236,
                                columnNumber: 269
                            }, this),
                            row_4.openStep === 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pl-6 space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-zinc-600 dark:text-zinc-400",
                                        children: "Choose the issue you want to address:"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                                        lineNumber: 240,
                                        columnNumber: 165
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-2",
                                        children: issuesAvailable.map({
                                            "CategoryCard[rows_1.map() > issuesAvailable.map()]": (iss)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Chip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    label: iss,
                                                    selected: row_4.issue === iss,
                                                    onClick: {
                                                        "CategoryCard[rows_1.map() > issuesAvailable.map() > <Chip>.onClick]": ()=>updateField(i_2, {
                                                                issue: iss,
                                                                openStep: 2
                                                            })
                                                    }["CategoryCard[rows_1.map() > issuesAvailable.map() > <Chip>.onClick]"]
                                                }, iss, false, {
                                                    fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                                                    lineNumber: 241,
                                                    columnNumber: 78
                                                }, this)
                                        }["CategoryCard[rows_1.map() > issuesAvailable.map()]"])
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                                        lineNumber: 240,
                                        columnNumber: 262
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                                lineNumber: 240,
                                columnNumber: 133
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pl-6",
                                children: row_4.issue ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-lg",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                            className: "w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                                            lineNumber: 247,
                                            columnNumber: 282
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm font-medium text-emerald-900 dark:text-emerald-100",
                                            children: row_4.issue
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                                            lineNumber: 247,
                                            columnNumber: 361
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                                    lineNumber: 247,
                                    columnNumber: 124
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm text-zinc-400 dark:text-zinc-600",
                                    children: "No issue selected"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                                    lineNumber: 247,
                                    columnNumber: 467
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                                lineNumber: 247,
                                columnNumber: 87
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                        lineNumber: 236,
                        columnNumber: 242
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            step2Status === "complete" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                className: "w-4 h-4 text-emerald-600 dark:text-emerald-400"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                                                lineNumber: 247,
                                                columnNumber: 713
                                            }, this) : step2Status === "active" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__["Circle"], {
                                                className: "w-4 h-4 text-emerald-600 dark:text-emerald-400 fill-emerald-600 dark:fill-emerald-400"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                                                lineNumber: 247,
                                                columnNumber: 818
                                            }, this) : step2Status === "disabled" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__["Circle"], {
                                                className: "w-4 h-4 text-zinc-300 dark:text-zinc-700"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                                                lineNumber: 247,
                                                columnNumber: 958
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__["Circle"], {
                                                className: "w-4 h-4 text-zinc-400 dark:text-zinc-600"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                                                lineNumber: 247,
                                                columnNumber: 1024
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `font-semibold text-sm ${step2Status === "disabled" ? "text-zinc-400 dark:text-zinc-600" : "text-zinc-900 dark:text-zinc-100"}`,
                                                children: "2. Select Subtypes"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                                                lineNumber: 247,
                                                columnNumber: 1088
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                                        lineNumber: 247,
                                        columnNumber: 642
                                    }, this),
                                    row_4.openStep !== 2 && row_4.subtypes.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "ghost",
                                        size: "sm",
                                        onClick: {
                                            "CategoryCard[rows_1.map() > <Button>.onClick]": ()=>updateField(i_2, {
                                                    openStep: 2
                                                })
                                        }["CategoryCard[rows_1.map() > <Button>.onClick]"],
                                        className: "text-xs h-7",
                                        children: "Edit"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                                        lineNumber: 247,
                                        columnNumber: 1319
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                                lineNumber: 247,
                                columnNumber: 591
                            }, this),
                            row_4.openStep === 2 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pl-6 space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-zinc-600 dark:text-zinc-400",
                                        children: "Select one or more subtypes:"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                                        lineNumber: 251,
                                        columnNumber: 165
                                    }, this),
                                    subtypesAvailable.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm text-zinc-500 dark:text-zinc-400 p-2 bg-zinc-100 dark:bg-zinc-800 rounded-lg",
                                        children: "No subtypes available for this issue."
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                                        lineNumber: 251,
                                        columnNumber: 287
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap gap-2",
                                                children: subtypesAvailable.map({
                                                    "CategoryCard[rows_1.map() > subtypesAvailable.map()]": (s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Chip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            label: s,
                                                            selected: row_4.subtypes.includes(s),
                                                            onClick: {
                                                                "CategoryCard[rows_1.map() > subtypesAvailable.map() > <Chip>.onClick]": ()=>toggleSubtype(i_2, s)
                                                            }["CategoryCard[rows_1.map() > subtypesAvailable.map() > <Chip>.onClick]"]
                                                        }, s, false, {
                                                            fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                                                            lineNumber: 252,
                                                            columnNumber: 80
                                                        }, this)
                                                }["CategoryCard[rows_1.map() > subtypesAvailable.map()]"])
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                                                lineNumber: 251,
                                                columnNumber: 437
                                            }, this),
                                            row_4.subtypes.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-end pt-1",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    onClick: {
                                                        "CategoryCard[rows_1.map() > <Button>.onClick]": ()=>updateField(i_2, {
                                                                openStep: 3
                                                            })
                                                    }["CategoryCard[rows_1.map() > <Button>.onClick]"],
                                                    size: "sm",
                                                    className: "bg-emerald-600 hover:bg-emerald-700 text-white",
                                                    children: [
                                                        "Continue",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                            className: "w-3.5 h-3.5 ml-1"
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                                                            lineNumber: 259,
                                                            columnNumber: 146
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                                                    lineNumber: 255,
                                                    columnNumber: 151
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                                                lineNumber: 255,
                                                columnNumber: 112
                                            }, this)
                                        ]
                                    }, void 0, true)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                                lineNumber: 251,
                                columnNumber: 133
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pl-6",
                                children: row_4.subtypes.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap gap-2",
                                    children: row_4.subtypes.map(_CategoryCardRows_1MapRow_4SubtypesMap)
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                                    lineNumber: 259,
                                    columnNumber: 271
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm text-zinc-400 dark:text-zinc-600",
                                    children: !row_4.issue ? "Select an issue first" : "No subtypes selected"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                                    lineNumber: 259,
                                    columnNumber: 378
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                                lineNumber: 259,
                                columnNumber: 220
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                        lineNumber: 247,
                        columnNumber: 564
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            step3Status === "complete" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                className: "w-4 h-4 text-emerald-600 dark:text-emerald-400"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                                                lineNumber: 259,
                                                columnNumber: 672
                                            }, this) : step3Status === "active" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__["Circle"], {
                                                className: "w-4 h-4 text-emerald-600 dark:text-emerald-400 fill-emerald-600 dark:fill-emerald-400"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                                                lineNumber: 259,
                                                columnNumber: 777
                                            }, this) : step3Status === "disabled" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__["Circle"], {
                                                className: "w-4 h-4 text-zinc-300 dark:text-zinc-700"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                                                lineNumber: 259,
                                                columnNumber: 917
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__["Circle"], {
                                                className: "w-4 h-4 text-zinc-400 dark:text-zinc-600"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                                                lineNumber: 259,
                                                columnNumber: 983
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `font-semibold text-sm ${step3Status === "disabled" ? "text-zinc-400 dark:text-zinc-600" : "text-zinc-900 dark:text-zinc-100"}`,
                                                children: "3. Speed & Notes"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                                                lineNumber: 259,
                                                columnNumber: 1047
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                                        lineNumber: 259,
                                        columnNumber: 601
                                    }, this),
                                    row_4.openStep !== 3 && (row_4.speed || row_4.notes) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "ghost",
                                        size: "sm",
                                        onClick: {
                                            "CategoryCard[rows_1.map() > <Button>.onClick]": ()=>{
                                                setLocalInputs({
                                                    "CategoryCard[rows_1.map() > <Button>.onClick > setLocalInputs()]": (prev)=>({
                                                            ...prev,
                                                            [i_2]: {
                                                                speed: row_4.speed,
                                                                notes: row_4.notes
                                                            }
                                                        })
                                                }["CategoryCard[rows_1.map() > <Button>.onClick > setLocalInputs()]"]);
                                                updateField(i_2, {
                                                    openStep: 3
                                                });
                                            }
                                        }["CategoryCard[rows_1.map() > <Button>.onClick]"],
                                        className: "text-xs h-7",
                                        children: "Edit"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                                        lineNumber: 259,
                                        columnNumber: 1283
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                                lineNumber: 259,
                                columnNumber: 550
                            }, this),
                            row_4.openStep === 3 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pl-6 space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-zinc-600 dark:text-zinc-400",
                                        children: "Add additional details (optional):"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                                        lineNumber: 274,
                                        columnNumber: 165
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 md:grid-cols-2 gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-xs font-medium text-zinc-700 dark:text-zinc-300",
                                                        children: "Speed"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                                                        lineNumber: 274,
                                                        columnNumber: 343
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                        value: localInputs[i_2]?.speed ?? row_4.speed,
                                                        onChange: {
                                                            "CategoryCard[rows_1.map() > <Input>.onChange]": (e)=>{
                                                                setLocalInputs({
                                                                    "CategoryCard[rows_1.map() > <Input>.onChange > setLocalInputs()]": (prev_0)=>({
                                                                            ...prev_0,
                                                                            [i_2]: {
                                                                                speed: e.target.value,
                                                                                notes: prev_0[i_2]?.notes ?? row_4.notes
                                                                            }
                                                                        })
                                                                }["CategoryCard[rows_1.map() > <Input>.onChange > setLocalInputs()]"]);
                                                            }
                                                        }["CategoryCard[rows_1.map() > <Input>.onChange]"],
                                                        placeholder: "e.g., 60 km/h",
                                                        className: "w-full"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                                                        lineNumber: 274,
                                                        columnNumber: 428
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                                                lineNumber: 274,
                                                columnNumber: 314
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-xs font-medium text-zinc-700 dark:text-zinc-300",
                                                        children: "Notes"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                                                        lineNumber: 286,
                                                        columnNumber: 153
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                        value: localInputs[i_2]?.notes ?? row_4.notes,
                                                        onChange: {
                                                            "CategoryCard[rows_1.map() > <Input>.onChange]": (e_0)=>{
                                                                setLocalInputs({
                                                                    "CategoryCard[rows_1.map() > <Input>.onChange > setLocalInputs()]": (prev_1)=>({
                                                                            ...prev_1,
                                                                            [i_2]: {
                                                                                speed: prev_1[i_2]?.speed ?? row_4.speed,
                                                                                notes: e_0.target.value
                                                                            }
                                                                        })
                                                                }["CategoryCard[rows_1.map() > <Input>.onChange > setLocalInputs()]"]);
                                                            }
                                                        }["CategoryCard[rows_1.map() > <Input>.onChange]"],
                                                        placeholder: "Additional information (optional)",
                                                        className: "w-full"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                                                        lineNumber: 286,
                                                        columnNumber: 238
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                                                lineNumber: 286,
                                                columnNumber: 124
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                                        lineNumber: 274,
                                        columnNumber: 259
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-end pt-1",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            onClick: {
                                                "CategoryCard[rows_1.map() > <Button>.onClick]": ()=>{
                                                    const localSpeed = localInputs[i_2]?.speed ?? row_4.speed;
                                                    const localNotes = localInputs[i_2]?.notes ?? row_4.notes;
                                                    updateField(i_2, {
                                                        speed: localSpeed,
                                                        notes: localNotes,
                                                        openStep: 4
                                                    });
                                                    setLocalInputs({
                                                        "CategoryCard[rows_1.map() > <Button>.onClick > setLocalInputs()]": (prev_2)=>{
                                                            const next_2 = {
                                                                ...prev_2
                                                            };
                                                            delete next_2[i_2];
                                                            return next_2;
                                                        }
                                                    }["CategoryCard[rows_1.map() > <Button>.onClick > setLocalInputs()]"]);
                                                }
                                            }["CategoryCard[rows_1.map() > <Button>.onClick]"],
                                            size: "sm",
                                            className: "bg-emerald-600 hover:bg-emerald-700 text-white",
                                            children: [
                                                "Preview",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                    className: "w-3.5 h-3.5 ml-1"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                                                    lineNumber: 317,
                                                    columnNumber: 143
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                                            lineNumber: 298,
                                            columnNumber: 189
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                                        lineNumber: 298,
                                        columnNumber: 150
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                                lineNumber: 274,
                                columnNumber: 133
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pl-6",
                                children: row_4.speed || row_4.notes ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap gap-2",
                                    children: [
                                        row_4.speed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-medium text-blue-900 dark:text-blue-100",
                                                children: [
                                                    "Speed: ",
                                                    row_4.speed
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                                                lineNumber: 317,
                                                columnNumber: 464
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                                            lineNumber: 317,
                                            columnNumber: 318
                                        }, this),
                                        row_4.notes && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-medium text-blue-900 dark:text-blue-100",
                                                children: [
                                                    "Notes: ",
                                                    row_4.notes
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                                                lineNumber: 317,
                                                columnNumber: 731
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                                            lineNumber: 317,
                                            columnNumber: 585
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                                    lineNumber: 317,
                                    columnNumber: 264
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm text-zinc-400 dark:text-zinc-600",
                                    children: step3Status === "disabled" ? "Complete previous steps first" : "No speed or notes added"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                                    lineNumber: 317,
                                    columnNumber: 845
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                                lineNumber: 317,
                                columnNumber: 212
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                        lineNumber: 259,
                        columnNumber: 523
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    step4Status === "complete" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                        className: "w-4 h-4 text-emerald-600 dark:text-emerald-400"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                                        lineNumber: 317,
                                        columnNumber: 1113
                                    }, this) : step4Status === "active" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__["Circle"], {
                                        className: "w-4 h-4 text-emerald-600 dark:text-emerald-400 fill-emerald-600 dark:fill-emerald-400"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                                        lineNumber: 317,
                                        columnNumber: 1218
                                    }, this) : step4Status === "disabled" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__["Circle"], {
                                        className: "w-4 h-4 text-zinc-300 dark:text-zinc-700"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                                        lineNumber: 317,
                                        columnNumber: 1358
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__["Circle"], {
                                        className: "w-4 h-4 text-zinc-400 dark:text-zinc-600"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                                        lineNumber: 317,
                                        columnNumber: 1424
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `font-semibold text-sm ${step4Status === "disabled" ? "text-zinc-400 dark:text-zinc-600" : "text-zinc-900 dark:text-zinc-100"}`,
                                        children: "4. Preview"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                                        lineNumber: 317,
                                        columnNumber: 1488
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                                lineNumber: 317,
                                columnNumber: 1042
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pl-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-3 rounded-lg bg-gradient-to-br from-emerald-50 to-blue-50 dark:from-emerald-900/20 dark:to-blue-900/20 border border-emerald-200 dark:border-emerald-800",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm font-medium text-zinc-900 dark:text-zinc-100 whitespace-pre-wrap",
                                            children: preview(row_4)
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                                            lineNumber: 317,
                                            columnNumber: 1851
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                                        lineNumber: 317,
                                        columnNumber: 1679
                                    }, this),
                                    row_4.openStep === 4 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-3 flex justify-end",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            onClick: {
                                                "CategoryCard[rows_1.map() > <Button>.onClick]": ()=>updateField(i_2, {
                                                        openStep: 1
                                                    })
                                            }["CategoryCard[rows_1.map() > <Button>.onClick]"],
                                            variant: "outline",
                                            size: "sm",
                                            children: "Edit All"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                                            lineNumber: 317,
                                            columnNumber: 2029
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                                        lineNumber: 317,
                                        columnNumber: 1990
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                                lineNumber: 317,
                                columnNumber: 1657
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                        lineNumber: 317,
                        columnNumber: 1015
                    }, this)
                ]
            }, i_2, true, {
                fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                lineNumber: 234,
                columnNumber: 14
            }, this);
        }
    }["CategoryCard[rows_1.map()]"]);
    let t15;
    if ($[33] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
            className: "w-3.5 h-3.5 mr-2"
        }, void 0, false, {
            fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
            lineNumber: 326,
            columnNumber: 11
        }, this);
        $[33] = t15;
    } else {
        t15 = $[33];
    }
    let t16;
    if ($[34] !== addRow) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pt-3 border-t border-zinc-200 dark:border-zinc-800",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                onClick: addRow,
                variant: "outline",
                size: "sm",
                className: "w-full border-dashed border-2 hover:border-emerald-600 dark:hover:border-emerald-500 hover:bg-emerald-50 dark:hover:bg-emerald-900/20",
                children: [
                    t15,
                    "Add Another Issue"
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                lineNumber: 333,
                columnNumber: 79
            }, this)
        }, void 0, false, {
            fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
            lineNumber: 333,
            columnNumber: 11
        }, this);
        $[34] = addRow;
        $[35] = t16;
    } else {
        t16 = $[35];
    }
    let t17;
    if ($[36] !== t13 || $[37] !== t14 || $[38] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t11,
            children: [
                t13,
                t14,
                t16
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
            lineNumber: 341,
            columnNumber: 11
        }, this);
        $[36] = t13;
        $[37] = t14;
        $[38] = t16;
        $[39] = t17;
    } else {
        t17 = $[39];
    }
    return t17;
}
_s(CategoryCard, "mjcdDNBdpOs1kKc6ebpVxTGxW+g=");
_c = CategoryCard;
function _CategoryCardRows_1MapRow_4SubtypesMap(s_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-lg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                className: "w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400"
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                lineNumber: 352,
                columnNumber: 180
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-sm font-medium text-emerald-900 dark:text-emerald-100",
                children: s_0
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                lineNumber: 352,
                columnNumber: 259
            }, this)
        ]
    }, s_0, true, {
        fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
        lineNumber: 352,
        columnNumber: 10
    }, this);
}
function _CategoryCardGetDisplayName(categoryId) {
    if (categoryId === "Traffic Calming Measures") {
        return "Traffic Calming";
    }
    return categoryId;
}
function _CategoryCardGetStepStatus(row_3, step) {
    if (step === 1) {
        return row_3.issue ? "complete" : row_3.openStep === 1 ? "active" : "pending";
    }
    if (step === 2) {
        if (!row_3.issue) {
            return "disabled";
        }
        return row_3.subtypes.length > 0 ? "complete" : row_3.openStep === 2 ? "active" : "pending";
    }
    if (step === 3) {
        if (!row_3.issue || row_3.subtypes.length === 0) {
            return "disabled";
        }
        return row_3.speed || row_3.notes ? "complete" : row_3.openStep === 3 ? "active" : "pending";
    }
    if (step === 4) {
        if (!row_3.issue || row_3.subtypes.length === 0) {
            return "disabled";
        }
        return row_3.openStep === 4 ? "active" : "complete";
    }
    return "pending";
}
function _CategoryCardPreview(row_2) {
    if (!row_2.issue || row_2.subtypes.length === 0) {
        return "Incomplete\u2026";
    }
    const sub = row_2.subtypes.join(" | ");
    const spd = row_2.speed ? ` on ${row_2.speed} road` : "";
    return `${row_2.issue}: ${sub}${spd}${row_2.notes ? ` — ${row_2.notes}` : ""}`;
}
function _CategoryCardRowsToCategoryState(rows_0) {
    const state_0 = {};
    rows_0.forEach({
        "CategoryCard[rowsToCategoryState > rows_0.forEach()]": (row_0)=>{
            if (!row_0.issue || row_0.subtypes.length === 0) {
                return;
            }
            const issueKey = row_0.issue;
            if (!state_0[issueKey]) {
                state_0[issueKey] = {
                    rows: []
                };
            }
            state_0[issueKey].rows.push({
                problems: row_0.subtypes,
                speed: row_0.speed || undefined,
                notes: row_0.notes || undefined
            });
        }
    }["CategoryCard[rowsToCategoryState > rows_0.forEach()]"]);
    return state_0;
}
function _CategoryCardCategoryStateToRows(state) {
    const rows = [];
    Object.entries(state).forEach({
        "CategoryCard[categoryStateToRows > (anonymous)()]": (t0)=>{
            const [issueName, typeState] = t0;
            typeState.rows.forEach({
                "CategoryCard[categoryStateToRows > (anonymous)() > typeState.rows.forEach()]": (row)=>{
                    rows.push({
                        issue: issueName,
                        subtypes: row.problems || [],
                        speed: row.speed || "",
                        notes: row.notes || "",
                        openStep: 4
                    });
                }
            }["CategoryCard[categoryStateToRows > (anonymous)() > typeState.rows.forEach()]"]);
        }
    }["CategoryCard[categoryStateToRows > (anonymous)()]"]);
    return rows.length > 0 ? rows : [
        {
            issue: "",
            subtypes: [],
            speed: "",
            notes: "",
            openStep: 1
        }
    ];
}
var _c;
__turbopack_context__.k.register(_c, "CategoryCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/app/components/CustomQueryBox.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CustomQueryBox
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f$api$2f$backend$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/app/api/backend.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function CustomQueryBox({ onParsed }) {
    _s();
    const [text, setText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [parsed, setParsed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleParse = async ()=>{
        if (!text.trim()) return;
        setLoading(true);
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f$api$2f$backend$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseQuery"])(text);
            const result = res.parsed || res.raw || null;
            setParsed(result);
            // send parsed data to parent
            if (onParsed) onParsed(result);
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-3 border rounded bg-white dark:bg-zinc-900",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                value: text,
                onChange: (e)=>setText(e.target.value),
                placeholder: "Type your custom query here...",
                className: "w-full p-3 min-h-[120px] rounded border bg-transparent"
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/components/CustomQueryBox.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-3 mt-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: handleParse,
                    className: "px-4 py-2 bg-blue-600 text-white rounded",
                    children: "Analyze & Parse"
                }, void 0, false, {
                    fileName: "[project]/frontend/src/app/components/CustomQueryBox.tsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/components/CustomQueryBox.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-sm text-zinc-500 mt-2",
                children: "Parsing…"
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/components/CustomQueryBox.tsx",
                lineNumber: 36,
                columnNumber: 19
            }, this),
            parsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                className: "mt-3 bg-zinc-50 dark:bg-zinc-800 p-3 rounded text-sm",
                children: JSON.stringify(parsed, null, 2)
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/components/CustomQueryBox.tsx",
                lineNumber: 38,
                columnNumber: 18
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/app/components/CustomQueryBox.tsx",
        lineNumber: 27,
        columnNumber: 10
    }, this);
}
_s(CustomQueryBox, "3jDcalgrCzq8Bikb0WG/5Vw9qoU=");
_c = CustomQueryBox;
var _c;
__turbopack_context__.k.register(_c, "CustomQueryBox");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/app/components/LoadingView.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LoadingView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
;
;
function LoadingView(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "e75066b2a735c1f66db5da67f2a0a5fc2e96bd2aa84d34feb22b8642d02b4c60") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e75066b2a735c1f66db5da67f2a0a5fc2e96bd2aa84d34feb22b8642d02b4c60";
    }
    const { message: t1 } = t0;
    const message = t1 === undefined ? "Please wait \u2014 I'm onto it." : t1;
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "animate-spin h-10 w-10 border-4 border-t-blue-600 rounded-full mb-4"
        }, void 0, false, {
            fileName: "[project]/frontend/src/app/components/LoadingView.tsx",
            lineNumber: 17,
            columnNumber: 10
        }, this);
        $[1] = t2;
    } else {
        t2 = $[1];
    }
    let t3;
    if ($[2] !== message) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-8 flex items-center justify-center flex-col",
            children: [
                t2,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center text-zinc-700",
                    children: message
                }, void 0, false, {
                    fileName: "[project]/frontend/src/app/components/LoadingView.tsx",
                    lineNumber: 24,
                    columnNumber: 77
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/app/components/LoadingView.tsx",
            lineNumber: 24,
            columnNumber: 10
        }, this);
        $[2] = message;
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    return t3;
}
_c = LoadingView;
var _c;
__turbopack_context__.k.register(_c, "LoadingView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/components/MarkdownRenderer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MarkdownRenderer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$markdown$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Markdown__as__default$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/react-markdown/lib/index.js [app-client] (ecmascript) <export Markdown as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$remark$2d$gfm$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/remark-gfm/lib/index.js [app-client] (ecmascript)");
;
;
;
;
function MarkdownRenderer(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "4232eb4d78abd2c9a3521de34940aba65db4e722f24e1bac1e990541c53c666c") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "4232eb4d78abd2c9a3521de34940aba65db4e722f24e1bac1e990541c53c666c";
    }
    const { content } = t0;
    let t1;
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [
            __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$remark$2d$gfm$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
        ];
        t2 = {
            code (t3) {
                const { node, inline, className, children, ...props } = t3;
                const match = /language-(\w+)/.exec(className || "");
                return !inline && match ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                    className: "bg-zinc-100 dark:bg-zinc-800 rounded-lg p-4 overflow-x-auto my-4 border border-zinc-200 dark:border-zinc-700",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                        className: className,
                        ...props,
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/MarkdownRenderer.tsx",
                        lineNumber: 29,
                        columnNumber: 161
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/MarkdownRenderer.tsx",
                    lineNumber: 29,
                    columnNumber: 35
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                    className: "bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded text-sm font-mono",
                    ...props,
                    children: children
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/MarkdownRenderer.tsx",
                    lineNumber: 29,
                    columnNumber: 226
                }, this);
            },
            pre (t4) {
                const { children: children_0, ...props_0 } = t4;
                if (children_0 && typeof children_0 === "object" && "props" in children_0 && children_0.props.className) {
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: children_0
                    }, void 0, false);
                }
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                    className: "bg-zinc-100 dark:bg-zinc-800 rounded-lg p-4 overflow-x-auto my-4 border border-zinc-200 dark:border-zinc-700",
                    ...props_0,
                    children: children_0
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/MarkdownRenderer.tsx",
                    lineNumber: 39,
                    columnNumber: 16
                }, this);
            }
        };
        $[1] = t1;
        $[2] = t2;
    } else {
        t1 = $[1];
        t2 = $[2];
    }
    let t3;
    if ($[3] !== content) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "prose prose-zinc dark:prose-invert max-w-none",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$markdown$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Markdown__as__default$3e$__["default"], {
                remarkPlugins: t1,
                components: t2,
                children: content
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/MarkdownRenderer.tsx",
                lineNumber: 50,
                columnNumber: 73
            }, this)
        }, void 0, false, {
            fileName: "[project]/frontend/src/components/MarkdownRenderer.tsx",
            lineNumber: 50,
            columnNumber: 10
        }, this);
        $[3] = content;
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    return t3;
}
_c = MarkdownRenderer;
var _c;
__turbopack_context__.k.register(_c, "MarkdownRenderer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/app/components/ResultView.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// frontend/src/app/components/ResultView.tsx
__turbopack_context__.s([
    "default",
    ()=>ResultView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$MarkdownRenderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/MarkdownRenderer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$html2canvas$2f$dist$2f$html2canvas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/html2canvas/dist/html2canvas.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$es$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/jspdf/dist/jspdf.es.min.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
function ResultView(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "ffce13e1378bfe0f263c5827dd0ea20dc0d2601bbd0b64ee4f1aba66b4809876") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ffce13e1378bfe0f263c5827dd0ea20dc0d2601bbd0b64ee4f1aba66b4809876";
    }
    const { result, onRestart } = t0;
    const answer = result?.answer || result?.data?.answer || "";
    const downloadPDF = _ResultViewDownloadPDF;
    let t1;
    if ($[1] !== answer) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            id: "result-root",
            className: "p-4 bg-white dark:bg-zinc-900 border rounded",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$MarkdownRenderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                content: answer
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/components/ResultView.tsx",
                lineNumber: 24,
                columnNumber: 89
            }, this)
        }, void 0, false, {
            fileName: "[project]/frontend/src/app/components/ResultView.tsx",
            lineNumber: 24,
            columnNumber: 10
        }, this);
        $[1] = answer;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: downloadPDF,
            className: "px-4 py-2 bg-blue-600 text-white rounded",
            children: "Download PDF"
        }, void 0, false, {
            fileName: "[project]/frontend/src/app/components/ResultView.tsx",
            lineNumber: 32,
            columnNumber: 10
        }, this);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] !== onRestart) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex gap-3",
            children: [
                t2,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onRestart,
                    className: "px-4 py-2 border rounded",
                    children: "Restart"
                }, void 0, false, {
                    fileName: "[project]/frontend/src/app/components/ResultView.tsx",
                    lineNumber: 39,
                    columnNumber: 42
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/app/components/ResultView.tsx",
            lineNumber: 39,
            columnNumber: 10
        }, this);
        $[4] = onRestart;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] !== t1 || $[7] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4",
            children: [
                t1,
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/app/components/ResultView.tsx",
            lineNumber: 47,
            columnNumber: 10
        }, this);
        $[6] = t1;
        $[7] = t3;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    return t4;
}
_c = ResultView;
async function _ResultViewDownloadPDF() {
    const el = document.getElementById("result-root");
    if (!el) {
        return;
    }
    const canvas = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$html2canvas$2f$dist$2f$html2canvas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(el);
    const img = canvas.toDataURL("image/png");
    const pdf = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$es$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]("p", "pt", "a4");
    const imgProps = pdf.getImageProperties(img);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = imgProps.height * pdfWidth / imgProps.width;
    pdf.addImage(img, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("roadmarshal-report.pdf");
}
var _c;
__turbopack_context__.k.register(_c, "ResultView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/app/components/Navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// frontend/src/app/components/Navbar.tsx
__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/sun.js [app-client] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/moon.js [app-client] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function Navbar() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(10);
    if ($[0] !== "ee12119f0df1c62962897787a28860050dfb39b83cd0395c0ca11d97841403b6") {
        for(let $i = 0; $i < 10; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ee12119f0df1c62962897787a28860050dfb39b83cd0395c0ca11d97841403b6";
    }
    const { theme, setTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/",
            className: "flex items-center gap-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-8 w-8 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-md"
                }, void 0, false, {
                    fileName: "[project]/frontend/src/app/components/Navbar.tsx",
                    lineNumber: 22,
                    columnNumber: 61
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-semibold",
                    children: "RoadMarshal AI"
                }, void 0, false, {
                    fileName: "[project]/frontend/src/app/components/Navbar.tsx",
                    lineNumber: 22,
                    columnNumber: 143
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/app/components/Navbar.tsx",
            lineNumber: 22,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] !== setTheme || $[3] !== theme) {
        t1 = ({
            "Navbar[<button>.onClick]": ()=>setTheme(theme === "dark" ? "light" : "dark")
        })["Navbar[<button>.onClick]"];
        $[2] = setTheme;
        $[3] = theme;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    let t2;
    if ($[5] !== theme) {
        t2 = theme === "dark" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
            className: "w-5 h-5"
        }, void 0, false, {
            fileName: "[project]/frontend/src/app/components/Navbar.tsx",
            lineNumber: 40,
            columnNumber: 29
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
            className: "w-5 h-5"
        }, void 0, false, {
            fileName: "[project]/frontend/src/app/components/Navbar.tsx",
            lineNumber: 40,
            columnNumber: 59
        }, this);
        $[5] = theme;
        $[6] = t2;
    } else {
        t2 = $[6];
    }
    let t3;
    if ($[7] !== t1 || $[8] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: "w-full bg-white/60 dark:bg-zinc-900/60 backdrop-blur sticky top-0 z-40 border-b",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-6xl mx-auto px-4 py-3 flex items-center justify-between",
                children: [
                    t0,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: t1,
                            className: "p-2 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800",
                            "aria-label": "Toggle theme",
                            children: t2
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/app/components/Navbar.tsx",
                            lineNumber: 48,
                            columnNumber: 231
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/app/components/Navbar.tsx",
                        lineNumber: 48,
                        columnNumber: 190
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/app/components/Navbar.tsx",
                lineNumber: 48,
                columnNumber: 107
            }, this)
        }, void 0, false, {
            fileName: "[project]/frontend/src/app/components/Navbar.tsx",
            lineNumber: 48,
            columnNumber: 10
        }, this);
        $[7] = t1;
        $[8] = t2;
        $[9] = t3;
    } else {
        t3 = $[9];
    }
    return t3;
}
_s(Navbar, "MbA2o1CO/DKngiuIiOejDSplw10=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/app/components/FinalPromptModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// frontend/src/app/components/FinalPromptModal.tsx
__turbopack_context__.s([
    "default",
    ()=>FinalPromptModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function FinalPromptModal(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(16);
    if ($[0] !== "95f667621dc6e5a3b387fab1866fd9ebb656b853e403e913d7667ccc34385b0e") {
        for(let $i = 0; $i < 16; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "95f667621dc6e5a3b387fab1866fd9ebb656b853e403e913d7667ccc34385b0e";
    }
    const { initial, onConfirm, onClose } = t0;
    const [text, setText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initial);
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-lg font-semibold mb-3",
            children: "As I understood — review the prompt"
        }, void 0, false, {
            fileName: "[project]/frontend/src/app/components/FinalPromptModal.tsx",
            lineNumber: 22,
            columnNumber: 10
        }, this);
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "FinalPromptModal[<textarea>.onChange]": (e)=>setText(e.target.value)
        })["FinalPromptModal[<textarea>.onChange]"];
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    let t3;
    if ($[3] !== text) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
            value: text,
            onChange: t2,
            className: "w-full min-h-[160px] p-3 bg-transparent border rounded"
        }, void 0, false, {
            fileName: "[project]/frontend/src/app/components/FinalPromptModal.tsx",
            lineNumber: 38,
            columnNumber: 10
        }, this);
        $[3] = text;
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] !== onClose) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: onClose,
            className: "px-4 py-2 rounded border",
            children: "Edit Later"
        }, void 0, false, {
            fileName: "[project]/frontend/src/app/components/FinalPromptModal.tsx",
            lineNumber: 46,
            columnNumber: 10
        }, this);
        $[5] = onClose;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    let t5;
    if ($[7] !== onConfirm || $[8] !== text) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: {
                "FinalPromptModal[<button>.onClick]": ()=>onConfirm(text)
            }["FinalPromptModal[<button>.onClick]"],
            className: "px-4 py-2 bg-blue-600 text-white rounded",
            children: "Confirm & Run"
        }, void 0, false, {
            fileName: "[project]/frontend/src/app/components/FinalPromptModal.tsx",
            lineNumber: 54,
            columnNumber: 10
        }, this);
        $[7] = onConfirm;
        $[8] = text;
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    let t6;
    if ($[10] !== t4 || $[11] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-end gap-3 mt-4",
            children: [
                t4,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/app/components/FinalPromptModal.tsx",
            lineNumber: 65,
            columnNumber: 10
        }, this);
        $[10] = t4;
        $[11] = t5;
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    let t7;
    if ($[13] !== t3 || $[14] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 z-50 flex items-center justify-center bg-black/40",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full max-w-3xl bg-white dark:bg-zinc-900 rounded p-6",
                children: [
                    t1,
                    t3,
                    t6
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/app/components/FinalPromptModal.tsx",
                lineNumber: 74,
                columnNumber: 91
            }, this)
        }, void 0, false, {
            fileName: "[project]/frontend/src/app/components/FinalPromptModal.tsx",
            lineNumber: 74,
            columnNumber: 10
        }, this);
        $[13] = t3;
        $[14] = t6;
        $[15] = t7;
    } else {
        t7 = $[15];
    }
    return t7;
}
_s(FinalPromptModal, "ybbNiZbGrBadb5B/ORnaXGYtlH8=");
_c = FinalPromptModal;
var _c;
__turbopack_context__.k.register(_c, "FinalPromptModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>QueryPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
// Import your API functions
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f$api$2f$backend$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/app/api/backend.ts [app-client] (ecmascript)");
// Import your state and prompt logic
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f$utils$2f$prompt$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/app/utils/prompt.ts [app-client] (ecmascript)");
// Import all your UI components
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Chip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/Chip.tsx [app-client] (ecmascript)"); // Uses the one in src/components/
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f$components$2f$CategoryCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/app/components/CategoryCard.tsx [app-client] (ecmascript)"); // Uses the one in src/app/components/
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f$components$2f$CustomQueryBox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/app/components/CustomQueryBox.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f$components$2f$LoadingView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/app/components/LoadingView.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f$components$2f$ResultView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/app/components/ResultView.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f$components$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/app/components/Navbar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f$components$2f$FinalPromptModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/app/components/FinalPromptModal.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
function QueryPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(61);
    if ($[0] !== "1b7aa8a25566c4bfb026fd9014cc0c26fecc5a2637658c304b4350b2565def09") {
        for(let $i = 0; $i < 61; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "1b7aa8a25566c4bfb026fd9014cc0c26fecc5a2637658c304b4350b2565def09";
    }
    const [catalog, setCatalog] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loadingCatalog, setLoadingCatalog] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {};
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [appState, setAppState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    const [customParsedPrompt, setCustomParsedPrompt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [];
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const [selectedCategories, setSelectedCategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    const categories = [
        "Road Sign",
        "Road Marking",
        "Traffic Calming Measures",
        "Custom Query"
    ];
    const getCategoryDisplayName = _QueryPageGetCategoryDisplayName;
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [result, setResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showPromptModal, setShowPromptModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t2;
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "QueryPage[useEffect()]": ()=>{
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f$api$2f$backend$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchCatalog"])().then({
                    "QueryPage[useEffect() > (anonymous)()]": (data)=>{
                        setCatalog(data);
                    }
                }["QueryPage[useEffect() > (anonymous)()]"]).catch(console.error).finally({
                    "QueryPage[useEffect() > (anonymous)()]": ()=>{
                        setLoadingCatalog(false);
                    }
                }["QueryPage[useEffect() > (anonymous)()]"]);
            }
        })["QueryPage[useEffect()]"];
        t3 = [];
        $[3] = t2;
        $[4] = t3;
    } else {
        t2 = $[3];
        t3 = $[4];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    const toggleCategory = {
        "QueryPage[toggleCategory]": (cat)=>{
            if (selectedCategories.includes(cat)) {
                setSelectedCategories(selectedCategories.filter({
                    "QueryPage[toggleCategory > selectedCategories.filter()]": (c)=>c !== cat
                }["QueryPage[toggleCategory > selectedCategories.filter()]"]));
                if (cat !== "Custom Query") {
                    setAppState({
                        "QueryPage[toggleCategory > setAppState()]": (prev)=>{
                            const next = {
                                ...prev
                            };
                            delete next[cat];
                            return next;
                        }
                    }["QueryPage[toggleCategory > setAppState()]"]);
                } else {
                    setCustomParsedPrompt(null);
                }
            } else {
                setSelectedCategories([
                    ...selectedCategories,
                    cat
                ]);
            }
        }
    }["QueryPage[toggleCategory]"];
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = ({
            "QueryPage[handleCategoryChange]": (category_0, nextCategoryState)=>{
                setAppState({
                    "QueryPage[handleCategoryChange > setAppState()]": (prev_0)=>({
                            ...prev_0,
                            [category_0]: nextCategoryState
                        })
                }["QueryPage[handleCategoryChange > setAppState()]"]);
            }
        })["QueryPage[handleCategoryChange]"];
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    const handleCategoryChange = t4;
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = ({
            "QueryPage[handleCustomQueryParsed]": (parsed)=>{
                const parsedData = parsed.parsed || parsed.raw;
                if (parsedData) {
                    setCustomParsedPrompt(JSON.stringify(parsedData, null, 2));
                } else {
                    setCustomParsedPrompt(null);
                }
            }
        })["QueryPage[handleCustomQueryParsed]"];
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    const handleCustomQueryParsed = t5;
    let t6;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = ({
            "QueryPage[restartAll]": ()=>{
                setAppState({});
                setCustomParsedPrompt(null);
                setSelectedCategories([]);
                setResult(null);
                setIsLoading(false);
            }
        })["QueryPage[restartAll]"];
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    const restartAll = t6;
    let t7;
    if ($[8] !== setShowPromptModal) {
        t7 = ({
            "QueryPage[handleShowPrompt]": ()=>{
                setShowPromptModal(true);
            }
        })["QueryPage[handleShowPrompt]"];
        $[8] = setShowPromptModal;
        $[9] = t7;
    } else {
        t7 = $[9];
    }
    const handleShowPrompt = t7;
    let t8;
    if ($[10] !== appState || $[11] !== customParsedPrompt || $[12] !== setShowPromptModal) {
        t8 = ({
            "QueryPage[handleSubmit]": async (confirmedPrompt)=>{
                setShowPromptModal(false);
                setIsLoading(true);
                setResult(null);
                const finalPrompt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f$utils$2f$prompt$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateLLMPrompt"])(appState, customParsedPrompt);
                ;
                try {
                    const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f$api$2f$backend$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sendQuery"])(finalPrompt);
                    setResult(res);
                } catch (t9) {
                    const e = t9;
                    console.error(e);
                    setResult({
                        error: "Failed to contact backend."
                    });
                }
                setIsLoading(false);
            }
        })["QueryPage[handleSubmit]"];
        $[10] = appState;
        $[11] = customParsedPrompt;
        $[12] = setShowPromptModal;
        $[13] = t8;
    } else {
        t8 = $[13];
    }
    const handleSubmit = t8;
    if (loadingCatalog) {
        let t9;
        if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
            t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f$components$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/frontend/src/app/page.tsx",
                        lineNumber: 196,
                        columnNumber: 14
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f$components$2f$LoadingView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        message: "Loading catalog..."
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/app/page.tsx",
                        lineNumber: 196,
                        columnNumber: 24
                    }, this)
                ]
            }, void 0, true);
            $[14] = t9;
        } else {
            t9 = $[14];
        }
        return t9;
    }
    if (isLoading) {
        let t9;
        if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
            t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f$components$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/frontend/src/app/page.tsx",
                        lineNumber: 206,
                        columnNumber: 14
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f$components$2f$LoadingView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/frontend/src/app/page.tsx",
                        lineNumber: 206,
                        columnNumber: 24
                    }, this)
                ]
            }, void 0, true);
            $[15] = t9;
        } else {
            t9 = $[15];
        }
        return t9;
    }
    if (result) {
        let t9;
        if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
            t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f$components$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/frontend/src/app/page.tsx",
                lineNumber: 216,
                columnNumber: 12
            }, this);
            $[16] = t9;
        } else {
            t9 = $[16];
        }
        let t10;
        if ($[17] !== result) {
            t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    t9,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full max-w-3xl mx-auto pt-10 px-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f$components$2f$ResultView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            result: result,
                            onRestart: restartAll
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/app/page.tsx",
                            lineNumber: 223,
                            columnNumber: 72
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/app/page.tsx",
                        lineNumber: 223,
                        columnNumber: 19
                    }, this)
                ]
            }, void 0, true);
            $[17] = result;
            $[18] = t10;
        } else {
            t10 = $[18];
        }
        return t10;
    }
    let t9;
    if ($[19] !== appState || $[20] !== customParsedPrompt) {
        t9 = Object.keys(appState).length > 0 && Object.values(appState).some(_QueryPageAnonymous) || customParsedPrompt;
        $[19] = appState;
        $[20] = customParsedPrompt;
        $[21] = t9;
    } else {
        t9 = $[21];
    }
    const canSubmit = t9;
    let t10;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f$components$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/frontend/src/app/page.tsx",
            lineNumber: 243,
            columnNumber: 11
        }, this);
        $[22] = t10;
    } else {
        t10 = $[22];
    }
    const t11 = "w-full max-w-7xl mx-auto pt-10 px-4 pb-20";
    let t12;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
            className: "text-center mb-10",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-3xl font-bold",
                    children: "RoadMarshal AI"
                }, void 0, false, {
                    fileName: "[project]/frontend/src/app/page.tsx",
                    lineNumber: 251,
                    columnNumber: 49
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-lg font-semibold text-zinc-700 dark:text-zinc-200 mt-3",
                    children: "Hi — how can I assist you today?"
                }, void 0, false, {
                    fileName: "[project]/frontend/src/app/page.tsx",
                    lineNumber: 251,
                    columnNumber: 103
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/app/page.tsx",
            lineNumber: 251,
            columnNumber: 11
        }, this);
        $[23] = t12;
    } else {
        t12 = $[23];
    }
    const t13 = "flex flex-wrap gap-3 justify-center mb-8";
    const t14 = categories.map({
        "QueryPage[categories.map()]": (cat_1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Chip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                label: getCategoryDisplayName(cat_1),
                selected: selectedCategories.includes(cat_1),
                onClick: {
                    "QueryPage[categories.map() > <Chip>.onClick]": ()=>toggleCategory(cat_1)
                }["QueryPage[categories.map() > <Chip>.onClick]"]
            }, cat_1, false, {
                fileName: "[project]/frontend/src/app/page.tsx",
                lineNumber: 258,
                columnNumber: 45
            }, this)
    }["QueryPage[categories.map()]"]);
    let t15;
    if ($[24] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t13,
            children: t14
        }, void 0, false, {
            fileName: "[project]/frontend/src/app/page.tsx",
            lineNumber: 264,
            columnNumber: 11
        }, this);
        $[24] = t14;
        $[25] = t15;
    } else {
        t15 = $[25];
    }
    let t16;
    if ($[26] !== appState || $[27] !== catalog || $[28] !== handleCategoryChange || $[29] !== selectedCategories) {
        let t17;
        if ($[31] !== appState || $[32] !== catalog || $[33] !== handleCategoryChange) {
            t17 = ({
                "QueryPage[(anonymous)()]": (cat_3)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f$components$2f$CategoryCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        id: cat_3,
                        catalog: catalog,
                        value: appState[cat_3] || {},
                        onChange: {
                            "QueryPage[(anonymous)() > <CategoryCard>.onChange]": (next_0)=>handleCategoryChange(cat_3, next_0)
                        }["QueryPage[(anonymous)() > <CategoryCard>.onChange]"]
                    }, cat_3, false, {
                        fileName: "[project]/frontend/src/app/page.tsx",
                        lineNumber: 275,
                        columnNumber: 46
                    }, this)
            })["QueryPage[(anonymous)()]"];
            $[31] = appState;
            $[32] = catalog;
            $[33] = handleCategoryChange;
            $[34] = t17;
        } else {
            t17 = $[34];
        }
        t16 = selectedCategories.filter(_QueryPageSelectedCategoriesFilter).map(t17);
        $[26] = appState;
        $[27] = catalog;
        $[28] = handleCategoryChange;
        $[29] = selectedCategories;
        $[30] = t16;
    } else {
        t16 = $[30];
    }
    let t17;
    if ($[35] !== handleCustomQueryParsed || $[36] !== selectedCategories) {
        t17 = selectedCategories.includes("Custom Query") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f$components$2f$CustomQueryBox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            onParsed: handleCustomQueryParsed
        }, void 0, false, {
            fileName: "[project]/frontend/src/app/page.tsx",
            lineNumber: 297,
            columnNumber: 58
        }, this);
        $[35] = handleCustomQueryParsed;
        $[36] = selectedCategories;
        $[37] = t17;
    } else {
        t17 = $[37];
    }
    let t18;
    if ($[38] !== t16 || $[39] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 md:grid-cols-2 gap-6",
            children: [
                t16,
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/app/page.tsx",
            lineNumber: 306,
            columnNumber: 11
        }, this);
        $[38] = t16;
        $[39] = t17;
        $[40] = t18;
    } else {
        t18 = $[40];
    }
    let t19;
    if ($[41] !== appState || $[42] !== canSubmit || $[43] !== customParsedPrompt || $[44] !== handleShowPrompt) {
        t19 = canSubmit && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-10 border-t pt-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-4 p-4 bg-zinc-50 dark:bg-zinc-800 rounded-lg",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-sm font-semibold mb-2",
                            children: "Preview your query:"
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/app/page.tsx",
                            lineNumber: 315,
                            columnNumber: 126
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                            className: "text-sm text-zinc-700 dark:text-zinc-300 whitespace-pre-wrap font-sans",
                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f$utils$2f$prompt$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateHumanPrompt"])(appState, customParsedPrompt) || "No query to preview"
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/app/page.tsx",
                            lineNumber: 315,
                            columnNumber: 193
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/app/page.tsx",
                    lineNumber: 315,
                    columnNumber: 61
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-end",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleShowPrompt,
                        className: "px-6 py-3 bg-emerald-600 text-white rounded-lg font-semibold shadow hover:bg-emerald-700 transition",
                        children: "Review & Submit to AI"
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/app/page.tsx",
                        lineNumber: 315,
                        columnNumber: 403
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/frontend/src/app/page.tsx",
                    lineNumber: 315,
                    columnNumber: 369
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/app/page.tsx",
            lineNumber: 315,
            columnNumber: 24
        }, this);
        $[41] = appState;
        $[42] = canSubmit;
        $[43] = customParsedPrompt;
        $[44] = handleShowPrompt;
        $[45] = t19;
    } else {
        t19 = $[45];
    }
    let t20;
    if ($[46] !== t12 || $[47] !== t15 || $[48] !== t18 || $[49] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t11,
            children: [
                t12,
                t15,
                t18,
                t19
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/app/page.tsx",
            lineNumber: 326,
            columnNumber: 11
        }, this);
        $[46] = t12;
        $[47] = t15;
        $[48] = t18;
        $[49] = t19;
        $[50] = t20;
    } else {
        t20 = $[50];
    }
    let t21;
    if ($[51] !== appState || $[52] !== customParsedPrompt || $[53] !== handleSubmit || $[54] !== setShowPromptModal || $[55] !== showPromptModal) {
        t21 = showPromptModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f$components$2f$FinalPromptModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            initial: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f$utils$2f$prompt$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateHumanPrompt"])(appState, customParsedPrompt),
            onConfirm: {
                "QueryPage[<FinalPromptModal>.onConfirm]": ()=>handleSubmit()
            }["QueryPage[<FinalPromptModal>.onConfirm]"],
            onClose: {
                "QueryPage[<FinalPromptModal>.onClose]": ()=>setShowPromptModal(false)
            }["QueryPage[<FinalPromptModal>.onClose]"]
        }, void 0, false, {
            fileName: "[project]/frontend/src/app/page.tsx",
            lineNumber: 337,
            columnNumber: 30
        }, this);
        $[51] = appState;
        $[52] = customParsedPrompt;
        $[53] = handleSubmit;
        $[54] = setShowPromptModal;
        $[55] = showPromptModal;
        $[56] = t21;
    } else {
        t21 = $[56];
    }
    let t22;
    if ($[57] !== t10 || $[58] !== t20 || $[59] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                t10,
                t20,
                t21
            ]
        }, void 0, true);
        $[57] = t10;
        $[58] = t20;
        $[59] = t21;
        $[60] = t22;
    } else {
        t22 = $[60];
    }
    return t22;
}
_s(QueryPage, "TGOUPlaHwkgPBoumldvPclugv1s=");
_c = QueryPage;
function _QueryPageSelectedCategoriesFilter(cat_2) {
    return cat_2 !== "Custom Query";
}
function _QueryPageAnonymous(cat_0) {
    return Object.values(cat_0).length > 0;
}
function _QueryPageGetCategoryDisplayName(category) {
    if (category === "Traffic Calming Measures") {
        return "Traffic Calming";
    }
    return category;
}
var _c;
__turbopack_context__.k.register(_c, "QueryPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=frontend_src_b1c15ed3._.js.map