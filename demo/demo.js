/**
 * demo 如何使用 react-dialog
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
			
		}
		tooltip = (
		 <div>
		 	{/*上*/}
		 	<div>
				<Tooltip 
						style={style}
						placement='top'
						content={ <div>实际乘坐：上海航空FM9317<br/>请按实际乘坐航班办理值机。</div> }
					>
					<a href="javascript:;">上</a>
				</Tooltip>
				<Tooltip 
						style={style}
						placement='topLeft'
						content={ <div>实际乘坐：上海航空FM9317<br/>请按实际乘坐航班办理值机。</div> }
					>
					<a href="javascript:;">上左</a>
				</Tooltip>
				<Tooltip 
						style={style}
						placement='topRight'
						content={ <div>实际乘坐：上海航空FM9317<br/>请按实际乘坐航班办理值机。</div> }
					>
					<a href="javascript:;">上右</a>
				</Tooltip>
			</div>

			{/*下*/}
			<div>
				<Tooltip 
					style={style}
					placement='bottom'
					content={ <div>实际乘坐：上海航空FM9317<br/>请按实际乘坐航班办理值机。</div> }
				>
					<a href="javascript:;">下</a>
				</Tooltip>
				<Tooltip 
					style={style}
					placement='bottomLeft'
					content={ <div>实际乘坐：上海航空FM9317<br/>请按实际乘坐航班办理值机。</div> }
				>
					<a href="javascript:;">下左</a>
				</Tooltip>
				<Tooltip 
					style={style}
					placement='bottomRight'
					content={ <div>实际乘坐：上海航空FM9317<br/>请按实际乘坐航班办理值机。</div> }
				>
					<a href="javascript:;">下右</a>
				</Tooltip>
			</div>

			{/*左*/}
			<div>
				<Tooltip 
					style={style}
					placement='left'
					content={ <div>实际乘坐：上海航空FM9317<br/>请按实际乘坐航班办理值机。</div> }
				>
					<a href="javascript:;">左</a>
				</Tooltip>
				<Tooltip 
					style={style}
					placement='leftTop'
					content={ <div>实际乘坐：上海航空FM9317<br/>请按实际乘坐航班办理值机。</div> }
				>
					<a href="javascript:;">左上</a>
				</Tooltip>
				<Tooltip 
					style={style}
					placement='leftBottom'
					content={ <div>实际乘坐：上海航空FM9317<br/>请按实际乘坐航班办理值机。</div> }
				>
					<a href="javascript:;">左下</a>
				</Tooltip>
			</div>

			{/*右*/}
			<div>
				<Tooltip 
					style={style}
					placement='right'
					content={ <div>实际乘坐：上海航空FM9317<br/>请按实际乘坐航班办理值机。</div> }
				>
					<a href="javascript:;">右</a>
				</Tooltip>
				<Tooltip 
					style={style}
					placement='rightTop'
					content={ <div>实际乘坐：上海航空FM9317<br/>请按实际乘坐航班办理值机。</div> }
					arrow = {false}
					distance= { 10 }
				>
					<a href="javascript:;">右上</a>
				</Tooltip>
				<Tooltip 
					style={style}
					placement='rightBottom'
					content={ <div>实际乘坐：上海航空FM9317<br/>请按实际乘坐航班办理值机。</div> }
				>
					<a href="javascript:;">右下</a>
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
