import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import smp from '../assets/smp.jpg'
import igem from '../assets/igem.png'
import gaj from '../assets/gaj.png'
import aetna from '../assets/aetna.jpeg'
import milkjob from '../assets/milkjob.jpg'

const vertical= {
    textAlign: "left"
}

const imgStyle = {
    borderRadius: "50%",
    width: 58,
    height: 58,
};

const Experiences = () => {
    return (
        <div className="experience">
            <div className="title">Experiences</div>
            <VerticalTimeline style={vertical}>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2019.12 - 2020.2"
                    iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fff' }}
                    icon={<img style = {imgStyle} src={milkjob} alt="Avatar"/>}
                >
                    <h3 className="vertical-timeline-element-title">Front End Development &amp; Sales</h3>
                    <h4 className="vertical-timeline-element-subtitle">Milk Job</h4>
                    <p>
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2019.6 - 2019.8"
                    iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fff' }}
                    icon={<img style = {imgStyle} src={aetna} alt="Avatar"/>}
                >
                    <h3 className="vertical-timeline-element-title">Data Engineer</h3>
                    <h4 className="vertical-timeline-element-subtitle">Aetna: Analytic &amp; Behavioral Change</h4>
                    <ul>
                        <li>Implemented Multi-Armed-Bandit Algorithm to dynamically allocate members to better performing email subject lines.</li>
                        <li>Developed ETL pipelines using Pyspark to transform member data and stored member and system data with Hive and MySQL.</li>
                        <li>Increased cost saving per email of $52 by launching our project into production.</li>
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
                    <ul>
                        <li>Started a basketball Fanpage with my brother that reached 39,000 likes on Facebook.</li>
                        <li>First Taiwanese basketball fanpage to interview an ESPN analyst.</li>
                        <li>Wrote basketball blog post and recorded podcast.</li>
                    </ul>

                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2014.9 - 2015.11"
                    iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fff' }}
                    icon={<img style = {imgStyle} src={igem} alt="Avatar"/>}
                >
                    <h3 className="vertical-timeline-element-title">Lab Associate &amp; Key Presenter</h3>
                    <h4 className="vertical-timeline-element-subtitle">iGEM competition</h4>
                    <ul>
                        <li>Topic: Design pre-diagnosis for targeted drug.</li>
                        <li>Research: Synthesize Transmembrane protein + 3 different tumor antibody (anti-HER2, 
                        anti-EGFR, anti-VEGFR) + color protein, and produce the synthesized protein with E.coli. 
                        Used as pre-diagnosis markers for targeted drug. </li>
                    </ul>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2014.7 - 2014.9"
                    iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fff' }}
                    icon={<img style = {imgStyle} src={smp} alt="Avatar"/>}
                >
                    <h3 className="vertical-timeline-element-title">R &amp; D Intern</h3>
                    <h4 className="vertical-timeline-element-subtitle">Simplo Technology</h4>
                    <ul>
                        <li>Simplo currently has the most share of the global market of batteries and they are also the major supplier of Apple.</li>
                        <li>In the R&amp;A (research and assurance) department. I organized and checked battery cells (Used SEM/EDS analysis to analyze the elements on the jelly rolls of the battery).</li>
                        <li>In the R&amp;D (research and development), I designed a circuit board for a lithium battery.</li>
                    </ul>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>

    )
}

export default Experiences;
