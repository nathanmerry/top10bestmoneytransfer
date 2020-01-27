<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap-grid.min.css">
    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700,800,900&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,500,600,700,800,900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap-grid.min.css">
    <link rel="stylesheet" href="./dist/global.css">
    <title>top10MoneyTransfers</title>
  </head>
  <body>
    <?php include './components/header.php' ?>
    <main>
      <?php include './components/filterToggle.php' ?>
      <?php include './components/disclaimer.php' ?>
      <div class="container body-container">
        <?php include './components/filter.php' ?>
        <?php include './components/partners.php' ?>
        </div>
      </div>
    </main>



    <script src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous"></script>
    <script src="./assets/js/components/trackingClass.js"></script>
    <script src="./assets/js/components/tracking.js"></script>
    <script src="./assets/js/components/filter.js"></script>
    <script src="./assets/js/partnerdata.js"></script>
    <script src="./assets/js/helperfunctions.js"></script>
    <script src="./assets/js/components/partner.js"></script>
  </body>
</html>