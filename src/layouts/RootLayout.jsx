import {Outlet} from 'react-router';
import Footer from './Footer';

function RootLayout() {
  return (
    <main className="space-y-2">
      <Outlet />
      <Footer />
    </main>
  );
}

export default RootLayout;
