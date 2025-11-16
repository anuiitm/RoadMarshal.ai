"use client";

import React, { useEffect, useState } from "react";
// Import your API functions
import { fetchCatalog, sendQuery, ParseResponse } from "@/app/api/backend";
// Import your state and prompt logic
import { AppState, CategoryState, generateLLMPrompt, generateHumanPrompt } from "@/app/utils/prompt";

// Import all your UI components
import Chip from "@/components/Chip"; // Uses the one in src/components/
import CategoryCard from "@/app/components/CategoryCard"; // Uses the one in src/app/components/
import CustomQueryBox from "@/app/components/CustomQueryBox";
import LoadingView from "@/app/components/LoadingView";
import ResultView from "@/app/components/ResultView";
import Navbar from "@/app/components/Navbar";
import FinalPromptModal from "@/app/components/FinalPromptModal";

// Main page component
export default function QueryPage() {
  const [catalog, setCatalog] = useState<any>(null);
  const [loadingCatalog, setLoadingCatalog] = useState(true);

  // --- State Management ---
  const [appState, setAppState] = useState<AppState>({});
  const [customParsedPrompt, setCustomParsedPrompt] = useState<string | null>(null);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const categories = ["Road Sign", "Road Marking", "Traffic Calming Measures", "Custom Query"];
  
  // Display name mapping for better UI
  const getCategoryDisplayName = (category: string) => {
    if (category === "Traffic Calming Measures") return "Traffic Calming";
    return category;
  };

  // Format preview text to render bold markdown
  const formatPreviewText = (text: string): React.ReactNode[] => {
    const parts: React.ReactNode[] = [];
    const lines = text.split('\n');
    let key = 0;
    
    lines.forEach((line, idx) => {
      // Check for bold markdown **text**
      const boldRegex = /\*\*(.+?)\*\*/g;
      let lastIndex = 0;
      let match;
      const lineParts: React.ReactNode[] = [];
      
      while ((match = boldRegex.exec(line)) !== null) {
        // Add text before the match
        if (match.index > lastIndex) {
          lineParts.push(line.substring(lastIndex, match.index));
        }
        // Add bold text
        lineParts.push(
          <strong key={`bold-${key++}`} className="font-bold text-zinc-900 dark:text-zinc-100">
            {match[1]}
          </strong>
        );
        lastIndex = match.index + match[0].length;
      }
      
      // Add remaining text
      if (lastIndex < line.length) {
        lineParts.push(line.substring(lastIndex));
      }
      
      // If no matches, use the line as is
      if (lineParts.length === 0) {
        lineParts.push(line);
      }
      
      parts.push(
        <span key={`line-${idx}`}>
          {lineParts}
        </span>
      );
      
      // Add newline except for last line
      if (idx < lines.length - 1) {
        parts.push('\n');
      }
    });
    
    return parts;
  };

  // --- AI Interaction State ---
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [showPromptModal, setShowPromptModal] = useState(false);

  // 1. Load catalog on mount
  useEffect(() => {
    fetchCatalog()
      .then((data) => {
        setCatalog(data);
      })
      .catch(console.error)
      .finally(() => {
        setLoadingCatalog(false);
      });
  }, []);

  // 2. Toggle category visibility
  // Custom Query is mutually exclusive with other categories
  const toggleCategory = (cat: string) => {
    if (selectedCategories.includes(cat)) {
      // Deselecting the category
      setSelectedCategories(selectedCategories.filter(c => c !== cat));
      if (cat !== "Custom Query") {
        setAppState(prev => {
          const next = { ...prev };
          delete next[cat];
          return next;
        });
      } else {
        setCustomParsedPrompt(null);
      }
    } else {
      // Selecting a category
      if (cat === "Custom Query") {
        // If selecting Custom Query, deselect all others
        setSelectedCategories(["Custom Query"]);
        setAppState({}); // Clear all other category states
      } else {
        // If selecting any other category, deselect Custom Query
        setSelectedCategories([...selectedCategories.filter(c => c !== "Custom Query"), cat]);
        setCustomParsedPrompt(null); // Clear custom query
      }
    }
  };

  // 3. Handle updates from a CategoryCard
  const handleCategoryChange = (category: string, nextCategoryState: CategoryState) => {
    setAppState(prev => ({
      ...prev,
      [category]: nextCategoryState,
    }));
  };

  // 4. Handle updates from the CustomQueryBox
  const handleCustomQueryParsed = (parsed: any) => {
    // parsed is now the formatted prompt text (string)
    if (parsed && typeof parsed === 'string') {
      setCustomParsedPrompt(parsed);
    } else {
      setCustomParsedPrompt(null);
    }
  };

  // 5. Reset everything
  const restartAll = () => {
    setAppState({});
    setCustomParsedPrompt(null);
    setSelectedCategories([]);
    setResult(null);
    setIsLoading(false);
  };

  // 6. Show prompt preview
  const handleShowPrompt = () => {
    setShowPromptModal(true);
  };

  // 7. Submit to AI (called from modal)
  const handleSubmit = async (confirmedPrompt?: string) => {
    setShowPromptModal(false);
    setIsLoading(true);
    setResult(null);
    
    // Use the LLM prompt format for the API
    const finalPrompt = generateLLMPrompt(appState, customParsedPrompt);
    
    try {
      const res = await sendQuery(finalPrompt);
      setResult(res); 
    } catch (e) {
      console.error(e);
      setResult({ error: "Failed to contact backend." }); 
    }
    
    setIsLoading(false);
  };

  // --- Render Logic ---

  if (loadingCatalog) {
    return (
      <>
        <Navbar />
        <LoadingView message="Loading catalog..." />
      </>
    );
  }

  if (isLoading) {
    return (
      <>
        <Navbar />
        <LoadingView />
      </>
    );
  }

  if (result) {
    return (
      <>
        <Navbar />
        <div className="w-full max-w-3xl mx-auto pt-10 px-4">
          <ResultView result={result} onRestart={restartAll} />
        </div>
      </>
    );
  }

  const canSubmit = (Object.keys(appState).length > 0 && Object.values(appState).some(cat => Object.values(cat).length > 0)) || customParsedPrompt;

  return (
    <>
      <Navbar />
      <div className="w-full max-w-7xl mx-auto pt-10 px-4 pb-20">

        {/* HEADER */}
        <header className="text-center mb-10">
          <h1 className="text-3xl font-bold">Hi There !! I am RoadMarshal.AI</h1>
          <h2 className="text-lg font-bold text-zinc-700 dark:text-zinc-200 mt-3">
            I am here to assist you with road safety interventions. Please Select your Query
          </h2>
          
        </header>

        {/* CATEGORY SELECTION */}
        {/* <div className="text-center mb-10"><h2 className="text-lg font-bold text-zinc-700 dark:text-zinc-200 mt-3">Please select your query</h2></div> */}
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          {categories.map(cat => (
            <Chip
              key={cat}
              label={getCategoryDisplayName(cat)}
              selected={selectedCategories.includes(cat)}
              onClick={() => toggleCategory(cat)}
            />
          ))}
        </div>

        {/* SHOW CARDS FOR EACH SELECTED CATEGORY */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {selectedCategories
            .filter(cat => cat !== "Custom Query")
            .map(cat => (
              <CategoryCard
                key={cat}
                id={cat} 
                catalog={catalog}
                value={appState[cat] || {}} 
                onChange={(next) => handleCategoryChange(cat, next)}
              />
            ))}

          {selectedCategories.includes("Custom Query") && (
            <div className="flex justify-center md:col-span-2">
              <div className="w-full max-w-[800px]">
                <CustomQueryBox 
                  onParsed={handleCustomQueryParsed} 
                />
              </div>
            </div>
          )}
        </div>

        {/* FINAL SUBMIT */}
        {canSubmit && (
          <div className="mt-10 border-t pt-6">
            <div className="mb-4 p-4 bg-zinc-50 dark:bg-zinc-800 rounded-lg">
              <h3 className="text-lg font-bold mb-3 text-zinc-900 dark:text-zinc-100">Preview your query:</h3>
              <div className="text-base text-zinc-700 dark:text-zinc-300 whitespace-pre-wrap font-sans">
                {formatPreviewText(generateHumanPrompt(appState, customParsedPrompt) || "No query to preview")}
              </div>
            </div>
            <div className="flex justify-end">
              <button
                onClick={handleShowPrompt}
                className="px-6 py-3 bg-emerald-600 text-white rounded-lg font-semibold shadow hover:bg-emerald-700 transition"
              >
                Review & Submit for Analysis
              </button>
            </div>
          </div>
        )}

        
        

      </div>

      {/* Prompt Review Modal */}
      {showPromptModal && (
        <FinalPromptModal
          initial={generateHumanPrompt(appState, customParsedPrompt)}
          onConfirm={() => handleSubmit()}
          onClose={() => setShowPromptModal(false)}
        />
      )}
    </>
  );
}