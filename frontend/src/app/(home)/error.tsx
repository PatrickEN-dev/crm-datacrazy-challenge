"use client";

import { IErrorProps } from "@/@types/error.globals";
import ErrorMessage from "@/components/ErrorMessage/errorMessage";

export default function Error({ reset }: IErrorProps) {
  return (
    <div className="px-4">
      <ErrorMessage firstMessage={"Ops! O sistema está temporariamente fora do ar."} />
      <p className="mt-4 text-center">
        Pedimos desculpas pelo inconveniente. O desenvolvedor está ciente do problema e já está
        trabalhando duro para resolver isso o mais rápido possível.
      </p>
      <p className="mt-2 text-center">Por favor, tente novamente mais tarde.</p>
      <p className="mt-2 text-center">ou</p>
      <div className="flex justify-center text-center">
        <button onClick={reset}>Tente novamente agora</button>
      </div>
    </div>
  );
}
