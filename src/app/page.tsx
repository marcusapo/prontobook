"use client";
import Cookie from "js-cookie";
import { useRouter } from "next/navigation";
import Logo from "../../public/logo/LOGO.png";
import Image from "next/image";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { signInRequest } from "@/api/methods";
import { setCookie } from "nookies";

export default function Login() {
  // Initialize the useRouter hook
  const router = useRouter();

  // Initialize the useForm hook
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  // Initialize the role state
  const [role, setRole] = useState("Atendente");

  // Define a type for the form data
  type FormData = {
    selectedOption: string;
    email: string;
    password: string;
    number: string;
  };
  ``;

  // Function to handle form submission
  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log('dados aqui =',data);
    
    

      Login(data)
  };

  const Login = async (data: any)=>{
      const signInResponse = await signInRequest({
        usuario: data.email,
        senha: data.password,
      })
      .then((data)=>{
             console.log('aqui', data.data)
              console.log(data.data.data.accessToken.accessToken)
              if(data.data.data.accessToken){
                Cookie.set("auth_token",data.data.data.accessToken.accessToken, {
                  expires: 60 * 60,
                } );       
              }
              router.push("/navbar/profile");
            })
  }
  // Function to handle "Aqui" link click

  const handleRegisterClickAqui = () => {
    // Navigate to the desired route
    router.push("#");
  };

  // Function to handle "Cadastre" link click
  const handleRegisterClickCadastre = () => {
    // Navigate to the desired route
    router.push("#");
  };

  return (
    <div className="bg-[#F2F8FD] h-[1117px]">
      <div className="flex flex-col items-center">
        <div className="mt-8">
          <Image src={Logo} alt="prontobook" height={235} width={131.97} />
        </div>
      </div>
      <div className="bg-[#FFFFFF] h-[730.66px] w-[1099px] mx-auto mt-8">
        <h1 className="text-center font-roboto font-bold text-4xl leading-9 pt-10">
          Boas vindas
        </h1>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="h-[544px] w-[380px] mx-auto mt-8">
              <div className="flex gap-10 flex justify-center items-center mt-16">
                <div>
                  {/* Role selection */}
                  <label className="text-lg font-Inter">
                    <input
                      type="radio"
                      value="Atendente"
                      {...register("selectedOption", {
                        required: "Please select a role",
                      })}
                      checked={role === "Atendente"}
                      onChange={() => setRole("Atendente")}
                      className="w-4 h-4"
                    />
                    <span className="mx-1"></span>
                    Atendente
                  </label>
                </div>
                <div className="flex items-center">
                  <label className="text-lg font-Inter">
                    <input
                      type="radio"
                      value="Médico"
                      {...register("selectedOption", {
                        required: "Please select a role",
                      })}
                      checked={role === "Médico"}
                      onChange={() => setRole("Médico")}
                      className="w-4 h-4"
                    />
                    <span className="mx-1"></span>
                    Médico
                  </label>
                </div>
              </div>
              {/* Email input */}
              <div>
                <label className="block text-sm font-medium  mt-10 mb-3">
                  E-mail
                </label>
                <input
                
                  id="email"
                  placeholder="Digite seu e-mail"
                  {...register("email", {
                    required: "Este campo é obrigatório",
                  })}
                  className="block w-full rounded-md border-1 border-gray-300 bg-gray-200 py-2 pl-4 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-5 focus:ring-1 focus:ring-blue-500 focus:border-white focus:bg-white focus:outline-none"
                />
                {errors.email && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
              {/* Password input */}
              <div>
                <label className="block text-sm font-medium  mt-10 mb-3">
                  Senha
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Digite sua senha"
                  {...register("password", {
                    required: "A senha é obrigatória",
                  })}
                  className="block w-full rounded-md border-1 border-gray-300 bg-gray-200 py-2 pl-4 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-5 focus:ring-1 focus:ring-blue-500 focus:border-white focus:bg-white focus:outline-none"
                />
                {errors.password && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>
              {/* CNPJ input (visible only for role "Médico") */}
              {role === "Médico" && (
                <div>
                  <label className="block text-sm font-medium  mt-10 mb-3">
                    CPNJ do local
                  </label>
                  <input
                    type="number"
                    id="number"
                    placeholder="Digite o CNPJ do local"
                    {...register("number", {
                      required: "O CNPJ é obrigatório",
                    })}
                    className="block w-full rounded-md border-1 border-gray-300 bg-gray-200 py-2 pl-4 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-5 focus:ring-1 focus:ring-blue-500 focus:border-white focus:bg-white focus:outline-none"
                  />
                  {errors.number && (
                    <p className="text-sm text-red-500 mt-1">
                      {errors.number.message}
                    </p>
                  )}
                </div>
              )}
              <div>
                {/* Submit button */}
                <div className="flex flex-col items-center mt-10">
                  <button
                    className="bg-sky-500 text-white font-semibold py-1 px-12 rounded-lg"
                    type="submit"
                  >
                    Entrar
                  </button>
                </div>
                {role === "Médico" ? (
                  // For role other than "Médico"
                  <div className=" flex flex-col items-center mt-10 text-md font-Roboto mt-6">
                    Ainda não é um associado? Saiba como clicando
                    <span
                      className="text-md font-Roboto text-red-600 cursor-pointer"
                      onClick={handleRegisterClickAqui}
                    >
                      Aqui
                    </span>
                  </div>
                ) : (
                  // For role "Atendente"
                  <div className=" flex flex-col items-center mt-10 text-md font-Roboto mt-6">
                    Primeiro acesso?
                    <span
                      className="text-md font-Roboto text-red-600 cursor-pointer"
                      onClick=  {handleRegisterClickCadastre}
                    >
                      Cadastre-se
                    </span>
                  </div>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
