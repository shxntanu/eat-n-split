import { useState } from "react";
import Button from "./Button";

export default function FormAddFriend({ onAddFriend }) {
  const [name, setName] = useState("");
  const [img, setImg] = useState("https://i.pravatar.cc/48");

  function handleSubmit(event) {
    event.preventDefault();

    if (!name || !img) return;

    const id = crypto.randomUUID();

    const newFriend = {
      id,
      name,
      image: `${img}?=${id}`,
      balance: 0,
    };

    onAddFriend(newFriend);

    setName("");
    setImg("https://i.pravatar.cc/48");
  }
  return (
    <form className="form-add-friend">
      <label> 👫 Friend Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label> 🌅 Image URL </label>
      <input type="text" value={img} onChange={(e) => setImg(e.target.value)} />
      <Button onClick={handleSubmit}>Add</Button>
    </form>
  );
}
