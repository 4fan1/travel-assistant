import type { Season } from '../../types/destination';

interface SeasonTabsProps {
  value: Season;
  onChange: (value: Season) => void;
}

const SEASONS: { id: Season; label: string; icon: string }[] = [
  { id: 'spring', label: '春 · 花季', icon: '🌸' },
  { id: 'summer', label: '夏 · 清凉', icon: '🏖️' },
  { id: 'autumn', label: '秋 · 颜色', icon: '🍁' },
  { id: 'winter', label: '冬 · 雪景', icon: '❄️' }
];

export const SeasonTabs = ({ value, onChange }: SeasonTabsProps) => {
  return (
    <div className="flex items-center gap-2 overflow-x-auto py-1">
      {SEASONS.map((season) => {
        const active = season.id === value;
        return (
          <button
            key={season.id}
            type="button"
            onClick={() => onChange(season.id)}
            className={[
              'flex items-center gap-1 rounded-full border px-3 py-1 text-xs md:text-sm whitespace-nowrap transition',
              active
                ? 'border-brand bg-brand/10 text-brand-dark'
                : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
            ].join(' ')}
          >
            <span>{season.icon}</span>
            <span>{season.label}</span>
          </button>
        );
      })}
    </div>
  );
};

