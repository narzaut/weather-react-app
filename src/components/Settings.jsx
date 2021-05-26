import React, { useState, useContext } from 'react'
import { Menu, Dropdown, Button} from 'antd';
import { SettingOutlined, SearchOutlined, LeftOutlined } from '@ant-design/icons'
import { Typography } from 'antd'
import { GlobalContext } from '../context/GlobalState'
import { useLocation, Link } from 'react-router-dom'
import { useLocalStorage } from '../hooks/useLocalStorage'
const { Paragraph } = Typography;




export const Settings = (props) => {	
	const { scaleState, weatherState } = useContext(GlobalContext)
	const [scale, setScale] = scaleState
	const [weather, setWeather] = weatherState
	const [selectedKey, setSelectedKey] = useLocalStorage('selectedScale', '1')
	const location = useLocation()
	
	const handleSelect = (item) => {
		if (item.key == '1'){
			setScale('°C')
			setSelectedKey('1')
		} else if (item.key == '2'){
			setScale('°F')
			setSelectedKey('2') 
		}
	}

	const handleClick = () => {
		setWeather(undefined)
	}

	const menu = (
		<Menu defaultSelectedKeys={selectedKey} selectable onSelect={handleSelect} theme='dark'>
			<Menu.Item key="1">
				Celsius
			</Menu.Item>
			<Menu.Item key="2">Fahrenheit</Menu.Item>
		</Menu>
	);

	
  return (
    <div className = 'settings' >
		<Link to='/'>
			<Button onClick = {handleClick} icon={<LeftOutlined  style={{ fontSize: '1.8rem' }}/>} type='link' disabled={location.pathname == '/weather' ? false : true}/>
		</Link>
    	<Dropdown.Button shape='circle' icon={<SettingOutlined style={{ fontSize: '1.8rem' }}/>} type='link'  overlay={menu} />
    </div>
  )
}