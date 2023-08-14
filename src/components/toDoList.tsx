import CreateToDo from "./CreateToDo";
import {useRecoilState, useRecoilValue} from "recoil";
import {categoryState, toDoSelector, categories } from "../atom";
import ToDo from "./ToDo";

function ToDoList () {
    const toDos = useRecoilValue(toDoSelector);
    const [ category, setCategory] = useRecoilState(categoryState)
    const categoryList = useRecoilValue(categories);
    const onInput = (event : React.FormEvent<HTMLSelectElement>) => {
        setCategory(event.currentTarget.value as any);
    }

    return (
        <div className="w-1/2">
            <CreateToDo />
            <div className="mt-8">
                <text className="font-bold text-2xl border-2 border-amber-50 rounded-2xl text-amber-50 ml-4 p-2">Categories</text>
                <select value={category} onInput={onInput} className="w-1/2 bg-gray-800 text-amber-50 rounded-2xl outline-none p-2 m-4">
                    {categoryList.map((category : string) => {
                        return (
                            <option value={category} key={category}>{category}</option>
                        )
                    })}
                </select>
            </div>
            {toDos?.map((toDo) => <ToDo key={toDo.id} {...toDo}  /> ) }
        </div>
    )
}

export default ToDoList;



// type IFormData = {
//     errors: {
//         email: {
//             message: string;
//         };
//     };
//     firstName: string;
//     lastName: string;
//     userName: string;
//     email: string;
//     password: string;
//     passwordConfirm: string;
//     extraError?: string;
// };
//
// function ToDoList() {
//
//     const {
//         register : registerLogin,
//         watch : watchLogin,
//         handleSubmit : handleLoginSubmit,
//         formState : { errors : loginErrors },
//         setError : setLoginError,
//     } = useForm<IFormData>();
//     const onValid = (data : IFormData) => {
//         if (data.password !== data.passwordConfirm){
//             setLoginError("passwordConfirm",
//                 {message: "Password are not the same"},
//                 {shouldFocus: true}
//             );
//         }
//     }
//
//     console.log(loginErrors);
//
//     return <div>
//         <h1>To Dos</h1>
//         <form
//             style={{display : "flex", flexDirection : "column"}}
//             onSubmit={handleLoginSubmit(onValid)}
//         >
//             <input {...registerLogin("email", {
//                 required: true,
//                 pattern: {
//                     value: /^[A-Za-z0-9._%+-]+@naver.com/,
//                     message: "Only naver.com can use for login"
//                 }
//             }) } placeholder="Email" />
//             <span>{loginErrors?.email?.message}</span>
//
//             <input {...registerLogin("firstName" , {
//                 required: true,
//                 validate: {
//                     noNico : (value) => value.includes("nico") ? "no nico allowed" : "good"
//                    }
//             }) } placeholder="First Name" />
//             <span>{loginErrors?.firstName?.message}</span>
//             <input {...registerLogin("lastName" , {required: true}) } placeholder="Last Name" />
//             <input {...registerLogin("password" , {required: true}) } placeholder="Password" />
//             <input {...registerLogin("userName" , {required: true}) } placeholder="User Name" />
//             <input {...registerLogin("passwordConfirm" , {required: true}) } placeholder="Password Confirm" />
//             <button>Add</button>
//         </form>
//     </div>
// }
//
// export default ToDoList;