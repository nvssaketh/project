const fertilizerSuggestions = {
    wheat: {
        black: {
            low: { fertilizers: ["Urea", "Ammonium Nitrate"], manure: ["Farmyard Manure", "Green Manure"] },
            neutral: { fertilizers: ["Superphosphate", "Potassium Nitrate"], manure: ["Compost", "Vermicompost"] },
            high: { fertilizers: ["Sulfur", "Gypsum"], manure: ["Peat", "Mushroom Compost"] }
        },
        alluvial: {
            low: { fertilizers: ["Urea", "Ammonium Sulfate"], manure: ["Farmyard Manure", "Green Manure"] },
            neutral: { fertilizers: ["Superphosphate", "Potassium Chloride"], manure: ["Compost", "Vermicompost"] },
            high: { fertilizers: ["Sulfur", "Elemental Sulfur"], manure: ["Peat", "Mushroom Compost"] }
        },
        red: {
            low: { fertilizers: ["Ammonium Nitrate", "Urea"], manure: ["Farmyard Manure", "Green Manure"] },
            neutral: { fertilizers: ["Superphosphate", "Potassium Sulfate"], manure: ["Compost", "Vermicompost"] },
            high: { fertilizers: ["Sulfur", "Gypsum"], manure: ["Peat", "Mushroom Compost"] }
        },
        laterite: {
            low: { fertilizers: ["Urea", "Ammonium Nitrate"], manure: ["Farmyard Manure", "Green Manure"] },
            neutral: { fertilizers: ["Triple Superphosphate", "Potassium Chloride"], manure: ["Compost", "Vermicompost"] },
            high: { fertilizers: ["Sulfur", "Gypsum"], manure: ["Peat", "Mushroom Compost"] }
        }
    },
    corn: {
        black: {
            low: { fertilizers: ["Urea", "Ammonium Sulfate"], manure: ["Farmyard Manure", "Green Manure"] },
            neutral: { fertilizers: ["Superphosphate", "Potassium Nitrate"], manure: ["Compost", "Vermicompost"] },
            high: { fertilizers: ["Sulfur", "Elemental Sulfur"], manure: ["Peat", "Mushroom Compost"] }
        },
        alluvial: {
            low: { fertilizers: ["Urea", "Ammonium Nitrate"], manure: ["Farmyard Manure", "Green Manure"] },
            neutral: { fertilizers: ["Superphosphate", "Potassium Chloride"], manure: ["Compost", "Vermicompost"] },
            high: { fertilizers: ["Gypsum", "Sulfur"], manure: ["Peat", "Mushroom Compost"] }
        },
        red: {
            low: { fertilizers: ["Ammonium Sulfate", "Urea"], manure: ["Farmyard Manure", "Green Manure"] },
            neutral: { fertilizers: ["Superphosphate", "Potassium Sulfate"], manure: ["Compost", "Vermicompost"] },
            high: { fertilizers: ["Sulfur", "Gypsum"], manure: ["Peat", "Mushroom Compost"] }
        },
        laterite: {
            low: { fertilizers: ["Urea", "Ammonium Sulfate"], manure: ["Farmyard Manure", "Green Manure"] },
            neutral: { fertilizers: ["Triple Superphosphate", "Potassium Chloride"], manure: ["Compost", "Vermicompost"] },
            high: { fertilizers: ["Sulfur", "Gypsum"], manure: ["Peat", "Mushroom Compost"] }
        }
    },
    rice: {
        black: {
            low: { fertilizers: ["Urea", "Ammonium Nitrate"], manure: ["Farmyard Manure", "Green Manure"] },
            neutral: { fertilizers: ["Superphosphate", "Potassium Sulfate"], manure: ["Compost", "Vermicompost"] },
            high: { fertilizers: ["Gypsum", "Sulfur"], manure: ["Peat", "Mushroom Compost"] }
        },
        alluvial: {
            low: { fertilizers: ["Urea", "Ammonium Sulfate"], manure: ["Farmyard Manure", "Green Manure"] },
            neutral: { fertilizers: ["Superphosphate", "Potassium Chloride"], manure: ["Compost", "Vermicompost"] },
            high: { fertilizers: ["Sulfur", "Elemental Sulfur"], manure: ["Peat", "Mushroom Compost"] }
        },
        red: {
            low: { fertilizers: ["Ammonium Nitrate", "Urea"], manure: ["Farmyard Manure", "Green Manure"] },
            neutral: { fertilizers: ["Superphosphate", "Potassium Sulfate"], manure: ["Compost", "Vermicompost"] },
            high: { fertilizers: ["Sulfur", "Gypsum"], manure: ["Peat", "Mushroom Compost"] }
        },
        laterite: {
            low: { fertilizers: ["Urea", "Ammonium Nitrate"], manure: ["Farmyard Manure", "Green Manure"] },
            neutral: { fertilizers: ["Triple Superphosphate", "Potassium Chloride"], manure: ["Compost", "Vermicompost"] },
            high: { fertilizers: ["Sulfur", "Gypsum"], manure: ["Peat", "Mushroom Compost"] }
        }
    },
    barley: {
        black: {
            low: { fertilizers: ["Urea", "Ammonium Nitrate"], manure: ["Farmyard Manure", "Green Manure"] },
            neutral: { fertilizers: ["Superphosphate", "Potassium Nitrate"], manure: ["Compost", "Vermicompost"] },
            high: { fertilizers: ["Sulfur", "Gypsum"], manure: ["Peat", "Mushroom Compost"] }
        },
        alluvial: {
            low: { fertilizers: ["Urea", "Ammonium Sulfate"], manure: ["Farmyard Manure", "Green Manure"] },
            neutral: { fertilizers: ["Superphosphate", "Potassium Chloride"], manure: ["Compost", "Vermicompost"] },
            high: { fertilizers: ["Sulfur", "Elemental Sulfur"], manure: ["Peat", "Mushroom Compost"] }
        },
        red: {
            low: { fertilizers: ["Ammonium Nitrate", "Urea"], manure: ["Farmyard Manure", "Green Manure"] },
            neutral: { fertilizers: ["Superphosphate", "Potassium Sulfate"], manure: ["Compost", "Vermicompost"] },
            high: { fertilizers: ["Sulfur", "Gypsum"], manure: ["Peat", "Mushroom Compost"] }
        },
        laterite: {
            low: { fertilizers: ["Urea", "Ammonium Nitrate"], manure: ["Farmyard Manure", "Green Manure"] },
            neutral: { fertilizers: ["Triple Superphosphate", "Potassium Chloride"], manure: ["Compost", "Vermicompost"] },
            high: { fertilizers: ["Sulfur", "Gypsum"], manure: ["Peat", "Mushroom Compost"] }
        }
    },
    soybean: {
        black: {
            low: { fertilizers: ["Urea", "Ammonium Sulfate"], manure: ["Farmyard Manure", "Green Manure"] },
            neutral: { fertilizers: ["Superphosphate", "Potassium Nitrate"], manure: ["Compost", "Vermicompost"] },
            high: { fertilizers: ["Sulfur", "Elemental Sulfur"], manure: ["Peat", "Mushroom Compost"] }
        },
        alluvial: {
            low: { fertilizers: ["Urea", "Ammonium Nitrate"], manure: ["Farmyard Manure", "Green Manure"] },
            neutral: { fertilizers: ["Superphosphate", "Potassium Chloride"], manure: ["Compost", "Vermicompost"] },
            high: { fertilizers: ["Sulfur", "Gypsum"], manure: ["Peat", "Mushroom Compost"] }
        },
        red: {
            low: { fertilizers: ["Ammonium Nitrate", "Urea"], manure: ["Farmyard Manure", "Green Manure"] },
            neutral: { fertilizers: ["Superphosphate", "Potassium Sulfate"], manure: ["Compost", "Vermicompost"] },
            high: { fertilizers: ["Sulfur", "Gypsum"], manure: ["Peat", "Mushroom Compost"] }
        },
        laterite: {
            low: { fertilizers: ["Urea", "Ammonium Nitrate"], manure: ["Farmyard Manure", "Green Manure"] },
            neutral: { fertilizers: ["Triple Superphosphate", "Potassium Chloride"], manure: ["Compost", "Vermicompost"] },
            high: { fertilizers: ["Sulfur", "Gypsum"], manure: ["Peat", "Mushroom Compost"] }
        }
    }
};

const imageSources = {
    Urea: "urea.jpg",
    "Ammonium Nitrate": "ammonium-nitrate.jpg",
    "Superphosphate": "superphosphate.jpg",
    "Potassium Nitrate": "phosphatenitrate.jpg",
    Sulfur: "sulfur.jpg",
    Gypsum: "gypsum.jpg",
    "Ammonium Sulfate": "ammonium-sulfate.jpg",
    "Potassium Chloride": "potassium-chloride.jpg",
    "Triple Superphosphate": "triple-superphosphate.jpg",
    "Potassium Sulfate": "potassium_sulfate.jpg",
    "Elemental Sulfur": "elemental_sulfur.jpg",
    "Farmyard Manure": "farm-yard Manure.jpg",
    "Green Manure": "green manure.jpg",
    Compost: "compost.jpg",
    Vermicompost: "vermicompost.jpg",
    Peat: "peat.jpg",
    "Mushroom Compost": "mushroomcompost.jpg"
};

function getSuggestions() {
    const crop = document.querySelector("#crop").value;
    const soilType = document.querySelector("#soilType").value;
    const ph = parseFloat(document.querySelector("#ph").value);

    let cropError = '';
    let soilTypeError = '';
    let phError = '';

    if (!crop) {
        cropError = 'Please select a crop.';
    }

    if (!soilType) {
        soilTypeError = 'Please select a soil type.';
    }

    if (isNaN(ph)) {
        phError = 'Please enter a valid pH value.';
    }

    document.querySelector("#cropError").textContent = cropError;
    document.querySelector("#soilTypeError").textContent = soilTypeError;
    document.querySelector("#phError").textContent = phError;

    if (cropError || soilTypeError || phError) {
        return;
    }

    let phCategory;
    if (ph < 5.5) {
        phCategory = "low";
    } else if (ph <= 7.5) {
        phCategory = "neutral";
    } else {
        phCategory = "high";
    }

    const suggestions = fertilizerSuggestions[crop][soilType][phCategory];
    displaySuggestions(suggestions);
}

function displaySuggestions(suggestions) {
    const suggestionsDiv = document.querySelector("#suggestions");
    suggestionsDiv.innerHTML = "";

    const fertilizersDiv = document.createElement("div");
    fertilizersDiv.classList.add("suggestion-category");
    const manureDiv = document.createElement("div");
    manureDiv.classList.add("suggestion-category");

    const fertilizersTitle = document.createElement("h2");
    fertilizersTitle.textContent = "Recommended Fertilizers";
    fertilizersDiv.appendChild(fertilizersTitle);

    suggestions.fertilizers.forEach(fertilizer => {
        const img = document.createElement("img");
        img.src = imageSources[fertilizer];
        img.alt = fertilizer;
        img.classList.add("suggestion-image");
        fertilizersDiv.appendChild(img);
    });

    const manureTitle = document.createElement("h2");
    manureTitle.textContent = "Recommended Manure";
    manureDiv.appendChild(manureTitle);

    suggestions.manure.forEach(manure => {
        const img = document.createElement("img");
        img.src = imageSources[manure];
        img.alt = manure;
        img.classList.add("suggestion-image");
        manureDiv.appendChild(img);
    });

    suggestionsDiv.appendChild(fertilizersDiv);
    suggestionsDiv.appendChild(manureDiv);
}