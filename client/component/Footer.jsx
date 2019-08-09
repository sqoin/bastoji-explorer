
import Component from '../core/Component';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
import moment from 'moment';

import Icon from './Icon';

import config from '../../config'

/**
 * Will use material icons to render.
 * @param {Object} props The props with the name.
 */
class Footer extends Component {
  static propTypes = {
    coins: PropTypes.array.isRequired,
    txs: PropTypes.array.isRequired,
  };

  render() {
    const coin = this.props.coins && this.props.coins.length ? this.props.coins[0] : { status: 'offline', blocks: 0 };
    const blocks = this.props.txs && this.props.txs.length ? this.props.txs[0].blockHeight : coin.blocks;
    const statusColor = (coin.status && coin.status.toLowerCase() === 'online') ? 'green' : 'red';

    const currentYear = new Date().getFullYear();

    return (
      <div className="footer">
        <div className="footer__block">
          <img className="footer__logo" src="/img/footerlogo.png" />
          <span className="footer__legal">
            <div>Copyright &copy; 2018 - {currentYear} <a href={config.coinDetails.websiteUrl} target="_blank" rel="nofollow noopener">{config.coinDetails.longName}</a></div>

            <div>Bastoji Explorer &copy; 2018 - {currentYear} <a href="https://sqoin.us/coin/" target="_blank" rel="nofollow noopener">Bastoji Cryptocurrency</a></div>
          </span>
        </div>
        <div className="footer__block">
          <div className="footer__data-wrapper">
            <div className="footer__data-block">
              <p className="footer__data-title">Status</p>
              <p>
                <span className={`u__dot u--text-${statusColor}`}>&bull;</span>
                <span>{coin.status}</span>
              </p>
            </div>
            <div className="footer__data-block">
              <p className="footer__data-title">Blocks</p>
              <p><b>{blocks}</b></p>
            </div>
            <div className="footer__data-block">
              <p className="footer__data-title">Time</p>
              <p>{`${moment().utc().format('HH:mm')}  UTC`}</p>
            </div>
          </div>
        </div>
        <div className="footer__block">
          <div className="footer__social-media-wrapper">
            <div className="footer__social-title">Social Media</div>
            <div>
              <a href="https://www.facebook.com/sqoin/" target="_blank" rel="nofollow noopener">
              <Icon name="facebook" className="fab footer__social-media-icon" /> 
              </a>
              <a href="https://www.youtube.com/channel/UCQdDjelQcsXp32bpsupymBw?view_as=subscriber" target="_blank" rel="nofollow noopener">
                <Icon name="youtube" className="fab footer__social-media-icon" />
              </a>
              <a href="https://sqoin.us/coin/mailto:admin@sqoin.us" target="_blank" rel="nofollow noopener">
                <Icon name="google" className="fab footer__social-media-icon" />
              </a>
              <a href="http://linkedin.com/" target="_blank" rel="nofollow noopener">
              <Icon name="linkedin" className="fab footer__social-media-icon" />
              </a>
              <a href="https://github.com/sqoin/" target="_blank" rel="nofollow noopener">
                <Icon name="github" className="fab footer__social-media-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };
};

const mapState = state => ({
  coins: state.coins,
  txs: state.txs,
});

export default connect(mapState)(Footer);
