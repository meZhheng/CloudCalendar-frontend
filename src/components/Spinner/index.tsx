import { Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />

const SpinLoading = () => <Spin indicator={antIcon} className='loading' />

export default SpinLoading