/**
 * Trigger.js
 * @author  yongbing
 * @email   yongbingz@qq.com
 */
import React from 'react'
import ReactDOM from 'react-dom'
import Tip, { tooltip, tooltipContent } from './Tip'
import Placement from './Placement'
import Base from './Base'

class Trigger extends React.Component{
	constructor(props){
		super(props);
		this.doc = document;
		this.triVisible = false;
		this.tipVisible = false;
		this.visible = false;
		this.mouseEnter = this.mouseEnter.bind(this);
		this.mouseLeave = this.mouseLeave.bind(this);
	}
	
	componentDidMount(){
		this.triggerEle = ReactDOM.findDOMNode(this.refs.triggerEle);
	}

	mouseEnter(){
		this.triVisible = true;
		this.tipVisible = true;	
		const that = this;
		const { mouseEnterDelay } = that.props;

		setTimeout(function(){
			that.renderTip();
			that.placement(that.triggerEle, tooltip);

			Base.addEvent(tooltipContent, 'mouseenter', function(){
				that.tipVisible = true;
			});

			Base.addEvent(tooltipContent, 'mouseleave', function(){
				that.triVisible = false;
				that.tipVisible = false;
				that.handlerLeave();
			});

		}, mouseEnterDelay*1000);
	}
	mouseLeave(){
		this.triVisible = false;
		this.tipVisible = false;	
		this.handlerLeave();
	}
	handlerLeave(){
		const that = this;
		const { mouseLeaveDelay } = that.props;
		
		setTimeout(function(){
			that.renderTip();
		}, mouseLeaveDelay*1000);
	}

	placement(triggerEle, tooltip){
		const { placement, distance } = this.props;
		new Placement( { triggerEle, tooltip, placement, distance } );
	}

	renderTip(){
		const doc = this.doc;
		if (!this.wrap) {
			this.wrap = doc.createElement('div');
			doc.getElementsByTagName('body')[0].appendChild(this.wrap);
		}

		let { children, ...restProps } = this.props;

		if (!this.triVisible&&!this.tipVisible) {
			this.visible = false;
		}

		if (this.triVisible&&this.tipVisible) {
			this.visible = true;
		}

		const tip = (
				<Tip {...{ visible:this.visible, ...restProps }} />
			)
		
		ReactDOM.render(tip, this.wrap);
	}

	render(){
		const that = this;
		const children = React.Children.only( this.props.children );
		return(
			    React.cloneElement(children,{
					onMouseEnter: that.mouseEnter,
					onMouseLeave: that.mouseLeave,
					ref: 'triggerEle'
				})
			)
	}
}

export default Trigger;