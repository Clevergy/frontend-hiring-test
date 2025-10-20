// Allow props such as width, height, etc.. for imported SVG components.
declare module '*.svg?react' {
  const content: React.FC<React.SVGProps<SVGElement>>;
  export default content;
}

/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />
