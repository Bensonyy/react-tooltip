/**
 * Tip.js
 * @author  yongbing
 * @email   yongbingz@qq.com
 */
import React, { PropTypes } from 'react'
import ReactDOM from 'react-dom'

let tooltip = null, tooltipContent = null;

class Tip extends React.Component{
	constructor(props){
		super(props);
	}

	componentDidMount(){
		tooltip = ReactDOM.findDOMNode(this.refs.tooltip);
		tooltipContent = ReactDOM.findDOMNode(this.refs.tooltipContent);
	}

	shouldComponentUpdate({ visible }){
		return !!(this.props.visible || visible)
	}
	render(){
		let wrapStyle = {};
		let { style={}, visible, wrapClassName, placement, arrow, content} = this.props;
		
		let { zIndex, ...restStyle } = style;
		
		if (zIndex !== undefined) {
			wrapStyle.zIndex = zIndex;
		}

		wrapStyle.display = visible ? 'block':'none';

		let classNames = `rc-tooltip${wrapClassName?' '+wrapClassName:''}`;
		classNames +=` rc-tooltip-placement-${placement}`;


		let domArrow;
		if ( arrow ) {
			domArrow = <div className="rc-tooltip-arrow"><div className="rc-tooltip-arrow-inner"></div></div>
		}
		return(
		      <div key="tooltip" ref="tooltip" className={classNames} style={ wrapStyle }>
		        <div className="rc-tooltip-content" ref="tooltipContent">
		          { domArrow }
		          <div className="rc-tooltip-inner" style={ restStyle }>{ content }</div>
		        </div>
		      </div>
			)
	}
}

Tip.propTypes = {
	visible: PropTypes.bool
}

export { 
	tooltip,
	tooltipContent
 };

export default Tip;