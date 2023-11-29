<?php 
session_start();
if($_SERVER['query_string'] == 'noname'){
  unset($_SESSION['username']);
}
$name = $_SESSION['username'] ?? 'Guest';

?>
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
  <style>
    .brand {
      background-color: red!important;
    }
    .brand-text {
      color: gray!important
      ;
    }
    form {
      max-width: 70vw;
      margin: auto;
      padding: 0.7em;
    }
    .pizza {
      width: 100px;
      margin: 40px auto -30px;
      display: block;
      position: relative;
      top:-40px;
    }
  </style>
</head>
<body class="grey lighten-4">
  <nav class="white z-depth-0">
    <div class="container">
      <a href="index.php" class="brand-logo brand-text">Ninja pizza</a>
      <ul id="nav-mobile" class="right hide-on-small-and-down">
        <li class="grey-text">hello:<?php echo htmlspecialchars($name)?></li>
       
        

        
<?php if( isset($_SESSION['username']) && !empty($_SESSION['username']) )
{
?>
      <li><a href="logout.php" class="btn brand z-depth-0">logout</a></li>
<?php }else{ ?>
     <li><a href="login.php" class="btn brand z-depth-0">login</a></li>
     <li><a href="register.php" class="btn brand z-depth-0">register</a></li>
<?php } ?>

      </ul>
    </div>
  </nav>