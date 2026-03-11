import { Link } from 'react-router-dom';
import type { Destination } from '../../types/destination';

interface DestinationCardProps {
  destination: Destination;
}

export const DestinationCard = ({ destination }: DestinationCardProps) => {
  return (
    <Link
      to={`/destinations/${destination.id}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="aspect-[16/10] overflow-hidden bg-slate-100">
        <img
          src={destination.heroImage}
          alt={destination.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 px-4 py-3">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-base md:text-lg font-semibold text-slate-900">
            {destination.name}
          </h3>
          <span className="rounded-full bg-amber-50 px-2.5 py-0.5 text-xs text-amber-700">
            热度 {destination.heatScore.toFixed(1)}
          </span>
        </div>
        <p className="line-clamp-2 text-xs md:text-sm text-slate-600">{destination.summary}</p>
        <div className="mt-auto flex flex-wrap gap-1">
          {destination.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-slate-50 px-2 py-0.5 text-[11px] text-slate-500"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

