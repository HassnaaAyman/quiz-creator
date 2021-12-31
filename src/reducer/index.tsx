type IState = {
    created:string;
    modified:string;
    description:string;
    title:string;
    score:number | null ; 
    url:string;
    id: number;
    questions_answers: QuestionAnswers[]
}

type QuestionAnswers = {
    feedback_false: string;
    feedback_true:string,
    text : string;
    id: number;
    answer_id: number|null;
    answers: Array<Answer>
}

type Answer = {
    is_true:boolean;
    text: string;
    id: number;
}


export const reducer = (state:IState[], action: { type: string; payload: IState }): IState[] => {
    switch (action.type) {
        case 'add':
            
            return { ...state, ...action.payload };
        case 'edit':
            // find state id, then modify, then append
            return { ...state, ...action.payload };
        default:
            throw new Error();
    }
}