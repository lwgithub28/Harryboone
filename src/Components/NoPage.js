import React from "react";

const NoPage = () => {
  return (
    <>
      <div className="nopage">
        <section id="container">
          <h1 class="heading"> 404 </h1>
          <h3 class="sub-heading">oops! page not found</h3>
          <article>
            Sorry, the page you're looking for doesn't exits. If you think
            something is broken, report a problem.
          </article>
          <a href="/" target="_blank">
            <button class="btn yellow-btn" type="submit">
              back to home
            </button>
          </a>
        </section>
      </div>
    </>
  );
};

export default NoPage;
