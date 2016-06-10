<?php
require(__DIR__ . '/src/php-client/ReactWidget.php');
$servicePlansWidget = new ReactWidget('service-plans');
?>

<html>
<head>
    <title>Preact experiment</title>
    <link rel="stylesheet" href="public/style.css">
</head>
<body>
    <?php $servicePlansWidget->render() ?>
    <script src="public/bundle.js"></script>
</body>
</html>
