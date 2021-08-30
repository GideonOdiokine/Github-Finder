import React, { useContext, useEffect } from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import Spinner from "../Layout/Spinner";
import GithubContext from "../../context/github/githubContext";

function User({ match }) {
  const githubContext = useContext(GithubContext);
  const { loading, user, getUser } = githubContext; // eslint-disable-next-line
  // const { login } = useParams();

  useEffect(() => {
    getUser(match.params.login);
    // eslint-disable-next-line
  }, []);

  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    html_url,
    followers,
    following,
    public_repos,
    hireable,
  } = user;

  if (loading) return <Spinner />;
  return (
    <Fragment>
      <Link to="/" className="btn btn-light">
        Back to Search
      </Link>
      Hireable:
      {hireable ? (
        <span role="img" aria-label="emoji">
          ✔
        </span>
      ) : (
        <span role="img" aria-label="emoji">
          🙄
        </span>
      )}
      <div className="card grid-2">
        <div className="all-center">
          <img src={avatar_url} alt="img" />
          <h2>{name}</h2>
          <p>Location: {location}</p>
        </div>
        <div>
          {bio && (
            <Fragment>
              <h3>Bio</h3>
              <p>{bio}</p>
            </Fragment>
          )}
          <a href={html_url} className="btn btn-dark my-1">
            Visit Github Profile
          </a>
          <ul>
            <li>
              {blog && (
                <Fragment>
                  <strong>blog:</strong>
                  <Link> {blog}</Link>
                </Fragment>
              )}
            </li>
          </ul>
        </div>
        <div className="card text-center">
          <div className="bagde badge-primary">Followers: {followers}</div>
          <div className="bagde badge-success">Following: {following}</div>
          <div className="bagde badge-primary">Public Repos{public_repos}</div>
        </div>
      </div>
    </Fragment>
  );
}

export default User;
