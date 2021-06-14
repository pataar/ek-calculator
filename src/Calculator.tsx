import { useState } from "react";
import calculate, { MatchScore } from "./pointCalculator";

function Calculator() {

  const [teamHomeScore, setTeamHomeScore] = useState(-1);
  const [teamOutScore, setTeamOutScore] = useState(-1);

  const [userHomeScore, setUserHomeScore] = useState(-1);
  const [userOutScore, setUserOutScore] = useState(-1);

  const matchScore: MatchScore = {
    home: teamHomeScore,
    out: teamOutScore
  };
  const userScore: MatchScore = {
    home: userHomeScore,
    out: userOutScore
  };


  return (
    <div className="Calculator">
        <div>
          Score van team:
        </div>
        <div className="match-score">

        <input type="number" value={teamHomeScore === -1 ? '' : teamHomeScore} min={0} onChange={e => setTeamHomeScore(Number(e.target.value))} />
        -
        <input type="number" value={teamOutScore === -1 ? '' : teamOutScore} min={0} onChange={e => setTeamOutScore(Number(e.target.value))} />
        </div>
        <hr />
        <div className="user-score">
        <div>
          Score van speler:
        </div>

        <input type="number" value={userHomeScore === -1 ? '' : userHomeScore} min={0} onChange={e => setUserHomeScore(Number(e.target.value))} />
        -
        <input type="number" value={userOutScore === -1 ? '' : userOutScore} min={0} onChange={e => setUserOutScore(Number(e.target.value))} />

        </div>

        <hr />
        <hr />
        <div className="points">
        <div>
          Punten voor speler:
        </div>
          {calculate(matchScore, userScore)}
        </div>

    </div>
  );
}

export default Calculator;
