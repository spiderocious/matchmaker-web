import { LoadableProps } from "./loadable.types";
import { Spinner } from "../spinner/spinner";
import { Button } from "../button/button";
import { FaExclamationTriangle } from "react-icons/fa";

export function Loadable({
  loading,
  loadingComponent,
  error,
  retryFn,
  width = 400,
  height = 400,
  background = "#ffffff",
  retryLabel = "Retry",
  children,
}: LoadableProps) {
  // Loading state
  if (loading) {
    return (
      <div
        className="flex items-center justify-center"
        style={{
          width: `${width}px`,
          height: `${height}px`,
          backgroundColor: background,
        }}
      >
        {loadingComponent ?? <Spinner size="large" />}
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div
        className="flex items-center justify-center"
        style={{
          width: `${width}px`,
          height: `${height}px`,
          backgroundColor: background,
        }}
      >
        <div className="flex flex-col items-center gap-4 max-w-md text-center px-4">
          <FaExclamationTriangle className="w-12 h-12 text-error" />
          <p className="text-error text-sm font-medium">{error}</p>
          {retryFn && (
            <Button variant="primary" onClick={retryFn}>
              {retryLabel}
            </Button>
          )}
        </div>
      </div>
    );
  }

  // Success state - render children without constraints
  return <>{children}</>;
}
