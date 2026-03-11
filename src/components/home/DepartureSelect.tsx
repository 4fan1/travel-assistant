import type { DepartureId } from '../../types/destination';

const DEPARTURE_OPTIONS: { id: DepartureId; label: string }[] = [
  { id: 'chengdu', label: '成都' },
  { id: 'chongqing', label: '重庆（预留）' },
  { id: 'xian', label: '西安（预留）' }
];

interface DepartureSelectProps {
  value: DepartureId;
  onChange: (value: DepartureId) => void;
}

export const DepartureSelect = ({ value, onChange }: DepartureSelectProps) => {
  return (
    <div className="flex flex-col gap-1 text-sm">
      <label className="text-slate-600">出发城市</label>
      <select
        className="rounded-full border border-slate-200 bg-white px-4 py-1.5 text-slate-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand"
        value={value}
        onChange={(e) => onChange(e.target.value as DepartureId)}
      >
        {DEPARTURE_OPTIONS.map((opt) => (
          <option key={opt.id} value={opt.id}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};

