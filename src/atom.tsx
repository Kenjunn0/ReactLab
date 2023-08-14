import {atom, selector} from "recoil";
import {recoilPersist} from "recoil-persist";


export type IToDo = {
    text: string;
    id: number;
    category: string;
}

const { persistAtom : categoryPersistAtom } = recoilPersist({
    key: "category",
    storage: localStorage
})

const { persistAtom : toDoPersistAtom } = recoilPersist({
    key : "toDo",
    storage: localStorage
})

export const categories = atom({
    key: "category",
    default: [ "TO_DO","DOING", "DONE" ],
    effects_UNSTABLE : [categoryPersistAtom]
})

export const categoryState = atom<string>({
    key: "categoryState",
    default: "TO_DO",
})

export const toDoState = atom<IToDo[]>({
    key: "toDo",
    default: [],
    effects_UNSTABLE : [toDoPersistAtom]
})

export const toDoSelector = selector({
    key: "toDoSelector",
    get: ({get}) => {
        const toDos = get(toDoState);
        const category = get(categoryState);
        return toDos.filter((toDo) => toDo.category === category);

    }
})