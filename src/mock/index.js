import Mock from 'mockjs'
import List from './list'

Mock.mock('http://www.qulai.com/list','get',List)

export default Mock;

