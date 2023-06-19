import style from "./quote.module.css";

export default function Quote() {
  return (
    <section className={`inner ${style.quote}`}>
      <div className={`container ${style.quotecont}`}>
        <div className={style.mainHead}>
          <div className={`sec_heading ${style.head}`}>
            <h2>
              Success is not final; failure is not fatal: it is the courage to
              continue that counts.”
            </h2>
            <p className="para">– Winston Churchill</p>
          </div>
        </div>
      </div>
    </section>
  );
}
