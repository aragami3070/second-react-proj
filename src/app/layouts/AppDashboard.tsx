import { AuthWrapper } from '@/widgets/AuthWrapper/AuthWrapper';
import NavBar from '@/widgets/NavBar/NavBar';

export default function AppDashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthWrapper>
      <NavBar />
      <main >
        {children}
      </main>
    </AuthWrapper>
  );
}
