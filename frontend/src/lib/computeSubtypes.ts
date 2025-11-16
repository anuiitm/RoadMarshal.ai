export function computeSubtypesForIssue(category: string, issue: string, catalog: any) {
  const subtypes = catalog[category] || {};
  const valid: string[] = [];

  Object.entries(subtypes).forEach(([subtypeName, subtypeObj]: any) => {
    if (Array.isArray(subtypeObj.problems) && subtypeObj.problems.includes(issue)) {
      valid.push(subtypeName);
    }
  });

  return valid.sort();
}
