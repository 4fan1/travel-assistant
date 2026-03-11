import { Link, useParams } from 'react-router-dom';
import { destinations } from '../data/destinations';
import type { Destination } from '../types/destination';

const typeLabelMap: Record<string, string> = {
  plane: '飞机',
  highspeed: '高铁',
  self_drive: '自驾',
  bus: '大巴'
};

const tripTypeOrder: Record<string, number> = {
  short: 1,
  regular: 2,
  deep: 3
};

export const DestinationDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const destination: Destination | undefined = destinations.find((d) => d.id === id);

  if (!destination) {
    return (
      <div className="space-y-4">
        <h1 className="text-xl font-semibold text-slate-900">未找到该目的地</h1>
        <p className="text-sm text-slate-600">
          当前链接对应的目的地不存在，可能还未在示例数据中配置。
        </p>
        <Link
          to="/"
          className="inline-flex items-center rounded-full bg-brand px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-brand-dark"
        >
          返回首页查看其他目的地
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <section className="space-y-4">
        <div className="overflow-hidden rounded-2xl bg-slate-100">
          <img
            src={destination.heroImage}
            alt={destination.name}
            className="h-56 w-full object-cover md:h-72"
          />
        </div>
        <div className="space-y-2">
          <h1 className="text-2xl md:text-3xl font-semibold text-slate-900">
            {destination.name} · 从成都出发
          </h1>
          <p className="text-sm text-slate-600">{destination.summary}</p>
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="rounded-full bg-amber-50 px-2.5 py-0.5 text-amber-700">
              热度 {destination.heatScore.toFixed(1)}
            </span>
            {destination.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-slate-50 px-2.5 py-0.5 text-slate-500"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <div className="space-y-3 rounded-2xl bg-white/80 p-4 shadow-sm border border-slate-100">
          <h2 className="text-base font-semibold text-slate-900">交通方式（从成都出发）</h2>
          <div className="space-y-3">
            {destination.transportOptions.map((t) => (
              <div
                key={t.type}
                className="rounded-xl border border-slate-100 bg-slate-50/60 p-3 text-sm space-y-1.5"
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium text-slate-900">{typeLabelMap[t.type]}</span>
                  <span className="text-xs text-slate-500">{t.cost}</span>
                </div>
                <p className="text-xs text-slate-600">{t.duration}</p>
                <div className="mt-1 grid gap-2 md:grid-cols-2">
                  <div className="rounded-lg bg-emerald-50/80 p-2 text-xs text-emerald-700">
                    <div className="mb-1 font-semibold">优点</div>
                    <ul className="list-disc list-inside space-y-0.5">
                      {t.pros.map((p) => (
                        <li key={p}>{p}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-lg bg-rose-50/80 p-2 text-xs text-rose-700">
                    <div className="mb-1 font-semibold">缺点</div>
                    <ul className="list-disc list-inside space-y-0.5">
                      {t.cons.map((c) => (
                        <li key={c}>{c}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-3 rounded-2xl bg-white/80 p-4 shadow-sm border border-slate-100">
          <h2 className="text-base font-semibold text-slate-900">游玩规划建议</h2>
          <div className="space-y-3">
            {[...destination.tripPlans]
              .sort((a, b) => tripTypeOrder[a.type] - tripTypeOrder[b.type])
              .map((plan) => (
                <div
                  key={plan.type}
                  className="rounded-xl border border-slate-100 bg-slate-50/60 p-3 text-sm space-y-1.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-slate-900">{plan.daysLabel}</span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-xs text-slate-700">
                    {plan.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <div className="space-y-3 rounded-2xl bg-white/80 p-4 shadow-sm border border-slate-100">
          <h2 className="text-base font-semibold text-slate-900">餐饮推荐</h2>
          <div className="space-y-2 text-sm">
            <SubFoodBlock title="当地特色菜" items={destination.food.localSpecialties} />
            <SubFoodBlock title="人气小吃" items={destination.food.popularSnacks} />
            <SubFoodBlock title="高性价比餐厅" items={destination.food.valueRestaurants} />
          </div>
        </div>

        <div className="space-y-3 rounded-2xl bg-white/80 p-4 shadow-sm border border-slate-100">
          <h2 className="text-base font-semibold text-slate-900">酒店选择</h2>
          <div className="space-y-2 text-sm">
            <SubHotelBlock title="经济型" items={destination.hotels.budget} />
            <SubHotelBlock title="中端" items={destination.hotels.midRange} />
            <SubHotelBlock title="高端" items={destination.hotels.highEnd} />
          </div>
        </div>
      </section>
    </div>
  );
};

interface SubFoodBlockProps {
  title: string;
  items: Destination['food']['localSpecialties'];
}

const SubFoodBlock = ({ title, items }: SubFoodBlockProps) => {
  return (
    <div className="space-y-1.5">
      <h3 className="text-xs font-semibold text-slate-700">{title}</h3>
      <div className="space-y-1.5">
        {items.map((item) => (
          <div
            key={item.name}
            className="rounded-lg bg-slate-50/70 px-3 py-2 text-xs text-slate-700 space-y-0.5"
          >
            <div className="flex items-center justify-between gap-2">
              <span className="font-medium">{item.name}</span>
              <span className="text-[11px] text-slate-500">{item.avgPrice}</span>
            </div>
            <p>{item.reason}</p>
            {item.area && (
              <p className="text-[11px] text-slate-500">推荐区域：{item.area}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

interface SubHotelBlockProps {
  title: string;
  items: Destination['hotels']['budget'];
}

const SubHotelBlock = ({ title, items }: SubHotelBlockProps) => {
  return (
    <div className="space-y-1.5">
      <h3 className="text-xs font-semibold text-slate-700">{title}</h3>
      <div className="space-y-1.5">
        {items.map((item) => (
          <div
            key={item.name}
            className="rounded-lg bg-slate-50/70 px-3 py-2 text-xs text-slate-700 space-y-0.5"
          >
            <div className="flex items-center justify-between gap-2">
              <span className="font-medium">{item.name}</span>
              <span className="text-[11px] text-slate-500">{item.priceRange}</span>
            </div>
            <p>{item.location}</p>
            <p className="text-[11px] text-slate-500">
              核心优势：{item.advantages.join(' / ')}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

