import { Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Forgotpassword from "./Components/Forgotpassword";
import Msg from "./Components/Msg";
import Resetpassword from "./Components/Resetpassword";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./Pages/Home";
import LoginForm from "./Pages/LoginForm/Login";
import Register from "./Pages/Register/register";
import LoginSuccess from "./Components/LoginSuccess";
import RegisterSuccess from "./Components/RegisterSuccess";
import MailSend from "./Components/MailSend";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/loginSuccess" element={<LoginSuccess />} />
        <Route path="/register" element={<Register />} />
        <Route path="/registerSuccess" element={<RegisterSuccess />} />
        <Route path="/forgotpassword" element={<Forgotpassword />} />
        <Route path="/MailSend" element={<MailSend />} />
        <Route path="/resetpassword/:pass_token" element={<Resetpassword />} />
        <Route path="/msg" element={<Msg />} />
      </Routes>

      <ToastContainer autoclose={7000} />
    </div>
  );
}

export default App;
