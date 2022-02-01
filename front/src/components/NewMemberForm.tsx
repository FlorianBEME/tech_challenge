import React from "react";

type Props = {
  onChangeNewMember: Function;
  submitForm: Function;
};

export default function NewMemberForm({
  onChangeNewMember,
  submitForm,
}: Props) {
  React.useEffect(() => {}, []);

  return (
    <>
      <h2>Ajouter un(e) Argonaute</h2>
      <form
        className="new-member-form"
        onSubmit={(e) => {
          e.preventDefault();
          submitForm();
        }}
      >
        <label htmlFor="name">Nom de l&apos;Argonaute</label>
        <input
          required
          id="name"
          name="name"
          type="text"
          placeholder="Charalampos"
          onChange={(e) => onChangeNewMember(e.target.value)}
        />
        <button type="submit">Envoyer</button>
      </form>
    </>
  );
}
