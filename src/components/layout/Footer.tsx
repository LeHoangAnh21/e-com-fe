export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 mt-12">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-black text-lg">P</span>
              </div>
              <span className="text-white font-bold text-xl">PeaMall</span>
            </div>
            <p className="text-sm leading-relaxed">
              Mua sắm không giới hạn – Chất lượng đảm bảo – Giao nhanh toàn quốc.
            </p>
          </div>
          {/* Support */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm">Hỗ trợ</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Trung tâm hỗ trợ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Hướng dẫn mua hàng</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Chính sách đổi trả</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Liên hệ</a></li>
            </ul>
          </div>
          {/* About */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm">Về PeaMall</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Giới thiệu</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Tuyển dụng</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Điều khoản dịch vụ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Chính sách bảo mật</a></li>
            </ul>
          </div>
          {/* Social */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm">Theo dõi chúng tôi</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-white transition-colors">TikTok</a></li>
              <li><a href="#" className="hover:text-white transition-colors">YouTube</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 text-center text-xs">
          © 2025 PeaMall. Tất cả quyền được bảo lưu.
        </div>
      </div>
    </footer>
  );
}
