import { Suspense } from 'react';

// Loading component for better UX
const LoadingSpinner = () => (
  <div className="flex items-center justify-center h-64">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[var(--com-color)]"></div>
  </div>
);

export default function SectionContent({ section }) {
  const RightComponent = section.component;

  return (
    <div className="w-full">
      <div>
        {RightComponent && (
          <Suspense fallback={<LoadingSpinner />}>
            <RightComponent />
          </Suspense>
        )}
      </div>
    </div>
  );
}
