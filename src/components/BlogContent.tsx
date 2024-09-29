import { BlogType } from "@/types";
import {
  faLinkedin,
  faSquareFacebook,
  faSquareXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faComment,
  faHeart,
  faThumbsUp,
} from "@fortawesome/free-regular-svg-icons";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { useState } from "react";

interface Props {
  data: BlogType;
}

const BlogContent = ({ data }: Props) => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const handleNavClick = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = 100;
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: sectionTop - offset,
        behavior: "smooth",
      });
      setActiveSection(sectionId);
    }
  };

  const titles = data.titles ?? [];
  const descriptions = data.descriptions ?? [];
  const advices = data.advices ?? [];
  const comments = data.comments ?? [];

  return (
    <section className="blog-content">
      <div className="left-side">
        <div className="start-title" id="start-title">
          <h1>{data.title}</h1>
          <p>{data.description}</p>
        </div>
        {titles.map((title, index) => (
          <div
            className="title-desc-advice"
            key={index}
            id={`section-${index}`}
          >
            <h3>{title}</h3>
            <p>{descriptions[index]}</p>
            {advices[index] && (
              <p>
                <span className="adviceBold">Совет: </span>
                {advices[index]}
              </p>
            )}
          </div>
        ))}
        {data.conclusion && <h3 id="conclusion">Заклучок</h3>}
        <p className="conclusion">{data.conclusion}</p>
        {(data.hearts || data.commentsNo || data.likes) && (
          <div className="impressions">
            <span>
              <FontAwesomeIcon icon={faThumbsUp} />{" "}
              {data.likes ? data.likes : 0}
            </span>

            <span>
              <FontAwesomeIcon icon={faHeart} />
              {data.hearts ? data.hearts : 0}
            </span>
            <span>
              <FontAwesomeIcon icon={faComment} />
              {data.commentsNo ? data.commentsNo : 0}
            </span>
          </div>
        )}
        <div className="like-blog">
          <p>Ти се допаѓа овој блог? Сподели го!</p>
          <div className="icons">
            <Link
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon className="faFacebook" icon={faSquareFacebook} />
            </Link>
            <Link
              href="https://www.x.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faSquareXTwitter} />
            </Link>
            <Link
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </Link>
          </div>
        </div>

        <div className="add-blog">
          <textarea
            name="comment"
            placeholder="Според мене тестовите и проценките можат да бидат од голема помош при проценката на вештините и компетенциите на кандидатите... "
          ></textarea>
          <img src="/images/valentina.jpg" alt="" />
          <div className="icon">
            <FontAwesomeIcon icon={faPaperclip} />
          </div>
          <button>Коментирај</button>
        </div>
        {comments.length > 0 && (
          <h3 id="comments" className="comments-h3">
            Коментари
          </h3>
        )}
        <div className="comments-section">
          {comments.map((comment) => (
            <div key={comment.id} className="comment">
              <div className="comment-header">
                <img src={comment.avatar} alt={comment.author} />
                <div>
                  <h4>{comment.author}</h4>
                  <p> Пред {comment.time} минути</p>
                </div>
              </div>
              <p className="comment-text">{comment.text}</p>
              <div className="comment-actions">
                <span>
                  <FontAwesomeIcon icon={faThumbsUp} /> {comment.likes}
                </span>
                <span>
                  <FontAwesomeIcon icon={faComment} /> {comment.comments}
                </span>
              </div>
              {comment.replies.length > 0 && (
                <div className="replies">
                  {comment.replies.map((reply) => (
                    <div key={reply.id} className="reply">
                      <div className="reply-header">
                        <img src={reply.avatar} alt={reply.author} />
                        <div>
                          <h5>{reply.author}</h5>
                          <p>Пред {reply.time} минути</p>
                        </div>
                      </div>
                      <p>{reply.text}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="right-side">
        <img src={data.authorAvatar} alt="" />
        <h4>
          {data.author}
          <span>
            <Link
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </Link>
          </span>
        </h4>
        <div className="share">
          <p>Сподели со колегите!</p>
          <div className="icons">
            <Link
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon className="faFacebook" icon={faSquareFacebook} />
            </Link>
            <Link
              href="https://www.x.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faSquareXTwitter} />
            </Link>
            <Link
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </Link>
          </div>
        </div>
        <div className="titles">
          <ul className="sticky-list">
            <li
              className={activeSection === "start-title" ? "active" : ""}
              onClick={() => handleNavClick("start-title")}
            >
              Кратка Содржина
            </li>
            {titles.map((title, index) => (
              <li
                key={index}
                className={activeSection === `section-${index}` ? "active" : ""}
                onClick={() => handleNavClick(`section-${index}`)}
              >
                {title}
              </li>
            ))}
            {data.conclusion && (
              <li
                className={activeSection === "conclusion" ? "active" : ""}
                onClick={() => handleNavClick("conclusion")}
              >
                Заклучок
              </li>
            )}
            {comments.length > 0 && (
              <li
                className={activeSection === "comments" ? "active" : ""}
                onClick={() => handleNavClick("comments")}
              >
                Коментари
              </li>
            )}
          </ul>
        </div>
        <img className="dots-blog" src="/images/dots-8.png" alt="" />
      </div>
    </section>
  );
};

export default BlogContent;
