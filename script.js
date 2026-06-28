/* =========================
COUNTDOWN
========================= */

.countdown{

display:grid;

grid-template-columns:repeat(4,1fr);

gap:25px;

margin-top:40px;

}

.countdown div{

background:white;

padding:30px 20px;

border-radius:25px;

box-shadow:0 12px 25px rgba(0,0,0,.08);

transition:.35s;

}

.countdown div:hover{

transform:translateY(-8px);

}

.countdown span{

display:block;

font-size:55px;

font-weight:700;

color:#b68a5b;

margin-bottom:10px;

}

.countdown small{

font-size:16px;

color:#777;

}

/* =========================
INFO
========================= */

.info{

display:grid;

grid-template-columns:repeat(3,1fr);

gap:25px;

margin-top:40px;

}

.info div{

background:white;

padding:35px;

border-radius:25px;

text-align:center;

box-shadow:0 10px 25px rgba(0,0,0,.08);

transition:.35s;

}

.info div:hover{

transform:translateY(-8px);

}

.info h3{

font-size:24px;

color:#b68a5b;

margin-bottom:15px;

}

.info p{

font-size:18px;

}

/* =========================
GALLERY
========================= */

.gallery{

display:grid;

grid-template-columns:repeat(3,1fr);

gap:20px;

margin-top:40px;

}

.gallery img{

width:100%;

height:320px;

object-fit:cover;

border-radius:22px;

cursor:pointer;

transition:.4s;

box-shadow:0 15px 30px rgba(0,0,0,.12);

}

.gallery img:hover{

transform:scale(1.05);

box-shadow:0 25px 45px rgba(0,0,0,.18);

}

/* =========================
MAP
========================= */

.mapButton{

display:inline-block;

margin-top:20px;

padding:18px 45px;

background:#b68a5b;

color:white;

text-decoration:none;

font-size:18px;

border-radius:50px;

transition:.35s;

}

.mapButton:hover{

background:#a47748;

transform:translateY(-5px);

}

/* =========================
QR
========================= */

.qr{

display:block;

margin:30px auto;

width:230px;

max-width:90%;

border-radius:18px;

box-shadow:0 15px 35px rgba(0,0,0,.12);

transition:.35s;

}

.qr:hover{

transform:scale(1.05);

}

/* =========================
FOOTER
========================= */

footer{

margin-top:80px;

padding:80px 20px;

background:#f4eee7;

text-align:center;

}

footer h2{

font-family:'Great Vibes',cursive;

font-size:70px;

color:#b68a5b;

margin-bottom:15px;

}

footer p{

font-size:18px;

color:#666;

letter-spacing:2px;

}

/* =========================
TOP BUTTON
========================= */

#topButton{

position:fixed;

right:25px;

bottom:95px;

width:55px;

height:55px;

border:none;

border-radius:50%;

background:#b68a5b;

color:white;

font-size:24px;

cursor:pointer;

display:none;

box-shadow:0 10px 25px rgba(0,0,0,.2);

transition:.35s;

z-index:999;

}

#topButton:hover{

transform:translateY(-5px);

 }
