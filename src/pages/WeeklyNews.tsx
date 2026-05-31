import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Globe, Calendar, Tag, TrendingUp, Newspaper } from "lucide-react";

interface NewsItem {
  id: number;
  title: string;
  description: string;
  content?: string;
  source: string;
  sourceUrl: string;
  category: string;
  region: string;
  englishLevel: "Beginner" | "Intermediate" | "Advanced";
  imageUrl?: string;
  publishedAt: string;
  weekNumber: number;
  year: number;
}

const mockWeeklyNews: NewsItem[] = [
  {
    id: 1,
    title: "Global Climate Summit Reaches Historic Agreement on Carbon Emissions",
    description: "World leaders agree on unprecedented measures to combat climate change, with binding commitments from major economies.",
    source: "BBC News",
    sourceUrl: "https://www.bbc.com/news",
    category: "Environment",
    region: "Global",
    englishLevel: "Advanced",
    publishedAt: new Date().toISOString(),
    weekNumber: 18,
    year: 2026
  },
  {
    id: 2,
    title: "Tech Giants Announce New AI Collaboration Framework",
    description: "Leading technology companies establish joint initiative to develop ethical AI standards and safety protocols.",
    source: "Reuters",
    sourceUrl: "https://www.reuters.com/",
    category: "Technology",
    region: "Global",
    englishLevel: "Intermediate",
    publishedAt: new Date().toISOString(),
    weekNumber: 18,
    year: 2026
  },
  {
    id: 3,
    title: "European Central Bank Adjusts Interest Rates in Response to Economic Growth",
    description: "ECB implements policy changes following stronger-than-expected economic indicators across the eurozone.",
    source: "Financial Times",
    sourceUrl: "https://www.ft.com/",
    category: "Economics",
    region: "Europe",
    englishLevel: "Advanced",
    publishedAt: new Date().toISOString(),
    weekNumber: 18,
    year: 2026
  },
  {
    id: 4,
    title: "Breakthrough in Medical Research Offers New Hope for Rare Diseases",
    description: "Scientists announce successful clinical trials for innovative treatment targeting previously incurable genetic disorders.",
    source: "Nature",
    sourceUrl: "https://www.nature.com/",
    category: "Science",
    region: "Global",
    englishLevel: "Advanced",
    publishedAt: new Date().toISOString(),
    weekNumber: 18,
    year: 2026
  },
  {
    id: 5,
    title: "Asian Markets Show Strong Recovery Following Trade Agreement",
    description: "Regional stock markets surge as major trade partners announce comprehensive economic cooperation framework.",
    source: "Reuters",
    sourceUrl: "https://www.reuters.com/",
    category: "Business",
    region: "Asia",
    englishLevel: "Intermediate",
    publishedAt: new Date().toISOString(),
    weekNumber: 18,
    year: 2026
  },
  {
    id: 6,
    title: "International Space Agency Launches Ambitious Mars Exploration Mission",
    description: "Historic joint mission by multiple nations aims to establish first permanent research station on the Red Planet.",
    source: "AP News",
    sourceUrl: "https://apnews.com/",
    category: "Science",
    region: "Global",
    englishLevel: "Intermediate",
    publishedAt: new Date().toISOString(),
    weekNumber: 18,
    year: 2026
  }
];

const categoryColors: Record<string, { bg: string; text: string }> = {
  "Environment": { bg: "bg-green-100", text: "text-green-700" },
  "Technology": { bg: "bg-blue-100", text: "text-blue-700" },
  "Economics": { bg: "bg-purple-100", text: "text-purple-700" },
  "Science": { bg: "bg-cyan-100", text: "text-cyan-700" },
  "Business": { bg: "bg-amber-100", text: "text-amber-700" },
  "Politics": { bg: "bg-red-100", text: "text-red-700" }
};

const regionColors: Record<string, string> = {
  "Global": "bg-slate-200 text-slate-700",
  "Asia": "bg-orange-200 text-orange-700",
  "Europe": "bg-blue-200 text-blue-700",
  "Americas": "bg-green-200 text-green-700",
  "Africa": "bg-yellow-200 text-yellow-700"
};

const levelColors: Record<string, string> = {
  "Beginner": "bg-emerald-100 text-emerald-700",
  "Intermediate": "bg-sky-100 text-sky-700",
  "Advanced": "bg-indigo-100 text-indigo-700"
};

export default function WeeklyNews() {
  const [news, setNews] = useState<NewsItem[]>(mockWeeklyNews);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedRegion, setSelectedRegion] = useState<string>("All");
  const [selectedLevel, setSelectedLevel] = useState<string>("All");

  const categories = ["All", ...Array.from(new Set(mockWeeklyNews.map(n => n.category)))];
  const regions = ["All", ...Array.from(new Set(mockWeeklyNews.map(n => n.region)))];
  const levels = ["All", "Beginner", "Intermediate", "Advanced"];

  const filteredNews = news.filter(item => {
    const categoryMatch = selectedCategory === "All" || item.category === selectedCategory;
    const regionMatch = selectedRegion === "All" || item.region === selectedRegion;
    const levelMatch = selectedLevel === "All" || item.englishLevel === selectedLevel;
    return categoryMatch && regionMatch && levelMatch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white/50 backdrop-blur-md sticky top-0 z-40">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-600 to-orange-600 flex items-center justify-center">
              <Newspaper className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-slate-900">Weekly International News</h1>
          </div>
          <p className="text-slate-600">
            每周精选国际重点新闻 | Curated global news stories with English learning focus
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Info Banner */}
        <Card className="mb-8 p-6 bg-amber-50 border-2 border-amber-200">
          <p className="text-slate-700 text-sm">
            <strong>📰 每周新闻特色：</strong> 我们精选来自BBC、Reuters、Financial Times等权威媒体的国际重点新闻，并按难度级别、地区和主题分类，帮助您在学习雅思的同时了解全球动态。所有新闻都标注了英文难度等级，方便您选择适合的学习材料。
          </p>
        </Card>

        {/* Filters */}
        <div className="mb-8 space-y-4">
          <div>
            <h3 className="text-sm font-semibold text-slate-700 mb-3">📂 按主题筛选：</h3>
            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === cat
                      ? "bg-blue-600 text-white shadow-lg"
                      : "bg-white text-slate-700 border border-slate-300 hover:border-blue-400"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-700 mb-3">🌍 按地区筛选：</h3>
            <div className="flex flex-wrap gap-2">
              {regions.map(region => (
                <button
                  key={region}
                  onClick={() => setSelectedRegion(region)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedRegion === region
                      ? "bg-green-600 text-white shadow-lg"
                      : "bg-white text-slate-700 border border-slate-300 hover:border-green-400"
                  }`}
                >
                  {region}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-700 mb-3">📚 按难度筛选：</h3>
            <div className="flex flex-wrap gap-2">
              {levels.map(level => (
                <button
                  key={level}
                  onClick={() => setSelectedLevel(level)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedLevel === level
                      ? "bg-purple-600 text-white shadow-lg"
                      : "bg-white text-slate-700 border border-slate-300 hover:border-purple-400"
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredNews.map(item => {
            const catColor = categoryColors[item.category] || { bg: "bg-slate-100", text: "text-slate-700" };
            return (
              <a
                key={item.id}
                href={item.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Card className="h-full p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-2 hover:border-blue-400">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2 text-lg">
                      {item.title}
                    </h3>
                    <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-blue-600 transition-all group-hover:translate-x-1 flex-shrink-0 mt-1" />
                  </div>

                  <p className="text-sm text-slate-600 mb-4 line-clamp-2">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className={`inline-block px-3 py-1 ${catColor.bg} ${catColor.text} text-xs font-semibold rounded-full`}>
                      {item.category}
                    </span>
                    <span className={`inline-block px-3 py-1 ${regionColors[item.region]} text-xs font-semibold rounded-full`}>
                      {item.region}
                    </span>
                    <span className={`inline-block px-3 py-1 ${levelColors[item.englishLevel]} text-xs font-semibold rounded-full`}>
                      {item.englishLevel}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-xs text-slate-500 pt-3 border-t border-slate-200">
                    <span className="flex items-center gap-1">
                      <Newspaper className="w-3 h-3" />
                      {item.source}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      Week {item.weekNumber}
                    </span>
                  </div>
                </Card>
              </a>
            );
          })}
        </div>

        {filteredNews.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-600 text-lg">No news found matching your filters. Try adjusting your selection.</p>
          </div>
        )}

        {/* Info Section */}
        <div className="mt-16 pt-8 border-t-2 border-slate-300">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 bg-blue-50 border-2 border-blue-200">
              <div className="flex items-center gap-3 mb-3">
                <TrendingUp className="w-6 h-6 text-blue-600" />
                <h3 className="font-bold text-slate-900">更新频率</h3>
              </div>
              <p className="text-sm text-slate-700">
                每周一自动更新最新国际重点新闻，确保您始终获得最新的全球动态。
              </p>
            </Card>

            <Card className="p-6 bg-green-50 border-2 border-green-200">
              <div className="flex items-center gap-3 mb-3">
                <Globe className="w-6 h-6 text-green-600" />
                <h3 className="font-bold text-slate-900">权威来源</h3>
              </div>
              <p className="text-sm text-slate-700">
                所有新闻来自BBC、Reuters、CFR等全球顶级媒体和智库，确保内容的准确性和权威性。
              </p>
            </Card>

            <Card className="p-6 bg-purple-50 border-2 border-purple-200">
              <div className="flex items-center gap-3 mb-3">
                <Tag className="w-6 h-6 text-purple-600" />
                <h3 className="font-bold text-slate-900">学习价值</h3>
              </div>
              <p className="text-sm text-slate-700">
                每条新闻都标注了英文难度级别，帮助您选择适合的学习材料，同时扩展词汇和知识面。
              </p>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white/50 backdrop-blur-md mt-20">
        <div className="container mx-auto px-4 py-8 text-center text-slate-600 text-sm">
          <p>© 2025 IELTS Navigator | Weekly International News</p>
          <p className="mt-2">
            News sources: 
            <a href="https://www.bbc.com/news" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors ml-1">
              BBC
            </a>
            {" | "}
            <a href="https://www.reuters.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
              Reuters
            </a>
            {" | "}
            <a href="https://www.ft.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
              Financial Times
            </a>
            {" | "}
            <a href="https://apnews.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
              AP News
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
