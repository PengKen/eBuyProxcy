module.exports = function (app) {
  app.post('/api/v1/eBuy/battle',function (req,res,next) {
    console.log(req)

    res.send("123")
  })
  app.get('/haha',function (req,res) {
    console.log("haha")
    res.send("ahahah")
  })
  app.get('/api/v1/eBuy/boardList',function (req,res,next) {
    throw  Error("chucuole")
    console.log(req)
    res.send([
      {
        name:"Candy",
        winRate:0.6123,
        userId:'12333124123',
        challengeState:'playing',
        portrait:"http://localhost:3000/static/img/6d21c5fa5f66f8f31469320ec1123458.jpeg",
        honor:{url:'',title:''}
      },
      {
        name:"Ken",
        winRate:0.721,
        userId:'12312123123',
        challengeState:'playing',
        portrait:"http://localhost:3000/static/img/6d21c5fa5f66f8f31469320ec1123458.jpeg",
        honor:{url:'',title:''}
      },
      {
        name:"Cici",
        winRate:0.74123,
        userId:'12123123124123',
        challengeState:'playing',
        portrait:"http://localhost:3000/static/img/6d21c5fa5f66f8f31469320ec1123458.jpeg",
        honor:{url:'',title:''}
      },
      {
        name:"Cherry",
        winRate:0.6123,
        userId:'123123124123',
        challengeState:'nothing',
        portrait:"http://localhost:3000/static/img/6d21c5fa5f66f8f31469320ec1123458.jpeg",
        honor:{url:'',title:''}
      },
      {
        name:"Candy",
        winRate:0.3123,
        userId:'12333124123',
        challengeState:'playing',
        portrait:"http://localhost:3000/static/img/6d21c5fa5f66f8f31469320ec1123458.jpeg",
        honor:{url:'',title:''}
      },
      {
        name:"Ken",
        winRate:0.721,
        userId:'12312123123',
        challengeState:'playing',
        portrait:"http://localhost:3000/static/img/6d21c5fa5f66f8f31469320ec1123458.jpeg",
        honor:{url:'',title:''}
      },
      { 
        name:"Cici",
        winRate:0.74123,
        userId:'12123123124123',
        challengeState:'playing',
        portrait:"http://localhost:3000/static/img/6d21c5fa5f66f8f31469320ec1123458.jpeg",
        honor:{url:'',title:''}
      },
      {
        name:"Cherry",
        winRate:0.6123,
        userId:'123123124123',
        challengeState:'nothing',
        portrait:"http://localhost:3000/static/img/6d21c5fa5f66f8f31469320ec1123458.jpeg",
        honor:{url:'',title:''}
      }

    ])
  })
  app.get('/api/v1/eBuy/userInfo/:id',function (req,res,next) {
    res.send({
      userId: 1,
      name: "投资家",
      portrait: "http://http://localhost:3000/static/img/6d21c5fa5f66f8f31469320ec1123458.jpeg",
      honor:{url:'',title:''},
      winRate: 0.8,
      records: [
        {
          founderName:"我是长长的用户名hhhhhhhhhhhhhhhhhh",
          inviteeName:"userB",
          founderPortrait:"/static/img/5f236c10dc4d2e83d386048aedf9e50c.jpg",
          inviteePortrait:"/static/img/5f236c10dc4d2e83d386048aedf9e50c.jpg",
          founderHonor:{ url:'/static/icon-img/honor-初出茅庐.png',title:'初出茅庐' },
          inviteeHonor:{ url:'/static/icon-img/honor-初出茅庐.png',title:'初出茅庐' },
          founderCardId:"",
          inviteeCardId:"",
          startTime:"2018-07-20",
          endTime:"2018-07-25",
          initialMoney:"10000",
          founderBalance:"30000",
          inviteeBalance:"2000",
          founderRate:1.1,
          inviteeRate:1.2,
        },
        {
          founderName:"userA",
          inviteeName:"userB",
          founderPortrait:"/static/img/5f236c10dc4d2e83d386048aedf9e50c.jpg",
          inviteePortrait:"/static/img/5f236c10dc4d2e83d386048aedf9e50c.jpg",
          founderHonor:{ url:'/static/icon-img/honor-初出茅庐.png',title:'初出茅庐' },
          inviteeHonor:{ url:'/static/icon-img/honor-初出茅庐.png',title:'初出茅庐' },
          founderCardId:"",
          inviteeCardId:"",
          startTime:"2018-07-20",
          endTime:"2018-07-29",
          initialMoney:"",
          founderBalance:"",
          inviteeBalance:"",
          founderRate:1.1,
          inviteeRate:1.0,
        },
        {
          founderName:"userA",
          inviteeName:"userB",
          founderPortrait:"/static/img/5f236c10dc4d2e83d386048aedf9e50c.jpg",
          inviteePortrait:"/static/img/5f236c10dc4d2e83d386048aedf9e50c.jpg",
          founderHonor:{ url:'/static/icon-img/honor-初出茅庐.png',title:'初出茅庐' },
          inviteeHonor:{ url:'/static/icon-img/honor-初出茅庐.png',title:'初出茅庐' },
          founderCardId:"",
          inviteeCardId:"",
          startTime:"2018-07-20",
          endTime:"2018-07-25",
          initialMoney:"",
          founderBalance:"",
          inviteeBalance:"",
          founderRate:1.1,
          inviteeRate:1.2,
        },
        {
          founderName:"userA",
          inviteeName:"userB",
          founderPortrait:"/static/img/5f236c10dc4d2e83d386048aedf9e50c.jpg",
          inviteePortrait:"/static/img/5f236c10dc4d2e83d386048aedf9e50c.jpg",
          founderHonor:{ url:'/static/icon-img/honor-初出茅庐.png',title:'初出茅庐' },
          inviteeHonor:{ url:'/static/icon-img/honor-初出茅庐.png',title:'初出茅庐' },
          founderCardId:"",
          inviteeCardId:"",
          startTime:"",
          endTime:"",
          initialMoney:"",
          founderBalance:"",
          inviteeBalance:"",
          founderRate:1.1,
          inviteeRate:1.2,
        },
        {
          founderName:"我是长长的用户名hhhhhhhhhhhhhhhhhh",
          inviteeName:"userB",
          founderPortrait:"/static/img/5f236c10dc4d2e83d386048aedf9e50c.jpg",
          inviteePortrait:"/static/img/5f236c10dc4d2e83d386048aedf9e50c.jpg",
          founderHonor:{ url:'/static/icon-img/honor-初出茅庐.png',title:'初出茅庐' },
          inviteeHonor:{ url:'/static/icon-img/honor-初出茅庐.png',title:'初出茅庐' },
          founderCardId:"",
          inviteeCardId:"",
          startTime:"2018-07-20",
          endTime:"2018-07-25",
          initialMoney:"",
          founderBalance:"",
          inviteeBalance:"",
          founderRate:1.1,
          inviteeRate:1.2,
        },
        {
          founderName:"userA",
          inviteeName:"userB",
          founderPortrait:"/static/img/5f236c10dc4d2e83d386048aedf9e50c.jpg",
          inviteePortrait:"/static/img/5f236c10dc4d2e83d386048aedf9e50c.jpg",
          founderHonor:{ url:'/static/icon-img/honor-初出茅庐.png',title:'初出茅庐' },
          inviteeHonor:{ url:'/static/icon-img/honor-初出茅庐.png',title:'初出茅庐' },
          founderCardId:"",
          inviteeCardId:"",
          startTime:"2018-07-20",
          endTime:"2018-07-25",
          initialMoney:"",
          founderBalance:"",
          inviteeBalance:"",
          founderRate:1.1,
          inviteeRate:1.0,
        },
        {
          founderName:"userA",
          inviteeName:"userB",
          founderPortrait:"/static/img/5f236c10dc4d2e83d386048aedf9e50c.jpg",
          inviteePortrait:"/static/img/5f236c10dc4d2e83d386048aedf9e50c.jpg",
          founderHonor:"",
          founderHonor:{ url:'/static/icon-img/honor-初出茅庐.png',title:'初出茅庐' },
          inviteeHonor:{ url:'/static/icon-img/honor-初出茅庐.png',title:'初出茅庐' },
          inviteeCardId:"",
          startTime:"2018-07-20",
          endTime:"2018-07-25",
          initialMoney:"",
          founderBalance:"",
          inviteeBalance:"",
          founderRate:1.1,
          inviteeRate:1.2,
        },
        {
          founderName:"userA",
          inviteeName:"userB",
          founderPortrait:"/static/img/5f236c10dc4d2e83d386048aedf9e50c.jpg",
          inviteePortrait:"/static/img/5f236c10dc4d2e83d386048aedf9e50c.jpg",
          founderHonor:{ url:'/static/icon-img/honor-初出茅庐.png',title:'初出茅庐' },
          inviteeHonor:{ url:'/static/icon-img/honor-初出茅庐.png',title:'初出茅庐' },
          founderCardId:"",
          inviteeCardId:"",
          startTime:"",
          endTime:"",
          initialMoney:"",
          founderBalance:"",
          inviteeBalance:"",
          founderRate:1.1,
          inviteeRate:1.2,
        }
      ]



    })
  })
}