import React, { Suspense } from "react";
import type { RouteObject } from "react-router";
import { PageContextProvider } from "./providers/page";
import LoadingFallback from "./components/loading";

const pages = import.meta.glob<{
  default: React.ComponentType;
}>("./pages/**/*.tsx");

console.log(pages);

const routes: RouteObject[] = Object.entries(pages).map(
  ([filepath, importer]) => {
    let path = filepath.replace("./pages", "")
        .replace(/\/index\.tsx$/, "")
        .replace(/\.tsx$/, "")
        .replace(/\[(.+?)\]/g, ":$1");


    if (path == '') path = "/";    
    const Element = React.lazy(importer);

    
    return {
      path,
      element: (
        <Suspense fallback={
          <LoadingFallback />
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
