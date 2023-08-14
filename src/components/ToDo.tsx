import {categories, IToDo, toDoState} from "../atom";
import {useRecoilValue, useSetRecoilState} from "recoil";

function ToDo( { text, category, id } : IToDo ) {
    const setToDos = useSetRecoilState(toDoState);
    const categoryList = useRecoilValue(categories);
    const onMove = (event : React.MouseEvent<HTMLButtonElement>) => {
        const {
            currentTarget : { name },
        } = event;

        setToDos((oldToDos) => {
            const targetIndex = oldToDos.findIndex(toDo => toDo.id === id)
            const newToDo = { text, id, category : name as any};
            return [
                ...oldToDos.slice(0, targetIndex),
                newToDo,
                ...oldToDos.slice(targetIndex + 1),
            ]
        })
    }

    const onDelete = (event : React.MouseEvent<HTMLButtonElement>) => {
        const {
            currentTarget : { name },
        } = event;

        setToDos((oldToDos : IToDo[]) => {
            const targetIndex = oldToDos.findIndex(toDo => toDo.id === id);
            return [
                ...oldToDos.slice(0, targetIndex),
                ...oldToDos.slice(targetIndex + 1),
            ]
        })
    }

    return (
        <div className="flex flex-row justify-between items-center rounded-2xl bg-gray-800 p-2 px-4 m-4">
            <div className="bg-gray-900 text-amber-50 rounded-md font-semibold p-2 px-4 my-1">{text}</div>
            <div>
                {categoryList.filter((item : string) => category !== item).map((item : string) => {
                    return (
                        <button className="bg-gray-900 text-amber-500 rounded-md p-1 px-2 m-1" name={item} onClick={onMove}>{item}</button>
                    )
                })}
                <button className="bg-gray-900 text-red-500 rounded-md p-1 px-2 m-1" name="deleteButton" onClick={onDelete}>Delete</button>
            </div>
        </div>

    );
}

export default ToDo;