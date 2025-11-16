export type Row = { problems: string[]; speed?: string; notes?: string };
export type TypeState = { rows: Row[] };
export type CategoryState = { [typeName: string]: TypeState };
export type AppState = Record<string, CategoryState>;

export function generateHumanPrompt(state: AppState, customParsedPrompt?: string | null): string {
  if (!state || Object.keys(state).length === 0) {
    if (customParsedPrompt) {
      return customParsedPrompt;
    }
    return "";
  }
  const parts: string[] = [];
  for (const category of Object.keys(state)) {
    const types = state[category];
    if (!types || Object.keys(types).length === 0) continue;
    parts.push(`**${category}**`);
    
    for (const issueName of Object.keys(types)) {
      const typeState = types[issueName];
      if (!typeState.rows || typeState.rows.length === 0) continue;
      parts.push(`    **Issue:** ${issueName}`);
      for (const r of typeState.rows) {
        if (r.problems && r.problems.length > 0) {
          const subtypes = r.problems.join(", ");
          parts.push(`        **Subtypes**: ${subtypes}`);
        }
        if (r.speed) {
          parts.push(`        **Road Speed Limit:** ${r.speed}`);
        }
        if (r.notes) {
          parts.push(`        **Notes:** ${r.notes}`);
        }
      }
    }
    parts.push("\n");
  }
  if (customParsedPrompt) {
    parts.push("**Custom Query:**");
    const customLines = customParsedPrompt.split('\n');
    customLines.forEach(line => {
      parts.push(`    ${line}`);
    });
  }
  return parts.join("\n");
}


export function generateLLMPrompt(state: AppState, customParsedPrompt?: string | null): string {
  const header = `Please recommend road safety interventions for the following issues. Use only retrieved context and cite clauses exactly as provided. Do not hallucinate clause numbers. Output in markdown.`;
  const bodyParts: string[] = [];
  for (const category of Object.keys(state)) {
    const types = state[category];
    if (!types || Object.keys(types).length === 0) continue;
    for (const typeName of Object.keys(types)) {
      const typeState = types[typeName];
      if (!typeState.rows || typeState.rows.length === 0) continue;
      const rowsText = typeState.rows.map((r) => {
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
