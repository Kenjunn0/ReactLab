import { useForm } from "react-hook-form";

type IFormData = {
    errors: {
        email: {
            message: string;
        };
    };
    firstName: string;
    lastName: string;
    userName: string;
    email: string;
    password: string;
    passwordConfirm: string;
    extraError?: string;
};

function ToDoList() {

    const {
        register : registerLogin,
        watch : watchLogin,
        handleSubmit : handleLoginSubmit,
        formState : { errors : loginErrors },
        setError : setLoginError,
    } = useForm<IFormData>();
    const onValid = (data : IFormData) => {
        if (data.password !== data.passwordConfirm){
            setLoginError("passwordConfirm",
                {message: "Password are not the same"},
                {shouldFocus: true}
            );
        }
    }

    console.log(loginErrors);

    return <div>
        <form
            style={{display : "flex", flexDirection : "column"}}
            onSubmit={handleLoginSubmit(onValid)}
        >
            <input {...registerLogin("email", {
                required: true,
                pattern: {
                    value: /^[A-Za-z0-9._%+-]+@naver.com/,
                    message: "Only naver.com can use for login"
                }
            }) } placeholder="Email" />
            <span>{loginErrors?.email?.message}</span>

            <input {...registerLogin("firstName" , {
                required: true,
                validate: {
                    noNico : (value) => value.includes("nico") ? "no nico allowed" : "good"
                   }
            }) } placeholder="First Name" />
            <span>{loginErrors?.firstName?.message}</span>
            <input {...registerLogin("lastName" , {required: true}) } placeholder="Last Name" />
            <input {...registerLogin("userName" , {required: true}) } placeholder="User Name" />
            <input {...registerLogin("password" , {required: true}) } placeholder="Password" />
            <input {...registerLogin("passwordConfirm" , {required: true}) } placeholder="Password Confirm" />
            <button>Add</button>
        </form>
    </div>
}

export default ToDoList;