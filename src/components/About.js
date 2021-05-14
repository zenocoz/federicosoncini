import React, { Component } from "react";
import { Icon } from "@iconify/react";
import nodejsIcon from "@iconify/icons-logos/nodejs-icon";
import reactIcon from "@iconify/icons-logos/react";

import mongodbIcon from "@iconify/icons-logos/mongodb";
import profilePic from "../assets/myProfile.jpeg";
class About extends Component {
	render() {
		if (this.props.resumeBasicInfo) {
			var sectionName = this.props.resumeBasicInfo.section_name.about;
			var hello = this.props.resumeBasicInfo.description_header;
			var about = this.props.resumeBasicInfo.description;
		}

		return (
			<section id='about'>
				<div className='col-md-12'>
					<h1 style={{ color: "black" }}>
						<span>{sectionName}</span>
					</h1>
					<div className='row center mx-auto mb-5'>
						<div className='col-md-4 mb-5 center'>
							<div className='polaroid'>
								<span style={{ cursor: "auto" }}>
									<a
										href='https://www.linkedin.com/in/orhanors/'
										target='_blank'>
										<img
											height='150px'
											id='profile-pic'
											src={profilePic}
											alt='Avatar placeholder'
											style={{
												borderRadius: "50%",
												marginLeft: "18%",
												border: "2px solid #E9D5A1",
											}}
										/>
									</a>
									<div className='my-2'>
										<h3>Orhan Örs</h3>
										<p>Life-long learner</p>
									</div>
									<Icon
										icon={nodejsIcon}
										style={{
											fontSize: "400%",
											margin: "9% 5% 0 5%",
										}}
									/>
									<Icon
										icon={reactIcon}
										style={{
											fontSize: "400%",
											margin: "9% 5% 0 5%",
										}}
									/>
									<Icon
										icon={mongodbIcon}
										style={{
											fontSize: "400%",
											margin: "9% 5% 0 5%",
										}}
									/>
								</span>
							</div>
						</div>

						<div className='col-md-8 center'>
							<div className='col-md-10'>
								<div className='card'>
									<div className='card-header'>
										<span
											className='iconify'
											data-icon='emojione:red-circle'
											data-inline='false'></span>{" "}
										&nbsp;{" "}
										<span
											className='iconify'
											data-icon='twemoji:yellow-circle'
											data-inline='false'></span>{" "}
										&nbsp;{" "}
										<span
											className='iconify'
											data-icon='twemoji:green-circle'
											data-inline='false'></span>
									</div>
									<div
										className='card-body font-trebuchet text-justify ml-3 mr-3'
										style={{
											height: "auto",
											fontSize: "132%",
											lineHeight: "200%",
										}}>
										<br />
										<span className='wave'>
											{hello} :){" "}
										</span>
										<br />
										<br />
										{about}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default About;
