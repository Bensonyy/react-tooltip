/**
 * Placement.js
 * @author  yongbing
 * @email   yongbingz@qq.com
 */
import Base from './Base'

class Placement{
	constructor(opts){
		if (!opts && typeof opts !== 'object') {
	 		return;
		}
		//初始化
		this.triggerEle = opts.triggerEle;
		this.tooltip = opts.tooltip;
		this.placement = opts.placement;
		this.distance = opts.distance;
		this.init();
	}

	init(){
		//触发元素的位置
		this.triggerOffset = typeof (this.getTriggerOffset === 'function') ? this.getTriggerOffset(): this.getTriggerOffset;

		//触发元素的宽高
		this.triggerSize = typeof (this.getTriggerSize === 'function') ? this.getTriggerSize(): this.getTriggerSize;
		
		// tooltip 元素的宽高
		this.tooltipSize = typeof (this.getTooltipSize === 'function') ? this.getTooltipSize(): this.getTooltipSize;

		this.tooltipPlace();
	}

	tooltipPlace(){
		const tooltip = this.tooltip,
			  triggerOffset = this.triggerOffset,
			  triggerSize = this.triggerSize,
			  tooltipSize = this.tooltipSize,
			  placement = Base.trim(this.placement),
			  distance = this.distance;
		let top=0, left=0, right=0, dis = 0;
				
		switch(placement){
			case 'top':
			case 'bottom':
			const tooltipW = tooltipSize.width,
				  triggerW = triggerSize.width;
			
			dis = (triggerW - tooltipW)/2;
			left =  triggerOffset.left + dis;
			tooltip.style.left = `${left}px`;
			break;

			case 'left':
			case 'right':
			const tooltipH = tooltipSize.height,
				  triggerH = triggerSize.height;
			
			dis = (triggerH - tooltipH)/2;
			top =  triggerOffset.top + dis;
			tooltip.style.top = `${top}px`;
			break;

			case 'topLeft':
			case 'bottomLeft':
			tooltip.style.left = `${triggerOffset.left}px`;
			break;

			case 'topRight':
			case 'bottomRight':
			const winSize = Base.getWinSize();
			right = winSize.width-(triggerOffset.left+triggerSize.width);
			tooltip.style.right = `${right}px`;
			break;

			case 'leftTop':
			case 'rightTop':
			tooltip.style.top = `${triggerOffset.top}px`;
			break;

			case 'leftBottom':
			case 'rightBottom':
			top = triggerOffset.top-(tooltipSize.height-triggerSize.height);
			tooltip.style.top = `${top}px`;
			break;

		}

		const _placement = placement.replace(/[A-Z]+/g,'_').split('_')[0];
		switch(_placement){
			case 'bottom':
			top = triggerOffset.top + triggerSize.height + distance;
			tooltip.style.top = `${top}px`;
			break;

			case 'top':
			top = triggerOffset.top - ( tooltipSize.height + distance );
			tooltip.style.top = `${top}px`;
			break;

			case 'right':
			left = triggerOffset.left + triggerSize.width + distance;
			tooltip.style.left = `${left}px`;
			break;

			case 'left':
			left = triggerOffset.left - ( tooltipSize.width + distance );
			tooltip.style.left = `${left}px`;
			break;
		}

	}

	getTriggerOffset(){
		const triggerEle = this.triggerEle;
		let ret = {
			top: triggerEle.offsetTop||0,
			left: triggerEle.offsetLeft||0
		}
		this.getTriggerOffset = ret;
		return ret;
	}
	getTriggerSize(){
		const triggerEle = this.triggerEle;
		let ret = {
			width: triggerEle.offsetWidth,
			height: triggerEle.offsetHeight
		}
		this.getTriggerSize = ret;
		return ret;
	}

	getTooltipSize(){
		const tooltip = this.tooltip;
		let ret = {
			width: tooltip.offsetWidth,
			height: tooltip.offsetHeight
		}
		this.getTooltipSize = ret;
		return ret;
	}

}


export default Placement;