import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "@emotion/styled";

import Loading from "./views/components/Loading";
import Error from "./views/pages/Error";
import Navbar from "./views/Navbar";
import "./App.css";

const MainContainer = styled.div({
  position: "relative",
  height: "calc(100vh - 62px)",
  paddingTop: "62px",
  overflowY: "auto",
});

function App() {
  const location = useLocation();
  const [loadingState, updateLoadingState] = useState<boolean>(false);
  const [errorState, updateErrorState] = useState<boolean>(false);

  useEffect(() => {
    updateErrorState(false)
    updateErrorState(false)
  }, [location]);

  return (
    <div className="App">
      <Navbar />
      <MainContainer>
        {loadingState ? <Loading /> : ""}
        {errorState ? (
          <Error code={500} />
        ) : (
          <Outlet context={[updateLoadingState, updateErrorState]} />
        )}
      </MainContainer>
    </div>
  );
}

export default App;
