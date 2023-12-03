const express = requeire("express")
const  exphbs  =  require ("express-handlebars" )

const aplicativo = express()


app.engine ('handlebars',exphbs.engine)
app.set ('view engine','handlebars')


app.get( '/',(requisicao, resposta )  =>  {
    resposta.render('home')
} )

app.listen( 3000, ()  =>  {
    console.log ("Servidor rodando na porta 3000!")
} )