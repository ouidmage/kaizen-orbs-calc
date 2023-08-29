const orbContainers = document.querySelectorAll(".orb-container");

const bossOrbs = {
  yakuza: {
    materials: ["Garnet", "Bronze"],
  },
  scarga: {
    materials: ["Amethyst", "Steel Plate"],
  },
  krexel: {
    materials: ["AquaMarine", "Mithril Plate"],
  },
  zakum: {
    materials: ["Emerald", "Adamantium Plate"],
  },
  vonleon: {
    materials: ["Opal", "Silver Plate"],
  },
  toad: {
    materials: ["Sapphire", "Orihalcon Plate"],
  },
  horntail: {
    materials: ["Topaz", "Gold Plate"],
  },
  pinkbean: {
    materials: ["Black Crystal", "Lidium"],
  },
};

function calculate() {
  const materialCounts = {};

  orbContainers.forEach((container) => {
    const label = container.querySelector("label");
    const labelId = label.getAttribute("id");

    const baseInput = container.querySelector('input[id$="-base"]');
    const addInput = container.querySelector('input[id$="-add"]');

    const baseValue = parseFloat(baseInput.value);
    const addValue = parseFloat(addInput.value);

    const totalOrbs = baseValue + addValue;

    let materialsRequired = 0;
    let start = baseValue;

    if (addValue > 0) {
      for (let i = baseValue; i <= totalOrbs - 1; i++) {
        console.log(
          "BEFORE:\n" +
            "Start: " +
            start +
            "\n" +
            "Materials Required: " +
            materialsRequired +
            "\n" +
            "i: " +
            i +
            "\n"
        );
        if (0 <= start && start < 4) {
          materialsRequired += 1;
          start += 1;
        } else if (4 <= start && start < 8) {
          materialsRequired += 2;
          start += 1;
        } else if (8 <= start && start < 12) {
          materialsRequired += 3;
          start += 1;
        } else if (12 <= start && start < 16) {
          materialsRequired += 4;
          start += 1;
        } else if (16 <= start && start < 20) {
          materialsRequired += 5;
          start += 1;
        }
        console.log(
          "AFTER:\n" +
            "Start: " +
            start +
            "\n" +
            "Materials Required: " +
            materialsRequired
        );
      }
    }

    const materials = bossOrbs[labelId].materials;

    materials.forEach((material) => {
      if (!materialCounts[material]) {
        materialCounts[material] = 0;
      }
      materialCounts[material] += materialsRequired;
    });
  });

  let resultString = "Materials Required:<br>";
  for (const material in materialCounts) {
    if (materialCounts[material] > 0) {
      resultString += `${material}: ${materialCounts[material]}<br>`;
    }
  }

  const resultElement = document.getElementById("result");
  resultElement.innerHTML = resultString;
}
