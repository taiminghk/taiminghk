/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, CheckCircle, Clock, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { Tutor } from '../types';
import { TUTORS } from '../data';

interface TutorBookingModalProps {
  onClose: () => void;
}

export default function TutorBookingModal({ onClose }: TutorBookingModalProps) {
  const [selectedTutor, setSelectedTutor] = useState<Tutor>(TUTORS[0]);
  const [selectedDay, setSelectedDay] = useState<number>(10); // Default to Oct 10th
  const [selectedSlot, setSelectedSlot] = useState<string>('10:32'); // Default to 10:30 slot
  const [duration, setDuration] = useState<30 | 60>(60);
  const [classType, setClassType] = useState<'1v1' | '1v2' | '1v3' | '1v4'>('1v1');
  const [focusArea, setFocusArea] = useState<string>('家長對策');
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const availableDays = [4, 7, 10, 11, 15, 18];
  
  const slots = [
    { time: '09:30', disabled: false },
    { time: '10:32', label: '10:30', disabled: false },
    { time: '11:30', disabled: false },
    { time: '14:00', disabled: false },
    { time: '15:00', disabled: false },
    { time: '16:00', disabled: true }
  ];

  const focuses = ['自我介紹訓練', '家長對策', '模擬面試', '繪本講述', '小組遊戲觀察'];

  const handleBookingConfirm = () => {
    setIsSuccess(true);
  };

  const getPrice = (type: '1v1' | '1v2' | '1v3' | '1v4', dur: 30 | 60) => {
    if (type === '1v1') return dur === 60 ? 1280 : 690;
    if (type === '1v2') return dur === 60 ? 980 : 530;
    if (type === '1v3') return dur === 60 ? 780 : 420;
    return dur === 60 ? 580 : 310;
  };

  const currentPrice = getPrice(classType, duration);

  return (
    <div className="fixed inset-0 z-50 bg-gray-50 overflow-y-auto pb-32">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-40 bg-white border-b border-gray-200 shadow-sm h-16 flex items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors text-[#031632] active:scale-90"
          >
            ←
          </button>
          <span className="font-sans font-bold text-lg text-[#031632]">預約私人輔導</span>
        </div>
        <button
          onClick={handleBookingConfirm}
          className="px-4 py-1.5 bg-[#ffbb16] hover:bg-[#ffbb40] text-[#031632] text-xs font-bold rounded-full shadow-sm active:scale-95 transition-all"
        >
          立即預約
        </button>
      </header>

      {/* Main reservation sheet */}
      <main className="pt-24 px-4 max-w-xl mx-auto space-y-8 pb-12 font-sans">
        <section className="space-y-1">
          <h1 className="text-2xl font-bold text-[#031632] tracking-tight">名師私人/小組預約輔導</h1>
          <p className="text-xs text-gray-500 font-medium">支援一對一、一對二、一對三及一對四，系統自動適配對焦最適大綱</p>
        </section>

        {/* 0. Select Class Group Mode */}
        <section className="space-y-3">
          <h2 className="text-sm font-bold text-[#031632]">選擇課程人數與模式</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {[
              { id: '1v1', label: '一對一', sub: '私人特訓班', p60: 1280, p30: 690, isPerPerson: false },
              { id: '1v2', label: '一對二', sub: '雙人協同班', p60: 980, p30: 530, isPerPerson: true },
              { id: '1v3', label: '一對三', sub: '小組對演班', p60: 780, p30: 420, isPerPerson: true },
              { id: '1v4', label: '一對四', sub: '精準精品班', p60: 580, p30: 310, isPerPerson: true }
            ].map(col => {
              const active = classType === col.id;
              const unitPrice = duration === 60 ? col.p60 : col.p30;
              return (
                <button
                  type="button"
                  key={col.id}
                  onClick={() => setClassType(col.id as any)}
                  className={`p-3 rounded-xl border text-left flex flex-col justify-between transition-all active:scale-95 duration-150 relative ${
                    active
                      ? 'border-2 border-[#031632] bg-[#031632]/5 text-[#031632] shadow-sm'
                      : 'border-gray-250 bg-white hover:border-gray-400 text-gray-700'
                  }`}
                >
                  <div>
                    <div className="font-bold text-xs flex items-center gap-1">
                      {col.label}
                      {active && <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block animate-pulse" />}
                    </div>
                    <div className="text-[10px] text-gray-400 mt-0.5 leading-none">{col.sub}</div>
                  </div>
                  <div className="mt-2 text-right w-full">
                    <span className="text-[11px] font-bold text-[#031632] font-mono">${unitPrice}</span>
                    <span className="text-[8px] text-gray-400 font-normal">{col.isPerPerson ? '/人' : ''}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        {/* 1. Tutor Card Row */}
        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-bold text-[#031632]">選擇專家導師</h2>
            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">橫向滑動查看 ➡️</span>
          </div>

          <div className="flex gap-4 overflow-x-auto pb-2 hide-scrollbar">
            {TUTORS.map(tut => {
              const active = selectedTutor.id === tut.id;
              return (
                <div
                  key={tut.id}
                  onClick={() => setSelectedTutor(tut)}
                  className={`flex-none w-64 p-4 rounded-xl border cursor-pointer transition-all ${
                    active
                      ? 'border-2 border-[#031632] bg-[#d7e2ff]/10 shadow-md ring-2 ring-[#031632]/5'
                      : 'border-gray-200 bg-white hover:border-gray-400'
                  }`}
                >
                  <div className="flex items-center gap-3.5 mb-3">
                    <img
                      src={tut.avatar}
                      alt={tut.name}
                      className="w-14 h-14 rounded-full object-cover border border-gray-100"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <h4 className="font-bold text-sm text-[#031632]">{tut.name}</h4>
                      <p className="text-[11px] text-gray-500 font-medium">{tut.title}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {tut.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 bg-gray-150 text-[9px] font-bold text-gray-600 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 2. Calendar view */}
        <section className="bg-white p-5 rounded-2xl border border-gray-250 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-[#031632]">2026年 10月</h3>
            <div className="flex gap-1.5">
              <button className="p-1 rounded hover:bg-gray-100">
                <ChevronLeft className="w-4 h-4 text-gray-600" />
              </button>
              <button className="p-1 rounded hover:bg-gray-100">
                <ChevronRight className="w-4 h-4 text-gray-600" />
              </button>
            </div>
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-y-3.5 text-center text-xs">
            {['日', '一', '二', '三', '四', '五', '六'].map((weekday, i) => (
              <span key={i} className="font-bold text-gray-400">
                {weekday}
              </span>
            ))}

            {/* October starts on Wednesday (offset 3 days for mock) */}
            <span className="py-2 text-gray-300 pointer-events-none opacity-40">29</span>
            <span className="py-2 text-gray-300 pointer-events-none opacity-40">30</span>

            {Array.from({ length: 28 }).map((_, idx) => {
              const dayNum = idx + 1;
              const isAvailable = availableDays.includes(dayNum);
              const isSelected = selectedDay === dayNum;

              let cellStyle = 'text-gray-700 hover:bg-gray-100';
              if (isAvailable) {
                cellStyle = 'text-[#031632] border border-[#71d7cd] bg-[#71d7cd]/10 font-semibold';
              }
              if (isSelected) {
                cellStyle = 'bg-[#031632] text-white font-bold shadow';
              }

              return (
                <button
                  key={idx}
                  disabled={!isAvailable && !isSelected}
                  onClick={() => isAvailable && setSelectedDay(dayNum)}
                  className={`py-2 rounded-lg transition-all ${cellStyle} ${
                    !isAvailable && !isSelected ? 'text-gray-300 cursor-not-allowed opacity-40' : ''
                  }`}
                >
                  {dayNum}
                </button>
              );
            })}
          </div>

          <div className="flex gap-4 pt-2 border-t border-gray-100 text-[10px] text-gray-500">
            <div className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-[#71d7cd]/30 border border-[#71d7cd]" />
              <span>可預約時段</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-[#031632]" />
              <span>當前已選定的日期</span>
            </div>
          </div>
        </section>

        {/* 3. Slot Selection */}
        <section className="space-y-3">
          <h3 className="text-sm font-bold text-[#031632]">選擇具體時段</h3>
          <div className="grid grid-cols-3 gap-2.5">
            {slots.map(s => {
              const active = selectedSlot === s.time;
              return (
                <button
                  key={s.time}
                  disabled={s.disabled}
                  onClick={() => setSelectedSlot(s.time)}
                  className={`py-3 rounded-xl border text-xs font-semibold tracking-tight transition-all active:scale-95 ${
                    s.disabled
                      ? 'bg-gray-150 border-gray-100 text-gray-300 cursor-not-allowed line-through'
                      : active
                      ? 'border-2 border-[#031632] bg-[#031632]/5 text-[#031632] font-bold shadow-sm'
                      : 'border-gray-200 bg-white hover:border-gray-400 text-gray-700'
                  }`}
                >
                  {s.label || s.time}
                </button>
              );
            })}
          </div>
        </section>

        {/* 4. Durations */}
        <section className="space-y-3">
          <h3 className="text-sm font-bold text-[#031632]">課程時長</h3>
          <div className="flex gap-3">
            <button
              onClick={() => setDuration(30)}
              className={`flex-1 py-3 text-center rounded-xl border text-xs font-semibold transition-all ${
                duration === 30
                  ? 'border-2 border-[#031632] bg-white font-bold text-[#031632]'
                  : 'border-gray-200 bg-white hover:border-gray-400 text-gray-600'
              }`}
            >
              30 分鐘 (${getPrice(classType, 30)}{classType !== '1v1' ? ' /人' : ''})
            </button>
            <button
              onClick={() => setDuration(60)}
              className={`flex-1 py-3 text-center rounded-xl border text-xs font-semibold transition-all ${
                duration === 60
                  ? 'border-2 border-[#031632] bg-[#031632] text-white font-bold shadow-sm'
                  : 'border-gray-200 bg-white hover:border-gray-400 text-gray-600'
              }`}
            >
              60 分鐘 (${getPrice(classType, 60)}{classType !== '1v1' ? ' /人' : ''})
            </button>
          </div>
        </section>

        {/* 5. Focus Areas */}
        <section className="space-y-3 pb-8">
          <h3 className="text-sm font-bold text-[#031632]">本堂輔導側重焦點</h3>
          <div className="flex flex-wrap gap-2">
            {focuses.map(f => {
              const active = focusArea === f;
              return (
                <button
                  key={f}
                  onClick={() => setFocusArea(f)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    active
                      ? 'bg-[#ffdea6] text-[#5e4200] border-2 border-[#7c5800]'
                      : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  {f}
                </button>
              );
            })}
          </div>
        </section>
      </main>

      {/* Floating Checkbox success state modal */}
      <AnimatePresence>
        {isSuccess && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white p-8 rounded-3xl max-w-sm text-center shadow-2xl relative border border-gray-100"
            >
              <div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-200 shadow-sm">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h3 className="font-bold text-lg text-[#031632] font-sans">預約成功！</h3>
              <p className="text-xs text-gray-500 mt-2 font-sans leading-relaxed">
                您與 <strong>{selectedTutor.name}</strong> 的 <strong>{classType === '1v1' ? '一對一' : classType === '1v2' ? '一對二' : classType === '1v3' ? '一對三' : '一對四'}</strong> 私人/小組輔導課 ({duration}分鐘) 已經成功鎖定。<br />
                費用：<strong>HK${currentPrice}{classType !== '1v1' ? ' /人' : ''}</strong><br />
                時間：<strong>2026年 10月 {selectedDay} 日 — {selectedSlot === '10:32' ? '10:30' : selectedSlot}</strong><br />
                主要焦點為「<strong>{focusArea}</strong>」。專屬助教老師將在 10 分鐘內通過 WhatsApp 發送進入會議的方法與注意事項。
              </p>
              <button
                onClick={() => {
                  setIsSuccess(false);
                  onClose();
                }}
                className="mt-6 w-full py-3 bg-[#031632] hover:bg-[#1a2b48] text-white font-bold text-xs rounded-xl shadow active:scale-95 transition-all"
              >
                好的，我知道了
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Booking Action Footer */}
      <footer className="fixed bottom-0 w-full bg-white border-t border-gray-200 p-4 z-40 shadow-[0_-4px_16px_rgba(0,0,0,0.06)]">
        <div className="max-w-xl mx-auto flex items-center justify-between gap-4">
          <div>
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">本次預訂預計費用</p>
            <div className="flex items-baseline gap-1 mt-0.5">
              <span className="text-[#031632] font-bold text-2xl">HK${currentPrice}</span>
              <span className="text-xs text-gray-400">{classType !== '1v1' ? ' /人' : ''} / {duration}min</span>
            </div>
          </div>

          <button
            onClick={handleBookingConfirm}
            className="px-6 py-3.5 bg-[#ffbb16] hover:bg-[#ffbb16]/90 text-[#031632] font-bold text-xs rounded-xl shadow-lg flex items-center gap-2 active:scale-95 transition-all"
          >
            <span>確認，立即預約諮詢</span>
            <span>📝</span>
          </button>
        </div>
      </footer>
    </div>
  );
}
