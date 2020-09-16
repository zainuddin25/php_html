<?php include "data_siswa.php";?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Ini Php</title>
<link rel="stylesheet" href="asset/css/bootstrap.min.css">
<link rel="stylesheet" href="asset/css/all.css">

</head>
<body>

<div class="container">
    <div class="row">
        <div class="col-12">
                    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
            <?php $nomor=0; foreach($data_slider as $key): ?>
                    <div class="carousel-item <?php if($nomor==0){ echo "active";} ?>">
                    <img src=<?php echo $key; ?> class="d-block w-100" alt="logo-<?php echo $nomor; ?>">
                    </div>
            <?php $nomor++; endforeach; ?>
                </div>
            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
            </div>
        </div>
    </div>
</div>

<div class="container">
    <div class="row">
    <?php foreach($data_siswa as $key=>$value):?>
        <div class="col">
            <div class="card <?php if($value[3]=="b"){ echo "bg-warning";}; ?>" style="width: 18rem;">
                <img src="asset/images/logo.jpg" class="card-img-top img-thumbnail" alt="...">
            <div class="card-body">
                <h5 class="card-title"><?php echo $value[0]; ?></h5>
                <p class="card-text"><i class="fas fa-map-marker-alt mr-2"></i><?php echo $value[1]; ?></p>
                <p class="card-text"><?php echo $value[2]; ?></p>
                <a href="#" class="btn btn-secondary">Info Lebih Lanjut Tentang...</a>
            </div>
            </div>
        </div>
    <?php endforeach;?>
    </div>
</div>
</div>

<script src="asset/css/js/jquery.js"></script>
<script src="asset/css/js/popper.min.js"></script>
<script src="asset/css/js/bootstrap.min.js"></script>
<script src="asset/css/js/data.js"></script>
</body>
</html>