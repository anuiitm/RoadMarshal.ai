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
(()=>{
    const e = new Error("Cannot find module '@/components/CategoryCard'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
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
                "HomePage[(anonymous)()]": (cat_3)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CategoryCard, {
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

//# sourceMappingURL=frontend_src_d1428c14._.js.map