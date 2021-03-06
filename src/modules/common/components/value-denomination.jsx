import React from 'react';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';
import classNames from 'classnames';

import EmDash from 'modules/common/components/em-dash';

const ValueDenomination = p => (
  <span
    className={classNames('value-denomination', p.className, {
      positive: p.formattedValue > 0,
      negative: p.formattedValue < 0
    })}
  >
    {p.prefix && !p.hidePrefix &&
      <span className="prefix">{p.prefix}</span>
    }
    {p.formatted && p.fullPrecision &&
      <span
        className="value pointer"
        data-tip={p.fullPrecision}
        data-event="click focus"
      >
        {p.formatted}
      </span>
    }
    {p.formatted && !p.fullPrecision &&
      <span className="value">{p.formatted}</span>
    }
    {p.denomination && !p.hideDenomination &&
      <span className="denomination">{p.denomination}</span>
    }
    {p.postfix && !p.hidePostfix &&
      <span className="postfix">{p.postfix}</span>
    }
    {!p.value && p.value !== 0 && !p.formatted && p.formatted !== '0' && // null/undefined state handler
      <span className="value" ><EmDash /></span>
    }
    <ReactTooltip type="light" effect="solid" place="top" />
  </span>
);

ValueDenomination.propTypes = {
  className: PropTypes.string,
  value: PropTypes.number,
  formattedValue: PropTypes.number,
  formatted: PropTypes.string,
  fullPrecision: PropTypes.string,
  denomination: PropTypes.string,
  hidePrefix: PropTypes.bool,
  hidePostfix: PropTypes.bool,
  prefix: PropTypes.string,
  postfix: PropTypes.string,
  hideDenomination: PropTypes.bool
};

export default ValueDenomination;
