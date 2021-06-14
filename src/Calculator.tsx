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

  const s = (input: string): number => (input === '0' || Number(input) > 0) ? Number(input) : -1;


  return (
    <div className="Calculator">
        <div>
          Score van team:
        </div>
        <div className="match-score">

        <input type="tel" value={teamHomeScore === -1 ? '' : teamHomeScore} min={0} onChange={e => setTeamHomeScore(s(e.target.value))} />
        -
        <input type="tel" value={teamOutScore === -1 ? '' : teamOutScore} min={0} onChange={e => setTeamOutScore(s(e.target.value))} />
        </div>
        <hr />
        <div className="user-score">
        <div>
          Score van speler:
        </div>

        <input type="tel" value={userHomeScore === -1 ? '' : userHomeScore} min={0} onChange={e => setUserHomeScore(s(e.target.value))} />
        -
        <input type="tel" value={userOutScore === -1 ? '' : userOutScore} min={0} onChange={e => setUserOutScore(s(e.target.value))} />

        </div>

        <hr />
        <hr />
        <div className="points">
        <div>
          Punten voor speler:
        </div>
        <div className="score">
          {calculate(matchScore, userScore)}
        </div>
        </div>

    </div>
  );
}

export default Calculator;
