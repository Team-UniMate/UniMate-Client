import React from "react";
import Router from "next/router";
import { useRouter } from "next/router";
import Chat from "./chat";
const sample = () => {
  const router = useRouter();
  return (
    <section className="page-wrapper">
      <div className="mobile-view-wrapper">
        <div className="sub-header-container">
          <div className="left" onClick={() => Router.back()}>
            <img className="btn-back" src="/images/layout/back_btn.svg" />
          </div>
          <div className="center">메시지</div>
          <div className="right">
            <img
              className="btn-close"
              src="/images/layout/close_btn.svg"
              onClick={() => Router.push("/")}
            />
          </div>
        </div>
        <Chat user_idx={router.query.user_idx} router={router} />
      </div>
    </section>
  );
};

export default sample;
