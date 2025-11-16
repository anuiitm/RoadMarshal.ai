"use client";

import React, { useEffect, useState } from "react";
import { fetchCatalog, sendQuery, ParseResponse } from "@/app/api/backend";
import { AppState, CategoryState, generateLLMPrompt, generateHumanPrompt } from "@/app/utils/prompt";

import Chip from "@/components/Chip"; 
import CategoryCard from "@/app/components/CategoryCard"; 
import CustomQueryBox from "@/app/components/CustomQueryBox";
import LoadingView from "@/app/components/LoadingView";
import ResultView from "@/app/components/ResultView";
import Navbar from "@/app/components/Navbar";
import FinalPromptModal from "@/app/components/FinalPromptModal";

export default function QueryPage() {
  const [catalog, setCatalog] = useState<any>(null);
  const [loadingCatalog, setLoadingCatalog] = useState(true);

  const [appState, setAppState] = useState<AppState>({});
  const [customParsedPrompt, setCustomParsedPrompt] = useState<string | null>(null);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const categories = ["Road Sign", "Road Marking", "Traffic Calming Measures", "Custom Query"];
  
  const getCategoryDisplayName = (category: string) => {
    if (category === "Traffic Calming Measures") return "Traffic Calming";
    return category;
  };

  const formatPreviewText = (text: string): React.ReactNode[] => {
    const parts: React.ReactNode[] = [];
    const lines = text.split('\n');
    let key = 0;
    
    lines.forEach((line, idx) => {
      const boldRegex = /\*\*(.+?)\*\*/g;
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
  };

  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [showPromptModal, setShowPromptModal] = useState(false);

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

  const toggleCategory = (cat: string) => {
    if (selectedCategories.includes(cat)) {
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
      if (cat === "Custom Query") {
        setSelectedCategories(["Custom Query"]);
        setAppState({}); 
      } else {
       
        setSelectedCategories([...selectedCategories.filter(c => c !== "Custom Query"), cat]);
        setCustomParsedPrompt(null); 
      }
    }
  };

  
  const handleCategoryChange = (category: string, nextCategoryState: CategoryState) => {
    setAppState(prev => ({
      ...prev,
      [category]: nextCategoryState,
    }));
  };

  const handleCustomQueryParsed = (parsed: any) => {
    if (parsed && typeof parsed === 'string') {
      setCustomParsedPrompt(parsed);
    } else {
      setCustomParsedPrompt(null);
    }
  };

  const restartAll = () => {
    setAppState({});
    setCustomParsedPrompt(null);
    setSelectedCategories([]);
    setResult(null);
    setIsLoading(false);
  };

  const handleShowPrompt = () => {
    setShowPromptModal(true);
  };

  const handleSubmit = async (confirmedPrompt?: string) => {
    setShowPromptModal(false);
    setIsLoading(true);
    setResult(null);
    
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

        
        <header className="text-center mb-10">
          <img src="/logo.png" alt="RoadMarshal AI Logo" className="h-20 w-20 block mx-auto" />
          <h1 className="text-3xl font-bold">Hi There !! I am RoadMarshal.AI</h1>
          <h2 className="text-lg font-bold text-zinc-700 dark:text-zinc-200 mt-3">
            I am here to assist you with road safety interventions. Please Select your Query
          </h2>
          
        </header>

        
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