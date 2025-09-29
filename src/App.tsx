 import Lesson_16 from "lessons/Lesson_16/Lesson_16";
 import Homework_16 from "homeworks/Homework_16/Homework_16";
 import Lesson_18 from "lessons/Lesson_18/Lesson_18";
 import Homework_18 from "homeworks/Homework_18/Homework_18";
 import Weathers from "pages/ReactReduxWeatherApp/Weathers/Weathers";
 import Home from "pages/ReactReduxWeatherApp/Home/Home";
import Layout from "pages/ReactReduxWeatherApp/Layout/Layout";
import { Routes, Route ,BrowserRouter} from "react-router-dom"
import { ROUTES } from "./pages/ReactReduxWeatherApp/constants/navMenuRoutes"
 function App () {
   return <>
   {/* <Lesson_16/> */}
   
   {/* <Homework_16/> */}
   {/* <Lesson_18/> */}
   {/* <Homework_18/> */}
   <BrowserRouter>
      <Layout>
        <Routes>
      <Route path={ROUTES.HOME} element={<Home/>} />
      <Route path={ROUTES.WEATHERS} element={<Weathers/>} />
    </Routes>
      </Layout>
    </BrowserRouter>
   </>
 }
export default App; 