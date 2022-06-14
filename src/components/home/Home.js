import imageMockups from "../../images/image-mockups.png";
import iconOnline from "../../images/icon-online.svg";
import iconBudgeting from "../../images/icon-budgeting.svg";
import iconOnboarding from "../../images/icon-onboarding.svg";
import imageCurrency from "../../images/image-currency.jpg";
import imageRestaurant from "../../images/image-restaurant.jpg";
import imagePlane from "../../images/image-plane.jpg";
import imageConfetti from "../../images/image-confetti.jpg";
import iconApi from "../../images/icon-api.svg";

import "./Home.css";

export default function Home() {
  return (
    <div>
      <div className="home">
        <div className="home-img">
          <img src={imageMockups} alt="mock ups" />
        </div>
        <div className="banking">
          <div className="banking-next">
            <h1>Next generation digital banking</h1>
            <p>
              Take your financial life offline. Your Easybank account will be a
              one-stop-shop for spending, saving,budgeting,investing, and much
              more.
            </p>
            <button>Request Invite</button>
          </div>
        </div>
      </div>
      <div className="why">
        <div className="why-easybank">
          <h2>Why choose Easybank?</h2>
          <p>
            We leverage Open Banking to turn your bank account into your
            financial hub. Control your finances like never before.
          </p>
        </div>
        <div className="services">
          <div className="online-banking">
            <img src={iconOnline} alt="icon online" />
            <h3>Online Banking</h3>
            <p>
              Our modern web and mobile applications allow you to keep track of
              your finances wherever you are in the world.
            </p>
          </div>

          <div className="simple-budgeting">
            <img src={iconBudgeting} alt="icon online" />
            <h3>Simple Budgeting</h3>
            <p>
              See exactly where your money goes each month.Receive notifications
              when you're close to your hitting limits.
            </p>
          </div>

          <div className="fast-onboarding">
            <img src={iconOnboarding} alt="icon online" />
            <h3>Fast Onboarding</h3>
            <p>
              We don't do branches. Open your account in minutes online and
              start taking control of your finances right away
            </p>
          </div>

          <div className="open-api">
            <img src={iconApi} alt="icon online" />
            <h3>Open Api</h3>
            <p>
              Manage your savings, investments, pension, and much more from one
              account. Tracking your money has never been easier.
            </p>
          </div>
        </div>
      </div>
      <div className="articles">
        <h2>Latest Articles</h2>
        <div className="articles-details">
          <div className="currency">
            <img width="100%" src={imageCurrency} alt="dollar" />
            
            <div className="currency-meta">
              <h3>By Claire Robinson</h3>
              <h4>Receive money in any currency with no fees</h4>
              <p>
                The world is getting smaller and we're becoming more mobile. So
                why should you be forced to only receive money in a single...
              </p>
            </div>
          </div>
          <div className="restaurant">
            <img width="100%" src={imageRestaurant} alt="restaurant" />
            <div className="restaurant-meta">
              <h3>By Wilson Hutton</h3>
              <h4>Treat yourself without worrying about money</h4>
              <p>
                Our simple budgeting feature allows you to separate out your
                spending and set realistic limits each month. That means you ...
              </p>
            </div>
          </div>

          <div className="plane">
            <img width="100%" src={imagePlane} alt="plane" />
            <div className="plane-meta">
              <h3>By Wilson Hutton</h3>
              <h4>Take your Easybank card wherever you go</h4>
              <p>
                We want you to enjoy your travels. This is why we don't charge
                any fees on purchases while you're abroad. We'll even show you
                ...
              </p>
            </div>
          </div>

          <div className="confetti">
            <img width="100%" src={imageConfetti} alt="confetti" />
            <div className="confetti-meta">
              <h3>By Claire Robinson</h3>
              <h4>Our invite-only Beta accounts are now live!</h4>
              <p>
                After a lot of hard work br the whole team, we're excited to
                launch our closed beta. It's easy to request an invite through
                the site ...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
