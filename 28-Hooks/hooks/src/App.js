import Faq from './components/Faq';
import UseCallbackEx from './components/UseCallbackEx';
import UseCallbackEx2 from './components/UseCallbackEx2';
import UseMemoEx from './components/UseMemoEx';
import UseReducerEx from './components/UseReducerEx';
import useTitle from './hooks/useTitle';
import Form from './components/react-hook-form/Form';
import FormPractice from './components/react-hook-form/FormPractice';
function App() {
  useTitle('React Hooks 연습중입니다.');

  return (
    <div className="App">
      <UseMemoEx />
      <hr />

      <UseCallbackEx />
      <hr />

      <UseCallbackEx2 postId={7} />
      <hr />

      <UseReducerEx />
      <hr />
      <Faq />
      <hr />
      <Form />
      <hr />
      <FormPractice />
    </div>
  );
}

export default App;
