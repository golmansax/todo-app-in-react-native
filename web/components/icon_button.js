import React from 'react';
import classNames from 'classnames';
import styles from './icon_button.styl';
import { Icon } from './index';

export default class IconButton extends React.Component {
  render() {
    const myClassName = classNames({
      [this.props.className]: !!this.props.className,
      [styles.iconButton]: true,
    });

    return (
      <span {...this.props} className={myClassName}>
        <Icon {...this.props} fixedWidth />
      </span>
    );
  }
}

IconButton.propTypes = {
  icon: React.PropTypes.string.isRequired,
  className: React.PropTypes.string,
};
