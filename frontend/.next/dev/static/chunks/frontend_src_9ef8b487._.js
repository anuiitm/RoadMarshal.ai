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
        return customParsedPrompt ? `Custom: ${customParsedPrompt}` : "";
    }
    let parts = [];
    for (const category of Object.keys(state)){
        const types = state[category];
        if (!types || Object.keys(types).length === 0) continue;
        parts.push(`${category}:`);
        for (const typeName of Object.keys(types)){
            const typeState = types[typeName];
            parts.push(`  ${typeName}:`);
            for (const r of typeState.rows){
                const probs = r.problems && r.problems.length ? r.problems.join(" | ") : "No problem selected";
                const speed = r.speed ? ` at ${r.speed}` : "";
                const notes = r.notes ? ` (${r.notes})` : "";
                parts.push(`    • ${probs}${speed}${notes}`);
            }
        }
    }
    if (customParsedPrompt) {
        parts.push("");
        parts.push("Custom input (parsed):");
        parts.push(customParsedPrompt);
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
"[project]/frontend/src/components/ui/card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardAction",
    ()=>CardAction,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
function Card(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "82896d17a6dda3f36c69d8506eca599611e5e9d1ca1c1946b81fd4cc43ad4947") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "82896d17a6dda3f36c69d8506eca599611e5e9d1ca1c1946b81fd4cc43ad4947";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "data-slot": "card",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/frontend/src/components/ui/card.tsx",
            lineNumber: 36,
            columnNumber: 10
        }, this);
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
}
_c = Card;
function CardHeader(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "82896d17a6dda3f36c69d8506eca599611e5e9d1ca1c1946b81fd4cc43ad4947") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "82896d17a6dda3f36c69d8506eca599611e5e9d1ca1c1946b81fd4cc43ad4947";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "data-slot": "card-header",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/frontend/src/components/ui/card.tsx",
            lineNumber: 77,
            columnNumber: 10
        }, this);
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
}
_c1 = CardHeader;
function CardTitle(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "82896d17a6dda3f36c69d8506eca599611e5e9d1ca1c1946b81fd4cc43ad4947") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "82896d17a6dda3f36c69d8506eca599611e5e9d1ca1c1946b81fd4cc43ad4947";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("leading-none font-semibold", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "data-slot": "card-title",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/frontend/src/components/ui/card.tsx",
            lineNumber: 118,
            columnNumber: 10
        }, this);
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
}
_c2 = CardTitle;
function CardDescription(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "82896d17a6dda3f36c69d8506eca599611e5e9d1ca1c1946b81fd4cc43ad4947") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "82896d17a6dda3f36c69d8506eca599611e5e9d1ca1c1946b81fd4cc43ad4947";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground text-sm", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "data-slot": "card-description",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/frontend/src/components/ui/card.tsx",
            lineNumber: 159,
            columnNumber: 10
        }, this);
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
}
_c3 = CardDescription;
function CardAction(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "82896d17a6dda3f36c69d8506eca599611e5e9d1ca1c1946b81fd4cc43ad4947") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "82896d17a6dda3f36c69d8506eca599611e5e9d1ca1c1946b81fd4cc43ad4947";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "data-slot": "card-action",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/frontend/src/components/ui/card.tsx",
            lineNumber: 200,
            columnNumber: 10
        }, this);
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
}
_c4 = CardAction;
function CardContent(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "82896d17a6dda3f36c69d8506eca599611e5e9d1ca1c1946b81fd4cc43ad4947") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "82896d17a6dda3f36c69d8506eca599611e5e9d1ca1c1946b81fd4cc43ad4947";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-6", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "data-slot": "card-content",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/frontend/src/components/ui/card.tsx",
            lineNumber: 241,
            columnNumber: 10
        }, this);
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
}
_c5 = CardContent;
function CardFooter(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "82896d17a6dda3f36c69d8506eca599611e5e9d1ca1c1946b81fd4cc43ad4947") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "82896d17a6dda3f36c69d8506eca599611e5e9d1ca1c1946b81fd4cc43ad4947";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center px-6 [.border-t]:pt-6", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "data-slot": "card-footer",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/frontend/src/components/ui/card.tsx",
            lineNumber: 282,
            columnNumber: 10
        }, this);
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
}
_c6 = CardFooter;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "Card");
__turbopack_context__.k.register(_c1, "CardHeader");
__turbopack_context__.k.register(_c2, "CardTitle");
__turbopack_context__.k.register(_c3, "CardDescription");
__turbopack_context__.k.register(_c4, "CardAction");
__turbopack_context__.k.register(_c5, "CardContent");
__turbopack_context__.k.register(_c6, "CardFooter");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const subgroupColors = [
    "bg-rose-100 text-rose-800",
    "bg-amber-100 text-amber-800",
    "bg-cyan-100 text-cyan-800",
    "bg-emerald-100 text-emerald-800"
];
function CategoryCard(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(44);
    if ($[0] !== "a0ab695c72bbdeda12255b0cd39d0e9c2e1ad7b684bf04a995a87a019bfb5b62") {
        for(let $i = 0; $i < 44; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a0ab695c72bbdeda12255b0cd39d0e9c2e1ad7b684bf04a995a87a019bfb5b62";
    }
    const { id, catalog, value, onChange } = t0;
    let t1;
    if ($[1] !== catalog || $[2] !== id) {
        t1 = catalog?.[id] ? Object.keys(catalog[id]) : [];
        $[1] = catalog;
        $[2] = id;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    const types = t1;
    let t2;
    if ($[4] !== onChange || $[5] !== value) {
        t2 = ({
            "CategoryCard[toggleType]": (t)=>{
                const next = {
                    ...value || {}
                };
                if (next[t]) {
                    delete next[t];
                } else {
                    next[t] = {
                        rows: [
                            {
                                problems: [],
                                speed: "",
                                notes: ""
                            }
                        ]
                    };
                }
                onChange(next);
            }
        })["CategoryCard[toggleType]"];
        $[4] = onChange;
        $[5] = value;
        $[6] = t2;
    } else {
        t2 = $[6];
    }
    const toggleType = t2;
    let t3;
    if ($[7] !== onChange || $[8] !== value) {
        t3 = ({
            "CategoryCard[addRow]": (t_0)=>{
                const next_0 = {
                    ...value || {}
                };
                const tx = next_0[t_0] || {
                    rows: []
                };
                tx.rows = [
                    ...tx.rows,
                    {
                        problems: [],
                        speed: "",
                        notes: ""
                    }
                ];
                next_0[t_0] = tx;
                onChange(next_0);
            }
        })["CategoryCard[addRow]"];
        $[7] = onChange;
        $[8] = value;
        $[9] = t3;
    } else {
        t3 = $[9];
    }
    const addRow = t3;
    let t4;
    if ($[10] !== onChange || $[11] !== value) {
        t4 = ({
            "CategoryCard[removeRow]": (t_1, idx)=>{
                const next_1 = {
                    ...value || {}
                };
                const tx_0 = {
                    ...next_1[t_1] || {
                        rows: []
                    }
                };
                tx_0.rows = tx_0.rows.filter({
                    "CategoryCard[removeRow > tx_0.rows.filter()]": (_, i)=>i !== idx
                }["CategoryCard[removeRow > tx_0.rows.filter()]"]);
                next_1[t_1] = tx_0;
                onChange(next_1);
            }
        })["CategoryCard[removeRow]"];
        $[10] = onChange;
        $[11] = value;
        $[12] = t4;
    } else {
        t4 = $[12];
    }
    const removeRow = t4;
    let t5;
    if ($[13] !== onChange || $[14] !== value) {
        t5 = ({
            "CategoryCard[toggleProblem]": (t_2, rowIdx, p)=>{
                const next_2 = {
                    ...value || {}
                };
                const tx_1 = next_2[t_2] || {
                    rows: []
                };
                const row = {
                    ...tx_1.rows[rowIdx]
                };
                row.problems = row.problems || [];
                row.problems = row.problems.includes(p) ? row.problems.filter({
                    "CategoryCard[toggleProblem > row.problems.filter()]": (x)=>x !== p
                }["CategoryCard[toggleProblem > row.problems.filter()]"]) : [
                    ...row.problems,
                    p
                ];
                tx_1.rows[rowIdx] = row;
                next_2[t_2] = tx_1;
                onChange(next_2);
            }
        })["CategoryCard[toggleProblem]"];
        $[13] = onChange;
        $[14] = value;
        $[15] = t5;
    } else {
        t5 = $[15];
    }
    const toggleProblem = t5;
    let t6;
    if ($[16] !== onChange || $[17] !== value) {
        t6 = ({
            "CategoryCard[setField]": (t_3, rowIdx_0, field, val)=>{
                const next_3 = {
                    ...value || {}
                };
                const tx_2 = next_3[t_3] || {
                    rows: []
                };
                const row_0 = {
                    ...tx_2.rows[rowIdx_0] || {
                        problems: []
                    }
                };
                row_0[field] = val;
                tx_2.rows[rowIdx_0] = row_0;
                next_3[t_3] = tx_2;
                onChange(next_3);
            }
        })["CategoryCard[setField]"];
        $[16] = onChange;
        $[17] = value;
        $[18] = t6;
    } else {
        t6 = $[18];
    }
    const setField = t6;
    let t7;
    if ($[19] !== id) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                className: "text-lg",
                children: id
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                lineNumber: 173,
                columnNumber: 22
            }, this)
        }, void 0, false, {
            fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
            lineNumber: 173,
            columnNumber: 10
        }, this);
        $[19] = id;
        $[20] = t7;
    } else {
        t7 = $[20];
    }
    let t8;
    if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-2 text-sm font-medium",
            children: "Select one or more types"
        }, void 0, false, {
            fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
            lineNumber: 181,
            columnNumber: 10
        }, this);
        $[21] = t8;
    } else {
        t8 = $[21];
    }
    let t9;
    if ($[22] !== toggleType || $[23] !== types || $[24] !== value) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t8,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap gap-2",
                    children: types.map({
                        "CategoryCard[types.map()]": (t_4)=>{
                            const active = Boolean(value && value[t_4]);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: {
                                    "CategoryCard[types.map() > <button>.onClick]": ()=>toggleType(t_4)
                                }["CategoryCard[types.map() > <button>.onClick]"],
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("px-3 py-1 rounded-full text-sm border transition-all", active ? "bg-blue-600 text-white border-blue-600 shadow" : "bg-white dark:bg-zinc-800 border-zinc-700"),
                                children: t_4
                            }, t_4, false, {
                                fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                                lineNumber: 191,
                                columnNumber: 20
                            }, this);
                        }
                    }["CategoryCard[types.map()]"])
                }, void 0, false, {
                    fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                    lineNumber: 188,
                    columnNumber: 19
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
            lineNumber: 188,
            columnNumber: 10
        }, this);
        $[22] = toggleType;
        $[23] = types;
        $[24] = value;
        $[25] = t9;
    } else {
        t9 = $[25];
    }
    let t10;
    if ($[26] !== value) {
        t10 = Object.keys(value || {});
        $[26] = value;
        $[27] = t10;
    } else {
        t10 = $[27];
    }
    let t11;
    if ($[28] !== addRow || $[29] !== catalog || $[30] !== id || $[31] !== onChange || $[32] !== removeRow || $[33] !== setField || $[34] !== t10 || $[35] !== toggleProblem || $[36] !== value) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: t10.map({
                    "CategoryCard[(anonymous)()]": (t_5)=>{
                        const tx_3 = value[t_5];
                        const problemsList = catalog?.[id]?.[t_5]?.problems || [];
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: -6
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            exit: {
                                opacity: 0,
                                y: -6
                            },
                            className: "p-4 border rounded-lg bg-zinc-50 dark:bg-zinc-900",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between mb-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-semibold",
                                            children: t_5
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                                            lineNumber: 226,
                                            columnNumber: 134
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: {
                                                        "CategoryCard[(anonymous)() > <button>.onClick]": ()=>addRow(t_5)
                                                    }["CategoryCard[(anonymous)() > <button>.onClick]"],
                                                    className: "px-3 py-1 bg-zinc-200 rounded",
                                                    children: "+ Row"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                                                    lineNumber: 226,
                                                    columnNumber: 204
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: {
                                                        "CategoryCard[(anonymous)() > <button>.onClick]": ()=>{
                                                            const next_4 = {
                                                                ...value || {}
                                                            };
                                                            delete next_4[t_5];
                                                            onChange(next_4);
                                                        }
                                                    }["CategoryCard[(anonymous)() > <button>.onClick]"],
                                                    className: "px-3 py-1 bg-zinc-100 rounded",
                                                    children: "Unselect"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                                                    lineNumber: 228,
                                                    columnNumber: 128
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                                            lineNumber: 226,
                                            columnNumber: 176
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                                    lineNumber: 226,
                                    columnNumber: 78
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3",
                                    children: tx_3.rows.map({
                                        "CategoryCard[(anonymous)() > tx_3.rows.map()]": (row_1, idx_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                initial: {
                                                    opacity: 0,
                                                    scale: 0.98
                                                },
                                                animate: {
                                                    opacity: 1,
                                                    scale: 1
                                                },
                                                exit: {
                                                    opacity: 0,
                                                    scale: 0.98
                                                },
                                                className: "p-3 border rounded",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-sm text-zinc-600 mb-2",
                                                        children: [
                                                            "Row ",
                                                            idx_0 + 1
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                                                        lineNumber: 246,
                                                        columnNumber: 53
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid md:grid-cols-2 gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-xs font-medium mb-1",
                                                                        children: "Problems"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                                                                        lineNumber: 246,
                                                                        columnNumber: 166
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex flex-wrap gap-2",
                                                                        children: problemsList.map({
                                                                            "CategoryCard[(anonymous)() > tx_3.rows.map() > problemsList.map()]": (p_0, gi)=>{
                                                                                const active_0 = (row_1.problems || []).includes(p_0);
                                                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    onClick: {
                                                                                        "CategoryCard[(anonymous)() > tx_3.rows.map() > problemsList.map() > <button>.onClick]": ()=>toggleProblem(t_5, idx_0, p_0)
                                                                                    }["CategoryCard[(anonymous)() > tx_3.rows.map() > problemsList.map() > <button>.onClick]"],
                                                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("px-3 py-1 rounded-full text-sm border", active_0 ? `${subgroupColors[gi % subgroupColors.length]} border-transparent` : "bg-white dark:bg-zinc-800 border-zinc-700"),
                                                                                    children: p_0
                                                                                }, p_0, false, {
                                                                                    fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                                                                                    lineNumber: 249,
                                                                                    columnNumber: 38
                                                                                }, this);
                                                                            }
                                                                        }["CategoryCard[(anonymous)() > tx_3.rows.map() > problemsList.map()]"])
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                                                                        lineNumber: 246,
                                                                        columnNumber: 222
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                                                                lineNumber: 246,
                                                                columnNumber: 161
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "space-y-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            value: row_1.speed || "",
                                                                            onChange: {
                                                                                "CategoryCard[(anonymous)() > tx_3.rows.map() > <input>.onChange]": (e)=>setField(t_5, idx_0, "speed", e.target.value)
                                                                            }["CategoryCard[(anonymous)() > tx_3.rows.map() > <input>.onChange]"],
                                                                            placeholder: "Speed (e.g., 60 km/h)",
                                                                            className: "w-full p-2 border rounded bg-transparent"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                                                                            lineNumber: 253,
                                                                            columnNumber: 144
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                                                                        lineNumber: 253,
                                                                        columnNumber: 139
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            value: row_1.notes || "",
                                                                            onChange: {
                                                                                "CategoryCard[(anonymous)() > tx_3.rows.map() > <input>.onChange]": (e_0)=>setField(t_5, idx_0, "notes", e_0.target.value)
                                                                            }["CategoryCard[(anonymous)() > tx_3.rows.map() > <input>.onChange]"],
                                                                            placeholder: "Short notes (optional)",
                                                                            className: "w-full p-2 border rounded bg-transparent"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                                                                            lineNumber: 255,
                                                                            columnNumber: 200
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                                                                        lineNumber: 255,
                                                                        columnNumber: 195
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                                                                lineNumber: 253,
                                                                columnNumber: 112
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                                                        lineNumber: 246,
                                                        columnNumber: 118
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-end mt-3 gap-2",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: {
                                                                "CategoryCard[(anonymous)() > tx_3.rows.map() > <button>.onClick]": ()=>removeRow(t_5, idx_0)
                                                            }["CategoryCard[(anonymous)() > tx_3.rows.map() > <button>.onClick]"],
                                                            className: "px-3 py-1 rounded bg-red-50 text-red-700",
                                                            children: "Remove row"
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                                                            lineNumber: 257,
                                                            columnNumber: 253
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                                                        lineNumber: 257,
                                                        columnNumber: 208
                                                    }, this)
                                                ]
                                            }, idx_0, true, {
                                                fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                                                lineNumber: 237,
                                                columnNumber: 86
                                            }, this)
                                    }["CategoryCard[(anonymous)() > tx_3.rows.map()]"])
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                                    lineNumber: 236,
                                    columnNumber: 143
                                }, this)
                            ]
                        }, t_5, true, {
                            fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                            lineNumber: 217,
                            columnNumber: 20
                        }, this);
                    }
                }["CategoryCard[(anonymous)()]"])
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                lineNumber: 213,
                columnNumber: 38
            }, this)
        }, void 0, false, {
            fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
            lineNumber: 213,
            columnNumber: 11
        }, this);
        $[28] = addRow;
        $[29] = catalog;
        $[30] = id;
        $[31] = onChange;
        $[32] = removeRow;
        $[33] = setField;
        $[34] = t10;
        $[35] = toggleProblem;
        $[36] = value;
        $[37] = t11;
    } else {
        t11 = $[37];
    }
    let t12;
    if ($[38] !== t11 || $[39] !== t9) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
            className: "space-y-4",
            children: [
                t9,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
            lineNumber: 278,
            columnNumber: 11
        }, this);
        $[38] = t11;
        $[39] = t9;
        $[40] = t12;
    } else {
        t12 = $[40];
    }
    let t13;
    if ($[41] !== t12 || $[42] !== t7) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            className: "border",
            children: [
                t7,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
            lineNumber: 287,
            columnNumber: 11
        }, this);
        $[41] = t12;
        $[42] = t7;
        $[43] = t13;
    } else {
        t13 = $[43];
    }
    return t13;
}
_c = CategoryCard;
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
"[project]/frontend/src/app/components/ResultView.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// frontend/src/app/components/ResultView.tsx
__turbopack_context__.s([
    "default",
    ()=>ResultView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/components/MarkdownRenderer'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
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
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MarkdownRenderer, {
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
function QueryPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(49);
    if ($[0] !== "216ee86eb792fce04eba30790c35af9ed72d88e5c50d2f399408d5adb92b833a") {
        for(let $i = 0; $i < 49; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "216ee86eb792fce04eba30790c35af9ed72d88e5c50d2f399408d5adb92b833a";
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
        "Traffic Calming",
        "Custom Query"
    ];
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [result, setResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
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
            "QueryPage[handleCategoryChange]": (category, nextCategoryState)=>{
                setAppState({
                    "QueryPage[handleCategoryChange > setAppState()]": (prev_0)=>({
                            ...prev_0,
                            [category]: nextCategoryState
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
    if ($[8] !== appState || $[9] !== customParsedPrompt) {
        t7 = ({
            "QueryPage[handleSubmit]": async ()=>{
                setIsLoading(true);
                setResult(null);
                const finalPrompt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f$utils$2f$prompt$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateLLMPrompt"])(appState, customParsedPrompt);
                ;
                try {
                    const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f$api$2f$backend$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sendQuery"])(finalPrompt);
                    setResult(res);
                } catch (t8) {
                    const e = t8;
                    console.error(e);
                    setResult({
                        error: "Failed to contact backend."
                    });
                }
                setIsLoading(false);
            }
        })["QueryPage[handleSubmit]"];
        $[8] = appState;
        $[9] = customParsedPrompt;
        $[10] = t7;
    } else {
        t7 = $[10];
    }
    const handleSubmit = t7;
    if (loadingCatalog) {
        let t8;
        if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
            t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f$components$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/frontend/src/app/page.tsx",
                        lineNumber: 178,
                        columnNumber: 14
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f$components$2f$LoadingView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        message: "Loading catalog..."
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/app/page.tsx",
                        lineNumber: 178,
                        columnNumber: 24
                    }, this)
                ]
            }, void 0, true);
            $[11] = t8;
        } else {
            t8 = $[11];
        }
        return t8;
    }
    if (isLoading) {
        let t8;
        if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
            t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f$components$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/frontend/src/app/page.tsx",
                        lineNumber: 188,
                        columnNumber: 14
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f$components$2f$LoadingView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/frontend/src/app/page.tsx",
                        lineNumber: 188,
                        columnNumber: 24
                    }, this)
                ]
            }, void 0, true);
            $[12] = t8;
        } else {
            t8 = $[12];
        }
        return t8;
    }
    if (result) {
        let t8;
        if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
            t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f$components$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/frontend/src/app/page.tsx",
                lineNumber: 198,
                columnNumber: 12
            }, this);
            $[13] = t8;
        } else {
            t8 = $[13];
        }
        let t9;
        if ($[14] !== result) {
            t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    t8,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full max-w-3xl mx-auto pt-10 px-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f$components$2f$ResultView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            result: result,
                            onRestart: restartAll
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/app/page.tsx",
                            lineNumber: 205,
                            columnNumber: 71
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/app/page.tsx",
                        lineNumber: 205,
                        columnNumber: 18
                    }, this)
                ]
            }, void 0, true);
            $[14] = result;
            $[15] = t9;
        } else {
            t9 = $[15];
        }
        return t9;
    }
    let t8;
    if ($[16] !== appState || $[17] !== customParsedPrompt) {
        t8 = Object.keys(appState).length > 0 && Object.values(appState).some(_QueryPageAnonymous) || customParsedPrompt;
        $[16] = appState;
        $[17] = customParsedPrompt;
        $[18] = t8;
    } else {
        t8 = $[18];
    }
    const canSubmit = t8;
    let t9;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f$components$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/frontend/src/app/page.tsx",
            lineNumber: 225,
            columnNumber: 10
        }, this);
        $[19] = t9;
    } else {
        t9 = $[19];
    }
    const t10 = "w-full max-w-3xl mx-auto pt-10 px-4 pb-20";
    let t11;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
            className: "text-center mb-10",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-3xl font-bold",
                    children: "RoadMarshal AI"
                }, void 0, false, {
                    fileName: "[project]/frontend/src/app/page.tsx",
                    lineNumber: 233,
                    columnNumber: 49
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-lg font-semibold text-zinc-700 dark:text-zinc-200 mt-3",
                    children: "Hi — how can I assist you today?"
                }, void 0, false, {
                    fileName: "[project]/frontend/src/app/page.tsx",
                    lineNumber: 233,
                    columnNumber: 103
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/app/page.tsx",
            lineNumber: 233,
            columnNumber: 11
        }, this);
        $[20] = t11;
    } else {
        t11 = $[20];
    }
    const t12 = "flex flex-wrap gap-3 justify-center mb-8";
    const t13 = categories.map({
        "QueryPage[categories.map()]": (cat_1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Chip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                label: cat_1,
                selected: selectedCategories.includes(cat_1),
                onClick: {
                    "QueryPage[categories.map() > <Chip>.onClick]": ()=>toggleCategory(cat_1)
                }["QueryPage[categories.map() > <Chip>.onClick]"]
            }, cat_1, false, {
                fileName: "[project]/frontend/src/app/page.tsx",
                lineNumber: 240,
                columnNumber: 45
            }, this)
    }["QueryPage[categories.map()]"]);
    let t14;
    if ($[21] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t12,
            children: t13
        }, void 0, false, {
            fileName: "[project]/frontend/src/app/page.tsx",
            lineNumber: 246,
            columnNumber: 11
        }, this);
        $[21] = t13;
        $[22] = t14;
    } else {
        t14 = $[22];
    }
    let t15;
    if ($[23] !== appState || $[24] !== catalog || $[25] !== handleCategoryChange || $[26] !== selectedCategories) {
        let t16;
        if ($[28] !== appState || $[29] !== catalog || $[30] !== handleCategoryChange) {
            t16 = ({
                "QueryPage[(anonymous)()]": (cat_3)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f$components$2f$CategoryCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        id: cat_3,
                        catalog: catalog,
                        value: appState[cat_3] || {},
                        onChange: {
                            "QueryPage[(anonymous)() > <CategoryCard>.onChange]": (next_0)=>handleCategoryChange(cat_3, next_0)
                        }["QueryPage[(anonymous)() > <CategoryCard>.onChange]"]
                    }, cat_3, false, {
                        fileName: "[project]/frontend/src/app/page.tsx",
                        lineNumber: 257,
                        columnNumber: 46
                    }, this)
            })["QueryPage[(anonymous)()]"];
            $[28] = appState;
            $[29] = catalog;
            $[30] = handleCategoryChange;
            $[31] = t16;
        } else {
            t16 = $[31];
        }
        t15 = selectedCategories.filter(_QueryPageSelectedCategoriesFilter).map(t16);
        $[23] = appState;
        $[24] = catalog;
        $[25] = handleCategoryChange;
        $[26] = selectedCategories;
        $[27] = t15;
    } else {
        t15 = $[27];
    }
    let t16;
    if ($[32] !== handleCustomQueryParsed || $[33] !== selectedCategories) {
        t16 = selectedCategories.includes("Custom Query") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f$components$2f$CustomQueryBox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            onParsed: handleCustomQueryParsed
        }, void 0, false, {
            fileName: "[project]/frontend/src/app/page.tsx",
            lineNumber: 279,
            columnNumber: 58
        }, this);
        $[32] = handleCustomQueryParsed;
        $[33] = selectedCategories;
        $[34] = t16;
    } else {
        t16 = $[34];
    }
    let t17;
    if ($[35] !== t15 || $[36] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-8",
            children: [
                t15,
                t16
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/app/page.tsx",
            lineNumber: 288,
            columnNumber: 11
        }, this);
        $[35] = t15;
        $[36] = t16;
        $[37] = t17;
    } else {
        t17 = $[37];
    }
    let t18;
    if ($[38] !== canSubmit || $[39] !== handleSubmit) {
        t18 = canSubmit && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-10 border-t pt-6 flex justify-end",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: handleSubmit,
                className: "px-6 py-3 bg-emerald-600 text-white rounded-lg font-semibold shadow",
                children: "Submit to AI"
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/page.tsx",
                lineNumber: 297,
                columnNumber: 78
            }, this)
        }, void 0, false, {
            fileName: "[project]/frontend/src/app/page.tsx",
            lineNumber: 297,
            columnNumber: 24
        }, this);
        $[38] = canSubmit;
        $[39] = handleSubmit;
        $[40] = t18;
    } else {
        t18 = $[40];
    }
    let t19;
    if ($[41] !== t11 || $[42] !== t14 || $[43] !== t17 || $[44] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t10,
            children: [
                t11,
                t14,
                t17,
                t18
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/app/page.tsx",
            lineNumber: 306,
            columnNumber: 11
        }, this);
        $[41] = t11;
        $[42] = t14;
        $[43] = t17;
        $[44] = t18;
        $[45] = t19;
    } else {
        t19 = $[45];
    }
    let t20;
    if ($[46] !== t19 || $[47] !== t9) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                t9,
                t19
            ]
        }, void 0, true);
        $[46] = t19;
        $[47] = t9;
        $[48] = t20;
    } else {
        t20 = $[48];
    }
    return t20;
}
_s(QueryPage, "BYe0GCO9x/iFCtomjyFNiBLfxk8=");
_c = QueryPage;
function _QueryPageSelectedCategoriesFilter(cat_2) {
    return cat_2 !== "Custom Query";
}
function _QueryPageAnonymous(cat_0) {
    return Object.values(cat_0).length > 0;
}
var _c;
__turbopack_context__.k.register(_c, "QueryPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=frontend_src_9ef8b487._.js.map