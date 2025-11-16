"use client";
import { useState, useEffect, useRef } from "react";
import Chip from "@/components/Chip";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { computeIssuesForCategory } from "@/lib/computeIssues";
import { computeSubtypesForIssue } from "@/lib/computeSubtypes";
import type { CategoryState } from "@/app/utils/prompt";
import { CheckCircle2, Circle, ChevronRight, X, Plus } from "lucide-react";

type Row = {
  issue: string;
  subtypes: string[];
  speed: string;
  notes: string;
  openStep: number;
};

export default function CategoryCard({
  id,
  catalog,
  value,
  onChange,
}: {
  id: string;
  catalog: Record<string, unknown> | null;
  value: CategoryState;
  onChange: (next: CategoryState) => void;
}) {
  const issuesAvailable: string[] = computeIssuesForCategory(id, catalog);

  const categoryStateToRows = (state: CategoryState): Row[] => {
    const rows: Row[] = [];
    Object.entries(state).forEach(([issueName, typeState]) => {
      typeState.rows.forEach((row) => {
        rows.push({
          issue: issueName,
          subtypes: row.problems || [],
          speed: row.speed || "",
          notes: row.notes || "",
          openStep: 1, 
        });
      });
    });
    return rows.length > 0 ? rows : [{ issue: "", subtypes: [], speed: "", notes: "", openStep: 1 }];
  };

  const rowsToCategoryState = (rows: Row[]): CategoryState => {
    const state: CategoryState = {};
    rows.forEach((row) => {
      if (!row.issue || row.subtypes.length === 0) return;
      
      const issueKey = row.issue;
      if (!state[issueKey]) {
        state[issueKey] = { rows: [] };
      }
      
      state[issueKey].rows.push({
        problems: row.subtypes,
        speed: row.speed || undefined,
        notes: row.notes || undefined,
      });
    });
    return state;
  };

  const [rows, setRows] = useState<Row[]>(() => categoryStateToRows(value || {}));
  const [lastValue, setLastValue] = useState<string>(() => JSON.stringify(value || {}));
  const [localInputs, setLocalInputs] = useState<{ [key: number]: { speed: string; notes: string } }>({});
  const isInternalUpdate = useRef(false);

  useEffect(() => {
    if (isInternalUpdate.current) {
      isInternalUpdate.current = false;
      return; 
    }
    
    const newValueStr = JSON.stringify(value || {});
    if (newValueStr !== lastValue) {
      setRows((currentRows) => {
        const newRows = categoryStateToRows(value || {});
        const preservedRows = newRows.map((newRow) => {
          const matchingRow = currentRows.find(
            (r) => r.issue === newRow.issue && 
                   JSON.stringify(r.subtypes.sort()) === JSON.stringify(newRow.subtypes.sort()) &&
                   r.speed === newRow.speed &&
                   r.notes === newRow.notes
          );
          if (matchingRow && matchingRow.openStep) {
            return { ...newRow, openStep: matchingRow.openStep };
          }
          return newRow;
        });
        return preservedRows;
      });
      setLastValue(newValueStr);
      setLocalInputs({});
    }
  }, [value, lastValue]);

  const updateRows = (next: Row[]) => {
    isInternalUpdate.current = true;
    setRows(next);
    onChange(rowsToCategoryState(next));
  };

  const updateField = (i: number, patch: Partial<Row>) => {
    const next = [...rows];
    const oldIssue = next[i].issue;
    next[i] = { ...next[i], ...patch };
    if (patch.issue && patch.issue !== oldIssue && oldIssue) {
      next[i].subtypes = [];
      next[i].speed = "";
      next[i].notes = "";
      next[i].openStep = 2; 
    }
    updateRows(next);
  };

  const addRow = () => {
    updateRows([
      ...rows,
      { issue: "", subtypes: [], speed: "", notes: "", openStep: 1 },
    ]);
  };

  const removeRow = (i: number) => {
    updateRows(rows.filter((_, idx) => idx !== i));
  };

  const toggleSubtype = (i: number, subtype: string) => {
    const next = [...rows];
    const row = next[i];

    row.subtypes = row.subtypes.includes(subtype)
      ? row.subtypes.filter((x) => x !== subtype)
      : [...row.subtypes, subtype];

    updateRows(next);
  };

  const preview = (row: Row) => {
    if (!row.issue || row.subtypes.length === 0) return "Incomplete…";
    const sub = row.subtypes.join(" | ");
    const spd = row.speed ? ` on ${row.speed} road` : "";
    return `${row.issue}: ${sub}${spd}${row.notes ? ` — ${row.notes}` : ""}`;
  };

  if (!catalog || !catalog[id]) {
    return (
      <div className="w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 shadow-sm">
        <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">{id}</h3>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-2">Loading catalog...</p>
      </div>
    );
  }

  const getStepStatus = (row: Row, step: number) => {
    if (step === 1) return row.issue ? "complete" : row.openStep === 1 ? "active" : "pending";
    if (step === 2) {
      if (!row.issue) return "disabled";
      return row.subtypes.length > 0 ? "complete" : row.openStep === 2 ? "active" : "pending";
    }
    if (step === 3) {
      if (!row.issue || row.subtypes.length === 0) return "disabled";
      return row.speed || row.notes ? "complete" : row.openStep === 3 ? "active" : "pending";
    }
    if (step === 4) {
      if (!row.issue || row.subtypes.length === 0) return "disabled";
      return row.openStep === 4 ? "active" : "complete";
    }
    return "pending";
  };

  const getDisplayName = (categoryId: string) => {
    if (categoryId === "Traffic Calming Measures") return "Traffic Calming";
    return categoryId;
  };

  return (
    <div className="w-full h-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-5 shadow-sm flex flex-col max-h-[800px]">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">{getDisplayName(id)}</h3>
      </div>
      <div className="flex-1 overflow-y-auto space-y-4 min-h-0">

      {rows.map((row, i) => {
        const subtypesAvailable: string[] = row.issue && catalog
          ? computeSubtypesForIssue(id, row.issue, catalog)
          : [];

        const step1Status = getStepStatus(row, 1);
        const step2Status = getStepStatus(row, 2);
        const step3Status = getStepStatus(row, 3);
        const step4Status = getStepStatus(row, 4);

        return (
          <div
            key={i}
            className="border border-zinc-200 dark:border-zinc-800 rounded-xl p-4 bg-gradient-to-br from-zinc-50 to-white dark:from-zinc-900 dark:to-zinc-800 space-y-4 shadow-sm"
          >
            <div className="flex justify-between items-center pb-3 border-b border-zinc-200 dark:border-zinc-800">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 font-semibold text-sm">
                  {i + 1}
                </div>
                <span className="font-semibold text-base text-zinc-900 dark:text-zinc-100">Issue #{i + 1}</span>
              </div>

              {i > 0 && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => removeRow(i)}
                  className="text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 hover:bg-red-50 dark:hover:bg-red-900/20"
                >
                  <X className="w-4 h-4 mr-1" />
                  Remove
                </Button>
              )}
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {step1Status === "complete" ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  ) : step1Status === "active" ? (
                    <Circle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 fill-emerald-600 dark:fill-emerald-400" />
                  ) : (
                    <Circle className="w-4 h-4 text-zinc-400 dark:text-zinc-600" />
                  )}
                  <span className="font-semibold text-sm text-zinc-900 dark:text-zinc-100">
                    1. Select Issue
                  </span>
                </div>

                {row.openStep !== 1 && row.issue && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => updateField(i, { openStep: 1 })}
                    className="text-xs h-7"
                  >
                    Edit
                  </Button>
                )}
              </div>

              {row.openStep === 1 ? (
                <div className="pl-6 space-y-2">
                  <p className="text-xs text-zinc-600 dark:text-zinc-400">Choose the issue you want to address:</p>
                  <div className="flex flex-wrap gap-2">
                    {issuesAvailable.map((iss) => (
                      <Chip
                        key={iss}
                        label={iss}
                        selected={row.issue === iss}
                        onClick={() =>
                          updateField(i, {
                            issue: iss,
                            openStep: 2,
                          })
                        }
                      />
                    ))}
                  </div>
                </div>
              ) : (
                <div className="pl-6">
                  {row.issue ? (
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-lg">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                      <span className="text-sm font-medium text-emerald-900 dark:text-emerald-100">{row.issue}</span>
                    </div>
                  ) : (
                    <span className="text-sm text-zinc-400 dark:text-zinc-600">No issue selected</span>
                  )}
                </div>
              )}
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {step2Status === "complete" ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  ) : step2Status === "active" ? (
                    <Circle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 fill-emerald-600 dark:fill-emerald-400" />
                  ) : step2Status === "disabled" ? (
                    <Circle className="w-4 h-4 text-zinc-300 dark:text-zinc-700" />
                  ) : (
                    <Circle className="w-4 h-4 text-zinc-400 dark:text-zinc-600" />
                  )}
                  <span className={`font-semibold text-sm ${
                    step2Status === "disabled" 
                      ? "text-zinc-400 dark:text-zinc-600" 
                      : "text-zinc-900 dark:text-zinc-100"
                  }`}>
                    2. Select Subtypes
                  </span>
                </div>
                {row.openStep !== 2 && row.subtypes.length > 0 && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => updateField(i, { openStep: 2 })}
                    className="text-xs h-7"
                  >
                    Edit
                  </Button>
                )}
              </div>

              {row.openStep === 2 ? (
                <div className="pl-6 space-y-2">
                  <p className="text-xs text-zinc-600 dark:text-zinc-400">Select one or more subtypes:</p>
                  {subtypesAvailable.length === 0 ? (
                    <div className="text-sm text-zinc-500 dark:text-zinc-400 p-2 bg-zinc-100 dark:bg-zinc-800 rounded-lg">
                      No subtypes available for this issue.
                    </div>
                  ) : (
                    <>
                      <div className="flex flex-wrap gap-2">
                        {subtypesAvailable.map((s) => (
                          <Chip
                            key={s}
                            label={s}
                            selected={row.subtypes.includes(s)}
                            onClick={() => toggleSubtype(i, s)}
                          />
                        ))}
                      </div>
                      {row.subtypes.length > 0 && (
                        <div className="flex justify-end pt-2">
                          <Button
                            onClick={() => {
                              updateField(i, { openStep: 3 });
                            }}
                            size="sm"
                            className="bg-emerald-600 hover:bg-emerald-700 text-white"
                          >
                            Continue
                            <ChevronRight className="w-3.5 h-3.5 ml-1" />
                          </Button>
                        </div>
                      )}
                    </>
                  )}
                </div>
              ) : (
                <div className="pl-6">
                  {row.subtypes.length > 0 ? (
                    <div className="flex flex-wrap gap-2">
                      {subtypesAvailable.length > 0 ? (
                        subtypesAvailable.map((s) => (
                          <Chip
                            key={s}
                            label={s}
                            selected={row.subtypes.includes(s)}
                            onClick={() => toggleSubtype(i, s)}
                          />
                        ))
                      ) : (
                        row.subtypes.map((s) => (
                          <div
                            key={s}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-lg"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                            <span className="text-sm font-medium text-emerald-900 dark:text-emerald-100">{s}</span>
                          </div>
                        ))
                      )}
                    </div>
                  ) : (
                    <span className="text-sm text-zinc-400 dark:text-zinc-600">
                      {!row.issue ? "Select an issue first" : "No subtypes selected"}
                    </span>
                  )}
                </div>
              )}
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {step3Status === "complete" ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  ) : step3Status === "active" ? (
                    <Circle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 fill-emerald-600 dark:fill-emerald-400" />
                  ) : step3Status === "disabled" ? (
                    <Circle className="w-4 h-4 text-zinc-300 dark:text-zinc-700" />
                  ) : (
                    <Circle className="w-4 h-4 text-zinc-400 dark:text-zinc-600" />
                  )}
                  <span className={`font-semibold text-sm ${
                    step3Status === "disabled" 
                      ? "text-zinc-400 dark:text-zinc-600" 
                      : "text-zinc-900 dark:text-zinc-100"
                  }`}>
                    3. Speed & Notes
                  </span>
                </div>
                {row.openStep !== 3 && (row.speed || row.notes) && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      setLocalInputs(prev => ({ ...prev, [i]: { speed: row.speed, notes: row.notes } }));
                      updateField(i, { openStep: 3 });
                    }}
                    className="text-xs h-7"
                  >
                    Edit
                  </Button>
                )}
              </div>

              {row.openStep === 3 ? (
                <div className="pl-6 space-y-3">
                  <p className="text-xs text-zinc-600 dark:text-zinc-400">Add additional details (optional):</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-zinc-700 dark:text-zinc-300">Speed</label>
                      <Input
                        value={localInputs[i]?.speed ?? row.speed}
                        onChange={(e) => {
                          setLocalInputs(prev => ({ 
                            ...prev, 
                            [i]: { 
                              speed: e.target.value, 
                              notes: prev[i]?.notes ?? row.notes 
                            } 
                          }));
                        }}
                        placeholder="e.g., 60 km/h"
                        className="w-full"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-zinc-700 dark:text-zinc-300">Notes</label>
                      <Input
                        value={localInputs[i]?.notes ?? row.notes}
                        onChange={(e) => {
                          setLocalInputs(prev => ({ 
                            ...prev, 
                            [i]: { 
                              speed: prev[i]?.speed ?? row.speed, 
                              notes: e.target.value 
                            } 
                          }));
                        }}
                        placeholder="Additional information (optional)"
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end pt-1">
                    <Button
                      onClick={() => {
                        const localSpeed = localInputs[i]?.speed ?? row.speed;
                        const localNotes = localInputs[i]?.notes ?? row.notes;
                        updateField(i, { speed: localSpeed, notes: localNotes, openStep: 4 });
                        setLocalInputs(prev => {
                          const next = { ...prev };
                          delete next[i];
                          return next;
                        });
                      }}
                      size="sm"
                      className="bg-emerald-600 hover:bg-emerald-700 text-white"
                    >
                      Preview
                      <ChevronRight className="w-3.5 h-3.5 ml-1" />
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="pl-6">
                  {row.speed || row.notes ? (
                    <div className="flex flex-wrap gap-2">
                      {row.speed && (
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                          <span className="text-sm font-medium text-blue-900 dark:text-blue-100">
                            Speed: {row.speed}
                          </span>
                        </div>
                      )}
                      {row.notes && (
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                          <span className="text-sm font-medium text-blue-900 dark:text-blue-100">
                            Notes: {row.notes}
                          </span>
                        </div>
                      )}
                    </div>
                  ) : (
                    <span className="text-sm text-zinc-400 dark:text-zinc-600">
                      {step3Status === "disabled" ? "Complete previous steps first" : "No speed or notes added"}
                    </span>
                  )}
                </div>
              )}
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                {step4Status === "complete" ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                ) : step4Status === "active" ? (
                  <Circle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 fill-emerald-600 dark:fill-emerald-400" />
                ) : step4Status === "disabled" ? (
                  <Circle className="w-4 h-4 text-zinc-300 dark:text-zinc-700" />
                ) : (
                  <Circle className="w-4 h-4 text-zinc-400 dark:text-zinc-600" />
                )}
                <span className={`font-semibold text-sm ${
                  step4Status === "disabled" 
                    ? "text-zinc-400 dark:text-zinc-600" 
                    : "text-zinc-900 dark:text-zinc-100"
                }`}>
                  4. Preview
                </span>
              </div>

              <div className="pl-6">
                <div className="p-3 rounded-lg bg-gradient-to-br from-emerald-50 to-blue-50 dark:from-emerald-900/20 dark:to-blue-900/20 border border-emerald-200 dark:border-emerald-800">
                  <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100 whitespace-pre-wrap">
                    {preview(row)}
                  </p>
                </div>

                {row.openStep === 4 && (
                  <div className="mt-3 flex justify-end">
                    <Button
                      onClick={() => updateField(i, { openStep: 1 })}
                      variant="outline"
                      size="sm"
                    >
                      Edit All
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}

      </div>
      
      <div className="pt-4 mt-4 border-t border-zinc-200 dark:border-zinc-800 flex-shrink-0">
        <Button
          onClick={addRow}
          variant="outline"
          size="sm"
          className="w-full border-dashed border-2 hover:border-emerald-600 dark:hover:border-emerald-500 hover:bg-emerald-50 dark:hover:bg-emerald-900/20"
        >
          <Plus className="w-3.5 h-3.5 mr-2" />
          Add Another Issue
        </Button>
      </div>
    </div>
  );
}
