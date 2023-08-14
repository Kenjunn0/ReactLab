import {useForm} from "react-hook-form";
import {useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";
import {categories, categoryState, toDoState} from "../atom";
import {useState} from "react";

type IForm = {
    item: string;
}

function CreateToDo() {
    const [ currentName, setCurrentName ] = useState<string>("");
    const [ isAddToDosForm, setIsAddToDosForm ] = useState(true);
    const setToDos = useSetRecoilState(toDoState);
    const [ Categories, setCategories] = useRecoilState(categories);
    const category = useRecoilValue(categoryState);
    const { register,
        getValues,
        handleSubmit,
        setValue }
        = useForm<IForm>();

    const handleValid = ({ item }: IForm) => {
        if(isAddToDosForm) {
            setToDos((oldToDos) => [...oldToDos, { text : item, id: Date.now(), category : category}])
            setValue("item", "");
            setCurrentName("");
        }
        if(!isAddToDosForm && !Categories.includes(item)) {
            setCategories((oldCategories: any) => [...oldCategories, item ]);
            setValue("item", "");
            setCurrentName("");
        }

    };


    return (
        <div className="flex flex-col items-center">
            <div className="w-fit  rounded-xl flex items-center justify-center p-4 px-20 my-4">
                <button onClick={() => setIsAddToDosForm((prev) => !prev)} className={`${isAddToDosForm ? "bg-gray-900 text-3xl font-bold text-amber-200" : "bg-gray-800 text-2xl font-semibold text-amber-50" } rounded-2xl shadow-xl p-4 mx-4`}>Add To Dos</button>
                <button onClick={() => setIsAddToDosForm((prev) => !prev)} className={`${!isAddToDosForm ? "bg-gray-900 text-3xl font-bold text-amber-200" : "bg-gray-800 text-2xl font-semibold text-amber-50" } rounded-2xl shadow-xl p-4 mx-4`}>Add Categories</button>
            </div>
            <div className="w-full p-8 bg-gray-800 rounded-3xl items-center justify-center ">
                <form onSubmit={handleSubmit(handleValid)} className="flex flex-col" >
                    <input className="bg-amber-50 w-100 h-15 rounded-xl outline-none p-2 m-4 shadow-xl" {...register("item", {
                        required : "please write a To Do",
                        onChange : (event) => setCurrentName(getValues("item"))
                    })}
                    />
                    { !isAddToDosForm && Categories.includes(currentName) ? <text className="text-amber-400 text-md font ml-8">Already existed category</text> : null}
                    <button className="font-bold bg-amber-50 m-4 p-2 rounded-xl shadow-xl">ADD!</button>
                </form>
            </div>
        </div>
    )
}

export default CreateToDo;