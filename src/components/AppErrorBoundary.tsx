import { Component, type ErrorInfo, type ReactNode } from "react";

type AppErrorBoundaryProps = {
  children: ReactNode;
};

type AppErrorBoundaryState = {
  hasError: boolean;
};

class AppErrorBoundary extends Component<
  AppErrorBoundaryProps,
  AppErrorBoundaryState
> {
  state: AppErrorBoundaryState = {
    hasError: false,
  };

  static getDerivedStateFromError(): AppErrorBoundaryState {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error: unknown, info: ErrorInfo) {
    console.error("Falha ao renderizar a aplicação.", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="fatal-error" role="alert">
          <div className="fatal-error__content">
            <p className="fatal-error__eyebrow">ERRO DE CARREGAMENTO</p>
            <h1>Não foi possível abrir esta página.</h1>
            <p>
              O navegador encontrou um problema ao iniciar a aplicação. Tente
              recarregar a página ou use o guia simples da oficina.
            </p>
            <div className="fatal-error__actions">
              <button type="button" onClick={() => window.location.reload()}>
                Tentar novamente
              </button>
              <a href="/materiais/guia-oficina.html">
                Abrir guia simples da oficina
              </a>
            </div>
          </div>
        </main>
      );
    }

    return this.props.children;
  }
}

export default AppErrorBoundary;
