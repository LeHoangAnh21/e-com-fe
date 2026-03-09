import type { Metadata } from "next";
import { Wallet } from "lucide-react";

export const metadata: Metadata = { title: "Ví điện tử | PeaMall" };

export default function WalletPage() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-xl font-bold text-gray-900">Quản lý ví điện tử</h1>
        <p className="text-sm text-gray-500 mt-1">Nạp tiền, rút tiền và lịch sử giao dịch</p>
      </div>
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-12 flex flex-col items-center text-center">
        <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-4">
          <Wallet className="w-8 h-8 text-orange-500" />
        </div>
        <h3 className="text-base font-semibold text-gray-900 mb-2">
          Đang phát triển
        </h3>
        <p className="text-sm text-gray-400 max-w-xs">
          Tính năng ví điện tử sẽ sớm ra mắt.
        </p>
      </div>
    </div>
  );
}
