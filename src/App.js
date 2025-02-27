import React from 'react';
import './App.css';
import { dummyTweets } from './static/dummyData';
// ! 위 코드는 수정하지 않습니다.
console.log(dummyTweets); // 개발 단계에서 사용하는 더미 데이터입니다.

const Sidebar = () => {
  return (
    <section className="sidebar">
      <i className="far fa-comment-dots"></i>
    </section>
  );
};

const Counter = () => {
  return (
    <div className="tweetForm__input">
      <div className="tweetForm__inputWrapper">
        <div className="tweetForm__count" role="status">
          Total {dummyTweets.length} Tweets
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return <div>
    <footer className="footer">
    </footer>
  </div>;
};
// TODO : Footer 함수 컴포넌트를 작성합니다. 시멘틱 엘리먼트 footer가 포함되어야 합니다.

const Tweets = () => {
  return (
    <ul className="tweets">
      {dummyTweets.map((tweet) => {
        return (
          <li className="tweet" key={tweet.id}>
            <div className="tweet__profile">

              <img src={tweet.picture} />
            </div>
            <div className="tweet__content">
              {/* // TODO : 유져 이름이 있어야 합니다. // */}

              <div
                className={`tweet__username ${tweet.username === 'Bob' ? 'tweet__username--purple' : ''}`}
              >
                {tweet.username}
              </div>

              {/* /* TODO : 트윗 생성 일자가 있어야 합니다. */}
              <div className="tweet__createdAt">{tweet.createdAt}</div>

              <div className="tweet__message">{tweet.content}</div>

            </div>
          </li>
        );
      })}
    </ul>
  );
};

// TODO : Footer 컴포넌트를 작성합니다.

const Features = () => {
  return (
    <section className="features">
      <div className="tweetForm__container">
        <div className="tweetForm__wrapper">
          <div className="tweetForm__profile"></div>
          <Counter />
          <Footer />
        </div>
      </div>
      <Tweets />
    </section>
  );
};

const App = () => {
  return (
    <div className="App">
      <main>
        <Sidebar />
        <Features />
      </main>
      <Footer />
    </div>

  );
};

// ! 아래 코드는 수정하지 않습니다.
export { App, Sidebar, Counter, Tweets, Features, Footer };
