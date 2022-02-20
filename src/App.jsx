import * as S from "./style";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import KanbanPage from "./pages/KanbanPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <S.Container>
      <Header />
      <S.Wrapper>
        <Sidebar />
        <Routes>
          <Route path="/kanban" element={<KanbanPage />} />
        </Routes>
      </S.Wrapper>
    </S.Container>
  );
}

export default App;
