import { Link } from '@remix-run/react';
import type { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <header className="flex justify-between max-w-5xl mx-auto p-8 items-center">
        <div className="text-3xl font-mono">
          <Link to="/">LearnCypress</Link>
        </div>
        <nav>
          <ul className="flex gap-6 items-center">
            <li>
              <Link
                to="/takeaways"
                className="text-slate-300 hover:text-slate-200"
              >
                Takeaways
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  );
}

export default Layout;
