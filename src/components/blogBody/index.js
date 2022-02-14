import React from "react";

export default function BlogBodyComponent() {
  return (
    <div class="row justify-content-center">
      <div class="col-lg-2 pr-4 mb-4 col-md-12">
        <div class="sticky-top text-center">
          <div class="text-muted">Share this</div>
        </div>
      </div>
      <div class="col-md-12 col-lg-8">
        <article class="article-post">
          <p>
            Holy grail funding non-disclosure agreement advisor ramen
            bootstrapping ecosystem. Beta crowdfunding iteration assets business
            plan paradigm shift stealth mass market seed money rockstar niche
            market marketing buzz market.
          </p>
          <p>
            Burn rate release facebook termsheet equity technology. Interaction
            design rockstar network effects handshake creative startup direct
            mailing. Technology influencer direct mailing deployment return on
            investment seed round.
          </p>
          <p>
            Termsheet business model canvas user experience churn rate low
            hanging fruit backing iteration buyer seed money. Virality release
            launch party channels validation learning curve paradigm shift
            hypotheses conversion. Stealth leverage freemium venture startup
            business-to-business accelerator market.
          </p>
          <p>
            Freemium non-disclosure agreement lean startup bootstrapping holy
            grail ramen MVP iteration accelerator. Strategy market ramen
            leverage paradigm shift seed round entrepreneur crowdfunding social
            proof angel investor partner network virality.
          </p>
        </article>
        <div
          class="border p-5 bg-lightblue"
          style={{ backgroundColor: "#e8f3ec" }}
        >
          <div class="row justify-content-between">
            <div class="col-md-5 mb-2 mb-md-0">
              <h5 class="font-weight-bold secondfont">Become a member</h5>
              Get the latest news right in your inbox. We never spam!
            </div>
            <div class="col-md-7">
              <div class="row">
                <div class="col-md-12">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter your e-mail address"
                  />
                </div>
                <div class="col-md-12 mt-2">
                  <button type="submit" class="btn btn-success btn-block">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
