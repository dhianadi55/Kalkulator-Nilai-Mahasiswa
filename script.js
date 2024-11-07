function calculateGrade() {
    // Deklarasi konstanta untuk bobot masing-masing komponen nilai
    const tugasWeight = 0.3;
    const utsWeight = 0.3;
    const uasWeight = 0.4;
    const passingGrade = 60; // Nilai minimum untuk lulus

    // Mengambil nilai input dari form
    const tugas = parseFloat(document.getElementById('tugas').value);
    const uts = parseFloat(document.getElementById('uts').value);
    const uas = parseFloat(document.getElementById('uas').value);

    // Validasi input agar berada di antara 0 dan 100
    if (isNaN(tugas) || isNaN(uts) || isNaN(uas) || tugas < 0 || tugas > 100 || uts < 0 || uts > 100 || uas < 0 || uas > 100) {
        alert("Silakan masukkan nilai antara 0 dan 100 untuk semua komponen."); // Peringatan jika input tidak valid
        return; // Menghentikan fungsi jika input tidak valid
    }

    // Menghitung nilai rata-rata tertimbang berdasarkan bobot yang telah ditetapkan
    const finalScore = (tugas * tugasWeight) + (uts * utsWeight) + (uas * uasWeight);

    let gradeLetter = ''; // Variabel untuk menyimpan nilai huruf
    let status = ''; // Variabel untuk status kelulusan

    // Menentukan nilai huruf berdasarkan finalScore
    if (finalScore >= 90) {
        gradeLetter = 'A';
    } else if (finalScore >= 80) {
        gradeLetter = 'B';
    } else if (finalScore >= 70) {
        gradeLetter = 'C';
    } else if (finalScore >= 60) {
        gradeLetter = 'D';
    } else {
        gradeLetter = 'E';
    }

    // Menentukan status kelulusan
    if (finalScore >= passingGrade) {
        status = '<span class="success">Lulus</span>'; // Status lulus dengan warna hijau
    } else {
        status = '<span class="fail">Gagal</span>'; // Status gagal dengan warna merah
    }

    // Menampilkan hasil perhitungan di dalam elemen dengan id 'result'
    document.getElementById('result').innerHTML = `
        <p>Nilai Tugas: ${tugas} (Bobot ${tugasWeight * 100}%)</p>
        <p>Nilai UTS: ${uts} (Bobot ${utsWeight * 100}%)</p>
        <p>Nilai UAS: ${uas} (Bobot ${uasWeight * 100}%)</p>
        <p>Rata-rata Tertimbang: ${finalScore.toFixed(2)}</p> <!-- Menampilkan nilai akhir dengan 2 desimal -->
        <p>Nilai Huruf: ${gradeLetter}</p> <!-- Menampilkan nilai huruf -->
        <p>Status: ${status}</p> <!-- Menampilkan status lulus/gagal -->
    `;
}
