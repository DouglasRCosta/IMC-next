import React, { useEffect, useState } from "react";
import style from "./App.module.css";
import imcImg from "./assets/imc.png";
import reset from "./assets/leftarrow.png";
import { calcImc, items, itemsTypes } from "./datas/index";
import ImcCard from "./components/ImcCard";
const App = () => {
  const [altura, setAltura] = useState<number>(0);
  const [peso, setPeso] = useState<number>(0);
  const [result, setResult] = useState<itemsTypes>();

  const calcular = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!(altura && peso) || isNaN(altura) || isNaN(peso)) {
      alert("Erro Interno ou dados não presenter");
      return;
    }
    setResult(calcImc(peso, altura));
  };
  const resetHandler =(e: React.MouseEvent<HTMLButtonElement>)=>{
    e.preventDefault();
    setAltura(0)
    setPeso(0)
    setResult(undefined)
  }

  return (
    <div className={style.main}>
      <section className={style.header_section}>
        <header>
          <div>
            <div className={`${style.container} ${style.back}`}>
              <img src={imcImg} alt="IMC" width={80} />
            </div>
          </div>
        </header>
      </section>
      <section className={`${style.content_section}`}>
        <div className={`${style.content_div}`}>
          <div
            className={`${style.container} ${style.inner_content} ${style.flex}`}
          >
            <div className={`${style.left}`}>
              <div className={` ${style.flex} ${style.column}`}>
                <div>
                  <h1>Calcule o seu IMC.</h1>
                  <p>
                    IMC é siglapara índice Corpórea, parâmetro adotado pela
                    Organização Mundial de Saúde para calcular o peso idealde
                    cada pessoa.
                  </p>
                </div>
                <div className={` ${style.flex} ${style.column}`}>
                  <input
                    type="number"
                    value={altura ? altura : ""}
                    onChange={(e) =>
                      setAltura(Number(parseFloat(e.target.value).toFixed(2)))
                    }
                    placeholder={`Digite a sua altura. Ex 1.5 (em métros)`}
                  />
                  <input
                    type="number"
                    onChange={(e) =>
                      setPeso(Number(parseFloat(e.target.value).toFixed(2)))
                    }
                    value={peso ? peso : ""}
                    placeholder={`Digite a sue peso. Ex 75.3 (em kgs)`}
                  />
                </div>
                <div>
                  <button onClick={calcular}>Calcular</button>
                </div>
              </div>
            </div>
            <div className={`${style.right}`}>
              {!result ? (
                <div className={` ${style.flex} ${style.grid} `}>
                  {items.map((e, i) => (
                    <ImcCard key={`${e.title}-${i}`} item={e} />
                  ))}
                </div>
              ) : (
                <div style={{ height: "100%" }}>
                  <ImcCard
                    key={`${result.title}-${result.imc}`}
                    item={result}
                  />
                  <button onClick={resetHandler} id={`${style.reset_btn}`}>
                    <img src={reset} alt="reset" width={35} />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
