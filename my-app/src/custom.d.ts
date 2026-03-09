// allow importing jsx/js files without type errors
// especially useful when the project mixes JS and TS files

declare module '*.jsx' {
  import React from 'react';
  const Component: React.ComponentType<any>;
  export default Component;
}
