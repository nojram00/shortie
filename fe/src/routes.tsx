import React, { Suspense } from "react";
import type { RouteObject } from "react-router";
import { PageContextProvider } from "./providers/page";

const pages = import.meta.glob<{
  default: React.ComponentType;
}>("./pages/**/*.tsx");

console.log(pages);

const routes: RouteObject[] = Object.entries(pages).map(
  ([filepath, importer]) => {
    let path = filepath.replace("./pages", "")
        .replace(/\/index\.tsx$/, "")
        .replace(/\.tsx$/, "");


    if (path == '') path = "/";    
    const Element = React.lazy(importer);

    
    return {
      path,
      element: (
        <Suspense fallback={
          <div>
            Loading...
          </div>
        }>
            <PageContextProvider path={path}>
                <Element />
            </PageContextProvider>
        </Suspense>
      )
    };
  }
);

console.log("routes: ", routes);

export default routes;
