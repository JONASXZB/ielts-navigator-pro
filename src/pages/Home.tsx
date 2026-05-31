import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, BookOpen, Headphones, MessageSquare, FileText, Zap, Globe, TrendingUp, Newspaper } from "lucide-react";
import { useLocation } from "wouter";

const resourcesData = {
  listening: {
    title: "Listening",
    icon: Headphones,
    description: "Master audio comprehension with expert strategies",
    color: "from-blue-500 to-cyan-500",
    categories: {
      "Official Resources": [
        {
          title: "Official IELTS Prep",
          desc: "Official guidelines & practice materials from IELTS",
          url: "https://ielts.org/take-a-test/preparation-resources",
          tag: "Official",
          type: "learning"
        },
        {
          title: "British Council Listening",
          desc: "Official timed practice tests from British Council",
          url: "https://takeielts.britishcouncil.org/take-ielts/prepare/free-ielts-english-practice-tests/listening",
          tag: "Official",
          type: "learning"
        }
      ],
      "Free Practice Platforms": [
        {
          title: "IELTS Online Tests",
          desc: "Free full-length mock exams with answer keys",
          url: "https://ieltsonlinetests.com/",
          tag: "Free",
          type: "learning"
        },
        {
          title: "Mini-IELTS",
          desc: "Extensive free practice bank with latest tests",
          url: "https://mini-ielts.com/",
          tag: "Free",
          type: "learning"
        },
        {
          title: "IELTS Podcast",
          desc: "Audio practice and speaking topics",
          url: "https://www.ieltspodcast.com/",
          tag: "Free",
          type: "learning"
        }
      ],
      "Expert Resources": [
        {
          title: "IELTS Liz Listening",
          desc: "Top curated resources & expert tips",
          url: "https://ieltsliz.com/ielts-listening-tips/",
          tag: "Expert",
          type: "learning"
        }
      ],
      "Premium Resources": [
        {
          title: "IELTS Ready (British Council)",
          desc: "AI-scored feedback & premium tools",
          url: "https://takeielts.britishcouncil.org/take-ielts/prepare/ielts-ready",
          tag: "Premium",
          type: "learning"
        },
        {
          title: "Magoosh IELTS",
          desc: "Video lessons & comprehensive practice",
          url: "https://magoosh.com/ielts/",
          tag: "Premium",
          type: "learning"
        }
      ]
    }
  },
  reading: {
    title: "Reading",
    icon: BookOpen,
    description: "Develop skimming, scanning & comprehension skills",
    color: "from-emerald-500 to-teal-500",
    categories: {
      "Official Resources": [
        {
          title: "British Council Reading",
          desc: "Official timed practice tests",
          url: "https://takeielts.britishcouncil.org/take-ielts/prepare/free-ielts-english-practice-tests/reading",
          tag: "Official",
          type: "learning"
        }
      ],
      "Free Practice Platforms": [
        {
          title: "Mini-IELTS Reading",
          desc: "Extensive free practice bank with categorized passages",
          url: "https://mini-ielts.com/",
          tag: "Free",
          type: "learning"
        },
        {
          title: "IELTS Material Reading",
          desc: "Tips, books, lessons & actual past papers",
          url: "https://ieltsmaterial.com/ielts-reading-tips-books-lessons-practice-tests-and-actual-tests/",
          tag: "Free",
          type: "learning"
        }
      ],
      "Expert Resources": [
        {
          title: "IELTS Liz Reading",
          desc: "Strategies, tips & comprehensive exercises",
          url: "https://ieltsliz.com/useful-websites-and-resources-for-ielts/",
          tag: "Expert",
          type: "learning"
        }
      ],
      "Premium Resources": [
        {
          title: "Cambridge English Books",
          desc: "Official IELTS preparation materials",
          url: "https://www.cambridge.org/gb/cambridgeenglish/catalog/cambridge-english-exams-ielts/",
          tag: "Premium",
          type: "learning"
        }
      ]
    }
  },
  writing: {
    title: "Writing",
    icon: FileText,
    description: "Master Task 1 & 2 with AI feedback & expert guidance",
    color: "from-purple-500 to-pink-500",
    categories: {
      "Official Resources": [
        {
          title: "British Council Writing",
          desc: "Official writing practice tests & guidelines",
          url: "https://takeielts.britishcouncil.org/take-ielts/prepare/free-ielts-english-practice-tests/writing",
          tag: "Official",
          type: "learning"
        }
      ],
      "Free Resources": [
        {
          title: "IELTS Liz Writing",
          desc: "Task 1 & 2 tips, model answers & video lessons",
          url: "https://ieltsliz.com/ielts-writing-task-1-lessons-and-tips/",
          tag: "Free",
          type: "learning"
        },
        {
          title: "IELTS Material Writing",
          desc: "Comprehensive lessons, strategies & model essays",
          url: "https://ieltsmaterial.com/useful-ielts-writing-lessons-websites/",
          tag: "Free",
          type: "learning"
        },
        {
          title: "IELTS Buddy",
          desc: "Free essay checker, model essays & interactive courses",
          url: "https://www.ieltsbuddy.com/",
          tag: "Free",
          type: "learning"
        }
      ],
      "AI Feedback Tools": [
        {
          title: "LexiBot AI Checker",
          desc: "Free AI-powered essay scoring & error detection",
          url: "https://www.lexibot.me/",
          tag: "AI Tool",
          type: "learning"
        },
        {
          title: "Cathoven AI Checker",
          desc: "AI-powered IELTS preparation with instant feedback",
          url: "https://www.cathoven.com/",
          tag: "AI Tool",
          type: "learning"
        },
        {
          title: "TestGlider",
          desc: "Free IELTS practice tests with AI grading",
          url: "https://www.testglider.com/ielts/en",
          tag: "AI Tool",
          type: "learning"
        }
      ],
      "Premium Resources": [
        {
          title: "EduBenchmark Correction",
          desc: "Professional teacher feedback & band score estimates",
          url: "https://edubenchmark.com/ielts-writing-correction",
          tag: "Premium",
          type: "learning"
        }
      ]
    }
  },
  speaking: {
    title: "Speaking",
    icon: MessageSquare,
    description: "Build confidence with AI simulators & topic banks",
    color: "from-orange-500 to-red-500",
    categories: {
      "Official Resources": [
        {
          title: "British Council Speaking",
          desc: "Official speaking practice tests & guidelines",
          url: "https://takeielts.britishcouncil.org/take-ielts/prepare/free-ielts-english-practice-tests/speaking",
          tag: "Official",
          type: "learning"
        }
      ],
      "Topic Banks & Strategies": [
        {
          title: "Keith Speaking Academy",
          desc: "2025 common topics with key vocabulary & sample answers",
          url: "https://keithspeakingacademy.com/common-ielts-speaking-topics-2025/",
          tag: "Topics",
          type: "learning"
        },
        {
          title: "IELTS Material Topics",
          desc: "Recent Part 2 & 3 topics with model answers & analysis",
          url: "https://ieltsmaterial.com/50-ielts-speaking-part-2-3-topics-2020-with-model-answers/",
          tag: "Topics",
          type: "learning"
        },
        {
          title: "IELTS Buddy Speaking",
          desc: "Speaking lessons, sample answers & practice tips",
          url: "https://www.ieltsbuddy.com/",
          tag: "Free",
          type: "learning"
        }
      ],
      "AI Speaking Simulators": [
        {
          title: "Intellecta AI Simulator",
          desc: "Free AI practice with instant feedback on fluency & accuracy",
          url: "https://intellecta.app/tools/ielts-speaking-practice-test",
          tag: "AI Tool",
          type: "learning"
        },
        {
          title: "Speechful AI",
          desc: "AI examiner with accurate band score estimates",
          url: "https://speechful.ai/",
          tag: "AI Tool",
          type: "learning"
        },
        {
          title: "SmallTalk2 AI Speaking",
          desc: "Free AI simulator with instant grading",
          url: "https://smalltalk2.me/ielts",
          tag: "AI Tool",
          type: "learning"
        },
        {
          title: "IELTS Speaking Simulator",
          desc: "Real-time AI conversation with detailed feedback",
          url: "https://ielts.hubeiqiao.com/",
          tag: "AI Tool",
          type: "learning"
        }
      ]
    }
  },
  vocabulary: {
    title: "Vocabulary & Grammar",
    icon: TrendingUp,
    description: "Build comprehensive vocabulary and master grammar structures",
    color: "from-indigo-500 to-purple-500",
    categories: {
      "Free Learning Resources": [
        {
          title: "IELTS Liz Vocabulary",
          desc: "Word lists, exercises & pronunciation guides",
          url: "https://ieltsliz.com/vocabulary/",
          tag: "Free",
          type: "learning"
        },
        {
          title: "BBC Learning English",
          desc: "Comprehensive English lessons, grammar & vocabulary",
          url: "https://www.bbc.co.uk/learningenglish",
          tag: "Free",
          type: "learning"
        },
        {
          title: "IELTS Grammar Practice",
          desc: "120+ free grammar exercises",
          url: "https://ieltsonlinetests.com/ielts-grammar",
          tag: "Free",
          type: "learning"
        },
        {
          title: "IELTS Buddy Grammar",
          desc: "Grammar lessons focused on writing & speaking",
          url: "https://www.ieltsbuddy.com/ielts-grammar.html",
          tag: "Free",
          type: "learning"
        }
      ],
      "Premium Vocabulary Apps": [
        {
          title: "IELTS Vocab Builder",
          desc: "Band 6-9 targeted vocabulary drills",
          url: "https://apps.apple.com/us/app/ielts-vocab-builder-band-6-9/id6754558834",
          tag: "Premium",
          type: "learning"
        },
        {
          title: "Voca Pro - IELTS Vocabulary",
          desc: "Vocabulary by topic with progress tracking",
          url: "https://play.google.com/store/apps/details?id=com.labianlabs.ieltsvocab",
          tag: "Premium",
          type: "learning"
        },
        {
          title: "WordUp Vocabulary App",
          desc: "Smart vocabulary learning for IELTS & TOEFL",
          url: "https://www.wordupapp.co/",
          tag: "Premium",
          type: "learning"
        }
      ]
    }
  }
};

const thinkTankResources = {
  "🏛️ Global Think Tanks - Policy & International Affairs": [
    {
      title: "Council on Foreign Relations (CFR)",
      desc: "International relations, foreign policy & global affairs analysis",
      url: "https://www.cfr.org/",
      level: "Advanced",
      free: true,
      country: "United States",
      type: "thinktank"
    },
    {
      title: "Brookings Institution",
      desc: "Public policy, economics, governance & social issues research",
      url: "https://www.brookings.edu/",
      level: "Advanced",
      free: true,
      country: "United States",
      type: "thinktank"
    },
    {
      title: "Carnegie Endowment for International Peace",
      desc: "International peace, diplomacy & strategic analysis",
      url: "https://carnegieendowment.org/",
      level: "Advanced",
      free: true,
      country: "United States",
      type: "thinktank"
    },
    {
      title: "Atlantic Council",
      desc: "US foreign policy, NATO & transatlantic relations",
      url: "https://www.atlanticcouncil.org/",
      level: "Advanced",
      free: true,
      country: "United States",
      type: "thinktank"
    },
    {
      title: "American Enterprise Institute (AEI)",
      desc: "Economics, defense & foreign policy analysis",
      url: "https://www.aei.org/",
      level: "Advanced",
      free: true,
      country: "United States",
      type: "thinktank"
    },
    {
      title: "Heritage Foundation",
      desc: "Conservative policy analysis, economics & defense",
      url: "https://www.heritage.org/",
      level: "Advanced",
      free: true,
      country: "United States",
      type: "thinktank"
    },
    {
      title: "RAND Corporation",
      desc: "Research, development & policy analysis",
      url: "https://www.rand.org/",
      level: "Advanced/Academic",
      free: true,
      country: "United States",
      type: "thinktank"
    },
    {
      title: "Chatham House - Royal Institute of International Affairs",
      desc: "International affairs, geopolitics & policy research",
      url: "https://www.chathamhouse.org/",
      level: "Advanced",
      free: true,
      country: "United Kingdom",
      type: "thinktank"
    },
    {
      title: "Bruegel",
      desc: "European economics, policy & integration research",
      url: "https://www.bruegel.org/",
      level: "Advanced",
      free: true,
      country: "Belgium",
      type: "thinktank"
    },
    {
      title: "French Institute of International Relations (IFRI)",
      desc: "International relations & French foreign policy",
      url: "https://www.ifri.org/",
      level: "Advanced",
      free: true,
      country: "France",
      type: "thinktank"
    },
    {
      title: "Lowy Institute",
      desc: "Asia-Pacific policy & international relations research",
      url: "https://www.lowyinstitute.org/",
      level: "Advanced",
      free: true,
      country: "Australia",
      type: "thinktank"
    },
    {
      title: "Observer Research Foundation (ORF)",
      desc: "Security, strategy, economy & development analysis",
      url: "https://www.orfonline.org/",
      level: "Advanced",
      free: true,
      country: "India",
      type: "thinktank"
    }
  ],
  "📰 Premium Newspapers - Global Leaders": [
    {
      title: "The New York Times",
      desc: "US and international news, analysis & opinion",
      url: "https://www.nytimes.com/",
      level: "Advanced",
      free: false,
      freeLimit: "3-4 articles/month",
      country: "United States",
      founded: "1851",
      type: "newspaper"
    },
    {
      title: "The Washington Post",
      desc: "US politics, international news & investigation",
      url: "https://www.washingtonpost.com/",
      level: "Advanced",
      free: false,
      freeLimit: "Limited",
      country: "United States",
      founded: "1877",
      type: "newspaper"
    },
    {
      title: "The Guardian",
      desc: "International news, politics, culture & investigation",
      url: "https://www.theguardian.com/",
      level: "Advanced",
      free: true,
      country: "United Kingdom",
      founded: "1821",
      type: "newspaper"
    },
    {
      title: "Financial Times",
      desc: "Business, economics, markets & politics analysis",
      url: "https://www.ft.com/",
      level: "Advanced",
      free: false,
      freeLimit: "3-4 articles/month",
      country: "United Kingdom",
      founded: "1888",
      type: "newspaper"
    },
    {
      title: "The Times",
      desc: "UK and international news, analysis & opinion",
      url: "https://www.thetimes.com/",
      level: "Advanced",
      free: false,
      country: "United Kingdom",
      founded: "1785",
      type: "newspaper"
    },
    {
      title: "The Telegraph",
      desc: "UK and international news, politics & culture",
      url: "https://www.telegraph.co.uk/",
      level: "Advanced",
      free: false,
      freeLimit: "Limited",
      country: "United Kingdom",
      founded: "1855",
      type: "newspaper"
    },
    {
      title: "The Independent",
      desc: "Independent journalism, news & analysis",
      url: "https://www.independent.co.uk/",
      level: "Advanced",
      free: true,
      country: "United Kingdom",
      founded: "1986",
      type: "newspaper"
    },
    {
      title: "The Economist",
      desc: "Economics, politics, business & culture analysis",
      url: "https://www.economist.com/",
      level: "Advanced",
      free: false,
      freeLimit: "5 articles/week",
      country: "United Kingdom",
      founded: "1843",
      type: "newspaper"
    }
  ],
  "📡 International News Agencies - Breaking News": [
    {
      title: "BBC News",
      desc: "International news, analysis & investigation",
      url: "https://www.bbc.com/news",
      level: "Intermediate-Advanced",
      free: true,
      country: "United Kingdom",
      type: "newsagency"
    },
    {
      title: "Reuters",
      desc: "Global news, business & markets coverage",
      url: "https://www.reuters.com/",
      level: "Advanced",
      free: true,
      country: "International",
      type: "newsagency"
    },
    {
      title: "Associated Press (AP)",
      desc: "US and international news coverage",
      url: "https://apnews.com/",
      level: "Advanced",
      free: true,
      country: "United States",
      type: "newsagency"
    },
    {
      title: "Agence France-Presse (AFP)",
      desc: "International news coverage",
      url: "https://www.afp.com/",
      level: "Advanced",
      free: true,
      country: "France",
      type: "newsagency"
    }
  ],
  "📊 Business & Economics Publications": [
    {
      title: "The Wall Street Journal",
      desc: "Business, markets, economics & politics",
      url: "https://www.wsj.com/",
      level: "Advanced",
      free: false,
      country: "United States",
      type: "business"
    },
    {
      title: "Bloomberg",
      desc: "Markets, business, economics & politics",
      url: "https://www.bloomberg.com/",
      level: "Advanced",
      free: false,
      freeLimit: "Limited",
      country: "United States",
      type: "business"
    }
  ],
  "🔬 Science & Technology Publications": [
    {
      title: "Wired",
      desc: "Technology, business, culture & science",
      url: "https://www.wired.com/",
      level: "Advanced",
      free: false,
      freeLimit: "Limited",
      country: "United States",
      type: "tech"
    },
    {
      title: "TechCrunch",
      desc: "Technology, startups & innovation news",
      url: "https://techcrunch.com/",
      level: "Advanced",
      free: true,
      country: "United States",
      type: "tech"
    },
    {
      title: "Nature",
      desc: "Science, research & discovery journal",
      url: "https://www.nature.com/",
      level: "Advanced/Academic",
      free: false,
      freeLimit: "Limited",
      country: "United Kingdom",
      type: "science"
    },
    {
      title: "Science Daily",
      desc: "Science news & research coverage",
      url: "https://www.sciencedaily.com/",
      level: "Advanced",
      free: true,
      country: "United States",
      type: "science"
    }
  ],
  "🌐 Learning-Focused News & Ideas": [
    {
      title: "BBC Learning English - News",
      desc: "News stories with vocabulary explanations & audio",
      url: "https://www.bbc.co.uk/learningenglish/news_english",
      level: "Intermediate-Advanced",
      free: true,
      type: "learning"
    },
    {
      title: "BBC 6 Minute English",
      desc: "Topical discussions with vocabulary & transcripts",
      url: "https://www.bbc.com/learningenglish/",
      level: "Intermediate",
      free: true,
      type: "learning"
    },
    {
      title: "TED Talks",
      desc: "Ideas, technology, design, science & culture presentations",
      url: "https://www.ted.com/",
      level: "Intermediate-Advanced",
      free: true,
      type: "educational"
    },
    {
      title: "Breaking News English",
      desc: "News-based lessons with multiple difficulty levels",
      url: "https://breakingnewsenglish.com/",
      level: "All levels",
      free: true,
      type: "educational"
    }
  ]
};

export default function Home() {
  const [, setLocation] = useLocation();

  const [activeModule, setActiveModule] = useState<string | null>(null);
  const [showThinkTanks, setShowThinkTanks] = useState(false);
  const [language, setLanguage] = useState<"en" | "zh" | "yue">("en");

  const translations = {
    en: {
      title: "IELTS Navigator",
      subtitle: "Your Complete Guide to IELTS Success",
      tagline: "Curated resources for Listening, Reading, Writing & Speaking",
      selectModule: "Select a Module",
      back: "← Back",
      explore: "Explore Resources",
      thinkTanks: "Think Tanks, Newspapers & Media",
      thinkTanksDesc: "High-quality English reading from global policy institutes, newspapers & media outlets",
      learning: "IELTS Learning Websites",
      academic: "Global Think Tanks, Newspapers & Media"
    },
    zh: {
      title: "雅思学习导航",
      subtitle: "您的完整雅思成功指南",
      tagline: "精选听、说、读、写四个部分的学习资源",
      selectModule: "选择模块",
      back: "← 返回",
      explore: "浏览资源",
      thinkTanks: "智库、报纸与媒体",
      thinkTanksDesc: "来自全球政策研究机构、报纸和媒体的高质量英文阅读",
      learning: "雅思学习网站",
      academic: "全球智库、报纸与媒体"
    },
    yue: {
      title: "雅思考試導航",
      subtitle: "您的完整雅思成功指南",
      tagline: "精選聽、講、讀、寫四個部分的學習資源",
      selectModule: "選擇模組",
      back: "← 返回",
      explore: "瀏覽資源",
      thinkTanks: "智庫、報紙與媒體",
      thinkTanksDesc: "來自全球政策研究機構、報紙和媒體的高質量英文閱讀",
      learning: "雅思學習網站",
      academic: "全球智庫、報紙與媒體"
    }
  };

  const t = translations[language];

  if (showThinkTanks) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
        {/* Header */}
        <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur-md">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Globe className="w-8 h-8 text-amber-600" />
              <h1 className="text-2xl font-bold text-slate-900">{t.thinkTanks}</h1>
            </div>
            <Button
              variant="outline"
              onClick={() => setShowThinkTanks(false)}
              className="gap-2"
            >
              {t.back}
            </Button>
          </div>
        </header>

        {/* Content */}
        <main className="container mx-auto px-4 py-12">
          <div className="mb-8 p-6 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-slate-700 text-sm">
              <strong>📚 Resource Types:</strong> These think tanks, newspapers, and media outlets provide high-quality English reading material for general knowledge and advanced vocabulary building. They complement IELTS-specific learning websites by exposing you to real-world English used in policy, news, business, and ideas.
            </p>
          </div>

          {Object.entries(thinkTankResources).map(([category, resources]) => (
            <div key={category} className="mb-12">
              <h2 className="text-xl font-bold text-slate-900 mb-6 pb-3 border-b-2 border-slate-300">
                {category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {resources.map((resource, idx) => (
                  <a
                    key={idx}
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <Card className="h-full p-5 hover:shadow-lg hover:border-slate-400 transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                          {resource.title}
                        </h3>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-all group-hover:translate-x-1 flex-shrink-0" />
                      </div>
                      <p className="text-sm text-slate-600 mb-4 line-clamp-3">
                        {resource.desc}
                      </p>
                      <div className="flex gap-2 flex-wrap items-center">
                        <span className="inline-block px-2 py-1 bg-amber-100 text-amber-700 text-xs font-semibold rounded-full">
                          {resource.level}
                        </span>
                        {resource.free ? (
                          <span className="inline-block px-2 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                            Free
                          </span>
                        ) : (
                          <span className="inline-block px-2 py-1 bg-slate-200 text-slate-700 text-xs font-semibold rounded-full">
                            {(resource as any).freeLimit || "Premium"}
                          </span>
                        )}
                        {(resource as any).country && (
                          <span className="inline-block px-2 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                            {(resource as any).country}
                          </span>
                        )}
                      </div>
                    </Card>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </main>
      </div>
    );
  }

  if (activeModule) {
    const module = resourcesData[activeModule as keyof typeof resourcesData];
    const IconComponent = module.icon;

    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
        {/* Header */}
        <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur-md">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <IconComponent className="w-8 h-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-slate-900">{module.title}</h1>
            </div>
            <Button
              variant="outline"
              onClick={() => setActiveModule(null)}
              className="gap-2"
            >
              {t.back}
            </Button>
          </div>
        </header>

        {/* Content */}
        <main className="container mx-auto px-4 py-12">
          {Object.entries(module.categories).map(([category, resources]) => (
            <div key={category} className="mb-12">
              <h2 className="text-xl font-bold text-slate-900 mb-6 pb-3 border-b-2 border-slate-300">
                {category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {resources.map((resource, idx) => (
                  <a
                    key={idx}
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <Card className="h-full p-5 hover:shadow-lg hover:border-slate-400 transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                          {resource.title}
                        </h3>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-all group-hover:translate-x-1 flex-shrink-0" />
                      </div>
                      <p className="text-sm text-slate-600 mb-4 line-clamp-3">
                        {resource.desc}
                      </p>
                      <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                        {resource.tag}
                      </span>
                    </Card>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white/50 backdrop-blur-md sticky top-0 z-40">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-3xl font-bold text-slate-900">{t.title}</h1>
            </div>
            <div className="flex gap-2 items-center">
              <Button
                onClick={() => setLocation("/weekly-news")}
                className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white flex items-center gap-2"
              >
                <Newspaper className="w-4 h-4" />
                Weekly News
              </Button>
              {(["en", "zh", "yue"] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
                    language === lang
                      ? "bg-blue-600 text-white"
                      : "bg-slate-200 text-slate-700 hover:bg-slate-300"
                  }`}
                >
                  {lang === "en" ? "EN" : lang === "zh" ? "中文" : "粵語"}
                </button>
              ))}
            </div>
          </div>
          <p className="text-lg text-slate-600 mb-2">{t.subtitle}</p>
          <p className="text-sm text-slate-500">{t.tagline}</p>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Master IELTS with Confidence
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Access 70+ curated resources for all four IELTS modules. From official practice tests to AI-powered feedback tools, think tanks, and premium newspapers.
          </p>
        </div>

        {/* Module Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {Object.entries(resourcesData).map(([key, module]) => {
            const IconComponent = module.icon;
            return (
              <button
                key={key}
                onClick={() => setActiveModule(key)}
                className="group"
              >
                <Card className="h-full p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-2 hover:border-blue-400">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${module.color} p-2.5 mb-4 group-hover:scale-110 transition-transform`}>
                    <IconComponent className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {module.title}
                  </h3>
                  <p className="text-sm text-slate-600 mb-6">
                    {module.description}
                  </p>
                  <div className="flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all">
                    {t.explore}
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Card>
              </button>
            );
          })}
        </div>

        {/* Think Tanks Section */}
        <div className="mt-16 pt-16 border-t-2 border-slate-300">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              {t.thinkTanks}
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-6">
              {t.thinkTanksDesc}
            </p>
            <Button
              onClick={() => setShowThinkTanks(true)}
              className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2 mx-auto"
            >
              <Globe className="w-5 h-5" />
              Explore Global Resources
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <Card className="p-6 bg-blue-50 border-2 border-blue-200">
              <h3 className="text-lg font-bold text-slate-900 mb-3">📚 {t.learning}</h3>
              <p className="text-sm text-slate-600 mb-4">
                Designed specifically for IELTS exam preparation. Focus on test strategies, mock tests, and band score improvement.
              </p>
              <ul className="text-sm text-slate-700 space-y-2">
                <li>✓ Task-specific lessons</li>
                <li>✓ Sample answers & tips</li>
                <li>✓ Mock tests & practice</li>
                <li>✓ AI feedback tools</li>
              </ul>
            </Card>

            <Card className="p-6 bg-amber-50 border-2 border-amber-200">
              <h3 className="text-lg font-bold text-slate-900 mb-3">🌍 {t.academic}</h3>
              <p className="text-sm text-slate-600 mb-4">
                High-quality English reading from global policy institutes, newspapers & media for advanced vocabulary and critical thinking.
              </p>
              <ul className="text-sm text-slate-700 space-y-2">
                <li>✓ Real-world English usage</li>
                <li>✓ Advanced vocabulary</li>
                <li>✓ Policy & current affairs</li>
                <li>✓ Global perspectives</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white/50 backdrop-blur-md mt-20">
        <div className="container mx-auto px-4 py-8 text-center text-slate-600 text-sm">
          <p>© 2025 IELTS Navigator | Comprehensive IELTS Study Resources</p>
          <p className="mt-2">
            <a href="https://ielts.org" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
              Official IELTS
            </a>
            {" | "}
            <a href="https://www.britishcouncil.org" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
              British Council
            </a>
            {" | "}
            <a href="https://idp.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
              IDP
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
