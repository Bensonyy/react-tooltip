/**
 * Tooltip.js
 * @author  yongbing
 * @email   yongbingz@qq.com
 */
import './tooltip.scss'
import React, { PropTypes } from 'react'
import Trigger from './Trigger'

const Tooltip = (props)=>(
		<Trigger { ...props } />
	)


Tooltip.propTypes = {
	style: PropTypes.object,
	wrapClassName: PropTypes.string,
	hoverContent: PropTypes.any.isRequired,
	distance: PropTypes.number,
	arrow: PropTypes.bool
}

Tooltip.defaultProps = {
	mouseEnterDelay: 0,   //延时多少秒可见
	mouseLeaveDelay: 0.1, //延时多少秒不可见
	placement: 'bottomLeft',
	trigger: 'hover',
	hoverContent:'提示内容',
	arrow: true,
	distance: 5   //tooltip 与触发元素之间的距离
}

export default Tooltip;