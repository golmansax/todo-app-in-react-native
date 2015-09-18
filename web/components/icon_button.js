import React from 'react';
import classNames from 'classnames';
import styles from './icon_button.styl';

export default class IconButton extends React.Component {
  render() {
    const myClass = classNames({
      [this.props.className]: !!this.props.className,
      [styles.iconButton]: true,
    });

    return (
      <span {...this.props} className={myClass}>
        <i className={`fa fa-fw fa-${this.props.icon}`} />
      </span>
    );
  }
}

IconButton.propTypes = {
  icon: React.PropTypes.string.isRequired,
  className: React.PropTypes.string,
};
