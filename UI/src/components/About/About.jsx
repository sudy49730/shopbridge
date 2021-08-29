import React, { Component } from 'react';
class About extends Component {
    render() {
        return (
            <>
                <div align="center">
                    <img src="https://img.freepik.com/free-vector/developer-activity-concept-illustration_114360-2801.jpg?size=338&ext=jpg"
                        alt="developer" className="ui responsive image" />
                </div>
                <div className="ui green message" align="center">
                    <p>
                        Hello my name is
                        <a style={{ color: 'green' }} href="https://sudy49730.github.io/portfolio/">
                            <b> Sudershan Singh </b>
                        </a>
                        and I'm a full stack MEAN/MERN developer.<br />
                        You can know more about me, visiting my
                        <a style={{ color: 'green' }} href="https://sudy49730.github.io/portfolio/">
                            <b> Portfolio </b>
                        </a>.
                        <br />
                        If you like my work please endorse me on
                        <a style={{ color: '#4183c4' }} href="https://www.linkedin.com/in/sudershan-singh-9a874512a/"><b> LinkedIn</b></a>
                    </p>
                </div>

            </>
        );
    }
}

export default About;