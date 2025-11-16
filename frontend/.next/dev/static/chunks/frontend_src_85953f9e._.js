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
        try {
            return JSON.parse(res.data.catalog);
        } catch  {
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
"[project]/frontend/src/app/query/CategoryScreen.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CategoryScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
"use client";
;
;
function CategoryScreen(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(7);
    if ($[0] !== "dfde1f2564429ca5b610706b00e8506553a9939cded724758581a5395a493cd2") {
        for(let $i = 0; $i < 7; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "dfde1f2564429ca5b610706b00e8506553a9939cded724758581a5395a493cd2";
    }
    const { catalog, onSelect } = t0;
    let t1;
    if ($[1] !== catalog) {
        t1 = Object.keys(catalog);
        $[1] = catalog;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const categories = t1;
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-xl font-semibold",
            children: "Select Category"
        }, void 0, false, {
            fileName: "[project]/frontend/src/app/query/CategoryScreen.tsx",
            lineNumber: 27,
            columnNumber: 10
        }, this);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] !== categories || $[5] !== onSelect) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6",
            children: [
                t2,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap gap-4",
                    children: categories.map({
                        "CategoryScreen[categories.map()]": (cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "px-6 py-3 rounded-xl bg-zinc-900 text-white hover:bg-zinc-700 transition",
                                onClick: {
                                    "CategoryScreen[categories.map() > <button>.onClick]": ()=>onSelect(cat)
                                }["CategoryScreen[categories.map() > <button>.onClick]"],
                                children: cat
                            }, cat, false, {
                                fileName: "[project]/frontend/src/app/query/CategoryScreen.tsx",
                                lineNumber: 35,
                                columnNumber: 54
                            }, this)
                    }["CategoryScreen[categories.map()]"])
                }, void 0, false, {
                    fileName: "[project]/frontend/src/app/query/CategoryScreen.tsx",
                    lineNumber: 34,
                    columnNumber: 41
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/app/query/CategoryScreen.tsx",
            lineNumber: 34,
            columnNumber: 10
        }, this);
        $[4] = categories;
        $[5] = onSelect;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    return t3;
}
_c = CategoryScreen;
var _c;
__turbopack_context__.k.register(_c, "CategoryScreen");
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
    const subtypes = catalog[category] || {};
    const issueSet = new Set();
    Object.values(subtypes).forEach((subtypeObj)=>{
        if (Array.isArray(subtypeObj.problems)) {
            subtypeObj.problems.forEach((p)=>issueSet.add(p.trim()));
        }
    });
    return Array.from(issueSet).sort();
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/app/query/IssueScreen.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>IssueScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$computeIssues$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/lib/computeIssues.ts [app-client] (ecmascript)");
"use client";
;
;
;
function IssueScreen(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(19);
    if ($[0] !== "ca21b26f3208890dffb625a2959e25eb2ea117b43f2a36a3d53de2ca93d2f12f") {
        for(let $i = 0; $i < 19; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ca21b26f3208890dffb625a2959e25eb2ea117b43f2a36a3d53de2ca93d2f12f";
    }
    const { category, catalog, onSelect } = t0;
    let t1;
    let t2;
    let t3;
    let t4;
    if ($[1] !== catalog || $[2] !== category || $[3] !== onSelect) {
        const issues = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$computeIssues$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["computeIssuesForCategory"])(category, catalog);
        t3 = "space-y-6";
        if ($[8] !== category) {
            t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-xl font-semibold",
                children: [
                    category,
                    " → Select Issue"
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/app/query/IssueScreen.tsx",
                lineNumber: 26,
                columnNumber: 12
            }, this);
            $[8] = category;
            $[9] = t4;
        } else {
            t4 = $[9];
        }
        t1 = "flex flex-wrap gap-3";
        let t5;
        if ($[10] !== onSelect) {
            t5 = ({
                "IssueScreen[issues.map()]": (issue)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: {
                            "IssueScreen[issues.map() > <button>.onClick]": ()=>onSelect(issue)
                        }["IssueScreen[issues.map() > <button>.onClick]"],
                        className: "px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500",
                        children: issue
                    }, issue, false, {
                        fileName: "[project]/frontend/src/app/query/IssueScreen.tsx",
                        lineNumber: 36,
                        columnNumber: 47
                    }, this)
            })["IssueScreen[issues.map()]"];
            $[10] = onSelect;
            $[11] = t5;
        } else {
            t5 = $[11];
        }
        t2 = issues.map(t5);
        $[1] = catalog;
        $[2] = category;
        $[3] = onSelect;
        $[4] = t1;
        $[5] = t2;
        $[6] = t3;
        $[7] = t4;
    } else {
        t1 = $[4];
        t2 = $[5];
        t3 = $[6];
        t4 = $[7];
    }
    let t5;
    if ($[12] !== t1 || $[13] !== t2) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t1,
            children: t2
        }, void 0, false, {
            fileName: "[project]/frontend/src/app/query/IssueScreen.tsx",
            lineNumber: 61,
            columnNumber: 10
        }, this);
        $[12] = t1;
        $[13] = t2;
        $[14] = t5;
    } else {
        t5 = $[14];
    }
    let t6;
    if ($[15] !== t3 || $[16] !== t4 || $[17] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t3,
            children: [
                t4,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/app/query/IssueScreen.tsx",
            lineNumber: 70,
            columnNumber: 10
        }, this);
        $[15] = t3;
        $[16] = t4;
        $[17] = t5;
        $[18] = t6;
    } else {
        t6 = $[18];
    }
    return t6;
}
_c = IssueScreen;
var _c;
__turbopack_context__.k.register(_c, "IssueScreen");
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
"[project]/frontend/src/app/query/SubtypeScreen.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SubtypeScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$computeSubtypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/lib/computeSubtypes.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
"use client";
;
;
;
;
function SubtypeScreen(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(27);
    if ($[0] !== "7cf6c8a2fd7fd7be5ee428b3445900e5f773c3f415377f1b95a89df14daf7fa3") {
        for(let $i = 0; $i < 27; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "7cf6c8a2fd7fd7be5ee428b3445900e5f773c3f415377f1b95a89df14daf7fa3";
    }
    const { category, issue, catalog, selected, onToggle, onNext } = t0;
    let t1;
    let t2;
    let t3;
    let t4;
    if ($[1] !== catalog || $[2] !== category || $[3] !== issue || $[4] !== onToggle || $[5] !== selected) {
        const subtypes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$computeSubtypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["computeSubtypesForIssue"])(category, issue, catalog);
        t3 = "space-y-6";
        if ($[10] !== category || $[11] !== issue) {
            t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-xl font-semibold",
                children: [
                    category,
                    " → ",
                    issue,
                    " → Select Subtypes"
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/app/query/SubtypeScreen.tsx",
                lineNumber: 30,
                columnNumber: 12
            }, this);
            $[10] = category;
            $[11] = issue;
            $[12] = t4;
        } else {
            t4 = $[12];
        }
        t1 = "flex flex-wrap gap-3";
        let t5;
        if ($[13] !== onToggle || $[14] !== selected) {
            t5 = ({
                "SubtypeScreen[subtypes.map()]": (sub)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: {
                            "SubtypeScreen[subtypes.map() > <button>.onClick]": ()=>onToggle(sub)
                        }["SubtypeScreen[subtypes.map() > <button>.onClick]"],
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("px-4 py-2 border rounded-lg", selected.includes(sub) ? "bg-green-600 text-white border-green-600" : "bg-white border-zinc-300"),
                        children: sub
                    }, sub, false, {
                        fileName: "[project]/frontend/src/app/query/SubtypeScreen.tsx",
                        lineNumber: 41,
                        columnNumber: 49
                    }, this)
            })["SubtypeScreen[subtypes.map()]"];
            $[13] = onToggle;
            $[14] = selected;
            $[15] = t5;
        } else {
            t5 = $[15];
        }
        t2 = subtypes.map(t5);
        $[1] = catalog;
        $[2] = category;
        $[3] = issue;
        $[4] = onToggle;
        $[5] = selected;
        $[6] = t1;
        $[7] = t2;
        $[8] = t3;
        $[9] = t4;
    } else {
        t1 = $[6];
        t2 = $[7];
        t3 = $[8];
        t4 = $[9];
    }
    let t5;
    if ($[16] !== t1 || $[17] !== t2) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t1,
            children: t2
        }, void 0, false, {
            fileName: "[project]/frontend/src/app/query/SubtypeScreen.tsx",
            lineNumber: 69,
            columnNumber: 10
        }, this);
        $[16] = t1;
        $[17] = t2;
        $[18] = t5;
    } else {
        t5 = $[18];
    }
    let t6;
    if ($[19] !== onNext || $[20] !== selected.length) {
        t6 = selected.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: onNext,
            className: "mt-6 px-5 py-3 bg-zinc-900 text-white rounded-lg",
            children: "Next"
        }, void 0, false, {
            fileName: "[project]/frontend/src/app/query/SubtypeScreen.tsx",
            lineNumber: 78,
            columnNumber: 33
        }, this);
        $[19] = onNext;
        $[20] = selected.length;
        $[21] = t6;
    } else {
        t6 = $[21];
    }
    let t7;
    if ($[22] !== t3 || $[23] !== t4 || $[24] !== t5 || $[25] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t3,
            children: [
                t4,
                t5,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/app/query/SubtypeScreen.tsx",
            lineNumber: 87,
            columnNumber: 10
        }, this);
        $[22] = t3;
        $[23] = t4;
        $[24] = t5;
        $[25] = t6;
        $[26] = t7;
    } else {
        t7 = $[26];
    }
    return t7;
}
_c = SubtypeScreen;
var _c;
__turbopack_context__.k.register(_c, "SubtypeScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/app/query/FinalScreen.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FinalScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f$api$2f$backend$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/app/api/backend.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function FinalScreen(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(29);
    if ($[0] !== "ae123d1ff85b3bcb77dcc5a00023cee0552199da9aad61f72000022af8a67a04") {
        for(let $i = 0; $i < 29; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ae123d1ff85b3bcb77dcc5a00023cee0552199da9aad61f72000022af8a67a04";
    }
    const { category, issue, subtypes, onRestart } = t0;
    const [speed, setSpeed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [notes, setNotes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [response, setResponse] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t1;
    if ($[1] !== subtypes) {
        t1 = subtypes.join(", ");
        $[1] = subtypes;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const finalPrompt = `${category} → ${issue}\n` + `Subtypes: ${t1}\n` + (speed ? `Speed: ${speed}\n` : "") + (notes ? `Notes: ${notes}\n` : "");
    let t2;
    if ($[3] !== finalPrompt) {
        t2 = ({
            "FinalScreen[handleSubmit]": async ()=>{
                const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f$api$2f$backend$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["processQuery"])(finalPrompt);
                setResponse(result);
            }
        })["FinalScreen[handleSubmit]"];
        $[3] = finalPrompt;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    const handleSubmit = t2;
    let t3;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-xl font-semibold",
            children: "Review & Submit"
        }, void 0, false, {
            fileName: "[project]/frontend/src/app/query/FinalScreen.tsx",
            lineNumber: 48,
            columnNumber: 10
        }, this);
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] !== finalPrompt) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
            className: "bg-zinc-100 p-4 rounded text-sm",
            children: finalPrompt
        }, void 0, false, {
            fileName: "[project]/frontend/src/app/query/FinalScreen.tsx",
            lineNumber: 55,
            columnNumber: 10
        }, this);
        $[6] = finalPrompt;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    let t5;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = ({
            "FinalScreen[<input>.onChange]": (e)=>setSpeed(e.target.value)
        })["FinalScreen[<input>.onChange]"];
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    let t6;
    if ($[9] !== speed) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            value: speed,
            onChange: t5,
            placeholder: "Speed (e.g., 60 km/h)",
            className: "p-2 border rounded"
        }, void 0, false, {
            fileName: "[project]/frontend/src/app/query/FinalScreen.tsx",
            lineNumber: 72,
            columnNumber: 10
        }, this);
        $[9] = speed;
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    let t7;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = ({
            "FinalScreen[<input>.onChange]": (e_0)=>setNotes(e_0.target.value)
        })["FinalScreen[<input>.onChange]"];
        $[11] = t7;
    } else {
        t7 = $[11];
    }
    let t8;
    if ($[12] !== notes) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            value: notes,
            onChange: t7,
            placeholder: "Notes (optional)",
            className: "p-2 border rounded"
        }, void 0, false, {
            fileName: "[project]/frontend/src/app/query/FinalScreen.tsx",
            lineNumber: 89,
            columnNumber: 10
        }, this);
        $[12] = notes;
        $[13] = t8;
    } else {
        t8 = $[13];
    }
    let t9;
    if ($[14] !== t6 || $[15] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex gap-4",
            children: [
                t6,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/app/query/FinalScreen.tsx",
            lineNumber: 97,
            columnNumber: 10
        }, this);
        $[14] = t6;
        $[15] = t8;
        $[16] = t9;
    } else {
        t9 = $[16];
    }
    let t10;
    if ($[17] !== handleSubmit) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: handleSubmit,
            className: "px-5 py-3 bg-blue-600 text-white rounded-lg",
            children: "Submit"
        }, void 0, false, {
            fileName: "[project]/frontend/src/app/query/FinalScreen.tsx",
            lineNumber: 106,
            columnNumber: 11
        }, this);
        $[17] = handleSubmit;
        $[18] = t10;
    } else {
        t10 = $[18];
    }
    let t11;
    if ($[19] !== response) {
        t11 = response && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-6 p-4 border rounded bg-white",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "font-semibold mb-2",
                    children: "AI Output"
                }, void 0, false, {
                    fileName: "[project]/frontend/src/app/query/FinalScreen.tsx",
                    lineNumber: 114,
                    columnNumber: 73
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    dangerouslySetInnerHTML: {
                        __html: response.answer
                    }
                }, void 0, false, {
                    fileName: "[project]/frontend/src/app/query/FinalScreen.tsx",
                    lineNumber: 114,
                    columnNumber: 122
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/app/query/FinalScreen.tsx",
            lineNumber: 114,
            columnNumber: 23
        }, this);
        $[19] = response;
        $[20] = t11;
    } else {
        t11 = $[20];
    }
    let t12;
    if ($[21] !== onRestart) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: onRestart,
            className: "mt-4 px-5 py-2 bg-zinc-900 text-white rounded-lg",
            children: "Restart"
        }, void 0, false, {
            fileName: "[project]/frontend/src/app/query/FinalScreen.tsx",
            lineNumber: 124,
            columnNumber: 11
        }, this);
        $[21] = onRestart;
        $[22] = t12;
    } else {
        t12 = $[22];
    }
    let t13;
    if ($[23] !== t10 || $[24] !== t11 || $[25] !== t12 || $[26] !== t4 || $[27] !== t9) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6",
            children: [
                t3,
                t4,
                t9,
                t10,
                t11,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/app/query/FinalScreen.tsx",
            lineNumber: 132,
            columnNumber: 11
        }, this);
        $[23] = t10;
        $[24] = t11;
        $[25] = t12;
        $[26] = t4;
        $[27] = t9;
        $[28] = t13;
    } else {
        t13 = $[28];
    }
    return t13;
}
_s(FinalScreen, "zHX9ef7D+l2HjbYrZFgHlXuFACs=");
_c = FinalScreen;
var _c;
__turbopack_context__.k.register(_c, "FinalScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/app/query/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>QueryFlow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f$api$2f$backend$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/app/api/backend.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f$query$2f$CategoryScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/app/query/CategoryScreen.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f$query$2f$IssueScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/app/query/IssueScreen.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f$query$2f$SubtypeScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/app/query/SubtypeScreen.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f$query$2f$FinalScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/app/query/FinalScreen.tsx [app-client] (ecmascript)");
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
function QueryFlow() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(29);
    if ($[0] !== "8d9102a93d68001ef31793798eb25596fcab874804bd63f83543691221fa56c9") {
        for(let $i = 0; $i < 29; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "8d9102a93d68001ef31793798eb25596fcab874804bd63f83543691221fa56c9";
    }
    const [catalog, setCatalog] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [category, setCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [issue, setIssue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [selectedSubtypes, setSelectedSubtypes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    let t1;
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "QueryFlow[useEffect()]": ()=>{
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f$api$2f$backend$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchCatalog"])().then(setCatalog);
            }
        })["QueryFlow[useEffect()]"];
        t2 = [];
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    if (!catalog) {
        let t3;
        if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
            t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: "Loading…"
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/query/page.tsx",
                lineNumber: 49,
                columnNumber: 12
            }, this);
            $[4] = t3;
        } else {
            t3 = $[4];
        }
        return t3;
    }
    let t3;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = ({
            "QueryFlow[restart]": ()=>{
                setStep(1);
                setCategory("");
                setIssue("");
                setSelectedSubtypes([]);
            }
        })["QueryFlow[restart]"];
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    const restart = t3;
    let t4;
    if ($[6] !== catalog || $[7] !== step) {
        t4 = step === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f$query$2f$CategoryScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            catalog: catalog,
            onSelect: {
                "QueryFlow[<CategoryScreen>.onSelect]": (cat)=>{
                    setCategory(cat);
                    setStep(2);
                }
            }["QueryFlow[<CategoryScreen>.onSelect]"]
        }, void 0, false, {
            fileName: "[project]/frontend/src/app/query/page.tsx",
            lineNumber: 73,
            columnNumber: 24
        }, this);
        $[6] = catalog;
        $[7] = step;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    let t5;
    if ($[9] !== catalog || $[10] !== category || $[11] !== step) {
        t5 = step === 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f$query$2f$IssueScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            category: category,
            catalog: catalog,
            onSelect: {
                "QueryFlow[<IssueScreen>.onSelect]": (iss)=>{
                    setIssue(iss);
                    setStep(3);
                }
            }["QueryFlow[<IssueScreen>.onSelect]"]
        }, void 0, false, {
            fileName: "[project]/frontend/src/app/query/page.tsx",
            lineNumber: 87,
            columnNumber: 24
        }, this);
        $[9] = catalog;
        $[10] = category;
        $[11] = step;
        $[12] = t5;
    } else {
        t5 = $[12];
    }
    let t6;
    if ($[13] !== catalog || $[14] !== category || $[15] !== issue || $[16] !== selectedSubtypes || $[17] !== step) {
        t6 = step === 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f$query$2f$SubtypeScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            category: category,
            issue: issue,
            catalog: catalog,
            selected: selectedSubtypes,
            onToggle: {
                "QueryFlow[<SubtypeScreen>.onToggle]": (sub)=>setSelectedSubtypes({
                        "QueryFlow[<SubtypeScreen>.onToggle > setSelectedSubtypes()]": (prev)=>prev.includes(sub) ? prev.filter({
                                "QueryFlow[<SubtypeScreen>.onToggle > setSelectedSubtypes() > prev.filter()]": (x)=>x !== sub
                            }["QueryFlow[<SubtypeScreen>.onToggle > setSelectedSubtypes() > prev.filter()]"]) : [
                                ...prev,
                                sub
                            ]
                    }["QueryFlow[<SubtypeScreen>.onToggle > setSelectedSubtypes()]"])
            }["QueryFlow[<SubtypeScreen>.onToggle]"],
            onNext: {
                "QueryFlow[<SubtypeScreen>.onNext]": ()=>setStep(4)
            }["QueryFlow[<SubtypeScreen>.onNext]"]
        }, void 0, false, {
            fileName: "[project]/frontend/src/app/query/page.tsx",
            lineNumber: 102,
            columnNumber: 24
        }, this);
        $[13] = catalog;
        $[14] = category;
        $[15] = issue;
        $[16] = selectedSubtypes;
        $[17] = step;
        $[18] = t6;
    } else {
        t6 = $[18];
    }
    let t7;
    if ($[19] !== category || $[20] !== issue || $[21] !== selectedSubtypes || $[22] !== step) {
        t7 = step === 4 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f$query$2f$FinalScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            category: category,
            issue: issue,
            subtypes: selectedSubtypes,
            onRestart: restart
        }, void 0, false, {
            fileName: "[project]/frontend/src/app/query/page.tsx",
            lineNumber: 122,
            columnNumber: 24
        }, this);
        $[19] = category;
        $[20] = issue;
        $[21] = selectedSubtypes;
        $[22] = step;
        $[23] = t7;
    } else {
        t7 = $[23];
    }
    let t8;
    if ($[24] !== t4 || $[25] !== t5 || $[26] !== t6 || $[27] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-10 space-y-10",
            children: [
                t4,
                t5,
                t6,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/app/query/page.tsx",
            lineNumber: 133,
            columnNumber: 10
        }, this);
        $[24] = t4;
        $[25] = t5;
        $[26] = t6;
        $[27] = t7;
        $[28] = t8;
    } else {
        t8 = $[28];
    }
    return t8;
}
_s(QueryFlow, "PnkWvRtFl8PdRiIHQhp5O6mpHcg=");
_c = QueryFlow;
var _c;
__turbopack_context__.k.register(_c, "QueryFlow");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=frontend_src_85953f9e._.js.map