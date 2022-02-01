import React from "react";

type Props = {
  memberList: { member_name: string; id: number }[];
  allDelete: Function;
  deleteById: Function;
};

export default function MemberList({
  memberList,
  allDelete,
  deleteById,
}: Props) {
  return (
    <div className="containter-list-crews">
      <h2>Membres de l'équipage</h2>
      <button onClick={() => allDelete()}>Tout supprimer</button>
      <section className="member-list">
        {memberList.map((el) => {
          return (
            <div key={el.id} className="member-item">
              {el.member_name}
              <span className="cross-item" onClick={() => deleteById(el.id)}>
                X
              </span>
            </div>
          );
        })}
      </section>
    </div>
  );
}
