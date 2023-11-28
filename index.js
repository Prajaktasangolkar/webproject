const path=require('path')
const express=require('express');
const app=express();
const port=3000;
const hbs=require('hbs')

const staticPath=path.join( __dirname,'./public')
const templatePath=path.join(__dirname,'./templates/views')
const partialsPath=path.join(__dirname,'./templates/partials')

// built in middleware

// to set the view engine
app.set('view engine','hbs')
app.set('views',templatePath)


hbs.registerPartials(partialsPath);

app.use(express.static(staticPath));
// template engine route
// 1st come 1st serve 1st check hbs then other
// this is dynamic page of viewwill apply for all pages
app.get('/',(req,res)=>{
  res.render('index',{
    channelname:'praju',
  });
});

app.get('/',(req,res)=>{
  res.send('hello ji')
});
 
app.get('/channel',(req,res)=>{
  res.render('channel');
});


app.get('/channel/*',(req,res)=>{
  res.render('404',{
    errorcomment:'oops page not found',
  })
});


app.get('*',(req,res)=>{
  res.render('404',{
    errorcomment:'oops page not found',
  })
});

app.listen(port,(err)=>{
    console.log(`connected ${port}`);
});