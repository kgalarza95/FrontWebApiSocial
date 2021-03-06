<!DOCTYPE html>
<html lang="en">

    <head>

        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

        <title>LOGIN</title>

        <!-- Fuentes personalizadas-->
        <link href="vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
        <link
            href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i"
            rel="stylesheet">
        <!-- Estilos personalizados-->
        <link href="css/sb-admin-2.min.css" rel="stylesheet">
        <link href="css/estilos_local.css" rel="stylesheet">
        <script src="js/alert/sweetalert.js"></script>
<!-- Optional: include a polyfill for ES6 Promises for IE11 -->
<script src="//cdn.jsdelivr.net/npm/promise-polyfill@8/dist/polyfill.js"></script>
<script src="js/alert/sweetalert.min.js"></script>
<link rel="stylesheet" href="css/alert/sweetalert.css">
<!--<script type="text/javascript" src="https://cdn.rawgit.com/oauth-io/oauth-js/c5af4519/dist/oauth.js"></script>-->
<script type="text/javascript" src="js/rs/twitter/codebird.js"></script>
    </head>

    <body class="bg-gradient-primary">
        <script src="js/eventos/utilidades.js"></script>
        <!--Cargar sdk de fb-->
        <!--        <script>
                    window.fbAsyncInit = function () {
                        FB.init({
                            appId: '1637847639937075',
                            xfbml: true,
                            version: 'v10.0'
                        });
                        FB.AppEvents.logPageView();
                    };
        
                    (function (d, s, id) {
                        var js, fjs = d.getElementsByTagName(s)[0];
                        if (d.getElementById(id)) {
                            return;
                        }
                        js = d.createElement(s);
                        js.id = id;
                        js.src = "https://connect.facebook.net/en_US/sdk.js";
                        fjs.parentNode.insertBefore(js, fjs);
                    }(document, 'script', 'facebook-jssdk'));
                </script>-->


        <script>
            (function(d, s, id) {
	    var js, fjs = d.getElementsByTagName(s)[0];
	    if (d.getElementById(id)) return;
	    js = d.createElement(s); js.id = id;
	    js.src = "//connect.facebook.net/en_US/sdk.js";
	    fjs.parentNode.insertBefore(js, fjs);
	  }(document, 'script', 'facebook-jssdk'));
        </script>

        <div class="container">


            <div class="row justify-content-center">

                <div class="col-xl-10 col-lg-12 col-md-9">

                    <div class="card o-hidden border-0 shadow-lg my-5">
                        <div class="card-body p-0">

                            <div class="row">
                                <!--IMAGNE INSTITUCIONAL-->
                                <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>

                                <div class="col-lg-6">
                                    <div class="p-5">
                                        <div class="text-center">
                                            <h1 class="h4 text-gray-900 mb-4">BIENVENIDO AL SISTEMA</h1>
                                        </div>
                                        <div class="fb-like" data-share="true" data-width="450" data-show-faces="true">
                                        </div>
                                        <form id="user" class="user">
                                            <div class="form-group">
                                                <!--input type="email" class="form-control form-control-user" id="txt_usuario"
                                                    aria-describedby="emailHelp" placeholder="Ingrese Usuario..."-->
                                                <input type="text" class="form-control form-control-user" id="txt_usuario"
                                                       aria-describedby="emailHelp" placeholder="Ingrese Usuario...">
                                            </div>
                                            <div class="form-group">
                                                <input type="password" class="form-control form-control-user"
                                                       id="txt_contrasenia" placeholder="Contrase�a">
                                            </div>
                                            <!--div class="form-group">
                                                <div class="custom-control custom-checkbox small">
                                                    <input type="checkbox" class="custom-control-input" id="chk_recordar">
                                                    <label class="custom-control-label" for="customCheck">Recordar</label>
                                                </div>
                                            </div-->
                                            <button class="btn btn-primary btn-user btn-block"
                                                    id="btn_acceder"><i class="fa fa-user"></i> Login
                                            </button>
                                            <hr>
                                            <!--botones de consumo de apis de redes sociales-->
                                            <a href="#" id="login" class="btn btn-facebook btn-user btn-block">
                                                <i class="fab fa-facebook-f fa-fw"></i> Login con Facebook
                                            </a>
                                            <a href="index.jsp" class="btn btn-danger btn-user btn-block">
                                                <i class="fab fab fa-instagram fa-fw"></i> Login con Instagram
                                            </a>
                                            <button id="twitter-button" class="btn btn-primary btn-user btn-block">
                                                <i class="fab fab fa-twitter fa-fw"></i> Login con Twitter
                                            </button>
                                            <a href="https://twitter.com/intent/tweet?in_reply_to=463440424141459456">Reply</a>
<a href="https://twitter.com/intent/retweet?tweet_id=463440424141459456">Retweet</a>
                                            <a href="https://twitter.com/intent/like?tweet_id=463440424141459456">Like</a>

                                        </form>
                                        <hr>
                                        <div class="text-center">
                                            <a class="small" href="pages\login\forgot-password.jsp">�Olvidaste tu
                                                Contrase�a?</a>
                                        </div>
                                        <div class="text-center">
                                            <!--<a class="small" href="register.jsp">Crear una Cuenta!</a>-->
                                            <a class="small" href="pages\login\register.jsp">Crear una Cuenta!</a>
                                        </div>                     
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
        <!-- Bootstrap core JavaScript-->
        <script src="vendor/jquery/jquery.min.js"></script>
        <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

        <!-- Core plugin JavaScript-->
        <script src="vendor/jquery-easing/jquery.easing.min.js"></script>

        <!-- Custom scripts for all pages-->
        <script src="js/sb-admin-2.min.js"></script>
        <script src="js/eventos/login.js"></script>

    </body>

</html>