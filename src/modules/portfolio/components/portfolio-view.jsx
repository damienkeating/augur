import React from 'react';
import PropTypes from 'prop-types';

import MyPositions from 'modules/my-positions/container';
import MyMarkets from 'modules/my-markets/container';
import MyReports from 'modules/my-reports/container';

import { MY_POSITIONS, MY_MARKETS, MY_REPORTS } from 'modules/app/constants/views';

const PortfolioView = p => (
  <section id="portfolio_view" >
    {p.activeView === MY_POSITIONS &&
      <MyPositions />
    }
    {p.activeView === MY_MARKETS &&
      <MyMarkets />
    }
    {p.activeView === MY_REPORTS &&
      <MyReports />
    }
  </section>
);

PortfolioView.propTypes = {
  activeView: PropTypes.string.isRequired
};

export default PortfolioView;
