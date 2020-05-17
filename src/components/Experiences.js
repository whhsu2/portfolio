import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import harvard from '../assets/harvard.png'
import igem from '../assets/igem.png'
import gaj from '../assets/gaj.png'
import aetna from '../assets/aetna.jpeg'
import nctu from '../assets/NCTU.png'
import CheckBoxIcon from '@material-ui/icons/CheckBox';

const vertical= {
    textAlign: "left"
}

const imgStyle = {
    borderRadius: "50%",
    width: "100%",
    height: "100%",
};

const Experiences = () => {
    return (
        <div className="experience section">
            <div style={{textAlign: "center"}}> 
                <div className="title">Experiences</div>
            </div>

            <VerticalTimeline style={vertical}>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2019.6 - 2019.8"
                    iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fff' }}
                    icon={<img style = {imgStyle} src={aetna} alt="Avatar"/>}
                >
                    <h3 className="vertical-timeline-element-title">Data Engineer</h3>
                    <h4 className="vertical-timeline-element-subtitle">Aetna: Analytic &amp; Behavioral Change</h4>
                    <ul style={{padding: 0}}>
                        <li><CheckBoxIcon className="check"></CheckBoxIcon>Implemented Multi-Armed-Bandit Algorithm to dynamically allocate members to better performing email subject lines.</li>
                        <li><CheckBoxIcon className="check"></CheckBoxIcon>Developed ETL pipelines using Pyspark to transform member data and stored member and system data with Hive and MySQL.</li>
                        <li><CheckBoxIcon className="check"></CheckBoxIcon>Increased cost saving per email of $52 by launching our project into production.</li>
                    </ul>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2018.8 - 2019.12"
                    iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fff' }}
                    icon={<img style = {imgStyle} src={harvard} alt="Avatar"/>}
                >
                    <h3 className="vertical-timeline-element-title">M.S. of Health Data Science</h3>
                    <h4 className="vertical-timeline-element-subtitle">Harvard University</h4>
                    <ul style={{padding: 0}}>
                        <li><CheckBoxIcon className="check"></CheckBoxIcon>Implemented a reinforcement learning agent using OpenAI's Universe and Gym libraries to play an online multi-player game - Slither.io</li>
                        <li><CheckBoxIcon className="check"></CheckBoxIcon>Developed a Python library that can perform automatic differentiation (AD), a computational method for solving derivatives</li>
                        <li><CheckBoxIcon className="check"></CheckBoxIcon>Implemented Convolutional Neural Network(CNN) to classify papsmear results.</li>
                    </ul>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2015.6 - 2017.8"
                    iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fff' }}
                    icon={<img style = {imgStyle} src={gaj} alt="Avatar"/>}
                >
                    <h3 className="vertical-timeline-element-title">Co-Founder</h3>
                    <h4 className="vertical-timeline-element-subtitle">GAJ - We Love NBA</h4>
                    <ul style={{padding: 0}}>
                        <li><CheckBoxIcon className="check"></CheckBoxIcon>Started a basketball Fanpage with my brother that reached 39,000 likes on Facebook.</li>
                        <li><CheckBoxIcon className="check"></CheckBoxIcon>First Taiwanese basketball fanpage to interview an ESPN analyst.</li>
                        <li><CheckBoxIcon className="check"></CheckBoxIcon><div>Distributed our content on Youtube, Podcast, BlogPost. Link to <a href="https://www.facebook.com/GAJWeLoveNBA/?ref=page_internal"> Fanpage</a></div></li>
                    </ul>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2014.9 - 2015.11"
                    iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fff' }}
                    icon={<img style = {imgStyle} src={igem} alt="Avatar"/>}
                >
                    <h3 className="vertical-timeline-element-title">Researcher &amp; Key Presenter</h3>
                    <h4 className="vertical-timeline-element-subtitle">iGEM competition</h4>
                    <ul style={{padding: 0}}>
                        <li><CheckBoxIcon className="check"></CheckBoxIcon><a href="http://2015.igem.org/Team:NCTU_Formosa">Project Website</a></li>
                        <li><CheckBoxIcon className="check"></CheckBoxIcon>Design pre-diagnosis for targeted drug.</li>
                        <li><CheckBoxIcon className="check"></CheckBoxIcon>Improve precision of breast cancer targeted drugs by producing synthesized protien with E.coli as 
                            pre-diagnosis markers.
                        </li>
                    </ul>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2013.9 - 2018.1"
                    iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fff' }}
                    icon={<img style = {imgStyle} src={nctu} alt="Avatar"/>}
                >
                    <h3 className="vertical-timeline-element-title">Honors Program of Nano Science and Engineering</h3>
                    <h4 className="vertical-timeline-element-subtitle">NCTU</h4>
                    <ul style={{padding: 0}}>
                        <li><CheckBoxIcon className="check"></CheckBoxIcon>This program aims to develop interdisciplinary students in biology, materials, electronics and photonics.</li>
                        <li><CheckBoxIcon className="check"></CheckBoxIcon>As an undergrad, I focused on biosensors based on semiconductors.</li>
                    </ul>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>

    )
}

export default Experiences;
