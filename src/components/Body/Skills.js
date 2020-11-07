import React from "react";

const Skills = () => {
    return (
        <div className="skills__container" id="skills">
            <div className="skills__header">
                <div className="header">Skills</div>
            </div>

            <div className="skills__content container">
                <div className="skills_list__container container">
                    <div className="languages__container">
                        <div className="header">
                            <div className="title">Languages</div>
                        </div>
                        <div className="data">
                            <div className="data_item">Python</div>
                            <div className="data_item">HTML</div>
                            <div className="data_item">CSS</div>
                            <div className="data_item">JavaScript</div>
                        </div>
                    </div>

                    <div className="frameworks__container">
                        <div className="header">
                            <div className="title">Frameworks</div>
                        </div>
                        <div className="data">
                            <div className="data_item">React</div>
                            <div className="data_item">Node</div>
                            <div className="data_item">Wordpress</div>
                            <div className="data_item">Django</div>
                        </div>
                    </div>

                    <div className="tools__container">
                        <div className="header">
                            <div className="title">Tools</div>
                        </div>
                        <div className="data">
                            <div className="data_item">Bash</div>
                            <div className="data_item">Git</div>
                            <div className="data_item">Github</div>
                            <div className="data_item">Gitlab</div>
                            <div className="data_item">Bitbucket</div>
                            <div className="data_item">Jira</div>
                            <div className="data_item">Confluence</div>
                        </div>
                    </div>

                    <div className="design__container">
                        <div className="header">
                            <div className="title">Design</div>
                        </div>
                        <div className="data">
                            <div className="data_item">Figma</div>
                            <div className="data_item">Adobe XD</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
