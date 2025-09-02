console.log("JavaScript habilitado");

// Toggle sidebar
document.getElementById("toggle-btn").addEventListener("click", function() {
  document.getElementById("sidebar").classList.toggle("collapsed");
});

// Forçar inicialização do collapse do navbar (Bootstrap 5)
var myCollapse = document.getElementById('navbarNav');
var bsCollapse = new bootstrap.Collapse(myCollapse, { toggle: false });

// Função de exemplo
function decodeUplink(input) {
  var bytes = input.bytes;
  var data = {};
  data.spo2 = bytes[0];
  data.respiration = bytes[1];
  data.stress = bytes[2];
  data.hrv = (bytes[3] << 8) | bytes[4];
  data.activity = bytes[5];
  data.sbp = bytes[6];
  data.dbp = bytes[7];
  data.calories = (bytes[8] | (bytes[9] << 8));
  data.skin_temp = (bytes[10] | (bytes[11] << 8)) / 100;
  data.steps = (bytes[12] | (bytes[13] << 8));
  data.body_temp = (bytes[14] | (bytes[15] << 8)) / 100;
  data.heart_rate = bytes[16];
  data.sos = bytes[17];
  data.battery = bytes[18];
  data.fall = bytes[19];
  return { data: data };
}
