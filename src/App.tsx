import { Routes, Route, Navigate } from "react-router-dom";
import Landing from "./pages/Landing";
import Feed from "./pages/Feed";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import PostAnalytics from "./pages/PostAnalytics";
import PostDetails from "./pages/PostDetails";
import PageNotFound from "./pages/PageNotFound";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Demo from "./pages/Demo";
import { Blog } from "./Context/Context";

function App() {
  const { currentUser } = Blog();
  return (
    <>
      {currentUser && <Feed />}

      <NavBar />
      {!currentUser && <Demo />}
      <Routes>
        {/* <Route path="/" element={<Landing />} /> */}
        {/* <Route path="/demo" element={<Demo />} /> */}

        <Route path="/feed" element={<Feed />} />

        {/* <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/postdetails" element={<PostDetails />} />
        <Route path="/postanalytics" element={<PostAnalytics />} /> */}
        <Route
          path="*"
          element={<Navigate to={!currentUser ? "/demo" : "/"} />}
        />
      </Routes>
      {/* <Login /> */}
      <Footer />
    </>
  );
}

export default App;
