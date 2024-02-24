import React, {Suspense} from 'react';
import './App.css';
import Users from "./pages/Users";
import {ErrorBoundary} from "react-error-boundary";
import ErrorFallback from "./components/common/ErrorFallback";
import Loading from "./components/common/Loading";
import PageLayout from "./components/layout/PageLayout";

function App() {
  return (
    <div className="App"><PageLayout>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Suspense fallback ={<Loading />}>
                <Users />
            </Suspense>
        </ErrorBoundary>
    </PageLayout>

    </div>
  );
}

export default App;
