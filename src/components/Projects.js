import React, { Component } from "react"
import ProjectDetailsModal from "./ProjectDetailsModal"

class Projects extends Component {
  constructor(props) {
    super(props)
    this.state = {
      deps: {},
      detailsModalShow: false,
    }
  }

  render() {
    let detailsModalShow = (data) => {
      this.setState({ detailsModalShow: true, deps: data })
    }

    let detailsModalClose = () => this.setState({ detailsModalShow: false })
    if (this.props.resumeProjects && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.projects
      var projects = this.props.resumeProjects.map(function (projects) {
        return (
          <div
            className="col-sm-12 col-md-6 col-lg-4"
            key={projects.title}
            style={{ cursor: "pointer" }}
          >
            <span className="portfolio-item d-block">
              <div className="foto" onClick={() => detailsModalShow(projects)}>
                <div>
                  <img
                    src={projects.images[0]}
                    alt="projectImages"
                    height="230"
                    style={{
                      marginBottom: 0,
                      paddingBottom: 0,
                      position: "relative",
                    }}
                  />

                  <iframe
                    src="https://www.loom.com/embed/b46de6e7f7ee4fdda97cf72f5f0b088a"
                    frameborder="0"
                    webkitallowfullscreen
                    mozallowfullscreen
                    allowfullscreen
                    // style="position: absolute; top: 0; left: 0; width: 75%; height: 75%;"
                  ></iframe>
                  <span className="project-date">{projects.startDate}</span>
                  <br />
                  <p className="project-title-settings mt-3">
                    {projects.title}
                  </p>
                </div>
              </div>
            </span>
          </div>
        )
      })
    }

    return (
      <section id="portfolio">
        <div className="col-md-12">
          <h1 className="section-title" style={{ color: "black" }}>
            <span>{sectionName}</span>
          </h1>
          <div className="col-md-12 mx-auto">
            <div className="row mx-auto">{projects}</div>
          </div>
          <ProjectDetailsModal
            show={this.state.detailsModalShow}
            onHide={detailsModalClose}
            data={this.state.deps}
          />
        </div>
      </section>
    )
  }
}

export default Projects
