function decodeUplink(input) {
  var bytes = input.bytes;
  var data = {};

  // --- primeiros campos ---
  data.spo2 = bytes[0];                // SpO2 (0-99)
  data.respiration = bytes[1];         // Respiração (rpm)
  data.stress = bytes[2];              // Stress (0-255)
  data.hrv = (bytes[3] << 8) | bytes[4]; // HRV (ms)
  data.activity = bytes[5];            // Nível de atividade
  data.sbp = bytes[6];                 // Pressão sistólica
  data.dbp = bytes[7];                 // Pressão diastólica
  data.calories = (bytes[8] | (bytes[9] << 8)); // calorias
  data.skin_temp = (bytes[10] | (bytes[11] << 8)) / 100; // °C
  data.steps = (bytes[12] | (bytes[13] << 8));  // passos
  data.body_temp = (bytes[14] | (bytes[15] << 8)) / 100; // °C
  data.heart_rate = bytes[16];         // bpm
  data.sos = bytes[17];                // 0/1
  data.battery = bytes[18];            // %
  data.fall = bytes[19];               // 0/1

  // (exemplo parcial, mas já útil para validar)
  return { data: data };
}