/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { X, Check, Award, BookOpen, Clock, Play } from 'lucide-react';
import { Course } from '../types';

interface CourseMasterDetailModalProps {
  course: Course;
  onClose: () => void;
  onEnroll: () => void;
  enrolled: boolean;
}

export default function CourseMasterDetailModal({ course, onClose, onEnroll, enrolled }: CourseMasterDetailModalProps) {
  return (
    <div className="fixed inset-0 z-50 bg-gray-50 overflow-y-auto pb-32">
      {/* Detail Header navigation */}
      <header className="fixed top-0 left-0 w-full z-40 bg-white border-b border-gray-200 shadow-sm h-16 flex items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors text-[#031632] active:scale-90"
          >
            ←
          </button>
          <span className="font-sans font-bold text-lg text-[#031632]">{course.title}</span>
        </div>
        <button
          onClick={onEnroll}
          className="px-4 py-1.5 bg-[#ffbb16] hover:bg-[#ffbb16]/90 text-[#031632] text-xs font-bold rounded-full shadow-sm active:scale-95 transition-all"
        >
          {enrolled ? '已完成報名' : '立即報名特惠'}
        </button>
      </header>

      {/* Main Container */}
      <main className="pt-24 px-4 max-w-3xl mx-auto space-y-10">
        {/* Banner with course summary */}
        <section className="bg-gradient-to-r from-[#031632] to-[#1a2b48] text-white p-8 rounded-2xl shadow-lg relative overflow-hidden">
          <div className="relative z-10 space-y-3">
            {course.isHot && (
              <span className="inline-block px-3 py-1 bg-red-600 text-white text-[10px] font-bold rounded-xl uppercase leading-none">
                HOT
              </span>
            )}
            <h1 className="text-2xl sm:text-3xl font-bold font-sans tracking-tight">{course.title}</h1>
            <p className="text-sm text-gray-300 leading-relaxed font-sans">{course.description}</p>
            <div className="flex items-center gap-4 text-xs font-semibold text-[#ffdea6] pt-1">
              <span>📚 歷年全套 Past Paper 題庫</span>
              <span>🎓 專業名師 1對1 履歷診斷</span>
            </div>
          </div>
        </section>

        {/* Core Value Proposition - Grid of Features */}
        <section className="space-y-4">
          <h2 className="text-lg font-bold text-[#031632] border-l-4 border-l-[#ffbb16] pl-3 py-0.5">
            課程核心優勢與內容
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {course.features.map((feat, idx) => (
              <div key={idx} className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-50 text-[#031632] flex items-center justify-center shrink-0">
                  ✓
                </div>
                <div>
                  <h4 className="font-bold text-xs text-[#031632]">增分項目 {idx + 1}</h4>
                  <p className="text-xs text-gray-600 mt-1 leading-relaxed">{feat}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Roadmap / Workflow timeline */}
        <section className="space-y-6">
          <h2 className="text-lg font-bold text-[#031632] pl-3 border-l-4 border-l-[#7c5800] py-0.5">
            系統化備考流程培訓步驟
          </h2>

          <div className="space-y-4">
            {course.curriculumSteps.map((step, idx) => (
              <div key={idx} className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#031632] text-[#ffbb16] font-bold text-xs flex items-center justify-center shrink-0">
                  {idx + 1}
                </div>
                <div>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block leading-none mb-1">
                    {step.englishTitle}
                  </span>
                  <h3 className="font-bold text-sm text-[#031632]">{step.title}</h3>
                  <p className="text-xs text-gray-500 mt-1 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Detailed syllabus section */}
        <section className="space-y-4">
          <h2 className="text-lg font-bold text-[#031632] pl-3 border-l-4 border-l-[#ffbb16] py-0.5">
            培訓課綱與精彩內容預覽
          </h2>
          <div className="bg-white rounded-xl border border-gray-200 divide-y divide-gray-100 shadow-sm">
            {course.syllabus.map((syl, idx) => (
              <div key={idx} className="p-4 flex items-center justify-between hover:bg-gray-50/50 transition-all">
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded bg-amber-50 text-[#7c5800] font-sans font-bold text-xs flex items-center justify-center">
                    ▶
                  </span>
                  <p className="text-xs text-gray-700 font-semibold">{syl}</p>
                </div>
                <span className="text-[10px] bg-green-50 text-green-700 font-bold px-2 py-0.5 rounded">
                  可試聽
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonial / Feedback Section */}
        <section className="space-y-4">
          <h2 className="text-lg font-bold text-[#031632] pl-3 border-l-4 border-l-[#031632] py-0.5">
            家長學員成功見證
          </h2>
          <div className="space-y-4">
            {course.testimonials.map((test, idx) => (
              <div key={idx} className="bg-gray-100/60 p-5 rounded-2xl border border-gray-200">
                <div className="flex items-center justify-between mb-3 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-7 rounded-full bg-blue-100 text-[#031632] font-semibold flex items-center justify-center text-xs">
                      {test.author[0]}
                    </span>
                    <strong className="text-gray-800">{test.author}</strong>
                  </div>
                  <span className="text-[10px] text-green-700 font-bold bg-green-50 px-2 py-0.5 rounded">
                    {test.school}
                  </span>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed italic">
                  &ldquo;{test.text}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Sticky Bottom Bar */}
      <footer className="fixed bottom-0 left-0 w-full z-40 bg-white border-t border-gray-200 shadow-[0_-4px_16px_rgba(0,0,0,0.06)] px-6 py-4">
        <div className="max-w-3xl mx-auto flex items-center justify-between gap-4">
          <div>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">精準升學指導培訓</p>
            <p className="text-2xl font-bold text-[#031632] mt-0.5">${course.price}</p>
          </div>

          <button
            onClick={onEnroll}
            className={`px-8 py-3.5 rounded-xl font-bold text-xs tracking-tight transition-all active:scale-95 shadow-md ${
              enrolled
                ? 'bg-green-100 text-green-800'
                : 'bg-[#ffbb16] hover:bg-[#ffbb16]/95 text-[#031632]'
            }`}
          >
            {enrolled ? '✓ 已報名成功！隨時開始學習' : '立即註冊課程'}
          </button>
        </div>
      </footer>
    </div>
  );
}
