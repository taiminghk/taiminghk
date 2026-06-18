/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, BookOpen, Clock, Heart, Award, CheckCircle, ShieldCheck } from 'lucide-react';
import { School } from '../types';

interface SchoolDetailModalProps {
  school: School | null;
  onClose: () => void;
  onUnlockSample: (schoolId: string) => void;
}

type TabType = 'intro' | 'pastPaper' | 'process' | 'preference';

export default function SchoolDetailModal({ school, onClose, onUnlockSample }: SchoolDetailModalProps) {
  const [activeTab, setActiveTab] = useState<TabType>('intro');
  const [showToast, setShowToast] = useState(false);

  if (!school) return null;

  const handleUnlockClick = () => {
    onUnlockSample(school.id);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 2500);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative w-full max-w-2xl bg-white rounded-2xl shadow-xl overflow-hidden my-8"
        >
          {/* Header Banner Image */}
          <div className="relative h-48 sm:h-56 w-full">
            <img
              src={school.image}
              alt={school.name}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white transition-all active:scale-95"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="absolute bottom-4 left-6 text-white">
              <span className="inline-block px-2.5 py-1 text-xs font-semibold bg-[#ffbb16] text-[#031632] rounded-full mb-2">
                {school.district}
              </span>
              <h2 className="text-2xl font-bold font-sans tracking-tight">{school.name}</h2>
              <p className="text-xs text-gray-300 font-sans mt-0.5">{school.englishName}</p>
            </div>
          </div>

          {/* School Tags */}
          <div className="flex flex-wrap gap-2 px-6 py-4 bg-gray-50 border-b border-gray-100">
            {school.features.map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1 text-xs font-medium text-[#1a2b48] bg-[#d7e2ff] rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100 border-b border-gray-100 bg-white">
            <div className="p-4 text-center">
              <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">真題數量</p>
              <p className="text-lg font-bold text-[#031632] mt-0.5">{school.pastPaperCount} 題</p>
            </div>
            <div className="p-4 text-center">
              <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">適配年齡</p>
              <p className="text-lg font-bold text-[#031632] mt-0.5">2 - 6 歲</p>
            </div>
            <div className="p-4 text-center">
              <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">入學熱度</p>
              <span className="inline-block px-2 py-0.5 bg-red-50 text-red-600 rounded text-xs font-bold mt-1">
                極高
              </span>
            </div>
            <div className="p-4 text-center">
              <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">資料更新</p>
              <p className="text-sm font-semibold text-green-600 mt-1">今日已更新</p>
            </div>
          </div>

          {/* Tabs Navigation */}
          <div className="flex border-b border-gray-100 bg-gray-50/50">
            {[
              { id: 'intro', label: '名校簡介', icon: BookOpen },
              { id: 'pastPaper', label: '歷年 Past Paper', icon: Clock },
              { id: 'process', label: '面試流程', icon: Award },
              { id: 'preference', label: '考官偏好', icon: Heart }
            ].map(tab => {
              const Icon = tab.icon;
              const active = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as TabType)}
                  className={`flex-1 py-3 text-xs font-semibold flex items-center justify-center gap-1.5 border-b-2 transition-all ${
                    active
                      ? 'border-[#031632] text-[#031632] bg-white font-bold'
                      : 'border-transparent text-gray-600 hover:text-black hover:bg-gray-100/50'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Tab Contents */}
          <div className="p-8 max-h-60 overflow-y-auto bg-white min-h-[160px]">
            {activeTab === 'intro' && (
              <div className="space-y-3 font-sans">
                <p className="text-[#191c1d] leading-relaxed text-sm">{school.intro}</p>
                <div className="p-3 bg-blue-50/80 rounded-lg text-xs text-[#1a2b48] border border-blue-100">
                  <strong>特色亮點：</strong> 融合深厚學術傳統與現代化校園配置，注重學生自主探索發揮與核心人格素養的雙軌成長。
                </div>
              </div>
            )}

            {activeTab === 'pastPaper' && (
              <div className="space-y-4 font-sans">
                <div className="flex items-center justify-between">
                  <p className="text-[#031632] font-semibold text-sm">真題模擬題庫涵蓋範圍</p>
                  <span className="text-xs text-gray-500">更新於近日</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <div className="p-2 border border-gray-100 rounded-lg bg-gray-50">
                    🟢 第一部分: 認知與語言表達 (50 題)
                  </div>
                  <div className="p-2 border border-gray-100 rounded-lg bg-gray-50">
                    🟢 第二部分: 指令理解與自理 (40 題)
                  </div>
                  <div className="p-2 border border-gray-100 rounded-lg bg-gray-50">
                    🟢 第三部分: 邏輯、記憶與拼圖 (35 題)
                  </div>
                  <div className="p-2 border border-gray-100 rounded-lg bg-gray-50">
                    🟢 第四部分: 家長對策與提問 (30 題)
                  </div>
                </div>
                <p className="text-xs text-gray-400">目前收錄該校近 5 年 98% 以上的家長回憶全套試題，並配置高分錄音示範解答。</p>
              </div>
            )}

            {activeTab === 'process' && (
              <div className="space-y-2 font-sans">
                <p className="text-sm text-[#191c1d] leading-relaxed">{school.interviewProcess}</p>
                <div className="mt-4 border-l-4 border-[#ffbb16] pl-3 py-1 bg-yellow-50/50 rounded-r text-xs text-gray-700">
                  <strong>名師提問筆記：</strong> 小朋友容易在離開爸媽進入課室的一對一觀察環節表現哭鬧，家長需重點掌握「高EQ突發驚嚇處理心法」。
                </div>
              </div>
            )}

            {activeTab === 'preference' && (
              <div className="space-y-2 font-sans">
                <p className="text-sm text-[#191c1d] leading-relaxed">{school.interviewerPreferences}</p>
                <div className="mt-4 p-3.5 bg-green-50/60 rounded-xl border border-green-100 text-xs text-green-800 flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                  <div>
                    <strong>高分關鍵字：</strong> 禮讓合作、真誠眼神交流、積極反饋、家校教育觀一致性。避免吹捧或替孩子搶答。
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Action Footer */}
          <div className="flex items-center justify-between gap-4 p-6 bg-gray-50 border-t border-gray-100">
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                樣本試題狀態
              </span>
              <span className={`text-xs font-bold ${school.sampleUnlocked ? 'text-green-600' : 'text-amber-600'}`}>
                {school.sampleUnlocked ? '● 已解鎖免費樣本' : '○ 免費樣本待領取'}
              </span>
            </div>
            
            <div className="flex gap-2">
              {!school.sampleUnlocked ? (
                <button
                  onClick={handleUnlockClick}
                  className="px-5 py-2.5 bg-[#ffbb16] hover:bg-[#ffbb16]/90 text-[#031632] font-bold text-xs rounded-lg active:scale-95 transition-all shadow-sm"
                >
                  領取免費預覽樣本
                </button>
              ) : (
                <span className="px-5 py-2.5 bg-green-100 text-green-800 font-bold text-xs rounded-lg flex items-center gap-1">
                  <CheckCircle className="w-3.5 h-3.5" /> 已領取並解鎖
                </span>
              )}
              <button
                onClick={onClose}
                className="px-4 py-2.5 bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold text-xs rounded-lg active:scale-95 transition-all"
              >
                關閉
              </button>
            </div>
          </div>
        </motion.div>

        {/* Global Toast Notification */}
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 bg-[#031632] text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-2 font-sans font-bold text-sm"
          >
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span>🎉 {school.name} 的 10 頁面試真題免費樣本已成功領取並解鎖！</span>
          </motion.div>
        )}
      </div>
    </AnimatePresence>
  );
}
