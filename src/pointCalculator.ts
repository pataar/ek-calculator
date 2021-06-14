
export type MatchScore = {
    home: number;
	out: number;
}

export default function calculate(match: MatchScore, user: MatchScore): undefined |number {

	let totalScore = 0;

	if(match.home < 0 || match.out < 0 || user.home < 0 || user.out < 0){
		return undefined;
	}

	if(match.home === user.home && match.out === user.out){
		// match correct
		return 10;
	}

	if(match.home === match.out && user.home === user.out){
		// equal correct
		return 7;
	}

	if((match.home > match.out && user.home > user.out) || (match.home < match.out && user.home < user.out)){
		// winner correct
		totalScore += 5;
	}

	if(match.home === user.home){
		totalScore += 2;
	}

	if(match.out === user.out){
		totalScore += 2;
	}



	return totalScore;

}