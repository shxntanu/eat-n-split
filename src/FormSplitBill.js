import { useState } from "react";
import Button from "./Button";

export default function FormSplitBill({ selectedFriend, onUpdateBalance }) {
  const [bill, setBill] = useState(0);
  const [paidByUser, setPaidByUser] = useState(0);
  const [whoIsPaying, setWhoIsPaying] = useState("user");
  const paidByFriend = bill - paidByUser;

  function handleSubmit(e) {
    e.preventDefault();
    if (bill === 0 || paidByUser === 0) return;

    onUpdateBalance(whoIsPaying === "user" ? paidByFriend : -paidByUser);
    setBill(0);
    setPaidByUser(0);
    setWhoIsPaying("user");
  }

  return (
    <form className="form-split-bill">
      <h2>Split a bill with {selectedFriend.name}</h2>

      <label>💰 Total Amount: </label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(e.target.value)}
      />

      <label>💁‍♂️ Your Expense: </label>
      <input
        type="text"
        value={paidByUser}
        onChange={(e) =>
          setPaidByUser(
            Number(e.target.value) > bill ? paidByUser : Number(e.target.value)
          )
        }
      />

      <label>👦 {selectedFriend.name}'s Expense: </label>
      <input type="text" disabled value={bill - paidByUser} />

      <label>🤑 Who is paying the bill?</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>
      <Button onClick={handleSubmit}>Split bill</Button>
    </form>
  );
}
