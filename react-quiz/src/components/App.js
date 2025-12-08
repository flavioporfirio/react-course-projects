import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Question from "./Question";
import NextButton from "./NextButton";
import Progress from "./Progress";
import FinishScreen from "./FinishScreen";
import Footer from "./Footer";
import Timer from "./Timer";

import { useQuestions } from '../context/QuestionsContext';

export default function App() {
  const { status } = useQuestions();

  return (
    <div className="app">
      <Header />

      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartScreen />
        )}
        {status === "active" && (
          <>
            <Progress />
            <Question />
            <Footer>
              <Timer />
              <NextButton
              />
            </Footer>
          </>
        )}

        {status === "finished" && (
          <FinishScreen />
        )}
      </Main>
    </div>
  );
}

/**
 * Ideias para melhorar a aplicação
 * Filtro para selecionar a dificildade e quantidade de questões
 * Uma maneira de gravar o highscore na api fake
 * Maneira de armazenar todas as respostas no "answers" assim o usuário poderia voltar para as questões para revisar, etc
 *
 */
