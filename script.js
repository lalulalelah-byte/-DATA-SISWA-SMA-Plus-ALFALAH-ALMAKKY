// Data Siswa SMA Plus AL FALAH AL MAKKY
let students = JSON.parse(localStorage.getItem('students')) || [
    { id: 1, nama: "Ainu Zahroh", kelas: "XII-B", nisn: "3098472186", noHp: "-", alamat: "Jl. Pagedangan, Desa/Kel. Pagedangan, Kec. Turen, Malang", jk: "Perempuan" },
    { id: 2, nama: "A'izni Bii'zazi Izzah Muhammad", kelas: "XI-E", nisn: "0083759002", noHp: "-", alamat: "Jl. Diponegoro 37 Talangsuko, Kec. Turen, Malang", jk: "Laki-laki" },
    { id: 3, nama: "A Yunin Nadhifa", kelas: "XI-E", nisn: "0105447296", noHp: "085210807140", alamat: "Tretes 215, Tretes, Jogomulyan, Kec. Gondanglegi", jk: "Perempuan" },
    { id: 4, nama: "A. Zaidan Bahtiar", kelas: "XI-E", nisn: "0101337663", noHp: "-", alamat: "Dusun Sumber Duren RT 25 RW 08, Sidodadi, Kec. Gedangan", jk: "Laki-laki" },
    { id: 5, nama: "Abay Amroe Rafael Hariono", kelas: "X-A", nisn: "0116508654", noHp: "083848387594", alamat: "Jl. KH. Ahmad Dahlan 31, Putat Kidul, Kec. Gondanglegi", jk: "Laki-laki" },
    { id: 6, nama: "Abdi Pratama", kelas: "XI-E", nisn: "0079778191", noHp: "083853197954", alamat: "Raya Jamuran 62, Sukodadi, Kec. Wagir", jk: "Laki-laki" },
    { id: 7, nama: "Abdul Aziz Alhamdin", kelas: "X-A", nisn: "3103575421", noHp: "-", alamat: "Dusun Putat Lor Krajan, Rt12/Rw03, Desa/Kel. Putat Lor, Kec. Gondanglegi", jk: "Laki-laki" },
    { id: 8, nama: "Abdul Ghofar Rozin", kelas: "XI-E", nisn: "3098084063", noHp: "-", alamat: "Pranggas, Klepu, Kec. Sumbermanjing Wetan", jk: "Laki-laki" },
    { id: 9, nama: "Abdul Roqib", kelas: "XII-C", nisn: "0074855780", noHp: "-", alamat: "Jl. Oro-oro Ombo, Oro Oro Ombo, Kec. Pronojiwo", jk: "Laki-laki" },
    { id: 10, nama: "Abdunnur Amar As Shobri", kelas: "XI-E", nisn: "3095677480", noHp: "085335336133", alamat: "Jl. Dr. Cipto Gg. Kalianyar 31, Bedali, Kec. Lawang", jk: "Laki-laki" },
    { id: 11, nama: "Abdur Rozeq", kelas: "XI-E", nisn: "3092849933", noHp: "-", alamat: "Dsn Krajan, Karangsuko, Kec. Pagelaran", jk: "Laki-laki" },
    { id: 12, nama: "Abiel Algafury Firdaus", kelas: "X-B", nisn: "0123968700", noHp: "085746881988", alamat: "Simpang Mataram 84, Damapit, Kec. Dampit", jk: "Laki-laki" },
    { id: 13, nama: "Aburizal Hafidz", kelas: "XII-C", nisn: "0084029428", noHp: "-", alamat: "Jl. Raya Talangagung 67, Talangagung, Kec. Kepanjen", jk: "Laki-laki" },
    { id: 14, nama: "Achmad Fardani", kelas: "X-B", nisn: "0117677439", noHp: "085334382992", alamat: "Ngipik, Kanigoro, Kec. Pagelaran", jk: "Laki-laki" },
    { id: 15, nama: "Achmad Nurul Ula Alfarkhani", kelas: "X-A", nisn: "3110747945", noHp: "-", alamat: "Tangkilsari, Desa/Kel. Tangkilsari, Kec. Tajinan", jk: "Laki-laki" },
    { id: 16, nama: "Adinda Mutiara Hikmah", kelas: "X-B", nisn: "3099295117", noHp: "-", alamat: "Jl. KH Bachrowi 11, Brongkal, Kec. Pagelaran", jk: "Perempuan" },
    { id: 17, nama: "Adinda Nur Fadhilah", kelas: "XI-E", nisn: "0098385598", noHp: "085692197831", alamat: "Jl. Kalianyar 21, Wonokoyo, Kec. Kedungkandang", jk: "Perempuan" },
    { id: 18, nama: "Aditya Putra Mulana", kelas: "XII-C", nisn: "0087934907", noHp: "088235719790", alamat: "Jl. Krajan 12 Krajan Kidul, Desa/Kel. Sukosari, Kec. Gondanglegi", jk: "Laki-laki" },
    { id: 19, nama: "Afifa Safira", kelas: "XI-E", nisn: "0095850246", noHp: "-", alamat: "Sumber Bulus 211, Tamanayu, Kec. Pronojiwo", jk: "Perempuan" },
    { id: 20, nama: "Ahmad Abu Sufyan Rojab Mubarok", kelas: "X-A", nisn: "3115449127", noHp: "-", alamat: "Urek-Urek Gondanglegi, Desa/Kel. Urek Urek, Kec. Gondanglegi", jk: "Laki-laki" },
    { id: 21, nama: "Ahmad Alfriz Diansyah", kelas: "XI-E", nisn: "0099399696", noHp: "087841566955", alamat: "Jl. Raya Kedok 243, Desa/Kel. Kedok, Kec. Turen", jk: "Laki-laki" },
    { id: 22, nama: "Ahmad Ali Ridho Hamdani", kelas: "XI-E", nisn: "3104559379", noHp: "-", alamat: "Dusun Ngipek, Desa/Kel. Kanigoro, Kec. Pagelaran", jk: "Laki-laki" },
    { id: 23, nama: "Ahmad Maulana Hasbi", kelas: "XI-E", nisn: "0091711398", noHp: "-", alamat: "Dusun Gunung Pandak, Desa/Kel. Kademangan, Kec. Pagelaran", jk: "Laki-laki" },
    { id: 24, nama: "Ahmad Maulana Nur Hamim", kelas: "XI-E", nisn: "3107922442", noHp: "-", alamat: "Dsn Segenggeng, Wonokerso, Kec. Pakisaji", jk: "Laki-laki" },
    { id: 25, nama: "Ahmad Mudzakkir", kelas: "XI-E", nisn: "0096559941", noHp: "083834618546", alamat: "Jatikerto 00, Jatikerto, Kec. Kromengan", jk: "Laki-laki" },
    { id: 26, nama: "Ahmad Ramadhani", kelas: "XII-C", nisn: "3095814923", noHp: "-", alamat: "Jl. Banyu Anyar Gang 1, Ketawang, Kec. Gondanglegi", jk: "Laki-laki" },
    { id: 27, nama: "Ahmad Wildan Nasrullah", kelas: "X-A", nisn: "0117395401", noHp: "087770813390", alamat: "Mbiru 62, Gunungrejo, Kec. Singosari", jk: "Laki-laki" },
    { id: 28, nama: "Ahmad Yani", kelas: "XI-E", nisn: "0095718861", noHp: "082339180997", alamat: "Kedungbanteng 398, Kedungbanteng, Kec. Sumbermanjing Wetan", jk: "Laki-laki" },
    { id: 29, nama: "Aida Qurrota Ayun", kelas: "X-A", nisn: "0118108523", noHp: "081217297292", alamat: "Dusun Krajan 122, Srigonco, Kec. Bantur", jk: "Perempuan" },
    { id: 30, nama: "Ailicia Askana Sakhi", kelas: "X-C", nisn: "3106592242", noHp: "082131953202", alamat: "Dampit, Kec. Dampit", jk: "Perempuan" },
    { id: 31, nama: "Aira Ayudia Putri", kelas: "XII-C", nisn: "0094342501", noHp: "-", alamat: "Jl. Sukosari, Desa/Kel. Sukosari, Kec. Gondanglegi", jk: "Perempuan" },
    { id: 32, nama: "Aisyah Mar'atus Sholihah", kelas: "XI-E", nisn: "0102131736", noHp: "-", alamat: "Tumpakrejo 5210, Rejoyoso, Kec. Bantur", jk: "Perempuan" },
    { id: 33, nama: "Akhmad Jauharul Anwar", kelas: "X-A", nisn: "3104370482", noHp: "-", alamat: "Jln. Lubuk Buntak, Tirta Makmur, Kec. Air Kumbang", jk: "Laki-laki" },
    { id: 34, nama: "Al Mar`ah Kalbadriyatul Khoiriyah", kelas: "X-A", nisn: "3109703747", noHp: "-", alamat: "Sarirejo, Desa/Kel. Sumberputih, Kec. Wajak", jk: "Perempuan" },
    { id: 35, nama: "Alexandra Alza Zanuar", kelas: "XI-E", nisn: "3102544704", noHp: "-", alamat: "Jl. Tebo Utara, Mulyorejo, Kec. Sukun", jk: "Perempuan" },
    { id: 36, nama: "Alfa Aprilia Pangestuti", kelas: "X-A", nisn: "0103427486", noHp: "082131188149", alamat: "Jl. Garuda 142, Karangpandan, Kec. Pakisaji", jk: "Perempuan" },
    { id: 37, nama: "Alfan Firmansyah", kelas: "XI-E", nisn: "0104836580", noHp: "-", alamat: "Krajan 13, Kaliuling, Kec. Tempursari", jk: "Laki-laki" },
    { id: 38, nama: "Alfi Khoirun Nissa`", kelas: "XII-C", nisn: "3088663277", noHp: "-", alamat: "Jl. Sukosari, Desa/Kel. Sukosari, Kec. Gondanglegi", jk: "Perempuan" },
    { id: 39, nama: "Alfima Azmi Imananda", kelas: "XI-E", nisn: "3108391735", noHp: "-", alamat: "Jl. Madura, Tumpukrenteng, Kec. Turen", jk: "Perempuan" },
    { id: 40, nama: "Aliviah Putri Antartika", kelas: "X-B", nisn: "0107723770", noHp: "081336033483", alamat: "Amadanom Selatan 31, Amadanom, Kec. Dampit", jk: "Perempuan" },
    { id: 41, nama: "Alviana Nurlaila", kelas: "XI-C", nisn: "0095688217", noHp: "082228922169", alamat: "Jl. KH. Moh. Sa'id 12, Ketapang, Sukoraharjo, Kec. Gondanglegi", jk: "Perempuan" },
    { id: 42, nama: "Alya Hibabah Hakim", kelas: "X-A", nisn: "0102157193", noHp: "085101281168", alamat: "Kenongo 31, Desa/Kel. Putat Lor, Kec. Gondanglegi", jk: "Perempuan" },
    { id: 43, nama: "Alya Shinta Zahrani Maulida", kelas: "XII-D", nisn: "0092672418", noHp: "-", alamat: "Jl. Sukosari, Desa/Kel. Sukosari, Kec. Gondanglegi", jk: "Perempuan" },
    { id: 44, nama: "Aminatul Ulla", kelas: "XII-D", nisn: "0091123197", noHp: "-", alamat: "Jl. Sukosari, Desa/Kel. Sukosari, Kec. Gondanglegi", jk: "Perempuan" },
    { id: 45, nama: "Anas Rullah", kelas: "XII-C", nisn: "3088181856", noHp: "-", alamat: "Jl. Jogoyudho, Sekardangan, Kec. Sidoarjo", jk: "Laki-laki" },
    { id: 46, nama: "Angelita Ambar Sari", kelas: "XI-E", nisn: "-", noHp: "-", alamat: "Jl. KH. Syamsul Arifin, Putukrejo, Kec. Gondanglegi", jk: "Perempuan" },
    { id: 47, nama: "Angga Aditya Saputra", kelas: "XII-C", nisn: "0085902605", noHp: "-", alamat: "Bulupayung 387, Krebet, Kec. Bululawang", jk: "Laki-laki" },
    { id: 48, nama: "Annahiza Qiana Syakira", kelas: "XI-E", nisn: "0093356257", noHp: "-", alamat: "Jl. Sentra Primer, Pulo Gebang, Kec. Cakung", jk: "Perempuan" },
    { id: 49, nama: "Anwarul Qolbi", kelas: "XI-B", nisn: "3106727524", noHp: "-", alamat: "Sumber Duren 248, Sidodadi, Kec. Gedangan", jk: "Laki-laki" },
    { id: 50, nama: "Arfazka Zhafir Abimanyu", kelas: "X-B", nisn: "0106277953", noHp: "-", alamat: "Jl. Pahlawan No. 0244, Dampit, Kec. Dampit", jk: "Laki-laki" },
    { id: 51, nama: "Arista Ayu Andary", kelas: "XII-D", nisn: "3093346839", noHp: "-", alamat: "Jl. Tugu RT/RW 01/01, Pagedangan, Kec. Turen", jk: "Perempuan" },
    { id: 52, nama: "Arsandy Rakha Pratama", kelas: "XI-E", nisn: "0096210921", noHp: "082132587063", alamat: "Kesamben Wetan 11, Pasinan Lemahputih, Kec. Wringin Anom", jk: "Laki-laki" },
    { id: 53, nama: "Arum Permatasari", kelas: "XI-C", nisn: "0092569432", noHp: "081231755196", alamat: "Tretes 215, Tretes, Jogomulyan, Kec. Gondanglegi", jk: "Perempuan" },
    { id: 54, nama: "As Syifaul Aini", kelas: "XI-C", nisn: "0091408199", noHp: "-", alamat: "Sumber Bulus 112, Oro Oro Ombo, Kec. Pronojiwo", jk: "Perempuan" },
    { id: 55, nama: "Astried Novita Sari", kelas: "XI-E", nisn: "3097186823", noHp: "-", alamat: "Druju RT 08 RW 02, Kec. Sumbermanjing Wetan", jk: "Perempuan" },
    { id: 56, nama: "Asyifa Titi Syaif Lestari Putri", kelas: "XI-A", nisn: "0095209069", noHp: "089699500493", alamat: "Perum Puskopad B-1653, Arjowinangun, Kec. Kedungkandang", jk: "Perempuan" },
    { id: 57, nama: "Atika Nazilatul Mukarromah", kelas: "X-A", nisn: "0104706218", noHp: "085730334744", alamat: "Kertowinangun 245, Tangkilsari, Kec. Tajinan", jk: "Perempuan" },
    { id: 58, nama: "Auliya Ainur Rohmah", kelas: "XII-D", nisn: "3096022405", noHp: "-", alamat: "Jl. Sepanjang, Sepanjang, Kec. Gondanglegi", jk: "Perempuan" },
    { id: 59, nama: "Auliya Fitriatuzzahro", kelas: "X-A", nisn: "0101765470", noHp: "085895434063", alamat: "Krajan Kidul, Rt.002/001 21, Kec. Gedangan", jk: "Perempuan" },
    { id: 60, nama: "Ayatullah Kaizam", kelas: "X-A", nisn: "0117302813", noHp: "085733967626", alamat: "Sumbergentong 233, Klepu, Kec. Sumbermanjing Wetan", jk: "Laki-laki" },
    { id: 61, nama: "Ayu Rahayu Tri Dwi Asmarani", kelas: "XII-C", nisn: "3082847970", noHp: "-", alamat: "Ds. Sumberejo RT/RW 46/11, Sumberejo, Kec. Poncokusumo", jk: "Perempuan" },
    { id: 62, nama: "Azka Hafizhah", kelas: "X-C", nisn: "0113856899", noHp: "081336898872", alamat: "Jl. Pesantren 283, Rembun, Kec. Dampit", jk: "Perempuan" },
    { id: 63, nama: "Azmil Naylatuzzamrudyah Azzara", kelas: "X-B", nisn: "3108009225", noHp: "-", alamat: "Ardirejo, Ardirejo, Kec. Gondanglegi", jk: "Perempuan" },
    { id: 64, nama: "Bintang Nur Pratiwi", kelas: "XI-A", nisn: "0093092616", noHp: "081326472383", alamat: "Druju 162, Druju, Kec. Sumbermanjing Wetan", jk: "Perempuan" },
    { id: 65, nama: "Bulan Putri Oktaviona", kelas: "XI-D", nisn: "0098777554", noHp: "081216823818", alamat: "Jl. Kusuma 355, Bandungkarangkates, Kec. Sumberpucung", jk: "Perempuan" },
    { id: 66, nama: "Cesilia Aira Aringga Putri", kelas: "XI-B", nisn: "3099339673", noHp: "-", alamat: "Druju 11, Druju, Kec. Sumbermanjing Wetan", jk: "Perempuan" },
    { id: 67, nama: "Cheryl Lucita Risnani", kelas: "X-A", nisn: "0116635878", noHp: "081249185850", alamat: "Jalan Subur 102, Sempalwadak, Kec. Bululawang", jk: "Perempuan" },
    { id: 68, nama: "Chusnul Thania Aulia Kheren", kelas: "XI-A", nisn: "0091891014", noHp: "-", alamat: "Druju RT 03/ RW 01, Druju, Kec. Sumbermanjing Wetan", jk: "Perempuan" },
    { id: 69, nama: "Cika Diah Aprilia", kelas: "XI-D", nisn: "0103499889", noHp: "082229356177", alamat: "Segenggeng 174, Wonokerso, Kec. Pakisaji", jk: "Perempuan" },
    { id: 70, nama: "Davina Hanifatul Kholifah", kelas: "XII-C", nisn: "0094752816", noHp: "-", alamat: "Jl. LA Sucipto Rt/Rw 06/10, Pandanwangi, Kec. Blimbing", jk: "Perempuan" },
    { id: 71, nama: "Desti Ayu Nadira Ainurohma", kelas: "XI-D", nisn: "0095168923", noHp: "082318344850", alamat: "Jl. Pesantren 395, Bandungkarangkates, Kec. Sumberpucung", jk: "Perempuan" },
    { id: 72, nama: "Devi Laxmi", kelas: "XII-D", nisn: "3095568398", noHp: "-", alamat: "Jl. Balearjo, Balearjo, Kec. Pagelaran", jk: "Perempuan" },
    { id: 73, nama: "Devi Niswatun Hasanah", kelas: "XI-A", nisn: "3101065884", noHp: "-", alamat: "Jl. Mawar, Putat Lor, Kec. Gondanglegi", jk: "Perempuan" },
    { id: 74, nama: "Devina Aulia Vildi", kelas: "XII-D", nisn: "0085359871", noHp: "-", alamat: "Jl. Sukosari, Desa/Kel. Sukosari, Kec. Gondanglegi", jk: "Perempuan" },
    { id: 75, nama: "Dewi Khoirotul Faizah", kelas: "XI-E", nisn: "3064099844", noHp: "081259337663", alamat: "Jl. Pesantren RT 21 RW 6216, Jeru, Kec. Turen", jk: "Perempuan" },
    { id: 76, nama: "Dewi Masito", kelas: "XI-C", nisn: "3101222912", noHp: "-", alamat: "Sumber Bulus 112, Oro Oro Ombo, Kec. Pronojiwo", jk: "Perempuan" },
    { id: 77, nama: "Dhanurendra Annaja", kelas: "X-B", nisn: "0118938344", noHp: "085850769791", alamat: "Krajan IB 167, Lebakharjo, Kec. Ampelgading", jk: "Laki-laki" },
    { id: 78, nama: "Dhiya'ulhaq Muzakki Rizqulloh", kelas: "X-C", nisn: "0107567370", noHp: "-", alamat: "Jl. Kampung Bugis RT 002, Batu Putih, Berau", jk: "Laki-laki" },
    { id: 79, nama: "Diah Novitasari", kelas: "XII-D", nisn: "0096718016", noHp: "085645053183", alamat: "Jl. Krajan 221, Rejosari, Kec. Bantur", jk: "Perempuan" },
    { id: 80, nama: "Diana Falahia Maghfiroh", kelas: "XII-D", nisn: "0098896941", noHp: "-", alamat: "Jl. Sukosari, Desa/Kel. Sukosari, Kec. Gondanglegi", jk: "Perempuan" },
    { id: 81, nama: "Diana Izza Billa", kelas: "XII-D", nisn: "0072259337", noHp: "083848946897", alamat: "Panggung Rejo 103, Panggung Rejo, Kec. Kepanjen", jk: "Perempuan" },
    { id: 82, nama: "Dinar Aulia Ramadhani", kelas: "XII-C", nisn: "0085152315", noHp: "-", alamat: "Jl. Kalinyamat RT/RW 09/08, Jenggolo, Kec. Kepanjen", jk: "Perempuan" },
    { id: 83, nama: "Dinda Cahaya Maqfiroh", kelas: "XI-A", nisn: "0099330251", noHp: "081332040044", alamat: "Dsn Kasim 38, Ploso, Kec. Selopuro", jk: "Perempuan" },
    { id: 84, nama: "Dini Aulia Safitri", kelas: "XI-D", nisn: "0106933863", noHp: "082132521267", alamat: "Sbr Petung 2221, Pagak, Kec. Pagak", jk: "Perempuan" },
    { id: 85, nama: "Dini Feronika Maghfiroh", kelas: "XII-D", nisn: "0094688884", noHp: "-", alamat: "Jl. Sukosari, Desa/Kel. Sukosari, Kec. Gondanglegi", jk: "Perempuan" },
    { id: 86, nama: "Diva Aulia Dwi Ramadhani", kelas: "XI-D", nisn: "0096471941", noHp: "082232315819", alamat: "Jl. KH. Agus Salim 355, Majangtengah, Kec. Dampit", jk: "Perempuan" },
    { id: 87, nama: "Diva Bilqis Aprilia", kelas: "X-A", nisn: "0121806258", noHp: "085846666505", alamat: "Dahlia 82, Adiluwih, Karangsuko, Kec. Pagelaran", jk: "Perempuan" }
];

// Selektor Elemen HTML
const studentTableBody = document.getElementById('studentTableBody');
const searchInput = document.getElementById('searchInput');
const btnTambah = document.getElementById('btnTambah');
const studentModal = document.getElementById('studentModal');
const closeModal = document.getElementById('closeModal');
const studentForm = document.getElementById('studentForm');
const modalTitle = document.getElementById('modalTitle');
const studentIndex = document.getElementById('studentIndex');

const detailModal = document.getElementById('detailModal');
const closeDetailModal = document.getElementById('closeDetailModal');
const detailNisn = document.getElementById('detailNisn');
const detailNama = document.getElementById('detailNama');
const detailKelas = document.getElementById('detailKelas');
const detailJk = document.getElementById('detailJk');
const detailNoHp = document.getElementById('detailNoHp');
const detailAlamat = document.getElementById('detailAlamat');

// Fungsi Menampilkan Data ke Tabel
function renderTable(data = students) {
    studentTableBody.innerHTML = '';
    
    if (data.length === 0) {
        studentTableBody.innerHTML = `<tr><td colspan="7" style="text-align: center; color: #777;">Tidak ada data siswa.</td></tr>`;
        return;
    }

    data.forEach((student, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${student.nisn}</td>
            <td>${student.nama}</td>
            <td>${student.kelas}</td>
            <td>${student.jk}</td>
            <td>${student.noHp}</td>
            <td>
                <button class="btn btn-info" onclick="viewDetail(${index})" title="Detail"><i class="fa-solid fa-eye"></i></button>
                <button class="btn btn-warning" onclick="editStudent(${index})" title="Edit"><i class="fa-solid fa-pen-to-square"></i></button>
                <button class="btn btn-danger" onclick="deleteStudent(${index})" title="Hapus"><i class="fa-solid fa-trash"></i></button>
            </td>
        `;
        studentTableBody.appendChild(row);
    });
}

// Simpan ke LocalStorage
function saveToLocalStorage() {
    localStorage.setItem('students', JSON.stringify(students));
}

// Buka Modal Tambah
btnTambah.addEventListener('click', () => {
    modalTitle.textContent = "Tambah Data Siswa";
    studentForm.reset();
    studentIndex.value = '';
    studentModal.style.display = 'flex';
});

// Tutup Modal Form
closeModal.addEventListener('click', () => {
    studentModal.style.display = 'none';
});

// Tutup Modal Detail
closeDetailModal.addEventListener('click', () => {
    detailModal.style.display = 'none';
});

// Tutup modal jika klik di luar kotak modal
window.addEventListener('click', (e) => {
    if (e.target === studentModal) studentModal.style.display = 'none';
    if (e.target === detailModal) detailModal.style.display = 'none';
});

// Submit Form (Tambah / Edit)
studentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const nisn = document.getElementById('nisn').value;
    const nama = document.getElementById('nama').value;
    const kelas = document.getElementById('kelas').value;
    const jk = document.getElementById('jk').value;
    const noHp = document.getElementById('noHp').value;
    const alamat = document.getElementById('alamat').value;
    const idx = studentIndex.value;

    if (idx === '') {
        // Tambah Data Baru
        students.push({ id: students.length + 1, nisn, nama, kelas, jk, noHp, alamat });
    } else {
        // Edit Data
        students[idx] = { ...students[idx], nisn, nama, kelas, jk, noHp, alamat };
    }

    saveToLocalStorage();
    renderTable();
    studentModal.style.display = 'none';
});

// Fungsi Detail Siswa
function viewDetail(index) {
    const s = students[index];
    detailNisn.textContent = s.nisn;
    detailNama.textContent = s.nama;
    detailKelas.textContent = s.kelas;
    detailJk.textContent = s.jk;
    detailNoHp.textContent = s.noHp;
    detailAlamat.textContent = s.alamat || '-';
    
    detailModal.style.display = 'flex';
}

// Fungsi Edit Siswa
function editStudent(index) {
    const s = students[index];
    modalTitle.textContent = "Edit Data Siswa";
    document.getElementById('nisn').value = s.nisn;
    document.getElementById('nama').value = s.nama;
    document.getElementById('kelas').value = s.kelas;
    document.getElementById('jk').value = s.jk;
    document.getElementById('noHp').value = s.noHp;
    document.getElementById('alamat').value = s.alamat;
    studentIndex.value = index;

    studentModal.style.display = 'flex';
}

// Fungsi Hapus Siswa
function deleteStudent(index) {
    if (confirm(`Apakah Anda yakin ingin menghapus data ${students[index].nama}?`)) {
        students.splice(index, 1);
        saveToLocalStorage();
        renderTable();
    }
}

// Fitur Pencarian Realtime (Berdasarkan Nama atau NISN)
searchInput.addEventListener('input', (e) => {
    const keyword = e.target.value.toLowerCase();
    const filtered = students.filter(s => 
        s.nama.toLowerCase().includes(keyword) || s.nisn.toLowerCase().includes(keyword)
    );
    renderTable(filtered);
});

// Panggil render pertama kali saat halaman dimuat
renderTable();
