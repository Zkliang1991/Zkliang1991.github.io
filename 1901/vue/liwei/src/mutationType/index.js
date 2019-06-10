
//修改共享状态下的当前路由路由名 ,接受1参数  参数: 路由name
export const CHANGE_FOOTE_SELECT = 'changeFooterSelect'   


//good模块 商品
//该mutation控制搜索界面搜索出来的结果 此方法为异步,需要调actions 使用store.dispatch 接受一个字符串参数
export const CHANGE_SEARCH_RESULT = 'changeSearchResult'   

//判读本次进入是否搜索过
export const CHANGE_SEARCHED_FLAG = 'changeSearchedFlag'

//class模块 分类
//该mutitation改变分类模块顶部的标题
export const CHANGE_CLASS_TITLE = 'changeClassTitle'

//商品模块(获取单个商品的各种基本信息)
export const GET_GOOD_INFO = 'getGoodInfo'

//商品模块(获取单个商品的各种基本信息)
export const GET_GOOD_INFO_XIANG = 'getGoodInfoXiang'



//用户模块
//该mutation用于获取用户购物车的基本信息
export const GET_USER_CAR = 'getUserCar'






