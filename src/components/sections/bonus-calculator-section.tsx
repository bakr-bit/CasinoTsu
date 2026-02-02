'use client';

import { useState } from 'react';
import { Calculator } from 'lucide-react';

function formatJPY(amount: number): string {
  return new Intl.NumberFormat('ja-JP', {
    style: 'currency',
    currency: 'JPY',
    maximumFractionDigits: 0,
  }).format(amount);
}

export function BonusCalculatorSection() {
  const [deposit, setDeposit] = useState(10000);
  const [bonusPercent, setBonusPercent] = useState(100);
  const [wagering, setWagering] = useState(30);

  const bonusAmount = (deposit * bonusPercent) / 100;
  const totalWithBonus = deposit + bonusAmount;
  const wageringTotal = bonusAmount * wagering;

  return (
    <section id="calculator" className="py-14 lg:py-20 bg-gray-50/60">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <div className="w-10 h-1 bg-indigo-600 rounded-full mb-4 mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            ボーナス計算機
          </h2>
          <p className="text-base text-gray-500 mt-2 max-w-2xl mx-auto">
            ボーナスの実際の価値と必要な賭け金額を計算します。
          </p>
        </div>

        {/* SEO: editorial explanation */}
        <div className="max-w-3xl mx-auto mb-8 space-y-3">
          <p className="text-base text-gray-600 leading-relaxed">
            カジノボーナスを受け取る前に、出金に必要な賭け金額を理解することが重要です。賭け条件（ウェージング）はボーナス額に適用される倍率で、例えばx30の条件で1万円のボーナスなら、30万円分のベットが必要です。
          </p>
          <p className="text-base text-gray-600 leading-relaxed">
            下記の計算機で、入金額・ボーナス率・賭け条件の組み合わせをシミュレーションし、ランキング内のカジノオファーを比較してください。
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl border-0 bg-white overflow-hidden shadow-lg shadow-indigo-100/50">
            {/* Header with gradient and shine */}
            <div className="p-5 bg-gradient-to-br from-indigo-600 via-indigo-700 to-indigo-800 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 animate-pulse" />
              <div className="relative flex items-center gap-2.5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm border border-white/30">
                  <Calculator className="h-5 w-5 text-white" />
                </div>
                <span className="text-lg font-bold text-white">計算条件を入力</span>
              </div>
            </div>

            {/* Body */}
            <div className="p-6 sm:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  入金額（円）
                </label>
                <input
                  type="number"
                  value={deposit}
                  onChange={(e) => setDeposit(Math.max(0, Number(e.target.value)))}
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-base text-gray-900 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/20 focus:outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  ボーナス率（%）
                </label>
                <input
                  type="number"
                  value={bonusPercent}
                  onChange={(e) => setBonusPercent(Math.max(0, Number(e.target.value)))}
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-base text-gray-900 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/20 focus:outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  賭け条件（x）
                </label>
                <input
                  type="number"
                  value={wagering}
                  onChange={(e) => setWagering(Math.max(0, Number(e.target.value)))}
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-base text-gray-900 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/20 focus:outline-none transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="rounded-xl bg-indigo-50 border border-indigo-100 p-5 text-center">
                <p className="text-xs uppercase tracking-wider text-indigo-600 mb-2">
                  ボーナス額
                </p>
                <p className="text-2xl font-bold text-gray-900">
                  {formatJPY(bonusAmount)}
                </p>
              </div>
              <div className="rounded-xl bg-indigo-50 border border-indigo-100 p-5 text-center">
                <p className="text-xs uppercase tracking-wider text-indigo-600 mb-2">
                  ボーナス込み残高
                </p>
                <p className="text-2xl font-bold text-gray-900">
                  {formatJPY(totalWithBonus)}
                </p>
              </div>
              <div className="rounded-xl bg-gray-100 border border-gray-200 p-5 text-center">
                <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">
                  必要賭け金額
                </p>
                <p className="text-2xl font-bold text-gray-900">
                  {formatJPY(wageringTotal)}
                </p>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
