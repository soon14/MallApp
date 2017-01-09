Page({
  data:{
      curNav:1,
      curIndex:0,
      navLeftItems:[
        {
          "id":1,
          "name":"生活日用",
          picurl:null,
          "children":[
            {
              "id":100,
              "name":"口腔护理",
              picurl:null,
              "children":[
                {
                  "id":10000,
                  "name":"口_A",
                  picurl:"../../images/daily_use.png",
                  "children":null
                },
                {
                  "id":10001,
                  "name":"口_B",
                  picurl:"../../images/a50_30.png",
                  "children":null
                }
              ]
            },
            {
              "id":101,
              "name":"头发护理",
              "picurl":null,
              "children":
              [
                {
                  "id":10100,
                  "name":"头_A",
                  "picurl":"../../images/a50_30.png",
                  "children":null
                },
                {
                  "id":10101,
                  "name":"头_B",
                  "picurl":"../../images/a50_30.png",
                  "children":null
                }
              ]
            }
          ]
        },
        {
          "id":2,
          "name":"进口美食",
          picurl:null,
          "children":[
              {
                "id":200,
                "name":"干果",
                picurl:"../../images/a50_30.png",
                "children":[
                  {
                  "id":10100,
                  "name":"头_B",
                  "picurl":"../../images/a50_30.png",
                  "children":null
                },
                {
                  "id":10101,
                  "name":"头_A",
                  "picurl":"../../images/a50_30.png",
                  "children":null
                }
                ]
              },
              {
                "id":201,
                "name":"奶制品",
                "picurl":null,
                "children":[
                {
                  "id":10100,
                  "name":"头_B",
                  "picurl":"../../images/a50_30.png",
                  "children":null
                },
                {
                  "id":10101,
                  "name":"头_A",
                  "picurl":"../../images/a50_30.png",
                  "children":null
                }
                ]
              }
          ]
        }
      ],
      navRightItems:[
        {
          "id":1,
          "name":"生活日用",
          picurl:null,
          "children":[
            {
              "id":100,
              "name":"口腔护理",
              picurl:null,
              "children":[
                {
                  "id":10000,
                  "name":"口_A",
                  picurl:"../../images/daily_use.png",
                  "children":null
                },
                {
                  "id":10001,
                  "name":"口_B",
                  picurl:"../../images/a50_30.png",
                  "children":null
                }
              ]
            },
            {
              "id":101,
              "name":"头发护理",
              "picurl":null,
              "children":
              [
                {
                  "id":10100,
                  "name":"头_A",
                  "picurl":"../../images/a50_30.png",
                  "children":null
                },
                {
                  "id":10101,
                  "name":"头_B",
                  "picurl":"../../images/a50_30.png",
                  "children":null
                }
              ]
            }
          ]
        },
        {
          "id":2,
          "name":"进口美食",
          picurl:null,
          "children":[
              {
                "id":200,
                "name":"干果",
                picurl:"../../images/a50_30.png",
                "children":[
                  {
                  "id":10100,
                  "name":"头_B",
                  "picurl":"../../images/a50_30.png",
                  "children":null
                },
                {
                  "id":10101,
                  "name":"头_A",
                  "picurl":"../../images/a50_30.png",
                  "children":null
                }
                ]
              },
              {
                "id":201,
                "name":"奶制品",
                "picurl":null,
                "children":[
                {
                  "id":10100,
                  "name":"头_B",
                  "picurl":"../../images/a50_30.png",
                  "children":null
                },
                {
                  "id":10101,
                  "name":"头_A",
                  "picurl":"../../images/a50_30.png",
                  "children":null
                }
                ]
              }
          ]
        }
      ]
  },
   //事件处理函数
    switchRightTab: function(e) {
        let id = e.target.dataset.id,
			index = parseInt(e.target.dataset.index);
		this.setData({
			curNav: id,
			curIndex: index
		})
    }
})