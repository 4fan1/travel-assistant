import { useMemo, useState } from 'react';
import type { DepartureId, Season } from '../types/destination';
import { destinations } from '../data/destinations';
import { DepartureSelect } from '../components/home/DepartureSelect';
import { DestinationSearchBar } from '../components/home/DestinationSearchBar';
import { SeasonTabs } from '../components/home/SeasonTabs';
import { DestinationCard } from '../components/home/DestinationCard';

const getCurrentSeason = (): Season => {
  const month = new Date().getMonth() + 1;
  if (month >= 3 && month <= 5) return 'spring';
  if (month >= 6 && month <= 8) return 'summer';
  if (month >= 9 && month <= 11) return 'autumn';
  return 'winter';
};

export const HomePage = () => {
  const [departure, setDeparture] = useState<DepartureId>('chengdu');
  const [season, setSeason] = useState<Season>(getCurrentSeason);
  const [keyword, setKeyword] = useState('');

  const filtered = useMemo(() => {
    const kw = keyword.trim().toLowerCase();
    return destinations
      .filter((d) => d.supportedDepartures.includes(departure))
      .filter((d) => d.bestSeasons.includes(season))
      .filter((d) => {
        if (!kw) return true;
        return (
          d.name.toLowerCase().includes(kw) ||
          d.summary.toLowerCase().includes(kw) ||
          d.tags.some((tag) => tag.toLowerCase().includes(kw))
        );
      })
      .sort((a, b) => b.heatScore - a.heatScore);
  }, [departure, season, keyword]);

  return (
    <div className="space-y-5">
      <section className="space-y-2">
        <h1 className="text-2xl md:text-3xl font-semibold text-slate-900">
          从成都出发 · 当前季节旅行推荐
        </h1>
        <p className="text-sm text-slate-600">
          选择出发地与季节，结合搜索关键字，快速找到适合当下的目的地与行程灵感。
        </p>
      </section>

      <section className="space-y-3 rounded-2xl bg-white/80 p-4 shadow-sm border border-slate-100">
        <div className="flex flex-col gap-3 md:flex-row md:items-end">
          <DepartureSelect value={departure} onChange={setDeparture} />
          <DestinationSearchBar value={keyword} onChange={setKeyword} />
        </div>
        <SeasonTabs value={season} onChange={setSeason} />
      </section>

      <section className="space-y-3">
        <div className="flex items-center justify-between text-sm text-slate-600">
          <span>
            当前共找到{' '}
            <span className="font-semibold text-slate-900">{filtered.length}</span> 个目的地
          </span>
          <span className="hidden md:inline text-xs text-slate-400">
            数据为示例，未来可接入携程与小红书实时信息
          </span>
        </div>
        {filtered.length === 0 ? (
          <div className="rounded-xl border border-dashed border-slate-200 bg-white/70 px-4 py-8 text-center text-slate-500 text-sm">
            暂无符合当前筛选条件的目的地，可以尝试切换季节或清空搜索关键字。
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((d) => (
              <DestinationCard key={d.id} destination={d} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

