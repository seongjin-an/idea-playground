import { useRef, useState } from 'react';

import {createMockCard, checkIsMatched, ICard} from '../utils/mockUtils';
import { commonStyles, pageStyles } from '../styles/globals';


const useForceUpdate = () => {
    const [, render] = useState(0);

    return () => render(i => i + 1);
};

interface IData {
    data: {isMatched: boolean}
}
function isMatchedTypeGuard(value: unknown): value is IData {
    return value !== undefined
}
const MatchPage = () => {
    const forceUpdate = useForceUpdate();
    const [currentCard, setCurrentCard] = useState<ICard>(createMockCard());
    const { current: matches } = useRef<ICard[]>([]);

    const next = () => setCurrentCard(createMockCard());
    const like = () => {
        next();

        checkIsMatched().then((value: unknown) => {
            // edge-case!
            // if (isMatched) setMatches([currentCard, ...matches]);

            // hacky..
            if (isMatchedTypeGuard(value)) {
                // value.data.isMatched
                matches.push(currentCard);
                forceUpdate();
            }
        });
    };

    return (
        <main style={commonStyles.flexCenter}>
            <section style={pageStyles.pageWrap}>
                <img src='logo.png' alt='logo' style={pageStyles.logo} />
                <MatchCard style={commonStyles.flex1} card={currentCard} />
                <MatchController next={next} like={like} />
                <MatchList matches={matches}/>
            </section>
        </main>
    );
};

const MatchCard = ({ card, style }: {card: ICard, style: React.CSSProperties}) => (
    <div style={pageStyles.matchCardRoot}>
        <div style={pageStyles.matchCardImageWrap}>
            <img style={pageStyles.matchCardImage} src={card.image} alt='profile' />
        </div>
        <div style={commonStyles.flex}>
            <div style={commonStyles.flex1}>Name: {card.name}</div>
            <div style={commonStyles.flex1}>Age: {card.age}</div>
        </div>
        <div style={commonStyles.flex}>
            <div style={commonStyles.flex1}>Company: {card.company}</div>
            <div style={commonStyles.flex1}>Education: {card.education}</div>
        </div>
    </div>
);

const MatchList = ({ matches }: {matches: ICard[]}) => (
    <div style={pageStyles.matchLogRoot}>
        {matches.map((matchedCard) => (
            <div key={matchedCard.id}>
                {matchedCard.name} ({matchedCard.age}) also liked your pictur!
            </div>
        ))}
    </div>
);

const MatchController = ({ next, like }: {next: ()=>void, like: ()=>void}) => (
    <div style={pageStyles.matchControllerRoot}>
        <button style={pageStyles.matchButton} onClick={next}>skip</button>
        &nbsp;
        <button style={pageStyles.matchButton} onClick={like}>Like</button>
    </div>
);

export default MatchPage;