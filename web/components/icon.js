import React from 'react';
import classNames from 'classnames';

export default class Icon extends React.Component {
  render() {
    const myClassName = classNames({
      [`fa fa-${this.props.icon}`]: true,
      'fa-fw': this.props.fixedWidth,
      [this.props.className]: !!this.props.className,
    });
    return <i className={myClassName} />
  }
}

Icon.propTypes = {
  icon: React.PropTypes.string.isRequired,
  fixedWidth: React.PropTypes.bool,
  className: React.PropTypes.string,
};
