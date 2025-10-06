/*
    MEMO GAME RULE
- User needs Moves in order to flip a card
- To gain moves, user can do a quiz. Each quiz will give {QUIZ_ADD_MOVE} amount of moves.
- User cannot open quiz if the first move has not been made.
- When user flips two of the same looking card, add score, and also add Streak.
- Streak: if user flips correctly consecutively, the streak increases. The more streak the user has, the higher score they will get.
            But if they flips incorrectly, they will lose the streak.
- Quiz Questions and Cards are randomized every time the game is initialized. (Either through web refresh or clicking New Game button
- Total Moves and Timer is there for the tryhards out there.
- Inspired by Gimkit.
- Have fun ig
 */

import React, {useState, useEffect, useRef} from 'react';
import "./MemoGame.css"

import {motion} from "framer-motion";

const MemoGame = ({ pictures }) => {
    const SHOW_CARD_TIME = 3000;
    const STREAK_MULTIPLIER = 1;
    const QUIZ_ADD_MOVE = 10;
    const QUIZ_INITIAL_MOVES = 10;
    const QUIZ_CLOSE_DELAY = 3000;

    const [streak, setStreak] = useState(0);
    const [streakMultiplier, setStreakMultiplier] = useState(0);

    const [firstMoveMade, setFirstModeMade] = useState(false);

    const [cards, setCards] = useState([]);
    const [flippedCards, setFlippedCards] = useState([]);
    const [score, setScore] = useState(0);
    const [moves, setMoves] = useState(0);
    const [availableMoves, setAvailableMoves] = useState(QUIZ_INITIAL_MOVES);

    const [timer, setTimer] = useState(0);

    const intervalRef = useRef(null);

    const [showCardTimer, setShowCardTimer] = useState(0);

    // Quiz state
    const [showQuizModal, setShowQuizModal] = useState(false);
    const [currentQuiz, setCurrentQuiz] = useState(null);
    const [quizAnswer, setQuizAnswer] = useState('');
    const [quizFeedback, setQuizFeedback] = useState('');
    const [quizSubmitDisable, setQuizSubmitDisable] = useState(false);

    const [shuffledQuizzes, setShuffledQuizzes] = useState([]);
    const [quizIndex, setQuizIndex] = useState(0);
    const [showAnswers, setShowAnswers] = useState(false);


    // If user try to open a card with no available moves, make the text flashes red
    const [isFlashing, setIsFlashing] = useState(false);

    // Sample quiz questions
    const quizQuestions = [
        // Câu dễ - Chapter 1
        {
            question: "Theo Hồ Chí Minh, văn hóa ra đời nhằm mục đích gì?",
            answer: "Đáp ứng nhu cầu sinh tồn và phát triển",
            options: ["Trang trí đời sống tinh thần", "Đáp ứng nhu cầu sinh tồn và phát triển", "Phục vụ chính trị", "Tạo sự khác biệt xã hội"]
        },
        {
            question: "Hồ Chí Minh cho rằng văn hóa phải phục vụ ai?",
            answer: "Nhân dân",
            options: ["Nhà nước", "Giới trí thức", "Nhân dân", "Đảng viên"]
        },
        {
            question: "Theo tư tưởng Hồ Chí Minh, văn hóa vừa là mục tiêu, vừa là gì?",
            answer: "Động lực phát triển",
            options: ["Công cụ tuyên truyền", "Nguồn tài nguyên", "Động lực phát triển", "Hình thức sinh hoạt"]
        },
        {
            question: "Nền văn hóa mới theo Hồ Chí Minh phải mang đặc trưng gì?",
            answer: "Dân tộc – khoa học – đại chúng",
            options: ["Hiện đại – hội nhập – mở rộng", "Dân tộc – khoa học – đại chúng", "Toàn cầu – sáng tạo – nhân văn", "Cổ truyền – dân gian – dân chủ"]
        },
        {
            question: "'Văn hóa là một mặt trận' có nghĩa là gì?",
            answer: "Văn hóa là công cụ đấu tranh tinh thần",
            options: ["Văn hóa phục vụ chiến tranh", "Văn hóa là lĩnh vực nghệ thuật", "Văn hóa là công cụ đấu tranh tinh thần", "Văn hóa thay thế kinh tế"]
        },

        // Câu khó - Chapter 1
        {
            question: "Vì sao Hồ Chí Minh coi chính trị có vai trò quyết định đối với văn hóa?",
            answer: "Vì chính trị định hướng cho sự phát triển văn hóa",
            options: ["Vì văn hóa phụ thuộc vào nghệ thuật", "Vì chính trị định hướng cho sự phát triển văn hóa", "Vì chính trị là lĩnh vực tinh thần cao hơn", "Vì văn hóa là sản phẩm của xã hội tư sản"]
        },
        {
            question: "Quan điểm 'văn hóa phải soi đường cho quốc dân đi' thể hiện điều gì?",
            answer: "Văn hóa có chức năng định hướng phát triển xã hội",
            options: ["Văn hóa là công cụ giải trí", "Văn hóa chỉ dành cho trí thức", "Văn hóa có chức năng định hướng phát triển xã hội", "Văn hóa phụ thuộc vào kinh tế"]
        },
        {
            question: "Trong kháng chiến chống Pháp, phương châm xây dựng văn hóa là gì?",
            answer: "Dân tộc – khoa học – đại chúng",
            options: ["Độc lập – tự do – hạnh phúc", "Tiên tiến – hiện đại – nhân văn", "Dân tộc – khoa học – đại chúng", "Đoàn kết – dân chủ – văn minh"]
        },
        {
            question: "Vì sao văn hóa được coi là nền tảng tinh thần của xã hội?",
            answer: "Vì định hình nhân cách và giá trị con người",
            options: ["Vì chỉ tồn tại trong giới học thuật", "Vì là sản phẩm vật chất", "Vì được quyết định bởi kinh tế", "Vì định hình nhân cách và giá trị con người"]
        },
        {
            question: "Giá trị thời sự của tư tưởng Hồ Chí Minh về văn hóa hiện nay là gì?",
            answer: "Định hướng xây dựng nền văn hóa tiên tiến, đậm đà bản sắc dân tộc",
            options: ["Chỉ mang giá trị lịch sử", "Định hướng xây dựng nền văn hóa tiên tiến, đậm đà bản sắc dân tộc", "Không còn phù hợp trong thời hội nhập", "Chỉ dùng trong giảng dạy"]
        },

        // Câu dễ - Chapter 2
        {
            question: "Hồ Chí Minh coi giáo dục là gì?",
            answer: "Quốc sách hàng đầu",
            options: ["Công cụ tuyên truyền", "Quốc sách hàng đầu", "Hoạt động phụ trợ", "Lợi ích riêng của trí thức"]
        },
        {
            question: "Mạng xã hội mang đến cơ hội gì cho văn hóa Việt Nam?",
            answer: "Lan tỏa giá trị tốt đẹp và tri thức",
            options: ["Thay thế giáo dục truyền thống", "Lan tỏa giá trị tốt đẹp và tri thức", "Giới hạn giao tiếp xã hội", "Làm suy yếu văn hóa dân tộc"]
        },
        {
            question: "Phương châm xây dựng văn hóa Việt Nam hiện nay là:",
            answer: "Tiên tiến – đậm đà bản sắc dân tộc",
            options: ["Hội nhập – mở cửa – toàn cầu", "Tiên tiến – đậm đà bản sắc dân tộc", "Độc lập – tự do – hạnh phúc", "Hiện đại – thực dụng – dân chủ"]
        },
        {
            question: "Ngành nào được xem là 'công nghiệp văn hóa' đặc trưng?",
            answer: "Du lịch",
            options: ["Tài chính", "Nông nghiệp", "Du lịch", "Xây dựng"]
        },
        {
            question: "Một phong trào tiêu biểu gắn với đời sống văn hóa ở Việt Nam là:",
            answer: "Toàn dân đoàn kết xây dựng đời sống văn hóa",
            options: ["Đổi mới sáng tạo quốc gia", "Toàn dân đoàn kết xây dựng đời sống văn hóa", "Công nghiệp hóa – hiện đại hóa", "Cách mạng công nghiệp 4.0"]
        },

        // Câu khó - Chapter 2
        {
            question: "Thách thức lớn nhất của giáo dục Việt Nam hiện nay là gì?",
            answer: "Bệnh thành tích và chất lượng chưa đồng đều",
            options: ["Thiếu trường học", "Bệnh thành tích và chất lượng chưa đồng đều", "Không hội nhập quốc tế", "Thiếu giáo viên"]
        },
        {
            question: "Tác động tiêu cực của mạng xã hội là gì?",
            answer: "Tin giả, bạo lực mạng, lệch chuẩn giá trị",
            options: ["Kết nối cộng đồng", "Tăng dân trí", "Tin giả, bạo lực mạng, lệch chuẩn giá trị", "Quảng bá văn hóa tốt đẹp"]
        },
        {
            question: "Hội nhập văn hóa quốc tế cần dựa trên nguyên tắc nào?",
            answer: "Giữ bản sắc, tiếp thu tinh hoa nhân loại",
            options: ["Hòa tan toàn bộ", "Giữ bản sắc, tiếp thu tinh hoa nhân loại", "Từ bỏ truyền thống", "Đóng cửa bảo tồn tuyệt đối"]
        },
        {
            question: "Văn hóa trong kinh tế hiện đại được xem là gì?",
            answer: "Động lực nội sinh và nguồn sáng tạo",
            options: ["Yếu tố trang trí", "Động lực nội sinh và nguồn sáng tạo", "Công cụ tuyên truyền", "Không liên quan"]
        },
        {
            question: "Văn hóa góp phần ổn định chính trị – xã hội bằng cách nào?",
            answer: "Định hình lối sống, củng cố đồng thuận xã hội",
            options: ["Tăng GDP quốc gia", "Định hình lối sống, củng cố đồng thuận xã hội", "Nâng cao năng suất lao động", "Hỗ trợ hoạt động thương mại"]
        },

        // Câu dễ - Chapter 3
        {
            question: "Theo Hồ Chí Minh, 'đức' có vai trò như thế nào?",
            answer: "Là gốc của con người",
            options: ["Quan trọng ngang tài", "Là gốc của con người", "Không cần thiết", "Thứ yếu hơn tài"]
        },
        {
            question: "Muốn xây dựng CNXH, trước hết cần có gì?",
            answer: "Con người XHCN",
            options: ["Công nghiệp hiện đại", "Con người XHCN", "Đảng lãnh đạo", "Vốn đầu tư nước ngoài"]
        },
        {
            question: "Một giá trị truyền thống mà Hồ Chí Minh luôn coi trọng là:",
            answer: "Lòng yêu nước",
            options: ["Chủ nghĩa cá nhân", "Lòng yêu nước", "Tiêu dùng vật chất", "Văn hóa ngoại lai"]
        },
        {
            question: "Đại hội XIII của Đảng nhấn mạnh nhiệm vụ gì về văn hóa – con người?",
            answer: "Xây dựng hệ giá trị văn hóa và chuẩn mực con người Việt Nam",
            options: ["Tăng trưởng kinh tế nhanh", "Xây dựng hệ giá trị văn hóa và chuẩn mực con người Việt Nam", "Hội nhập toàn cầu", "Phát triển công nghiệp sáng tạo"]
        },
        {
            question: "Một phẩm chất tiêu biểu của con người XHCN là:",
            answer: "Cần, kiệm, liêm, chính",
            options: ["Giàu có vật chất", "Cần, kiệm, liêm, chính", "Thích hưởng thụ", "Cá nhân chủ nghĩa"]
        },

        // Câu khó - Chapter 3
        {
            question: "Vì sao Hồ Chí Minh nhấn mạnh phải kết hợp giữa 'đức' và 'tài'?",
            answer: "Vì con người chỉ hoàn thiện khi có cả đức và tài",
            options: ["Vì tài quan trọng hơn đức", "Vì xã hội cần bằng cấp", "Vì con người chỉ hoàn thiện khi có cả đức và tài", "Vì đức không thể rèn luyện được"]
        },
        {
            question: "Yêu nước trong thời kỳ hội nhập được thể hiện qua hành động nào?",
            answer: "Học tập, sáng tạo, xây dựng đất nước giàu mạnh",
            options: ["Chống giặc ngoại xâm", "Học tập, sáng tạo, xây dựng đất nước giàu mạnh", "Xuất khẩu lao động", "Giữ truyền thống tuyệt đối"]
        },
        {
            question: "Giữ bản sắc dân tộc trong toàn cầu hóa cần làm gì?",
            answer: "Tiếp thu tinh hoa có chọn lọc, giữ truyền thống tốt đẹp",
            options: ["Từ bỏ cái cũ", "Tiếp thu tinh hoa có chọn lọc, giữ truyền thống tốt đẹp", "Hòa tan toàn bộ", "Đóng cửa với văn hóa mới"]
        },
        {
            question: "Hệ giá trị con người Việt Nam hiện đại gồm những phẩm chất nào?",
            answer: "Yêu nước, nhân ái, trung thực, sáng tạo, trách nhiệm",
            options: ["Giàu có, thành đạt, quyền lực", "Yêu nước, nhân ái, trung thực, sáng tạo, trách nhiệm", "Hưởng thụ, cá nhân, vật chất", "Hội nhập, vui chơi, giải trí"]
        },
        {
            question: "Giải pháp theo tư tưởng Hồ Chí Minh để khắc phục suy thoái đạo đức là gì?",
            answer: "Giáo dục đạo đức, nêu gương, phát huy truyền thống",
            options: ["Tăng hình phạt", "Giáo dục đạo đức, nêu gương, phát huy truyền thống", "Hạn chế hội nhập", "Tự do vô hạn"]
        }
    ];

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
        setAvailableMoves(QUIZ_INITIAL_MOVES);
        setFlippedCards([]);
        setTimer(0);
        setFirstModeMade(false);
        setStreak(0);
        if(intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }

        const shuffled = [...quizQuestions].sort(() => Math.random() - 0.5);
        setShuffledQuizzes(shuffled);
        setQuizIndex(0);

    };

    const openQuizModal = () => {
        if (shuffledQuizzes.length === 0) return;

        const quiz = shuffledQuizzes[quizIndex];
        setCurrentQuiz(quiz);
        setQuizAnswer('');
        setQuizFeedback('');
        setShowQuizModal(true);
    };

    const handleQuizSubmit = () => {
        setQuizSubmitDisable(true);
        setShowAnswers(true);

        if (quizAnswer === currentQuiz.answer) {
            setQuizFeedback(`Đúng! Bạn nhận được thêm ${QUIZ_ADD_MOVE} lượt!`);
            setAvailableMoves(prev => prev + QUIZ_ADD_MOVE);
        } else {
            setQuizFeedback("Không sao cả, bạn sẽ đúng lần sau!");
        }

        setTimeout(() => {
            setShowQuizModal(false);
            setQuizSubmitDisable(false);
            setQuizIndex((prevIndex) => (prevIndex + 1) % shuffledQuizzes.length);
            setShowAnswers(false);
        }, QUIZ_CLOSE_DELAY);
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

        if (availableMoves <= 0) {
            setIsFlashing(true);
            setTimeout(() => setIsFlashing(false), 500);
            return;
        }

        if (flippedCards.length >= 2 || cards.find(c => c.id === cardId)?.isMatched) return;

        if(cardId === flippedCards[0]){
            console.log("This card is already flipped.");
            return;
        }

        setAvailableMoves(prev => prev - 1);

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
                <div className="stats">
                    <div>Điểm: {score}</div>
                    <div>Tổng số lật: {moves}</div>
                    <div>Thời gian: {timer}</div>
                    <div>Chuỗi: {streak}</div>
                    <div className={`available-moves ${isFlashing ? 'flash-red' : ''}`}>Lượt còn lại: {availableMoves}</div>
                    <motion.button
                        whileHover={{scale: 1.08}}
                        whileTap={{scale: 0.95}}
                        transition={{type: "spring", stiffness: 300}}

                        onClick={openQuizModal}  className="quiz-btn"
                        disabled={!firstMoveMade}
                    >
                        Quiz
                    </motion.button>
                    <motion.button
                        whileHover={{scale: 1.08}}
                        whileTap={{scale: 0.95}}
                        transition={{type: "spring", stiffness: 300}}

                        onClick={initializeGame} className="reset-btn">
                        Chơi mới
                    </motion.button>
                </div>

                <div className="game-timer" style={{width: `${(showCardTimer / SHOW_CARD_TIME)*100}%`}}>
                </div>
            </div>

            {isGameComplete && (
                <div className="victory-message">
                    Bạn đã hoàn thành game với {moves} lần lật thẻ.
                </div>
            )}

            {showQuizModal && (
                <div className="quiz-modal-overlay" onClick={() => setShowQuizModal(false)}>
                    <div className="quiz-modal" onClick={(e) => e.stopPropagation()}>
                        <button className="close-modal" onClick={() => setShowQuizModal(false)}>×</button>
                        <p className="quiz-question">{currentQuiz?.question}</p>
                        <div className="quiz-options">
                            {currentQuiz?.options.map((option, index) => {
                                let optionClass = 'quiz-option';

                                if (showAnswers) {
                                    if (option === currentQuiz.answer) optionClass += ' correct';
                                    else if (option === quizAnswer && option !== currentQuiz.answer) optionClass += ' wrong';
                                } else if (quizAnswer === option) {
                                    optionClass += ' selected';
                                }

                                return (
                                    <button
                                        key={index}
                                        className={optionClass}
                                        onClick={() => !showAnswers && setQuizAnswer(option)} // prevent selecting after submission
                                    >
                                        {option}
                                    </button>
                                );
                            })}
                        </div>
                        <button
                            className="submit-quiz-btn"
                            onClick={handleQuizSubmit}
                            disabled={!quizAnswer || quizSubmitDisable}
                        >
                            Chọn
                        </button>
                        {quizFeedback && (
                            <p className={`quiz-feedback ${quizFeedback.includes('Đúng') ? 'correct' : 'wrong'}`}>
                                {quizFeedback}
                            </p>
                        )}
                    </div>
                </div>
            )}

            <div className="cards-grid">
                {cards.map((card) => (
                    <motion.div
                        key={card.id}
                        className={`card ${card.isFlipped || card.isMatched ? 'flipped' : ''} ${
                            card.isMatched ? 'matched' : ''
                        }`}
                        onClick={() => handleCardClick(card.id)}
                        whileHover={{scale: 1.1}}
                        whileTap={{scale: 0.95}}
                        transition={{type: "spring", stiffness: 300}}
                    >
                        <div className="card-inner">
                            <div className="card-front">
                                <span>?</span>
                            </div>
                            <div className="card-back">
                                <img src={card.imageUrl} alt="Memory card" />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};
export default MemoGame;