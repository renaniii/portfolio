import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

import App from "./App";
import AppErrorBoundary from "./components/AppErrorBoundary";
import ScrollToTop from "./components/ScrollToTop";

import "./index.css";

const ProgramandoFuturo = lazy(() => import("./pages/ProgramandoFuturo"));
const Workshop = lazy(() => import("./pages/Workshop"));
const EncounterOne = lazy(() => import("./pages/EncounterOne"));
const ComputingHistory = lazy(() => import("./pages/ComputingHistory"));
const WorkshopPrivacy = lazy(() => import("./pages/WorkshopPrivacy"));
const EducatorArea = lazy(() => import("./pages/EducatorArea"));
const NotFound = lazy(() => import("./pages/NotFound"));

const routeFallback = (
  <main className="route-loading" role="status" aria-live="polite">
    <div>
      <span className="route-loading__dot" aria-hidden="true" />
      <p>Carregando esta página…</p>
    </div>
  </main>
);

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Elemento #root não encontrado.");
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <AppErrorBoundary>
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={routeFallback}>
          <Routes>
            <Route path="/" element={<App />} />
            <Route
              path="/projetos/programando-o-futuro"
              element={<ProgramandoFuturo />}
            />
            <Route path="/oficina" element={<Workshop />} />
            <Route path="/oficina/encontro-1" element={<EncounterOne />} />
            <Route
              path="/oficina/historia-da-computacao"
              element={<ComputingHistory />}
            />
            <Route path="/oficina/privacidade" element={<WorkshopPrivacy />} />
            <Route path="/oficina/educador" element={<EducatorArea />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </AppErrorBoundary>
  </React.StrictMode>,
);
