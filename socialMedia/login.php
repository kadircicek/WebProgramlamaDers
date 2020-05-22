<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://unpkg.com/purecss@2.0.3/build/pure-min.css" integrity="sha384-cg6SkqEOCV1NbJoCu11+bm0NvBRc8IYLRGXkmNrqUBfTjmMYwNKPWBTIKyw9mHNJ" crossorigin="anonymous">
    <link rel="stylesheet" href="/icerik/css/stil.css" />
    <title>Document</title>
</head>

<body>
    <?php
    include './islemler.php';
    echo var_dump(execDb("select * from kullanici where email=".$_POST["kullaniciadi"]." and sifre=".$_POST["sifre"].""));
    ?>
    <?php

    include './parcali/header.php';
    ?>

    <div class="pure-g">
        <div class="pure-u-1-5">
            <div class="cerceveli">
                hastaghler
            </div>
        </div>
        <div class="pure-u-3-5">

            <div class="anaicerik cerceveli">
                <form class="pure-form pure-form-stacked" method="POST" action="index.php">
                    <fieldset>
                        <legend>Giriş</legend>
                        <label>Email</label>
                        <input type="email" class="pure-input-1" name="kullaniciadi" placeholder="Email" />
                        <span class="pure-form-message">This is a required field.</span>
                        <label>Password</label>
                        <input type="password" class="pure-input-1" name="sifre" placeholder="Password" />
                        <label>State</label>

                        <label for="stacked-remember" class="pure-checkbox">
                            <input type="checkbox" id="stacked-remember" /> Remember me</label>
                        <button type="submit" class="pure-button pure-button-primary">Sign in</button>
                    </fieldset>
                </form>
            </div>

        </div>
        <div class="pure-u-1-5">
            <div class="cerceveli">
                hesap
            </div>
        </div>
    </div>
    <?php
    include './parcali/footer.php';
    ?>
</body>

</html>