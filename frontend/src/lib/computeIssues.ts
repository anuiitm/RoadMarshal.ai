export function computeIssuesForCategory(category: string, catalog: any): string[] {
  if (!catalog || !catalog[category]) return [];

  const allIssues = new Set<string>();

  // category → each subtype → problems[]
  Object.values(catalog[category]).forEach((sub: any) => {
    if (sub.problems && Array.isArray(sub.problems)) {
      sub.problems.forEach((p: string) => allIssues.add(p));
    }
  });

  return Array.from(allIssues);
}
