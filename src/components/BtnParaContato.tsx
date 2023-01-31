import { useRouter } from "next/router";
interface BtnParaContato {
  texto: string;
}

export default function BtnParaContato(props: BtnParaContato) {
  const router = useRouter();
  return (
    <button
      className=" px-5 sm:px-10 py-5 font-bold text-sm leading-5
          text-white shadow-sm shadow-gray-600
          hover:translate-y-[.1rem] hover:shadow-none
      bg-gradient-to-b from-initialGradientBtn to-finalGradientBtn
      rounded-lg
      "
      onClick={() => router.push("/Contato")}
    >
      {props.texto}
    </button>
  );
}
