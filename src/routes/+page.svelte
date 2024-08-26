



  <header class="encabezado">
    <nav class="menu">
        <div>
            <img src="https://res.cloudinary.com/dapvpqxhz/image/upload/v1724702751/miproyecto/boc1vxlyzijxtnr2foel.png" alt="logo" class="logo">
        </div>

        <div class="barra">
            <ul class="menu-horizontal">
                <li><a href="#">Inicio</a></li>
                <li>
                    <a href="esole.html">inscripción</a>
                    <ul class="menu-vertical">
                        <li><a href="https://forms.gle/qYtmYsHZeRb7onz68">Formulario</a></li>
                    </ul>
                </li>
                    <li><a href="Inicia_sesión.html">Inicia sesión</a></li>
                    <li><a href= "quejas.html">Quejas</a></li>
            </ul>
        </div>
    </nav>
<br>
<br>
    <div class="header-contenido container">
        <div class="header-txt">
            <h1>REFRIGERIOS LOLA</h1>
            <p>(RL)</p>
        </div>
    </div>
  </header>
  <br>
  <br>
   <section class="contenido1">
    <h1 >¡Bienvenidos a Refrigerios Lola! </h1>
    <br>
    <p><b>Aquí podras ver qué alimentos entregan en la institución Lola Gonzalez. Esto es con el fin de
        que sepas cuál de los dos refirgerios escoger, si complemento o vaso de leche.
    </b></p> 
    <br>
    <br>
    
    <h3>  A continuación te mostraremos los dos tipos de alimentos que entregan para que te decidas 
        por el que maaaas te im-pac-tó.
    </h3>
    <br>
    <h3> (Recuerda que solo se escoge uno :(...)</h3>
    <br>
        </section>
        <section class="contenido2">
        <h2>Vaso de leche</h2>
        <p>imagen...</p>
        <p>Bienvenidos al vaso de leche, 
            en este lugar lo que buscamos es darle un 
            alimento ligero a los estudiantes con el cual 
            se sientan a gusto, en este lugar obtienen 
            bebidas lácteas variadas, tambien hay frutas, 
            y comidas como panes que ayudan a un balance 
            en el alimento de los estudiantes blablablablablablabla
            bla bla blaaaaaaaaaaaaaaaaaaaaa...

        </p>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Et eveniet numquam perferendis, possimus nobis soluta, eligendi 
        veritatis fugit sed libero eos, vel recusandae
        molestiae corrupti? Iste delectus repellat quod nulla?
        </p>
        <a href="Vaso_de_leche.html" class="btn-1">¿Qué es?</a>
        </section>
        <br>
        <br>
        <section class="contenido2">
            <h2>complemento</h2>
            <p>En el complemento preparado 
                los estudiantes obtienen comidas balanceadas
                 para el desarrollo de los estudiantes a lo 
                 largo de su etapa estudiantil, en este lugar,
                  se les da una comida balanceada en 
                  azucares, y calorias, todo para cuidar 
                  a los estudiantes bla bla bla bla blaaaaaaaaaaaaaaaaaaaaaaa...

            </p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Commodi in molestiae cupiditate quam provident, dolor 
                illum facere, suscipit minus quae repellendus autem odit 
                magni recusandae earum, laudantium vel aliquam aliquid.
                </p>
                <a href="Complemento.html" class="btn-1">¿Qué es?</a>
        </section>
        <br>
        
        <footer class="pie_de_pagina">
            <div class="container">
                <div class="footer-link">
                    <div class="img">
                        <img src="im/RL.png" alt="logo" class="logoa">
                        <img src="https://res.cloudinary.com/dapvpqxhz/image/upload/v1724702846/miproyecto/k123hi9vn2o4ns9jevqt.jpg" alt="lola" class="lola">
                    </div>
                    <div class="link">
                        <h4>Compañía</h4> 
                        <ul>
                            <li><a href="#">señor1</a></li>
                            <li><a href="#">señor2</a></li>
                            <li><a href="#">señora3</a></li>
                            
                        </ul>
                    </div>
                    <div class="link">
                        <h4>Compañía</h4> 
                        <ul>
                            <li><a href="#">señor4</a></li>
                            <li><a href="#">señor5</a></li>
                        </ul>
                    </div>
                    <div class="link">
                        <h4>Queja</h4>
                        <ul>
                            <li><a href="#">Inquietudes</a></li>
                        </ul>
                    </div>
                </div>
            
            </div>   
        </footer>



<style>
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style: none;
        
    } 
    
    .cuerpo{
        font-family: 'Franklin Gothic Book'; 
        background-color: rgb(228, 233, 183);
    }
    
    .encabezado
    {
        background-image: linear-gradient(rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.5) ), 
        url(https://res.cloudinary.com/dapvpqxhz/image/upload/v1724703252/miproyecto/ecswdprmp2m68dgjvzsx.jpg);
        min-height: 55vh;
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        display: flex;
        align-items: center;
    }
    .encabezado .menu{
        position:absolute;
        top:0;
        left: 0;
        right:0 ;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .encabezado .menu{
        display:flex;
        justify-content: space-around;
    }
    
    .encabezado .logo{
        width: 95px;
        border-radius: 60% ;
        position: relative;
        font-size: 25px;
    }
    
    .encabezado .menu .menu-horizontal{
        display: flex;
        justify-content: space-between;
    }
    
    .encabezado a{
        font-size: 20px;
        color: white;
        padding: 12px 20px;
        display: block;
    }
    
    .encabezado li:hover{
        background: rgb(0, 41, 80);
    }
    
    .encabezado .menu-vertical{
        position: absolute;
        display: none;
        width: 200px;
        background-color: rgb(107, 107, 104);
    }
    
    .encabezado .menu-horizontal li:hover .menu-vertical{
        display:block;
    }
    
    .header-txt{
        width:40% ;
        margin-top: 130px;
        margin-left: 220px ;
        font-family: Franklin Gothic Book;
    }
    .header-txt h1{
        font-size: 40px;
        line-height: 46px;
        color: rgb(255, 255, 255);
        margin-bottom: 12px;
    }
    .header-txt p{
        font-size: 20px;
        color: rgb(243, 247, 59);
        margin-bottom: 15px;
    }
    
    .contenido1{
        text-align: left;
        margin: 25px 25px ;
       
    }
    .contenido1 h1
    {
        font-size: 32px;
        font-family: Malgun Gothic;
        color: rgb(0, 0, 0);
       text-transform: uppercase;
       padding: 12px 20px;
       text-align: center;
    }
    .contenido1 p
    {
        font-size: 32px;
        font-family: Malgun Gothic;
        color: rgb(0, 0, 0);
        text-transform: uppercase;
        padding: 12px 200px;
        text-align: center;
    }
    
    .contenido1 h3 
    {
        font-size: 30px;
        font-family: 'Times New Roman', Times, serif;
        color: rgba(12, 88, 5, 0.897);
        text-align: center;
        margin: 10px 90px;
    }
    
    .contenido1 p{
        font-size: 18px;
        color: black;
    }
    
    .contenido2{
        text-align: center;
        margin: 15px;
    }
    
    .contenido2 h2{
        color: black;
        font-size: 30px;
       text-transform: uppercase;
       margin: 35px;
    }
    
    .contenido2 p{
        font-size: 34;
        margin: 20px 350px;
        margin-bottom: 35px;
    }
    
    .btn-1{
        display: inline-block;
        padding: 15px 35px;
        background-color: #610909;
        color: bisque;
    }
    
    
    .pie_de_pagina {
       background-color: rgb(39, 82, 45);
        
    }
    
    .pie_de_pagina .img{
        text-align: center;
    }
    
    .pie_de_pagina img{
      
        margin-bottom: 10px;
    }
    
    .pie_de_pagina .link a{
        display: block;
      margin: 20px;
    }
    
    .pie_de_pagina .logoa{
        width: 65px;
        border-radius: 50% ;
        position: relative;
    
    }
    .pie_de_pagina .lola{
        width: 65px;
        border-radius: 50% ;
        position: relative;
        
    }
     
    .pie_de_pagina .gobierno{
        width: 200px;
        position: relative;
        
    }
    
    .pie_de_pagina .img{
        margin-top: 50px;
    }
     
    .pie_de_pagina .footer-link{
        display: flex;
        justify-content: space-between;
        width: 50%;
        line-height:5px ;
       margin-left: 46px;
       text-align:center ;
    }
     
    .link{
        margin-left: 35px;
        margin-top: 20px;
        text-align:center ;
    }
    .footer-link h4{
        position: relative;
        margin-bottom: 30px;
        font-weight: 400;
        font-size: 15px;
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        color: rgb(245, 255, 110);
        text-align:center ;
    }
    
    .footer-link li a {
        position: relative;
        font-weight: 400;
        font-size: 15px;
        font-family: Century Schoolbook;
        color: rgb(253, 253, 253);
    }
    
    .pie_de_pagina a:hover{
        background: rgb(146, 0, 0);
        padding: 10px ;
    }
    </style>