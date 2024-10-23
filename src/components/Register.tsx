import Link from "next/link";
import React from "react";

const Register = () => {
  return (
    <section className="register">
      <h1>
        Најави се <span>или</span> Регистрирај се
      </h1>
      <button className="google-btn">
        <img src="/google.svg" alt="" />
        Продолжи со Google
      </button>
      <div className="line-container">
        <hr className="line" />
        <span> Или </span>
        <hr className="line" />
      </div>
      <div className="email-login">
        <label className="e-mail-form" htmlFor="email">
          е-маил
        </label>
        <input
          className="e-mail-form"
          type="email"
          placeholder="mhra@primer.com"
        />
        <Link href="/user">
          <button className="email-btn">Продолжи со овој email</button>
        </Link>
        <p className="terms">
          Со кликнување на &apos;Продолжи со Google/Email&apos;, се согласувате
          со нашите <span>Услови на користење</span> и{" "}
          <span>Политика за приватност</span>
        </p>
        <div className="check">
          <input type="checkbox" />
          <label htmlFor="join">Сакам да станам член на МАЧР</label>
        </div>
        <div className="check">
          <input type="checkbox" />
          <label htmlFor="info">
            Сакам редовно да добивам информации на е-маил
          </label>
        </div>
      </div>
    </section>
  );
};

export default Register;
