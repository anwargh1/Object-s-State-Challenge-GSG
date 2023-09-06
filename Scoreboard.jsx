import { useState } from 'react';
export default function Scoreboard() {
  const [player, setPlayer] = useState({
    firstName: 'Ranjani',
    lastName: 'Shettar',
    score: 10,
  });

  // The handlePlusClick function directly modifies the player object's score property without 
  // updating the state.

  // So should use the setPlayer function to update the score property.
  function handlePlusClick() {
    setPlayer({
      ...player,
      score: player.score + 1,
    });
  }

  // When you edit the first name, it updates the state using setPlayer, 
  // but the score doesn't update because the handlePlusClick 
  // function directly modifies the player object's score property.
  function handleFirstNameChange(e) {
    setPlayer({
      ...player,   
      firstName: e.target.value,
    });
  }

  // When you edit the last name, it correctly updates the state using setPlayer
  // but you should replace it rather than mutate your existing objects.
  function handleLastNameChange(e) {
    setPlayer({
      ...player,
      lastName: e.target.value,
    });
  }
  return (
    <>
      <label>
        Score: <b>{player.score}</b>{' '}
        <button onClick={handlePlusClick}>+1</button>
      </label>
      <label>
        First name:
        <input value={player.firstName} onChange={handleFirstNameChange} />
      </label>
      <label>
        Last name:
        <input value={player.lastName} onChange={handleLastNameChange} />
      </label>
    </>
  );
}
