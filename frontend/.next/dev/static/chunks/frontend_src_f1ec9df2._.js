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
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function CategoryCard(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(27);
    if ($[0] !== "764451353ec72349838beae395c245236819fc4262e080ac9f0b65c70a0d7e44") {
        for(let $i = 0; $i < 27; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "764451353ec72349838beae395c245236819fc4262e080ac9f0b65c70a0d7e44";
    }
    const { category, catalog, onChange } = t0;
    let t1;
    if ($[1] !== catalog || $[2] !== category) {
        t1 = catalog?.[category] || {};
        $[1] = catalog;
        $[2] = category;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    const issuesAvailable = Object.keys(t1);
    let t2;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = [
            {
                issue: "",
                subtypes: [],
                speed: "",
                notes: "",
                openStep: 1
            }
        ];
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    const [rows, setRows] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t2);
    let t3;
    if ($[5] !== onChange) {
        t3 = ({
            "CategoryCard[updateRows]": (next)=>{
                setRows(next);
                onChange(next);
            }
        })["CategoryCard[updateRows]"];
        $[5] = onChange;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    const updateRows = t3;
    let t4;
    if ($[7] !== rows || $[8] !== updateRows) {
        t4 = ({
            "CategoryCard[updateField]": (i, patch)=>{
                const next_0 = [
                    ...rows
                ];
                next_0[i] = {
                    ...next_0[i],
                    ...patch
                };
                if (patch.issue) {
                    next_0[i].subtypes = [];
                }
                updateRows(next_0);
            }
        })["CategoryCard[updateField]"];
        $[7] = rows;
        $[8] = updateRows;
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    const updateField = t4;
    let t5;
    if ($[10] !== rows || $[11] !== updateRows) {
        t5 = ({
            "CategoryCard[addRow]": ()=>{
                updateRows([
                    ...rows,
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
        $[10] = rows;
        $[11] = updateRows;
        $[12] = t5;
    } else {
        t5 = $[12];
    }
    const addRow = t5;
    let t6;
    if ($[13] !== rows || $[14] !== updateRows) {
        t6 = ({
            "CategoryCard[removeRow]": (i_0)=>{
                updateRows(rows.filter({
                    "CategoryCard[removeRow > rows.filter()]": (_, idx)=>idx !== i_0
                }["CategoryCard[removeRow > rows.filter()]"]));
            }
        })["CategoryCard[removeRow]"];
        $[13] = rows;
        $[14] = updateRows;
        $[15] = t6;
    } else {
        t6 = $[15];
    }
    const removeRow = t6;
    let t7;
    if ($[16] !== rows || $[17] !== updateRows) {
        t7 = ({
            "CategoryCard[toggleSubtype]": (i_1, subtype)=>{
                const next_1 = [
                    ...rows
                ];
                const row = next_1[i_1];
                row.subtypes = row.subtypes.includes(subtype) ? row.subtypes.filter({
                    "CategoryCard[toggleSubtype > row.subtypes.filter()]": (x)=>x !== subtype
                }["CategoryCard[toggleSubtype > row.subtypes.filter()]"]) : [
                    ...row.subtypes,
                    subtype
                ];
                updateRows(next_1);
            }
        })["CategoryCard[toggleSubtype]"];
        $[16] = rows;
        $[17] = updateRows;
        $[18] = t7;
    } else {
        t7 = $[18];
    }
    const toggleSubtype = t7;
    const preview = _CategoryCardPreview;
    const t8 = "w-full bg-white dark:bg-zinc-900 border rounded-lg p-5 shadow-sm space-y-6";
    let t9;
    if ($[19] !== category) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-xl font-semibold",
            children: category
        }, void 0, false, {
            fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
            lineNumber: 149,
            columnNumber: 10
        }, this);
        $[19] = category;
        $[20] = t9;
    } else {
        t9 = $[20];
    }
    const t10 = rows.map({
        "CategoryCard[rows.map()]": (row_1, i_2)=>{
            const subtypesAvailable = row_1.issue && catalog?.[category]?.[row_1.issue] ? catalog[category][row_1.issue].problems || [] : [];
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border rounded-lg p-4 bg-zinc-50 dark:bg-zinc-800 space-y-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-medium text-sm",
                                children: [
                                    "Issue #",
                                    i_2 + 1
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                                lineNumber: 158,
                                columnNumber: 152
                            }, this),
                            i_2 > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "text-xs text-red-500",
                                onClick: {
                                    "CategoryCard[rows.map() > <button>.onClick]": ()=>removeRow(i_2)
                                }["CategoryCard[rows.map() > <button>.onClick]"],
                                children: "Remove"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                                lineNumber: 158,
                                columnNumber: 225
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                        lineNumber: 158,
                        columnNumber: 101
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center text-sm font-medium",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "1. Select Issue"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                                        lineNumber: 160,
                                        columnNumber: 159
                                    }, this),
                                    row_1.openStep !== 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: {
                                            "CategoryCard[rows.map() > <button>.onClick]": ()=>updateField(i_2, {
                                                    openStep: 1
                                                })
                                        }["CategoryCard[rows.map() > <button>.onClick]"],
                                        className: "text-xs text-blue-600",
                                        children: "Edit"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                                        lineNumber: 160,
                                        columnNumber: 212
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                                lineNumber: 160,
                                columnNumber: 88
                            }, this),
                            row_1.openStep === 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-3 flex flex-wrap gap-2",
                                children: issuesAvailable.map({
                                    "CategoryCard[rows.map() > issuesAvailable.map()]": (iss)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Chip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            label: iss,
                                            selected: row_1.issue === iss,
                                            onClick: {
                                                "CategoryCard[rows.map() > issuesAvailable.map() > <Chip>.onClick]": ()=>updateField(i_2, {
                                                        issue: iss,
                                                        openStep: 2
                                                    })
                                            }["CategoryCard[rows.map() > issuesAvailable.map() > <Chip>.onClick]"]
                                        }, iss, false, {
                                            fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                                            lineNumber: 165,
                                            columnNumber: 74
                                        }, this)
                                }["CategoryCard[rows.map() > issuesAvailable.map()]"])
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                                lineNumber: 164,
                                columnNumber: 141
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-2 text-sm text-zinc-500",
                                children: row_1.issue
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                                lineNumber: 171,
                                columnNumber: 77
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                        lineNumber: 160,
                        columnNumber: 83
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center text-sm font-medium",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "2. Select Subtypes"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                                        lineNumber: 171,
                                        columnNumber: 223
                                    }, this),
                                    row_1.openStep !== 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: {
                                            "CategoryCard[rows.map() > <button>.onClick]": ()=>updateField(i_2, {
                                                    openStep: 2
                                                })
                                        }["CategoryCard[rows.map() > <button>.onClick]"],
                                        className: "text-xs text-blue-600",
                                        children: "Edit"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                                        lineNumber: 171,
                                        columnNumber: 279
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                                lineNumber: 171,
                                columnNumber: 152
                            }, this),
                            row_1.openStep === 2 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-3 flex flex-wrap gap-2",
                                children: subtypesAvailable.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm text-zinc-500",
                                    children: "No subtypes for this issue."
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                                    lineNumber: 175,
                                    columnNumber: 218
                                }, this) : subtypesAvailable.map({
                                    "CategoryCard[rows.map() > subtypesAvailable.map()]": (s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Chip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            label: s,
                                            selected: row_1.subtypes.includes(s),
                                            onClick: {
                                                "CategoryCard[rows.map() > subtypesAvailable.map() > <Chip>.onClick]": ()=>toggleSubtype(i_2, s)
                                            }["CategoryCard[rows.map() > subtypesAvailable.map() > <Chip>.onClick]"]
                                        }, s, false, {
                                            fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                                            lineNumber: 176,
                                            columnNumber: 74
                                        }, this)
                                }["CategoryCard[rows.map() > subtypesAvailable.map()]"])
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                                lineNumber: 175,
                                columnNumber: 141
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-2 text-sm text-zinc-500",
                                children: row_1.subtypes.join(" | ") || "None selected"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                                lineNumber: 179,
                                columnNumber: 79
                            }, this),
                            row_1.openStep === 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-3 flex justify-end",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: {
                                        "CategoryCard[rows.map() > <button>.onClick]": ()=>updateField(i_2, {
                                                openStep: 3
                                            })
                                    }["CategoryCard[rows.map() > <button>.onClick]"],
                                    className: "px-4 py-2 rounded bg-emerald-600 text-white",
                                    children: "Next"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                                    lineNumber: 179,
                                    columnNumber: 241
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                                lineNumber: 179,
                                columnNumber: 202
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                        lineNumber: 171,
                        columnNumber: 147
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm font-medium",
                                children: "3. Speed & Notes"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                                lineNumber: 183,
                                columnNumber: 150
                            }, this),
                            row_1.openStep === 3 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-3 grid grid-cols-1 md:grid-cols-2 gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        value: row_1.speed,
                                        onChange: {
                                            "CategoryCard[rows.map() > <input>.onChange]": (e)=>updateField(i_2, {
                                                    speed: e.target.value
                                                })
                                        }["CategoryCard[rows.map() > <input>.onChange]"],
                                        placeholder: "Speed (60 km/h)",
                                        className: "p-2 border rounded bg-transparent"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                                        lineNumber: 183,
                                        columnNumber: 297
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        value: row_1.notes,
                                        onChange: {
                                            "CategoryCard[rows.map() > <input>.onChange]": (e_0)=>updateField(i_2, {
                                                    notes: e_0.target.value
                                                })
                                        }["CategoryCard[rows.map() > <input>.onChange]"],
                                        placeholder: "Notes (optional)",
                                        className: "p-2 border rounded bg-transparent"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                                        lineNumber: 187,
                                        columnNumber: 141
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-end md:col-span-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: {
                                                "CategoryCard[rows.map() > <button>.onClick]": ()=>updateField(i_2, {
                                                        openStep: 4
                                                    })
                                            }["CategoryCard[rows.map() > <button>.onClick]"],
                                            className: "px-4 py-2 rounded bg-emerald-600 text-white",
                                            children: "Preview"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                                            lineNumber: 191,
                                            columnNumber: 190
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                                        lineNumber: 191,
                                        columnNumber: 142
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                                lineNumber: 183,
                                columnNumber: 237
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-2 text-sm text-zinc-500",
                                children: [
                                    row_1.speed ? `Speed: ${row_1.speed}` : "",
                                    row_1.notes ? ` • ${row_1.notes}` : ""
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                                lineNumber: 195,
                                columnNumber: 152
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                        lineNumber: 183,
                        columnNumber: 145
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm font-medium",
                                children: "4. Preview"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                                lineNumber: 195,
                                columnNumber: 298
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-3 p-3 rounded bg-zinc-200 dark:bg-zinc-700 text-sm",
                                children: preview(row_1)
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                                lineNumber: 195,
                                columnNumber: 351
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-3 flex justify-end",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: {
                                        "CategoryCard[rows.map() > <button>.onClick]": ()=>updateField(i_2, {
                                                openStep: 1
                                            })
                                    }["CategoryCard[rows.map() > <button>.onClick]"],
                                    className: "px-4 py-2 rounded bg-blue-600 text-white",
                                    children: "Edit All"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                                    lineNumber: 195,
                                    columnNumber: 483
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                                lineNumber: 195,
                                columnNumber: 444
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                        lineNumber: 195,
                        columnNumber: 293
                    }, this)
                ]
            }, i_2, true, {
                fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                lineNumber: 158,
                columnNumber: 14
            }, this);
        }
    }["CategoryCard[rows.map()]"]);
    let t11;
    if ($[21] !== addRow) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pt-3 flex justify-end",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "px-4 py-2 bg-emerald-600 text-white rounded",
                onClick: addRow,
                children: "+ Add Another Issue"
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
                lineNumber: 204,
                columnNumber: 50
            }, this)
        }, void 0, false, {
            fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
            lineNumber: 204,
            columnNumber: 11
        }, this);
        $[21] = addRow;
        $[22] = t11;
    } else {
        t11 = $[22];
    }
    let t12;
    if ($[23] !== t10 || $[24] !== t11 || $[25] !== t9) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t8,
            children: [
                t9,
                t10,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/app/components/CategoryCard.tsx",
            lineNumber: 212,
            columnNumber: 11
        }, this);
        $[23] = t10;
        $[24] = t11;
        $[25] = t9;
        $[26] = t12;
    } else {
        t12 = $[26];
    }
    return t12;
}
_s(CategoryCard, "XXMpKMYW42NVjcdNXgjAYT2zMXQ=");
_c = CategoryCard;
function _CategoryCardPreview(row_0) {
    if (!row_0.issue || row_0.subtypes.length === 0) {
        return "Incomplete\u2026";
    }
    const sub = row_0.subtypes.join(" | ");
    const spd = row_0.speed ? ` on ${row_0.speed} road` : "";
    return `${row_0.issue}: ${sub}${spd}${row_0.notes ? ` — ${row_0.notes}` : ""}`;
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

//# sourceMappingURL=frontend_src_f1ec9df2._.js.map