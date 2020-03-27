/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;

class NotFound extends React.Component {
  render() {
    const { config: siteConfig } = this.props;

    const baseUrl = `${siteConfig.baseUrl}`;

    return (
      <div className="mainContainer">
        <Container padding={['bottom', 'top']}>
          <div className="showcaseSection">
            <div className="prose">
              <h1>Página não encontrada!</h1>
            </div>
            <p>Desculpe! Mas está página não existe :(</p>
            <a href={baseUrl} className="button">
              Voltar para o início
            </a>
          </div>
        </Container>
      </div>
    );
  }
}

module.exports = NotFound;
