import MainHeader from '@/components/mainHeader';

export const metadata = {
  title: 'News App',
  description: 'Learn how to route to different pages.',
};

export default function ContentLayout({ children }) {
  return (
    <div id='page'>
      <MainHeader />
      {children}
    </div>
  );
}
