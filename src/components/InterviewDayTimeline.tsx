/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { MapPin, KeyRound, Armchair, HelpCircle, GraduationCap, Compass, Briefcase, Lightbulb } from 'lucide-react';

interface InterviewDayTimelineProps {
  onClose: () => void;
}

export default function InterviewDayTimeline({ onClose }: InterviewDayTimelineProps) {
  const steps = [
    {
      id: '01',
      title: '抵達會場 (Arrival)',
      label: 'Step 01',
      desc: '請提前 15-20 分鐘到達校園。家長面試前請務必再三檢查孩子的衣服或面試套裝是否整齊、潔白，保持清爽、大方、不喧嘩的良好初次形象狀態。',
      icon: MapPin,
      color: 'bg-[#031632] text-white'
    },
    {
      id: '02',
      title: '報到登記 (Check-in)',
      label: 'Step 02',
      desc: '前往會堂或指定報名櫃檯出示報考通知信/確認信，及家長與學童的身份證明原始文件。配合老師進行體溫檢測與清潔手部消毒。',
      icon: Briefcase,
      color: 'bg-[#031632] text-white'
    },
    {
      id: '03',
      title: '等候區準備 (Waiting Area)',
      label: 'Step 03',
      desc: '在等候室保持自然、友善的姿態，不要當眾指責或訓斥孩子。可與孩子在圖書角進行輕鬆的講述閱讀或安靜對話。放平心態才是孩子最好的陪伴支持。',
      icon: Armchair,
      color: 'bg-[#031632] text-white'
    },
    {
      id: '04',
      title: '面試環節 (Interview Flow)',
      label: 'Step 04',
      desc: '根據名師領路安排進入考室。一般包括 1對1 觀察、小組拼圖遊戲，以及必不可少的家長面見。給予孩子充分鼓勵與大方，不吝展示最誠懇、最懂禮貌的自我。',
      icon: GraduationCap,
      color: 'bg-[#031632] text-white',
      tip: '🥇 專業建議：家長回答時微笑自然、多與老師有專注真誠的眼神對應，切忌把自己的育兒重擔全推給配偶或長輩。'
    },
    {
      id: '05',
      title: '圓滿結束 (Completion)',
      label: 'Final Step',
      desc: '依指示拿好隨身雨傘及袋子，有序離開通道，不可在考場大樓內滯留、高聲喧嘩或當場與配偶檢討對錯。不論結果如何，出考場一定要第一時間大大擁抱孩子，對他的付出給予最真切的肯定！',
      icon: Compass,
      color: 'bg-[#ffbb16] text-[#031632]'
    }
  ];

  return (
    <div className="fixed inset-0 z-50 bg-[#f8f9fa] overflow-y-auto pb-32">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-40 bg-white border-b border-gray-200 shadow-sm h-16 flex items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors text-[#031632] active:scale-90"
          >
            ←
          </button>
          <span className="font-sans font-bold text-lg text-[#031632]">面試當日指南</span>
        </div>
        <button
          onClick={onClose}
          className="px-4 py-1.5 bg-[#031632] hover:bg-[#1a2b48] text-white text-xs font-bold rounded-full transition-all"
        >
          回到工具箱
        </button>
      </header>

      {/* Container */}
      <main className="pt-24 px-4 max-w-xl mx-auto space-y-10 font-sans">
        {/* Intro */}
        <section className="text-center space-y-2 py-4">
          <h1 className="text-2xl font-bold text-[#031632] tracking-tight">面試當日全程指南</h1>
          <p className="text-xs text-gray-500 max-w-sm mx-auto leading-relaxed">
            助您與學童以萬全之策與最佳精神面貌迎接考驗，從容化解名校各個面談關卡的細節考驗
          </p>
        </section>

        {/* Vertical dotted timeline steps */}
        <section className="space-y-8 relative">
          {steps.map((st, idx) => {
            const Icon = st.icon;
            const isLast = idx === steps.length - 1;
            return (
              <div key={st.id} className="relative flex gap-5 group">
                {/* Timeline Axis icon */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center shadow ${st.color} font-bold text-sm shrink-0 transition-transform group-hover:scale-110 duration-200`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  {!isLast && (
                    <div className="w-[2px] grow min-h-[140px] bg-dashed-custom mt-3" style={{
                      backgroundImage: 'linear-gradient(to bottom, #00504a 50%, rgba(255,255,255,0) 0%)',
                      backgroundPosition: 'right',
                      backgroundSize: '2px 8px',
                      backgroundRepeat: 'repeat-y'
                    }} />
                  )}
                </div>

                {/* Card details */}
                <div className="flex-1 bg-white p-5 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <span className="text-[10px] font-bold text-[#7c5800] uppercase tracking-wider block mb-1">
                    {st.label}
                  </span>
                  <h3 className="font-bold text-sm text-[#031632] mb-2">{st.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed font-sans">{st.desc}</p>

                  {st.tip && (
                    <div className="mt-4 p-3 bg-[#71d7cd]/10 border border-[#71d7cd]/20 rounded-xl flex items-start gap-2 text-xs text-[#00504a]">
                      <Lightbulb className="w-4 h-4 shrink-0 text-[#00504a] mt-0.5" />
                      <p className="leading-normal">{st.tip}</p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </section>

        {/* Bottom promo hero */}
        <section className="bg-[#031632] text-white p-6 rounded-2xl relative overflow-hidden flex flex-col justify-center min-h-[140px] shadow-lg">
          <div className="relative z-10">
            <h4 className="font-bold text-sm text-white mb-1.5">需要額外面試支援與模考？</h4>
            <p className="text-xs text-gray-300 max-w-[85%] leading-relaxed">
              我們的升學教務團隊隨時提供 N班/K1 一對一在線及實體模擬面談，對家長的言談步伐與心態做細密點評。
            </p>
          </div>
          <div className="absolute right-3 bottom-0 opacity-15 text-white pointer-events-none">
            <GraduationCap className="w-28 h-28" />
          </div>
        </section>
      </main>

      {/* Floating WhatsApp support */}
      <a
        href="https://wa.me/85246888429"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-24 right-4 sm:right-6 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 active:scale-90 duration-150 z-50 group"
      >
        <svg fill="currentColor" className="w-7 h-7" viewBox="0 0 24 24">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217h.332c.101 0 .231-.038.361.274.13.318.448 1.097.487 1.17.039.072.065.156.014.253-.05.099-.077.156-.152.246-.077.09-.161.2-.23.27-.078.079-.158.164-.068.319.09.156.403.665.864 1.076.594.53 1.092.694 1.247.772.156.079.247.066.338-.038.09-.104.391-.455.492-.61.101-.155.203-.13.342-.079s.882.416 1.033.493c.152.078.252.117.289.179.036.062.036.357-.108.762z" />
        </svg>
      </a>
    </div>
  );
}
