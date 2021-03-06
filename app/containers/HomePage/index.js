/*
 * HomePage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

// Semantic
import { Header } from 'semantic-ui-react';

// Components
import { withAuth } from 'containers/Auth';

/* eslint-disable react/prefer-stateless-function */
class HomePage extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet>
          <title>Administrador | Rutas por Colombia</title>
        </Helmet>
        <Header as="h2">{`¡Bienvenido ${this.props.userData.session.user.name}!`}</Header>
      </div>
    );
  }
}
HomePage.propTypes = {
  userData: PropTypes.object.isRequired,
};

export default withAuth(HomePage);
