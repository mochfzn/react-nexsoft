//form input
let nama = document.querySelector("#nama");
let tempat_lahir = document.querySelector("#tempat-lahir");
let tanggal_lahir = document.querySelector("#tanggal-lahir");
let search_text = document.querySelector("#search-text");

// form textarea
let alamat = document.querySelector("#alamat");

// form radio button
let laki = document.querySelector("#laki");
let perempuan = document.querySelector("#perempuan");
let gender = document.querySelectorAll("[name~='gender'");

// form checkbox
let hobby1 = document.querySelector("#hobby1");
let hobby2 = document.querySelector("#hobby2");
let hobby3 = document.querySelector("#hobby3");
let hobby4 = document.querySelector("#hobby4");
let hobby = document.querySelectorAll("[name~='hobby']")

// form select
let agama = document.querySelector("#agama");
let search_option = document.querySelector("#search-option");

//tombol
let submit = document.querySelector("#submit");
let reset = document.querySelector("#reset");
let search = document.querySelector("#search-button");

// table
let list = document.querySelector("#customers");

let page = document.querySelector("#page");
let limit = 4;
let currentPage = 1;

// array
let biodata = [];

let indexDipilih = "";

contohData();
tampil();

function contohData() {
    biodata = [
        {
            nama: "Dika",
            tempat_lahir: "Jakarta",
            tanggal_lahir: "2010-04-19",
            umur: 10,
            alamat: "Jakarta",
            jk: "laki",
            hobby: ["Berenang", "Jogging"],
            agama: "Islam"
        },
        {
            nama: "Agung",
            tempat_lahir: "Surabaya",
            tanggal_lahir: "2004-10-06",
            umur: 17,
            alamat: "Surabaya",
            jk: "laki",
            hobby: ["Bersepeda", "Futsal"],
            agama: "Islam"
        },
        {
            nama: "Adam",
            tempat_lahir: "Bandung",
            tanggal_lahir: "2005-02-07",
            umur: 16,
            alamat: "Surabaya",
            jk: "laki",
            hobby: ["Jogging", "Futsal"],
            agama: "Islam"
        },
        {
            nama: "Aufa",
            tempat_lahir: "Makassar",
            tanggal_lahir: "2010-02-07",
            umur: 11,
            alamat: "Makassar",
            jk: "laki",
            hobby: ["Futsal"],
            agama: "Islam"
        },
        {
            nama: "Dimas",
            tempat_lahir: "Bekasi",
            tanggal_lahir: "2001-02-07",
            umur: 20,
            alamat: "Bekasi",
            jk: "laki",
            hobby: ["Futsal"],
            agama: "Islam"
        },
        {
            nama: "Hafis",
            tempat_lahir: "Purbalingga",
            tanggal_lahir: "2002-02-07",
            umur: 19,
            alamat: "Purbalingga",
            jk: "laki",
            hobby: ["Futsal"],
            agama: "Islam"
        },
        {
            nama: "Jaki",
            tempat_lahir: "Karawang",
            tanggal_lahir: "2009-02-07",
            umur: 12,
            alamat: "Karawang",
            jk: "laki",
            hobby: ["Bersepeda"],
            agama: "Islam"
        },
        {
            nama: "Yoko",
            tempat_lahir: "Sukabumi",
            tanggal_lahir: "2004-02-07",
            umur: 17,
            alamat: "Sukabumi",
            jk: "laki",
            hobby: ["Jogging"],
            agama: "Islam"
        },
        {
            nama: "Kiko",
            tempat_lahir: "Padang",
            tanggal_lahir: "2007-02-07",
            umur: 14,
            alamat: "Padang",
            jk: "laki",
            hobby: ["Futsal"],
            agama: "Islam"
        },
        {
            nama: "Kris",
            tempat_lahir: "Cirebon",
            tanggal_lahir: "2018-02-07",
            umur: 3,
            alamat: "Cirebon",
            jk: "laki",
            hobby: ["Berenang", "Jogging", "Bersepeda"],
            agama: "Islam"
        }
    ];
}

function input() {
    data = {
        nama: nama.value,
        tempat_lahir: tempat_lahir.value,
        tanggal_lahir: tanggal_lahir.value,
        umur: hitungUmur(tanggal_lahir.value),
        alamat: alamat.value,
        jk: radioHandle(),
        hobby: hobbyHandle(),
        agama: agama.value
    }
    
    console.log(tanggal_lahir.value);
    biodata.push(data);
    submit.value = "Ubah";

    tampil();
}

function validasi() {
	var hasil = false;
    var ceklisTerisi = false;
    var radioTerisi = false;

	if(nama.value === "") {		
		hasil = true;
        return hasil;
	}

	if(tempat_lahir.value === "") {		
		hasil = true;
        return hasil;
    }
    
    if(tanggal_lahir.value === "") {		
		hasil = true;
        return hasil;
    }
    
    if(alamat.value === "") {		
		hasil = true;
        return hasil;
    }
    
    if(agama.value === "") {		
		hasil = true;
        return hasil;
	}

    for(var i of hobby) {
        if(i.checked === true) {
            ceklisTerisi = true;
            break;
        }
    }

    if(ceklisTerisi === false) {
        hasil = true;
        return hasil;
    }

    for(var j of gender) {
        if(j.checked === true) {
            radioTerisi = true;
            break;
        }
    }

    if(radioTerisi === false) {
        hasil = true;
        return hasil;
    }

    if(agama.value === "") {
        hasil = true;
        return hasil;
    }

	return hasil;
}

function bersihkan() {
    nama.value = "";
    tanggal_lahir.value = "";
    tempat_lahir.value = "";
    alamat.value = "";
    laki.checked = false;
    perempuan.checked = false;
    hobby1.checked = false;
    hobby2.checked = false;
    hobby3.checked = false;
    hobby4.checked = false;
    submit.value = "Tambah";
}

function tampil() {
    let endPage = currentPage * limit;
    let offSet = endPage - limit;

    let tbody = list.childNodes[3];
    tbody.innerHTML = "";
    let hasil_hobby = "";

    for(let index = offSet; index < endPage; index++) {
        if(index < biodata.length) {
            biodata[index].hobby.forEach(element => {
                hasil_hobby += element + ",";
            });
    
            tbody.innerHTML += `
                <tr>
                    <td>${index + 1}</td>
                    <td>${biodata[index].nama}</td>
                    <td>${biodata[index].umur}</td>
                    <td>${biodata[index].jk}</td>
                    <td>${hasil_hobby}</td>
                    <td>${biodata[index].agama}</td>
                    <td>${biodata[index].alamat}</td>
                    <td>
                        <input type="button" name="update" value="Ubah" class="button" onclick="get('${index}')" />
                        <input type="button" name="delete" value="Hapus" class="button" onclick="buang('${index}')" />
                    </td>
                <tr>
            `;
    
            hasil_hobby = "";
        }
    }
        
    pagination();
    bersihkan();
}

function hitungUmur(tanggal_lahir) {
    let today = new Date();
    let birthday = new Date(tanggal_lahir);
    let year = 0;

    if(today.getMonth() < birthday.getMonth()) {
        year = 1;
    } else if((today.getMonth() == birthday.getMonth()) && (today.getDate() < birthday.getDate())) {
        year = 1;
    }

    let age = today.getFullYear() - birthday.getFullYear() - year;

    if(age < 0) {
        age = 0;
    }

    return age;
}

function radioHandle() {
    let hasil = "";

    if(laki.checked === true) {
        hasil = laki.value;
    } else if(perempuan.checked === true) {
        hasil = perempuan.value;
    }

    return hasil;
}

function hobbyHandle() {
    let hasil = [];

    if(hobby1.checked) {
        hasil.push(hobby1.value);
    } 

    if(hobby2.checked) {
        hasil.push(hobby2.value);
    } 

    if(hobby3.checked) {
        hasil.push(hobby3.value);
    } 

    if(hobby4.checked) {
        hasil.push(hobby4.value);
    }

    return hasil;
}

function get(index) {
    const data = biodata[index];

    nama.value = data.nama;
    tanggal_lahir.value = data.tanggal_lahir;
    tempat_lahir.value = data.tempat_lahir;
    alamat.value = data.alamat;
    indexDipilih = index;
    submit.value = "Ubah";

    switch(data.jk) {
        case "laki":
            laki.checked = true;
            break;
        case "perempuan":
            perempuan.checked = true;
            break;
        default:
            break;
    }

    data.hobby.forEach(element => {
        switch(element) {
            case "Berenang":
                hobby1.checked = true;
                break;
            case "Jogging":
                hobby2.checked = true;
                break;
            case "Bersepeda":
                hobby3.checked = true;
                break;
            case "Futsal":
                hobby4.checked = true;
                break;
            default:
                break;
        }
    });

    switch(data.agama)  {
        case "Islam":
            agama.selectedIndex = 0;
            break;
        case "Kristen":
            agama.selectedIndex = 1;
            break;
        case "Katolik":
            agama.selectedIndex = 2;
            break;
        case "Hindu":
            agama.selectedIndex = 3;
            break;
        case "Budha":
            agama.selectedIndex = 4;
            break;
        default:
            break;
    }
}

function edit(index) {
    biodata[index].nama = nama.value;
    biodata[index].tempat_lahir = tempat_lahir.value;
    biodata[index].tanggal_lahir = tanggal_lahir.value;
    biodata[index].alamat = alamat.value;
    biodata[index].jk = radioHandle();
    biodata[index].hobby = hobbyHandle();
    biodata[index].agama = agama.value;

    tampil(); 
    bersihkan();
    submit.value = "Tambah";   
}

function buang(indexSeledted) {
    const data = biodata[indexSeledted];

    if(confirm(`Apakah Anda yakin ingin menghapus data ${data.nama}`)) {
        biodata = biodata.filter((element, index) => {
            if(index == indexSeledted) {
                return false;
            } else {
                return true;
            }
        });
    }

    tampil();
}

function cari() {
    let filter, dataFound;
    if(search_text.value !== "") {

        filter = search_text.value.toUpperCase();
        switch(search_option.value) {
            case "Nama":
                dataFound = biodata.filter(value => {
                    return value.nama.toUpperCase() === filter;
                });
                break;
            case "Alamat":
                dataFound = biodata.filter(value => {
                    return value.alamat.toUpperCase() === filter;
                });
                break;
            case "Hobby":
                dataFound = biodata.filter(value => {
                    for(x of value.hobby) {
                        if(x.toUpperCase() === filter) {
                            return true;
                        }
                    }
                });
                break;
            default:
                break;
        }

        tampilByParam(dataFound);
    } else {
        tampil();
    }
}

function tampilByParam(data) {
    let endPage = currentPage * limit;
    let offSet = endPage - limit;

    let tbody = list.childNodes[3];
    tbody.innerHTML = "";
    let hasil_hobby = "";

    for(let index = offSet; index < endPage; index++) {
        if(index < data.length) {
            data[index].hobby.forEach(element => {
                hasil_hobby += element + ",";
            });
    
            tbody.innerHTML += `
                <tr>
                    <td>${index + 1}</td>
                    <td>${data[index].nama}</td>
                    <td>${data[index].umur}</td>
                    <td>${data[index].jk}</td>
                    <td>${hasil_hobby}</td>
                    <td>${data[index].agama}</td>
                    <td>${data[index].alamat}</td>
                    <td>
                        <input type="button" name="update" value="Ubah" class="button" onclick="get('${index}')" />
                        <input type="button" name="delete" value="Hapus" class="button" onclick="buang('${index}')" />
                    </td>
                <tr>
            `;
    
            hasil_hobby = "";
        }
    }  
    
    pagination();
    bersihkan();
}

function pagination() {
    let totalPage = Math.ceil(biodata.length / limit);
    page.innerHTML = "";

    for(let index = 1; index <= totalPage; index++) {
        if(index == currentPage) {
            page.innerHTML += `<a href="javascript:void(0)">${index}</a>`;
        } else if(index > currentPage) {
            page.innerHTML += `<a href="javascript:void(0)" onclick="clickedPage(${index})">${index}</a>`;
        } else if(index < currentPage) {
            page.innerHTML += `<a href="javascript:void(0)" onclick="clickedPage(${index})">${index}</a>`;
        }
    }
}

function clickedPage(index) {
    currentPage = index;
    tampil();
}

submit.addEventListener("click", () => {
    if(!validasi()) {
		if(submit.value === "Tambah") {		
			input();	
		} else if(submit.value === "Ubah") {
			edit(indexDipilih);
		}
	} else {
        alert("Lengkapi isian data!");
    }
});

reset.addEventListener("click", bersihkan);
search.addEventListener("click", cari);