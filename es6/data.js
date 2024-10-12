const dataMahasiswa = [
  {
    id: 1,
    nama: "Budi Santoso",
    tanggalLahir: "2000-01-15",
    fakultas: "Fakultas Ilmu Komputer",
    programStudi: "Teknik Informatika",
    semester: 6,
    nilai: {
      algoritma: 85,
      basisData: 88,
      pemrogramanWeb: 90,
    },
    aktif: true,
    organisasi: ["Himpunan Mahasiswa Teknik", "Komunitas Pemrograman"],
  },
  {
    id: 2,
    nama: "Siti Aminah",
    tanggalLahir: "1999-05-10",
    fakultas: "Fakultas Ekonomi",
    programStudi: "Manajemen",
    semester: 4,
    nilai: {
      manajemenKeuangan: 78,
      akuntansi: 82,
      pemasaran: 75,
    },
    aktif: true,
    organisasi: ["Koperasi Mahasiswa"],
  },
  {
    id: 3,
    nama: "Rudi Hartono",
    tanggalLahir: "1998-12-01",
    fakultas: "Fakultas Teknik",
    programStudi: "Teknik Sipil",
    semester: 8,
    nilai: {
      mekanikaTanah: 85,
      strukturBangunan: 89,
    },
    aktif: false,
    organisasi: ["Himpunan Mahasiswa Teknik Sipil"],
  },
];

//Destructuring seluruh field (saya menggunakan spread operator)
console.log("Destructuring seluruh field (saya menggunakan spread operator)");

const [...dataMhs] = dataMahasiswa;
const {
  id,
  nama,
  tanggalLahir,
  fakultas,
  programStudi,
  semester,
  nilai,
  aktif,
  organisasi,
} = dataMhs[0];
console.log(
  id,
  nama,
  tanggalLahir,
  fakultas,
  programStudi,
  semester,
  nilai,
  aktif,
  organisasi
);

//Destructuring nilai tanpa spread
console.log("Destructuring nilai tanpa spread");

const { algoritma, basisData, pemrogramanWeb } = nilai;
console.log(
  `nilai algoritma: ${algoritma}, basis data : ${basisData}, pemrograman web : ${pemrogramanWeb}`
);

//Destructuring organisasi dengan spread
console.log("Destructuring organisasi dengan spread");

const [...organisasiMhs] = organisasi;
console.log(organisasiMhs);

//Update pada field fakultas dan field semester
console.log(
  "Update Mahasiswa Budi Santoso pada field fakultas dan field semester"
);
const updateDataMhs = {
  ...dataMhs[0],
  fakultas: "Fakultas Pendakian",
  semester: 13,
};
console.log(updateDataMhs);

//Split pada field tanggal lahir dan tampilkan tahun saja
console.log("Split pada field tanggal lahir dan tampilkan tahun saja");
const thnLahir = tanggalLahir.split("-");
console.log(thnLahir[0]);

//Conditional Operator ‘?’
console.log("Conditional Operator ‘?’");

const genMhs = thnLahir[0] < 2004 ? "Gen Tua" : "Gen Z";
console.log(genMhs);

//Map tampilkan semua nama mahasiswa
console.log("Map tampilkan semua nama mahasiswa");

const namaMhs = dataMhs.map((mhs) => mhs.nama);
console.log(namaMhs);

//Filtering tampilkan semua mahasiswa yang aktif dan dari Fakultas Ilmu Komputer
console.log(
  "Filtering tampilkan semua mahasiswa yang aktif dan dari Fakultas Ilmu Komputer"
);

const mhsAktifIlmuKomputer = dataMhs.filter(
  (mhs) => mhs.aktif === true && mhs.fakultas === "Fakultas Ilmu Komputer"
);
console.log(mhsAktifIlmuKomputer);

//Totalkan nilai seluruh mahasiswa
console.log("Totalkan nilai seluruh mahasiswa");

const totalNilaiMhs = dataMhs.reduce((total, mhs) => {
  const nilaiMhs = Object.values(mhs.nilai);
  const totalMhs = nilaiMhs.reduce((sum, nilai) => sum + nilai, 0);
  return total + totalMhs;
}, 0);

console.log(`Total nilai seluruh mahasiswa: ${totalNilaiMhs}`);

//Sort seluruh mahasiswa berdasarkan semester (saya menampilkan namanya)
console.log(
  "Sort seluruh mahasiswa berdasarkan semester (saya menampilkan namanya)"
);

const sortMhs = dataMhs.sort((a, b) => a.semester - b.semester);
const namaSortMhs = sortMhs.map((mhs) => mhs.nama);
console.log(namaSortMhs);

//Menambahkan Mahasiswa Baru
console.log("Menambahkan Mahasiswa Baru");

const newMhs = {
  id: 4,
  nama: "Budiono Siregar",
  tanggalLahir: "2005-01-11",
  fakultas: "Fakultas Perkapalan",
  programStudi: "Manajemen Kapal Lawd",
  semester: 14,
  nilai: {
    studiHargaBesi: 90,
    arahMataAngin: 80,
    navigasi: 100,
  },
  aktif: true,
  organisasi: ["Kumpulan Mahasiswa Kapal Lawd"],
};

dataMhs.push(newMhs);

console.log(dataMhs);

//Delete dan Update pada salah satu Mahasiswa
console.log("Delete dan Update pada salah satu Mahasiswa");

//Delete mhs budi santoso
console.log("Delete mhs Budi Santoso");
const deleteMhsIndex = dataMhs.findIndex((mhs) => mhs.id === 1);
const deleteMhs = dataMhs.splice(deleteMhsIndex, 1);

console.log(dataMhs);

//Update mhs budiono siregar
console.log("Update mhs Budiono Siregar");
dataMhs[2] = { ...dataMhs[2], semester: 12 };
console.log(dataMhs);
