import React, { PropTypes } from 'react';
import classNames from '../utils/classNames';


const Container = props => <div className={classNames('container')}>{props.children}</div>;

Container.propTypes = {
	children: PropTypes.node
};

export default Container;
