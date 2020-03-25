/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : '') + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
              />
            )}
          </a>
          <div>
            <h5>Cursos</h5>
            <a href={this.docUrl('doc1.html', this.props.language)}>
              Git para iniciantes
            </a>
            <a href={this.docUrl('doc2.html', this.props.language)}>
              Linux para iniciantes
            </a>
          </div>
          <div>
            <h5>Redes sociais</h5>
            <a
              href="https://discord.io/he4rt"
              target="_blank"
              rel="noreferrer noopener"
            >
              Discord
            </a>
            <a
              href="https://twitter.com/He4rtDevs"
              target="_blank"
              rel="noreferrer noopener"
            >
              Twitter
            </a>
            <a
              href="https://instagram.com/HeartDevs"
              target="_blank"
              rel="noreferrer noopener"
            >
              Instagram
            </a>
            <a
              href="https://github.com/He4rt"
              target="_blank"
              rel="noreferrer noopener"
            >
              GitHub
            </a>
          </div>
          <div>
            <h5>Outros</h5>
            <a href="https://heartdevs.com">He4rt Developers</a>
            <a href="https://busque.dev/">BusqueDev</a>
          </div>
        </section>

        <a
          href="https://opensource.facebook.com/"
          target="_blank"
          rel="noreferrer noopener"
          className="fbOpenSource"
        >
          <img
            src={`${this.props.config.baseUrl}img/oss_logo.png`}
            alt="Facebook Open Source"
            width="170"
            height="45"
          />
        </a>
        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;
