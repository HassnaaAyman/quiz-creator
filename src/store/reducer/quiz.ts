export type IState = {
    created: string;
    modified: string | null;
    description: string;
    title: string;
    score: number | null;
    url: string;
    id: number;
    questions_answers: QuestionAnswers[];
};

type QuestionAnswers = {
    feedback_false: string;
    feedback_true: string;
    text: string;
    id: number;
    answer_id: number | null;
    answers: Array<Answer>;
};

type Answer = {
    is_true: boolean;
    text: string;
    id: number;
};

export const quizReducer = (
    state: IState[],
    action: {type: string; payload: IState},
): IState[] => {
    switch (action.type) {
        case 'add':
            return state.concat(action.payload);

        case 'edit':
            return state.map(quiz => {
                if (quiz.id === action.payload.id) {
                    return action.payload;
                }
                return quiz
            });
        default:
            throw new Error();
    }
};
