function isValidEmail(email) {
    var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  }

  // Fungsi validasi nomor handphone
  function isValidPhone(phone) {
    var pattern = /^[0-9\-\+\(\) ]{5,}$/;
    return pattern.test(phone);
  };

