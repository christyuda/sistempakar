const HeadacheSymptoms = new Map([
  [1, "Rasa nyeri terus menerus pada kedua sisi kepala"],
  [2, "Terasa tekanan di belakang mata"],
  [3, "Otot leher yang tegang"],
  [4, "Adanya rasa mual"],
  [5, "Rasa demam dan linglung"],
  [6, "Pandangan kabur"],
  [7, "Sakit kepala pada satu sisi"],
  [8, "Kepala terasa sering berdenyut"],
  [9, "Pening"],
  [10, "Menjadi sensitif pada suara, bau, cahaya, atau sentuhan"],
  [11, "Nyeri disertai sensasi terbakar atau tertusuk"],
  [12, "Terasa sakit di sisi kepala yang sama"],
  [13, "Sakit terpusat di belakang satu mata"],
  [14, "Hidung tersumbat"],
  [15, "Mata berair"]
]);

const listAllSymptom = [...HeadacheSymptoms.keys()];
const MigrainSymptom = [6, 7, 8, 9, 10];
const TensionHeadacheSymptom = [1, 2, 3, 4, 5];
const ClusterHeadacheSymptom = [11, 12, 13, 14, 15];

function arraysEqual(a, b) {
    if (a.length !== b.length) {
        return false;
    }
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            return false;
        }
    }
    return true;
}
function checkSymptom(listSymptom) {
  const hasMigrain = listSymptom.some(symptom => MigrainSymptom.includes(symptom));
  const hasTensionHeadache = listSymptom.some(symptom => TensionHeadacheSymptom.includes(symptom));
  const hasClusterHeadache = listSymptom.some(symptom => ClusterHeadacheSymptom.includes(symptom));

  if (hasMigrain && hasTensionHeadache && hasClusterHeadache) {
    return "Kamu mengalami gejala yang termasuk dalam jenis Migrain, Tension Headache, dan Cluster Headache.";
  } else if (hasMigrain && hasTensionHeadache) {
    return "Kamu mengalami gejala yang termasuk dalam jenis Migrain dan Tension Headache.";
  } else if (hasMigrain && hasClusterHeadache) {
    return "Kamu mengalami gejala yang termasuk dalam jenis Migrain dan Cluster Headache.";
  } else if (hasTensionHeadache && hasClusterHeadache) {
    return "Kamu mengalami gejala yang termasuk dalam jenis Tension Headache dan Cluster Headache.";
  } else if (hasMigrain) {
    return "Kamu mengalami Sakit Kepala dengan Jenis Migrain";
  } else if (hasTensionHeadache) {
    return "Kamu mengalami Sakit Kepala dengan jenis Sakit Kepala Tegang";
  } else if (hasClusterHeadache) {
    return "Kamu mengalami Sakit Kepala dengan jenis Sakit Kepala Cluster";
  } else if (listSymptom.length === 0) {
    return "Kamu belum memilih gejala apa pun. Silakan pilih setidaknya satu gejala.";
  } else {
    return "Kamu mengalami gejala sakit kepala, namun tidak termasuk dalam jenis yang telah ditentukan.";
  }
}



document.addEventListener("DOMContentLoaded", function () {
  const submitBtn = document.getElementById("submitBtn");
  const modalElement = document.getElementById("modal");

  submitBtn.addEventListener("click", function () {
    const selectedOptions = [];
    for (let i = 1; i <= 15; i++) {
      const selectElement = document.getElementById("question" + i);
      const selectedValue = selectElement.value;
      if (selectedValue === "iya") {
        selectedOptions.push(i);
      }
    }
    const diagnosis = checkSymptom(selectedOptions);

    modalElement.classList.remove("hidden");

    modalElement.querySelector("#result").textContent = diagnosis;
  });

  modalElement.querySelector(".modal-close").addEventListener("click", function () {
    modalElement.classList.add("hidden");
  });
});

