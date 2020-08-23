import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Software Engineer Intern at MathWorks <span>June 2019- Decemeber 2019</span></h2>
                        <ul><b>Software Engineer Intern</b>
                           <li>Altered <b>MATLAB</b> test session bucketing algorithm, for optimal utilization of host machines</li>
                           <li>Created visualization using <b>D3.js</b> to detect abnormalities in host allocations across different platforms</li>
                           <li>Optimized SQL queries which resulted in performance improvement by 10%</li>
                           <li>Transformed Perl web services into Java REST APIs with better code organization, optimization, and readability</li>
                        </ul>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Software Engineer at Sapient <span>September 2016 - July 2018</span></h2>
                        <ul><b>Software Engineer</b>
                           <li>Worked on developing an online book Store using <b>Spring MVC</b> and <b>Hibernate</b></li>
                           <li>Developed personalized product suggestion for users using IBM WCS, thereby increasing sales by 6%</li>
                           <li>Revamped <b>REST APIs</b> with third party services to make users more interactive and engaging</li>
                           <li>Handled Data Migration which moved catalog data from remote server location and loads it into WCS system</li>
                        </ul>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Education <span>June 2012- May 2016</span></h2>
                        <p>I have completed my Bachelors in Electrical and Computer engineering  from <b>VIT University</b> with major subjects as Object-oriented programming, Computer organization and architecture, Computer Networks. During my time at school, I have developed interest in solving complex problems using technology which helped me to improve my analytical and problem solving skill.</p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
