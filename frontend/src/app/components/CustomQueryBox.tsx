"use client";
import { useState } from "react";
import React from "react";
import { parseQuery } from "../api/backend";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Pencil } from "lucide-react";

function formatPromptText(text: string): React.ReactNode[] {
  const parts: React.ReactNode[] = [];
  const lines = text.split('\n');
  let key = 0;
  
  lines.forEach((line, idx) => {
    const boldRegex = /\*\*([^*]+)\*\*/g;
    let lastIndex = 0;
    let match;
    const lineParts: React.ReactNode[] = [];
    
    while ((match = boldRegex.exec(line)) !== null) {
      if (match.index > lastIndex) {
        lineParts.push(line.substring(lastIndex, match.index));
      }
      lineParts.push(
        <strong key={`bold-${key++}`} className="font-bold text-zinc-900 dark:text-zinc-100">
          {match[1]}
        </strong>
      );
      lastIndex = match.index + match[0].length;
    }
    
    if (lastIndex < line.length) {
      lineParts.push(line.substring(lastIndex));
    }
    
    if (lineParts.length === 0) {
      lineParts.push(line);
    }
    
    parts.push(
      <span key={`line-${idx}`}>
        {lineParts}
      </span>
    );
    
    if (idx < lines.length - 1) {
      parts.push('\n');
    }
  });
  
  return parts;
}

function formatCustomQuery(parsed: any): string {
  if (!parsed) return "";
  
  console.log('formatCustomQuery input:', parsed, typeof parsed); 
  
  try {
    let data = parsed;
    if (typeof parsed === 'string') {
      let cleaned = parsed.trim();
      if (cleaned.startsWith('```')) {
        cleaned = cleaned.replace(/^```(?:json)?\s*\n?/i, '');
        cleaned = cleaned.replace(/\n?```\s*$/g, '');
        cleaned = cleaned.trim();
      }
      
      try {
        data = JSON.parse(cleaned);
      } catch (parseError) {
        console.error('JSON parse error:', parseError, 'Cleaned string:', cleaned);
        return parsed;
      }
    }
    
    if (typeof data !== 'object' || data === null) {
      return String(data);
    }
    
    const parts: string[] = [];
    
    if (data.categories && Array.isArray(data.categories)) {
      data.categories.forEach((cat: any) => {
        if (cat && typeof cat === 'object') {
          if (cat.category) parts.push(`**Category**: ${cat.category}`);
          if (cat.type) parts.push(`**Type**: ${cat.type}`);
          if (cat.problems && Array.isArray(cat.problems) && cat.problems.length > 0) {
            parts.push(`**Problems**: ${cat.problems.join(", ")}`);
          }
          if (cat.speed) parts.push(`**Speed**: ${cat.speed}`);
          if (cat.notes) parts.push(`**Notes**: ${cat.notes}`);
        }
      });
    }
    
    if (data.prompt) {
      parts.push(`**Final prompt**: ${data.prompt}`);
    }
    
    const result = parts.join("\n");
    console.log('formatCustomQuery output:', result); // Debug log
    return result;
  } catch (error) {
    console.error('formatCustomQuery error:', error);
    return typeof parsed === 'string' ? parsed : JSON.stringify(parsed);
  }
}

export default function CustomQueryBox({
  onParsed,
}: {
  onParsed?: (parsed: any) => void;
}) {
  const [text, setText] = useState("");
  const [parsed, setParsed] = useState<any>(null);
  const [formattedPrompt, setFormattedPrompt] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(true);
  const [isEditingPrompt, setIsEditingPrompt] = useState(false);

  const handleParse = async () => {
    if (!text.trim()) return;

    setLoading(true);
    try {
      const res = await parseQuery(text);
      
      let result = res.parsed || res.raw || res || null;
      
      if (typeof result === 'string' && result.trim().startsWith('{')) {
        try {
          result = JSON.parse(result);
        } catch {
        }
      }
      
      setParsed(result);
      
      const formatted = formatCustomQuery(result);
      console.log('Formatted prompt:', formatted); 
      setFormattedPrompt(formatted);
      setIsEditing(false);
      setIsEditingPrompt(false);

      if (onParsed) {
        onParsed(formatted);
      }
    } catch (error) {
      console.error('Parse error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleEditPrompt = () => {
    setIsEditingPrompt(true);
  };

  const handleSavePrompt = () => {
    setIsEditingPrompt(false);
    if (onParsed && formattedPrompt.trim()) {
      onParsed(formattedPrompt);
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
    setParsed(null);
    setFormattedPrompt("");
    if (onParsed) {
      onParsed(null); 
    }
  };

  return (
    <div className="w-full h-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-5 shadow-sm flex flex-col max-h-[800px]">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">Custom Query</h3>
        {parsed && !isEditing && (
          <Button
            variant="ghost"
            size="sm"
            onClick={handleEdit}
            className="text-xs h-7"
          >
            <Pencil className="w-3.5 h-3.5 mr-1" />
            Edit Query
          </Button>
        )}
      </div>
      
      <div className="flex-1 overflow-y-auto space-y-3 min-h-0">
        {isEditing ? (
          <Textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type your custom query here..."
            className="w-full min-h-[200px] bg-transparent"
          />
        ) : parsed ? (
          <div className="space-y-3">
            {isEditingPrompt ? (
              <Textarea
                value={formattedPrompt || formatCustomQuery(parsed)}
                onChange={(e) => setFormattedPrompt(e.target.value)}
                placeholder="Edit the parsed prompt..."
                className="w-full min-h-[200px] bg-transparent"
              />
            ) : (
              <div className="p-3 bg-zinc-50 dark:bg-zinc-800 rounded-lg border border-zinc-200 dark:border-zinc-700">
                <div className="text-sm text-zinc-900 dark:text-zinc-100 whitespace-pre-wrap font-sans">
                  {formatPromptText(formattedPrompt || formatCustomQuery(parsed))}
                </div>
              </div>
            )}
          </div>
        ) : null}
      </div>

      <div className="pt-4 mt-4 border-t border-zinc-200 dark:border-zinc-800 flex-shrink-0 space-y-2">
        {isEditing ? (
          <Button
            onClick={handleParse}
            disabled={loading || !text.trim()}
            variant="outline"
            size="sm"
            className="w-full border-3 hover:border-emerald-600 dark:hover:border-emerald-500 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Parsing…" : "Analyze & Parse"}
          </Button>
        ) : parsed && formattedPrompt ? (
          isEditingPrompt ? (
            <Button
              onClick={handleSavePrompt}
              variant="outline"
              size="sm"
              className="w-full border-3 hover:border-emerald-600 dark:hover:border-emerald-500 hover:bg-emerald-50 dark:hover:bg-emerald-900/20"
            >
              Save Prompt
            </Button>
          ) : (
            <Button
              onClick={handleEditPrompt}
              variant="ghost"
              size="sm"
              className="w-full"
            >
              <Pencil className="w-3.5 h-3.5 mr-1" />
              Edit Prompt
            </Button>
          )
        ) : null}
      </div>
    </div>
  );
}
