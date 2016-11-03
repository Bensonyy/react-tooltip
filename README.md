# react-tooltip
react tooltip component

# Screenshot
![image](https://github.com/yongbingz/react-tooltip/blob/master/demo/screenshot/1.png)

# Usage
Actual directory of tooltip components in the import project, You may use it like this:

```
import Tooltip from '../src/Tooltip'

const style = {
  width: 180
}
<Tooltip 
  style={style}
  placement='bottom'
  content={ <div>实际乘坐：上海航空FM9317<br/>请按实际乘坐航班办理值机。</div> }
>
  <a href="javascript:;">下</a>
</Tooltip>

```

Or

```
import Tooltip from '../src/Tooltip'

<Tooltip 
  placement='bottomLeft'
  content='hello world!'
  arrow = { false }         //不显示箭头
  distance= { 10 }          //tooltip 与触发元素之间的距离
>
  <a href="javascript:;">下左</a>
</Tooltip>

```


# API
Tooltip props
<table>
    <thead>
    <tr>
        <th>name</th>
        <th>type</th>
        <th>default</th>
        <th>description</th>
    </tr>
    </thead>
    <tbody>
        <tr>
          <td>placement</td>
          <td>String</td>
          <td>bottomLeft</td>
          <td>tooltip placement location</td>
        </tr>
        <tr>
          <td>style</td>
          <td>Object</td>
          <td></td>
          <td>tooltip's style, e.g. { zIndex:10000, width:300, height:100 }</td>
        </tr>
        <tr>
          <td>wrapClassName</td>
          <td>String</td>
          <td></td>
          <td>tooltip's wrap custom className</td>
        </tr>
        <tr>
          <td>arrow</td>
          <td>Boolean</td>
          <td>true</td>
          <td>Whether to display tooltip's arrow</td>
        </tr>
         <tr>
          <td>distance</td>
          <td>Number</td>
          <td>5</td>
          <td>The distance between tooltip and the trigger element</td>
        </tr>
        <tr>
          <td>content</td>
          <td>React.element || String</td>
          <td></td>
          <td>Custom tooltip's content </td>
        </tr>
        <tr>
          <td>mouseEnterDelay</td>
          <td>Number</td>
          <td>0</td>
          <td>Delay how many seconds visible</td>
        </tr>
        <tr>
          <td>mouseLeaveDelay</td>
          <td>Number</td>
          <td>0.1</td>
          <td>Delay how many seconds is not visible</td>
        </tr>
    </tbody>
</table>

# Latest version
1.0.0

# License
MIT
