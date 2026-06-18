/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { X, CheckCircle, AlertTriangle, Play, HelpCircle, FileText, PhoneCall, ChevronRight, Award } from 'lucide-react';
import { Course } from '../types';

interface Course2DetailModalProps {
  course: Course;
  onClose: () => void;
  onEnroll: () => void;
  enrolled: boolean;
}

export default function Course2DetailModal({ course, onClose, onEnroll, enrolled }: Course2DetailModalProps) {
  const [isPlaying, setIsPlaying] = useState<string | null>(null);

  const videos = [
    {
      id: 'v1',
      title: '第一印象：進場儀態與神情管理',
      duration: '04:15',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA6vvap3P2SSVhuLd51xRQEpTLbx1VXDddQNII5Dt53PBYSa8bRixIwzOOtgPpVEIRpVakqaaIQ6eP2t8Z2Knl4ud_pagMFaDLgW-nMSREQbi8jRqDGEn5A2UKjQ6HMXjC32CswrodJTVCmxc17cT4Gkj45CAz7HeDHBahE9qdcRXhSTnwLuB2ntSagcl1Q7hhVV5Gc3OFxIjhsE6uNgwIsA2yb2Ib1pEgeFiEE9lACTMwFLB8U-sIGsHL9iYYTgUxFEu10BNGlbn-k',
      desc: '身教言傳：如何通過神情微調獲取名學考官 10% 的初始好評分。'
    },
    {
      id: 'v2',
      title: '黃金語氣：如何讓校長聽得舒服',
      duration: '06:22',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsQCislQjtv4tzCLk4ioUXiWAmdzREDjx09Yshw5jddy-qxRPz3pFQpkCmurDxsBxlJUsPdYf_69pK7PqzBUWZxgGpWNdWm7S1zps1-aZhLc7D5WFEXjFfs8L1oKcAXiwkILLsxeEZLzlhTGB78excYIQaZ-mtyd3gj8mr-fKrndOCIN7ZcLFH2B8SKuVXPP6URV5E8zQlN4Z4mgX96F_PDJeJ66HbX9eSb7yliSKQG9Z8F9fybuVzOXClZ6be8j8Dt4qdM83GRlbB',
      desc: '回答速度與停頓的科學掌控。如何包裝「雙職家庭、疏於陪伴」的育兒困境。'
    },
    {
      id: 'v3',
      title: '模擬示範：最難答的三個名校題目',
      duration: '05:40',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBYPtcP3G9DCyLb68AvQlhGYCQK1M310wc1Q-Z0xOaIBk1t4gSYDf_Z1VPATUqCBYqw7oOXXScMyR4b07FPKyHCDaz1AGfusI07vsg7bICKz1PUruFF_s1imjv1m5nkxc1I3ExcMJ6LsIx735gB19dMp8EVqgRjeQ6ydcarpNNkIRZXeEcBeE950qRTrh8hBr8ktgNfQG0brxlJ1Jx7BrKa-6a1PBeezX21L-coIPmU9JNdHqDqZXdkVfPQ0BzYKqTDNy45eMKWesml',
      desc: '深度拆解：校長突然問「家長不配合辦學理念時你會怎樣」的核心應對。'
    }
  ];

  return (
    <div className="fixed inset-0 z-50 bg-gray-50 overflow-y-auto pb-32">
      {/* Detail Header Navigation */}
      <header className="fixed top-0 left-0 w-full z-40 bg-white border-b border-gray-200 shadow-sm h-16 flex items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors text-[#031632] active:scale-90"
          >
            ←
          </button>
          <span className="font-sans font-bold text-lg text-[#031632]">家長面試全攻略</span>
        </div>
        <button
          onClick={onEnroll}
          className="px-4 py-1.5 bg-[#ffbb16] hover:bg-[#ffbb16]/90 text-[#031632] text-xs font-bold rounded-full shadow-sm active:scale-95 transition-all"
        >
          {enrolled ? '已解鎖權限' : '立即訂購解鎖'}
        </button>
      </header>

      {/* Main Container */}
      <main className="pt-24 px-4 max-w-3xl mx-auto space-y-10">
        {/* Hero Cover section */}
        <section className="relative rounded-2xl overflow-hidden bg-[#1a2b48] text-white p-8 shadow-lg min-h-[220px] flex flex-col justify-center">
          <div className="absolute inset-0 opacity-20">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrPCDR-Gd2ETtVo1LXT8BdMLPi29Esyg7GrsMaijVNZmvAQmQJmwfvPmxTlBlsIt3VQ3sWS8D9XozRkRDhFK6AV-rjGzrUpvan8IwYM8gHVCzl9ssWNBBJChR3lZWQ33JFZcZVuOtoTTsnQ88_ya8x3JtxIoQcs8_Lgj8En5ap9eaR72mdxKBHQ_AQecNvtUbSyE1Kyue2c8phIFw0nicR_1GwThu77hKFodyPa0CRDdO6nbvLklUOZP-NGiwleRbzG7oKXRL2xfbJ"
              className="w-full h-full object-cover"
              alt="Background Interview Room"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="relative z-10 space-y-4">
            <div className="inline-flex items-center gap-1.5 bg-[#ffbb16] text-[#031632] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest leading-none">
              ★ EXCLUSIVE STRATEGY
            </div>
            <h1 className="text-3xl font-bold font-sans tracking-tight">200+ 名校校長真實提問庫</h1>
            <p className="text-sm text-gray-200 max-w-xl font-sans leading-relaxed">
              大量家長學員真實回饋考場精準命中！教導如何在 15 分鐘面談中回答關於育兒分歧、辦學認同、危機突發難題，用極具實操價值的答題思路征服校校長心智。
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <span className="px-3 py-1.5 bg-white/10 backdrop-blur-md rounded-lg text-xs font-medium border border-white/15 flex items-center gap-1">
                🛡️ 100% 實戰案例
              </span>
              <span className="px-3 py-1.5 bg-white/10 backdrop-blur-md rounded-lg text-xs font-medium border border-white/15 flex items-center gap-1">
                ⚡ 即買即讀
              </span>
            </div>
          </div>
        </section>

        {/* 4 Core pillars */}
        <section className="space-y-6">
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold text-[#031632] tracking-tight">深度剖析四大必考範疇</h2>
            <p className="text-xs text-gray-500 mt-1">根據往年大量名校面談返饋，幫助避坑增分</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Behavior & BG */}
            <div className="bg-white p-5 rounded-2xl border border-gray-200 hover:border-[#031632]/80 transition-all shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 bg-[#e7e8e9] rounded-lg flex items-center justify-center text-[#7c5800] mb-3">
                  👥
                </div>
                <h3 className="font-bold text-sm text-[#031632]">育兒理念與家庭背景</h3>
                <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">
                  校長要找的家長，不見得家財大卡，更看重育兒分工與對祖輩寵溺的高明引導。
                </p>
              </div>
              <span className="block text-[11px] font-bold text-[#031632] mt-4 hover:underline cursor-pointer">
                查看高分作答範例 →
              </span>
            </div>

            {/* School Fit */}
            <div className="bg-white p-5 rounded-2xl border border-gray-200 hover:border-[#031632]/80 transition-all shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 bg-yellow-50 rounded-lg flex items-center justify-center text-[#ffbb16] mb-3">
                  🎓
                </div>
                <h3 className="font-bold text-sm text-[#031632]">學校認同與報讀原因</h3>
                <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">
                  拒絕千篇一律套詞！教你如果讀懂學校辦學宗旨，將孩子特點與建校宗旨精確勾連。
                </p>
              </div>
              <span className="block text-[11px] font-bold text-[#031632] mt-4 hover:underline cursor-pointer">
                查看高分作答範例 →
              </span>
            </div>

            {/* Crisis Management */}
            <div className="bg-white p-5 rounded-2xl border border-gray-200 hover:border-[#031632]/80 transition-all shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center text-red-500 mb-3">
                  🚨
                </div>
                <h3 className="font-bold text-sm text-[#031632]">突發場景與危機處理</h3>
                <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">
                  小朋友不願分開、在考官面前搶玩具、大哭。考驗考場高 EQ 回合反應與不指責。
                </p>
              </div>
              <span className="block text-[11px] font-bold text-[#031632] mt-4 hover:underline cursor-pointer">
                查看高分作答範例 →
              </span>
            </div>

            {/* Trap Avoidance */}
            <div className="bg-white p-5 rounded-2xl border border-gray-200 hover:border-[#031632]/80 transition-all shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 bg-[#d7e2ff] rounded-lg flex items-center justify-center text-[#031632] mb-3">
                  ⚠️
                </div>
                <h3 className="font-bold text-sm text-[#031632]">面試禁忌與避坑指南</h3>
                <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">
                  分析二十大高頻自我感覺良好、實則在校長心中拉黑的致命扣分回答細節。
                </p>
              </div>
              <span className="block text-[11px] font-bold text-[#031632] mt-4 hover:underline cursor-pointer">
                查看避坑指南範本 →
              </span>
            </div>
          </div>
        </section>

        {/* Actionable Advice of Do's & Don'ts */}
        <section className="space-y-4 bg-white p-6 rounded-2xl border border-gray-200">
          <div>
            <h2 className="text-lg font-bold text-[#031632] tracking-tight">實戰應對技巧：Do's & Don'ts</h2>
            <p className="text-xs text-on-surface-variant font-sans mt-0.5">掌握黃金語句，在現場做出正確合拍的決定</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {/* Do's */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-green-600 font-bold text-sm">
                <CheckCircle className="w-5 h-5" />
                <span>高分做法 (Do's)</span>
              </div>
              <ul className="space-y-2 text-xs text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">•</span>
                  <span><strong>主動展示契合：</strong>舉出真實家庭的育兒具體事件，而非套用空泛大詞，更具感染力。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">•</span>
                  <span><strong>保持坦誠友善：</strong>回答問題時眼神在考官和配偶間流轉，展現極高家庭和諧度。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">•</span>
                  <span><strong>家校同頻意願：</strong>強調重視家校互補和與學校各類反饋反思的配合。</span>
                </li>
              </ul>
            </div>

            {/* Don'ts */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-red-600 font-bold text-sm">
                <AlertTriangle className="w-5 h-5" />
                <span>常見扣分位 (Don'ts)</span>
              </div>
              <ul className="space-y-2 text-xs text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">•</span>
                  <span><strong>過度吹噓讚美：</strong>將孩子描寫得十全十美，容不下任何缺點反思，流露緊繃氛圍。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">•</span>
                  <span><strong>內容不符：</strong>口頭吹捧的性格或發展跟 Portfolio 報考手冊描述不一致。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">•</span>
                  <span><strong>家長搶話：</strong>爸爸或媽媽其中一人佔據 95% 作答，甚至考場當眾駁斥另一半。</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Video Snippets */}
        <section className="space-y-6">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-lg font-bold text-[#031632] tracking-tight">名師示範精華短片</h2>
              <p className="text-xs text-gray-500">用身教演繹神態、語速、措辭學理</p>
            </div>
            <span className="text-xs font-bold text-gray-400">全部影片 (3)</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {videos.map(vid => (
              <div key={vid.id} className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm group">
                <div className="relative aspect-video bg-gray-900 overflow-hidden">
                  {isPlaying === vid.id ? (
                    <div className="w-full h-full flex items-center justify-center bg-black text-white text-xs text-center p-3">
                      🎥 模擬影片已開始播放，此為 VIP 精選攻略 (訂購後可解鎖整段課程)...
                    </div>
                  ) : (
                    <>
                      <img
                        src={vid.image}
                        alt={vid.title}
                        className="w-full h-full object-cover group-hover:scale-105 duration-300"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <button
                          onClick={() => setIsPlaying(vid.id)}
                          className="w-10 h-10 rounded-full bg-white text-[#031632] flex items-center justify-center shadow hover:scale-110 duration-200 transition-all"
                        >
                          <Play className="w-4 h-4 text-[#031632] fill-current" />
                        </button>
                      </div>
                      <span className="absolute bottom-1 right-2 bg-black/60 text-[10px] text-white px-1.5 py-0.5 rounded font-mono">
                        {vid.duration}
                      </span>
                    </>
                  )}
                </div>
                <div className="p-3">
                  <h4 className="font-bold text-xs text-[#031632] leading-snug group-hover:text-[#7c5800] transition-colors">
                    {vid.title}
                  </h4>
                  <p className="text-[10px] text-gray-400 mt-1 line-clamp-2 leading-relaxed">
                    {vid.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 1 on 1 consulting Value Proposition */}
        <section className="bg-[#031632] text-white rounded-3xl p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#ffbb16]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 justify-between">
            <div className="space-y-3 md:max-w-md">
              <span className="inline-block px-3 py-1 bg-[#ffbb16]/20 text-[#ffdea6] text-[10px] font-bold rounded-lg uppercase tracking-wider">
                👑 專屬增值特惠
              </span>
              <h3 className="text-xl font-bold tracking-tight">專屬增值：1對1口頭文字諮詢</h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                並非讓您死記答案！訂購本攻略後，您可以將為家庭量身撰寫的自我介紹或 Portfolio 面試草案發放，由教務主任陳主任團隊親自修飾潤色一遍，確保字字戳中名校核心。
              </p>
              <div className="flex items-center gap-4 text-xs font-semibold text-[#ffdea6] pt-1">
                <span>💬 顧問老師親授口頭點評</span>
                <span>✏️ 逐句精準修飾對焦</span>
              </div>
            </div>

            <div className="w-full md:w-auto bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/20 text-center shrink-0">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#ffdea6]">限時限量贈送</span>
              <p className="text-lg font-bold mt-1 text-white">免費顧問諮詢乙次</p>
              <div className="w-full bg-white/25 h-1.5 rounded-full mt-3 overflow-hidden">
                <div className="bg-[#ffbb16] w-3/4 h-full rounded-full" />
              </div>
              <p className="text-[10px] text-gray-300 mt-2">僅餘 12 名幸運席位</p>
            </div>
          </div>
        </section>
      </main>

      {/* WhatsApp Fixed Float */}
      <a
        href="https://wa.me/85246888429"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-24 right-4 sm:right-6 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 active:scale-90 duration-200 z-50 group"
      >
        <svg fill="currentColor" className="w-7 h-7" viewBox="0 0 24 24">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217h.332c.101 0 .231-.038.361.274.13.318.448 1.097.487 1.17.039.072.065.156.014.253-.05.099-.077.156-.152.246-.077.09-.161.2-.23.27-.078.079-.158.164-.068.319.09.156.403.665.864 1.076.594.53 1.092.694 1.247.772.156.079.247.066.338-.038.09-.104.391-.455.492-.61.101-.155.203-.13.342-.079s.882.416 1.033.493c.152.078.252.117.289.179.036.062.036.357-.108.762z" />
        </svg>
        <span className="absolute right-16 bg-white border border-gray-200 text-[#031632] font-semibold text-xs py-2 px-3 rounded-xl shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none duration-150">
          WhatsApp 即時諮詢
        </span>
      </a>

      {/* Sticky Bottom Bar */}
      <footer className="fixed bottom-0 left-0 w-full z-40 bg-white border-t border-gray-200 shadow-[0_-4px_16px_rgba(0,0,0,0.06)] px-6 py-4">
        <div className="max-w-3xl mx-auto flex items-center justify-between gap-4">
          <div>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">全方位家長必備手冊</p>
            <div className="flex items-baseline gap-1.5 mt-0.5">
              <span className="text-2xl font-bold text-[#031632]">${course.price}</span>
              {course.originalPrice && (
                <span className="text-xs text-gray-400 line-through">${course.originalPrice}</span>
              )}
            </div>
          </div>

          <button
            onClick={onEnroll}
            disabled={enrolled}
            className={`px-8 py-3.5 rounded-xl font-bold text-xs tracking-tight transition-all active:scale-95 shadow-md ${
              enrolled
                ? 'bg-green-100 text-green-800 cursor-not-allowed'
                : 'bg-[#ffbb16] hover:bg-[#ffbb16]/95 text-[#031632]'
            }`}
          >
            {enrolled ? '✓ 已成功解鎖完整攻略與1對1諮詢' : `立即解鎖完整攻略 — HK$${course.price}`}
          </button>
        </div>
      </footer>
    </div>
  );
}
