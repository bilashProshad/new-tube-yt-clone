"use client";

import FilterCarousel from "@/components/filter-carousel";
import { trpc } from "@/trpc/client";
import { useRouter } from "next/navigation";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

interface CategoriesSectionProps {
  categoryId?: string;
}

export default function CategoriesSection({
  categoryId,
}: CategoriesSectionProps) {
  return (
    <ErrorBoundary fallback={<p>Error...</p>}>
      <Suspense fallback={<CategoriesSkeletons />}>
        <CategoriesSectionSuspense categoryId={categoryId} />
      </Suspense>
    </ErrorBoundary>
  );
}

function CategoriesSkeletons() {
  return <FilterCarousel isLoading data={[]} onSelectAction={() => {}} />;
}

function CategoriesSectionSuspense({ categoryId }: CategoriesSectionProps) {
  const router = useRouter();
  const [categories] = trpc.categories.getMany.useSuspenseQuery();

  const data = categories.map(({ id, name }) => ({
    value: id,
    label: name,
  }));

  const onSelect = (value: string | null) => {
    const url = new URL(window.location.href);

    if (value) {
      url.searchParams.set("categoryId", value);
    } else {
      url.searchParams.delete("categoryId");
    }

    router.push(url.toString());
  };

  return (
    <FilterCarousel onSelectAction={onSelect} value={categoryId} data={data} />
  );
}
