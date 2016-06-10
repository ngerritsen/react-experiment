<?php
$result = file_get_contents('http://localhost:3000/render');
$app = json_decode($result)
?>

<html>
<head>
    <title>Preact experiment</title>
    <link rel="stylesheet" href="public/style.css">
</head>
<body>
    <div id="root">
        <?= $app->html ?>
    </div>
    <script>window.initialState = <?= $app->state ?></script>
    <script src="public/bundle.js"></script>
</body>
</html>
