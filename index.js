const express = requeire("express")

const aplicativo = express()

app.get ( '/' ,  ( requisição ,  resposta )  =>  {
    resposta . enviar ( "Olá, Mundo!" )
} )

app.listen( 3000 ,  ( )  =>  {
    console . log ( "Servidor rodando na porta 3000!" )
} )