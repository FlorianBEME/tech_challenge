import React from "react";

import axios from "axios";
import { FETCH } from "./fetch";
import "./App.css";
import Header from "./components/Header";
import NewMemberForm from "./components/NewMemberForm";
import MemberList from "./components/MemberList";
import Footer from "./components/Footer";

function App() {
  const [newMember, setnewMember] = React.useState("");
  const [listMember, setlistMember] = React.useState<
    { member_name: string; id: number }[]
  >([]);
  const [dataIsFetch, setdataIsFetch] = React.useState(false);

  const addnewMember = () => {
    newMember.length > 0 &&
      axios
        .post(`${FETCH}/api/crews`, { member_name: newMember })
        .then((res) => {
          setlistMember(() => [...listMember, res.data]);
          setnewMember("");
        });
    const element = document.getElementById("name") as HTMLFormElement;
    element.value = "";
  };

  const allDelete = () => {
    axios
      .delete(`${FETCH}/api/crews/all`)
      .then(() => {
        setlistMember([]);
      })
      .catch((err) => console.error(err));
  };

  const deleteById = (id: number) => {
    axios
      .delete(`${FETCH}/api/crews/${id}`)
      .then(() => {
        let result = [...listMember];
        const index = result.findIndex((el: any) => el.id === id);
        if (index !== -1) {
          result.splice(index, 1);
        }
        setlistMember(result);
      })
      .catch((err) => console.error(err));
  };

  React.useEffect(() => {
    const fetchData = () => {
      axios
        .get(`${FETCH}/api/crews`)
        .then((res) => {
          setlistMember(res.data);
          setdataIsFetch(true);
        })
        .catch((err) => {
          console.error(err);
          setdataIsFetch(true);
        });
    };

    fetchData();
    return () => {};
  }, []);

  return (
    <div className="App">
      <div>
        <Header />

        <main>
          <NewMemberForm
            onChangeNewMember={(member: React.SetStateAction<string>) => {
              setnewMember(member);
            }}
            submitForm={() => addnewMember()}
          />
          {dataIsFetch ? (
            <MemberList
              memberList={listMember}
              allDelete={() => {
                allDelete();
              }}
              deleteById={(id: number) => deleteById(id)}
            />
          ) : null}
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default App;
