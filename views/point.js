var express = require('express');
var app = express();

app.set('view engine' , 'ejs');

app.get('/',function(req,res)
{
    var menubaru=['Nasi Goreng','Bakmi Ayam','Nasi Padang']
    res.render(__dirname+'/views/Menu',{menubaru});
})

var description=
[
    {
        nama:'Nasi Goreng',
        price:20000,
        description:'Beli Satu Gratis Piring Makan'
    },
    {
        nama:'Bakmie Ayam',
        price:15000,
        description:'Ngak Ada Ayam Berarti Bukan Bakmi'
    },
    {
        nama:'Nasi Padang',
        price:15000,
        description:'Bukan di Warung Tegal'
    },
]

app.get('/nama', function(req, res)
{
    var nama=req.params.nama;
    var Menu=['Nasi Goreng','Bakmi Ayam','Nasi Padang']
    var menubaru=[]
    var z=0
    for(i=0;i<Menu.length;i++)
    {
        var y=Menu[i].split(nama);
        var n=nama.toLowerCase();
        var o=Menu[i].split(n);
        if(y.length>1 || o.length>1)
        {
            menubaru[z]=Menu[i];
            z++;
        }
    }

    res.render(__dirname + '/views/Menu',{menubaru});
})
app.get('/satupoint/:angka', function(req, res)
{
    res.render(__dirname+ '/views/satupoint',{description:description[req.params.angka]});
})

// res.render('satu');


// merujuk ke file ‘satu’ dalam views.
app.listen(3000);