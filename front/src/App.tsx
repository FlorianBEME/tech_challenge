import React from "react";

import "./App.css";
import Header from "./components/Header";
import NewMemberForm from "./components/NewMemberForm";
import MemberList from "./components/MemberList";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />

      <main>
        <NewMemberForm />
        <MemberList />
      </main>

      <Footer />
    </div>
  );
}

export default App;
