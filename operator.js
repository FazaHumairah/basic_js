// pengurangan
c = a - b;
document.write(`${a} - ${b} = ${c}<br/>`);
// Perkalian
c = a * b;
document.write(`${a} * ${b} = ${c}<br/>`);
// pemangkatan
c = a ** b;
document.write(`${a} ** ${b} = ${c}<br/>`);
// Pembagian
c = a / b;
document.write(`${a} / ${b} = ${c}<br/>`);
// Modulo
c = a % b;
document.write(`${a} % ${b} = ${c}<br/>`);

//penugasan
document.write("Mula-mula nilai score...<br>");
        // pengisian nilai
        var score = 100;
        document.write("score = "+ score + "<br/>");
        // pengisian dan menjumlahan dengan 5
        score += 5;
        document.write("score = "+ score + "<br/>");
        // pengisian dan pengurangan dengan 2
        score -= 2;
        document.write("score = "+ score + "<br/>");
        // pengisian dan perkalian dengan 2
        score *= 2;
        document.write("score = "+ score + "<br/>");
        // pengisian dan pembagian dengan 4
        score /= 4;
        document.write("score = "+ score + "<br/>");
        // pengisian dan pemangkatan dengan 2
        score **= 2;
        document.write("score = "+ score + "<br/>");
        // pengisian dan modulo dengan 3;
        score %= 3;
        document.write("score = "+ score + "<br/>");

        //perbandingan
        var aku = 20;
        var kamu = 19;

        // sama dengan
        var hasil = aku == kamu;
        document.write(`${aku} == ${kamu} = ${hasil}<br/>`);
        
        // lebih besar
        var hasil = aku > kamu;
        document.write(`${aku} > ${kamu} = ${hasil}<br/>`);
        
        // lebih besar samadengan
        var hasil = aku >= kamu;
        document.write(`${aku} >= ${kamu} = ${hasil}<br/>`);
        
        // lebih kecil
        var hasil = aku < kamu;
        document.write(`${aku} < ${kamu} = ${hasil}<br/>`);
        
        // lebih kecil samadengan
        var hasil = aku <= kamu;
        document.write(`${aku} <= ${kamu} = ${hasil}<br/>`);
        
        // tidak samadengan
        var hasil = aku != kamu;
        document.write(`${aku} != ${kamu} = ${hasil}<br/>`);

//logika
var paja = 20;
var jeff = 19;
var benar = paja > jeff;
var salah = paja < jeff;
// operator && (and)
var hasil = benar && salah;
document.write(`${benar} && ${salah} = ${hasil}<br/>`);
// operator || (or)
var hasil = benar || salah;
document.write(`${benar} || ${salah} = ${hasil}<br/>`);
// operator ! (not)
var hasil = !benar
document.write(`!${benar} = ${hasil}<br/>`);

//bitwise
// operator bitwise and
var hasil = x & y;
document.write(`${x} & ${y} = ${hasil}<br/>`);

// operator bitwise or
var hasil = x | y;
document.write(`${x} | ${y} = ${hasil}<br/>`);

// operator bitwise xor
var hasil = x ^ y;
document.write(`${x} ^ ${y} = ${hasil}<br/>`);

// operator negasi
var hasil = ~x;
document.write(`~${x} = ${hasil}<br/>`);

// operator bitwise right shift >>
var hasil = x >> y;
document.write(`${x} >> ${y} = ${hasil}<br/>`);

// operator bitwise right shift <<
var hasil = x << y;
document.write(`${x} << ${y} = ${hasil}<br/>`);

// operator bitwise right shift (unsigned) >>>
var hasil = x >>> y;
document.write(`${x} >>> ${y} = ${hasil}<br/>`);

//ternary
var pertanyaan = confirm("Apakah kamu berumur diatas 18 tahun?")

        var hasil = pertanyaan ? "Selamat datang" : "Kamu tidak boleh di sini";
        document.write(hasil);
