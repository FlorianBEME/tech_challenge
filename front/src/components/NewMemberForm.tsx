import React from "react";

type Props = {};

export default function NewMemberForm({}: Props) {
  return (
    <>
      <h2>Ajouter un(e) Argonaute</h2>
      <form className="new-member-form">
        <label htmlFor="name">Nom de l&apos;Argonaute</label>
        <input id="name" name="name" type="text" placeholder="Charalampos" />
        <button type="submit">Envoyer</button>
      </form>
    </>
  );
}
