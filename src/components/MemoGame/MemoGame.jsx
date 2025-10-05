import React, {useState, useEffect, useRef} from 'react';
import "./MemoGame.css"

const MemoGame = ({ pictures }) => {
    const SHOW_CARD_TIME = 1000;
    const STREAK_MULTIPLIER = 1;
    const [streak, setStreak] = useState(0);
    const [streakMultiplier, setStreakMultiplier] = useState(0);

    const [firstMoveMade, setFirstModeMade] = useState(false);

    const [cards, setCards] = useState([]);
    const [flippedCards, setFlippedCards] = useState([]);
    const [score, setScore] = useState(0);
    const [moves, setMoves] = useState(0);

    const [timer, setTimer] = useState(0);

    const intervalRef = useRef(null);

    const [showCardTimer, setShowCardTimer] = useState(0);

    useEffect(()=>{
        if(firstMoveMade){
            intervalRef.current = setInterval(()=>{
                setTimer(prev => prev + 1 );
            },1000)
            return () => {
                if(intervalRef.current) clearInterval(intervalRef.current);
            }
        }
    },[firstMoveMade])

    useEffect(() => {
        initializeGame();
    }, [pictures]);


    const initializeGame = () => {
        const cardPairs = pictures.flatMap((imageUrl, index) => [
            { id: index * 2, imageUrl, isFlipped: false, isMatched: false },
            { id: index * 2 + 1, imageUrl, isFlipped: false, isMatched: false }
        ]);

        const shuffledCards = [...cardPairs].sort(() => Math.random() - 0.5);
        setCards(shuffledCards);
        setScore(0);
        setMoves(0);
        setFlippedCards([]);
    };

    const handleCardClick = (cardId) => {
        if(!firstMoveMade){

            setFirstModeMade(true);

            const updatedCards = cards.map(card => ({
                ...card,
                isFlipped: true
            }));
            setCards(updatedCards);

            const newFlippedCards = cards.map(card => card.id);
            setFlippedCards(newFlippedCards);

            console.log("Flipped cards: ", flippedCards);
            console.log("Flipped cards: ", newFlippedCards);

            const startTime = Date.now();
            const endTime = startTime + SHOW_CARD_TIME;

            const updateTimer = () => {
                const now = Date.now();
                const remaining = Math.max(0, endTime - now);
                setShowCardTimer(remaining);

                if (remaining > 0) {
                    requestAnimationFrame(updateTimer);
                }
            };

            updateTimer();

            setTimeout(()=>{
                setCards(prevCards =>
                    prevCards.map(card => ({
                        ...card,
                        isFlipped: false
                    }))
                );
                setFlippedCards([]);
                setFirstModeMade(true);
            },SHOW_CARD_TIME)

            return;
        }

        if (flippedCards.length >= 2 || cards.find(c => c.id === cardId)?.isMatched) return;

        if(cardId === flippedCards[0]){
            console.log("This card is already flipped.");
            return;
        }

        const newFlippedCards = [...flippedCards, cardId];
        setFlippedCards(newFlippedCards);

        // Update card state
        setCards(prevCards =>
            prevCards.map(card =>
                card.id === cardId ? { ...card, isFlipped: true } : card
            )
        );

        // Check for match when two cards are flipped
        if (newFlippedCards.length === 2) {
            setMoves(prev => prev + 1);

            const [firstCardId, secondCardId] = newFlippedCards;
            const firstCard = cards.find(c => c.id === firstCardId);
            const secondCard = cards.find(c => c.id === secondCardId);

            if (firstCard && secondCard && firstCard.imageUrl === secondCard.imageUrl) {
                // Match found
                setStreak(prev => prev + 1);

                setScore(prev => Math.ceil(prev + 1 + streakMultiplier));
                setCards(prevCards =>
                    prevCards.map(card =>
                        card.id === firstCardId || card.id === secondCardId
                            ? { ...card, isMatched: true }
                            : card
                    )
                );
                setFlippedCards([]);
            } else {
                // No match - flip cards back after a delay
                setStreak(0);
                setTimeout(() => {
                    setCards(prevCards =>
                        prevCards.map(card =>
                            card.id === firstCardId || card.id === secondCardId
                                ? { ...card, isFlipped: false }
                                : card
                        )
                    );
                    setFlippedCards([]);
                }, 1000);
            }
        }
    };

    useEffect(()=>{
        setStreakMultiplier(streak * STREAK_MULTIPLIER);
    },[streak])

    const isGameComplete = cards.length > 0 && cards.every(card => card.isMatched);

    useEffect(()=>{
        if(isGameComplete){
            if(intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
        }
    },[isGameComplete])

    return (
        <div className="memory-game">
            <div className="game-header">
                <p>Timer: {timer}</p>
                <p>Streak: {streak}</p>
                <h2>Memory Card Game</h2>
                <div className="stats">
                    <span>Score: {score}</span>
                    <span>Moves: {moves}</span>
                    <button onClick={initializeGame} className="reset-btn">
                        New Game
                    </button>
                </div>

                <div className="game-timer" style={{width: `${(showCardTimer / SHOW_CARD_TIME)*100}%`}}>
                </div>
            </div>

            {isGameComplete && (
                <div className="victory-message">
                    You completed the game in {moves} moves.
                </div>
            )}

            <div className="cards-grid">
                {cards.map((card) => (
                    <div
                        key={card.id}
                        className={`card ${card.isFlipped || card.isMatched ? 'flipped' : ''} ${
                            card.isMatched ? 'matched' : ''
                        }`}
                        onClick={() => handleCardClick(card.id)}
                    >
                        <div className="card-inner">
                            <div className="card-front">
                                <span>?</span>
                            </div>
                            <div className="card-back">
                                <img src={card.imageUrl} alt="Memory card" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default MemoGame;