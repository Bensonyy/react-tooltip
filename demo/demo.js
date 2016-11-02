/**
 * demo 如何使用 react-tooltip
 * @author  yongbing
 * @email   yongbingz@qq.com
 */
import React from 'react'
import ReactDOM from 'react-dom'
import './demo.scss'
import Tooltip from '../src/Tooltip'


const text = <span>提示文字</span>;

class Demo extends React.Component{
	render(){
		let tooltip;
		const style = {
			width: 170
		}
		const content = <div>实际乘坐：上海航空FM9317<br/>请按实际乘坐航班办理值机。</div>;
		//const content = '实际乘坐：上海航空FM9317';
		tooltip = (
		 <div>

		 	{/*上*/}
		 	<div>
				<Tooltip 
						style={style}
						placement='top'
						content={content}
					>
					<a href="javascript:;">上</a>
				</Tooltip>
				<Tooltip 
						style={style}
						placement='topLeft'
						content={content}
					>
					<a href="javascript:;">上左</a>
				</Tooltip>
				<Tooltip 
						style={style}
						placement='topRight'
						content={content}
					>
					<a href="javascript:;">上右</a>
				</Tooltip>
			</div>

		 	{/*下*/}
		 	<div>
				<Tooltip 
						style={style}
						placement='bottom'
						content={content}
					>
					<a href="javascript:;">下</a>
				</Tooltip>
				<Tooltip 
						style={style}
						placement='bottomLeft'
						content={content}
					>
					<a href="javascript:;">下左</a>
				</Tooltip>
				<Tooltip 
						style={style}
						placement='bottomRight'
						content={content}
					>
					<a href="javascript:;">下右</a>
				</Tooltip>
			</div>

		</div>
		);
		return(
				<div>
					<div className="demo">
						<h1>基础组件tooltip</h1>
						{tooltip}
					</div>
				</div>
			)
	}
}

ReactDOM.render(
		<Demo />,
		document.getElementById('J_rc')
	);
