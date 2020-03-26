/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const courses = [
  {
    title: 'Git para iniciantes',
    content: 'Tutorial de Git para iniciantes em programação.',
    image: `https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png`,
    imageAlign: 'top',
    href: 'git-para-iniciantes',
    finished: true
  },
  {
    title: 'Linux para iniciantes',
    content: 'Tutorial de Linux para iniciantes em programação.',
    image: `https://cdn.svgporn.com/logos/linux-tux.svg`,
    href: 'courses/linux-para-iniciantes/introducao',
    imageAlign: 'top',
    finished: true
  },
  {
    title: 'C++ para iniciantes',
    content: 'Tutorial de C++ para iniciantes em programação.',
    image: `https://cdn.svgporn.com/logos/c-plusplus.svg`,
    imageAlign: 'top',
    href: 'git-para-iniciantes',
    finished: true
  },
  {
    title: 'PHP para iniciantes',
    content: 'Tutorial de PHP para iniciantes em programação.',
    image: `https://cdn.svgporn.com/logos/php.svg`,
    imageAlign: 'top',
    href: '#',
    finished: false
  }
];

class HomeSplash extends React.Component {
  render() {
    const { siteConfig, language = '' } = this.props;
    const { baseUrl, docsUrl } = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = props => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = props => (
      <h2 className="projectTitle">
        {props.title}
        <small>{props.tagline}</small>
      </h2>
    );

    return (
      <SplashContainer>
        <div className="inner">
          <ProjectTitle title={siteConfig.title} />
          <div className="courses">
            {courses.map(c => (
              <a
                key={c.href}
                className={!c.finished ? 'course soon' : 'course'}
                href={c.href}
              >
                <img src={c.image} width="120px" />
                <h3>{c.title}</h3>
                <p>{c.content}</p>
                {!c.finished && <span>Em breve</span>}
              </a>
            ))}
          </div>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const { config: siteConfig, language = '' } = this.props;
    const { baseUrl } = siteConfig;

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
      </div>
    );
  }
}

module.exports = Index;
