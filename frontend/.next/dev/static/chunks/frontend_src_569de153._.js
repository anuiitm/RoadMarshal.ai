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
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(8);
    if ($[0] !== "9b5389f38eccfaa1200932b1888682e91bf1a370e2d08282dfb8a571fb91d384") {
        for(let $i = 0; $i < 8; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "9b5389f38eccfaa1200932b1888682e91bf1a370e2d08282dfb8a571fb91d384";
    }
    const { label, selected: t1, onClick, className: t2 } = t0;
    const selected = t1 === undefined ? false : t1;
    const className = t2 === undefined ? "" : t2;
    const t3 = selected ? "bg-emerald-600 text-white border-emerald-600 shadow-sm" : "bg-white dark:bg-zinc-800 border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100";
    let t4;
    if ($[1] !== className || $[2] !== t3) {
        t4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("px-3 py-1 rounded-full text-sm border transition", t3, className);
        $[1] = className;
        $[2] = t3;
        $[3] = t4;
    } else {
        t4 = $[3];
    }
    let t5;
    if ($[4] !== label || $[5] !== onClick || $[6] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: onClick,
            className: t4,
            children: label
        }, void 0, false, {
            fileName: "[project]/frontend/src/components/Chip.tsx",
            lineNumber: 33,
            columnNumber: 10
        }, this);
        $[4] = label;
        $[5] = onClick;
        $[6] = t4;
        $[7] = t5;
    } else {
        t5 = $[7];
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
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(21);
    if ($[0] !== "1ed0c56e331a078d22821b0dcb9cbe88b7e8b25cda1a79adc2b3e566c3feb52e") {
        for(let $i = 0; $i < 21; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "1ed0c56e331a078d22821b0dcb9cbe88b7e8b25cda1a79adc2b3e566c3feb52e";
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
                onChange?.(next);
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
            "CategoryCard[addRow]": ()=>{
                const next_0 = [
                    ...rows,
                    {
                        issue: "",
                        subtypes: [],
                        speed: "",
                        notes: "",
                        openStep: 1
                    }
                ];
                updateRows(next_0);
            }
        })["CategoryCard[addRow]"];
        $[4] = rows;
        $[5] = updateRows;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    const addRow = t3;
    let t4;
    if ($[7] !== rows || $[8] !== updateRows) {
        t4 = ({
            "CategoryCard[updateField]": (i, patch)=>{
                const next_1 = [
                    ...rows
                ];
                next_1[i] = {
                    ...next_1[i],
                    ...patch
                };
                updateRows(next_1);
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
            "CategoryCard[toggleSubtype]": (i_0, subtype)=>{
                const next_2 = [
                    ...rows
                ];
                const row = next_2[i_0];
                row.subtypes = row.subtypes.includes(subtype) ? row.subtypes.filter({
                    "CategoryCard[toggleSubtype > row.subtypes.filter()]": (x)=>x !== subtype
                }["CategoryCard[toggleSubtype > row.subtypes.filter()]"]) : [
                    ...row.subtypes,
                    subtype
                ];
                updateRows(next_2);
            }
        })["CategoryCard[toggleSubtype]"];
        $[10] = rows;
        $[11] = updateRows;
        $[12] = t5;
    } else {
        t5 = $[12];
    }
    const toggleSubtype = t5;
    const previewSentence = _CategoryCardPreviewSentence;
    const t6 = "w-full bg-white dark:bg-zinc-900 border rounded-lg p-5 shadow-sm space-y-6";
    let t7;
    if ($[13] !== category) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-lg font-semibold",
            children: category
        }, void 0, false, {
            fileName: "[project]/frontend/src/components/CategoryCard.tsx",
            lineNumber: 121,
            columnNumber: 10
        }, this);
        $[13] = category;
        $[14] = t7;
    } else {
        t7 = $[14];
    }
    const t8 = rows.map({
        "CategoryCard[rows.map()]": (row_1, i_1)=>{
            const subtypesAvailable = row_1.issue ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$computeSubtypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["computeSubtypesForIssue"])(category, row_1.issue, catalog) : [];
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border rounded-lg p-4 bg-zinc-50 dark:bg-zinc-800 space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "font-medium",
                                children: [
                                    "Issue Group #",
                                    i_1 + 1
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/components/CategoryCard.tsx",
                                lineNumber: 130,
                                columnNumber: 152
                            }, this),
                            i_1 > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "text-xs text-red-500",
                                onClick: {
                                    "CategoryCard[rows.map() > <button>.onClick]": ()=>{
                                        const next_3 = rows.filter({
                                            "CategoryCard[rows.map() > <button>.onClick > rows.filter()]": (_, idx)=>idx !== i_1
                                        }["CategoryCard[rows.map() > <button>.onClick > rows.filter()]"]);
                                        updateRows(next_3);
                                    }
                                }["CategoryCard[rows.map() > <button>.onClick]"],
                                children: "Remove"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/CategoryCard.tsx",
                                lineNumber: 130,
                                columnNumber: 221
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/components/CategoryCard.tsx",
                        lineNumber: 130,
                        columnNumber: 101
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm font-medium flex justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "1. Select Issue"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/CategoryCard.tsx",
                                        lineNumber: 137,
                                        columnNumber: 146
                                    }, this),
                                    row_1.openStep !== 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "text-xs text-blue-600",
                                        onClick: {
                                            "CategoryCard[rows.map() > <button>.onClick]": ()=>updateField(i_1, {
                                                    openStep: 1
                                                })
                                        }["CategoryCard[rows.map() > <button>.onClick]"],
                                        children: "Edit"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/CategoryCard.tsx",
                                        lineNumber: 137,
                                        columnNumber: 199
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/components/CategoryCard.tsx",
                                lineNumber: 137,
                                columnNumber: 88
                            }, this),
                            row_1.openStep === 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-3 flex flex-wrap gap-2",
                                children: issuesAvailable.map({
                                    "CategoryCard[rows.map() > issuesAvailable.map()]": (iss_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Chip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            label: iss_0,
                                            selected: row_1.issue === iss_0,
                                            onClick: {
                                                "CategoryCard[rows.map() > issuesAvailable.map() > <Chip>.onClick]": ()=>updateField(i_1, {
                                                        issue: iss_0,
                                                        subtypes: []
                                                    })
                                            }["CategoryCard[rows.map() > issuesAvailable.map() > <Chip>.onClick]"]
                                        }, iss_0, false, {
                                            fileName: "[project]/frontend/src/components/CategoryCard.tsx",
                                            lineNumber: 142,
                                            columnNumber: 76
                                        }, this)
                                }["CategoryCard[rows.map() > issuesAvailable.map()]"])
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/CategoryCard.tsx",
                                lineNumber: 141,
                                columnNumber: 107
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-2 text-sm text-zinc-500",
                                children: row_1.issue || "No issue selected"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/CategoryCard.tsx",
                                lineNumber: 148,
                                columnNumber: 77
                            }, this),
                            row_1.openStep === 1 && row_1.issue && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-3 flex justify-end",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "px-4 py-2 bg-emerald-600 text-white rounded",
                                    onClick: {
                                        "CategoryCard[rows.map() > <button>.onClick]": ()=>updateField(i_1, {
                                                openStep: 2
                                            })
                                    }["CategoryCard[rows.map() > <button>.onClick]"],
                                    children: "Next"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/CategoryCard.tsx",
                                    lineNumber: 148,
                                    columnNumber: 243
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/CategoryCard.tsx",
                                lineNumber: 148,
                                columnNumber: 204
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/components/CategoryCard.tsx",
                        lineNumber: 137,
                        columnNumber: 83
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm font-medium flex justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "2. Select Subtype(s)"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/CategoryCard.tsx",
                                        lineNumber: 152,
                                        columnNumber: 152
                                    }, this),
                                    row_1.openStep !== 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "text-xs text-blue-600",
                                        onClick: {
                                            "CategoryCard[rows.map() > <button>.onClick]": ()=>updateField(i_1, {
                                                    openStep: 2
                                                })
                                        }["CategoryCard[rows.map() > <button>.onClick]"],
                                        children: "Edit"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/CategoryCard.tsx",
                                        lineNumber: 152,
                                        columnNumber: 210
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/components/CategoryCard.tsx",
                                lineNumber: 152,
                                columnNumber: 94
                            }, this),
                            row_1.openStep === 2 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-3 flex flex-wrap gap-2",
                                children: subtypesAvailable.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm text-zinc-500",
                                    children: "No subtypes for this issue."
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/CategoryCard.tsx",
                                    lineNumber: 156,
                                    columnNumber: 184
                                }, this) : subtypesAvailable.map({
                                    "CategoryCard[rows.map() > subtypesAvailable.map()]": (s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Chip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            label: s,
                                            selected: row_1.subtypes.includes(s),
                                            onClick: {
                                                "CategoryCard[rows.map() > subtypesAvailable.map() > <Chip>.onClick]": ()=>toggleSubtype(i_1, s)
                                            }["CategoryCard[rows.map() > subtypesAvailable.map() > <Chip>.onClick]"]
                                        }, s, false, {
                                            fileName: "[project]/frontend/src/components/CategoryCard.tsx",
                                            lineNumber: 157,
                                            columnNumber: 74
                                        }, this)
                                }["CategoryCard[rows.map() > subtypesAvailable.map()]"])
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/CategoryCard.tsx",
                                lineNumber: 156,
                                columnNumber: 107
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-2 text-sm text-zinc-500",
                                children: row_1.subtypes.length ? row_1.subtypes.join(" | ") : "No subtypes selected"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/CategoryCard.tsx",
                                lineNumber: 160,
                                columnNumber: 79
                            }, this),
                            row_1.openStep === 2 && row_1.subtypes.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-3 flex justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "px-3 py-2 border rounded",
                                        onClick: {
                                            "CategoryCard[rows.map() > <button>.onClick]": ()=>updateField(i_1, {
                                                    openStep: 1
                                                })
                                        }["CategoryCard[rows.map() > <button>.onClick]"],
                                        children: "Back"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/CategoryCard.tsx",
                                        lineNumber: 160,
                                        columnNumber: 304
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "px-4 py-2 bg-emerald-600 text-white rounded",
                                        onClick: {
                                            "CategoryCard[rows.map() > <button>.onClick]": ()=>updateField(i_1, {
                                                    openStep: 3
                                                })
                                        }["CategoryCard[rows.map() > <button>.onClick]"],
                                        children: "Next"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/CategoryCard.tsx",
                                        lineNumber: 164,
                                        columnNumber: 76
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/components/CategoryCard.tsx",
                                lineNumber: 160,
                                columnNumber: 261
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/components/CategoryCard.tsx",
                        lineNumber: 152,
                        columnNumber: 89
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm font-medium flex justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "3. Speed & Notes (optional)"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/CategoryCard.tsx",
                                        lineNumber: 168,
                                        columnNumber: 152
                                    }, this),
                                    row_1.openStep !== 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "text-xs text-blue-600",
                                        onClick: {
                                            "CategoryCard[rows.map() > <button>.onClick]": ()=>updateField(i_1, {
                                                    openStep: 3
                                                })
                                        }["CategoryCard[rows.map() > <button>.onClick]"],
                                        children: "Edit"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/CategoryCard.tsx",
                                        lineNumber: 168,
                                        columnNumber: 221
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/components/CategoryCard.tsx",
                                lineNumber: 168,
                                columnNumber: 94
                            }, this),
                            row_1.openStep === 3 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-3 grid grid-cols-1 md:grid-cols-2 gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        value: row_1.speed,
                                        onChange: {
                                            "CategoryCard[rows.map() > <input>.onChange]": (e)=>updateField(i_1, {
                                                    speed: e.target.value
                                                })
                                        }["CategoryCard[rows.map() > <input>.onChange]"],
                                        placeholder: "e.g., 60 km/h",
                                        className: "p-2 border rounded bg-transparent"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/CategoryCard.tsx",
                                        lineNumber: 172,
                                        columnNumber: 167
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        value: row_1.notes,
                                        onChange: {
                                            "CategoryCard[rows.map() > <input>.onChange]": (e_0)=>updateField(i_1, {
                                                    notes: e_0.target.value
                                                })
                                        }["CategoryCard[rows.map() > <input>.onChange]"],
                                        placeholder: "Notes (optional)",
                                        className: "p-2 border rounded bg-transparent"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/CategoryCard.tsx",
                                        lineNumber: 176,
                                        columnNumber: 139
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-end md:col-span-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "px-4 py-2 bg-emerald-600 text-white rounded",
                                            onClick: {
                                                "CategoryCard[rows.map() > <button>.onClick]": ()=>updateField(i_1, {
                                                        openStep: 4
                                                    })
                                            }["CategoryCard[rows.map() > <button>.onClick]"],
                                            children: "Preview"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/CategoryCard.tsx",
                                            lineNumber: 180,
                                            columnNumber: 190
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/CategoryCard.tsx",
                                        lineNumber: 180,
                                        columnNumber: 142
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/components/CategoryCard.tsx",
                                lineNumber: 172,
                                columnNumber: 107
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-2 text-sm text-zinc-500",
                                children: [
                                    row_1.speed ? `Speed: ${row_1.speed}` : "",
                                    row_1.notes ? ` • ${row_1.notes}` : ""
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/components/CategoryCard.tsx",
                                lineNumber: 184,
                                columnNumber: 96
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/components/CategoryCard.tsx",
                        lineNumber: 168,
                        columnNumber: 89
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm font-medium",
                                children: "4. Preview"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/CategoryCard.tsx",
                                lineNumber: 184,
                                columnNumber: 242
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-3 bg-zinc-100 dark:bg-zinc-700 p-3 rounded",
                                children: previewSentence(row_1) || "Complete selections to preview."
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/CategoryCard.tsx",
                                lineNumber: 184,
                                columnNumber: 295
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-3 flex justify-end",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "px-4 py-2 bg-blue-600 text-white rounded",
                                    onClick: {
                                        "CategoryCard[rows.map() > <button>.onClick]": ()=>updateField(i_1, {
                                                openStep: 1
                                            })
                                    }["CategoryCard[rows.map() > <button>.onClick]"],
                                    children: "Edit All"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/CategoryCard.tsx",
                                    lineNumber: 184,
                                    columnNumber: 464
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/CategoryCard.tsx",
                                lineNumber: 184,
                                columnNumber: 425
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/components/CategoryCard.tsx",
                        lineNumber: 184,
                        columnNumber: 237
                    }, this)
                ]
            }, i_1, true, {
                fileName: "[project]/frontend/src/components/CategoryCard.tsx",
                lineNumber: 130,
                columnNumber: 14
            }, this);
        }
    }["CategoryCard[rows.map()]"]);
    let t9;
    if ($[15] !== addRow) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pt-3 flex justify-end",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "px-4 py-2 bg-emerald-600 text-white rounded",
                onClick: addRow,
                children: "+ Add Another Issue"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/CategoryCard.tsx",
                lineNumber: 193,
                columnNumber: 49
            }, this)
        }, void 0, false, {
            fileName: "[project]/frontend/src/components/CategoryCard.tsx",
            lineNumber: 193,
            columnNumber: 10
        }, this);
        $[15] = addRow;
        $[16] = t9;
    } else {
        t9 = $[16];
    }
    let t10;
    if ($[17] !== t7 || $[18] !== t8 || $[19] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t6,
            children: [
                t7,
                t8,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/components/CategoryCard.tsx",
            lineNumber: 201,
            columnNumber: 11
        }, this);
        $[17] = t7;
        $[18] = t8;
        $[19] = t9;
        $[20] = t10;
    } else {
        t10 = $[20];
    }
    return t10;
}
_s(CategoryCard, "2rPpS5JJ2Ls2srM3YlxkW/Wd7lQ=");
_c = CategoryCard;
function _CategoryCardPreviewSentence(row_0) {
    if (!row_0.issue || !row_0.subtypes.length) {
        return "";
    }
    const iss = row_0.issue;
    const subs = row_0.subtypes.join(" | ");
    const speed = row_0.speed ? ` on ${row_0.speed} road` : "";
    return `${iss} ${subs}${speed}.`;
}
var _c;
__turbopack_context__.k.register(_c, "CategoryCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
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
"[project]/frontend/src/app/query/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>QueryBuilderPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Chip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/Chip.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$CategoryCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/CategoryCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f$api$2f$backend$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/app/api/backend.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function QueryBuilderPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(47);
    if ($[0] !== "c75a4ce66720d5ca5041f4dd873a9d5485765c7c5272019ffcfa85dcff5a4da6") {
        for(let $i = 0; $i < 47; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c75a4ce66720d5ca5041f4dd873a9d5485765c7c5272019ffcfa85dcff5a4da6";
    }
    const [catalog, setCatalog] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [selectedCategories, setSelectedCategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {};
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const [categoryStates, setCategoryStates] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    let t2;
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "QueryBuilderPage[useEffect()]": ()=>{
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f$api$2f$backend$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchCatalog"])().then(setCatalog);
            }
        })["QueryBuilderPage[useEffect()]"];
        t3 = [];
        $[3] = t2;
        $[4] = t3;
    } else {
        t2 = $[3];
        t3 = $[4];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    if (!catalog) {
        let t4;
        if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
            t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-h-screen flex items-center justify-center",
                children: "Loading…"
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/query/page.tsx",
                lineNumber: 54,
                columnNumber: 12
            }, this);
            $[5] = t4;
        } else {
            t4 = $[5];
        }
        return t4;
    }
    let handleCategoryChange;
    let handleSubmitAll;
    let t4;
    let t5;
    let t6;
    let t7;
    let t8;
    if ($[6] !== catalog || $[7] !== categoryStates || $[8] !== selectedCategories) {
        const categories = Object.keys(catalog);
        const toggleCategory = {
            "QueryBuilderPage[toggleCategory]": (cat)=>{
                setSelectedCategories({
                    "QueryBuilderPage[toggleCategory > setSelectedCategories()]": (prev)=>{
                        const next = prev.includes(cat) ? prev.filter({
                            "QueryBuilderPage[toggleCategory > setSelectedCategories() > prev.filter()]": (x)=>x !== cat
                        }["QueryBuilderPage[toggleCategory > setSelectedCategories() > prev.filter()]"]) : [
                            ...prev,
                            cat
                        ];
                        if (!prev.includes(cat)) {
                            setCategoryStates({
                                "QueryBuilderPage[toggleCategory > setSelectedCategories() > setCategoryStates()]": (cs)=>({
                                        ...cs,
                                        [cat]: {
                                            issues: [],
                                            subtypes: [],
                                            speed: "",
                                            notes: ""
                                        }
                                    })
                            }["QueryBuilderPage[toggleCategory > setSelectedCategories() > setCategoryStates()]"]);
                        } else {
                            setCategoryStates({
                                "QueryBuilderPage[toggleCategory > setSelectedCategories() > setCategoryStates()]": (cs_0)=>{
                                    const n = {
                                        ...cs_0
                                    };
                                    delete n[cat];
                                    return n;
                                }
                            }["QueryBuilderPage[toggleCategory > setSelectedCategories() > setCategoryStates()]"]);
                        }
                        return next;
                    }
                }["QueryBuilderPage[toggleCategory > setSelectedCategories()]"]);
            }
        }["QueryBuilderPage[toggleCategory]"];
        let t9;
        if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
            t9 = ({
                "QueryBuilderPage[handleCategoryChange]": (cat_0, state)=>{
                    setCategoryStates({
                        "QueryBuilderPage[handleCategoryChange > setCategoryStates()]": (prev_0)=>({
                                ...prev_0,
                                [cat_0]: state
                            })
                    }["QueryBuilderPage[handleCategoryChange > setCategoryStates()]"]);
                }
            })["QueryBuilderPage[handleCategoryChange]"];
            $[16] = t9;
        } else {
            t9 = $[16];
        }
        handleCategoryChange = t9;
        let t10;
        if ($[17] !== categoryStates || $[18] !== selectedCategories) {
            t10 = ({
                "QueryBuilderPage[handleSubmitAll]": async ()=>{
                    const sentences = selectedCategories.map({
                        "QueryBuilderPage[handleSubmitAll > selectedCategories.map()]": (cat_1)=>{
                            const s = categoryStates[cat_1];
                            if (!s || !s.issues?.length || !s.subtypes?.length) {
                                return null;
                            }
                            const iss = s.issues.join(" & ");
                            const subs = s.subtypes.join(" | ");
                            const speed = s.speed ? ` on ${s.speed} road` : "";
                            return `${iss} ${subs}${speed}.`;
                        }
                    }["QueryBuilderPage[handleSubmitAll > selectedCategories.map()]"]).filter(Boolean);
                    const finalPrompt = sentences.join(" ");
                    console.log("Final prompt:", finalPrompt);
                }
            })["QueryBuilderPage[handleSubmitAll]"];
            $[17] = categoryStates;
            $[18] = selectedCategories;
            $[19] = t10;
        } else {
            t10 = $[19];
        }
        handleSubmitAll = t10;
        t8 = "min-h-screen flex items-start md:items-center justify-center py-12";
        t6 = "w-full max-w-3xl";
        if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
            t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "text-center mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl font-bold",
                        children: "RoadMarshal AI"
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/app/query/page.tsx",
                        lineNumber: 152,
                        columnNumber: 49
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-zinc-500 mt-2",
                        children: "Hi — how can I assist you today? Select your query type(s) below."
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/app/query/page.tsx",
                        lineNumber: 152,
                        columnNumber: 103
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/app/query/page.tsx",
                lineNumber: 152,
                columnNumber: 12
            }, this);
            $[20] = t7;
        } else {
            t7 = $[20];
        }
        t4 = "mb-6 flex flex-wrap gap-3 justify-center";
        t5 = categories.map({
            "QueryBuilderPage[categories.map()]": (cat_2)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Chip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    label: cat_2,
                    selected: selectedCategories.includes(cat_2),
                    onClick: {
                        "QueryBuilderPage[categories.map() > <Chip>.onClick]": ()=>toggleCategory(cat_2)
                    }["QueryBuilderPage[categories.map() > <Chip>.onClick]"]
                }, cat_2, false, {
                    fileName: "[project]/frontend/src/app/query/page.tsx",
                    lineNumber: 159,
                    columnNumber: 54
                }, this)
        }["QueryBuilderPage[categories.map()]"]);
        $[6] = catalog;
        $[7] = categoryStates;
        $[8] = selectedCategories;
        $[9] = handleCategoryChange;
        $[10] = handleSubmitAll;
        $[11] = t4;
        $[12] = t5;
        $[13] = t6;
        $[14] = t7;
        $[15] = t8;
    } else {
        handleCategoryChange = $[9];
        handleSubmitAll = $[10];
        t4 = $[11];
        t5 = $[12];
        t6 = $[13];
        t7 = $[14];
        t8 = $[15];
    }
    let t9;
    if ($[21] !== t4 || $[22] !== t5) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t4,
            children: t5
        }, void 0, false, {
            fileName: "[project]/frontend/src/app/query/page.tsx",
            lineNumber: 184,
            columnNumber: 10
        }, this);
        $[21] = t4;
        $[22] = t5;
        $[23] = t9;
    } else {
        t9 = $[23];
    }
    let t10;
    if ($[24] !== catalog || $[25] !== categoryStates || $[26] !== handleCategoryChange || $[27] !== selectedCategories) {
        let t11;
        if ($[29] !== catalog || $[30] !== categoryStates || $[31] !== handleCategoryChange) {
            t11 = ({
                "QueryBuilderPage[selectedCategories.map()]": (cat_3)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$CategoryCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        category: cat_3,
                        catalog: catalog,
                        onChange: {
                            "QueryBuilderPage[selectedCategories.map() > <CategoryCard>.onChange]": (st)=>handleCategoryChange(cat_3, st)
                        }["QueryBuilderPage[selectedCategories.map() > <CategoryCard>.onChange]"],
                        initial: categoryStates[cat_3]
                    }, cat_3, false, {
                        fileName: "[project]/frontend/src/app/query/page.tsx",
                        lineNumber: 196,
                        columnNumber: 64
                    }, this)
            })["QueryBuilderPage[selectedCategories.map()]"];
            $[29] = catalog;
            $[30] = categoryStates;
            $[31] = handleCategoryChange;
            $[32] = t11;
        } else {
            t11 = $[32];
        }
        t10 = selectedCategories.map(t11);
        $[24] = catalog;
        $[25] = categoryStates;
        $[26] = handleCategoryChange;
        $[27] = selectedCategories;
        $[28] = t10;
    } else {
        t10 = $[28];
    }
    let t11;
    if ($[33] !== t10) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6",
            children: t10
        }, void 0, false, {
            fileName: "[project]/frontend/src/app/query/page.tsx",
            lineNumber: 218,
            columnNumber: 11
        }, this);
        $[33] = t10;
        $[34] = t11;
    } else {
        t11 = $[34];
    }
    let t12;
    if ($[35] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "px-6 py-3 bg-zinc-100 dark:bg-zinc-800 border rounded",
            onClick: _QueryBuilderPageButtonOnClick,
            children: "Edit"
        }, void 0, false, {
            fileName: "[project]/frontend/src/app/query/page.tsx",
            lineNumber: 226,
            columnNumber: 11
        }, this);
        $[35] = t12;
    } else {
        t12 = $[35];
    }
    let t13;
    if ($[36] !== handleSubmitAll) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-8 flex justify-center gap-3",
            children: [
                t12,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "px-6 py-3 bg-emerald-600 text-white rounded",
                    onClick: handleSubmitAll,
                    children: "Submit All"
                }, void 0, false, {
                    fileName: "[project]/frontend/src/app/query/page.tsx",
                    lineNumber: 233,
                    columnNumber: 64
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/app/query/page.tsx",
            lineNumber: 233,
            columnNumber: 11
        }, this);
        $[36] = handleSubmitAll;
        $[37] = t13;
    } else {
        t13 = $[37];
    }
    let t14;
    if ($[38] !== t11 || $[39] !== t13 || $[40] !== t6 || $[41] !== t7 || $[42] !== t9) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t6,
            children: [
                t7,
                t9,
                t11,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/app/query/page.tsx",
            lineNumber: 241,
            columnNumber: 11
        }, this);
        $[38] = t11;
        $[39] = t13;
        $[40] = t6;
        $[41] = t7;
        $[42] = t9;
        $[43] = t14;
    } else {
        t14 = $[43];
    }
    let t15;
    if ($[44] !== t14 || $[45] !== t8) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t8,
            children: t14
        }, void 0, false, {
            fileName: "[project]/frontend/src/app/query/page.tsx",
            lineNumber: 253,
            columnNumber: 11
        }, this);
        $[44] = t14;
        $[45] = t8;
        $[46] = t15;
    } else {
        t15 = $[46];
    }
    return t15;
}
_s(QueryBuilderPage, "46blnjxy3Ftq2EY5B4h5WjtUN/4=");
_c = QueryBuilderPage;
function _QueryBuilderPageButtonOnClick() {}
var _c;
__turbopack_context__.k.register(_c, "QueryBuilderPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=frontend_src_569de153._.js.map