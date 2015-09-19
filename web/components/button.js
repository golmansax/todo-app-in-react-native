import React from 'react';
import classNames from 'classnames';
import styles from './button.styl';
import { Icon } from './index';

export default class Button extends React.Component {
  render() {
    const myClassName = classNames({
      [this.props.className]: !!this.props.className,
      [styles[this.props.type]]: true,
    });

    return (
      <div {...this.props} className={myClassName}>
        {this._renderIcon()}
        {this.props.children}
      </div>
    );
  }

  _renderIcon() {
    if (!this.props.icon) { return null; }
    return <Icon className={styles.buttonIcon} icon={this.props.icon} />;
  }
}

Button.defaultProps = { type: 'main' };
Button.propTypes = {
  type: React.PropTypes.oneOf('main', 'outline'),
  children: React.PropTypes.oneOfType([
    React.PropTypes.element,
    React.PropTypes.arrayOf(React.PropTypes.element),
  ]),
  icon: React.PropTypes.string,
  className: React.PropTypes.string,
};
