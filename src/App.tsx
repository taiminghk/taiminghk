/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Search,
  BookOpen,
  CheckCircle,
  Briefcase,
  Layers,
  GraduationCap,
  Calendar,
  User,
  Heart,
  ChevronRight,
  Phone,
  MessageCircle,
  Award,
  Sparkles,
  HelpCircle,
  Clock,
  ArrowRight,
  ClipboardList,
  AlertOctagon,
  Plus,
  Trash2,
  FileCheck,
  FileText,
  Download
} from 'lucide-react';

import { School, Course, ChecklistItem, UserProfile, TabKey } from './types';
import { INITIAL_SCHOOLS, INITIAL_COURSES, INITIAL_CHECKLIST, MOCK_PAST_PAPERS } from './data';

// Import subcomponents
import SchoolDetailModal from './components/SchoolDetailModal';
import Course2DetailModal from './components/Course2DetailModal';
import CourseMasterDetailModal from './components/CourseMasterDetailModal';
import InterviewDayTimeline from './components/InterviewDayTimeline';
import TutorBookingModal from './components/TutorBookingModal';

export default function App() {
  // Navigation
  const [activeTab, setActiveTab] = useState<TabKey>('home');

  // Persistent States / LocalStorage
  const [schools, setSchools] = useState<School[]>(() => {
    const saved = localStorage.getItem('eeinterviewhk_schools') || localStorage.getItem('eduguide_schools');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length >= 25) {
          return parsed;
        }
      } catch (e) {}
    }
    return INITIAL_SCHOOLS;
  });

  const [checklist, setChecklist] = useState<ChecklistItem[]>(() => {
    const saved = localStorage.getItem('eeinterviewhk_checklist') || localStorage.getItem('eduguide_checklist');
    return saved ? JSON.parse(saved) : INITIAL_CHECKLIST;
  });

  const [enrolledCourses, setEnrolledCourses] = useState<string[]>(() => {
    const saved = localStorage.getItem('eeinterviewhk_enrolled') || localStorage.getItem('eduguide_enrolled');
    return saved ? JSON.parse(saved) : [];
  });

  const [profile, setProfile] = useState<UserProfile>(() => {
    const saved = localStorage.getItem('eeinterviewhk_profile') || localStorage.getItem('eduguide_profile');
    return saved ? JSON.parse(saved) : {
      fullName: '',
      phone: '',
      educationHistory: '',
      awardsCertificates: '',
      currentSchool: '',
      targetSchool: ''
    };
  });

  // UI Interactive States
  const [selectedSchool, setSelectedSchool] = useState<School | null>(null);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isDayTimelineOpen, setIsDayTimelineOpen] = useState(false);
  
  // Past Paper & Final interactive states
  const [selectedPaper, setSelectedPaper] = useState<any | null>(null);
  const [paperFilter, setPaperFilter] = useState<'all' | 'past-paper' | 'final'>('all');
  const [paperSearch, setPaperSearch] = useState('');
  const [downloadSuccessModal, setDownloadSuccessModal] = useState<string | null>(null);
  const [downloadingPaperId, setDownloadingPaperId] = useState<string | null>(null);
  const [downloadProgress, setDownloadProgress] = useState<number>(0);
  
  // Searching & Filtering
  const [schoolSearchQuery, setSchoolSearchQuery] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('All');
  const [selectedFeature, setSelectedFeature] = useState('All');

  // State Feedback / Saving loaders
  const [isSavingProfile, setIsSavingProfile] = useState(false);
  const [profileMessage, setProfileMessage] = useState('');
  const [customChecklistItem, setCustomChecklistItem] = useState('');
  const [selectedChecklistCategory, setSelectedChecklistCategory] = useState<'school' | 'practice' | 'day-prep'>('school');

  // Persist trigger changes
  useEffect(() => {
    localStorage.setItem('eeinterviewhk_schools', JSON.stringify(schools));
  }, [schools]);

  useEffect(() => {
    localStorage.setItem('eeinterviewhk_checklist', JSON.stringify(checklist));
  }, [checklist]);

  useEffect(() => {
    localStorage.setItem('eeinterviewhk_enrolled', JSON.stringify(enrolledCourses));
  }, [enrolledCourses]);

  useEffect(() => {
    localStorage.setItem('eeinterviewhk_profile', JSON.stringify(profile));
  }, [profile]);

  // Handle specific actions
  const handleUnlockSample = (schoolId: string) => {
    setSchools(prev => prev.map(sch => sch.id === schoolId ? { ...sch, sampleUnlocked: true } : sch));
  };

  const handleEnrollCourse = (courseId: string) => {
    if (!enrolledCourses.includes(courseId)) {
      setEnrolledCourses(prev => [...prev, courseId]);
    }
  };

  const handleToggleChecklist = (id: string) => {
    setChecklist(prev => prev.map(item => item.id === id ? { ...item, checked: !item.checked } : item));
  };

  const handleAddChecklistItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customChecklistItem.trim()) return;

    const newItem: ChecklistItem = {
      id: Date.now().toString(),
      category: selectedChecklistCategory,
      text: customChecklistItem.trim(),
      checked: false
    };

    setChecklist(prev => [...prev, newItem]);
    setCustomChecklistItem('');
  };

  const handleDeleteChecklistItem = (id: string) => {
    setChecklist(prev => prev.filter(item => item.id !== id));
  };

  const handleDownloadPaper = (paper: any) => {
    setDownloadingPaperId(paper.id);
    setDownloadProgress(0);
    
    const interval = setInterval(() => {
      setDownloadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setDownloadingPaperId(null);
            setDownloadSuccessModal(paper.schoolName + " " + paper.title);
          }, 500);
          return 100;
        }
        return prev + 25;
      });
    }, 150);
  };

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSavingProfile(true);
    setProfileMessage('');

    setTimeout(() => {
      setIsSavingProfile(false);
      setProfileMessage('🎉 個人檔案與備份資料同步成功！');
      setTimeout(() => setProfileMessage(''), 3000);
    }, 1200);
  };

  // Checklist Calculations
  const checkedCount = checklist.filter(item => item.checked).length;
  const progressPercent = checklist.length > 0 ? Math.round((checkedCount / checklist.length) * 100) : 0;

  // Render variables
  const schoolsDistricts = ['All', ...Array.from(new Set(schools.map(s => s.district)))];
  const schoolsFeatures = ['All', '雙語教學', '傳統名校', '美式教育', '升小直升'];

  const filteredSchools = schools.filter(s => {
    const matchesSearch = s.name.toLowerCase().includes(schoolSearchQuery.toLowerCase()) || 
                          (s.englishName && s.englishName.toLowerCase().includes(schoolSearchQuery.toLowerCase())) ||
                          s.intro.toLowerCase().includes(schoolSearchQuery.toLowerCase());
    const matchesDistrict = selectedDistrict === 'All' || s.district === selectedDistrict;
    const matchesFeature = selectedFeature === 'All' || s.features.some(f => f.includes(selectedFeature)) || s.type.includes(selectedFeature);
    return matchesSearch && matchesDistrict && matchesFeature;
  });

  return (
    <div className="relative min-h-screen bg-[#f8f9fa] text-[#191c1d] flex flex-col font-sans select-none overflow-x-hidden pb-16">
      {/* Top Professional Header Bar */}
      <header className="sticky top-0 z-40 bg-white border-b border-gray-200/80 shadow-xs h-16 flex items-center justify-between px-4 sm:px-8">
        <div className="flex items-center gap-2">
          {/* Logo Crest symbol */}
          <div className="w-9 h-9 rounded-xl bg-[#031632] text-[#ffbb16] flex items-center justify-center font-bold text-lg shadow-md font-hanken">
            EE
          </div>
          <div className="flex flex-col">
            <h1 className="text-sm font-bold text-[#031632] tracking-tight leading-none flex items-center gap-1 font-sans">
              EEinterviewHK <span className="text-[9px] bg-amber-50 text-amber-700 px-1 py-0.5 rounded border border-amber-200">名校領路</span>
            </h1>
            <p className="text-[10px] text-gray-400 mt-0.5">香港幼稚園升學與面試準備精準指南</p>
          </div>
        </div>

        {/* Global info telemetry */}
        <div className="hidden md:flex items-center gap-4 text-xs">
          <div className="flex items-center gap-1.5 text-gray-500 font-mono">
            <span>⏰ 系統時間: 2026-06-17 UTC</span>
          </div>
          <a
            href="https://wa.me/85246888429"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 bg-green-50 text-green-700 px-3 py-1 rounded-full text-[11px] font-semibold border border-green-200 hover:bg-green-100 transition-all"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>客服熱線</span>
          </a>
        </div>
      </header>

      {/* Main Container */}
      <div className="flex-1 max-w-5xl w-full mx-auto p-4 sm:p-6 lg:p-8 space-y-8">
        <AnimatePresence mode="wait">
          {/* 1. HOME TAB */}
          {activeTab === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-8"
            >
              {/* Premium Hero Section */}
              <section className="relative rounded-3xl overflow-hidden bg-[#031632] text-white p-6 sm:p-10 shadow-xl min-h-[300px] flex flex-col justify-center">
                {/* Decorative glow background */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-[#ffbb16]/10 rounded-full blur-3xl pointer-events-none" />
                <div className="relative z-10 max-w-2xl space-y-4">
                  <div className="inline-flex items-center gap-1.5 bg-[#ffbb16]/10 text-[#ffdea6] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-[#ffbb16]/20">
                    <Sparkles className="w-3 h-3 text-[#ffbb16]" />
                    <span>2026/2027 升學季必備</span>
                  </div>
                  <h2 className="text-2xl sm:text-4xl font-extrabold font-sans tracking-tight leading-tight">
                    解鎖香港頂級名校面試密碼，<br className="hidden sm:inline" />
                    讓您的孩子自信踏好升學第一步！
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-sans max-w-lg">
                    收錄 10 間頂級名校真題精選、200+ 名校校長真實提問攻略、面試當日流程指南、專家 1對1 首創私人輔導系統，一站式終結升學焦慮。
                  </p>
                  <div className="flex flex-wrap gap-2.5 pt-2">
                    <button
                      onClick={() => setActiveTab('schools')}
                      className="px-5 py-2.5 bg-[#ffbb16] hover:bg-[#ffbb16]/90 text-[#031632] font-bold text-xs rounded-lg shadow active:scale-95 transition-all"
                    >
                      探索 10 間項級名校預覽
                    </button>
                    <button
                      onClick={() => setActiveTab('courses')}
                      className="px-5 py-2.5 bg-white/10 hover:bg-white/15 text-white font-bold text-xs rounded-lg border border-white/20 hover:border-white/40 active:scale-95 transition-all"
                    >
                      查看三大黃牌套餐
                    </button>
                  </div>
                </div>
              </section>

              {/* Dynamic Value Pros Cards */}
              <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-5 rounded-2xl border border-gray-200/85 shadow-sm flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center font-bold text-lg shrink-0">
                    📕
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-sm text-[#031632]">200+ 校長提問庫</h3>
                    <p className="text-[11px] text-gray-500 leading-normal">
                      深度還原各大名校校表面試真實問答，名師解析答題思路完美避開套詞。
                    </p>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-gray-200/85 shadow-sm flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-lg shrink-0">
                    📝
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-sm text-[#031632]">100+ 真題 Past Paper</h3>
                    <p className="text-[11px] text-gray-500 leading-normal">
                      收集往年家長考場回憶及專家高分詳解，幫助幼童精準刷題提分。
                    </p>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-gray-200/85 shadow-sm flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-green-50 text-green-600 flex items-center justify-center font-bold text-lg shrink-0">
                    👥
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-sm text-[#031632]">1 對 1 私人顧問點評</h3>
                    <p className="text-[11px] text-gray-500 leading-normal">
                      前名校考務主任親指導改寫 Portfolio 教育心法，專注解決各類疑難雜症。
                    </p>
                  </div>
                </div>
              </section>

              {/* Preview 3 Hot Schools on Home */}
              <section className="space-y-4">
                <div className="flex items-end justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-[#031632] tracking-tight">精選熱門名校</h3>
                    <p className="text-xs text-gray-500">香港最受歡迎的名牌學校入學資料庫</p>
                  </div>
                  <button
                    onClick={() => setActiveTab('schools')}
                    className="text-xs font-bold text-[#031632] inline-flex items-center gap-1 hover:underline group"
                  >
                    <span>查看完整 10 間學校</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 duration-150" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {schools.slice(0, 3).map(sch => (
                    <div
                      key={sch.id}
                      className="bg-white rounded-2xl overflow-hidden border border-gray-200/90 shadow-xs hover:shadow-md hover:border-gray-300 transition-all duration-200 flex flex-col justify-between"
                    >
                      <div>
                        {/* School cover */}
                        <div className="relative h-44 bg-gray-100 overflow-hidden">
                          <img
                            src={sch.image}
                            alt={sch.name}
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute top-3 left-3 bg-[#031632] text-white text-[10px] font-bold px-2.5 py-0.5 rounded">
                            {sch.district}
                          </div>
                          {sch.isHot && (
                            <div className="absolute top-3 right-3 bg-[#ffbb16] text-[#031632] text-[10px] font-extrabold px-2.5 py-0.5 rounded">
                              HOT 🔥
                            </div>
                          )}
                        </div>

                        {/* Description */}
                        <div className="p-5 space-y-2.5">
                          <div>
                            <h4 className="font-bold text-sm text-[#031632]">{sch.name}</h4>
                            <p className="text-[10px] text-gray-450 truncate">{sch.englishName}</p>
                          </div>
                          <p className="text-[#191c1d] text-xs line-clamp-3 leading-relaxed">
                            {sch.intro}
                          </p>
                        </div>
                      </div>

                      {/* Detail CTA panel */}
                      <div className="px-5 pb-5 pt-3 border-t border-gray-100/80 flex items-center justify-between">
                        <span className="text-[11px] font-mono text-gray-400 font-medium">
                          {sch.pastPaperCount} 模擬題
                        </span>
                        <button
                          onClick={() => setSelectedSchool(sch)}
                          className="text-xs bg-gray-50 hover:bg-[#031632] text-[#031632] hover:text-white font-bold py-1.5 px-3.5 rounded-lg border border-[#031632]/20 hover:border-transparent transition-all active:scale-95"
                        >
                          領取免費真題樣本
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Highlight Course 2 (Slide 7 Special Deal) */}
              <section className="bg-gradient-to-r from-amber-50 to-[#ffdea6]/35 p-6 rounded-2xl border border-[#ffdea6] flex flex-col md:flex-row items-center gap-6 justify-between">
                <div className="space-y-2 max-w-lg text-center md:text-left">
                  <span className="inline-block px-2.5 py-0.5 bg-[#7c5800]/10 text-[#7c5800] text-[10px] font-bold rounded">
                    即買即讀限時特降
                  </span>
                  <h4 className="text-lg font-bold text-[#031632]">《套餐二：家長專屬面試攻略》家長面試全攻略</h4>
                  <p className="text-xs text-gray-600 leading-relaxed font-sans">
                    校長最看重家長什麼？應對刁鑽問答、育兒理念一致性。本精品課件當場命中高達 89.2% 學員往年考題。限時特降 <strong>HK$1,299</strong>（原價 $2,000），解鎖最優對策！
                  </p>
                </div>
                <div className="flex gap-2.5 shrink-0">
                  <button
                    onClick={() => {
                      const c = INITIAL_COURSES.find(crs => crs.id === 'course-2');
                      if (c) setSelectedCourse(c);
                    }}
                    className="px-5 py-2.5 bg-[#031632] hover:bg-[#1a2b48] text-white font-bold text-xs rounded-lg active:scale-95 transition-all shadow"
                  >
                    進入精品全攻略詳情
                  </button>
                </div>
              </section>
            </motion.div>
          )}

          {/* 2. SCHOOLS TAB */}
          {activeTab === 'schools' && (
            <motion.div
              key="schools"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-6"
            >
              {/* Filter controls */}
              <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-xs space-y-4">
                <div className="flex flex-col md:flex-row gap-3">
                  {/* Search Input */}
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="text"
                      placeholder="搜尋學校名稱、辦學特色或真題關鍵字..."
                      value={schoolSearchQuery}
                      onChange={e => setSchoolSearchQuery(e.target.value)}
                      className="w-full pl-9 pr-4 py-2 text-xs border border-gray-200 rounded-lg focus:outline-none focus:border-[#031632]"
                    />
                  </div>

                  {/* District Filter */}
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-400 font-bold shrink-0">地區:</span>
                    <div className="flex gap-1 overflow-x-auto">
                      {schoolsDistricts.map(dist => (
                        <button
                          key={dist}
                          onClick={() => setSelectedDistrict(dist)}
                          className={`px-3 py-1 rounded-md text-[11px] font-semibold transition-all ${
                            selectedDistrict === dist
                              ? 'bg-[#031632] text-white'
                              : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
                          }`}
                        >
                          {dist === 'All' ? '全部地區' : dist}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Feature Tags Filters */}
                <div className="flex items-center gap-2 pt-2 border-t border-gray-100 overflow-x-auto text-xs">
                  <span className="text-xs text-gray-400 font-bold shrink-0">特色優勢:</span>
                  <div className="flex gap-1">
                    {schoolsFeatures.map(feat => (
                      <button
                        key={feat}
                        onClick={() => setSelectedFeature(feat)}
                        className={`px-3 py-1 rounded-md text-[11px] font-semibold transition-all ${
                          selectedFeature === feat
                            ? 'bg-[#ffbb16] text-[#031632]'
                            : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
                        }`}
                      >
                        {feat === 'All' ? '全部特色' : feat}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Schools Matrix List */}
              {filteredSchools.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredSchools.map(sch => (
                    <div
                      key={sch.id}
                      className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
                    >
                      <div>
                        {/* Cover photo */}
                        <div className="relative h-48 bg-gray-100">
                          <img
                            src={sch.image}
                            alt={sch.name}
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                          <span className="absolute top-3 left-3 bg-[#031632] text-white text-[10px] font-bold px-2.5 py-0.5 rounded">
                            {sch.district}
                          </span>
                          {sch.isHot && (
                            <span className="absolute top-3 right-3 bg-[#ffbb16] text-[#031632] text-[10px] font-extrabold px-2.5 py-0.5 rounded">
                              HOT 🔥
                            </span>
                          )}
                        </div>

                        {/* Main Body */}
                        <div className="p-6 space-y-4">
                          <div>
                            <h3 className="font-bold text-base text-[#031632]">{sch.name}</h3>
                            <p className="text-xs text-gray-400 truncate">{sch.englishName}</p>
                          </div>

                          <p className="text-xs text-gray-600 leading-relaxed font-sans line-clamp-3">
                            {sch.intro}
                          </p>

                          {/* Attribute tags */}
                          <div className="flex flex-wrap gap-1.5 pt-1">
                            {sch.features.map((feat, idx) => (
                              <span
                                key={idx}
                                className="px-2.5 py-0.5 bg-gray-100 text-[10px] font-semibold text-gray-600 rounded"
                              >
                                {feat}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Grid Bottom Bar */}
                      <div className="px-6 pb-6 pt-3 border-t border-gray-100/80 flex items-center justify-between">
                        <span className="text-[11px] font-mono font-semibold text-[#00504a]">
                          💎 {sch.pastPaperCount} 模擬真題庫
                        </span>
                        <button
                          onClick={() => setSelectedSchool(sch)}
                          className="px-4 py-2 bg-[#031632] hover:bg-[#1a2b48] text-white font-bold text-xs rounded-lg shadow-xs active:scale-95 transition-all"
                        >
                          解鎖真題與分析
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 bg-white rounded-2xl border border-gray-200 shadow-xs space-y-3">
                  <p className="text-lg text-gray-400">🔍 沒有找到與篩選條件符合的名校檔案</p>
                  <button
                    onClick={() => {
                      setSchoolSearchQuery('');
                      setSelectedDistrict('All');
                      setSelectedFeature('All');
                    }}
                    className="text-xs font-bold text-[#031632] underline"
                  >
                    恢復預設篩選條款
                  </button>
                </div>
              )}
            </motion.div>
          )}

          {/* 3. COURSES TAB */}
          {activeTab === 'courses' && (
            <motion.div
              key="courses"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-6"
            >
              {/* Category selector */}
              <div className="text-center py-2">
                <h2 className="text-xl font-bold text-[#031632]">升學核心特訓精品課程</h2>
                <p className="text-xs text-gray-500 mt-1">
                  過往學員回饋高概率命中真實面試題目，助您以百分努力獲得百分成功
                </p>
              </div>

              {/* Course Pack Grid list */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {INITIAL_COURSES.map(course => {
                  const enrolled = enrolledCourses.includes(course.id);
                  return (
                    <div
                      key={course.id}
                      className={`bg-white rounded-2xl overflow-hidden border transition-all duration-200 flex flex-col justify-between shadow-xs hover:shadow-md ${
                        course.id === 'course-3'
                          ? 'border-2 border-[#ffbb16] relative'
                          : 'border-gray-250'
                      }`}
                    >
                      {/* Popular ribbon */}
                      {course.id === 'course-3' && (
                        <span className="absolute top-0 right-0 bg-[#ffbb16] text-[#031632] text-[10px] font-extrabold px-3 py-1 rounded-bl-xl uppercase tracking-widest z-10 shadow-sm">
                          最強方案
                        </span>
                      )}

                      <div className="p-6 space-y-4">
                        {/* Icon & title details */}
                        <div className="space-y-2">
                          <span className="text-[10px] font-bold text-gray-400 block tracking-widest uppercase">
                            {course.tag}
                          </span>
                          <h3 className="font-bold text-base text-[#031632] font-sans leading-snug">
                            {course.title}
                          </h3>
                        </div>

                        {/* Pricing details */}
                        <div className="flex items-baseline gap-1.5 pb-2 border-b border-gray-100">
                          <span className="text-2xl font-bold text-[#031632]">HK${course.price}</span>
                          {course.originalPrice && (
                            <span className="text-xs text-gray-400 line-through">HK${course.originalPrice}</span>
                          )}
                        </div>

                        {/* Short intro */}
                        <p className="text-xs text-gray-600 font-sans leading-relaxed">
                          {course.description}
                        </p>

                        {/* List items checkmarks (at most 4 for vertical space) */}
                        <ul className="space-y-2.5 pt-2 text-xs">
                          {course.features.slice(0, 4).map((f, i) => (
                            <li key={i} className="flex items-start gap-2.5 font-sans">
                              <span className="text-green-500 shrink-0 mt-0.5">✓</span>
                              <span className="text-gray-600 text-[11px] leading-relaxed">{f}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Course bottom booking panel */}
                      <div className="p-6 bg-gray-50 border-t border-gray-100 flex flex-col gap-2">
                        <button
                          onClick={() => setSelectedCourse(course)}
                          className="w-full py-2 bg-white hover:bg-gray-100 text-[#031632] font-bold text-xs rounded-lg border border-[#031632]/25 transition-all text-center block active:scale-95"
                        >
                          探索詳細課綱 / 試聽 →
                        </button>
                        <button
                          onClick={() => handleEnrollCourse(course.id)}
                          className={`w-full py-2.5 font-bold text-xs rounded-lg active:scale-95 transition-all shadow-xs ${
                            enrolled
                              ? 'bg-green-100 text-green-800'
                              : 'bg-[#ffbb16] hover:bg-[#ffbb40] text-[#031632]'
                          }`}
                        >
                          {enrolled ? '✓ 已成功訂購解鎖' : `立即訂購  HK$${course.price}`}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* 4. TOOLS TAB */}
          {activeTab === 'tools' && (
            <motion.div
              key="tools"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-6"
            >
              {/* Head line dashboard info - Slide 5 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* 1. Days till first round */}
                <div className="bg-[#031632] text-white p-6 rounded-2xl border border-gray-700 shadow-sm flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">面試倒計時</span>
                    <h3 className="text-xl font-bold mt-1 tracking-tight">距第一輪入學面試</h3>
                  </div>
                  <div className="py-2 flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold text-[#ffbb16] font-mono leading-none">45</span>
                    <span className="text-xs text-gray-300">天</span>
                  </div>
                  <p className="text-[10px] text-gray-400">更新於：2026年 6月 17日 系統</p>
                </div>

                {/* 2. Interactive Checklist progress % layout */}
                <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex items-center justify-between">
                  <div className="space-y-3">
                    <div>
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">備考準備進度</span>
                      <h3 className="text-sm font-bold mt-1 text-[#031632]">我的入學考核 checklist</h3>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-[#031632]">{progressPercent}%</span>
                      <span className="text-[10px] text-gray-400">({checkedCount}/{checklist.length} 完成)</span>
                    </div>
                  </div>

                  {/* HTML5 Circular SVG indicator */}
                  <div className="relative w-16 h-16 transform -rotate-90">
                    <svg className="w-full h-full" viewBox="0 0 36 36">
                      <path
                        className="text-gray-100"
                        strokeWidth="3"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path
                        className="text-[#031632] transition-all duration-300"
                        strokeDasharray={`${progressPercent}, 100`}
                        strokeWidth="3"
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-[#031632] rotate-90">
                      🎯
                    </div>
                  </div>
                </div>

                {/* 3. Helper Widget links */}
                <div className="bg-white p-6 rounded-2xl border border-gray-200/90 shadow-sm flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">當前入學準備手冊</span>
                    <h3 className="text-sm font-bold text-[#031632] mt-1 mb-1">今日面試指南與避坑點</h3>
                    <p className="text-[11px] text-gray-500 leading-normal">
                      為家長梳理的抵達、登記等五大面談核心現場避坑點
                    </p>
                  </div>
                  <button
                    onClick={() => setIsDayTimelineOpen(true)}
                    className="w-full py-1.5 bg-gray-50 hover:bg-gray-100 border border-gray-200 hover:border-gray-300 text-xs text-gray-700 font-bold rounded-lg transition-all active:scale-95"
                  >
                    開啟當日全程指南 →
                  </button>
                </div>
              </div>

              {/* Checklist Detail panel with task classification & item adder */}
              <div className="bg-white rounded-3xl border border-gray-200 p-6 sm:p-8 space-y-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-gray-100">
                  <div>
                    <h3 className="font-bold text-lg text-[#031632] font-sans">我的面試準備清單 (Checklist)</h3>
                    <p className="text-xs text-gray-400">按核心類別精細化管理您的面試工作任務</p>
                  </div>

                  {/* Checklist adder form */}
                  <form onSubmit={handleAddChecklistItem} className="flex gap-1.5 w-full sm:w-auto">
                    <select
                      value={selectedChecklistCategory}
                      onChange={e => setSelectedChecklistCategory(e.target.value as any)}
                      className="border border-gray-200 rounded-lg py-2 px-2 text-xs focus:outline-none focus:border-[#031632] bg-gray-50 text-gray-700 font-semibold"
                    >
                      <option value="school">研究名校</option>
                      <option value="practice">考題研究</option>
                      <option value="day-prep">當日物資</option>
                    </select>
                    <input
                      type="text"
                      placeholder="自定義加入備考任務項目..."
                      value={customChecklistItem}
                      onChange={e => setCustomChecklistItem(e.target.value)}
                      className="border border-gray-200 rounded-lg py-2 px-3 text-xs focus:outline-none focus:border-[#031632] grow min-w-0"
                    />
                    <button
                      type="submit"
                      className="p-2 bg-[#031632] text-[#ffbb16] rounded-lg hover:bg-[#1a2b48] active:scale-95 transition-all shrink-0"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </form>
                </div>

                {/* Sub-lists classified by category */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-sans">
                  {/* Category 1: 研究目標學校 */}
                  <div className="space-y-3">
                    <h4 className="font-bold text-xs text-[#031632] tracking-wide flex items-center gap-1 bg-[#d7e2ff]/20 px-3 py-1.5 rounded-lg border border-l-4 border-l-[#031632] border-gray-100">
                      <span>📌 研究目標學校</span>
                    </h4>
                    <div className="space-y-2">
                      {checklist
                        .filter(itm => itm.category === 'school')
                        .map(itm => (
                          <div
                            key={itm.id}
                            className="flex items-start gap-2.5 p-2 rounded-lg hover:bg-gray-50/50 group duration-150"
                          >
                            <input
                              type="checkbox"
                              checked={itm.checked}
                              onChange={() => handleToggleChecklist(itm.id)}
                              className="mt-0.5 rounded border-gray-300 text-[#031632] focus:ring-[#031632]"
                            />
                            <span className={`text-xs select-none grow leading-normal ${itm.checked ? 'text-gray-400 line-through' : 'text-gray-700'}`}>
                              {itm.text}
                            </span>
                            <button
                              onClick={() => handleDeleteChecklistItem(itm.id)}
                              className="text-gray-300 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        ))}
                    </div>
                  </div>

                  {/* Category 2: 考題與常見做法常見問題練習 */}
                  <div className="space-y-3">
                    <h4 className="font-bold text-xs text-[#7c5800] tracking-wide flex items-center gap-1 bg-yellow-50 px-3 py-1.5 rounded-lg border border-l-4 border-l-[#ffbb16] border-gray-100">
                      <span>🎯 考題問答與自我演練</span>
                    </h4>
                    <div className="space-y-2">
                      {checklist
                        .filter(itm => itm.category === 'practice')
                        .map(itm => (
                          <div
                            key={itm.id}
                            className="flex items-start gap-2.5 p-2 rounded-lg hover:bg-gray-50/50 group duration-150"
                          >
                            <input
                              type="checkbox"
                              checked={itm.checked}
                              onChange={() => handleToggleChecklist(itm.id)}
                              className="mt-0.5 rounded border-gray-300 text-[#031632] focus:ring-[#031632]"
                            />
                            <span className={`text-xs select-none grow leading-normal ${itm.checked ? 'text-gray-400 line-through' : 'text-gray-700'}`}>
                              {itm.text}
                            </span>
                            <button
                              onClick={() => handleDeleteChecklistItem(itm.id)}
                              className="text-gray-300 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        ))}
                    </div>
                  </div>

                  {/* Category 3: 面試物資準備及當日檢查 */}
                  <div className="space-y-3">
                    <h4 className="font-bold text-xs text-green-800 tracking-wide flex items-center gap-1 bg-green-50 px-3 py-1.5 rounded-lg border border-l-4 border-l-green-600 border-gray-100">
                      <span>👟 面試物資與出發準備</span>
                    </h4>
                    <div className="space-y-2">
                      {checklist
                        .filter(itm => itm.category === 'day-prep')
                        .map(itm => (
                          <div
                            key={itm.id}
                            className="flex items-start gap-2.5 p-2 rounded-lg hover:bg-gray-50/50 group duration-150"
                          >
                            <input
                              type="checkbox"
                              checked={itm.checked}
                              onChange={() => handleToggleChecklist(itm.id)}
                              className="mt-0.5 rounded border-gray-300 text-[#031632] focus:ring-[#031632]"
                            />
                            <span className={`text-xs select-none grow leading-normal ${itm.checked ? 'text-gray-400 line-through' : 'text-gray-700'}`}>
                              {itm.text}
                            </span>
                            <button
                              onClick={() => handleDeleteChecklistItem(itm.id)}
                              className="text-gray-300 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* 4.5 PAST PAPERS & FINAL IN PAST PAPERS SECTION */}
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-sm space-y-6 font-sans">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-gray-150">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-lg text-[#031632]">香港頂尖名校全真 Past Paper & Final 真題庫</h3>
                      <span className="bg-[#ffbb16] text-[#031632] text-[9px] font-extrabold uppercase px-1.5 py-0.5 rounded-sm tracking-wide">獨家收錄</span>
                    </div>
                    <p className="text-xs text-gray-500">收集歷屆經典首輪、次輪 Past Paper 及高管 Final In 面試官回答標準</p>
                  </div>

                  {/* Filter and search form */}
                  <div className="flex flex-col sm:flex-row gap-2.5 w-full sm:w-auto shrink-0">
                    <div className="relative">
                      <Search className="w-3.5 h-3.5 text-gray-400 absolute left-2.5 top-2.5" />
                      <input
                        type="text"
                        value={paperSearch}
                        onChange={e => setPaperSearch(e.target.value)}
                        placeholder="搜尋名校、年份、關鍵字..."
                        className="border border-gray-200 rounded-lg py-1.5 pl-8 pr-3 text-xs focus:outline-none focus:border-[#031632] bg-gray-50/50 w-full sm:w-44"
                      />
                    </div>
                    <div className="flex border border-gray-200 rounded-lg p-0.5 bg-gray-50 shrink-0">
                      <button
                        onClick={() => setPaperFilter('all')}
                        className={`px-3 py-1 text-[10px] font-bold rounded-md transition-all ${
                          paperFilter === 'all'
                            ? 'bg-white text-[#031632] shadow-xs'
                            : 'text-gray-400 hover:text-gray-700'
                        }`}
                      >
                        全部
                      </button>
                      <button
                        onClick={() => setPaperFilter('past-paper')}
                        className={`px-3 py-1 text-[10px] font-bold rounded-md transition-all ${
                          paperFilter === 'past-paper'
                            ? 'bg-white text-[#031632] shadow-xs'
                            : 'text-gray-400 hover:text-gray-700'
                        }`}
                      >
                        歷年全真題
                      </button>
                      <button
                        onClick={() => setPaperFilter('final')}
                        className={`px-3 py-1 text-[10px] font-bold rounded-md transition-all ${
                          paperFilter === 'final'
                            ? 'bg-white text-[#031632] shadow-xs'
                            : 'text-gray-400 hover:text-gray-700'
                        }`}
                      >
                        校長面考 (Final in)
                      </button>
                    </div>
                  </div>
                </div>

                {/* Grid of papers */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4.5">
                  {MOCK_PAST_PAPERS
                    .filter(paper => {
                      const matchesSearch = paper.schoolName.toLowerCase().includes(paperSearch.toLowerCase()) ||
                        paper.title.toLowerCase().includes(paperSearch.toLowerCase()) ||
                        paper.year.includes(paperSearch);
                      const matchesFilter = paperFilter === 'all' || paper.type === paperFilter;
                      return matchesSearch && matchesFilter;
                    })
                    .map(paper => {
                      const isDownloading = downloadingPaperId === paper.id;
                      return (
                        <div
                          key={paper.id}
                          className="border border-gray-150 rounded-2xl p-5 hover:border-[#031632] hover:shadow-md transition-all flex flex-col justify-between bg-white relative overflow-hidden group"
                        >
                          {/* Card background styling effect */}
                          <div className={`absolute top-0 right-0 w-24 h-24 rounded-full -mr-6 -mt-6 transition-opacity opacity-20 group-hover:opacity-30 ${
                            paper.type === 'final' ? 'bg-red-200' : 'bg-amber-200'
                          }`} />

                          {/* Top row */}
                          <div>
                            <div className="flex items-center justify-between mb-3.5 relative z-10">
                              <span className={`text-[9px] font-extrabold px-2.5 py-0.5 rounded-full ${
                                paper.type === 'final'
                                  ? 'bg-red-50 text-red-600 border border-red-200'
                                  : 'bg-amber-50 text-amber-800 border border-amber-200'
                              }`}>
                                {paper.badge}
                              </span>
                              <span className="text-[10px] text-gray-400 font-mono font-bold uppercase">{paper.year} 題目</span>
                            </div>

                            {/* Title & School */}
                            <div className="mb-4 relative z-10">
                              <p className="text-[10px] font-extrabold text-[#031632] uppercase tracking-wider">{paper.schoolName}</p>
                              <h4 className="font-bold text-gray-800 text-xs mt-1 leading-normal group-hover:text-[#031632] duration-200 min-h-[36px]">
                                {paper.title}
                              </h4>
                            </div>
                          </div>

                          {/* Middle row stats */}
                          <div className="border-t border-b border-gray-100 py-2.5 my-3 flex items-center justify-between text-[10px] relative z-10">
                            <span className="text-gray-400 font-medium">
                              精準對中率: <strong className="text-emerald-600 font-bold font-mono">{paper.recommendationRate}</strong>
                            </span>
                            <span className="text-gray-550 font-medium bg-gray-100 px-2 py-0.5 rounded">
                              {paper.qCount}
                            </span>
                          </div>

                          {/* Footer Action buttons with progress state support */}
                          <div className="flex gap-2 relative z-10 mt-2">
                            <button
                              onClick={() => setSelectedPaper(paper)}
                              className="flex-1 py-2.5 bg-gray-50 hover:bg-[#031632]/8 text-gray-700 text-[10px] font-bold rounded-xl transition-all text-center flex items-center justify-center gap-1 active:scale-95 duration-150"
                            >
                              <FileText className="w-3.5 h-3.5 text-gray-600" />
                              <span>在線快速模擬預習</span>
                            </button>
                            <button
                              disabled={isDownloading}
                              onClick={() => handleDownloadPaper(paper)}
                              className={`py-2.5 px-3.5 rounded-xl transition-all flex items-center justify-center gap-1 active:scale-95 duration-150 relative ${
                                isDownloading 
                                  ? 'bg-emerald-50 text-emerald-600 cursor-not-allowed border border-emerald-200' 
                                  : 'bg-[#031632] hover:bg-[#1a2b48] text-white'
                              }`}
                            >
                              {isDownloading ? (
                                <span className="text-[10px] font-bold font-mono">{downloadProgress}%</span>
                              ) : (
                                <Download className="w-3.5 h-3.5 text-[#ffbb16]" />
                              )}
                            </button>
                          </div>
                        </div>
                      );
                    })}

                  {/* Search Empty state */}
                  {MOCK_PAST_PAPERS.filter(paper => {
                    const matchesSearch = paper.schoolName.toLowerCase().includes(paperSearch.toLowerCase()) ||
                      paper.title.toLowerCase().includes(paperSearch.toLowerCase()) ||
                      paper.year.includes(paperSearch);
                    const matchesFilter = paperFilter === 'all' || paper.type === paperFilter;
                    return matchesSearch && matchesFilter;
                  }).length === 0 && (
                    <div className="col-span-full py-16 text-center bg-gray-50 rounded-3xl border border-dashed border-gray-200 font-sans">
                      <div className="w-12 h-12 bg-gray-100 text-gray-400 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Search className="w-5 h-5 animate-pulse" />
                      </div>
                      <p className="text-xs text-gray-550 font-bold">無此名校真題、模擬資料</p>
                      <p className="text-[10px] text-gray-450 mt-1">您可隨時通知專屬顧問幫忙，或放寬搜尋及篩選類別條件</p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}

          {/* 5. SUPPORT/PROFILE TAB */}
          {activeTab === 'support' && (
            <motion.div
              key="support"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-sans">
                {/* Profile Form (Slide 9 edit view) */}
                <div className="md:col-span-2 bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-sm space-y-6">
                  <div>
                    <h3 className="font-bold text-lg text-[#031632] flex items-center gap-2">
                      <User className="w-5 h-5" />
                      <span>編輯家長及幼兒 Portfolio 檔案</span>
                    </h3>
                    <p className="text-xs text-gray-400">填寫後我們在儲存該等資料並在預約一對一私人特訓時智慧對焦優化</p>
                  </div>

                  <form onSubmit={handleSaveProfile} className="space-y-4 text-xs">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="font-semibold text-gray-700">家長姓名/稱呼</label>
                        <input
                          type="text"
                          required
                          value={profile.fullName}
                          onChange={e => setProfile(prev => ({ ...prev, fullName: e.target.value }))}
                          placeholder="例如: 陳大文 A-媽媽"
                          className="w-full border border-gray-200 rounded-lg py-2 px-3 text-xs focus:outline-none focus:border-[#031632]"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="font-semibold text-gray-700">聯絡電話 (WhatsApp)</label>
                        <input
                          type="text"
                          required
                          value={profile.phone}
                          onChange={e => setProfile(prev => ({ ...prev, phone: e.target.value }))}
                          placeholder="例如: +852 98765432"
                          className="w-full border border-gray-200 rounded-lg py-2 px-3 text-xs focus:outline-none focus:border-[#031632]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="font-semibold text-gray-700">當前就讀幼稚園 (N班/PN)</label>
                        <input
                          type="text"
                          value={profile.currentSchool || ''}
                          onChange={e => setProfile(prev => ({ ...prev, currentSchool: e.target.value }))}
                          placeholder="沒有就讀請留空，或輸入：XX維多●●"
                          className="w-full border border-gray-200 rounded-lg py-2 px-3 text-xs focus:outline-none focus:border-[#031632]"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="font-semibold text-gray-700">目標名校 (Target School)</label>
                        <input
                          type="text"
                          value={profile.targetSchool || ''}
                          onChange={e => setProfile(prev => ({ ...prev, targetSchool: e.target.value }))}
                          placeholder="例如: 拔萃●●●或聖●●"
                          className="w-full border border-gray-200 rounded-lg py-2 px-3 text-xs focus:outline-none focus:border-[#031632]"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-semibold text-gray-700">幼兒學術/性格特長/課外發展背景</label>
                      <textarea
                        rows={3}
                        value={profile.educationHistory}
                        onChange={e => setProfile(prev => ({ ...prev, educationHistory: e.target.value }))}
                        placeholder="例如: 雙語表達能力極佳、外向喜愛大聲說話、在鋼琴律動班表現出色..."
                        className="w-full border border-gray-200 rounded-lg py-2.5 px-3 text-xs focus:outline-none focus:border-[#031632]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-semibold text-gray-700">獲得獎項、證書、Portfolio 核心成就</label>
                      <textarea
                        rows={2}
                        value={profile.awardsCertificates}
                        onChange={e => setProfile(prev => ({ ...prev, awardsCertificates: e.target.value }))}
                        placeholder="例如: 奧數幼兒組亞軍、英語朗誦比賽優異證書..."
                        className="w-full border border-gray-200 rounded-lg py-2.5 px-3 text-xs focus:outline-none focus:border-[#031632]"
                      />
                    </div>

                    {/* Feedback alerts and CTA */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-2">
                      <p className="text-xs text-green-600 font-semibold">{profileMessage}</p>
                      <button
                        type="submit"
                        disabled={isSavingProfile}
                        className="px-6 py-2.5 bg-[#031632] hover:bg-[#1a2b48] text-white font-bold text-xs rounded-lg active:scale-95 transition-all shadow-xs shrink-0 flex items-center gap-1.5"
                      >
                        {isSavingProfile ? (
                          <>
                            <span className="w-3.5 h-3.5 rounded-full border-2 border-white border-t-transparent animate-spin" />
                            <span>備份儲存中...</span>
                          </>
                        ) : (
                          <>
                            <span>儲存並同步檔案庫</span>
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </div>

                {/* Sub-Support Box */}
                <div className="space-y-6">
                  {/* WhatsApp Helper widget */}
                  <div className="bg-[#25D366]/10 p-6 rounded-3xl border border-[#25D366]/30 flex flex-col justify-between h-56">
                    <div>
                      <span className="inline-block px-2.5 py-0.5 bg-[#25D366] text-white text-[9px] font-bold rounded uppercase tracking-wider">
                        Live Helpline
                      </span>
                      <h4 className="font-bold text-base text-[#031632] mt-2.5 mb-1 flex items-center gap-1">
                        <span>WhatsApp 諮詢熱線</span>
                      </h4>
                      <p className="text-xs text-gray-600 leading-relaxed font-sans">
                        我們專業客服小組提供一對一即時回覆。有關名校歷年真題密碼、課程疑難解答等直接聯繫我們！
                      </p>
                    </div>
                    <a
                      href="https://wa.me/85246888429"
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 bg-[#25D366] hover:bg-[#25D366]/90 text-white font-bold text-xs rounded-xl shadow-xs transition-colors flex items-center justify-center gap-1.5"
                    >
                      <MessageCircle className="w-4 h-4 fill-white" />
                      <span>即刻 WhatsApp 聯繫</span>
                    </a>
                  </div>

                  {/* Standard terms disclaimer box */}
                  <div className="bg-white p-6 rounded-3xl border border-gray-200 text-xs text-gray-500 space-y-2">
                    <span className="font-bold text-[#031632] flex items-center gap-1">
                      <AlertOctagon className="w-4 h-4 text-amber-500" />
                      <span>免責聲明與版權指引</span>
                    </span>
                    <p className="text-[10px] leading-relaxed">
                      EEinterviewHK 提供之名校 Past Paper 與真題庫皆為廣大熱心家長的考後考場回憶整理與學術還原，不代表各校官方組織的任何立場。
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Global Booking Triggers & Modals */}
      <AnimatePresence>
        {selectedSchool && (
          <SchoolDetailModal
            school={selectedSchool}
            onClose={() => setSelectedSchool(null)}
            onUnlockSample={handleUnlockSample}
          />
        )}

        {selectedCourse && selectedCourse.id === 'course-2' && (
          <Course2DetailModal
            course={selectedCourse}
            onClose={() => setSelectedCourse(null)}
            enrolled={enrolledCourses.includes('course-2')}
            onEnroll={() => {
              handleEnrollCourse('course-2');
              // Delay closure or update
            }}
          />
        )}

        {selectedCourse && selectedCourse.id !== 'course-2' && (
          <CourseMasterDetailModal
            course={selectedCourse}
            onClose={() => setSelectedCourse(null)}
            enrolled={enrolledCourses.includes(selectedCourse.id)}
            onEnroll={() => {
              handleEnrollCourse(selectedCourse.id);
            }}
          />
        )}

        {isBookingOpen && (
          <TutorBookingModal onClose={() => setIsBookingOpen(false)} />
        )}

        {isDayTimelineOpen && (
          <InterviewDayTimeline onClose={() => setIsDayTimelineOpen(false)} />
        )}

        {/* Selected Past Paper Online Practice Modal */}
        {selectedPaper && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-sm overflow-y-auto">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-gray-50 flex flex-col w-full max-w-2xl h-[90vh] sm:h-[80vh] rounded-3xl overflow-hidden shadow-2xl border border-gray-150 font-sans relative"
            >
              {/* Header */}
              <header className="p-5 bg-[#031632] text-white flex items-center justify-between shadow-xs shrink-0">
                <div>
                  <span className="text-[9px] font-extrabold uppercase px-2 py-0.5 bg-[#ffbb16] text-[#031632] rounded mr-2 align-middle">
                    {selectedPaper.badge}
                  </span>
                  <span className="text-xs text-gray-300 font-bold tracking-wider uppercase h-auto">
                    {selectedPaper.schoolName}
                  </span>
                  <h3 className="font-bold text-sm text-white mt-1 leading-snug">
                    {selectedPaper.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedPaper(null)}
                  className="w-8 h-8 rounded-full hover:bg-white/10 flex items-center justify-center text-white transition-colors"
                >
                  ✕
                </button>
              </header>

              {/* Body Practice Questions */}
              <div className="p-5 overflow-y-auto grow space-y-5">
                <div className="bg-[#031632]/5 border border-[#031632]/10 p-4 rounded-2xl">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#031632]">
                    <Sparkles className="w-4 h-4 text-amber-500 shrink-0" />
                    <span>在線精練與面試官標準模擬提點</span>
                  </div>
                  <p className="text-[11px] text-gray-500 mt-1 leading-relaxed">
                    下表列出了該校在歷年、甚至最新考場中被驗證最高頻考出的核心環節。您可以在文本框內模擬為學童或家庭擬定對策，並獲取專業顧問評審標準。
                  </p>
                </div>

                <div className="space-y-4">
                  {selectedPaper.questions.map((q: any, i: number) => (
                    <div key={i} className="bg-white p-5 rounded-2xl border border-gray-150 shadow-xs space-y-3.5">
                      {/* Quest Title */}
                      <div className="flex items-start gap-2">
                        <span className="w-5 h-5 rounded-full bg-[#031632]/10 text-[#031632] text-xs font-bold font-mono flex items-center justify-center shrink-0 mt-0.5">
                          {i + 1}
                        </span>
                        <div>
                          <h4 className="font-bold text-xs text-gray-850 leading-normal">
                            面試核心題目 / 環節描述：
                          </h4>
                          <p className="text-xs text-gray-600 font-semibold mt-1 bg-gray-50 p-2.5 rounded-lg border border-gray-100">
                            {q.q}
                          </p>
                        </div>
                      </div>

                      {/* Parent draft input */}
                      <div className="space-y-1.5 pt-1">
                        <label className="text-[10px] font-bold text-[#031632] uppercase tracking-wide">我擬定的家庭/幼兒作答草稿對策</label>
                        <textarea
                          rows={2}
                          placeholder="例如: 孩子會主動站立和老師說早晨，並自我介紹..."
                          className="w-full border border-gray-200 rounded-xl p-2.5 text-xs text-gray-700 bg-gray-50/20 focus:outline-[#031632]"
                        />
                      </div>

                      {/* Criteria and tips */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-2 border-t border-gray-100/60 text-[11px] bg-amber-50/30 p-3 rounded-xl border border-dashed border-amber-100">
                        <div>
                          <div className="font-bold text-[#031632] flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 inline-block" />
                            <span>名校考官審查視角</span>
                          </div>
                          <p className="text-gray-550 mt-1 leading-relaxed">{q.evaluation}</p>
                        </div>
                        <div>
                          <div className="font-bold text-[#7c5800] flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 inline-block" />
                            <span>高分顧問答題配方</span>
                          </div>
                          <p className="text-gray-600 mt-1 leading-relaxed font-semibold">{q.tip}</p>
                        </div>
                      </div>

                      {/* Simulated Feedback triggers */}
                      <div className="flex items-center justify-end">
                        <button
                          type="button"
                          onClick={() => {
                            alert(`【模擬 AI 答題反饋分析】\n\n學童的準備描述與 ${selectedPaper.schoolName} 的辦學氛圍契合！但在面對小組社交考官時，建議增加「雙手向考官呈遞教具，並說 Thank you / 多謝老師」的面目眼神親和細節。我們顧問組主任也已接收到本題作答備份，將在 10 分鐘內跟進提供 WhatsApp 語音點撥與全套真題評審！`);
                          }}
                          className="px-3 py-1.5 bg-[#031632]/5 text-[#031632] hover:bg-[#031632]/10 text-[10px] font-bold rounded-lg transition-colors flex items-center gap-1"
                        >
                          <Sparkles className="w-3 h-3 text-[#ffbb16]" />
                          <span>這題一鍵「模擬 AI 對策測評」</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <footer className="p-4 bg-white border-t border-gray-150 flex items-center justify-between gap-4 shrink-0">
                <p className="text-[10px] text-gray-400 font-bold leading-normal">
                  * 測評數據會自動保存並備份在您下方的個人檔案 (Portfolio) 中。
                </p>
                <button
                  type="button"
                  onClick={() => {
                    alert('系統已為您一鍵生成本套模擬精練學術總結報告，並通過 WhatsApp 推送至您註冊的手機裝置！您可以邀請專屬諮詢導師進一步一對一模擬對練。');
                    setSelectedPaper(null);
                  }}
                  className="px-5 py-2.5 bg-[#ffbb16] hover:bg-[#ffbb40] text-[#031632] text-xs font-bold rounded-xl active:scale-95 transition-all shadow-sm"
                >
                  完成本套練習，提交顧問
                </button>
              </footer>
            </motion.div>
          </div>
        )}

        {/* PDF Download success toast */}
        {downloadSuccessModal && (
          <div className="fixed inset-0 z-55 flex items-center justify-center p-4 bg-black/65 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white p-7 sm:p-8 rounded-3xl max-w-sm text-center shadow-2xl relative border border-gray-100 font-sans"
            >
              <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-100 shadow-xs">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-base text-[#031632]">名校 PDF 全真真題已就緒</h3>
              <p className="text-xs text-gray-500 mt-2.5 leading-relaxed">
                高解析度 <strong>{downloadSuccessModal}</strong> 打印版真題考卷已為您同步保存在離線檔案庫。<br/>
                系統正通過熱連接將打印信號推送至您註冊的 WhatsApp 裝置，方便一鍵完成家庭打印，隨時模擬備考！
              </p>
              <button
                type="button"
                onClick={() => setDownloadSuccessModal(null)}
                className="mt-6 w-full py-2.5 bg-[#031632] hover:bg-[#1a2b48] text-white font-bold text-xs rounded-xl shadow-xs active:scale-95 transition-all"
              >
                我知道了，去打印
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* WhatsApp Fixed Sticky Bubble (Non-blocking) */}
      <a
        href="https://wa.me/85246888429"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-20 right-4 sm:right-6 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 duration-150 z-20 group"
      >
        <svg fill="currentColor" className="w-7 h-7" viewBox="0 0 24 24">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217h.332c.101 0 .231-.038.361.274.13.318.448 1.097.487 1.17.039.072.065.156.014.253-.05.099-.077.156-.152.246-.077.09-.161.2-.23.27-.078.079-.158.164-.068.319.09.156.403.665.864 1.076.594.53 1.092.694 1.247.772.156.079.247.066.338-.038.09-.104.391-.455.492-.61.101-.155.203-.13.342-.079s.882.416 1.033.493c.152.078.252.117.289.179.036.062.036.357-.108.762z" />
        </svg>
        <span className="absolute right-16 bg-[#031632] text-white font-semibold text-xs py-1.5 px-3 rounded-lg shadow whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none duration-150-delay">
          WhatsApp 專業助教諮詢
        </span>
      </a>

      {/* Modern Bottom Navigation Tab Bar */}
      <nav className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 z-35 px-2 py-1 shadow-md h-16 flex items-center justify-around">
        {[
          { tab: 'home', label: '首頁總覽', icon: BookOpen },
          { tab: 'schools', label: '10間名校', icon: Award },
          { tab: 'courses', label: '黃牌套餐', icon: Layers },
          { tab: 'tools', label: '準備工具', icon: ClipboardList },
          { tab: 'support', label: '個人檔案', icon: User }
        ].map(item => {
          const Icon = item.icon;
          const active = activeTab === item.tab;
          return (
            <button
              key={item.tab}
              onClick={() => {
                setActiveTab(item.tab as TabKey);
                // Trigger booking directly inside navigation if requested
              }}
              className={`flex flex-col items-center justify-center flex-1 h-full py-1 text-center transition-all ${
                active
                  ? 'text-[#031632] scale-105 font-bold'
                  : 'text-gray-400 hover:text-[#031632]/80'
              }`}
            >
              <Icon className={`w-5 h-5 transition-all ${active ? 'stroke-[2.5px]' : 'stroke-[1.8px]'}`} />
              <span className="text-[10px] mt-1 tracking-tight leading-none">
                {item.label}
              </span>
            </button>
          );
        })}

        {/* Private reservation shortcut floating pill */}
        <button
          onClick={() => setIsBookingOpen(true)}
          className="mx-1 px-3 py-1.5 bg-[#031632] hover:bg-[#1a2b48] text-white text-[10px] font-bold rounded-lg shadow-sm flex items-center justify-center gap-1 active:scale-95 transition-all cursor-pointer font-sans"
        >
          <span>預約輔導</span>
          <Calendar className="w-3 h-3 text-[#ffbb16]" />
        </button>
      </nav>
    </div>
  );
}
