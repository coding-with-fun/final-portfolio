import React from "react";

const Project = ({ data }) => {
    return (
        <div className="project__container">
            <div className="info">
                <div className="header">{data.name}</div>
                <div className="description">{data.description}</div>
            </div>
            <div className="details">
                <div className="languages">
                    {data.languages.map((language) => {
                        return <span key={language}>{language}</span>;
                    })}
                </div>

                <hr />

                <div className="links">
                    <div className="repo_link">
                        <a href={data.git_repo}>
                            <span>
                                <i className="fab fa-github"></i>
                            </span>
                            Repo
                        </a>
                    </div>

                    <div className="clone_link">
                        <a href={data.clone_link}>
                            <span>
                                <i className="fab fa-github"></i>
                            </span>
                            Clone Project
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;