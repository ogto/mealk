import { Suspense } from 'react';
import HelpPageClient from './HelpPageClient';

export default function HelpPage() {
  return (
    <Suspense fallback={<div>로딩 중...</div>}>
      <HelpPageClient />
    </Suspense>
  );
}
