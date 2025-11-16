(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
"[project]/frontend/src/components/CategoryCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CategoryCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Chip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/Chip.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$computeIssues$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/lib/computeIssues.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$computeSubtypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/lib/computeSubtypes.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function CategoryCard(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(24);
    if ($[0] !== "2c4ce0709c33c9006bd0b20de2dbdf60e45fb7dbe8f685cf04971be11667fd64") {
        for(let $i = 0; $i < 24; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2c4ce0709c33c9006bd0b20de2dbdf60e45fb7dbe8f685cf04971be11667fd64";
    }
    const { category, catalog, onChange } = t0;
    const issuesAvailable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$computeIssues$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["computeIssuesForCategory"])(category, catalog);
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [
            {
                issue: "",
                subtypes: [],
                speed: "",
                notes: "",
                openStep: 1
            }
        ];
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const [rows, setRows] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    let t2;
    if ($[2] !== onChange) {
        t2 = ({
            "CategoryCard[updateRows]": (next)=>{
                setRows(next);
                onChange(next);
            }
        })["CategoryCard[updateRows]"];
        $[2] = onChange;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const updateRows = t2;
    let t3;
    if ($[4] !== rows || $[5] !== updateRows) {
        t3 = ({
            "CategoryCard[updateField]": (i, patch)=>{
                const next_0 = [
                    ...rows
                ];
                next_0[i] = {
                    ...next_0[i],
                    ...patch
                };
                updateRows(next_0);
            }
        })["CategoryCard[updateField]"];
        $[4] = rows;
        $[5] = updateRows;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    const updateField = t3;
    let t4;
    if ($[7] !== rows || $[8] !== updateRows) {
        t4 = ({
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
        $[7] = rows;
        $[8] = updateRows;
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    const addRow = t4;
    let t5;
    if ($[10] !== rows || $[11] !== updateRows) {
        t5 = ({
            "CategoryCard[removeRow]": (i_0)=>{
                const next_1 = rows.filter({
                    "CategoryCard[removeRow > rows.filter()]": (_, idx)=>idx !== i_0
                }["CategoryCard[removeRow > rows.filter()]"]);
                updateRows(next_1);
            }
        })["CategoryCard[removeRow]"];
        $[10] = rows;
        $[11] = updateRows;
        $[12] = t5;
    } else {
        t5 = $[12];
    }
    const removeRow = t5;
    let t6;
    if ($[13] !== rows || $[14] !== updateRows) {
        t6 = ({
            "CategoryCard[toggleSubtype]": (i_1, subtype)=>{
                const next_2 = [
                    ...rows
                ];
                const row = next_2[i_1];
                row.subtypes = row.subtypes.includes(subtype) ? row.subtypes.filter({
                    "CategoryCard[toggleSubtype > row.subtypes.filter()]": (x)=>x !== subtype
                }["CategoryCard[toggleSubtype > row.subtypes.filter()]"]) : [
                    ...row.subtypes,
                    subtype
                ];
                updateRows(next_2);
            }
        })["CategoryCard[toggleSubtype]"];
        $[13] = rows;
        $[14] = updateRows;
        $[15] = t6;
    } else {
        t6 = $[15];
    }
    const toggleSubtype = t6;
    const preview = _CategoryCardPreview;
    const t7 = "w-full bg-white dark:bg-zinc-900 border rounded-lg p-5 shadow-sm space-y-6";
    let t8;
    if ($[16] !== category) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-xl font-semibold",
            children: category
        }, void 0, false, {
            fileName: "[project]/frontend/src/components/CategoryCard.tsx",
            lineNumber: 137,
            columnNumber: 10
        }, this);
        $[16] = category;
        $[17] = t8;
    } else {
        t8 = $[17];
    }
    const t9 = rows.map({
        "CategoryCard[rows.map()]": (row_1, i_2)=>{
            const subtypesAvailable = row_1.issue && catalog ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$computeSubtypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["computeSubtypesForIssue"])(category, row_1.issue, catalog) : [];
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border rounded-lg p-4 bg-zinc-50 dark:bg-zinc-800 space-y-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-medium text-sm",
                                children: [
                                    "Issue Group #",
                                    i_2 + 1
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/components/CategoryCard.tsx",
                                lineNumber: 146,
                                columnNumber: 152
                            }, this),
                            i_2 > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "text-xs text-red-500",
                                onClick: {
                                    "CategoryCard[rows.map() > <button>.onClick]": ()=>removeRow(i_2)
                                }["CategoryCard[rows.map() > <button>.onClick]"],
                                children: "Remove"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/CategoryCard.tsx",
                                lineNumber: 146,
                                columnNumber: 231
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/components/CategoryCard.tsx",
                        lineNumber: 146,
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
                                        fileName: "[project]/frontend/src/components/CategoryCard.tsx",
                                        lineNumber: 148,
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
                                        fileName: "[project]/frontend/src/components/CategoryCard.tsx",
                                        lineNumber: 148,
                                        columnNumber: 212
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/components/CategoryCard.tsx",
                                lineNumber: 148,
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
                                                        subtypes: []
                                                    })
                                            }["CategoryCard[rows.map() > issuesAvailable.map() > <Chip>.onClick]"]
                                        }, iss, false, {
                                            fileName: "[project]/frontend/src/components/CategoryCard.tsx",
                                            lineNumber: 153,
                                            columnNumber: 74
                                        }, this)
                                }["CategoryCard[rows.map() > issuesAvailable.map()]"])
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/CategoryCard.tsx",
                                lineNumber: 152,
                                columnNumber: 141
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-2 text-sm text-zinc-500",
                                children: row_1.issue
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/CategoryCard.tsx",
                                lineNumber: 159,
                                columnNumber: 77
                            }, this),
                            row_1.openStep === 1 && row_1.issue && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-3 flex justify-end",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: {
                                        "CategoryCard[rows.map() > <button>.onClick]": ()=>updateField(i_2, {
                                                openStep: 2
                                            })
                                    }["CategoryCard[rows.map() > <button>.onClick]"],
                                    className: "px-4 py-2 rounded bg-emerald-600 text-white",
                                    children: "Next"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/CategoryCard.tsx",
                                    lineNumber: 159,
                                    columnNumber: 220
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/CategoryCard.tsx",
                                lineNumber: 159,
                                columnNumber: 181
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/components/CategoryCard.tsx",
                        lineNumber: 148,
                        columnNumber: 83
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center text-sm font-medium",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "2. Select Subtype(s)"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/CategoryCard.tsx",
                                        lineNumber: 163,
                                        columnNumber: 221
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
                                        fileName: "[project]/frontend/src/components/CategoryCard.tsx",
                                        lineNumber: 163,
                                        columnNumber: 279
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/components/CategoryCard.tsx",
                                lineNumber: 163,
                                columnNumber: 150
                            }, this),
                            row_1.openStep === 2 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-3 flex flex-wrap gap-2",
                                children: subtypesAvailable.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm text-zinc-500",
                                    children: "No subtypes for this issue."
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/CategoryCard.tsx",
                                    lineNumber: 167,
                                    columnNumber: 218
                                }, this) : subtypesAvailable.map({
                                    "CategoryCard[rows.map() > subtypesAvailable.map()]": (s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Chip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            label: s,
                                            selected: row_1.subtypes.includes(s),
                                            onClick: {
                                                "CategoryCard[rows.map() > subtypesAvailable.map() > <Chip>.onClick]": ()=>toggleSubtype(i_2, s)
                                            }["CategoryCard[rows.map() > subtypesAvailable.map() > <Chip>.onClick]"]
                                        }, s, false, {
                                            fileName: "[project]/frontend/src/components/CategoryCard.tsx",
                                            lineNumber: 168,
                                            columnNumber: 74
                                        }, this)
                                }["CategoryCard[rows.map() > subtypesAvailable.map()]"])
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/CategoryCard.tsx",
                                lineNumber: 167,
                                columnNumber: 141
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-2 text-sm text-zinc-500",
                                children: row_1.subtypes.length ? row_1.subtypes.join(" | ") : "No subtypes selected"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/CategoryCard.tsx",
                                lineNumber: 171,
                                columnNumber: 79
                            }, this),
                            row_1.openStep === 2 && row_1.subtypes.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-3 flex justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: {
                                            "CategoryCard[rows.map() > <button>.onClick]": ()=>updateField(i_2, {
                                                    openStep: 1
                                                })
                                        }["CategoryCard[rows.map() > <button>.onClick]"],
                                        className: "px-3 py-2 border rounded",
                                        children: "Back"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/CategoryCard.tsx",
                                        lineNumber: 171,
                                        columnNumber: 304
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: {
                                            "CategoryCard[rows.map() > <button>.onClick]": ()=>updateField(i_2, {
                                                    openStep: 3
                                                })
                                        }["CategoryCard[rows.map() > <button>.onClick]"],
                                        className: "px-4 py-2 rounded bg-emerald-600 text-white",
                                        children: "Next"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/CategoryCard.tsx",
                                        lineNumber: 175,
                                        columnNumber: 113
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/components/CategoryCard.tsx",
                                lineNumber: 171,
                                columnNumber: 261
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/components/CategoryCard.tsx",
                        lineNumber: 163,
                        columnNumber: 145
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center text-sm font-medium",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "3. Speed & Notes"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/CategoryCard.tsx",
                                        lineNumber: 179,
                                        columnNumber: 221
                                    }, this),
                                    row_1.openStep !== 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: {
                                            "CategoryCard[rows.map() > <button>.onClick]": ()=>updateField(i_2, {
                                                    openStep: 3
                                                })
                                        }["CategoryCard[rows.map() > <button>.onClick]"],
                                        className: "text-xs text-blue-600",
                                        children: "Edit"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/CategoryCard.tsx",
                                        lineNumber: 179,
                                        columnNumber: 279
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/components/CategoryCard.tsx",
                                lineNumber: 179,
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
                                        placeholder: "Speed (e.g., 60 km/h)",
                                        className: "p-2 border rounded bg-transparent"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/CategoryCard.tsx",
                                        lineNumber: 183,
                                        columnNumber: 201
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
                                        fileName: "[project]/frontend/src/components/CategoryCard.tsx",
                                        lineNumber: 187,
                                        columnNumber: 147
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
                                            fileName: "[project]/frontend/src/components/CategoryCard.tsx",
                                            lineNumber: 191,
                                            columnNumber: 190
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/CategoryCard.tsx",
                                        lineNumber: 191,
                                        columnNumber: 142
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/components/CategoryCard.tsx",
                                lineNumber: 183,
                                columnNumber: 141
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-2 text-sm text-zinc-500",
                                children: [
                                    row_1.speed ? `Speed: ${row_1.speed}` : "",
                                    row_1.notes ? ` • ${row_1.notes}` : ""
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/components/CategoryCard.tsx",
                                lineNumber: 195,
                                columnNumber: 152
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/components/CategoryCard.tsx",
                        lineNumber: 179,
                        columnNumber: 145
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm font-medium",
                                children: "4. Preview"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/CategoryCard.tsx",
                                lineNumber: 195,
                                columnNumber: 298
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-3 p-3 rounded bg-zinc-200 dark:bg-zinc-700 text-sm",
                                children: preview(row_1)
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/CategoryCard.tsx",
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
                                    fileName: "[project]/frontend/src/components/CategoryCard.tsx",
                                    lineNumber: 195,
                                    columnNumber: 483
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/CategoryCard.tsx",
                                lineNumber: 195,
                                columnNumber: 444
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/components/CategoryCard.tsx",
                        lineNumber: 195,
                        columnNumber: 293
                    }, this)
                ]
            }, i_2, true, {
                fileName: "[project]/frontend/src/components/CategoryCard.tsx",
                lineNumber: 146,
                columnNumber: 14
            }, this);
        }
    }["CategoryCard[rows.map()]"]);
    let t10;
    if ($[18] !== addRow) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pt-3 flex justify-end",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "px-4 py-2 bg-emerald-600 text-white rounded",
                onClick: addRow,
                children: "+ Add Another Issue"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/CategoryCard.tsx",
                lineNumber: 204,
                columnNumber: 50
            }, this)
        }, void 0, false, {
            fileName: "[project]/frontend/src/components/CategoryCard.tsx",
            lineNumber: 204,
            columnNumber: 11
        }, this);
        $[18] = addRow;
        $[19] = t10;
    } else {
        t10 = $[19];
    }
    let t11;
    if ($[20] !== t10 || $[21] !== t8 || $[22] !== t9) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t7,
            children: [
                t8,
                t9,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/components/CategoryCard.tsx",
            lineNumber: 212,
            columnNumber: 11
        }, this);
        $[20] = t10;
        $[21] = t8;
        $[22] = t9;
        $[23] = t11;
    } else {
        t11 = $[23];
    }
    return t11;
}
_s(CategoryCard, "2rPpS5JJ2Ls2srM3YlxkW/Wd7lQ=");
_c = CategoryCard;
function _CategoryCardPreview(row_0) {
    if (!row_0.issue || row_0.subtypes.length === 0) {
        return "Incomplete\u2026";
    }
    const sub = row_0.subtypes.join(" | ");
    const spd = row_0.speed ? ` on ${row_0.speed} road` : "";
    return `${row_0.issue} ${sub}${spd}.`;
}
var _c;
__turbopack_context__.k.register(_c, "CategoryCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Chip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/Chip.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$CategoryCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/CategoryCard.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function HomePage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(51);
    if ($[0] !== "aaaf753f5f0109f9873db7635ee107fdf5869013d68ae614df7e42e91269016f") {
        for(let $i = 0; $i < 51; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "aaaf753f5f0109f9873db7635ee107fdf5869013d68ae614df7e42e91269016f";
    }
    const [catalog, setCatalog] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const categories = [
        "Road Sign",
        "Road Marking",
        "Traffic Calming",
        "Custom Query"
    ];
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [selectedCategories, setSelectedCategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    const [customText, setCustomText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [];
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const [customList, setCustomList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {};
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const [cardData, setCardData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t2);
    const [finalPrompt, setFinalPrompt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [aiOutput, setAiOutput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t3;
    let t4;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = ({
            "HomePage[useEffect()]": ()=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("http://localhost:8000/catalog").then({
                    "HomePage[useEffect() > (anonymous)()]": (res)=>{
                        setCatalog(res.data);
                    }
                }["HomePage[useEffect() > (anonymous)()]"]);
            }
        })["HomePage[useEffect()]"];
        t4 = [];
        $[4] = t3;
        $[5] = t4;
    } else {
        t3 = $[4];
        t4 = $[5];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t3, t4);
    let t5;
    let t6;
    if ($[6] !== cardData || $[7] !== customList) {
        t5 = ({
            "HomePage[useEffect()]": ()=>{
                const parts = [];
                for (const cat of Object.keys(cardData)){
                    const rows = cardData[cat] || [];
                    for (const row of rows){
                        if (row.issue && row.subtypes.length > 0) {
                            const sub = row.subtypes.join(" | ");
                            const speed = row.speed ? ` on ${row.speed} road` : "";
                            parts.push(`${row.issue} ${sub}${speed}.`);
                        }
                    }
                }
                customList.forEach({
                    "HomePage[useEffect() > customList.forEach()]": (q)=>parts.push(`Custom: ${q}`)
                }["HomePage[useEffect() > customList.forEach()]"]);
                setFinalPrompt(parts.join("\n"));
            }
        })["HomePage[useEffect()]"];
        t6 = [
            cardData,
            customList
        ];
        $[6] = cardData;
        $[7] = customList;
        $[8] = t5;
        $[9] = t6;
    } else {
        t5 = $[8];
        t6 = $[9];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t5, t6);
    const toggleCategory = {
        "HomePage[toggleCategory]": (cat_0)=>{
            if (selectedCategories.includes(cat_0)) {
                setSelectedCategories(selectedCategories.filter({
                    "HomePage[toggleCategory > selectedCategories.filter()]": (c)=>c !== cat_0
                }["HomePage[toggleCategory > selectedCategories.filter()]"]));
            } else {
                setSelectedCategories([
                    ...selectedCategories,
                    cat_0
                ]);
            }
        }
    }["HomePage[toggleCategory]"];
    let t7;
    if ($[10] !== customList || $[11] !== customText || $[12] !== setCustomText) {
        t7 = ({
            "HomePage[addCustomQuery]": ()=>{
                if (customText.trim().length > 0) {
                    setCustomList([
                        ...customList,
                        customText.trim()
                    ]);
                    setCustomText("");
                }
            }
        })["HomePage[addCustomQuery]"];
        $[10] = customList;
        $[11] = customText;
        $[12] = setCustomText;
        $[13] = t7;
    } else {
        t7 = $[13];
    }
    const addCustomQuery = t7;
    let t8;
    if ($[14] !== setCardData || $[15] !== setCustomText) {
        t8 = ({
            "HomePage[restartAll]": ()=>{
                setSelectedCategories([]);
                setCardData({});
                setCustomText("");
                setCustomList([]);
                setFinalPrompt("");
                setAiOutput("");
                setLoading(false);
            }
        })["HomePage[restartAll]"];
        $[14] = setCardData;
        $[15] = setCustomText;
        $[16] = t8;
    } else {
        t8 = $[16];
    }
    const restartAll = t8;
    let t9;
    if ($[17] !== finalPrompt) {
        t9 = ({
            "HomePage[submitToAI]": async ()=>{
                if (!finalPrompt.trim()) {
                    return;
                }
                setLoading(true);
                ;
                try {
                    const res_0 = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("http://localhost:8000/process", {
                        text: finalPrompt,
                        top_k: 4
                    });
                    setAiOutput(res_0.data.answer);
                } catch (t10) {
                    const e = t10;
                    console.error(e);
                    setAiOutput("Error contacting backend.");
                }
                setLoading(false);
            }
        })["HomePage[submitToAI]"];
        $[17] = finalPrompt;
        $[18] = t9;
    } else {
        t9 = $[18];
    }
    const submitToAI = t9;
    const t10 = "min-h-screen flex justify-center pt-10 px-4";
    const t11 = "w-full max-w-3xl";
    let t12;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
            className: "text-center mb-10",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-3xl font-bold",
                    children: "RoadMarshal AI"
                }, void 0, false, {
                    fileName: "[project]/frontend/src/app/page.tsx",
                    lineNumber: 180,
                    columnNumber: 49
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-lg font-semibold text-zinc-700 dark:text-zinc-200 mt-3",
                    children: "Hi — how can I assist you today?"
                }, void 0, false, {
                    fileName: "[project]/frontend/src/app/page.tsx",
                    lineNumber: 180,
                    columnNumber: 103
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/app/page.tsx",
            lineNumber: 180,
            columnNumber: 11
        }, this);
        $[19] = t12;
    } else {
        t12 = $[19];
    }
    const t13 = "flex flex-wrap gap-3 justify-center mb-8";
    const t14 = categories.map({
        "HomePage[categories.map()]": (cat_1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Chip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                label: cat_1,
                selected: selectedCategories.includes(cat_1),
                onClick: {
                    "HomePage[categories.map() > <Chip>.onClick]": ()=>toggleCategory(cat_1)
                }["HomePage[categories.map() > <Chip>.onClick]"]
            }, cat_1, false, {
                fileName: "[project]/frontend/src/app/page.tsx",
                lineNumber: 187,
                columnNumber: 44
            }, this)
    }["HomePage[categories.map()]"]);
    let t15;
    if ($[20] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t13,
            children: t14
        }, void 0, false, {
            fileName: "[project]/frontend/src/app/page.tsx",
            lineNumber: 193,
            columnNumber: 11
        }, this);
        $[20] = t14;
        $[21] = t15;
    } else {
        t15 = $[21];
    }
    let t16;
    if ($[22] !== catalog || $[23] !== selectedCategories || $[24] !== setCardData) {
        let t17;
        if ($[26] !== catalog || $[27] !== setCardData) {
            t17 = ({
                "HomePage[(anonymous)()]": (cat_3)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$CategoryCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        category: cat_3,
                        catalog: catalog,
                        onChange: {
                            "HomePage[(anonymous)() > <CategoryCard>.onChange]": (rows_0)=>{
                                setCardData({
                                    "HomePage[(anonymous)() > <CategoryCard>.onChange > setCardData()]": (prev)=>({
                                            ...prev,
                                            [cat_3]: rows_0
                                        })
                                }["HomePage[(anonymous)() > <CategoryCard>.onChange > setCardData()]"]);
                            }
                        }["HomePage[(anonymous)() > <CategoryCard>.onChange]"]
                    }, cat_3, false, {
                        fileName: "[project]/frontend/src/app/page.tsx",
                        lineNumber: 204,
                        columnNumber: 45
                    }, this)
            })["HomePage[(anonymous)()]"];
            $[26] = catalog;
            $[27] = setCardData;
            $[28] = t17;
        } else {
            t17 = $[28];
        }
        t16 = selectedCategories.filter(_HomePageSelectedCategoriesFilter).map(t17);
        $[22] = catalog;
        $[23] = selectedCategories;
        $[24] = setCardData;
        $[25] = t16;
    } else {
        t16 = $[25];
    }
    let t17;
    if ($[29] !== addCustomQuery || $[30] !== customList || $[31] !== customText || $[32] !== selectedCategories || $[33] !== setCustomText) {
        t17 = selectedCategories.includes("Custom Query") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white dark:bg-zinc-900 p-5 border rounded-lg shadow-sm space-y-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-lg font-semibold",
                    children: "Custom Query"
                }, void 0, false, {
                    fileName: "[project]/frontend/src/app/page.tsx",
                    lineNumber: 231,
                    columnNumber: 143
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                    className: "w-full p-3 border rounded bg-transparent min-h-[120px]",
                    placeholder: "Describe your custom issue...",
                    value: customText,
                    onChange: {
                        "HomePage[<textarea>.onChange]": (e_0)=>setCustomText(e_0.target.value)
                    }["HomePage[<textarea>.onChange]"]
                }, void 0, false, {
                    fileName: "[project]/frontend/src/app/page.tsx",
                    lineNumber: 231,
                    columnNumber: 198
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: addCustomQuery,
                    className: "px-4 py-2 bg-blue-600 text-white rounded",
                    children: "Add Query"
                }, void 0, false, {
                    fileName: "[project]/frontend/src/app/page.tsx",
                    lineNumber: 233,
                    columnNumber: 45
                }, this),
                customList.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-4 space-y-2",
                    children: customList.map(_HomePageCustomListMap)
                }, void 0, false, {
                    fileName: "[project]/frontend/src/app/page.tsx",
                    lineNumber: 233,
                    columnNumber: 175
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/app/page.tsx",
            lineNumber: 231,
            columnNumber: 58
        }, this);
        $[29] = addCustomQuery;
        $[30] = customList;
        $[31] = customText;
        $[32] = selectedCategories;
        $[33] = setCustomText;
        $[34] = t17;
    } else {
        t17 = $[34];
    }
    let t18;
    if ($[35] !== t16 || $[36] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-8",
            children: [
                t16,
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/app/page.tsx",
            lineNumber: 245,
            columnNumber: 11
        }, this);
        $[35] = t16;
        $[36] = t17;
        $[37] = t18;
    } else {
        t18 = $[37];
    }
    let t19;
    if ($[38] !== finalPrompt || $[39] !== loading || $[40] !== restartAll || $[41] !== submitToAI) {
        t19 = finalPrompt && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-10 bg-white dark:bg-zinc-900 border rounded-lg p-5 shadow-sm",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-lg font-semibold mb-3",
                    children: "Final Query Preview"
                }, void 0, false, {
                    fileName: "[project]/frontend/src/app/page.tsx",
                    lineNumber: 254,
                    columnNumber: 107
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                    className: "whitespace-pre-wrap bg-zinc-100 dark:bg-zinc-800 p-4 rounded text-sm",
                    children: finalPrompt
                }, void 0, false, {
                    fileName: "[project]/frontend/src/app/page.tsx",
                    lineNumber: 254,
                    columnNumber: 174
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-end mt-4 gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: submitToAI,
                            className: "px-4 py-2 bg-emerald-600 text-white rounded",
                            children: loading ? "Processing..." : "Submit to AI"
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/app/page.tsx",
                            lineNumber: 254,
                            columnNumber: 324
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: restartAll,
                            className: "px-4 py-2 bg-zinc-300 dark:bg-zinc-700 rounded",
                            children: "Restart"
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/app/page.tsx",
                            lineNumber: 254,
                            columnNumber: 462
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/app/page.tsx",
                    lineNumber: 254,
                    columnNumber: 279
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/app/page.tsx",
            lineNumber: 254,
            columnNumber: 26
        }, this);
        $[38] = finalPrompt;
        $[39] = loading;
        $[40] = restartAll;
        $[41] = submitToAI;
        $[42] = t19;
    } else {
        t19 = $[42];
    }
    let t20;
    if ($[43] !== aiOutput) {
        t20 = aiOutput && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-10 bg-white dark:bg-zinc-900 border rounded-lg p-5 shadow-sm",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-lg font-semibold mb-3",
                    children: "AI Output"
                }, void 0, false, {
                    fileName: "[project]/frontend/src/app/page.tsx",
                    lineNumber: 265,
                    columnNumber: 104
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "prose dark:prose-invert max-w-none",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        dangerouslySetInnerHTML: {
                            __html: aiOutput.replace(/\n/g, "<br/>")
                        }
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/app/page.tsx",
                        lineNumber: 265,
                        columnNumber: 213
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/frontend/src/app/page.tsx",
                    lineNumber: 265,
                    columnNumber: 161
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/app/page.tsx",
            lineNumber: 265,
            columnNumber: 23
        }, this);
        $[43] = aiOutput;
        $[44] = t20;
    } else {
        t20 = $[44];
    }
    let t21;
    if ($[45] !== t12 || $[46] !== t15 || $[47] !== t18 || $[48] !== t19 || $[49] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t10,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: t11,
                children: [
                    t12,
                    t15,
                    t18,
                    t19,
                    t20
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/app/page.tsx",
                lineNumber: 275,
                columnNumber: 32
            }, this)
        }, void 0, false, {
            fileName: "[project]/frontend/src/app/page.tsx",
            lineNumber: 275,
            columnNumber: 11
        }, this);
        $[45] = t12;
        $[46] = t15;
        $[47] = t18;
        $[48] = t19;
        $[49] = t20;
        $[50] = t21;
    } else {
        t21 = $[50];
    }
    return t21;
}
_s(HomePage, "JIn9tOqXuob0YK+X1FSfS8+9BRE=");
_c = HomePage;
function _HomePageCustomListMap(q_0, i) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-zinc-100 dark:bg-zinc-800 p-3 rounded text-sm",
        children: q_0
    }, i, false, {
        fileName: "[project]/frontend/src/app/page.tsx",
        lineNumber: 288,
        columnNumber: 10
    }, this);
}
function _HomePageSelectedCategoriesFilter(cat_2) {
    return cat_2 !== "Custom Query";
}
var _c;
__turbopack_context__.k.register(_c, "HomePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=frontend_src_74cbeafa._.js.map