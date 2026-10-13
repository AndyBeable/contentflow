import type { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="grid min-h-screen grid-cols-1 md:grid-cols-[240px_minmax(0,1fr)]">
      <aside className="hidden md:block border-r border-slate-200 bg-slate-50 p-6">
        <nav className="flex flex-col gap-4">
          <p>Dashboard</p>
          <p>Articles</p>
          <p>Settings</p>
        </nav>
      </aside>
      <div>
        <header className="border-b border-slate-200 p-6">
          <h1 className="text-xl font-semibold">ContentFlow</h1>
        </header>

        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
