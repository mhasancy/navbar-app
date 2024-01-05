// Define your route configuration interface
export interface CustomRoute {
  path: string;
  element: React.ReactNode;
}

export interface NavbarProps {}

export interface ErrorBoundaryProps {
  children: React.ReactNode | undefined;
}

export interface ErrorBoundaryState {
  hasError: boolean;
}
