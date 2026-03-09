"use client";

import { useState } from "react";
import { Plus, Trash2, MapPin, Star, X, Pencil } from "lucide-react";
import type { Address } from "../types";

interface AddressManagerProps {
  addresses: Address[];
  onChange: (addresses: Address[]) => void;
}

type FormData = Omit<Address, "id" | "isDefault">;
const emptyForm: FormData = { label: "", street: "", ward: "", district: "", city: "" };

const inputCls =
  "w-full px-3 py-2.5 border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all text-sm text-gray-900 placeholder:text-gray-400";

const labelCls = "block text-xs font-medium text-gray-600 mb-1";

function AddressFormFields({
  form,
  onChange,
}: {
  form: FormData;
  onChange: (key: keyof FormData, value: string) => void;
}) {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className={labelCls}>
            Nhãn <span className="text-gray-400">(tùy chọn)</span>
          </label>
          <input
            type="text"
            placeholder="VD: Nhà riêng, Văn phòng"
            value={form.label}
            onChange={(e) => onChange("label", e.target.value)}
            className={inputCls}
          />
        </div>
        <div>
          <label className={labelCls}>
            Tỉnh / Thành phố <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            placeholder="VD: Hà Nội"
            value={form.city}
            onChange={(e) => onChange("city", e.target.value)}
            className={inputCls}
          />
        </div>
        <div>
          <label className={labelCls}>Quận / Huyện</label>
          <input
            type="text"
            placeholder="VD: Cầu Giấy"
            value={form.district}
            onChange={(e) => onChange("district", e.target.value)}
            className={inputCls}
          />
        </div>
        <div>
          <label className={labelCls}>Phường / Xã</label>
          <input
            type="text"
            placeholder="VD: Dịch Vọng"
            value={form.ward}
            onChange={(e) => onChange("ward", e.target.value)}
            className={inputCls}
          />
        </div>
      </div>
      <div>
        <label className={labelCls}>
          Số nhà / Tên đường <span className="text-red-400">*</span>
        </label>
        <input
          type="text"
          placeholder="VD: 123 Đường Xuân Thủy"
          value={form.street}
          onChange={(e) => onChange("street", e.target.value)}
          className={inputCls}
        />
      </div>
    </>
  );
}

export default function AddressManager({ addresses, onChange }: AddressManagerProps) {
  const [isAdding, setIsAdding] = useState(false);
  const [addForm, setAddForm] = useState<FormData>(emptyForm);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState<FormData>(emptyForm);

  // ─── Add ───────────────────────────────────────────────────────
  const handleAdd = () => {
    if (!addForm.street.trim() || !addForm.city.trim()) return;
    onChange([
      ...addresses,
      { ...addForm, id: Math.random().toString(36).slice(2), isDefault: addresses.length === 0 },
    ]);
    setAddForm(emptyForm);
    setIsAdding(false);
  };

  // ─── Edit ──────────────────────────────────────────────────────
  const startEdit = (addr: Address) => {
    setEditingId(addr.id);
    setEditForm({ label: addr.label, street: addr.street, ward: addr.ward, district: addr.district, city: addr.city });
    setIsAdding(false);
  };

  const handleSaveEdit = () => {
    if (!editForm.street.trim() || !editForm.city.trim()) return;
    onChange(addresses.map((a) => (a.id === editingId ? { ...a, ...editForm } : a)));
    setEditingId(null);
  };

  const cancelEdit = () => setEditingId(null);

  // ─── Delete / Default ──────────────────────────────────────────
  const handleDelete = (id: string) => {
    const next = addresses.filter((a) => a.id !== id);
    if (next.length > 0 && !next.some((a) => a.isDefault)) next[0].isDefault = true;
    onChange(next);
    if (editingId === id) setEditingId(null);
  };

  const handleSetDefault = (id: string) =>
    onChange(addresses.map((a) => ({ ...a, isDefault: a.id === id })));

  return (
    <div className="space-y-3">
      {addresses.length === 0 && !isAdding && (
        <p className="text-sm text-gray-400 text-center py-4">
          Chưa có địa chỉ nào. Hãy thêm địa chỉ giao hàng.
        </p>
      )}

      {addresses.map((addr) =>
        editingId === addr.id ? (
          /* ── Edit form ── */
          <div
            key={addr.id}
            className="p-4 border-2 border-orange-300 rounded-xl bg-orange-50/40 space-y-3"
          >
            <div className="flex items-center justify-between mb-1">
              <p className="text-sm font-semibold text-gray-700">Chỉnh sửa địa chỉ</p>
              <button
                type="button"
                onClick={cancelEdit}
                className="p-1 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <AddressFormFields
              form={editForm}
              onChange={(key, val) => setEditForm((f) => ({ ...f, [key]: val }))}
            />

            <div className="flex justify-end gap-2 pt-1">
              <button
                type="button"
                onClick={cancelEdit}
                className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800 font-medium transition-colors cursor-pointer"
              >
                Hủy
              </button>
              <button
                type="button"
                onClick={handleSaveEdit}
                disabled={!editForm.street.trim() || !editForm.city.trim()}
                className="px-5 py-2 text-sm bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition-colors cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
              >
                Lưu
              </button>
            </div>
          </div>
        ) : (
          /* ── Display row ── */
          <div
            key={addr.id}
            className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl border border-gray-200 group"
          >
            <MapPin className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap mb-1">
                {addr.label && (
                  <span className="text-xs font-medium text-gray-700 bg-white border border-gray-200 px-2 py-0.5 rounded-full">
                    {addr.label}
                  </span>
                )}
                {addr.isDefault && (
                  <span className="text-xs font-semibold text-orange-600 bg-orange-50 border border-orange-200 px-2 py-0.5 rounded-full">
                    Mặc định
                  </span>
                )}
              </div>
              <p className="text-sm text-gray-800 leading-relaxed">
                {[addr.street, addr.ward, addr.district, addr.city]
                  .filter(Boolean)
                  .join(", ")}
              </p>
            </div>

            {/* Action buttons — show on hover */}
            <div className="flex items-center gap-1 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
              <button
                type="button"
                title="Chỉnh sửa"
                onClick={() => startEdit(addr)}
                className="p-1.5 rounded-lg text-gray-400 hover:text-blue-500 hover:bg-blue-50 transition-colors cursor-pointer"
              >
                <Pencil className="w-4 h-4" />
              </button>
              {!addr.isDefault && (
                <button
                  type="button"
                  title="Đặt làm mặc định"
                  onClick={() => handleSetDefault(addr.id)}
                  className="p-1.5 rounded-lg text-gray-400 hover:text-orange-500 hover:bg-orange-50 transition-colors cursor-pointer"
                >
                  <Star className="w-4 h-4" />
                </button>
              )}
              <button
                type="button"
                title="Xóa địa chỉ"
                onClick={() => handleDelete(addr.id)}
                className="p-1.5 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors cursor-pointer"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        )
      )}

      {/* ── Add form ── */}
      {isAdding ? (
        <div className="p-4 border-2 border-dashed border-orange-300 rounded-xl bg-orange-50/40 space-y-3">
          <div className="flex items-center justify-between mb-1">
            <p className="text-sm font-semibold text-gray-700">Thêm địa chỉ mới</p>
            <button
              type="button"
              onClick={() => { setIsAdding(false); setAddForm(emptyForm); }}
              className="p-1 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <AddressFormFields
            form={addForm}
            onChange={(key, val) => setAddForm((f) => ({ ...f, [key]: val }))}
          />

          <div className="flex justify-end gap-2 pt-1">
            <button
              type="button"
              onClick={() => { setIsAdding(false); setAddForm(emptyForm); }}
              className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800 font-medium transition-colors cursor-pointer"
            >
              Hủy
            </button>
            <button
              type="button"
              onClick={handleAdd}
              disabled={!addForm.street.trim() || !addForm.city.trim()}
              className="px-5 py-2 text-sm bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition-colors cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
            >
              Thêm
            </button>
          </div>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => { setIsAdding(true); setEditingId(null); }}
          className="flex items-center justify-center gap-2 w-full px-4 py-3 border-2 border-dashed border-gray-300 rounded-xl text-sm text-gray-500 hover:border-orange-400 hover:text-orange-500 hover:bg-orange-50/30 transition-all cursor-pointer group"
        >
          <Plus className="w-4 h-4 group-hover:scale-110 transition-transform" />
          Thêm địa chỉ mới
        </button>
      )}
    </div>
  );
}
