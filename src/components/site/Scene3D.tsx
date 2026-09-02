import { ClientOnly } from "@tanstack/react-router";
import { lazy, Suspense } from "react";

const SteelScene = lazy(() => import("./SteelScene"));

export function Scene3D({ className }: { className?: string }) {
  return (
    <div className={className}>
      <ClientOnly fallback={null}>
        <Suspense fallback={null}>
          <SteelScene />
        </Suspense>
      </ClientOnly>
    </div>
  );
}
