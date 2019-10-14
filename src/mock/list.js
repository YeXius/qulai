import Mock from 'mockjs'

let listDate=Mock.mock({
            "data|10":[
                {
                    "id|+1":1,
                    "title|1":['无线吸尘器','风衣女中长款','智米加湿器 白色'],
                    "price|1":[100,200,300],
                    "color":['红色','蓝色','白色'],
                    "kuCun":[50,60,80],
                    "imgs-show":"@image(200x100,red,'首页图片')",
                    "faHuo-city":"@city(true)",
                    "xiangQing":{
                        "names":"@ctitle(5,10)",
                        "content":"@cparagraph",
                        "images":[
                            "@image(200x100,gray,'详情图片1')",
                            "@image(200x100,gray,'详情图片2')",
                            "@image(200x100,gray,'详情图片3')",
                        ]
                    }
                }
            ]

}) 


export default listDate;