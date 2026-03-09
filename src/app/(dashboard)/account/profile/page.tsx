import type { Metadata } from "next";
import ProfileForm from "@/features/account/components/ProfileForm";

export const metadata: Metadata = {
  title: "Thông tin tài khoản | PeaMall",
};

export default function ProfilePage() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-xl font-bold text-gray-900">Thông tin tài khoản</h1>
        <p className="text-sm text-gray-500 mt-1">
          Quản lý thông tin cá nhân để bảo mật tài khoản
        </p>
      </div>
      <ProfileForm />
    </div>
  );
}
