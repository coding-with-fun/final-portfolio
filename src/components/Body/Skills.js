import React from "react";

const Skills = () => {
    return (
        <div className="skills__container" id="skills">
            <div className="skills__header">
                <div className="header">Skills</div>
            </div>

            <div className="skills__content container">
                <div className="skills_list__container container">
                    <div className="card languages__container">
                        <div class="card-header ">Languages</div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Python</li>
                            <li class="list-group-item">HTML</li>
                            <li class="list-group-item">CSS</li>
                            <li class="list-group-item">JavaScript</li>
                        </ul>
                    </div>

                    <div className="card frameworks__container">
                        <div class="card-header ">Frameworks</div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ReactJS</li>
                            <li class="list-group-item">NodeJS</li>
                            <li class="list-group-item">ExpressJS</li>
                            <li class="list-group-item">Django</li>
                        </ul>
                    </div>

                    <div className="card tools__container">
                        <div class="card-header ">Tools</div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Bash</li>
                            <li class="list-group-item">Git</li>
                            <li class="list-group-item">Github</li>
                            <li class="list-group-item">Gitlab</li>
                            <li class="list-group-item">Bitbucket</li>
                            <li class="list-group-item">Jira</li>
                            <li class="list-group-item">Confluence</li>
                        </ul>
                    </div>

                    <div className="card design__container">
                        <div class="card-header ">Design</div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Figma</li>
                            <li class="list-group-item">Adobe XD</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
