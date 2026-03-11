import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface AppLayoutProps {
  children: ReactNode;
}

export const AppLayout = ({ children }: AppLayoutProps) => {
  const location = useLocation();

  const isHome = location.pathname === '/';

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b bg-white/80 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-brand to-emerald-400" />
            <div className="flex flex-col">
              <span className="font-semibold text-slate-900">从成都出发 · 旅行规划</span>
              <span className="text-xs text-slate-500">按季节精选目的地与行程方案</span>
            </div>
          </Link>
          {!isHome && (
            <Link
              to="/"
              className="text-sm px-3 py-1.5 rounded-full border border-slate-200 bg-white hover:bg-slate-50 transition"
            >
              返回首页
            </Link>
          )}
        </div>
      </header>
      <main className="flex-1">
        <div className="max-w-6xl mx-auto px-4 py-6">{children}</div>
      </main>
      <footer className="border-t bg-white/60">
        <div className="max-w-6xl mx-auto px-4 py-4 text-xs text-slate-400 flex flex-wrap justify-between gap-2">
          <span>© {new Date().getFullYear()} 从成都出发 · 季节旅行规划</span>
          <span>示例项目 · 数据仅作展示使用</span>
        </div>
      </footer>
    </div>
  );
};

