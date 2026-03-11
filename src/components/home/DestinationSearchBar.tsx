interface DestinationSearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export const DestinationSearchBar = ({ value, onChange }: DestinationSearchBarProps) => {
  return (
    <div className="flex flex-col gap-1 text-sm flex-1">
      <label className="text-slate-600">搜索目的地 / 关键词</label>
      <div className="relative">
        <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
          🔍
        </span>
        <input
          className="w-full rounded-full border border-slate-200 bg-white pl-8 pr-3 py-1.5 text-sm text-slate-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand"
          placeholder="例如：丽江 / 古城 / 雪山"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </div>
  );
};

